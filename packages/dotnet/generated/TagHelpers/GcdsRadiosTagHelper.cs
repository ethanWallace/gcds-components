using Microsoft.AspNetCore.Razor.TagHelpers;
using System.Globalization;
using System.Text.Json;

namespace GcdsCore.Components;

/// <summary>
/// Radios provide a set of options for a single response.
/// </summary>
[HtmlTargetElement("gcds-radios")]
public class GcdsRadiosTagHelper : TagHelper
{
public enum ValidateOnValue
{
    Blur,
    Other,
    Submit
}


    /// <summary>If true, the input will be focused on component render</summary>
    public bool Autofocus { get; set; }
    /// <summary>Specifies if an input element is disabled or not.</summary>
    public bool Disabled { get; set; }
    /// <summary>Set this to display an error message for invalid radios</summary>
    public string? ErrorMessage { get; set; } = default;
    /// <summary>The ID of the form that the radios belong to.</summary>
    public string? Form { get; set; } = default;
    /// <summary>Specifies if the legend is hidden or not.</summary>
    public bool HideLegend { get; set; } = false;
    /// <summary>Hint displayed below the label and above the radio elements</summary>
    public string? Hint { get; set; } = default;
    /// <summary>(required) Label or legend for the group of radio elements</summary>
    public string? Legend { get; set; } = default;
    /// <summary>(required) The `name` attribute for the radios, used to group radio elements together</summary>
    public string? Name { get; set; } = default;
    /// <summary>(required) Options to render radio buttons</summary>
    public string? Options { get; set; } = default;
    /// <summary>Specifies if a form field is required or not.</summary>
    public bool Required { get; set; }
    /// <summary>Set event to call validator</summary>
    public ValidateOnValue? ValidateOn { get; set; }
    /// <summary>Default value for the element</summary>
    public string? Value { get; set; } = default;

    public override void Process(TagHelperContext context, TagHelperOutput output)
    {
        output.TagName = "gcds-radios";
        if (Autofocus)
            output.Attributes.SetAttribute("autofocus", "");
        if (Disabled)
            output.Attributes.SetAttribute("disabled", "");
        if (!string.IsNullOrEmpty(ErrorMessage))
            output.Attributes.SetAttribute("error-message", ErrorMessage);
        if (!string.IsNullOrEmpty(Form))
            output.Attributes.SetAttribute("form", Form);
        if (HideLegend)
            output.Attributes.SetAttribute("hide-legend", "");
        if (!string.IsNullOrEmpty(Hint))
            output.Attributes.SetAttribute("hint", Hint);
        if (!string.IsNullOrEmpty(Legend))
            output.Attributes.SetAttribute("legend", Legend);
        if (!string.IsNullOrEmpty(Name))
            output.Attributes.SetAttribute("name", Name);
        if (!string.IsNullOrEmpty(Options))
            output.Attributes.SetAttribute("options", Options);
        if (Required)
            output.Attributes.SetAttribute("required", "");
        if (ValidateOn is not null)
            output.Attributes.SetAttribute("validate-on", ValidateOnValueToAttributeValue(ValidateOn.Value));
        if (!string.IsNullOrEmpty(Value))
            output.Attributes.SetAttribute("value", Value);
    }

    private static string ValidateOnValueToAttributeValue(ValidateOnValue value) => value switch
    {
            ValidateOnValue.Blur => "blur",
            ValidateOnValue.Other => "other",
            ValidateOnValue.Submit => "submit",
            _ => value.ToString(),
    };
}
