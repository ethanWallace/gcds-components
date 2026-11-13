using Microsoft.AspNetCore.Razor.TagHelpers;
using System.Globalization;
using System.Text.Json;

namespace GcdsCore.Components;

/// <summary>
/// A grid is a responsive, flexible column layout to position elements on a page.
/// </summary>
[HtmlTargetElement("gcds-grid")]
public class GcdsGridTagHelper : TagHelper
{
public enum AlignContentValue
{
    Center,
    End,
    SpaceAround,
    SpaceBetween,
    SpaceEvenly,
    Start,
    Stretch
}

public enum AlignItemsValue
{
    Baseline,
    Center,
    End,
    Start,
    Stretch
}

public enum AlignmentValue
{
    Center,
    End,
    Start
}

public enum ContainerValue
{
    Full,
    Lg,
    Md,
    Sm,
    Xl,
    Xs
}

public enum DisplayValue
{
    Grid,
    InlineGrid
}

public enum GapValue
{
    Value150,
    Value175,
    Value200,
    Value225,
    Value250,
    Value300,
    Value350,
    Value400,
    Value450,
    Value500,
    Value550,
    Value600,
    Value650,
    Value700,
    Value750,
    Value800
}

public enum GapDesktopValue
{
    Value150,
    Value175,
    Value200,
    Value225,
    Value250,
    Value300,
    Value350,
    Value400,
    Value450,
    Value500,
    Value550,
    Value600,
    Value650,
    Value700,
    Value750,
    Value800
}

public enum GapTabletValue
{
    Value150,
    Value175,
    Value200,
    Value225,
    Value250,
    Value300,
    Value350,
    Value400,
    Value450,
    Value500,
    Value550,
    Value600,
    Value650,
    Value700,
    Value750,
    Value800
}

public enum JustifyContentValue
{
    Center,
    End,
    SpaceAround,
    SpaceBetween,
    SpaceEvenly,
    Start,
    Stretch
}

public enum JustifyItemsValue
{
    Center,
    End,
    Start,
    Stretch
}

public enum PlaceContentValue
{
    Center,
    End,
    SpaceAround,
    SpaceBetween,
    SpaceEvenly,
    Start,
    Stretch
}

public enum PlaceItemsValue
{
    Center,
    End,
    Start,
    Stretch
}

public enum TagValue
{
    Article,
    Aside,
    Div,
    Dl,
    Main,
    Nav,
    Ol,
    Section,
    Ul
}


    /// <summary>If total grid size is less than the size of its grid container, this property aligns the grid along the block (column) axis</summary>
    public AlignContentValue? AlignContent { get; set; }
    /// <summary>Aligns grid items along the block (column) axis</summary>
    public AlignItemsValue? AlignItems { get; set; }
    /// <summary>Defines the grid's alignment if the grid containers size is smaller than the parent's size.</summary>
    public AlignmentValue? Alignment { get; set; }
    /// <summary>Defines the default number of grid columns for all viewports if columns-tablet and columns-desktop are not defined. Option to set different layouts for desktop with columns-desktop and for tablet with columns-tablet.</summary>
    public string? Columns { get; set; } = default;
    /// <summary>Provides option to set a different number of grid columns for desktop screens.</summary>
    public string? ColumnsDesktop { get; set; } = default;
    /// <summary>Provides option to set a different number of grid columns for tablet screens. If columns-desktop is not defined, columns-tablet will be used to define the number of columns for desktop as well.</summary>
    public string? ColumnsTablet { get; set; } = default;
    /// <summary>Defines grid container size</summary>
    public ContainerValue? Container { get; set; }
    /// <summary>Defines element as grid or inline-grid container</summary>
    public DisplayValue? Display { get; set; }
    /// <summary>Sets all grid items to have an equal height, based on the tallest item.</summary>
    public bool EqualRowHeight { get; set; } = false;
    /// <summary>Defines the horizontal and vertical spacing between items in a grid container for all viewports if gap-tablet and gap-desktop are not defined. Option to set different spacing for desktop with gap-desktop and for tablet with gap-tablet.</summary>
    public GapValue? Gap { get; set; }
    /// <summary>Provides option to set horizontal and vertical spacing between items in a grid container for desktop screens.</summary>
    public GapDesktopValue? GapDesktop { get; set; }
    /// <summary>Provides option to set horizontal and vertical spacing between items in a grid container for tablet screens. If gap-desktop is not defined, gap-tablet will be used to define the spacing for desktop screens as well.</summary>
    public GapTabletValue? GapTablet { get; set; }
    /// <summary>If total grid size is less than the size of its grid container, this property aligns the grid along the inline (row) axis</summary>
    public JustifyContentValue? JustifyContent { get; set; }
    /// <summary>Aligns grid items along the inline (row) axis</summary>
    public JustifyItemsValue? JustifyItems { get; set; }
    /// <summary>Sets both the align-content + justify-content properties</summary>
    public PlaceContentValue? PlaceContent { get; set; }
    /// <summary>Sets both the align-items + justify-items properties</summary>
    public PlaceItemsValue? PlaceItems { get; set; }
    /// <summary>Set tag for grid container</summary>
    public TagValue? Tag { get; set; }

