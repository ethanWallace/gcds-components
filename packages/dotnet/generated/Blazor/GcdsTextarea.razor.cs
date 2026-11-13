using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;
using System.Text.Json;

namespace GcdsCore.Components;

/// <summary>
/// A text area is a space to enter long-form information in response to a question or instruction.
/// </summary>
public partial class GcdsTextarea : GeneratedComponentBase
{
    protected override IReadOnlyList<string> EventNames => new[] { "gcdsBlur", "gcdsChange", "gcdsError", "gcdsFocus", "gcdsInput", "gcdsValid" };

    /// <summary>If true, the textarea will be focused on component render.</summary>
    [Parameter] public bool Autofocus { get; set; }

    /// <summary>Defines width for textarea cols (the min-width for textarea's is 50%).</summary>
    [Parameter] public double? Cols { get; set; } = default;

    /// <summary>Specifies if a textarea element is disabled or not.</summary>
    [Parameter] public bool Disabled { get; set; } = false;

    /// <summary>Error message for an invalid textarea element.</summary>
    [Parameter] public string? ErrorMessage { get; set; } = default;

    /// <summary>The ID of the form that the textarea belongs to.</summary>
    [Parameter] public string? Form { get; set; } = default;

    /// <summary>Specifies if the label is hidden or not.</summary>
    [Parameter] public bool HideLabel { get; set; } = false;

    /// <summary>If true, character limit counter will not be displayed under the textarea.</summary>
    [Parameter] public bool HideLimit { get; set; } = false;

    /// <summary>Hint displayed below the label and above the textarea field.</summary>
    [Parameter] public string? Hint { get; set; } = default;

    /// <summary>(required) Form field label</summary>
    [Parameter] public string? Label { get; set; } = default;

    /// <summary>The maximum number of characters that the textarea field can accept.</summary>
    [Parameter] public double? Maxlength { get; set; } = default;

    /// <summary>The minimum number of characters that the textarea field can accept.</summary>
    [Parameter] public double? Minlength { get; set; } = default;

    /// <summary>(required) Name attribute for a textarea element.</summary>
    [Parameter] public string? Name { get; set; } = default;

    /// <summary>Specifies if a form field is required or not.</summary>
    [Parameter] public bool Required { get; set; } = false;

    /// <summary>Default value for textarea rows.</summary>
    [Parameter] public double? Rows { get; set; } = 5;

    /// <summary>(required) Id attribute for a textarea element.</summary>
    [Parameter] public string? TextareaId { get; set; } = default;

    /// <summary>Set event to call validator</summary>
    [Parameter] public GcdsTextareaValidateOnValue? ValidateOn { get; set; } = default;

    /// <summary>Default value for an input element.</summary>
    [Parameter] public string? Value { get; set; } = default;

    /// <summary>Emitted when the textarea loses focus.</summary>
    [Parameter] public EventCallback<CustomEventArgs> OnGcdsBlur { get; set; }

    /// <summary>Emitted when the textarea has changed.</summary>
    [Parameter] public EventCallback<CustomEventArgs> OnGcdsChange { get; set; }

    /// <summary>Emitted when the textarea has a validation error.</summary>
    [Parameter] public EventCallback<CustomEventArgs> OnGcdsError { get; set; }

    /// <summary>Emitted when the textarea has focus.</summary>
    [Parameter] public EventCallback<CustomEventArgs> OnGcdsFocus { get; set; }

    /// <summary>Emitted when the textarea has received input.</summary>
    [Parameter] public EventCallback<CustomEventArgs> OnGcdsInput { get; set; }

    /// <summary>Emitted when the textarea has a validation error.</summary>
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
