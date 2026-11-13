using Microsoft.AspNetCore.Razor.TagHelpers;
using System.Globalization;
using System.Text.Json;

namespace GcdsCore.Components;

/// <summary>
/// Search is a space for entering keywords to find relevant information.
/// </summary>
[HtmlTargetElement("gcds-search")]
public class GcdsSearchTagHelper : TagHelper
{
public enum MethodValue
{
    Get,
    Post
}


    /// <summary>Sets the action for the search form. Default will be canada.ca global search</summary>
    public string? Action { get; set; } = "'/sr/srb.html'";
    /// <summary>Set the form method of the search form</summary>
    public MethodValue? Method { get; set; }
    /// <summary>Set the name of the search input</summary>
    public string? Name { get; set; } = "'q'";
    /// <summary>Set the placeholder and label for the search input. Becomes "Search [placeholder]"</summary>
    public string? Placeholder { get; set; } = "'Canada.ca'";
    /// <summary>Set the id of the search input</summary>
    public string? SearchId { get; set; } = "'search'";
    /// <summary>Set a list of predefined search terms</summary>
    public IReadOnlyList<string?>? Suggested { get; set; } = default;
    /// <summary>Set the value of the search input</summary>
    public string? Value { get; set; } = default;

    public override void Process(TagHelperContext context, TagHelperOutput output)
    {
        output.TagName = "gcds-search";
        if (!string.IsNullOrEmpty(Action))
            output.Attributes.SetAttribute("action", Action);
        if (Method is not null)
            output.Attributes.SetAttribute("method", MethodValueToAttributeValue(Method.Value));
        if (!string.IsNullOrEmpty(Name))
            output.Attributes.SetAttribute("name", Name);
        if (!string.IsNullOrEmpty(Placeholder))
            output.Attributes.SetAttribute("placeholder", Placeholder);
        if (!string.IsNullOrEmpty(SearchId))
            output.Attributes.SetAttribute("search-id", SearchId);
        if (Suggested is not null)
            output.Attributes.SetAttribute("suggested", JsonSerializer.Serialize(Suggested));
        if (!string.IsNullOrEmpty(Value))
            output.Attributes.SetAttribute("value", Value);
    }

    private static string MethodValueToAttributeValue(MethodValue value) => value switch
    {
            MethodValue.Get => "get",
            MethodValue.Post => "post",
            _ => value.ToString(),
    };
}