    public override void Process(TagHelperContext context, TagHelperOutput output)
    {
        output.TagName = "gcds-grid";
        if (AlignContent is not null)
            output.Attributes.SetAttribute("align-content", AlignContentValueToAttributeValue(AlignContent.Value));
        if (AlignItems is not null)
            output.Attributes.SetAttribute("align-items", AlignItemsValueToAttributeValue(AlignItems.Value));
        if (Alignment is not null)
            output.Attributes.SetAttribute("alignment", AlignmentValueToAttributeValue(Alignment.Value));
        if (!string.IsNullOrEmpty(Columns))
            output.Attributes.SetAttribute("columns", Columns);
        if (!string.IsNullOrEmpty(ColumnsDesktop))
            output.Attributes.SetAttribute("columns-desktop", ColumnsDesktop);
        if (!string.IsNullOrEmpty(ColumnsTablet))
            output.Attributes.SetAttribute("columns-tablet", ColumnsTablet);
        if (Container is not null)
            output.Attributes.SetAttribute("container", ContainerValueToAttributeValue(Container.Value));
        if (Display is not null)
            output.Attributes.SetAttribute("display", DisplayValueToAttributeValue(Display.Value));
        if (EqualRowHeight)
            output.Attributes.SetAttribute("equal-row-height", "");
        if (Gap is not null)
            output.Attributes.SetAttribute("gap", GapValueToAttributeValue(Gap.Value));
        if (GapDesktop is not null)
            output.Attributes.SetAttribute("gap-desktop", GapDesktopValueToAttributeValue(GapDesktop.Value));
        if (GapTablet is not null)
            output.Attributes.SetAttribute("gap-tablet", GapTabletValueToAttributeValue(GapTablet.Value));
        if (JustifyContent is not null)
            output.Attributes.SetAttribute("justify-content", JustifyContentValueToAttributeValue(JustifyContent.Value));
        if (JustifyItems is not null)
            output.Attributes.SetAttribute("justify-items", JustifyItemsValueToAttributeValue(JustifyItems.Value));
        if (PlaceContent is not null)
            output.Attributes.SetAttribute("place-content", PlaceContentValueToAttributeValue(PlaceContent.Value));
        if (PlaceItems is not null)
            output.Attributes.SetAttribute("place-items", PlaceItemsValueToAttributeValue(PlaceItems.Value));
        if (Tag is not null)
            output.Attributes.SetAttribute("tag", TagValueToAttributeValue(Tag.Value));
    }

    private static string AlignContentValueToAttributeValue(AlignContentValue value) => value switch
    {
            AlignContentValue.Center => "center",
            AlignContentValue.End => "end",
            AlignContentValue.SpaceAround => "space-around",
            AlignContentValue.SpaceBetween => "space-between",
            AlignContentValue.SpaceEvenly => "space-evenly",
            AlignContentValue.Start => "start",
            AlignContentValue.Stretch => "stretch",
            _ => value.ToString(),
    };

    private static string AlignItemsValueToAttributeValue(AlignItemsValue value) => value switch
    {
            AlignItemsValue.Baseline => "baseline",
            AlignItemsValue.Center => "center",
            AlignItemsValue.End => "end",
            AlignItemsValue.Start => "start",
            AlignItemsValue.Stretch => "stretch",
            _ => value.ToString(),
    };

    private static string AlignmentValueToAttributeValue(AlignmentValue value) => value switch
    {
            AlignmentValue.Center => "center",
            AlignmentValue.End => "end",
            AlignmentValue.Start => "start",
            _ => value.ToString(),
    };

    private static string ContainerValueToAttributeValue(ContainerValue value) => value switch
    {
            ContainerValue.Full => "full",
            ContainerValue.Lg => "lg",
            ContainerValue.Md => "md",
            ContainerValue.Sm => "sm",
            ContainerValue.Xl => "xl",
            ContainerValue.Xs => "xs",
            _ => value.ToString(),
    };

    private static string DisplayValueToAttributeValue(DisplayValue value) => value switch
    {
            DisplayValue.Grid => "grid",
            DisplayValue.InlineGrid => "inline-grid",
            _ => value.ToString(),
    };

