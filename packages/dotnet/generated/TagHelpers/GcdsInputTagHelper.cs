using Microsoft.AspNetCore.Razor.TagHelpers;
using System.Globalization;
using System.Text.Json;

namespace GcdsCore.Components;

/// <summary>
/// An input is a space to enter short-form information in response to a question or instruction.
/// </summary>
[HtmlTargetElement("gcds-input")]
public class GcdsInputTagHelper : TagHelper
{
public enum InputmodeValue
{
    Decimal,
    Email,
    None,
    Numeric,
    Search,
    Tel,
    Text,
    Url
}

public enum TypeValue
{
    Email,
    Number,
    Password,
    Search,
    Tel,
    Text,
    Url
}

public enum ValidateOnValue
{
    Blur,
    Other,
    Submit
}


    /// <summary>String to have autocomplete enabled.</summary>
    public string? Autocomplete { get; set; } = default;
    /// <summary>If true, the input will be focused on component render</summary>
    public bool Autofocus { get; set; }
    /// <summary>Specifies if an input element is disabled or not.</summary>
    public bool Disabled { get; set; } = false;
    /// <summary>Error message for an invalid input element.</summary>
    public string? ErrorMessage { get; set; } = default;
    /// <summary>The ID of the form that the input field belongs to.</summary>
    public string? Form { get; set; } = default;
    /// <summary>Specifies if the label is hidden or not.</summary>
    public bool HideLabel { get; set; } = false;
    /// <summary>Hint displayed below the label and above the input field.</summary>
    public string? Hint { get; set; } = default;
    /// <summary>(required) Id attribute for an input element.</summary>
    public string? InputId { get; set; } = default;
    /// <summary></summary>
    public InputmodeValue? Inputmode { get; set; }
    /// <summary>(required) Form field label</summary>
    public string? Label { get; set; } = default;
    /// <summary>The maximum value that the input field can accept. Only applies to number input type.</summary>
    public string? Max { get; set; } = default;
    /// <summary>The maximum number of characters that the input field can accept.</summary>
    public double? Maxlength { get; set; } = default;
    /// <summary>The minimum value that the input field can accept. Only applies to number input type.</summary>
    public string? Min { get; set; } = default;
    /// <summary>The minimum number of characters that the input field can accept.</summary>
    public double? Minlength { get; set; } = default;
    /// <summary>(required) Name attribute for an input element.</summary>
    public string? Name { get; set; } = default;
    /// <summary>Specifies a regular expression the form control's value should match. See: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/pattern</summary>
    public string? Pattern { get; set; } = default;
    /// <summary>If true, the input field cannot be modified.</summary>
    public bool Readonly { get; set; }
    /// <summary>Specifies if a form field is required or not.</summary>
    public bool Required { get; set; } = false;
    /// <summary>Size attribute for an input element to provide a visual indication of the expected text length to the user.</summary>
    public double? Size { get; set; } = default;
    /// <summary>A number that specifies the granularity that the value must adhere to. Valid for number type. See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#step</summary>
    public string? Step { get; set; } = default;
    /// <summary>Array of suggestion options. This creates a datalist element with options to represent permissible or recommended options available to choose from.</summary>
    public string? Suggestions { get; set; } = default;
    /// <summary>Set Input types</summary>
    public TypeValue? Type { get; set; }
    /// <summary>Set event to call validator</summary>
    public ValidateOnValue? ValidateOn { get; set; }
    /// <summary>Default value for an input element.</summary>
    public string? Value { get; set; } = default;

    public override void Process(TagHelperContext context, TagHelperOutput output)
    {
        output.TagName = "gcds-input";
        if (!string.IsNullOrEmpty(Autocomplete))
            output.Attributes.SetAttribute("autocomplete", Autocomplete);
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
        if (!string.IsNullOrEmpty(Hint))
            output.Attributes.SetAttribute("hint", Hint);
        if (!string.IsNullOrEmpty(InputId))
            output.Attributes.SetAttribute("input-id", InputId);
        if (Inputmode is not null)
            output.Attributes.SetAttribute("inputmode", InputmodeValueToAttributeValue(Inputmode.Value));
        if (!string.IsNullOrEmpty(Label))
            output.Attributes.SetAttribute("label", Label);
        if (!string.IsNullOrEmpty(Max))
            output.Attributes.SetAttribute("max", Max);
        if (Maxlength is not null)
            output.Attributes.SetAttribute("maxlength", Maxlength.Value.ToString(CultureInfo.InvariantCulture));
        if (!string.IsNullOrEmpty(Min))
            output.Attributes.SetAttribute("min", Min);
        if (Minlength is not null)
            output.Attributes.SetAttribute("minlength", Minlength.Value.ToString(CultureInfo.InvariantCulture));
        if (!string.IsNullOrEmpty(Name))
            output.Attributes.SetAttribute("name", Name);
        if (!string.IsNullOrEmpty(Pattern))
            output.Attributes.SetAttribute("pattern", Pattern);
        if (Readonly)
            output.Attributes.SetAttribute("readonly", "");
        if (Required)
            output.Attributes.SetAttribute("required", "");
        if (Size is not null)
            output.Attributes.SetAttribute("size", Size.Value.ToString(CultureInfo.InvariantCulture));
        if (!string.IsNullOrEmpty(Step))
            output.Attributes.SetAttribute("step", Step);
        if (!string.IsNullOrEmpty(Suggestions))
            output.Attributes.SetAttribute("suggestions", Suggestions);
        if (Type is not null)
            output.Attributes.SetAttribute("type", TypeValueToAttributeValue(Type.Value));
        if (ValidateOn is not null)
            output.Attributes.SetAttribute("validate-on", ValidateOnValueToAttributeValue(ValidateOn.Value));
        if (!string.IsNullOrEmpty(Value))
            output.Attributes.SetAttribute("value", Value);
    }

    private static string InputmodeValueToAttributeValue(InputmodeValue value) => value switch
    {
            InputmodeValue.Decimal => "decimal",
            InputmodeValue.Email => "email",
            InputmodeValue.None => "none",
            InputmodeValue.Numeric => "numeric",
            InputmodeValue.Search => "search",
            InputmodeValue.Tel => "tel",
            InputmodeValue.Text => "text",
            InputmodeValue.Url => "url",
            _ => value.ToString(),
    };

    private static string TypeValueToAttributeValue(TypeValue value) => value switch
    {
            TypeValue.Email => "email",
            TypeValue.Number => "number",
            TypeValue.Password => "password",
            TypeValue.Search => "search",
            TypeValue.Tel => "tel",
            TypeValue.Text => "text",
            TypeValue.Url => "url",
            _ => value.ToString(),
    };

    private static string ValidateOnValueToAttributeValue(ValidateOnValue value) => value switch
    {
            ValidateOnValue.Blur => "blur",
            ValidateOnValue.Other => "other",
            ValidateOnValue.Submit => "submit",
            _ => value.ToString(),
    };
}
