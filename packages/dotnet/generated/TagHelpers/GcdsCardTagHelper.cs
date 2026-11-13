using Microsoft.AspNetCore.Razor.TagHelpers;
using System.Globalization;
using System.Text.Json;

namespace GcdsCore.Components;

/// <summary>
/// A card is a box containing structured, actionable content on a single topic.
/// </summary>
[HtmlTargetElement("gcds-card")]
public class GcdsCardTagHelper : TagHelper
{
public enum CardTitleTagValue
{
    H3,
    H4,
    H5,
    H6
}


    /// <summary>The badge attribute specifies the badge text that appears in the top left corner of the card. 20 character limit.</summary>
    public string? Badge { get; set; } = default;
    /// <summary>(required) The card title attribute specifies the title that appears on the card</summary>
    public string? CardTitle { get; set; } = default;
    /// <summary>The card title tag property specifies the HTML heading element for the title. This property does not modify the font size. It is used to assign the heading level in order to maintain heading hierarchy and accessibility for assistive technologies.</summary>
    public CardTitleTagValue? CardTitleTag { get; set; }
    /// <summary>The description attribute specifies the body of text that appears on the card</summary>
    public string? Description { get; set; } = default;
    /// <summary>(required) The href attribute specifies the URL of the page the link goes to</summary>
    public string? Href { get; set; } = default;
    /// <summary>The img alt attribute specifies the alt text for the image provided, if none, image will be decorative</summary>
    public string? ImgAlt { get; set; } = default;
    /// <summary>The img src attribute specifies the path to the image</summary>
    public string? ImgSrc { get; set; } = default;
    /// <summary>The rel attribute specifies the relationship between the current document and the linked document</summary>
    public string? Rel { get; set; } = default;
    /// <summary>The target attribute specifies where to open the linked document</summary>
    public string? Target { get; set; } = default;

    public override void Process(TagHelperContext context, TagHelperOutput output)
    {
        output.TagName = "gcds-card";
        if (!string.IsNullOrEmpty(Badge))
            output.Attributes.SetAttribute("badge", Badge);
        if (!string.IsNullOrEmpty(CardTitle))
            output.Attributes.SetAttribute("card-title", CardTitle);
        if (CardTitleTag is not null)
            output.Attributes.SetAttribute("card-title-tag", CardTitleTagValueToAttributeValue(CardTitleTag.Value));
        if (!string.IsNullOrEmpty(Description))
            output.Attributes.SetAttribute("description", Description);
        if (!string.IsNullOrEmpty(Href))
            output.Attributes.SetAttribute("href", Href);
        if (!string.IsNullOrEmpty(ImgAlt))
            output.Attributes.SetAttribute("img-alt", ImgAlt);
        if (!string.IsNullOrEmpty(ImgSrc))
            output.Attributes.SetAttribute("img-src", ImgSrc);
        if (!string.IsNullOrEmpty(Rel))
            output.Attributes.SetAttribute("rel", Rel);
        if (!string.IsNullOrEmpty(Target))
            output.Attributes.SetAttribute("target", Target);
    }

    private static string CardTitleTagValueToAttributeValue(CardTitleTagValue value) => value switch
    {
            CardTitleTagValue.H3 => "h3",
            CardTitleTagValue.H4 => "h4",
            CardTitleTagValue.H5 => "h5",
            CardTitleTagValue.H6 => "h6",
            _ => value.ToString(),
    };
}
