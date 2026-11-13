using Microsoft.AspNetCore.Razor.TagHelpers;
using System.Globalization;
using System.Text.Json;

namespace GcdsCore.Components;

/// <summary>
/// The header is the responsive Government of Canada branded header landmark.
/// </summary>
[HtmlTargetElement("gcds-header")]
public class GcdsHeaderTagHelper : TagHelper
{

    /// <summary>(required) GcdsLangToggle - The href attribute specifies the URL of the opposite language page</summary>
    public string? LangHref { get; set; } = default;
    /// <summary>GcdsSignature - GCDS signature links to Canada.ca</summary>
    public bool? SignatureHasLink { get; set; }
    /// <summary>(required) Top navigation - Skip to content href</summary>
    public string? SkipToHref { get; set; } = default;

    public override void Process(TagHelperContext context, TagHelperOutput output)
    {
        output.TagName = "gcds-header";
        if (!string.IsNullOrEmpty(LangHref))
            output.Attributes.SetAttribute("lang-href", LangHref);
        if (SignatureHasLink is not null)
            output.Attributes.SetAttribute("signature-has-link", SignatureHasLink.Value ? "" : "false");
        if (!string.IsNullOrEmpty(SkipToHref))
            output.Attributes.SetAttribute("skip-to-href", SkipToHref);
    }

}
