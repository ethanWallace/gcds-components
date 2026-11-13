using Microsoft.AspNetCore.Razor.TagHelpers;
using System.Globalization;
using System.Text.Json;

namespace GcdsCore.Components;

/// <summary>
/// The screenreader-only component is text information only accessible with assistive technologies.
/// </summary>
[HtmlTargetElement("gcds-sr-only")]
public class GcdsSrOnlyTagHelper : TagHelper
{
public enum TagValue
{
    H1,
    H2,
    H3,
    H4,
    H5,
    H6,
    P,
    Span
}


    /// <summary>Sets the appropriate HTML tag for the content.</summary>
    public TagValue? Tag { get; set; }

    public override void Process(TagHelperContext context, TagHelperOutput output)
    {
        output.TagName = "gcds-sr-only";
        if (Tag is not null)
            output.Attributes.SetAttribute("tag", TagValueToAttributeValue(Tag.Value));
    }

    private static string TagValueToAttributeValue(TagValue value) => value switch
    {
            TagValue.H1 => "h1",
            TagValue.H2 => "h2",
            TagValue.H3 => "h3",
            TagValue.H4 => "h4",
            TagValue.H5 => "h5",
            TagValue.H6 => "h6",
            TagValue.P => "p",
            TagValue.Span => "span",
            _ => value.ToString(),
    };
}
