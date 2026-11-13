using System.Text.Json;

namespace GcdsCore.Components;

public enum GcdsAlertAlertRoleValue
{
    Danger,
    Info,
    Success,
    Warning
}

public enum GcdsAlertContainerValue
{
    Full,
    Lg,
    Md,
    Sm,
    Xl,
    Xs
}

public enum GcdsButtonButtonRoleValue
{
    Danger,
    Primary,
    Secondary,
    Start
}

public enum GcdsButtonSizeValue
{
    Regular,
    Small
}

public enum GcdsButtonTypeValue
{
    Button,
    Link,
    Reset,
    Submit
}

public enum GcdsCardCardTitleTagValue
{
    H3,
    H4,
    H5,
    H6
}

public enum GcdsCheckboxesValidateOnValue
{
    Blur,
    Other,
    Submit
}

public enum GcdsContainerAlignmentValue
{
    Center,
    End,
    Start
}

public enum GcdsContainerLayoutValue
{
    Full,
    Page
}

public enum GcdsContainerMarginValue
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

public enum GcdsContainerPaddingValue
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

public enum GcdsContainerSizeValue
{
    Full,
    Lg,
    Md,
    Sm,
    Xl,
    Xs
}

public enum GcdsDateInputAutocompleteValue
{
    Bday,
    CcExp,
    Off,
    On
}

public enum GcdsDateInputFormatValue
{
    Compact,
    Full,
    Iso
}

public enum GcdsDateInputValidateOnValue
{
    Blur,
    Other,
    Submit
}

public enum GcdsDateModifiedTypeValue
{
    Date,
    Version
}

public enum GcdsFieldsetLegendSizeValue
{
    H2,
    H3,
    H4,
    H5,
    H6
}

public enum GcdsFileUploaderValidateOnValue
{
    Blur,
    Other,
    Submit
}

public enum GcdsFooterDisplayValue
{
    Compact,
    Full
}

public enum GcdsGridAlignContentValue
{
    Center,
    End,
    SpaceAround,
    SpaceBetween,
    SpaceEvenly,
    Start,
    Stretch
}

public enum GcdsGridAlignItemsValue
{
    Baseline,
    Center,
    End,
    Start,
    Stretch
}

public enum GcdsGridAlignmentValue
{
    Center,
    End,
    Start
}

public enum GcdsGridContainerValue
{
    Full,
    Lg,
    Md,
    Sm,
    Xl,
    Xs
}

public enum GcdsGridDisplayValue
{
    Grid,
    InlineGrid
}

public enum GcdsGridGapValue
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

public enum GcdsGridGapDesktopValue
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

public enum GcdsGridGapTabletValue
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

public enum GcdsGridJustifyContentValue
{
    Center,
    End,
    SpaceAround,
    SpaceBetween,
    SpaceEvenly,
    Start,
    Stretch
}

public enum GcdsGridJustifyItemsValue
{
    Center,
    End,
    Start,
    Stretch
}

public enum GcdsGridPlaceContentValue
{
    Center,
    End,
    SpaceAround,
    SpaceBetween,
    SpaceEvenly,
    Start,
    Stretch
}

public enum GcdsGridPlaceItemsValue
{
    Center,
    End,
    Start,
    Stretch
}

public enum GcdsGridTagValue
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

public enum GcdsHeadingHeadingRoleValue
{
    Light,
    Primary,
    Secondary
}

public enum GcdsHeadingMarginBottomValue
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

public enum GcdsHeadingMarginTopValue
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

public enum GcdsHeadingTagValue
{
    H1,
    H2,
    H3,
    H4,
    H5,
    H6
}

public enum GcdsIconMarginLeftValue
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

public enum GcdsIconMarginRightValue
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

public enum GcdsIconNameValue
{
    ArrowDown,
    ArrowUp,
    ArrowUpDown,
    CheckmarkCircle,
    ChevronDown,
    ChevronLeft,
    ChevronRight,
    ChevronUp,
    Close,
    Download,
    Email,
    ExclamationCircle,
    External,
    Filter,
    InfoCircle,
    Phone,
    Search,
    Sort,
    Tune,
    WarningTriangle
}

public enum GcdsIconSizeValue
{
    H1,
    H2,
    H3,
    H4,
    H5,
    H6,
    Inherit,
    Text,
    TextSmall
}

public enum GcdsInputInputmodeValue
{
    Decimal,
    Email,
    None,
    Numeric,
    Search,
    Tel,
    Text,
    Url
}

public enum GcdsInputTypeValue
{
    Email,
    Number,
    Password,
    Search,
    Tel,
    Text,
    Url
}

public enum GcdsInputValidateOnValue
{
    Blur,
    Other,
    Submit
}

public enum GcdsLinkDisplayValue
{
    Block,
    Inline
}

public enum GcdsLinkLinkRoleValue
{
    Default,
    Light
}

public enum GcdsLinkSizeValue
{
    Inherit,
    Regular,
    Small
}

public enum GcdsNoticeNoticeRoleValue
{
    Danger,
    Info,
    Success,
    Warning
}

public enum GcdsNoticeNoticeTitleTagValue
{
    H2,
    H3,
    H4,
    H5
}

public enum GcdsPaginationDisplayValue
{
    List,
    Simple
}

public enum GcdsRadiosValidateOnValue
{
    Blur,
    Other,
    Submit
}

public enum GcdsSearchMethodValue
{
    Get,
    Post
}

public enum GcdsSelectValidateOnValue
{
    Blur,
    Other,
    Submit
}

public enum GcdsSignatureTypeValue
{
    Signature,
    Wordmark
}

public enum GcdsSignatureVariantValue
{
    Colour,
    White
}

public enum GcdsSrOnlyTagValue
{
    H1,
    H2,
    H3,
    H4,
    H5,
    H6,
    P,
    Span
}

