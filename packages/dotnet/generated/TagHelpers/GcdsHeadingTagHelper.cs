using Microsoft.AspNetCore.Razor.TagHelpers;
using System.Globalization;
using System.Text.Json;

namespace GcdsCore.Components;

/// <summary>
/// A heading is a title that establishes levels of hierarchy to organize page content into a structure and matches Canada.ca typography styles.
/// </summary>
[HtmlTargetElement("gcds-heading")]
public class GcdsHeadingTagHelper : TagHelper
{
public enum HeadingRoleValue
{
    Light,
    Primary,
    Secondary
}

public enum MarginBottomValue
{
    Value0,
    Value100,
    Value1000,
    Value1050,
    Value1100,
    Value1150,
    Value1200,
    Value125,
    Value1250,
    Value150,
    Value175,
    Value200,
    Value225,
    Value25,
    Value250,
    Value300,
    Value350,
    Value400,
    Value450,
    Value50,
    Value500,
    Value550,
    Value600,
    Value650,
    Value700,
    Value75,
    Value750,
    Value800,
    Value850,
    Value900,
    Value950
}

public enum MarginTopValue
{
    Value0,
    Value100,
    Value1000,
    Value1050,
    Value1100,
    Value1150,
    Value1200,
    Value125,
    Value1250,
    Value150,
    Value175,
    Value200,
    Value225,
    Value25,
    Value250,
    Value300,
    Value350,
    Value400,
    Value450,
    Value50,
    Value500,
    Value550,
    Value600,
    Value650,
    Value700,
    Value75,
    Value750,
    Value800,
    Value850,
    Value900,
    Value950
}

public enum TagValue
{
    H1,
    H2,
    H3,
    H4,
    H5,
    H6
}


    /// <summary>Sets the line length to a maximum amount of characters per line for each heading level, ensuring a comfortable, accessible reading length.</summary>
    public bool? CharacterLimit { get; set; }
    /// <summary>Sets the main style of the heading.</summary>
    public HeadingRoleValue? HeadingRole { get; set; }
    /// <summary>Adds margin below the heading. The default margin-botttom is 300.</summary>
    public MarginBottomValue? MarginBottom { get; set; }
    /// <summary>Adds margin above the heading. The default margin-top for h1 is set to 0, while for h2 to h6 headings, it's 600.</summary>
    public MarginTopValue? MarginTop { get; set; }
    /// <summary>(required) Sets the appropriate HTML tag for the selected level.</summary>
    public TagValue? Tag { get; set; }

    public override void Process(TagHelperContext context, TagHelperOutput output)
    {
        output.TagName = "gcds-heading";
        if (CharacterLimit is not null)
            output.Attributes.SetAttribute("character-limit", CharacterLimit.Value ? "" : "false");
        if (HeadingRole is not null)
            output.Attributes.SetAttribute("heading-role", HeadingRoleValueToAttributeValue(HeadingRole.Value));
        if (MarginBottom is not null)
            output.Attributes.SetAttribute("margin-bottom", MarginBottomValueToAttributeValue(MarginBottom.Value));
        if (MarginTop is not null)
            output.Attributes.SetAttribute("margin-top", MarginTopValueToAttributeValue(MarginTop.Value));
        if (Tag is not null)
            output.Attributes.SetAttribute("tag", TagValueToAttributeValue(Tag.Value));
    }

    private static string HeadingRoleValueToAttributeValue(HeadingRoleValue value) => value switch
    {
            HeadingRoleValue.Light => "light",
            HeadingRoleValue.Primary => "primary",
            HeadingRoleValue.Secondary => "secondary",
            _ => value.ToString(),
    };

    private static string MarginBottomValueToAttributeValue(MarginBottomValue value) => value switch
    {
            MarginBottomValue.Value0 => "0",
            MarginBottomValue.Value100 => "100",
            MarginBottomValue.Value1000 => "1000",
            MarginBottomValue.Value1050 => "1050",
            MarginBottomValue.Value1100 => "1100",
            MarginBottomValue.Value1150 => "1150",
            MarginBottomValue.Value1200 => "1200",
            MarginBottomValue.Value125 => "125",
            MarginBottomValue.Value1250 => "1250",
            MarginBottomValue.Value150 => "150",
            MarginBottomValue.Value175 => "175",
            MarginBottomValue.Value200 => "200",
            MarginBottomValue.Value225 => "225",
            MarginBottomValue.Value25 => "25",
            MarginBottomValue.Value250 => "250",
            MarginBottomValue.Value300 => "300",
            MarginBottomValue.Value350 => "350",
            MarginBottomValue.Value400 => "400",
            MarginBottomValue.Value450 => "450",
            MarginBottomValue.Value50 => "50",
            MarginBottomValue.Value500 => "500",
            MarginBottomValue.Value550 => "550",
            MarginBottomValue.Value600 => "600",
            MarginBottomValue.Value650 => "650",
            MarginBottomValue.Value700 => "700",
            MarginBottomValue.Value75 => "75",
            MarginBottomValue.Value750 => "750",
            MarginBottomValue.Value800 => "800",
            MarginBottomValue.Value850 => "850",
            MarginBottomValue.Value900 => "900",
            MarginBottomValue.Value950 => "950",
            _ => value.ToString(),
    };

    private static string MarginTopValueToAttributeValue(MarginTopValue value) => value switch
    {
            MarginTopValue.Value0 => "0",
            MarginTopValue.Value100 => "100",
            MarginTopValue.Value1000 => "1000",
            MarginTopValue.Value1050 => "1050",
            MarginTopValue.Value1100 => "1100",
            MarginTopValue.Value1150 => "1150",
            MarginTopValue.Value1200 => "1200",
            MarginTopValue.Value125 => "125",
            MarginTopValue.Value1250 => "1250",
            MarginTopValue.Value150 => "150",
            MarginTopValue.Value175 => "175",
            MarginTopValue.Value200 => "200",
            MarginTopValue.Value225 => "225",
            MarginTopValue.Value25 => "25",
            MarginTopValue.Value250 => "250",
            MarginTopValue.Value300 => "300",
            MarginTopValue.Value350 => "350",
            MarginTopValue.Value400 => "400",
            MarginTopValue.Value450 => "450",
            MarginTopValue.Value50 => "50",
            MarginTopValue.Value500 => "500",
            MarginTopValue.Value550 => "550",
            MarginTopValue.Value600 => "600",
            MarginTopValue.Value650 => "650",
            MarginTopValue.Value700 => "700",
            MarginTopValue.Value75 => "75",
            MarginTopValue.Value750 => "750",
            MarginTopValue.Value800 => "800",
            MarginTopValue.Value850 => "850",
            MarginTopValue.Value900 => "900",
            MarginTopValue.Value950 => "950",
            _ => value.ToString(),
    };

    private static string TagValueToAttributeValue(TagValue value) => value switch
    {
            TagValue.H1 => "h1",
            TagValue.H2 => "h2",
            TagValue.H3 => "h3",
            TagValue.H4 => "h4",
            TagValue.H5 => "h5",
            TagValue.H6 => "h6",
            _ => value.ToString(),
    };
}
