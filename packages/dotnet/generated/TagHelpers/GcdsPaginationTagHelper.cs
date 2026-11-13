using Microsoft.AspNetCore.Razor.TagHelpers;
using System.Globalization;
using System.Text.Json;

namespace GcdsCore.Components;

/// <summary>
/// Pagination is a division of content into multiple linked pages.
/// </summary>
[HtmlTargetElement("gcds-pagination")]
public class GcdsPaginationTagHelper : TagHelper
{
public enum DisplayValue
{
    List,
    Simple
}


    /// <summary>List display - Current page number</summary>
    public double? CurrentPage { get; set; } = default;
    /// <summary>Determines the pagination display style.</summary>
    public DisplayValue? Display { get; set; }
    /// <summary>(required) Navigation element label</summary>
    public string? Label { get; set; } = default;
    /// <summary>Simple display - href for next link</summary>
    public string? NextHref { get; set; } = default;
    /// <summary>Simple display - lable for next link</summary>
    public string? NextLabel { get; set; } = default;
    /// <summary>Simple display - href for previous link</summary>
    public string? PreviousHref { get; set; } = default;
    /// <summary>Simple display - label for previous link</summary>
    public string? PreviousLabel { get; set; } = default;
    /// <summary>List display - Total number of pages</summary>
    public double? TotalPages { get; set; } = default;
    /// <summary>List display - URL object to create query strings and fragment on links</summary>
    public string? Url { get; set; } = default;

    public override void Process(TagHelperContext context, TagHelperOutput output)
    {
        output.TagName = "gcds-pagination";
        if (CurrentPage is not null)
            output.Attributes.SetAttribute("current-page", CurrentPage.Value.ToString(CultureInfo.InvariantCulture));
        if (Display is not null)
            output.Attributes.SetAttribute("display", DisplayValueToAttributeValue(Display.Value));
        if (!string.IsNullOrEmpty(Label))
            output.Attributes.SetAttribute("label", Label);
        if (!string.IsNullOrEmpty(NextHref))
            output.Attributes.SetAttribute("next-href", NextHref);
        if (!string.IsNullOrEmpty(NextLabel))
            output.Attributes.SetAttribute("next-label", NextLabel);
        if (!string.IsNullOrEmpty(PreviousHref))
            output.Attributes.SetAttribute("previous-href", PreviousHref);
        if (!string.IsNullOrEmpty(PreviousLabel))
            output.Attributes.SetAttribute("previous-label", PreviousLabel);
        if (TotalPages is not null)
            output.Attributes.SetAttribute("total-pages", TotalPages.Value.ToString(CultureInfo.InvariantCulture));
        if (!string.IsNullOrEmpty(Url))
            output.Attributes.SetAttribute("url", Url);
    }

    private static string DisplayValueToAttributeValue(DisplayValue value) => value switch
    {
            DisplayValue.List => "list",
            DisplayValue.Simple => "simple",
            _ => value.ToString(),
    };
}
