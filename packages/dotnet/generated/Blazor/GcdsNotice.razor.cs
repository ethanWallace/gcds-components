using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;
using System.Text.Json;

namespace GcdsCore.Components;

/// <summary>
/// The notice is a short, prominent message that’s part of the page content.
/// </summary>
public partial class GcdsNotice : GeneratedComponentBase
{
    /// <summary>(required) The notice role property specifies the style of notice to be displayed.</summary>
    [Parameter] public GcdsNoticeNoticeRoleValue? NoticeRole { get; set; } = default;

    /// <summary>(required) Set the notice title.</summary>
    [Parameter] public string? NoticeTitle { get; set; } = default;

    /// <summary>(required) The notice title tag property specifies the HTML heading element for the title. This property does not modify the font size. It is used to assign the heading level in order to maintain heading hierarchy and accessibility for assistive technologies.</summary>
    [Parameter] public GcdsNoticeNoticeTitleTagValue? NoticeTitleTag { get; set; } = default;

    [Parameter] public RenderFragment? ChildContent { get; set; }

}
