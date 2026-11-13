using Microsoft.AspNetCore.Razor.TagHelpers;
using System.Globalization;
using System.Text.Json;

namespace GcdsCore.Components;

/// <summary>
/// A file uploader is a space to select and add supporting documentation.
/// </summary>
[HtmlTargetElement("gcds-file-uploader")]
public class GcdsFileUploaderTagHelper : TagHelper
{
public enum ValidateOnValue
{
    Blur,
    Other,
    Submit
}


    /// <summary>Defines the file types the file uploader accepts.</summary>
    public string? Accept { get; set; } = default;
    /// <summary>If true, the file uploader will be focused on component render</summary>
    public bool Autofocus { get; set; }
    /// <summary>Specifies if a file uploader element is disabled or not.</summary>
    public bool Disabled { get; set; } = false;
    /// <summary>Error message for an invalid file uploader element.</summary>
    public string? ErrorMessage { get; set; } = default;
    /// <summary>The ID of the form that the file uploader field belongs to.</summary>
    public string? Form { get; set; } = default;
    /// <summary>Specifies if the label is hidden or not.</summary>
    public bool HideLabel { get; set; } = false;
    /// <summary>Hint displayed below the label.</summary>
    public string? Hint { get; set; } = default;
    /// <summary>(required) Form field label.</summary>
    public string? Label { get; set; } = default;
    /// <summary>Boolean that specifies if the user is allowed to select more than one file.</summary>
    public bool Multiple { get; set; }
    /// <summary>(required) Name attribute for file input element.</summary>
    public string? Name { get; set; } = default;
    /// <summary>Specifies if a form field is required or not.</summary>
    public bool Required { get; set; } = false;
    /// <summary>(required) Id attribute for a file uploader element.</summary>
    public string? UploaderId { get; set; } = default;
    /// <summary>Set event to call validator</summary>
    public ValidateOnValue? ValidateOn { get; set; }

    public override void Process(TagHelperContext context, TagHelperOutput output)
    {
        output.TagName = "gcds-file-uploader";
        if (!string.IsNullOrEmpty(Accept))
            output.Attributes.SetAttribute("accept", Accept);
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
        if (!string.IsNullOrEmpty(Label))
            output.Attributes.SetAttribute("label", Label);
        if (Multiple)
            output.Attributes.SetAttribute("multiple", "");
        if (!string.IsNullOrEmpty(Name))
            output.Attributes.SetAttribute("name", Name);
        if (Required)
            output.Attributes.SetAttribute("required", "");
        if (!string.IsNullOrEmpty(UploaderId))
            output.Attributes.SetAttribute("uploader-id", UploaderId);
        if (ValidateOn is not null)
            output.Attributes.SetAttribute("validate-on", ValidateOnValueToAttributeValue(ValidateOn.Value));
    }

    private static string ValidateOnValueToAttributeValue(ValidateOnValue value) => value switch
    {
            ValidateOnValue.Blur => "blur",
            ValidateOnValue.Other => "other",
            ValidateOnValue.Submit => "submit",
            _ => value.ToString(),
    };
}
