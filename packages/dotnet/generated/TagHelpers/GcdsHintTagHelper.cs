using Microsoft.AspNetCore.Razor.TagHelpers;
using System.Globalization;
using System.Text.Json;

namespace GcdsCore.Components;

/// <summary>
/// Hint provides additional information or context to help users understand the content or functionality of a related element.
/// </summary>
[HtmlTargetElement("gcds-hint")]
public class GcdsHintTagHelper : TagHelper
{

    /// <summary>Id attribute for the hint.</summary>
    public string? HintId { get; set; } = default;

    public override void Process(TagHelperContext context, TagHelperOutput output)
    {
        output.TagName = "gcds-hint";
        if (!string.IsNullOrEmpty(HintId))
            output.Attributes.SetAttribute("hint-id", HintId);
    }

}
