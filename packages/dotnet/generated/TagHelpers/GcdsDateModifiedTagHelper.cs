using Microsoft.AspNetCore.Razor.TagHelpers;
using System.Globalization;
using System.Text.Json;

namespace GcdsCore.Components;

/// <summary>
/// Date modified is an indicator of the last update to a webpage or application.
/// </summary>
[HtmlTargetElement("gcds-date-modified")]
public class GcdsDateModifiedTagHelper : TagHelper
{
public enum TypeValue
{
    Date,
    Version
}


    /// <summary>Set date modified type. Default is date.</summary>
    public TypeValue? Type { get; set; }

    public override void Process(TagHelperContext context, TagHelperOutput output)
    {
        output.TagName = "gcds-date-modified";
        if (Type is not null)
            output.Attributes.SetAttribute("type", TypeValueToAttributeValue(Type.Value));
    }

    private static string TypeValueToAttributeValue(TypeValue value) => value switch
    {
            TypeValue.Date => "date",
            TypeValue.Version => "version",
            _ => value.ToString(),
    };
}
