using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;
using System.Text.Json;

namespace GcdsCore.Components;

/// <summary>
/// A card is a box containing structured, actionable content on a single topic.
/// </summary>
public partial class GcdsCard : GeneratedComponentBase
{
    protected override IReadOnlyList<string> EventNames => new[] { "gcdsBlur", "gcdsClick", "gcdsFocus" };

    /// <summary>The badge attribute specifies the badge text that appears in the top left corner of the card. 20 character limit.</summary>
    [Parameter] public string? Badge { get; set; } = default;

    /// <summary>(required) The card title attribute specifies the title that appears on the card</summary>
    [Parameter] public string? CardTitle { get; set; } = default;

    /// <summary>The card title tag property specifies the HTML heading element for the title. This property does not modify the font size. It is used to assign the heading level in order to maintain heading hierarchy and accessibility for assistive technologies.</summary>
    [Parameter] public GcdsCardCardTitleTagValue? CardTitleTag { get; set; } = default;

    /// <summary>The description attribute specifies the body of text that appears on the card</summary>
    [Parameter] public string? Description { get; set; } = default;

    /// <summary>(required) The href attribute specifies the URL of the page the link goes to</summary>
    [Parameter] public string? Href { get; set; } = default;

    /// <summary>The img alt attribute specifies the alt text for the image provided, if none, image will be decorative</summary>
    [Parameter] public string? ImgAlt { get; set; } = default;

    /// <summary>The img src attribute specifies the path to the image</summary>
    [Parameter] public string? ImgSrc { get; set; } = default;

    /// <summary>The rel attribute specifies the relationship between the current document and the linked document</summary>
    [Parameter] public string? Rel { get; set; } = default;

    /// <summary>The target attribute specifies where to open the linked document</summary>
    [Parameter] public string? Target { get; set; } = default;

    /// <summary>Emitted when the card loses focus.</summary>
    [Parameter] public EventCallback<CustomEventArgs> OnGcdsBlur { get; set; }

    /// <summary>Emitted when the card has been clicked. Contains the href in the event detail.</summary>
    [Parameter] public EventCallback<CustomEventArgs> OnGcdsClick { get; set; }

    /// <summary>Emitted when the card has focus.</summary>
    [Parameter] public EventCallback<CustomEventArgs> OnGcdsFocus { get; set; }

    [Parameter] public RenderFragment? ChildContent { get; set; }

    [Parameter] public RenderFragment? TitleContent { get; set; }

    [JSInvokable]
    public async Task HandleGcdsBlur(CustomEventArgs args) => await OnGcdsBlur.InvokeAsync(args);

    [JSInvokable]
    public async Task HandleGcdsClick(CustomEventArgs args) => await OnGcdsClick.InvokeAsync(args);

    [JSInvokable]
    public async Task HandleGcdsFocus(CustomEventArgs args) => await OnGcdsFocus.InvokeAsync(args);

}
