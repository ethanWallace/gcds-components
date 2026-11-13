using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;
using System.Text.Json;

namespace GcdsCore.Components;

/// <summary>
/// An error summary is a list of user errors in a form.
/// </summary>
public partial class GcdsErrorSummary : GeneratedComponentBase
{
    protected override IReadOnlyList<string> EventNames => new[] { "gcdsBlur", "gcdsClick", "gcdsFocus" };

    /// <summary>Object of list items for error list. Format: { link-href: link-label }</summary>
    [Parameter] public string? ErrorLinks { get; set; } = default;

    /// <summary>Set error summary heading</summary>
    [Parameter] public string? Heading { get; set; } = default;

    /// <summary>Specifies if the error summary should listen for GcdsError event to generate error list.</summary>
    [Parameter] public bool? Listen { get; set; }

    /// <summary>Emitted when the link loses focus.</summary>
    [Parameter] public EventCallback<CustomEventArgs> OnGcdsBlur { get; set; }

    /// <summary>Emitted when the link has been clicked.</summary>
    [Parameter] public EventCallback<CustomEventArgs> OnGcdsClick { get; set; }

    /// <summary>Emitted when the link has focus.</summary>
    [Parameter] public EventCallback<CustomEventArgs> OnGcdsFocus { get; set; }

    [JSInvokable]
    public async Task HandleGcdsBlur(CustomEventArgs args) => await OnGcdsBlur.InvokeAsync(args);

    [JSInvokable]
    public async Task HandleGcdsClick(CustomEventArgs args) => await OnGcdsClick.InvokeAsync(args);

    [JSInvokable]
    public async Task HandleGcdsFocus(CustomEventArgs args) => await OnGcdsFocus.InvokeAsync(args);

}
