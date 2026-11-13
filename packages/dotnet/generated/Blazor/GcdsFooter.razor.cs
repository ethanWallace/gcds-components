using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;
using System.Text.Json;

namespace GcdsCore.Components;

/// <summary>
/// The footer is the responsive Government of Canada branded footer landmark.
/// </summary>
public partial class GcdsFooter : GeneratedComponentBase
{
    protected override IReadOnlyList<string> EventNames => new[] { "gcdsBlur", "gcdsClick", "gcdsFocus" };

    /// <summary>Heading for contextual slot and nav landmark</summary>
    [Parameter] public string? ContextualHeading { get; set; } = default;

    /// <summary>Object of list items for contextual band. Format: { link-label: link-href }</summary>
    [Parameter] public string? ContextualLinks { get; set; } = default;

    /// <summary>Display mode of the footer</summary>
    [Parameter] public GcdsFooterDisplayValue? Display { get; set; } = default;

    /// <summary>Object of list items for sub-footer. Format: { link-label: link-href }</summary>
    [Parameter] public string? SubLinks { get; set; } = default;

    /// <summary>Emitted when the link loses focus.</summary>
    [Parameter] public EventCallback<CustomEventArgs> OnGcdsBlur { get; set; }

    /// <summary>Emitted when the link has been clicked. Contains the href in the event detail.</summary>
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
