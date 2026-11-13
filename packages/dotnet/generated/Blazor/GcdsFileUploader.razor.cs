using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;
using System.Text.Json;

namespace GcdsCore.Components;

/// <summary>
/// A file uploader is a space to select and add supporting documentation.
/// </summary>
public partial class GcdsFileUploader : GeneratedComponentBase
{
    protected override IReadOnlyList<string> EventNames => new[] { "gcdsBlur", "gcdsChange", "gcdsError", "gcdsFocus", "gcdsInput", "gcdsRemoveFile", "gcdsValid" };

    /// <summary>Defines the file types the file uploader accepts.</summary>
    [Parameter] public string? Accept { get; set; } = default;

    /// <summary>If true, the file uploader will be focused on component render</summary>
    [Parameter] public bool Autofocus { get; set; }

    /// <summary>Specifies if a file uploader element is disabled or not.</summary>
    [Parameter] public bool Disabled { get; set; } = false;

    /// <summary>Error message for an invalid file uploader element.</summary>
    [Parameter] public string? ErrorMessage { get; set; } = default;

    /// <summary>The ID of the form that the file uploader field belongs to.</summary>
    [Parameter] public string? Form { get; set; } = default;

    /// <summary>Specifies if the label is hidden or not.</summary>
    [Parameter] public bool HideLabel { get; set; } = false;

    /// <summary>Hint displayed below the label.</summary>
    [Parameter] public string? Hint { get; set; } = default;

    /// <summary>(required) Form field label.</summary>
    [Parameter] public string? Label { get; set; } = default;

    /// <summary>Boolean that specifies if the user is allowed to select more than one file.</summary>
    [Parameter] public bool Multiple { get; set; }

    /// <summary>(required) Name attribute for file input element.</summary>
    [Parameter] public string? Name { get; set; } = default;

    /// <summary>Specifies if a form field is required or not.</summary>
    [Parameter] public bool Required { get; set; } = false;

    /// <summary>(required) Id attribute for a file uploader element.</summary>
    [Parameter] public string? UploaderId { get; set; } = default;

    /// <summary>Set event to call validator</summary>
    [Parameter] public GcdsFileUploaderValidateOnValue? ValidateOn { get; set; } = default;

    /// <summary>Emitted when the uploader loses focus.</summary>
    [Parameter] public EventCallback<CustomEventArgs> OnGcdsBlur { get; set; }

    /// <summary>Emitted when the user has made a file selection. Contains the new value in the event detail.</summary>
    [Parameter] public EventCallback<CustomEventArgs> OnGcdsChange { get; set; }

    /// <summary>Emitted when the uploader has a validation error.</summary>
    [Parameter] public EventCallback<CustomEventArgs> OnGcdsError { get; set; }

    /// <summary>Emitted when the uploader has focus.</summary>
    [Parameter] public EventCallback<CustomEventArgs> OnGcdsFocus { get; set; }

    /// <summary>Emitted when the user has uploaded a file. Contains the new value in the event detail.</summary>
    [Parameter] public EventCallback<CustomEventArgs> OnGcdsInput { get; set; }

    /// <summary>Remove file and update value.</summary>
    [Parameter] public EventCallback<CustomEventArgs> OnGcdsRemoveFile { get; set; }

    /// <summary>Emitted when the uploader has a validation error.</summary>
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
    public async Task HandleGcdsRemoveFile(CustomEventArgs args) => await OnGcdsRemoveFile.InvokeAsync(args);

    [JSInvokable]
    public async Task HandleGcdsValid(CustomEventArgs args) => await OnGcdsValid.InvokeAsync(args);

}