public enum GcdsStepperTagValue
{
    H1,
    H2,
    H3
}

public enum GcdsTextDisplayValue
{
    Block,
    Flex,
    Inline,
    InlineBlock,
    InlineFlex,
    None
}

public enum GcdsTextMarginBottomValue
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

public enum GcdsTextMarginTopValue
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

public enum GcdsTextSizeValue
{
    Body,
    Small
}

public enum GcdsTextTextRoleValue
{
    Light,
    Primary,
    Secondary
}

public enum GcdsTextareaValidateOnValue
{
    Blur,
    Other,
    Submit
}

public enum GcdsTopNavAlignmentValue
{
    End,
    Start
}

public static class GeneratedTypeConversions
{
    public static string? ToAttributeValue(GcdsAlertAlertRoleValue? value) => value switch
    {
        GcdsAlertAlertRoleValue.Danger => "danger",
        GcdsAlertAlertRoleValue.Info => "info",
        GcdsAlertAlertRoleValue.Success => "success",
        GcdsAlertAlertRoleValue.Warning => "warning",
        _ => null,
    };

    public static string? ToAttributeValue(GcdsAlertContainerValue? value) => value switch
    {
        GcdsAlertContainerValue.Full => "full",
        GcdsAlertContainerValue.Lg => "lg",
        GcdsAlertContainerValue.Md => "md",
        GcdsAlertContainerValue.Sm => "sm",
        GcdsAlertContainerValue.Xl => "xl",
        GcdsAlertContainerValue.Xs => "xs",
        _ => null,
    };

    public static string? ToAttributeValue(GcdsButtonButtonRoleValue? value) => value switch
    {
        GcdsButtonButtonRoleValue.Danger => "danger",
        GcdsButtonButtonRoleValue.Primary => "primary",
        GcdsButtonButtonRoleValue.Secondary => "secondary",
        GcdsButtonButtonRoleValue.Start => "start",
        _ => null,
    };

    public static string? ToAttributeValue(GcdsButtonSizeValue? value) => value switch
    {
        GcdsButtonSizeValue.Regular => "regular",
        GcdsButtonSizeValue.Small => "small",
        _ => null,
    };

    public static string? ToAttributeValue(GcdsButtonTypeValue? value) => value switch
    {
        GcdsButtonTypeValue.Button => "button",
        GcdsButtonTypeValue.Link => "link",
        GcdsButtonTypeValue.Reset => "reset",
        GcdsButtonTypeValue.Submit => "submit",
        _ => null,
    };

    public static string? ToAttributeValue(GcdsCardCardTitleTagValue? value) => value switch
    {
        GcdsCardCardTitleTagValue.H3 => "h3",
        GcdsCardCardTitleTagValue.H4 => "h4",
        GcdsCardCardTitleTagValue.H5 => "h5",
        GcdsCardCardTitleTagValue.H6 => "h6",
        _ => null,
    };

    public static string? ToAttributeValue(GcdsCheckboxesValidateOnValue? value) => value switch
    {
        GcdsCheckboxesValidateOnValue.Blur => "blur",
        GcdsCheckboxesValidateOnValue.Other => "other",
        GcdsCheckboxesValidateOnValue.Submit => "submit",
        _ => null,
    };

    public static string? ToAttributeValue(GcdsContainerAlignmentValue? value) => value switch
    {
        GcdsContainerAlignmentValue.Center => "center",
        GcdsContainerAlignmentValue.End => "end",
        GcdsContainerAlignmentValue.Start => "start",
        _ => null,
    };

    public static string? ToAttributeValue(GcdsContainerLayoutValue? value) => value switch
    {
        GcdsContainerLayoutValue.Full => "full",
        GcdsContainerLayoutValue.Page => "page",
        _ => null,
    };

    public static string? ToAttributeValue(GcdsContainerMarginValue? value) => value switch
    {
        GcdsContainerMarginValue.Value0 => "0",
        GcdsContainerMarginValue.Value100 => "100",
        GcdsContainerMarginValue.Value1000 => "1000",
        GcdsContainerMarginValue.Value1050 => "1050",
        GcdsContainerMarginValue.Value1100 => "1100",
        GcdsContainerMarginValue.Value1150 => "1150",
        GcdsContainerMarginValue.Value1200 => "1200",
        GcdsContainerMarginValue.Value125 => "125",
        GcdsContainerMarginValue.Value1250 => "1250",
        GcdsContainerMarginValue.Value150 => "150",
        GcdsContainerMarginValue.Value175 => "175",
        GcdsContainerMarginValue.Value200 => "200",
        GcdsContainerMarginValue.Value225 => "225",
        GcdsContainerMarginValue.Value25 => "25",
        GcdsContainerMarginValue.Value250 => "250",
        GcdsContainerMarginValue.Value300 => "300",
        GcdsContainerMarginValue.Value350 => "350",
        GcdsContainerMarginValue.Value400 => "400",
        GcdsContainerMarginValue.Value450 => "450",
        GcdsContainerMarginValue.Value50 => "50",
        GcdsContainerMarginValue.Value500 => "500",
        GcdsContainerMarginValue.Value550 => "550",
        GcdsContainerMarginValue.Value600 => "600",
        GcdsContainerMarginValue.Value650 => "650",
        GcdsContainerMarginValue.Value700 => "700",
        GcdsContainerMarginValue.Value75 => "75",
        GcdsContainerMarginValue.Value750 => "750",
        GcdsContainerMarginValue.Value800 => "800",
        GcdsContainerMarginValue.Value850 => "850",
        GcdsContainerMarginValue.Value900 => "900",
        GcdsContainerMarginValue.Value950 => "950",
        _ => null,
    };