    private static string GapValueToAttributeValue(GapValue value) => value switch
    {
            GapValue.Value150 => "150",
            GapValue.Value175 => "175",
            GapValue.Value200 => "200",
            GapValue.Value225 => "225",
            GapValue.Value250 => "250",
            GapValue.Value300 => "300",
            GapValue.Value350 => "350",
            GapValue.Value400 => "400",
            GapValue.Value450 => "450",
            GapValue.Value500 => "500",
            GapValue.Value550 => "550",
            GapValue.Value600 => "600",
            GapValue.Value650 => "650",
            GapValue.Value700 => "700",
            GapValue.Value750 => "750",
            GapValue.Value800 => "800",
            _ => value.ToString(),
    };

    private static string GapDesktopValueToAttributeValue(GapDesktopValue value) => value switch
    {
            GapDesktopValue.Value150 => "150",
            GapDesktopValue.Value175 => "175",
            GapDesktopValue.Value200 => "200",
            GapDesktopValue.Value225 => "225",
            GapDesktopValue.Value250 => "250",
            GapDesktopValue.Value300 => "300",
            GapDesktopValue.Value350 => "350",
            GapDesktopValue.Value400 => "400",
            GapDesktopValue.Value450 => "450",
            GapDesktopValue.Value500 => "500",
            GapDesktopValue.Value550 => "550",
            GapDesktopValue.Value600 => "600",
            GapDesktopValue.Value650 => "650",
            GapDesktopValue.Value700 => "700",
            GapDesktopValue.Value750 => "750",
            GapDesktopValue.Value800 => "800",
            _ => value.ToString(),
    };

    private static string GapTabletValueToAttributeValue(GapTabletValue value) => value switch
    {
            GapTabletValue.Value150 => "150",
            GapTabletValue.Value175 => "175",
            GapTabletValue.Value200 => "200",
            GapTabletValue.Value225 => "225",
            GapTabletValue.Value250 => "250",
            GapTabletValue.Value300 => "300",
            GapTabletValue.Value350 => "350",
            GapTabletValue.Value400 => "400",
            GapTabletValue.Value450 => "450",
            GapTabletValue.Value500 => "500",
            GapTabletValue.Value550 => "550",
            GapTabletValue.Value600 => "600",
            GapTabletValue.Value650 => "650",
            GapTabletValue.Value700 => "700",
            GapTabletValue.Value750 => "750",
            GapTabletValue.Value800 => "800",
            _ => value.ToString(),
    };

    private static string JustifyContentValueToAttributeValue(JustifyContentValue value) => value switch
    {
            JustifyContentValue.Center => "center",
            JustifyContentValue.End => "end",
            JustifyContentValue.SpaceAround => "space-around",
            JustifyContentValue.SpaceBetween => "space-between",
            JustifyContentValue.SpaceEvenly => "space-evenly",
            JustifyContentValue.Start => "start",
            JustifyContentValue.Stretch => "stretch",
            _ => value.ToString(),
    };

    private static string JustifyItemsValueToAttributeValue(JustifyItemsValue value) => value switch
    {
            JustifyItemsValue.Center => "center",
            JustifyItemsValue.End => "end",
            JustifyItemsValue.Start => "start",
            JustifyItemsValue.Stretch => "stretch",
            _ => value.ToString(),
    };

    private static string PlaceContentValueToAttributeValue(PlaceContentValue value) => value switch
    {
            PlaceContentValue.Center => "center",
            PlaceContentValue.End => "end",
            PlaceContentValue.SpaceAround => "space-around",
            PlaceContentValue.SpaceBetween => "space-between",
            PlaceContentValue.SpaceEvenly => "space-evenly",
            PlaceContentValue.Start => "start",
            PlaceContentValue.Stretch => "stretch",
            _ => value.ToString(),
    };

    private static string PlaceItemsValueToAttributeValue(PlaceItemsValue value) => value switch
    {
            PlaceItemsValue.Center => "center",
            PlaceItemsValue.End => "end",
            PlaceItemsValue.Start => "start",
            PlaceItemsValue.Stretch => "stretch",
            _ => value.ToString(),
    };

    private static string TagValueToAttributeValue(TagValue value) => value switch
    {
            TagValue.Article => "article",
            TagValue.Aside => "aside",
            TagValue.Div => "div",
            TagValue.Dl => "dl",
            TagValue.Main => "main",
            TagValue.Nav => "nav",
            TagValue.Ol => "ol",
            TagValue.Section => "section",
            TagValue.Ul => "ul",
            _ => value.ToString(),
    };
}
