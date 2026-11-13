using Microsoft.AspNetCore.Razor.TagHelpers;
using System.Globalization;
using System.Text.Json;

namespace GcdsCore.Components;

/// <summary>
/// An icon is a symbol that visually represents an action or idea.
/// </summary>
[HtmlTargetElement("gcds-icon")]
public class GcdsIconTagHelper : TagHelper
{
public enum MarginLeftValue
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

public enum MarginRightValue
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

public enum NameValue
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

public enum SizeValue
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


    /// <summary>Add icon description.</summary>
    public string? Label { get; set; } = default;
    /// <summary>Add margin to the left of the icon</summary>
    public MarginLeftValue? MarginLeft { get; set; }
    /// <summary>Add margin to the right of the icon</summary>
    public MarginRightValue? MarginRight { get; set; }
    /// <summary>(required) Name of the icon.</summary>
    public NameValue? Name { get; set; }
    /// <summary>Defines the size of the icon.</summary>
    public SizeValue? Size { get; set; }

    public override void Process(TagHelperContext context, TagHelperOutput output)
    {
        output.TagName = "gcds-icon";
        if (!string.IsNullOrEmpty(Label))
            output.Attributes.SetAttribute("label", Label);
        if (MarginLeft is not null)
            output.Attributes.SetAttribute("margin-left", MarginLeftValueToAttributeValue(MarginLeft.Value));
        if (MarginRight is not null)
            output.Attributes.SetAttribute("margin-right", MarginRightValueToAttributeValue(MarginRight.Value));
        if (Name is not null)
            output.Attributes.SetAttribute("name", NameValueToAttributeValue(Name.Value));
        if (Size is not null)
            output.Attributes.SetAttribute("size", SizeValueToAttributeValue(Size.Value));
    }

    private static string MarginLeftValueToAttributeValue(MarginLeftValue value) => value switch
    {
            MarginLeftValue.Value0 => "0",
            MarginLeftValue.Value100 => "100",
            MarginLeftValue.Value1000 => "1000",
            MarginLeftValue.Value1050 => "1050",
            MarginLeftValue.Value1100 => "1100",
            MarginLeftValue.Value1150 => "1150",
            MarginLeftValue.Value1200 => "1200",
            MarginLeftValue.Value125 => "125",
            MarginLeftValue.Value1250 => "1250",
            MarginLeftValue.Value150 => "150",
            MarginLeftValue.Value175 => "175",
            MarginLeftValue.Value200 => "200",
            MarginLeftValue.Value225 => "225",
            MarginLeftValue.Value25 => "25",
            MarginLeftValue.Value250 => "250",
            MarginLeftValue.Value300 => "300",
            MarginLeftValue.Value350 => "350",
            MarginLeftValue.Value400 => "400",
            MarginLeftValue.Value450 => "450",
            MarginLeftValue.Value50 => "50",
            MarginLeftValue.Value500 => "500",
            MarginLeftValue.Value550 => "550",
            MarginLeftValue.Value600 => "600",
            MarginLeftValue.Value650 => "650",
            MarginLeftValue.Value700 => "700",
            MarginLeftValue.Value75 => "75",
            MarginLeftValue.Value750 => "750",
            MarginLeftValue.Value800 => "800",
            MarginLeftValue.Value850 => "850",
            MarginLeftValue.Value900 => "900",
            MarginLeftValue.Value950 => "950",
            _ => value.ToString(),
    };

    private static string MarginRightValueToAttributeValue(MarginRightValue value) => value switch
    {
            MarginRightValue.Value0 => "0",
            MarginRightValue.Value100 => "100",
            MarginRightValue.Value1000 => "1000",
            MarginRightValue.Value1050 => "1050",
            MarginRightValue.Value1100 => "1100",
            MarginRightValue.Value1150 => "1150",
            MarginRightValue.Value1200 => "1200",
            MarginRightValue.Value125 => "125",
            MarginRightValue.Value1250 => "1250",
            MarginRightValue.Value150 => "150",
            MarginRightValue.Value175 => "175",
            MarginRightValue.Value200 => "200",
            MarginRightValue.Value225 => "225",
            MarginRightValue.Value25 => "25",
            MarginRightValue.Value250 => "250",
            MarginRightValue.Value300 => "300",
            MarginRightValue.Value350 => "350",
            MarginRightValue.Value400 => "400",
            MarginRightValue.Value450 => "450",
            MarginRightValue.Value50 => "50",
            MarginRightValue.Value500 => "500",
            MarginRightValue.Value550 => "550",
            MarginRightValue.Value600 => "600",
            MarginRightValue.Value650 => "650",
            MarginRightValue.Value700 => "700",
            MarginRightValue.Value75 => "75",
            MarginRightValue.Value750 => "750",
            MarginRightValue.Value800 => "800",
            MarginRightValue.Value850 => "850",
            MarginRightValue.Value900 => "900",
            MarginRightValue.Value950 => "950",
            _ => value.ToString(),
    };

    private static string NameValueToAttributeValue(NameValue value) => value switch
    {
            NameValue.ArrowDown => "arrow-down",
            NameValue.ArrowUp => "arrow-up",
            NameValue.ArrowUpDown => "arrow-up-down",
            NameValue.CheckmarkCircle => "checkmark-circle",
            NameValue.ChevronDown => "chevron-down",
            NameValue.ChevronLeft => "chevron-left",
            NameValue.ChevronRight => "chevron-right",
            NameValue.ChevronUp => "chevron-up",
            NameValue.Close => "close",
            NameValue.Download => "download",
            NameValue.Email => "email",
            NameValue.ExclamationCircle => "exclamation-circle",
            NameValue.External => "external",
            NameValue.Filter => "filter",
            NameValue.InfoCircle => "info-circle",
            NameValue.Phone => "phone",
            NameValue.Search => "search",
            NameValue.Sort => "sort",
            NameValue.Tune => "tune",
            NameValue.WarningTriangle => "warning-triangle",
            _ => value.ToString(),
    };

    private static string SizeValueToAttributeValue(SizeValue value) => value switch
    {
            SizeValue.H1 => "h1",
            SizeValue.H2 => "h2",
            SizeValue.H3 => "h3",
            SizeValue.H4 => "h4",
            SizeValue.H5 => "h5",
            SizeValue.H6 => "h6",
            SizeValue.Inherit => "inherit",
            SizeValue.Text => "text",
            SizeValue.TextSmall => "text-small",
            _ => value.ToString(),
    };
}
