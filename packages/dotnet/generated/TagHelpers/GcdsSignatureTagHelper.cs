using Microsoft.AspNetCore.Razor.TagHelpers;
using System.Globalization;
using System.Text.Json;

namespace GcdsCore.Components;

/// <summary>
/// The signature is the Government of Canada landmark identifier found in the header or footer.
/// </summary>
[HtmlTargetElement("gcds-signature")]
public class GcdsSignatureTagHelper : TagHelper
{
public enum TypeValue
{
    Signature,
    Wordmark
}

public enum VariantValue
{
    Colour,
    White
}


    /// <summary>Has link to canada.ca. Only applies to signature</summary>
    public bool HasLink { get; set; } = false;
    /// <summary>The type of graphic to render</summary>
    public TypeValue? Type { get; set; }
    /// <summary>The colour variant to render</summary>
    public VariantValue? Variant { get; set; }

    public override void Process(TagHelperContext context, TagHelperOutput output)
    {
        output.TagName = "gcds-signature";
        if (HasLink)
            output.Attributes.SetAttribute("has-link", "");
        if (Type is not null)
            output.Attributes.SetAttribute("type", TypeValueToAttributeValue(Type.Value));
        if (Variant is not null)
            output.Attributes.SetAttribute("variant", VariantValueToAttributeValue(Variant.Value));
    }

    private static string TypeValueToAttributeValue(TypeValue value) => value switch
    {
            TypeValue.Signature => "signature",
            TypeValue.Wordmark => "wordmark",
            _ => value.ToString(),
    };

    private static string VariantValueToAttributeValue(VariantValue value) => value switch
    {
            VariantValue.Colour => "colour",
            VariantValue.White => "white",
            _ => value.ToString(),
    };
}