    public static string? ToAttributeValue(GcdsContainerPaddingValue? value) => value switch
    {
        GcdsContainerPaddingValue.Value0 => "0",
        GcdsContainerPaddingValue.Value100 => "100",
        GcdsContainerPaddingValue.Value1000 => "1000",
        GcdsContainerPaddingValue.Value1050 => "1050",
        GcdsContainerPaddingValue.Value1100 => "1100",
        GcdsContainerPaddingValue.Value1150 => "1150",
        GcdsContainerPaddingValue.Value1200 => "1200",
        GcdsContainerPaddingValue.Value125 => "125",
        GcdsContainerPaddingValue.Value1250 => "1250",
        GcdsContainerPaddingValue.Value150 => "150",
        GcdsContainerPaddingValue.Value175 => "175",
        GcdsContainerPaddingValue.Value200 => "200",
        GcdsContainerPaddingValue.Value225 => "225",
        GcdsContainerPaddingValue.Value25 => "25",
        GcdsContainerPaddingValue.Value250 => "250",
        GcdsContainerPaddingValue.Value300 => "300",
        GcdsContainerPaddingValue.Value350 => "350",
        GcdsContainerPaddingValue.Value400 => "400",
        GcdsContainerPaddingValue.Value450 => "450",
        GcdsContainerPaddingValue.Value50 => "50",
        GcdsContainerPaddingValue.Value500 => "500",
        GcdsContainerPaddingValue.Value550 => "550",
        GcdsContainerPaddingValue.Value600 => "600",
        GcdsContainerPaddingValue.Value650 => "650",
        GcdsContainerPaddingValue.Value700 => "700",
        GcdsContainerPaddingValue.Value75 => "75",
        GcdsContainerPaddingValue.Value750 => "750",
        GcdsContainerPaddingValue.Value800 => "800",
        GcdsContainerPaddingValue.Value850 => "850",
        GcdsContainerPaddingValue.Value900 => "900",
        GcdsContainerPaddingValue.Value950 => "950",
        _ => null,
    };

    public static string? ToAttributeValue(GcdsContainerSizeValue? value) => value switch
    {
        GcdsContainerSizeValue.Full => "full",
        GcdsContainerSizeValue.Lg => "lg",
        GcdsContainerSizeValue.Md => "md",
        GcdsContainerSizeValue.Sm => "sm",
        GcdsContainerSizeValue.Xl => "xl",
        GcdsContainerSizeValue.Xs => "xs",
        _ => null,
    };

    public static string? ToAttributeValue(GcdsDateInputAutocompleteValue? value) => value switch
    {
        GcdsDateInputAutocompleteValue.Bday => "bday",
        GcdsDateInputAutocompleteValue.CcExp => "cc-exp",
        GcdsDateInputAutocompleteValue.Off => "off",
        GcdsDateInputAutocompleteValue.On => "on",
        _ => null,
    };

    public static string? ToAttributeValue(GcdsDateInputFormatValue? value) => value switch
    {
        GcdsDateInputFormatValue.Compact => "compact",
        GcdsDateInputFormatValue.Full => "full",
        GcdsDateInputFormatValue.Iso => "iso",
        _ => null,
    };

    public static string? ToAttributeValue(GcdsDateInputValidateOnValue? value) => value switch
    {
        GcdsDateInputValidateOnValue.Blur => "blur",
        GcdsDateInputValidateOnValue.Other => "other",
        GcdsDateInputValidateOnValue.Submit => "submit",
        _ => null,
    };

    public static string? ToAttributeValue(GcdsDateModifiedTypeValue? value) => value switch
    {
        GcdsDateModifiedTypeValue.Date => "date",
        GcdsDateModifiedTypeValue.Version => "version",
        _ => null,
    };

    public static string? ToAttributeValue(GcdsFieldsetLegendSizeValue? value) => value switch
    {
        GcdsFieldsetLegendSizeValue.H2 => "h2",
        GcdsFieldsetLegendSizeValue.H3 => "h3",
        GcdsFieldsetLegendSizeValue.H4 => "h4",
        GcdsFieldsetLegendSizeValue.H5 => "h5",
        GcdsFieldsetLegendSizeValue.H6 => "h6",
        _ => null,
    };

    public static string? ToAttributeValue(GcdsFileUploaderValidateOnValue? value) => value switch
    {
        GcdsFileUploaderValidateOnValue.Blur => "blur",
        GcdsFileUploaderValidateOnValue.Other => "other",
        GcdsFileUploaderValidateOnValue.Submit => "submit",
        _ => null,
    };

    public static string? ToAttributeValue(GcdsFooterDisplayValue? value) => value switch
    {
        GcdsFooterDisplayValue.Compact => "compact",
        GcdsFooterDisplayValue.Full => "full",
        _ => null,
    };

    public static string? ToAttributeValue(GcdsGridAlignContentValue? value) => value switch
    {
        GcdsGridAlignContentValue.Center => "center",
        GcdsGridAlignContentValue.End => "end",
        GcdsGridAlignContentValue.SpaceAround => "space-around",
        GcdsGridAlignContentValue.SpaceBetween => "space-between",
        GcdsGridAlignContentValue.SpaceEvenly => "space-evenly",
        GcdsGridAlignContentValue.Start => "start",
        GcdsGridAlignContentValue.Stretch => "stretch",
        _ => null,
    };

    public static string? ToAttributeValue(GcdsGridAlignItemsValue? value) => value switch
    {
        GcdsGridAlignItemsValue.Baseline => "baseline",
        GcdsGridAlignItemsValue.Center => "center",
        GcdsGridAlignItemsValue.End => "end",
        GcdsGridAlignItemsValue.Start => "start",
        GcdsGridAlignItemsValue.Stretch => "stretch",
        _ => null,
    };

