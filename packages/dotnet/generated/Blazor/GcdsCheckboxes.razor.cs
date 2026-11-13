using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;
using System.Text.Json;

namespace GcdsCore.Components;

/// <summary>
/// Checkboxes provide a set of options for multiple responses.
/// </summary>
public partial class GcdsCheckboxes : GeneratedComponentBase
{
    protected override IReadOnlyList<string> EventNames => new[] { "gcdsBlur", "gcdsChange", "gcdsClick", "gcdsError", "gcdsFocus", "gcdsInput", "gcdsValid" };

    /// <summary>If true, the checkbox will be focused on component render</summary>
    [Parameter] public bool Autofocus { get; set; }

    /// <summary>Specifies if the checkboxes are disabled or not.</summary>
    [Parameter] public bool Disabled { get; set; }

    /// <summary>Set this to display an error message for invalid &lt;gcds-checkboxes&gt;</summary>
    [Parameter] public string? ErrorMessage { get; set; } = default;

    /// <summary>The ID of the form that the checkboxes belong to.</summary>
    [Parameter] public string? Form { get; set; } = default;

    /// <summary>For single checkbox, specifies if the label is hidden or not.</summary>
    [Parameter] public bool HideLabel { get; set; } = false;

    /// <summary>For checkbox groups, specifies if the legend is hidden or not.</summary>
    [Parameter] public bool HideLegend { get; set; } = false;

    /// <summary>Hint displayed below the label.</summary>
    [Parameter] public string? Hint { get; set; } = default;

    /// <summary>Set the legend for fieldset form group.</summary>
    [Parameter] public string? Legend { get; set; } = default;

    /// <summary>(required) Name attribute for a checkboxes element.</summary>
    [Parameter] public string? Name { get; set; } = default;

    /// <summary>(required) Options to render checkboxes buttons</summary>
    [Parameter] public string? Options { get; set; } = default;

    /// <summary>Specifies if the checkboxes are required or not.</summary>
    [Parameter] public bool Required { get; set; }

    /// <summary>Set event to call validator</summary>
    [Parameter] public GcdsCheckboxesValidateOnValue? ValidateOn { get; set; } = default;

    /// <summary>Value for checkboxes component.</summary>
    [Parameter] public IReadOnlyList<string?>? Value { get; set; } = default;

    /// <summary>Emitted when the checkbox loses focus.</summary>
    [Parameter] public EventCallback<CustomEventArgs> OnGcdsBlur { get; set; }

    /// <summary>Emitted when a checkbox has been changed. Contains the new value in the event detail.</summary>
    [Parameter] public EventCallback<CustomEventArgs> OnGcdsChange { get; set; }

    /// <summary>Emitted when the checkbox has been clicked.</summary>
    [Parameter] public EventCallback<CustomEventArgs> OnGcdsClick { get; set; }

    /// <summary>Emitted when the checkbox has a validation error.</summary>
    [Parameter] public EventCallback<CustomEventArgs> OnGcdsError { get; set; }

    /// <summary>Emitted when the checkbox has focus.</summary>
    [Parameter] public EventCallback<CustomEventArgs> OnGcdsFocus { get; set; }

    /// <summary>Emitted when a checkbox has been inputted. Contains the new value in the event detail.</summary>
    [Parameter] public EventCallback<CustomEventArgs> OnGcdsInput { get; set; }

    /// <summary>Emitted when the checkbox has a validation error.</summary>
    [Parameter] public EventCallback<CustomEventArgs> OnGcdsValid { get; set; }

    public Task<bool> CheckValidityAsync() => InvokeMethodAsync<bool>("checkValidity", new object?[] {  });

    public Task<string?> GetValidationMessageAsync() => InvokeMethodAsync<string?>("getValidationMessage", new object?[] {  });

    public Task ValidateAsync() => InvokeVoidMethodAsync("validate", new object?[] {  });

    [JSInvokable]
    public async Task HandleGcdsBlur(CustomEventArgs args) => await OnGcdsBlur.InvokeAsync(args);

    [JSInvokable]
    public async Task HandleGcdsChange(CustomEventArgs args) => await OnGcdsChange.InvokeAsync(args);

    [JSInvokable]
    public async Task HandleGcdsClick(CustomEventArgs args) => await OnGcdsClick.InvokeAsync(args);

    [JSInvokable]
    public async Task HandleGcdsError(CustomEventArgs args) => await OnGcdsError.InvokeAsync(args);

    [JSInvokable]
    public async Task HandleGcdsFocus(CustomEventArgs args) => await OnGcdsFocus.InvokeAsync(args);

    [JSInvokable]
    public async Task HandleGcdsInput(CustomEventArgs args) => await OnGcdsInput.InvokeAsync(args);

    [JSInvokable]
    public async Task HandleGcdsValid(CustomEventArgs args) => await OnGcdsValid.InvokeAsync(args);

}
