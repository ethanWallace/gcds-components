using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;
using System.Text.Json;

namespace GcdsCore.Components;

/// <summary>
/// A heading is a title that establishes levels of hierarchy to organize page content into a structure and matches Canada.ca typography styles.
/// </summary>
public partial class GcdsHeading : GeneratedComponentBase
{
    /// <summary>Sets the line length to a maximum amount of characters per line for each heading level, ensuring a comfortable, accessible reading length.</summary>
    [Parameter] public bool? CharacterLimit { get; set; }

    /// <summary>Sets the main style of the heading.</summary>
    [Parameter] public GcdsHeadingHeadingRoleValue? HeadingRole { get; set; } = default;

    /// <summary>Adds margin below the heading. The default margin-botttom is 300.</summary>
    [Parameter] public GcdsHeadingMarginBottomValue? MarginBottom { get; set; } = default;

    /// <summary>Adds margin above the heading. The default margin-top for h1 is set to 0, while for h2 to h6 headings, it's 600.</summary>
    [Parameter] public GcdsHeadingMarginTopValue? MarginTop { get; set; } = default;

    /// <summary>(required) Sets the appropriate HTML tag for the selected level.</summary>
    [Parameter] public GcdsHeadingTagValue? Tag { get; set; } = default;

    [Parameter] public RenderFragment? ChildContent { get; set; }

}
