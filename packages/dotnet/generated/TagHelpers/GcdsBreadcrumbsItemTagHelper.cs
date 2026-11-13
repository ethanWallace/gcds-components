using Microsoft.AspNetCore.Razor.TagHelpers;
using System.Globalization;
using System.Text.Json;

namespace GcdsCore.Components;

/// <summary>
/// Breadcrumbs item represents a single link in the breadcrumbs navigation.
/// </summary>
[HtmlTargetElement("gcds-breadcrumbs-item")]
public class GcdsBreadcrumbsItemTagHelper : TagHelper
{

    /// <summary>(required) Specifies the href of the breadcrumb item.</summary>
    public string? Href { get; set; } = default;

    public override void Process(TagHelperContext context, TagHelperOutput output)
    {
        output.TagName = "gcds-breadcrumbs-item";
        if (!string.IsNullOrEmpty(Href))
            output.Attributes.SetAttribute("href", Href);
    }

}
