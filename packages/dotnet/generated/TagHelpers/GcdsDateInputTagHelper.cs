using Microsoft.AspNetCore.Razor.TagHelpers;
using System.Globalization;
using System.Text.Json;

namespace GcdsCore.Components;

/// <summary>
/// A date input is a space to enter a known date.
/// </summary>
[HtmlTargetElement("gcds-date-input")]
public class GcdsDateInputTagHelper : TagHelper
{
public enum AutocompleteValue
{
    Bday,
    CcExp,
    Off,
    On
}

public enum FormatValue
{
    Compact,
    Full,
    Iso
}

public enum ValidateOnValue
{
    Blur,
    Other,
    Submit
}


    /// <summary>String to have autocomplete enabled.</summary>
    public AutocompleteValue? Autocomplete { get; set; }
    /// <summary>If true, the date-input will be focused on component render</summary>
    public bool Autofocus { get; set; }
    /// <summary>Specifies if the date input is disabled or not.</summary>
    public bool Disabled { get; set; } = false;
    /// <summary>Error message displayed below the legend and above form fields.</summary>
    public string? ErrorMessage { get; set; } = default;
    /// <summary>The ID of the form that the date-input field belongs to.</summary>
    public string? Form { get; set; } = default;
    /// <summary>(required) Set this property to full to show month, day, and year form elements. Set it to compact to show only the month and year form elements. Set it to `iso` to use numeric month input and `YYYY-MM-DD` entry order.</summary>
    public FormatValue? Format { get; set; }
    /// <summary>Hint displayed below the legend and above form fields.</summary>
    public string? Hint { get; set; } = default;
    /// <summary>(required) Fieldset legend</summary>
    public string? Legend { get; set; } = default;
    /// <summary>The maximum date that the date-input field can accept. Format: YYYY-MM-DD or YYYY-MM</summary>
    public string? Max { get; set; } = default;
    /// <summary>The minimum date that the date-input field can accept. Format: YYYY-MM-DD or YYYY-MM</summary>
    public string? Min { get; set; } = default;
    /// <summary>(required) Name attribute for the date input.</summary>
    public string? Name { get; set; } = default;
    /// <summary>Specifies if a form field is required or not.</summary>
    public bool Required { get; set; } = false;
    /// <summary>Set event to call validator</summary>
    public ValidateOnValue? ValidateOn { get; set; }
    /// <summary>Combined date value from the two/three form elements. Format: YYYY-MM-DD or YYYY-MM</summary>
    public string? Value { get; set; } = default;

    public override void Process(TagHelperContext context, TagHelperOutput output)
    {
        output.TagName = "gcds-date-input";
        if (Autocomplete is not null)
            output.Attributes.SetAttribute("autocomplete", AutocompleteValueToAttributeValue(Autocomplete.Value));
        if (Autofocus)
            output.Attributes.SetAttribute("autofocus", "");
        if (Disabled)
            output.Attributes.SetAttribute("disabled", "");
        if (!string.IsNullOrEmpty(ErrorMessage))
            output.Attributes.SetAttribute("error-message", ErrorMessage);
        if (!string.IsNullOrEmpty(Form))
            output.Attributes.SetAttribute("form", Form);
        if (Format is not null)
            output.Attributes.SetAttribute("format", FormatValueToAttributeValue(Format.Value));
        if (!string.IsNullOrEmpty(Hint))
            output.Attributes.SetAttribute("hint", Hint);
        if (!string.IsNullOrEmpty(Legend))
            output.Attributes.SetAttribute("legend", Legend);
        if (!string.IsNullOrEmpty(Max))
            output.Attributes.SetAttribute("max", Max);
        if (!string.IsNullOrEmpty(Min))
            output.Attributes.SetAttribute("min", Min);
        if (!string.IsNullOrEmpty(Name))
            output.Attributes.SetAttribute("name", Name);
        if (Required)
            output.Attributes.SetAttribute("required", "");
        if (ValidateOn is not null)
            output.Attributes.SetAttribute("validate-on", ValidateOnValueToAttributeValue(ValidateOn.Value));
        if (!string.IsNullOrEmpty(Value))
            output.Attributes.SetAttribute("value", Value);
    }

    private static string AutocompleteValueToAttributeValue(AutocompleteValue value) => value switch
    {
            AutocompleteValue.Bday => "bday",
            AutocompleteValue.CcExp => "cc-exp",
            AutocompleteValue.Off => "off",
            AutocompleteValue.On => "on",
            _ => value.ToString(),
    };

    private static string FormatValueToAttributeValue(FormatValue value) => value switch
    {
            FormatValue.Compact => "compact",
            FormatValue.Full => "full",
            FormatValue.Iso => "iso",
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
