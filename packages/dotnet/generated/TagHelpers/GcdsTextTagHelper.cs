using Microsoft.AspNetCore.Razor.TagHelpers;
using System.Globalization;
using System.Text.Json;

namespace GcdsCore.Components;

/// <summary>
/// Text is a styled and formatted paragraph that displays written content in an accessible way and matches Canada.ca typography styles.
/// </summary>
[HtmlTargetElement("gcds-text")]
public class GcdsTextTagHelper : TagHelper
{
public enum DisplayValue
{
    Block,
    Flex,
    Inline,
    InlineBlock,
    InlineFlex,
    None
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

public enum SizeValue
{
    Body,
    Small
}

public enum TextRoleValue
{
    Light,
    Primary,
    Secondary
}


    /// <summary>Sets the line length to a maximum amount of characters per line to ensure a comfortable, accessible reading length.</summary>
    public bool? CharacterLimit { get; set; }
    /// <summary>Specifies the display behaviour of the text.</summary>
    public DisplayValue? Display { get; set; }
    /// <summary>Adds margin below the text.</summary>
    public MarginBottomValue? MarginBottom { get; set; }
    /// <summary>Adds margin above the text.</summary>
    public MarginTopValue? MarginTop { get; set; }
    /// <summary>Sets the appropriate HTML tags for the selected size.</summary>
    public SizeValue? Size { get; set; }
    /// <summary>Sets the main style of the text.</summary>
    public TextRoleValue? TextRole { get; set; }

    public override void Process(TagHelperContext context, TagHelperOutput output)
    {
        output.TagName = "gcds-text";
        if (CharacterLimit is not null)
            output.Attributes.SetAttribute("character-limit", CharacterLimit.Value ? "" : "false");
        if (Display is not null)
            output.Attributes.SetAttribute("display", DisplayValueToAttributeValue(Display.Value));
        if (MarginBottom is not null)
            output.Attributes.SetAttribute("margin-bottom", MarginBottomValueToAttributeValue(MarginBottom.Value));
        if (MarginTop is not null)
            output.Attributes.SetAttribute("margin-top", MarginTopValueToAttributeValue(MarginTop.Value));
        if (Size is not null)
            output.Attributes.SetAttribute("size", SizeValueToAttributeValue(Size.Value));
        if (TextRole is not null)
            output.Attributes.SetAttribute("text-role", TextRoleValueToAttributeValue(TextRole.Value));
    }

    private static string DisplayValueToAttributeValue(DisplayValue value) => value switch
    {
            DisplayValue.Block => "block",
            DisplayValue.Flex => "flex",
            DisplayValue.Inline => "inline",
            DisplayValue.InlineBlock => "inline-block",
            DisplayValue.InlineFlex => "inline-flex",
            DisplayValue.None => "none",
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

    private static string SizeValueToAttributeValue(SizeValue value) => value switch
    {
            SizeValue.Body => "body",
            SizeValue.Small => "small",
            _ => value.ToString(),
    };

    private static string TextRoleValueToAttributeValue(TextRoleValue value) => value switch
    {
            TextRoleValue.Light => "light",
            TextRoleValue.Primary => "primary",
            TextRoleValue.Secondary => "secondary",
            _ => value.ToString(),
    };
}
