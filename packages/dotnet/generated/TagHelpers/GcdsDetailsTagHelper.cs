using Microsoft.AspNetCore.Razor.TagHelpers;
using System.Globalization;
using System.Text.Json;

namespace GcdsCore.Components;

/// <summary>
/// Details is an interactive switch for a person to expand or collapse content.
/// </summary>
[HtmlTargetElement("gcds-details")]
public class GcdsDetailsTagHelper : TagHelper
{

    /// <summary>(required) The details title summarizes the panel content.</summary>
    public string? DetailsTitle { get; set; } = default;
    /// <summary>Defines if the details panel is open by default or not.</summary>
    public bool Open { get; set; } = false;

    public override void Process(TagHelperContext context, TagHelperOutput output)
    {
        output.TagName = "gcds-details";
        if (!string.IsNullOrEmpty(DetailsTitle))
            output.Attributes.SetAttribute("details-title", DetailsTitle);
        if (Open)
            output.Attributes.SetAttribute("open", "");
    }

}
