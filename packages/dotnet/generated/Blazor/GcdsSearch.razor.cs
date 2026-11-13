using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;
using System.Text.Json;

namespace GcdsCore.Components;

/// <summary>
/// Search is a space for entering keywords to find relevant information.
/// </summary>
public partial class GcdsSearch : GeneratedComponentBase
{
    protected override IReadOnlyList<string> EventNames => new[] { "gcdsBlur", "gcdsChange", "gcdsFocus", "gcdsInput", "gcdsSubmit" };

    /// <summary>Sets the action for the search form. Default will be canada.ca global search</summary>
    [Parameter] public string? Action { get; set; } = "'/sr/srb.html'";

    /// <summary>Set the form method of the search form</summary>
    [Parameter] public GcdsSearchMethodValue? Method { get; set; } = default;

    /// <summary>Set the name of the search input</summary>
    [Parameter] public string? Name { get; set; } = "'q'";

    /// <summary>Set the placeholder and label for the search input. Becomes "Search [placeholder]"</summary>
    [Parameter] public string? Placeholder { get; set; } = "'Canada.ca'";

    /// <summary>Set the id of the search input</summary>
    [Parameter] public string? SearchId { get; set; } = "'search'";

    /// <summary>Set a list of predefined search terms</summary>
    [Parameter] public IReadOnlyList<string?>? Suggested { get; set; } = default;

    /// <summary>Set the value of the search input</summary>
    [Parameter] public string? Value { get; set; } = default;

    /// <summary>Emitted when the search input has lost focus.</summary>
    [Parameter] public EventCallback<CustomEventArgs> OnGcdsBlur { get; set; }

    /// <summary>Emitted when the search input value has changed.</summary>
    [Parameter] public EventCallback<CustomEventArgs> OnGcdsChange { get; set; }

    /// <summary>Emitted when the search input has gained focus.</summary>
    [Parameter] public EventCallback<CustomEventArgs> OnGcdsFocus { get; set; }

    /// <summary>Emitted when the search element has received input.</summary>
    [Parameter] public EventCallback<CustomEventArgs> OnGcdsInput { get; set; }

    /// <summary>Emitted when the search form has submitted.</summary>
    [Parameter] public EventCallback<CustomEventArgs> OnGcdsSubmit { get; set; }

    [JSInvokable]
    public async Task HandleGcdsBlur(CustomEventArgs args) => await OnGcdsBlur.InvokeAsync(args);

    [JSInvokable]
    public async Task HandleGcdsChange(CustomEventArgs args) => await OnGcdsChange.InvokeAsync(args);

    [JSInvokable]
    public async Task HandleGcdsFocus(CustomEventArgs args) => await OnGcdsFocus.InvokeAsync(args);

    [JSInvokable]
    public async Task HandleGcdsInput(CustomEventArgs args) => await OnGcdsInput.InvokeAsync(args);

    [JSInvokable]
    public async Task HandleGcdsSubmit(CustomEventArgs args) => await OnGcdsSubmit.InvokeAsync(args);

}
