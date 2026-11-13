using Microsoft.AspNetCore.Razor.TagHelpers;
using System.Globalization;
using System.Text.Json;

namespace GcdsCore.Components;

/// <summary>
/// A top navigation is a horizontal list of page links.
/// </summary>
[HtmlTargetElement("gcds-top-nav")]
public class GcdsTopNavTagHelper : TagHelper
{
public enum AlignmentValue
{
    End,
    Start
}


    /// <summary>Nav alignment</summary>
    public AlignmentValue? Alignment { get; set; }
    /// <summary>(required) Label for navigation landmark</summary>
    public string? Label { get; set; } = default;

    public override void Process(TagHelperContext context, TagHelperOutput output)
    {
        output.TagName = "gcds-top-nav";
        if (Alignment is not null)
            output.Attributes.SetAttribute("alignment", AlignmentValueToAttributeValue(Alignment.Value));
        if (!string.IsNullOrEmpty(Label))
            output.Attributes.SetAttribute("label", Label);
    }

    private static string AlignmentValueToAttributeValue(AlignmentValue value) => value switch
    {
            AlignmentValue.End => "end",
            AlignmentValue.Start => "start",
            _ => value.ToString(),
    };
}
