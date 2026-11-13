using Microsoft.AspNetCore.Razor.TagHelpers;
using System.Globalization;
using System.Text.Json;

namespace GcdsCore.Components;

/// <summary>
/// Label for form fields, providing accessibility and context for users.
/// </summary>
[HtmlTargetElement("gcds-label")]
public class GcdsLabelTagHelper : TagHelper
{

    /// <summary>Specifies if the label is hidden or not.</summary>
    public bool HideLabel { get; set; }
    /// <summary>Form field label</summary>
    public string? Label { get; set; } = default;
    /// <summary>Defines the label's for attribute.</summary>
    public string? LabelFor { get; set; } = default;
    /// <summary>Specifies if a form field is required or not.</summary>
    public bool Required { get; set; }

    public override void Process(TagHelperContext context, TagHelperOutput output)
    {
        output.TagName = "gcds-label";
        if (HideLabel)
            output.Attributes.SetAttribute("hide-label", "");
        if (!string.IsNullOrEmpty(Label))
            output.Attributes.SetAttribute("label", Label);
        if (!string.IsNullOrEmpty(LabelFor))
            output.Attributes.SetAttribute("label-for", LabelFor);
        if (Required)
            output.Attributes.SetAttribute("required", "");
    }

}
