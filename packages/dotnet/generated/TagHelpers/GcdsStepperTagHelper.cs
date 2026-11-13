using Microsoft.AspNetCore.Razor.TagHelpers;
using System.Globalization;
using System.Text.Json;

namespace GcdsCore.Components;

/// <summary>
/// A stepper is a progress tracker for a multi-step process.
/// </summary>
[HtmlTargetElement("gcds-stepper")]
public class GcdsStepperTagHelper : TagHelper
{
public enum TagValue
{
    H1,
    H2,
    H3
}


    /// <summary>(required) Defines the current step.</summary>
    public double? CurrentStep { get; set; } = default;
    /// <summary>Defines the heading tag to render</summary>
    public TagValue? Tag { get; set; }
    /// <summary>(required) Defines the total amount of steps.</summary>
    public double? TotalSteps { get; set; } = default;

    public override void Process(TagHelperContext context, TagHelperOutput output)
    {
        output.TagName = "gcds-stepper";
        if (CurrentStep is not null)
            output.Attributes.SetAttribute("current-step", CurrentStep.Value.ToString(CultureInfo.InvariantCulture));
        if (Tag is not null)
            output.Attributes.SetAttribute("tag", TagValueToAttributeValue(Tag.Value));
        if (TotalSteps is not null)
            output.Attributes.SetAttribute("total-steps", TotalSteps.Value.ToString(CultureInfo.InvariantCulture));
    }

    private static string TagValueToAttributeValue(TagValue value) => value switch
    {
            TagValue.H1 => "h1",
            TagValue.H2 => "h2",
            TagValue.H3 => "h3",
            _ => value.ToString(),
    };
}
