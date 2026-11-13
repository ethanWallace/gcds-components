using Microsoft.AspNetCore.Razor.TagHelpers;
using System.Globalization;
using System.Text.Json;

namespace GcdsCore.Components;

/// <summary>
/// The button is an interactive object that emphasizes an action.
/// </summary>
[HtmlTargetElement("gcds-button")]
public class GcdsButtonTagHelper : TagHelper
{
public enum ButtonRoleValue
{
    Danger,
    Primary,
    Secondary,
    Start
}

public enum SizeValue
{
    Regular,
    Small
}

public enum TypeValue
{
    Button,
    Link,
    Reset,
    Submit
}


    /// <summary>The buttonId attribute specifies the id for a &lt;button&gt; element.</summary>
    public string? ButtonId { get; set; } = default;
    /// <summary>Set the main style</summary>
    public ButtonRoleValue? ButtonRole { get; set; }
    /// <summary>The disabled attribute for a &lt;button&gt; element.</summary>
    public bool Disabled { get; set; }
    /// <summary>The download attribute specifies that the target (the file specified in the href attribute) will be downloaded when a user clicks on the hyperlink</summary>
    public string? Download { get; set; } = default;
    /// <summary>The href attribute specifies the URL of the page the link goes to</summary>
    public string? Href { get; set; } = default;
    /// <summary>The name attribute specifies the name for a &lt;button&gt; element.</summary>
    public string? Name { get; set; } = default;
    /// <summary>The rel attribute specifies the relationship between the current document and the linked document</summary>
    public string? Rel { get; set; } = default;
    /// <summary>Set the button size</summary>
    public SizeValue? Size { get; set; }
    /// <summary>The target attribute specifies where to open the linked document</summary>
    public string? Target { get; set; } = default;
    /// <summary>Set button types</summary>
    public TypeValue? Type { get; set; }
    /// <summary>The value attribute specifies the value for a &lt;button&gt; element.</summary>
    public string? Value { get; set; } = default;

    public override void Process(TagHelperContext context, TagHelperOutput output)
    {
        output.TagName = "gcds-button";
        if (!string.IsNullOrEmpty(ButtonId))
            output.Attributes.SetAttribute("button-id", ButtonId);
        if (ButtonRole is not null)
            output.Attributes.SetAttribute("button-role", ButtonRoleValueToAttributeValue(ButtonRole.Value));
        if (Disabled)
            output.Attributes.SetAttribute("disabled", "");
        if (!string.IsNullOrEmpty(Download))
            output.Attributes.SetAttribute("download", Download);
        if (!string.IsNullOrEmpty(Href))
            output.Attributes.SetAttribute("href", Href);
        if (!string.IsNullOrEmpty(Name))
            output.Attributes.SetAttribute("name", Name);
        if (!string.IsNullOrEmpty(Rel))
            output.Attributes.SetAttribute("rel", Rel);
        if (Size is not null)
            output.Attributes.SetAttribute("size", SizeValueToAttributeValue(Size.Value));
        if (!string.IsNullOrEmpty(Target))
            output.Attributes.SetAttribute("target", Target);
        if (Type is not null)
            output.Attributes.SetAttribute("type", TypeValueToAttributeValue(Type.Value));
        if (!string.IsNullOrEmpty(Value))
            output.Attributes.SetAttribute("value", Value);
    }

    private static string ButtonRoleValueToAttributeValue(ButtonRoleValue value) => value switch
    {
            ButtonRoleValue.Danger => "danger",
            ButtonRoleValue.Primary => "primary",
            ButtonRoleValue.Secondary => "secondary",
            ButtonRoleValue.Start => "start",
            _ => value.ToString(),
    };

    private static string SizeValueToAttributeValue(SizeValue value) => value switch
    {
            SizeValue.Regular => "regular",
            SizeValue.Small => "small",
            _ => value.ToString(),
    };

    private static string TypeValueToAttributeValue(TypeValue value) => value switch
    {
            TypeValue.Button => "button",
            TypeValue.Link => "link",
            TypeValue.Reset => "reset",
            TypeValue.Submit => "submit",
            _ => value.ToString(),
    };
}
