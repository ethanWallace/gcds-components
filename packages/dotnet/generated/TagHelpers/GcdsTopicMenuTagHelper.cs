using Microsoft.AspNetCore.Razor.TagHelpers;
using System.Globalization;
using System.Text.Json;

namespace GcdsCore.Components;

/// <summary>
/// The theme and topic menu is a navigation to the top tasks of Government of Canada websites.
/// </summary>
[HtmlTargetElement("gcds-topic-menu")]
public class GcdsTopicMenuTagHelper : TagHelper
{

    /// <summary>Sets the homepage styling</summary>
    public bool Home { get; set; } = false;

    public override void Process(TagHelperContext context, TagHelperOutput output)
    {
        output.TagName = "gcds-topic-menu";
        if (Home)
            output.Attributes.SetAttribute("home", "");
    }

}
