using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;
using System.Text.Json;

namespace GcdsCore.Components;

/// <summary>
/// A date input is a space to enter a known date.
/// </summary>
public partial class GcdsDateInput : GeneratedComponentBase
{
    protected override IReadOnlyList<string> EventNames => new[] { "gcdsBlur", "gcdsChange", "gcdsError", "gcdsFocus", "gcdsInput", "gcdsValid" };

    /// <summary>String to have autocomplete enabled.</summary>
    [Parameter] public GcdsDateInputAutocompleteValue? Autocomplete { get; set; } = default;

    /// <summary>If true, the date-input will be focused on component render</summary>
    [Parameter] public bool Autofocus { get; set; }

    /// <summary>Specifies if the date input is disabled or not.</summary>
    [Parameter] public bool Disabled { get; set; } = false;

    /// <summary>Error message displayed below the legend and above form fields.</summary>
    [Parameter] public string? ErrorMessage { get; set; } = default;

    /// <summary>The ID of the form that the date-input field belongs to.</summary>
    [Parameter] public string? Form { get; set; } = default;

    /// <summary>(required) Set this property to full to show month, day, and year form elements. Set it to compact to show only the month and year form elements. Set it to `iso` to use numeric month input and `YYYY-MM-DD` entry order.</summary>
    [Parameter] public GcdsDateInputFormatValue? Format { get; set; } = default;

    /// <summary>Hint displayed below the legend and above form fields.</summary>
    [Parameter] public string? Hint { get; set; } = default;

    /// <summary>(required) Fieldset legend</summary>
    [Parameter] public string? Legend { get; set; } = default;

    /// <summary>The maximum date that the date-input field can accept. Format: YYYY-MM-DD or YYYY-MM</summary>
    [Parameter] public string? Max { get; set; } = default;

    /// <summary>The minimum date that the date-input field can accept. Format: YYYY-MM-DD or YYYY-MM</summary>
    [Parameter] public string? Min { get; set; } = default;

    /// <summary>(required) Name attribute for the date input.</summary>
    [Parameter] public string? Name { get; set; } = default;

    /// <summary>Specifies if a form field is required or not.</summary>
    [Parameter] public bool Required { get; set; } = false;

    /// <summary>Set event to call validator</summary>
    [Parameter] public GcdsDateInputValidateOnValue? ValidateOn { get; set; } = default;

    /// <summary>Combined date value from the two/three form elements. Format: YYYY-MM-DD or YYYY-MM</summary>
    [Parameter] public string? Value { get; set; } = default;

    /// <summary>Emitted when a date-input loses focus.</summary>
    [Parameter] public EventCallback<CustomEventArgs> OnGcdsBlur { get; set; }

    /// <summary>Emitted when a date-input has changed. Contains the new value in the event detail.</summary>
    [Parameter] public EventCallback<CustomEventArgs> OnGcdsChange { get; set; }

    /// <summary>Emitted when a date-input has a validation error.</summary>
    [Parameter] public EventCallback<CustomEventArgs> OnGcdsError { get; set; }

    /// <summary>Emitted when a date-input has focus.</summary>
    [Parameter] public EventCallback<CustomEventArgs> OnGcdsFocus { get; set; }

    /// <summary>Emitted when the date-input has received input. Contains the new value in the event detail.</summary>
    [Parameter] public EventCallback<CustomEventArgs> OnGcdsInput { get; set; }

    /// <summary>Emitted when a date-input has validated.</summary>
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
