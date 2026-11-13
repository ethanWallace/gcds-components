using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.Forms;
using Microsoft.AspNetCore.Components.Web;
using Microsoft.JSInterop;
using System.Collections.Generic;
using System.Text.Json;

namespace GcdsCore.Components;

public abstract class GeneratedInputBase<TValue> : InputBase<TValue>, IAsyncDisposable
{
    /// <summary>
    /// Placeholder target for the fallback <see cref="ValueExpression"/>. Blazor only supplies
    /// that expression for bind-Value, and FieldIdentifier.Create rejects constant expressions,
    /// so the fallback has to point at a real member.
    /// </summary>
    private TValue _valueExpressionAnchor = default!;

    /// <summary>
    /// InputBase throws unless ValueExpression is set, so a consumer that passes Value or
    /// ValueChanged without bind-Value would otherwise fail to render. Blazor overwrites this
    /// with the real expression whenever bind-Value is used.
    /// </summary>
    protected GeneratedInputBase()
    {
        ValueExpression = () => _valueExpressionAnchor;
    }

    [Inject] protected IJSRuntime JS { get; set; } = default!;

    [Parameter] public string? Class { get; set; }

    [Parameter] public string? Style { get; set; }

    /// <summary>
    /// Binds the value on every keystroke (the input event) instead of only when the change is
    /// committed (the change event, typically on blur), so the model stays current while the user
    /// types. Generated components only expose it when the element declares both events.
    /// </summary>
    [Parameter] public bool Immediate { get; set; }

    protected ElementReference Element { get; set; }

    private readonly HashSet<string> _renderedAttributes = new(StringComparer.Ordinal);

    protected object? RenderAttribute(string name, object? value, object? defaultValue = null)
    {
        if (value is not null)
        {
            _renderedAttributes.Add(name);
            return value;
        }

        return _renderedAttributes.Contains(name) ? defaultValue : null;
    }

    /// <summary>
    /// Writes a boolean attribute that the element defaults to on, so false has to be stated
    /// explicitly: omitting the attribute would leave the element's own default in place.
    /// True is written as bare presence, which every boolean attribute reads as on.
    /// </summary>
    /// <param name="name">The attribute name.</param>
    /// <param name="value">The parameter value, or null to leave the attribute to the element.</param>
    /// <param name="offValue">Attribute text that the element reads as false.</param>
    protected object? RenderOnOffAttribute(string name, bool? value, string offValue)
    {
        if (value is not null)
        {
            _renderedAttributes.Add(name);
            if (value.Value) return true;
            return offValue;
        }

        // Reverting to null after the attribute was written restores the element's default, which is on.
        return _renderedAttributes.Contains(name) ? true : null;
    }

    /// <summary>
    /// Writes a collection-valued attribute as JSON. A collection's ToString yields the CLR type
    /// name rather than its contents, so it is serialized instead.
    /// </summary>
    /// <param name="name">The attribute name.</param>
    /// <param name="value">The collection, or null to leave the attribute to the element.</param>
    /// <param name="defaultValue">Attribute text to restore once the attribute has been written.</param>
    protected string? RenderJsonAttribute(string name, object? value, string? defaultValue = null)
    {
        if (value is not null)
        {
            _renderedAttributes.Add(name);
            return JsonSerializer.Serialize(value);
        }

        return _renderedAttributes.Contains(name) ? defaultValue : null;
    }

    protected string? GetCssClass()
        => JoinAttribute("class", Class);

    protected string? GetStyle()
        => JoinAttribute("style", Style);

    private string? JoinAttribute(string name, string? value)
    {
        object? additional = null;
        AdditionalAttributes?.TryGetValue(name, out additional);
        return string.IsNullOrWhiteSpace(additional?.ToString()) ? value : string.IsNullOrWhiteSpace(value?.ToString())
            ? additional?.ToString()
            : $"{additional} {value}";
    }

    protected virtual IReadOnlyList<string> EventNames => Array.Empty<string>();

    protected virtual string? LiveValuePropertyName => null;

    private object? _lastLiveValue;
    private bool _hasLiveValue;

    private DotNetObjectReference<GeneratedInputBase<TValue>>? _selfReference;

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        await base.OnAfterRenderAsync(firstRender);
        if (firstRender && EventNames.Count > 0)
        {
            _selfReference = DotNetObjectReference.Create(this);
            await JS.InvokeVoidAsync("customElementInterop.bindEvents", Element, _selfReference, EventNames);
        }

        if (LiveValuePropertyName is not null)
        {
            var currentValue = CurrentValue;
            if (firstRender || !_hasLiveValue)
            {
                _lastLiveValue = currentValue;
                _hasLiveValue = true;
            }
            else if (!Equals(_lastLiveValue, currentValue))
            {
                _lastLiveValue = currentValue;
                await JS.InvokeVoidAsync("customElementInterop.syncProperty", Element, LiveValuePropertyName, currentValue);
            }
        }
    }

    protected virtual Task HandleValueChanged(ChangeEventArgs args)
    {
        CurrentValueAsString = args.Value?.ToString();
        return Task.CompletedTask;
    }

    protected Task InvokeVoidMethodAsync(string methodName, object?[] args)
        => JS.InvokeVoidAsync("customElementInterop.invokeMethod", Element, methodName, args).AsTask();

    protected Task<T> InvokeMethodAsync<T>(string methodName, object?[] args)
        => JS.InvokeAsync<T>("customElementInterop.invokeMethod", Element, methodName, args).AsTask();

    public Task SetElementValidityAsync(string message)
        => InvokeVoidMethodAsync("setCustomValidity", new object?[] { message });

    public Task ResetElementValidityAsync()
        => InvokeVoidMethodAsync("resetValidity", Array.Empty<object?>());

    public async ValueTask DisposeAsync()
    {
        if (_selfReference is null)
        {
            return;
        }

        try
        {
            await JS.InvokeVoidAsync("customElementInterop.unbindEvents", Element);
        }
        catch (JSDisconnectedException)
        {
            // The circuit disconnected before this component was disposed, so the browser and its
            // listeners are already gone. There is nothing left to unbind, and letting the call
            // throw here would surface as an unhandled circuit error.
        }
        finally
        {
            _selfReference.Dispose();
        }
    }
}