    public static string? ToAttributeValue(GcdsGridAlignmentValue? value) => value switch
    {
        GcdsGridAlignmentValue.Center => "center",
        GcdsGridAlignmentValue.End => "end",
        GcdsGridAlignmentValue.Start => "start",
        _ => null,
    };

    public static string? ToAttributeValue(GcdsGridContainerValue? value) => value switch
    {
        GcdsGridContainerValue.Full => "full",
        GcdsGridContainerValue.Lg => "lg",
        GcdsGridContainerValue.Md => "md",
        GcdsGridContainerValue.Sm => "sm",
        GcdsGridContainerValue.Xl => "xl",
        GcdsGridContainerValue.Xs => "xs",
        _ => null,
    };

    public static string? ToAttributeValue(GcdsGridDisplayValue? value) => value switch
    {
        GcdsGridDisplayValue.Grid => "grid",
        GcdsGridDisplayValue.InlineGrid => "inline-grid",
        _ => null,
    };

    public static string? ToAttributeValue(GcdsGridGapValue? value) => value switch
    {
        GcdsGridGapValue.Value150 => "150",
        GcdsGridGapValue.Value175 => "175",
        GcdsGridGapValue.Value200 => "200",
        GcdsGridGapValue.Value225 => "225",
        GcdsGridGapValue.Value250 => "250",
        GcdsGridGapValue.Value300 => "300",
        GcdsGridGapValue.Value350 => "350",
        GcdsGridGapValue.Value400 => "400",
        GcdsGridGapValue.Value450 => "450",
        GcdsGridGapValue.Value500 => "500",
        GcdsGridGapValue.Value550 => "550",
        GcdsGridGapValue.Value600 => "600",
        GcdsGridGapValue.Value650 => "650",
        GcdsGridGapValue.Value700 => "700",
        GcdsGridGapValue.Value750 => "750",
        GcdsGridGapValue.Value800 => "800",
        _ => null,
    };

    public static string? ToAttributeValue(GcdsGridGapDesktopValue? value) => value switch
    {
        GcdsGridGapDesktopValue.Value150 => "150",
        GcdsGridGapDesktopValue.Value175 => "175",
        GcdsGridGapDesktopValue.Value200 => "200",
        GcdsGridGapDesktopValue.Value225 => "225",
        GcdsGridGapDesktopValue.Value250 => "250",
        GcdsGridGapDesktopValue.Value300 => "300",
        GcdsGridGapDesktopValue.Value350 => "350",
        GcdsGridGapDesktopValue.Value400 => "400",
        GcdsGridGapDesktopValue.Value450 => "450",
        GcdsGridGapDesktopValue.Value500 => "500",
        GcdsGridGapDesktopValue.Value550 => "550",
        GcdsGridGapDesktopValue.Value600 => "600",
        GcdsGridGapDesktopValue.Value650 => "650",
        GcdsGridGapDesktopValue.Value700 => "700",
        GcdsGridGapDesktopValue.Value750 => "750",
        GcdsGridGapDesktopValue.Value800 => "800",
        _ => null,
    };

    public static string? ToAttributeValue(GcdsGridGapTabletValue? value) => value switch
    {
        GcdsGridGapTabletValue.Value150 => "150",
        GcdsGridGapTabletValue.Value175 => "175",
        GcdsGridGapTabletValue.Value200 => "200",
        GcdsGridGapTabletValue.Value225 => "225",
        GcdsGridGapTabletValue.Value250 => "250",
        GcdsGridGapTabletValue.Value300 => "300",
        GcdsGridGapTabletValue.Value350 => "350",
        GcdsGridGapTabletValue.Value400 => "400",
        GcdsGridGapTabletValue.Value450 => "450",
        GcdsGridGapTabletValue.Value500 => "500",
        GcdsGridGapTabletValue.Value550 => "550",
        GcdsGridGapTabletValue.Value600 => "600",
        GcdsGridGapTabletValue.Value650 => "650",
        GcdsGridGapTabletValue.Value700 => "700",
        GcdsGridGapTabletValue.Value750 => "750",
        GcdsGridGapTabletValue.Value800 => "800",
        _ => null,
    };

    public static string? ToAttributeValue(GcdsGridJustifyContentValue? value) => value switch
    {
        GcdsGridJustifyContentValue.Center => "center",
        GcdsGridJustifyContentValue.End => "end",
        GcdsGridJustifyContentValue.SpaceAround => "space-around",
        GcdsGridJustifyContentValue.SpaceBetween => "space-between",
        GcdsGridJustifyContentValue.SpaceEvenly => "space-evenly",
        GcdsGridJustifyContentValue.Start => "start",
        GcdsGridJustifyContentValue.Stretch => "stretch",
        _ => null,
    };

    public static string? ToAttributeValue(GcdsGridJustifyItemsValue? value) => value switch
    {
        GcdsGridJustifyItemsValue.Center => "center",
        GcdsGridJustifyItemsValue.End => "end",
        GcdsGridJustifyItemsValue.Start => "start",
        GcdsGridJustifyItemsValue.Stretch => "stretch",
        _ => null,
    };

    public static string? ToAttributeValue(GcdsGridPlaceContentValue? value) => value switch
    {
        GcdsGridPlaceContentValue.Center => "center",
        GcdsGridPlaceContentValue.End => "end",
        GcdsGridPlaceContentValue.SpaceAround => "space-around",
        GcdsGridPlaceContentValue.SpaceBetween => "space-between",
        GcdsGridPlaceContentValue.SpaceEvenly => "space-evenly",
        GcdsGridPlaceContentValue.Start => "start",
        GcdsGridPlaceContentValue.Stretch => "stretch",
        _ => null,
    };

    public static string? ToAttributeValue(GcdsGridPlaceItemsValue? value) => value switch
    {
        GcdsGridPlaceItemsValue.Center => "center",
        GcdsGridPlaceItemsValue.End => "end",
        GcdsGridPlaceItemsValue.Start => "start",
        GcdsGridPlaceItemsValue.Stretch => "stretch",
        _ => null,
    };

