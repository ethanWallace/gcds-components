using Microsoft.AspNetCore.Razor.TagHelpers;
using System.Globalization;
using System.Text.Json;

namespace GcdsCore.Components;

/// <summary>
/// A side navigation is a vertical list of page links on the left side of the screen.
/// </summary>
[HtmlTargetElement("gcds-side-nav")]
public class GcdsSideNavTagHelper : TagHelper
{

    /// <summary>(required) Label for navigation landmark</summary>
    public string? Label { get; set; } = default;

    public override void Process(TagHelperContext context, TagHelperOutput output)
    {
        output.TagName = "gcds-side-nav";
        if (!string.IsNullOrEmpty(Label))
            output.Attributes.SetAttribute("label", Label);
    }

}
