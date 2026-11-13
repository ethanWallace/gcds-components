using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;
using System.Text.Json;

namespace GcdsCore.Components;

/// <summary>
/// A link is a navigational element that brings a person to a new page, website, file, or section on the current page.
/// </summary>
public partial class GcdsLink : GeneratedComponentBase
{
    protected override IReadOnlyList<string> EventNames => new[] { "gcdsBlur", "gcdsClick", "gcdsFocus" };

    /// <summary>Sets the display behavior of the link</summary>
    [Parameter] public GcdsLinkDisplayValue? Display { get; set; } = default;

    /// <summary>The download attribute specifies that the target (the file specified in the href attribute) will be downloaded when a user clicks on the hyperlink</summary>
    [Parameter] public string? Download { get; set; } = default;

    /// <summary>Whether the link is external or not</summary>
    [Parameter] public bool External { get; set; } = false;

    /// <summary>(required) The href attribute specifies the URL of the page the link goes to</summary>
    [Parameter] public string? Href { get; set; } = default;

    /// <summary>Sets the main style of the link.</summary>
    [Parameter] public GcdsLinkLinkRoleValue? LinkRole { get; set; } = default;

    /// <summary>The rel attribute specifies the relationship between the current document and the linked document</summary>
    [Parameter] public string? Rel { get; set; } = default;

    /// <summary>Set the link size</summary>
    [Parameter] public GcdsLinkSizeValue? Size { get; set; } = default;

    /// <summary>The target attribute specifies where to open the linked document</summary>
    [Parameter] public string? Target { get; set; } = "'_self'";

    /// <summary>The type specifies the media type of the linked document</summary>
    [Parameter] public string? Type { get; set; } = default;

    /// <summary>Emitted when the link loses focus.</summary>
    [Parameter] public EventCallback<CustomEventArgs> OnGcdsBlur { get; set; }

    /// <summary>Emitted when the link has been clicked. Contains the href in the event detail.</summary>
    [Parameter] public EventCallback<CustomEventArgs> OnGcdsClick { get; set; }

    /// <summary>Emitted when the link has focus.</summary>
    [Parameter] public EventCallback<CustomEventArgs> OnGcdsFocus { get; set; }

    [Parameter] public RenderFragment? ChildContent { get; set; }

    [JSInvokable]
    public async Task HandleGcdsBlur(CustomEventArgs args) => await OnGcdsBlur.InvokeAsync(args);

    [JSInvokable]
    public async Task HandleGcdsClick(CustomEventArgs args) => await OnGcdsClick.InvokeAsync(args);

    [JSInvokable]
    public async Task HandleGcdsFocus(CustomEventArgs args) => await OnGcdsFocus.InvokeAsync(args);

}
