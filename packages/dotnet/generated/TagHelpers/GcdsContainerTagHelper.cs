using Microsoft.AspNetCore.Razor.TagHelpers;
using System.Globalization;
using System.Text.Json;

namespace GcdsCore.Components;

/// <summary>
/// A container is a basic box layout with a set width for its contents.
/// </summary>
[HtmlTargetElement("gcds-container")]
public class GcdsContainerTagHelper : TagHelper
{
public enum AlignmentValue
{
    Center,
    End,
    Start
}

public enum LayoutValue
{
    Full,
    Page
}

public enum MarginValue
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

public enum PaddingValue
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
    Full,
    Lg,
    Md,
    Sm,
    Xl,
    Xs
}


    /// <summary>Defines the container's alignment. This property is ignored when `layout` is set to `page`, as the page layout has higher priority.</summary>
    public AlignmentValue? Alignment { get; set; }
    /// <summary>Defines if the container has a border.</summary>
    public bool Border { get; set; } = false;
    /// <summary>Controls how the container aligns with the page layout. When set to `page`, the container uses a max width of 1140px and switches to 90% width on smaller screens to scale consistently with core page layout components such as the header and footer. When set to `full`, the container spans the full width (100%) of its parent.</summary>
    public LayoutValue? Layout { get; set; }
    /// <summary>Container margin. Horizontal margins (left and right) are not applied if the container’s alignment property is defined, since alignment has higher priority.</summary>
    public MarginValue? Margin { get; set; }
    /// <summary>Defines the container's padding.</summary>
    public PaddingValue? Padding { get; set; }
    /// <summary>Defines container size.</summary>
    public SizeValue? Size { get; set; }
    /// <summary>Set tag for container.</summary>
    public string? Tag { get; set; } = "'div'";

    public override void Process(TagHelperContext context, TagHelperOutput output)
    {
        output.TagName = "gcds-container";
        if (Alignment is not null)
            output.Attributes.SetAttribute("alignment", AlignmentValueToAttributeValue(Alignment.Value));
        if (Border)
            output.Attributes.SetAttribute("border", "");
        if (Layout is not null)
            output.Attributes.SetAttribute("layout", LayoutValueToAttributeValue(Layout.Value));
        if (Margin is not null)
            output.Attributes.SetAttribute("margin", MarginValueToAttributeValue(Margin.Value));
        if (Padding is not null)
            output.Attributes.SetAttribute("padding", PaddingValueToAttributeValue(Padding.Value));
        if (Size is not null)
            output.Attributes.SetAttribute("size", SizeValueToAttributeValue(Size.Value));
        if (!string.IsNullOrEmpty(Tag))
            output.Attributes.SetAttribute("tag", Tag);
    }

    private static string AlignmentValueToAttributeValue(AlignmentValue value) => value switch
    {
            AlignmentValue.Center => "center",
            AlignmentValue.End => "end",
            AlignmentValue.Start => "start",
            _ => value.ToString(),
    };

    private static string LayoutValueToAttributeValue(LayoutValue value) => value switch
    {
            LayoutValue.Full => "full",
            LayoutValue.Page => "page",
            _ => value.ToString(),
    };

    private static string MarginValueToAttributeValue(MarginValue value) => value switch
    {
            MarginValue.Value0 => "0",
            MarginValue.Value100 => "100",
            MarginValue.Value1000 => "1000",
            MarginValue.Value1050 => "1050",
            MarginValue.Value1100 => "1100",
            MarginValue.Value1150 => "1150",
            MarginValue.Value1200 => "1200",
            MarginValue.Value125 => "125",
            MarginValue.Value1250 => "1250",
            MarginValue.Value150 => "150",
            MarginValue.Value175 => "175",
            MarginValue.Value200 => "200",
            MarginValue.Value225 => "225",
            MarginValue.Value25 => "25",
            MarginValue.Value250 => "250",
            MarginValue.Value300 => "300",
            MarginValue.Value350 => "350",
            MarginValue.Value400 => "400",
            MarginValue.Value450 => "450",
            MarginValue.Value50 => "50",
            MarginValue.Value500 => "500",
            MarginValue.Value550 => "550",
            MarginValue.Value600 => "600",
            MarginValue.Value650 => "650",
            MarginValue.Value700 => "700",
            MarginValue.Value75 => "75",
            MarginValue.Value750 => "750",
            MarginValue.Value800 => "800",
            MarginValue.Value850 => "850",
            MarginValue.Value900 => "900",
            MarginValue.Value950 => "950",
            _ => value.ToString(),
    };

    private static string PaddingValueToAttributeValue(PaddingValue value) => value switch
    {
            PaddingValue.Value0 => "0",
            PaddingValue.Value100 => "100",
            PaddingValue.Value1000 => "1000",
            PaddingValue.Value1050 => "1050",
            PaddingValue.Value1100 => "1100",
            PaddingValue.Value1150 => "1150",
            PaddingValue.Value1200 => "1200",
            PaddingValue.Value125 => "125",
            PaddingValue.Value1250 => "1250",
            PaddingValue.Value150 => "150",
            PaddingValue.Value175 => "175",
            PaddingValue.Value200 => "200",
            PaddingValue.Value225 => "225",
            PaddingValue.Value25 => "25",
            PaddingValue.Value250 => "250",
            PaddingValue.Value300 => "300",
            PaddingValue.Value350 => "350",
            PaddingValue.Value400 => "400",
            PaddingValue.Value450 => "450",
            PaddingValue.Value50 => "50",
            PaddingValue.Value500 => "500",
            PaddingValue.Value550 => "550",
            PaddingValue.Value600 => "600",
            PaddingValue.Value650 => "650",
            PaddingValue.Value700 => "700",
            PaddingValue.Value75 => "75",
            PaddingValue.Value750 => "750",
            PaddingValue.Value800 => "800",
            PaddingValue.Value850 => "850",
            PaddingValue.Value900 => "900",
            PaddingValue.Value950 => "950",
            _ => value.ToString(),
    };

    private static string SizeValueToAttributeValue(SizeValue value) => value switch
    {
            SizeValue.Full => "full",
            SizeValue.Lg => "lg",
            SizeValue.Md => "md",
            SizeValue.Sm => "sm",
            SizeValue.Xl => "xl",
            SizeValue.Xs => "xs",
            _ => value.ToString(),
    };
}
