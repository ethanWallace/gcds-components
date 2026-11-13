using Microsoft.AspNetCore.Razor.TagHelpers;
using System.Globalization;
using System.Text.Json;

namespace GcdsCore.Components;

/// <summary>
/// A grid column is a single column in a grid layout, allowing for flexible content arrangement.
/// </summary>
[HtmlTargetElement("gcds-grid-col")]
public class GcdsGridColTagHelper : TagHelper
{

    /// <summary>Optimize grid column size for desktop (1024px and above). Desktop grid column sizes are based on a 12 column grid.</summary>
    public string? Desktop { get; set; } = default;
    /// <summary>Optimize grid column size for tablet (768px - 1023px). Tablet grid column sizes are based on a 6 column grid. The tablet size will also be used for desktop, if desktop is undefined.</summary>
    public string? Tablet { get; set; } = "6";
    /// <summary>Set tag for grid column</summary>
    public string? Tag { get; set; } = "'div'";

    public override void Process(TagHelperContext context, TagHelperOutput output)
    {
        output.TagName = "gcds-grid-col";
        if (!string.IsNullOrEmpty(Desktop))
            output.Attributes.SetAttribute("desktop", Desktop);
        if (!string.IsNullOrEmpty(Tablet))
            output.Attributes.SetAttribute("tablet", Tablet);
        if (!string.IsNullOrEmpty(Tag))
            output.Attributes.SetAttribute("tag", Tag);
    }

}
