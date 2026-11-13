using Microsoft.AspNetCore.Razor.TagHelpers;
using System.Globalization;
using System.Text.Json;

namespace GcdsCore.Components;

/// <summary>
/// A select provides a large list of options for single selection.
/// </summary>
[HtmlTargetElement("gcds-select")]
public class GcdsSelectTagHelper : TagHelper
{
public enum ValidateOnValue
{
    Blur,
    Other,
    Submit
}


    /// <summary>String to have autocomplete enabled.</summary>
    public string? Autocomplete { get; set; } = default;
    /// <summary>If true, the select will be focused on component render</summary>
    public bool Autofocus { get; set; }
    /// <summary>The default value is an optional value that gets displayed before the user selects an option.</summary>
    public string? DefaultValue { get; set; } = default;
    /// <summary>Specifies if a select element is disabled or not.</summary>
    public bool Disabled { get; set; } = false;
    /// <summary>Error message for an invalid select element.</summary>
    public string? ErrorMessage { get; set; } = default;
    /// <summary>The ID of the form that the select field belongs to.</summary>
    public string? Form { get; set; } = default;
    /// <summary>Specifies if the label is hidden or not.</summary>
    public bool HideLabel { get; set; } = false;
    /// <summary>Hint displayed below the label.</summary>
    public string? Hint { get; set; } = default;
    /// <summary>(required) Form field label.</summary>
    public string? Label { get; set; } = default;
    /// <summary>(required) Name attribute for select form element.</summary>
    public string? Name { get; set; } = default;
    /// <summary>Specifies if a form field is required or not.</summary>
    public bool Required { get; set; } = false;
    /// <summary>(required) Id attribute for a select element.</summary>
    public string? SelectId { get; set; } = default;
    /// <summary>Set event to call validator</summary>
    public ValidateOnValue? ValidateOn { get; set; }
    /// <summary>Value for a select element.</summary>
    public string? Value { get; set; } = default;

    public override void Process(TagHelperContext context, TagHelperOutput output)
    {
        output.TagName = "gcds-select";
        if (!string.IsNullOrEmpty(Autocomplete))
            output.Attributes.SetAttribute("autocomplete", Autocomplete);
        if (Autofocus)
            output.Attributes.SetAttribute("autofocus", "");
        if (!string.IsNullOrEmpty(DefaultValue))
            output.Attributes.SetAttribute("default-value", DefaultValue);
        if (Disabled)
            output.Attributes.SetAttribute("disabled", "");
        if (!string.IsNullOrEmpty(ErrorMessage))
            output.Attributes.SetAttribute("error-message", ErrorMessage);
        if (!string.IsNullOrEmpty(Form))
            output.Attributes.SetAttribute("form", Form);
        if (HideLabel)
            output.Attributes.SetAttribute("hide-label", "");
        if (!string.IsNullOrEmpty(Hint))
            output.Attributes.SetAttribute("hint", Hint);
        if (!string.IsNullOrEmpty(Label))
            output.Attributes.SetAttribute("label", Label);
        if (!string.IsNullOrEmpty(Name))
            output.Attributes.SetAttribute("name", Name);
        if (Required)
            output.Attributes.SetAttribute("required", "");
        if (!string.IsNullOrEmpty(SelectId))
            output.Attributes.SetAttribute("select-id", SelectId);
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
