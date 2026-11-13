using Microsoft.AspNetCore.Razor.TagHelpers;
using System.Globalization;
using System.Text.Json;

namespace GcdsCore.Components;

/// <summary>
/// A link is a navigational element that brings a person to a new page, website, file, or section on the current page.
/// </summary>
[HtmlTargetElement("gcds-link")]
public class GcdsLinkTagHelper : TagHelper
{
public enum DisplayValue
{
    Block,
    Inline
}

public enum LinkRoleValue
{
    Default,
    Light
}

public enum SizeValue
{
    Inherit,
    Regular,
    Small
}


    /// <summary>Sets the display behavior of the link</summary>
    public DisplayValue? Display { get; set; }
    /// <summary>The download attribute specifies that the target (the file specified in the href attribute) will be downloaded when a user clicks on the hyperlink</summary>
    public string? Download { get; set; } = default;
    /// <summary>Whether the link is external or not</summary>
    public bool External { get; set; } = false;
    /// <summary>(required) The href attribute specifies the URL of the page the link goes to</summary>
    public string? Href { get; set; } = default;
    /// <summary>Sets the main style of the link.</summary>
    public LinkRoleValue? LinkRole { get; set; }
    /// <summary>The rel attribute specifies the relationship between the current document and the linked document</summary>
    public string? Rel { get; set; } = default;
    /// <summary>Set the link size</summary>
    public SizeValue? Size { get; set; }
    /// <summary>The target attribute specifies where to open the linked document</summary>
    public string? Target { get; set; } = "'_self'";
    /// <summary>The type specifies the media type of the linked document</summary>
    public string? Type { get; set; } = default;

    public override void Process(TagHelperContext context, TagHelperOutput output)
    {
        output.TagName = "gcds-link";
        if (Display is not null)
            output.Attributes.SetAttribute("display", DisplayValueToAttributeValue(Display.Value));
        if (!string.IsNullOrEmpty(Download))
            output.Attributes.SetAttribute("download", Download);
        if (External)
            output.Attributes.SetAttribute("external", "");
        if (!string.IsNullOrEmpty(Href))
            output.Attributes.SetAttribute("href", Href);
        if (LinkRole is not null)
            output.Attributes.SetAttribute("link-role", LinkRoleValueToAttributeValue(LinkRole.Value));
        if (!string.IsNullOrEmpty(Rel))
            output.Attributes.SetAttribute("rel", Rel);
        if (Size is not null)
            output.Attributes.SetAttribute("size", SizeValueToAttributeValue(Size.Value));
        if (!string.IsNullOrEmpty(Target))
            output.Attributes.SetAttribute("target", Target);
        if (!string.IsNullOrEmpty(Type))
            output.Attributes.SetAttribute("type", Type);
    }

    private static string DisplayValueToAttributeValue(DisplayValue value) => value switch
    {
            DisplayValue.Block => "block",
            DisplayValue.Inline => "inline",
            _ => value.ToString(),
    };

    private static string LinkRoleValueToAttributeValue(LinkRoleValue value) => value switch
    {
            LinkRoleValue.Default => "default",
            LinkRoleValue.Light => "light",
            _ => value.ToString(),
    };

    private static string SizeValueToAttributeValue(SizeValue value) => value switch
    {
            SizeValue.Inherit => "inherit",
            SizeValue.Regular => "regular",
            SizeValue.Small => "small",
            _ => value.ToString(),
    };
}
