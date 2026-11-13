using Microsoft.AspNetCore.Razor.TagHelpers;
using System.Globalization;
using System.Text.Json;

namespace GcdsCore.Components;

/// <summary>
/// Breadcrumbs is a path to the current page from each preceding level of the site's hierarchy.
/// </summary>
[HtmlTargetElement("gcds-breadcrumbs")]
public class GcdsBreadcrumbsTagHelper : TagHelper
{

    /// <summary>Defines if the default canada.ca link is displayed or omitted.</summary>
    public bool HideCanadaLink { get; set; } = false;

    public override void Process(TagHelperContext context, TagHelperOutput output)
    {
        output.TagName = "gcds-breadcrumbs";
        if (HideCanadaLink)
            output.Attributes.SetAttribute("hide-canada-link", "");
    }

}
