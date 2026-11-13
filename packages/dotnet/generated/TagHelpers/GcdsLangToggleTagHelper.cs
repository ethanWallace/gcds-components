using Microsoft.AspNetCore.Razor.TagHelpers;
using System.Globalization;
using System.Text.Json;

namespace GcdsCore.Components;

/// <summary>
/// The language toggle is a link to the same content in the other Official Language.
/// </summary>
[HtmlTargetElement("gcds-lang-toggle")]
public class GcdsLangToggleTagHelper : TagHelper
{

    /// <summary>(required) The href attribute specifies the URL of the opposite language page</summary>
    public string? Href { get; set; } = default;

    public override void Process(TagHelperContext context, TagHelperOutput output)
    {
        output.TagName = "gcds-lang-toggle";
        if (!string.IsNullOrEmpty(Href))
            output.Attributes.SetAttribute("href", Href);
    }

}
