using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;
using System.Text.Json;

namespace GcdsCore.Components;

/// <summary>
/// Radios provide a set of options for a single response.
/// </summary>
public partial class GcdsRadios : GeneratedComponentBase
{
    protected override IReadOnlyList<string> EventNames => new[] { "gcdsBlur", "gcdsChange", "gcdsError", "gcdsFocus", "gcdsInput", "gcdsValid" };

    /// <summary>If true, the input will be focused on component render</summary>
    [Parameter] public bool Autofocus { get; set; }

    /// <summary>Specifies if an input element is disabled or not.</summary>
    [Parameter] public bool Disabled { get; set; }

    /// <summary>Set this to display an error message for invalid radios</summary>
    [Parameter] public string? ErrorMessage { get; set; } = default;

    /// <summary>The ID of the form that the radios belong to.</summary>
    [Parameter] public string? Form { get; set; } = default;

    /// <summary>Specifies if the legend is hidden or not.</summary>
    [Parameter] public bool HideLegend { get; set; } = false;

    /// <summary>Hint displayed below the label and above the radio elements</summary>
    [Parameter] public string? Hint { get; set; } = default;

    /// <summary>(required) Label or legend for the group of radio elements</summary>
    [Parameter] public string? Legend { get; set; } = default;

    /// <summary>(required) The `name` attribute for the radios, used to group radio elements together</summary>
    [Parameter] public string? Name { get; set; } = default;

    /// <summary>(required) Options to render radio buttons</summary>
    [Parameter] public string? Options { get; set; } = default;

    /// <summary>Specifies if a form field is required or not.</summary>
    [Parameter] public bool Required { get; set; }

    /// <summary>Set event to call validator</summary>
    [Parameter] public GcdsRadiosValidateOnValue? ValidateOn { get; set; } = default;

    /// <summary>Default value for the element</summary>
    [Parameter] public string? Value { get; set; } = default;

    /// <summary>Emitted when the radios has lost focus</summary>
    [Parameter] public EventCallback<CustomEventArgs> OnGcdsBlur { get; set; }

    /// <summary>Emitted when a radios option is checked (but not when unchecked). Contains new value in event detail</summary>
    [Parameter] public EventCallback<CustomEventArgs> OnGcdsChange { get; set; }

    /// <summary>Emitted when radios has a validation error</summary>
    [Parameter] public EventCallback<CustomEventArgs> OnGcdsError { get; set; }

    /// <summary>Emitted when radios has received focus</summary>
    [Parameter] public EventCallback<CustomEventArgs> OnGcdsFocus { get; set; }

    /// <summary>Emitted when radios has been changed as a direct result of a user action (a radio option has been selected). Contains new value in event detail</summary>
    [Parameter] public EventCallback<CustomEventArgs> OnGcdsInput { get; set; }

    /// <summary>Emitted when radios has passed validation</summary>
    [Parameter] public EventCallback<CustomEventArgs> OnGcdsValid { get; set; }

    public Task<bool> CheckValidityAsync() => InvokeMethodAsync<bool>("checkValidity", new object?[] {  });

    public Task<string?> GetValidationMessageAsync() => InvokeMethodAsync<string?>("getValidationMessage", new object?[] {  });

    public Task ValidateAsync() => InvokeVoidMethodAsync("validate", new object?[] {  });

    [JSInvokable]
    public async Task HandleGcdsBlur(CustomEventArgs args) => await OnGcdsBlur.InvokeAsync(args);

    [JSInvokable]
    public async Task HandleGcdsChange(CustomEventArgs args) => await OnGcdsChange.InvokeAsync(args);

    [JSInvokable]
    public async Task HandleGcdsError(CustomEventArgs args) => await OnGcdsError.InvokeAsync(args);

    [JSInvokable]
    public async Task HandleGcdsFocus(CustomEventArgs args) => await OnGcdsFocus.InvokeAsync(args);

    [JSInvokable]
    public async Task HandleGcdsInput(CustomEventArgs args) => await OnGcdsInput.InvokeAsync(args);

    [JSInvokable]
    public async Task HandleGcdsValid(CustomEventArgs args) => await OnGcdsValid.InvokeAsync(args);

}