    public static string? ToAttributeValue(GcdsGridTagValue? value) => value switch
    {
        GcdsGridTagValue.Article => "article",
        GcdsGridTagValue.Aside => "aside",
        GcdsGridTagValue.Div => "div",
        GcdsGridTagValue.Dl => "dl",
        GcdsGridTagValue.Main => "main",
        GcdsGridTagValue.Nav => "nav",
        GcdsGridTagValue.Ol => "ol",
        GcdsGridTagValue.Section => "section",
        GcdsGridTagValue.Ul => "ul",
        _ => null,
    };

    public static string? ToAttributeValue(GcdsHeadingHeadingRoleValue? value) => value switch
    {
        GcdsHeadingHeadingRoleValue.Light => "light",
        GcdsHeadingHeadingRoleValue.Primary => "primary",
        GcdsHeadingHeadingRoleValue.Secondary => "secondary",
        _ => null,
    };

    public static string? ToAttributeValue(GcdsHeadingMarginBottomValue? value) => value switch
    {
        GcdsHeadingMarginBottomValue.Value0 => "0",
        GcdsHeadingMarginBottomValue.Value100 => "100",
        GcdsHeadingMarginBottomValue.Value1000 => "1000",
        GcdsHeadingMarginBottomValue.Value1050 => "1050",
        GcdsHeadingMarginBottomValue.Value1100 => "1100",
        GcdsHeadingMarginBottomValue.Value1150 => "1150",
        GcdsHeadingMarginBottomValue.Value1200 => "1200",
        GcdsHeadingMarginBottomValue.Value125 => "125",
        GcdsHeadingMarginBottomValue.Value1250 => "1250",
        GcdsHeadingMarginBottomValue.Value150 => "150",
        GcdsHeadingMarginBottomValue.Value175 => "175",
        GcdsHeadingMarginBottomValue.Value200 => "200",
        GcdsHeadingMarginBottomValue.Value225 => "225",
        GcdsHeadingMarginBottomValue.Value25 => "25",
        GcdsHeadingMarginBottomValue.Value250 => "250",
        GcdsHeadingMarginBottomValue.Value300 => "300",
        GcdsHeadingMarginBottomValue.Value350 => "350",
        GcdsHeadingMarginBottomValue.Value400 => "400",
        GcdsHeadingMarginBottomValue.Value450 => "450",
        GcdsHeadingMarginBottomValue.Value50 => "50",
        GcdsHeadingMarginBottomValue.Value500 => "500",
        GcdsHeadingMarginBottomValue.Value550 => "550",
        GcdsHeadingMarginBottomValue.Value600 => "600",
        GcdsHeadingMarginBottomValue.Value650 => "650",
        GcdsHeadingMarginBottomValue.Value700 => "700",
        GcdsHeadingMarginBottomValue.Value75 => "75",
        GcdsHeadingMarginBottomValue.Value750 => "750",
        GcdsHeadingMarginBottomValue.Value800 => "800",
        GcdsHeadingMarginBottomValue.Value850 => "850",
        GcdsHeadingMarginBottomValue.Value900 => "900",
        GcdsHeadingMarginBottomValue.Value950 => "950",
        _ => null,
    };

    public static string? ToAttributeValue(GcdsHeadingMarginTopValue? value) => value switch
    {
        GcdsHeadingMarginTopValue.Value0 => "0",
        GcdsHeadingMarginTopValue.Value100 => "100",
        GcdsHeadingMarginTopValue.Value1000 => "1000",
        GcdsHeadingMarginTopValue.Value1050 => "1050",
        GcdsHeadingMarginTopValue.Value1100 => "1100",
        GcdsHeadingMarginTopValue.Value1150 => "1150",
        GcdsHeadingMarginTopValue.Value1200 => "1200",
        GcdsHeadingMarginTopValue.Value125 => "125",
        GcdsHeadingMarginTopValue.Value1250 => "1250",
        GcdsHeadingMarginTopValue.Value150 => "150",
        GcdsHeadingMarginTopValue.Value175 => "175",
        GcdsHeadingMarginTopValue.Value200 => "200",
        GcdsHeadingMarginTopValue.Value225 => "225",
        GcdsHeadingMarginTopValue.Value25 => "25",
        GcdsHeadingMarginTopValue.Value250 => "250",
        GcdsHeadingMarginTopValue.Value300 => "300",
        GcdsHeadingMarginTopValue.Value350 => "350",
        GcdsHeadingMarginTopValue.Value400 => "400",
        GcdsHeadingMarginTopValue.Value450 => "450",
        GcdsHeadingMarginTopValue.Value50 => "50",
        GcdsHeadingMarginTopValue.Value500 => "500",
        GcdsHeadingMarginTopValue.Value550 => "550",
        GcdsHeadingMarginTopValue.Value600 => "600",
        GcdsHeadingMarginTopValue.Value650 => "650",
        GcdsHeadingMarginTopValue.Value700 => "700",
        GcdsHeadingMarginTopValue.Value75 => "75",
        GcdsHeadingMarginTopValue.Value750 => "750",
        GcdsHeadingMarginTopValue.Value800 => "800",
        GcdsHeadingMarginTopValue.Value850 => "850",
        GcdsHeadingMarginTopValue.Value900 => "900",
        GcdsHeadingMarginTopValue.Value950 => "950",
        _ => null,
    };

    public static string? ToAttributeValue(GcdsHeadingTagValue? value) => value switch
    {
        GcdsHeadingTagValue.H1 => "h1",
        GcdsHeadingTagValue.H2 => "h2",
        GcdsHeadingTagValue.H3 => "h3",
        GcdsHeadingTagValue.H4 => "h4",
        GcdsHeadingTagValue.H5 => "h5",
        GcdsHeadingTagValue.H6 => "h6",
        _ => null,
    };

