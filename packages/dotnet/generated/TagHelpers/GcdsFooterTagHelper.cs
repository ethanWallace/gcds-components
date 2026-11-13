using Microsoft.AspNetCore.Razor.TagHelpers;
using System.Globalization;
using System.Text.Json;

namespace GcdsCore.Components;

/// <summary>
/// The footer is the responsive Government of Canada branded footer landmark.
/// </summary>
[HtmlTargetElement("gcds-footer")]
public class GcdsFooterTagHelper : TagHelper
{
public enum DisplayValue
{
    Compact,
    Full
}


    /// <summary>Heading for contextual slot and nav landmark</summary>
    public string? ContextualHeading { get; set; } = default;
    /// <summary>Object of list items for contextual band. Format: { link-label: link-href }</summary>
    public string? ContextualLinks { get; set; } = default;
    /// <summary>Display mode of the footer</summary>
    public DisplayValue? Display { get; set; }
    /// <summary>Object of list items for sub-footer. Format: { link-label: link-href }</summary>
    public string? SubLinks { get; set; } = default;

    public override void Process(TagHelperContext context, TagHelperOutput output)
    {
        output.TagName = "gcds-footer";
        if (!string.IsNullOrEmpty(ContextualHeading))
            output.Attributes.SetAttribute("contextual-heading", ContextualHeading);
        if (!string.IsNullOrEmpty(ContextualLinks))
            output.Attributes.SetAttribute("contextual-links", ContextualLinks);
        if (Display is not null)
            output.Attributes.SetAttribute("display", DisplayValueToAttributeValue(Display.Value));
        if (!string.IsNullOrEmpty(SubLinks))
            output.Attributes.SetAttribute("sub-links", SubLinks);
    }

    private static string DisplayValueToAttributeValue(DisplayValue value) => value switch
    {
            DisplayValue.Compact => "compact",
            DisplayValue.Full => "full",
            _ => value.ToString(),
    };
}
