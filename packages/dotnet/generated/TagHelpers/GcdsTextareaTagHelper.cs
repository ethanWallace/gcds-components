using Microsoft.AspNetCore.Razor.TagHelpers;
using System.Globalization;
using System.Text.Json;

namespace GcdsCore.Components;

/// <summary>
/// A text area is a space to enter long-form information in response to a question or instruction.
/// </summary>
[HtmlTargetElement("gcds-textarea")]
public class GcdsTextareaTagHelper : TagHelper
{
public enum ValidateOnValue
{
    Blur,
    Other,
    Submit
}


    /// <summary>If true, the textarea will be focused on component render.</summary>
    public bool Autofocus { get; set; }
    /// <summary>Defines width for textarea cols (the min-width for textarea's is 50%).</summary>
    public double? Cols { get; set; } = default;
    /// <summary>Specifies if a textarea element is disabled or not.</summary>
    public bool Disabled { get; set; } = false;
    /// <summary>Error message for an invalid textarea element.</summary>
    public string? ErrorMessage { get; set; } = default;
    /// <summary>The ID of the form that the textarea belongs to.</summary>
    public string? Form { get; set; } = default;
    /// <summary>Specifies if the label is hidden or not.</summary>
    public bool HideLabel { get; set; } = false;
    /// <summary>If true, character limit counter will not be displayed under the textarea.</summary>
    public bool HideLimit { get; set; } = false;
    /// <summary>Hint displayed below the label and above the textarea field.</summary>
    public string? Hint { get; set; } = default;
    /// <summary>(required) Form field label</summary>
    public string? Label { get; set; } = default;
    /// <summary>The maximum number of characters that the textarea field can accept.</summary>
    public double? Maxlength { get; set; } = default;
    /// <summary>The minimum number of characters that the textarea field can accept.</summary>
    public double? Minlength { get; set; } = default;
    /// <summary>(required) Name attribute for a textarea element.</summary>
    public string? Name { get; set; } = default;
    /// <summary>Specifies if a form field is required or not.</summary>
    public bool Required { get; set; } = false;
    /// <summary>Default value for textarea rows.</summary>
    public double? Rows { get; set; } = 5;
    /// <summary>(required) Id attribute for a textarea element.</summary>
    public string? TextareaId { get; set; } = default;
    /// <summary>Set event to call validator</summary>
    public ValidateOnValue? ValidateOn { get; set; }
    /// <summary>Default value for an input element.</summary>
    public string? Value { get; set; } = default;

    public override void Process(TagHelperContext context, TagHelperOutput output)
    {
        output.TagName = "gcds-textarea";
        if (Autofocus)
            output.Attributes.SetAttribute("autofocus", "");
        if (Cols is not null)
            output.Attributes.SetAttribute("cols", Cols.Value.ToString(CultureInfo.InvariantCulture));
        if (Disabled)
            output.Attributes.SetAttribute("disabled", "");
        if (!string.IsNullOrEmpty(ErrorMessage))
            output.Attributes.SetAttribute("error-message", ErrorMessage);
        if (!string.IsNullOrEmpty(Form))
            output.Attributes.SetAttribute("form", Form);
        if (HideLabel)
            output.Attributes.SetAttribute("hide-label", "");
        if (HideLimit)
            output.Attributes.SetAttribute("hide-limit", "");
        if (!string.IsNullOrEmpty(Hint))
            output.Attributes.SetAttribute("hint", Hint);
        if (!string.IsNullOrEmpty(Label))
            output.Attributes.SetAttribute("label", Label);
        if (Maxlength is not null)
            output.Attributes.SetAttribute("maxlength", Maxlength.Value.ToString(CultureInfo.InvariantCulture));
        if (Minlength is not null)
            output.Attributes.SetAttribute("minlength", Minlength.Value.ToString(CultureInfo.InvariantCulture));
        if (!string.IsNullOrEmpty(Name))
            output.Attributes.SetAttribute("name", Name);
        if (Required)
            output.Attributes.SetAttribute("required", "");
        if (Rows is not null)
            output.Attributes.SetAttribute("rows", Rows.Value.ToString(CultureInfo.InvariantCulture));
        if (!string.IsNullOrEmpty(TextareaId))
            output.Attributes.SetAttribute("textarea-id", TextareaId);
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
