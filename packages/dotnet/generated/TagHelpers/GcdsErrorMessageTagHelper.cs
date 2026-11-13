using Microsoft.AspNetCore.Razor.TagHelpers;
using System.Globalization;
using System.Text.Json;

namespace GcdsCore.Components;

/// <summary>
/// An error message is a description of a problem blocking a user goal.
/// </summary>
[HtmlTargetElement("gcds-error-message")]
public class GcdsErrorMessageTagHelper : TagHelper
{

    /// <summary>(required) Id attribute for the error message.</summary>
    public string? MessageId { get; set; } = default;

    public override void Process(TagHelperContext context, TagHelperOutput output)
    {
        output.TagName = "gcds-error-message";
        if (!string.IsNullOrEmpty(MessageId))
            output.Attributes.SetAttribute("message-id", MessageId);
    }

}
