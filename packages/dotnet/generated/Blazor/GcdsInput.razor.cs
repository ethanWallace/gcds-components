using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;
using System.Text.Json;

namespace GcdsCore.Components;

/// <summary>
/// An input is a space to enter short-form information in response to a question or instruction.
/// </summary>
public partial class GcdsInput : GeneratedComponentBase
{
    protected override IReadOnlyList<string> EventNames => new[] { "gcdsBlur", "gcdsChange", "gcdsError", "gcdsFocus", "gcdsInput", "gcdsSuggestionSelected", "gcdsValid" };

    /// <summary>String to have autocomplete enabled.</summary>
    [Parameter] public string? Autocomplete { get; set; } = default;

    /// <summary>If true, the input will be focused on component render</summary>
    [Parameter] public bool Autofocus { get; set; }

    /// <summary>Specifies if an input element is disabled or not.</summary>
    [Parameter] public bool Disabled { get; set; } = false;

    /// <summary>Error message for an invalid input element.</summary>
    [Parameter] public string? ErrorMessage { get; set; } = default;

    /// <summary>The ID of the form that the input field belongs to.</summary>
    [Parameter] public string? Form { get; set; } = default;

    /// <summary>Specifies if the label is hidden or not.</summary>
    [Parameter] public bool HideLabel { get; set; } = false;

    /// <summary>Hint displayed below the label and above the input field.</summary>
    [Parameter] public string? Hint { get; set; } = default;

    /// <summary>(required) Id attribute for an input element.</summary>
    [Parameter] public string? InputId { get; set; } = default;

    [Parameter] public GcdsInputInputmodeValue? Inputmode { get; set; } = default;

    /// <summary>(required) Form field label</summary>
    [Parameter] public string? Label { get; set; } = default;

    /// <summary>The maximum value that the input field can accept. Only applies to number input type.</summary>
    [Parameter] public string? Max { get; set; } = default;

    /// <summary>The maximum number of characters that the input field can accept.</summary>
    [Parameter] public double? Maxlength { get; set; } = default;

    /// <summary>The minimum value that the input field can accept. Only applies to number input type.</summary>
    [Parameter] public string? Min { get; set; } = default;

    /// <summary>The minimum number of characters that the input field can accept.</summary>
    [Parameter] public double? Minlength { get; set; } = default;

    /// <summary>(required) Name attribute for an input element.</summary>
    [Parameter] public string? Name { get; set; } = default;

    /// <summary>Specifies a regular expression the form control's value should match. See: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/pattern</summary>
    [Parameter] public string? Pattern { get; set; } = default;

    /// <summary>If true, the input field cannot be modified.</summary>
    [Parameter] public bool Readonly { get; set; }

    /// <summary>Specifies if a form field is required or not.</summary>
    [Parameter] public bool Required { get; set; } = false;

    /// <summary>Size attribute for an input element to provide a visual indication of the expected text length to the user.</summary>
    [Parameter] public double? Size { get; set; } = default;

    /// <summary>A number that specifies the granularity that the value must adhere to. Valid for number type. See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#step</summary>
    [Parameter] public string? Step { get; set; } = default;

    /// <summary>Array of suggestion options. This creates a datalist element with options to represent permissible or recommended options available to choose from.</summary>
    [Parameter] public string? Suggestions { get; set; } = default;

    /// <summary>Set Input types</summary>
    [Parameter] public GcdsInputTypeValue? Type { get; set; } = default;

    /// <summary>Set event to call validator</summary>
    [Parameter] public GcdsInputValidateOnValue? ValidateOn { get; set; } = default;

    /// <summary>Default value for an input element.</summary>
    [Parameter] public string? Value { get; set; } = default;

    /// <summary>Emitted when the input loses focus.</summary>
    [Parameter] public EventCallback<CustomEventArgs> OnGcdsBlur { get; set; }

    /// <summary>Emitted when the input has changed.</summary>
    [Parameter] public EventCallback<CustomEventArgs> OnGcdsChange { get; set; }

    /// <summary>Emitted when the input has a validation error.</summary>
    [Parameter] public EventCallback<CustomEventArgs> OnGcdsError { get; set; }

    /// <summary>Emitted when the input has focus.</summary>
    [Parameter] public EventCallback<CustomEventArgs> OnGcdsFocus { get; set; }

    /// <summary>Emitted when the element has received input.</summary>
    [Parameter] public EventCallback<CustomEventArgs> OnGcdsInput { get; set; }

    /// <summary>Emitted when a suggestion is selected.</summary>
    [Parameter] public EventCallback<CustomEventArgs> OnGcdsSuggestionSelected { get; set; }

    /// <summary>Emitted when the input has a validation error.</summary>
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
    public async Task HandleGcdsSuggestionSelected(CustomEventArgs args) => await OnGcdsSuggestionSelected.InvokeAsync(args);

    [JSInvokable]
    public async Task HandleGcdsValid(CustomEventArgs args) => await OnGcdsValid.InvokeAsync(args);

}