    public static string? ToAttributeValue(GcdsIconMarginLeftValue? value) => value switch
    {
        GcdsIconMarginLeftValue.Value0 => "0",
        GcdsIconMarginLeftValue.Value100 => "100",
        GcdsIconMarginLeftValue.Value1000 => "1000",
        GcdsIconMarginLeftValue.Value1050 => "1050",
        GcdsIconMarginLeftValue.Value1100 => "1100",
        GcdsIconMarginLeftValue.Value1150 => "1150",
        GcdsIconMarginLeftValue.Value1200 => "1200",
        GcdsIconMarginLeftValue.Value125 => "125",
        GcdsIconMarginLeftValue.Value1250 => "1250",
        GcdsIconMarginLeftValue.Value150 => "150",
        GcdsIconMarginLeftValue.Value175 => "175",
        GcdsIconMarginLeftValue.Value200 => "200",
        GcdsIconMarginLeftValue.Value225 => "225",
        GcdsIconMarginLeftValue.Value25 => "25",
        GcdsIconMarginLeftValue.Value250 => "250",
        GcdsIconMarginLeftValue.Value300 => "300",
        GcdsIconMarginLeftValue.Value350 => "350",
        GcdsIconMarginLeftValue.Value400 => "400",
        GcdsIconMarginLeftValue.Value450 => "450",
        GcdsIconMarginLeftValue.Value50 => "50",
        GcdsIconMarginLeftValue.Value500 => "500",
        GcdsIconMarginLeftValue.Value550 => "550",
        GcdsIconMarginLeftValue.Value600 => "600",
        GcdsIconMarginLeftValue.Value650 => "650",
        GcdsIconMarginLeftValue.Value700 => "700",
        GcdsIconMarginLeftValue.Value75 => "75",
        GcdsIconMarginLeftValue.Value750 => "750",
        GcdsIconMarginLeftValue.Value800 => "800",
        GcdsIconMarginLeftValue.Value850 => "850",
        GcdsIconMarginLeftValue.Value900 => "900",
        GcdsIconMarginLeftValue.Value950 => "950",
        _ => null,
    };

    public static string? ToAttributeValue(GcdsIconMarginRightValue? value) => value switch
    {
        GcdsIconMarginRightValue.Value0 => "0",
        GcdsIconMarginRightValue.Value100 => "100",
        GcdsIconMarginRightValue.Value1000 => "1000",
        GcdsIconMarginRightValue.Value1050 => "1050",
        GcdsIconMarginRightValue.Value1100 => "1100",
        GcdsIconMarginRightValue.Value1150 => "1150",
        GcdsIconMarginRightValue.Value1200 => "1200",
        GcdsIconMarginRightValue.Value125 => "125",
        GcdsIconMarginRightValue.Value1250 => "1250",
        GcdsIconMarginRightValue.Value150 => "150",
        GcdsIconMarginRightValue.Value175 => "175",
        GcdsIconMarginRightValue.Value200 => "200",
        GcdsIconMarginRightValue.Value225 => "225",
        GcdsIconMarginRightValue.Value25 => "25",
        GcdsIconMarginRightValue.Value250 => "250",
        GcdsIconMarginRightValue.Value300 => "300",
        GcdsIconMarginRightValue.Value350 => "350",
        GcdsIconMarginRightValue.Value400 => "400",
        GcdsIconMarginRightValue.Value450 => "450",
        GcdsIconMarginRightValue.Value50 => "50",
        GcdsIconMarginRightValue.Value500 => "500",
        GcdsIconMarginRightValue.Value550 => "550",
        GcdsIconMarginRightValue.Value600 => "600",
        GcdsIconMarginRightValue.Value650 => "650",
        GcdsIconMarginRightValue.Value700 => "700",
        GcdsIconMarginRightValue.Value75 => "75",
        GcdsIconMarginRightValue.Value750 => "750",
        GcdsIconMarginRightValue.Value800 => "800",
        GcdsIconMarginRightValue.Value850 => "850",
        GcdsIconMarginRightValue.Value900 => "900",
        GcdsIconMarginRightValue.Value950 => "950",
        _ => null,
    };

    public static string? ToAttributeValue(GcdsIconNameValue? value) => value switch
    {
        GcdsIconNameValue.ArrowDown => "arrow-down",
        GcdsIconNameValue.ArrowUp => "arrow-up",
        GcdsIconNameValue.ArrowUpDown => "arrow-up-down",
        GcdsIconNameValue.CheckmarkCircle => "checkmark-circle",
        GcdsIconNameValue.ChevronDown => "chevron-down",
        GcdsIconNameValue.ChevronLeft => "chevron-left",
        GcdsIconNameValue.ChevronRight => "chevron-right",
        GcdsIconNameValue.ChevronUp => "chevron-up",
        GcdsIconNameValue.Close => "close",
        GcdsIconNameValue.Download => "download",
        GcdsIconNameValue.Email => "email",
        GcdsIconNameValue.ExclamationCircle => "exclamation-circle",
        GcdsIconNameValue.External => "external",
        GcdsIconNameValue.Filter => "filter",
        GcdsIconNameValue.InfoCircle => "info-circle",
        GcdsIconNameValue.Phone => "phone",
        GcdsIconNameValue.Search => "search",
        GcdsIconNameValue.Sort => "sort",
        GcdsIconNameValue.Tune => "tune",
        GcdsIconNameValue.WarningTriangle => "warning-triangle",
        _ => null,
    };

