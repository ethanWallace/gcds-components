using Microsoft.AspNetCore.Razor.TagHelpers;
using System.Globalization;
using System.Text.Json;

namespace GcdsCore.Components;

/// <summary>
/// Checkboxes provide a set of options for multiple responses.
/// </summary>
[HtmlTargetElement("gcds-checkboxes")]
public class GcdsCheckboxesTagHelper : TagHelper
{
public enum ValidateOnValue
{
    Blur,
    Other,
    Submit
}


    /// <summary>If true, the checkbox will be focused on component render</summary>
    public bool Autofocus { get; set; }
    /// <summary>Specifies if the checkboxes are disabled or not.</summary>
    public bool Disabled { get; set; }
    /// <summary>Set this to display an error message for invalid &lt;gcds-checkboxes&gt;</summary>
    public string? ErrorMessage { get; set; } = default;
    /// <summary>The ID of the form that the checkboxes belong to.</summary>
    public string? Form { get; set; } = default;
    /// <summary>For single checkbox, specifies if the label is hidden or not.</summary>
    public bool HideLabel { get; set; } = false;
    /// <summary>For checkbox groups, specifies if the legend is hidden or not.</summary>
    public bool HideLegend { get; set; } = false;
    /// <summary>Hint displayed below the label.</summary>
    public string? Hint { get; set; } = default;
    /// <summary>Set the legend for fieldset form group.</summary>
    public string? Legend { get; set; } = default;
    /// <summary>(required) Name attribute for a checkboxes element.</summary>
    public string? Name { get; set; } = default;
    /// <summary>(required) Options to render checkboxes buttons</summary>
    public string? Options { get; set; } = default;
    /// <summary>Specifies if the checkboxes are required or not.</summary>
    public bool Required { get; set; }
    /// <summary>Set event to call validator</summary>
    public ValidateOnValue? ValidateOn { get; set; }
    /// <summary>Value for checkboxes component.</summary>
    public IReadOnlyList<string?>? Value { get; set; } = default;

    public override void Process(TagHelperContext context, TagHelperOutput output)
    {
        output.TagName = "gcds-checkboxes";
        if (Autofocus)
            output.Attributes.SetAttribute("autofocus", "");
        if (Disabled)
            output.Attributes.SetAttribute("disabled", "");
        if (!string.IsNullOrEmpty(ErrorMessage))
            output.Attributes.SetAttribute("error-message", ErrorMessage);
        if (!string.IsNullOrEmpty(Form))
            output.Attributes.SetAttribute("form", Form);
        if (HideLabel)
            output.Attributes.SetAttribute("hide-label", "");
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
        if (Value is not null)
            output.Attributes.SetAttribute("value", JsonSerializer.Serialize(Value));
    }

    private static string ValidateOnValueToAttributeValue(ValidateOnValue value) => value switch
    {
            ValidateOnValue.Blur => "blur",
            ValidateOnValue.Other => "other",
            ValidateOnValue.Submit => "submit",
            _ => value.ToString(),
    };
}
