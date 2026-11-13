using Microsoft.AspNetCore.Razor.TagHelpers;
using System.Globalization;
using System.Text.Json;

namespace GcdsCore.Components;

/// <summary>
/// Navigation link within a navigation group or menu, allowing users to navigate to different sections of a website or application.
/// </summary>
[HtmlTargetElement("gcds-nav-link")]
public class GcdsNavLinkTagHelper : TagHelper
{

    /// <summary>Current page flag</summary>
    public bool Current { get; set; }
    /// <summary>(required) Link href</summary>
    public string? Href { get; set; } = default;

    public override void Process(TagHelperContext context, TagHelperOutput output)
    {
        output.TagName = "gcds-nav-link";
        if (Current)
            output.Attributes.SetAttribute("current", "");
        if (!string.IsNullOrEmpty(Href))
            output.Attributes.SetAttribute("href", Href);
    }

}