    public static string? ToAttributeValue(GcdsIconSizeValue? value) => value switch
    {
        GcdsIconSizeValue.H1 => "h1",
        GcdsIconSizeValue.H2 => "h2",
        GcdsIconSizeValue.H3 => "h3",
        GcdsIconSizeValue.H4 => "h4",
        GcdsIconSizeValue.H5 => "h5",
        GcdsIconSizeValue.H6 => "h6",
        GcdsIconSizeValue.Inherit => "inherit",
        GcdsIconSizeValue.Text => "text",
        GcdsIconSizeValue.TextSmall => "text-small",
        _ => null,
    };

    public static string? ToAttributeValue(GcdsInputInputmodeValue? value) => value switch
    {
        GcdsInputInputmodeValue.Decimal => "decimal",
        GcdsInputInputmodeValue.Email => "email",
        GcdsInputInputmodeValue.None => "none",
        GcdsInputInputmodeValue.Numeric => "numeric",
        GcdsInputInputmodeValue.Search => "search",
        GcdsInputInputmodeValue.Tel => "tel",
        GcdsInputInputmodeValue.Text => "text",
        GcdsInputInputmodeValue.Url => "url",
        _ => null,
    };

    public static string? ToAttributeValue(GcdsInputTypeValue? value) => value switch
    {
        GcdsInputTypeValue.Email => "email",
        GcdsInputTypeValue.Number => "number",
        GcdsInputTypeValue.Password => "password",
        GcdsInputTypeValue.Search => "search",
        GcdsInputTypeValue.Tel => "tel",
        GcdsInputTypeValue.Text => "text",
        GcdsInputTypeValue.Url => "url",
        _ => null,
    };

    public static string? ToAttributeValue(GcdsInputValidateOnValue? value) => value switch
    {
        GcdsInputValidateOnValue.Blur => "blur",
        GcdsInputValidateOnValue.Other => "other",
        GcdsInputValidateOnValue.Submit => "submit",
        _ => null,
    };

    public static string? ToAttributeValue(GcdsLinkDisplayValue? value) => value switch
    {
        GcdsLinkDisplayValue.Block => "block",
        GcdsLinkDisplayValue.Inline => "inline",
        _ => null,
    };

    public static string? ToAttributeValue(GcdsLinkLinkRoleValue? value) => value switch
    {
        GcdsLinkLinkRoleValue.Default => "default",
        GcdsLinkLinkRoleValue.Light => "light",
        _ => null,
    };

    public static string? ToAttributeValue(GcdsLinkSizeValue? value) => value switch
    {
        GcdsLinkSizeValue.Inherit => "inherit",
        GcdsLinkSizeValue.Regular => "regular",
        GcdsLinkSizeValue.Small => "small",
        _ => null,
    };

    public static string? ToAttributeValue(GcdsNoticeNoticeRoleValue? value) => value switch
    {
        GcdsNoticeNoticeRoleValue.Danger => "danger",
        GcdsNoticeNoticeRoleValue.Info => "info",
        GcdsNoticeNoticeRoleValue.Success => "success",
        GcdsNoticeNoticeRoleValue.Warning => "warning",
        _ => null,
    };

    public static string? ToAttributeValue(GcdsNoticeNoticeTitleTagValue? value) => value switch
    {
        GcdsNoticeNoticeTitleTagValue.H2 => "h2",
        GcdsNoticeNoticeTitleTagValue.H3 => "h3",
        GcdsNoticeNoticeTitleTagValue.H4 => "h4",
        GcdsNoticeNoticeTitleTagValue.H5 => "h5",
        _ => null,
    };

    public static string? ToAttributeValue(GcdsPaginationDisplayValue? value) => value switch
    {
        GcdsPaginationDisplayValue.List => "list",
        GcdsPaginationDisplayValue.Simple => "simple",
        _ => null,
    };

    public static string? ToAttributeValue(GcdsRadiosValidateOnValue? value) => value switch
    {
        GcdsRadiosValidateOnValue.Blur => "blur",
        GcdsRadiosValidateOnValue.Other => "other",
        GcdsRadiosValidateOnValue.Submit => "submit",
        _ => null,
    };

    public static string? ToAttributeValue(GcdsSearchMethodValue? value) => value switch
    {
        GcdsSearchMethodValue.Get => "get",
        GcdsSearchMethodValue.Post => "post",
        _ => null,
    };

    public static string? ToAttributeValue(GcdsSelectValidateOnValue? value) => value switch
    {
        GcdsSelectValidateOnValue.Blur => "blur",
        GcdsSelectValidateOnValue.Other => "other",
        GcdsSelectValidateOnValue.Submit => "submit",
        _ => null,
    };

    public static string? ToAttributeValue(GcdsSignatureTypeValue? value) => value switch
    {
        GcdsSignatureTypeValue.Signature => "signature",
        GcdsSignatureTypeValue.Wordmark => "wordmark",
        _ => null,
    };

    public static string? ToAttributeValue(GcdsSignatureVariantValue? value) => value switch
    {
        GcdsSignatureVariantValue.Colour => "colour",
        GcdsSignatureVariantValue.White => "white",
        _ => null,
    };

    public static string? ToAttributeValue(GcdsSrOnlyTagValue? value) => value switch
    {
        GcdsSrOnlyTagValue.H1 => "h1",
        GcdsSrOnlyTagValue.H2 => "h2",
        GcdsSrOnlyTagValue.H3 => "h3",
        GcdsSrOnlyTagValue.H4 => "h4",
        GcdsSrOnlyTagValue.H5 => "h5",
        GcdsSrOnlyTagValue.H6 => "h6",
        GcdsSrOnlyTagValue.P => "p",
        GcdsSrOnlyTagValue.Span => "span",
        _ => null,
    };

    public static string? ToAttributeValue(GcdsStepperTagValue? value) => value switch
    {
        GcdsStepperTagValue.H1 => "h1",
        GcdsStepperTagValue.H2 => "h2",
        GcdsStepperTagValue.H3 => "h3",
        _ => null,
    };

