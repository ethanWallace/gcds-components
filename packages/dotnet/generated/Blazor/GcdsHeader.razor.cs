using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;
using System.Text.Json;

namespace GcdsCore.Components;

/// <summary>
/// The header is the responsive Government of Canada branded header landmark.
/// </summary>
public partial class GcdsHeader : GeneratedComponentBase
{
    protected override IReadOnlyList<string> EventNames => new[] { "gcdsBlur", "gcdsClick", "gcdsFocus" };

    /// <summary>(required) GcdsLangToggle - The href attribute specifies the URL of the opposite language page</summary>
    [Parameter] public string? LangHref { get; set; } = default;

    /// <summary>GcdsSignature - GCDS signature links to Canada.ca</summary>
    [Parameter] public bool? SignatureHasLink { get; set; }

    /// <summary>(required) Top navigation - Skip to content href</summary>
    [Parameter] public string? SkipToHref { get; set; } = default;

    /// <summary>Emitted when the link loses focus.</summary>
    [Parameter] public EventCallback<CustomEventArgs> OnGcdsBlur { get; set; }

    /// <summary>Emitted when the link has been clicked. Contains the href in the event detail.</summary>
    [Parameter] public EventCallback<CustomEventArgs> OnGcdsClick { get; set; }

    /// <summary>Emitted when the link has focus.</summary>
    [Parameter] public EventCallback<CustomEventArgs> OnGcdsFocus { get; set; }

    [Parameter] public RenderFragment? AccountContent { get; set; }

    [Parameter] public RenderFragment? BannerContent { get; set; }

    [Parameter] public RenderFragment? BreadcrumbContent { get; set; }

    [Parameter] public RenderFragment? MenuContent { get; set; }

    [Parameter] public RenderFragment? SearchContent { get; set; }

    [Parameter] public RenderFragment? SignatureContent { get; set; }

    [Parameter] public RenderFragment? SkipToNavContent { get; set; }

    [Parameter] public RenderFragment? ToggleContent { get; set; }

    [JSInvokable]
    public async Task HandleGcdsBlur(CustomEventArgs args) => await OnGcdsBlur.InvokeAsync(args);

    [JSInvokable]
    public async Task HandleGcdsClick(CustomEventArgs args) => await OnGcdsClick.InvokeAsync(args);

    [JSInvokable]
    public async Task HandleGcdsFocus(CustomEventArgs args) => await OnGcdsFocus.InvokeAsync(args);

}
