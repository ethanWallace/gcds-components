using Microsoft.AspNetCore.Razor.TagHelpers;
using System.Globalization;
using System.Text.Json;

namespace GcdsCore.Components;

/// <summary>
/// The notice is a short, prominent message that’s part of the page content.
/// </summary>
[HtmlTargetElement("gcds-notice")]
public class GcdsNoticeTagHelper : TagHelper
{
public enum NoticeRoleValue
{
    Danger,
    Info,
    Success,
    Warning
}

public enum NoticeTitleTagValue
{
    H2,
    H3,
    H4,
    H5
}


    /// <summary>(required) The notice role property specifies the style of notice to be displayed.</summary>
    public NoticeRoleValue? NoticeRole { get; set; }
    /// <summary>(required) Set the notice title.</summary>
    public string? NoticeTitle { get; set; } = default;
    /// <summary>(required) The notice title tag property specifies the HTML heading element for the title. This property does not modify the font size. It is used to assign the heading level in order to maintain heading hierarchy and accessibility for assistive technologies.</summary>
    public NoticeTitleTagValue? NoticeTitleTag { get; set; }

    public override void Process(TagHelperContext context, TagHelperOutput output)
    {
        output.TagName = "gcds-notice";
        if (NoticeRole is not null)
            output.Attributes.SetAttribute("notice-role", NoticeRoleValueToAttributeValue(NoticeRole.Value));
        if (!string.IsNullOrEmpty(NoticeTitle))
            output.Attributes.SetAttribute("notice-title", NoticeTitle);
        if (NoticeTitleTag is not null)
            output.Attributes.SetAttribute("notice-title-tag", NoticeTitleTagValueToAttributeValue(NoticeTitleTag.Value));
    }

    private static string NoticeRoleValueToAttributeValue(NoticeRoleValue value) => value switch
    {
            NoticeRoleValue.Danger => "danger",
            NoticeRoleValue.Info => "info",
            NoticeRoleValue.Success => "success",
            NoticeRoleValue.Warning => "warning",
            _ => value.ToString(),
    };

    private static string NoticeTitleTagValueToAttributeValue(NoticeTitleTagValue value) => value switch
    {
            NoticeTitleTagValue.H2 => "h2",
            NoticeTitleTagValue.H3 => "h3",
            NoticeTitleTagValue.H4 => "h4",
            NoticeTitleTagValue.H5 => "h5",
            _ => value.ToString(),
    };
}
