using Microsoft.AspNetCore.Razor.TagHelpers;
using System.Globalization;
using System.Text.Json;

namespace GcdsCore.Components;

/// <summary>
/// An error summary is a list of user errors in a form.
/// </summary>
[HtmlTargetElement("gcds-error-summary")]
public class GcdsErrorSummaryTagHelper : TagHelper
{

    /// <summary>Object of list items for error list. Format: { link-href: link-label }</summary>
    public string? ErrorLinks { get; set; } = default;
    /// <summary>Set error summary heading</summary>
    public string? Heading { get; set; } = default;
    /// <summary>Specifies if the error summary should listen for GcdsError event to generate error list.</summary>
    public bool? Listen { get; set; }

    public override void Process(TagHelperContext context, TagHelperOutput output)
    {
        output.TagName = "gcds-error-summary";
        if (!string.IsNullOrEmpty(ErrorLinks))
            output.Attributes.SetAttribute("error-links", ErrorLinks);
        if (!string.IsNullOrEmpty(Heading))
            output.Attributes.SetAttribute("heading", Heading);
        if (Listen is not null)
            output.Attributes.SetAttribute("listen", Listen.Value ? "" : "false");
    }

}
