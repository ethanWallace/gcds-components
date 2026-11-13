using Microsoft.AspNetCore.Razor.TagHelpers;
using System.Globalization;
using System.Text.Json;

namespace GcdsCore.Components;

/// <summary>
/// Navigational group with expandable or dropdown functionality, allowing for better organization of navigation links.
/// </summary>
[HtmlTargetElement("gcds-nav-group")]
public class GcdsNavGroupTagHelper : TagHelper
{

    /// <summary>Label for the expanded button trigger</summary>
    public string? CloseTrigger { get; set; } = default;
    /// <summary>(required) Label for the nav group menu</summary>
    public string? MenuLabel { get; set; } = default;
    /// <summary>Has the nav group been expanded</summary>
    public bool Open { get; set; } = false;
    /// <summary>(required) Label for the collapsed button trigger</summary>
    public string? OpenTrigger { get; set; } = default;

    public override void Process(TagHelperContext context, TagHelperOutput output)
    {
        output.TagName = "gcds-nav-group";
        if (!string.IsNullOrEmpty(CloseTrigger))
            output.Attributes.SetAttribute("close-trigger", CloseTrigger);
        if (!string.IsNullOrEmpty(MenuLabel))
            output.Attributes.SetAttribute("menu-label", MenuLabel);
        if (Open)
            output.Attributes.SetAttribute("open", "");
        if (!string.IsNullOrEmpty(OpenTrigger))
            output.Attributes.SetAttribute("open-trigger", OpenTrigger);
    }

}
