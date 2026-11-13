using Microsoft.AspNetCore.Razor.TagHelpers;
using System.Globalization;
using System.Text.Json;

namespace GcdsCore.Components;

/// <summary>
/// A fieldset is a group of multiple form components or elements.
/// </summary>
[HtmlTargetElement("gcds-fieldset")]
public class GcdsFieldsetTagHelper : TagHelper
{
public enum LegendSizeValue
{
    H2,
    H3,
    H4,
    H5,
    H6
}


    /// <summary>Hint displayed below the legend.</summary>
    public string? Hint { get; set; } = default;
    /// <summary>(required) The title for the contents of the fieldset</summary>
    public string? Legend { get; set; } = default;
    /// <summary>(required) Sets the appropriate font size for the fieldset legend.</summary>
    public LegendSizeValue? LegendSize { get; set; }

    public override void Process(TagHelperContext context, TagHelperOutput output)
    {
        output.TagName = "gcds-fieldset";
        if (!string.IsNullOrEmpty(Hint))
            output.Attributes.SetAttribute("hint", Hint);
        if (!string.IsNullOrEmpty(Legend))
            output.Attributes.SetAttribute("legend", Legend);
        if (LegendSize is not null)
            output.Attributes.SetAttribute("legend-size", LegendSizeValueToAttributeValue(LegendSize.Value));
    }

    private static string LegendSizeValueToAttributeValue(LegendSizeValue value) => value switch
    {
            LegendSizeValue.H2 => "h2",
            LegendSizeValue.H3 => "h3",
            LegendSizeValue.H4 => "h4",
            LegendSizeValue.H5 => "h5",
            LegendSizeValue.H6 => "h6",
            _ => value.ToString(),
    };
}