    public static string? ToAttributeValue(GcdsTextDisplayValue? value) => value switch
    {
        GcdsTextDisplayValue.Block => "block",
        GcdsTextDisplayValue.Flex => "flex",
        GcdsTextDisplayValue.Inline => "inline",
        GcdsTextDisplayValue.InlineBlock => "inline-block",
        GcdsTextDisplayValue.InlineFlex => "inline-flex",
        GcdsTextDisplayValue.None => "none",
        _ => null,
    };

    public static string? ToAttributeValue(GcdsTextMarginBottomValue? value) => value switch
    {
        GcdsTextMarginBottomValue.Value0 => "0",
        GcdsTextMarginBottomValue.Value100 => "100",
        GcdsTextMarginBottomValue.Value1000 => "1000",
        GcdsTextMarginBottomValue.Value1050 => "1050",
        GcdsTextMarginBottomValue.Value1100 => "1100",
        GcdsTextMarginBottomValue.Value1150 => "1150",
        GcdsTextMarginBottomValue.Value1200 => "1200",
        GcdsTextMarginBottomValue.Value125 => "125",
        GcdsTextMarginBottomValue.Value1250 => "1250",
        GcdsTextMarginBottomValue.Value150 => "150",
        GcdsTextMarginBottomValue.Value175 => "175",
        GcdsTextMarginBottomValue.Value200 => "200",
        GcdsTextMarginBottomValue.Value225 => "225",
        GcdsTextMarginBottomValue.Value25 => "25",
        GcdsTextMarginBottomValue.Value250 => "250",
        GcdsTextMarginBottomValue.Value300 => "300",
        GcdsTextMarginBottomValue.Value350 => "350",
        GcdsTextMarginBottomValue.Value400 => "400",
        GcdsTextMarginBottomValue.Value450 => "450",
        GcdsTextMarginBottomValue.Value50 => "50",
        GcdsTextMarginBottomValue.Value500 => "500",
        GcdsTextMarginBottomValue.Value550 => "550",
        GcdsTextMarginBottomValue.Value600 => "600",
        GcdsTextMarginBottomValue.Value650 => "650",
        GcdsTextMarginBottomValue.Value700 => "700",
        GcdsTextMarginBottomValue.Value75 => "75",
        GcdsTextMarginBottomValue.Value750 => "750",
        GcdsTextMarginBottomValue.Value800 => "800",
        GcdsTextMarginBottomValue.Value850 => "850",
        GcdsTextMarginBottomValue.Value900 => "900",
        GcdsTextMarginBottomValue.Value950 => "950",
        _ => null,
    };

    public static string? ToAttributeValue(GcdsTextMarginTopValue? value) => value switch
    {
        GcdsTextMarginTopValue.Value0 => "0",
        GcdsTextMarginTopValue.Value100 => "100",
        GcdsTextMarginTopValue.Value1000 => "1000",
        GcdsTextMarginTopValue.Value1050 => "1050",
        GcdsTextMarginTopValue.Value1100 => "1100",
        GcdsTextMarginTopValue.Value1150 => "1150",
        GcdsTextMarginTopValue.Value1200 => "1200",
        GcdsTextMarginTopValue.Value125 => "125",
        GcdsTextMarginTopValue.Value1250 => "1250",
        GcdsTextMarginTopValue.Value150 => "150",
        GcdsTextMarginTopValue.Value175 => "175",
        GcdsTextMarginTopValue.Value200 => "200",
        GcdsTextMarginTopValue.Value225 => "225",
        GcdsTextMarginTopValue.Value25 => "25",
        GcdsTextMarginTopValue.Value250 => "250",
        GcdsTextMarginTopValue.Value300 => "300",
        GcdsTextMarginTopValue.Value350 => "350",
        GcdsTextMarginTopValue.Value400 => "400",
        GcdsTextMarginTopValue.Value450 => "450",
        GcdsTextMarginTopValue.Value50 => "50",
        GcdsTextMarginTopValue.Value500 => "500",
        GcdsTextMarginTopValue.Value550 => "550",
        GcdsTextMarginTopValue.Value600 => "600",
        GcdsTextMarginTopValue.Value650 => "650",
        GcdsTextMarginTopValue.Value700 => "700",
        GcdsTextMarginTopValue.Value75 => "75",
        GcdsTextMarginTopValue.Value750 => "750",
        GcdsTextMarginTopValue.Value800 => "800",
        GcdsTextMarginTopValue.Value850 => "850",
        GcdsTextMarginTopValue.Value900 => "900",
        GcdsTextMarginTopValue.Value950 => "950",
        _ => null,
    };

    public static string? ToAttributeValue(GcdsTextSizeValue? value) => value switch
    {
        GcdsTextSizeValue.Body => "body",
        GcdsTextSizeValue.Small => "small",
        _ => null,
    };

    public static string? ToAttributeValue(GcdsTextTextRoleValue? value) => value switch
    {
        GcdsTextTextRoleValue.Light => "light",
        GcdsTextTextRoleValue.Primary => "primary",
        GcdsTextTextRoleValue.Secondary => "secondary",
        _ => null,
    };

    public static string? ToAttributeValue(GcdsTextareaValidateOnValue? value) => value switch
    {
        GcdsTextareaValidateOnValue.Blur => "blur",
        GcdsTextareaValidateOnValue.Other => "other",
        GcdsTextareaValidateOnValue.Submit => "submit",
        _ => null,
    };

    public static string? ToAttributeValue(GcdsTopNavAlignmentValue? value) => value switch
    {
        GcdsTopNavAlignmentValue.End => "end",
        GcdsTopNavAlignmentValue.Start => "start",
        _ => null,
    };
}
