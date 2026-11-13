using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;
using System.Text.Json;

namespace GcdsCore.Components;

/// <summary>
/// Text is a styled and formatted paragraph that displays written content in an accessible way and matches Canada.ca typography styles.
/// </summary>
public partial class GcdsText : GeneratedComponentBase
{
    /// <summary>Sets the line length to a maximum amount of characters per line to ensure a comfortable, accessible reading length.</summary>
    [Parameter] public bool? CharacterLimit { get; set; }

    /// <summary>Specifies the display behaviour of the text.</summary>
    [Parameter] public GcdsTextDisplayValue? Display { get; set; } = default;

    /// <summary>Adds margin below the text.</summary>
    [Parameter] public GcdsTextMarginBottomValue? MarginBottom { get; set; } = default;

    /// <summary>Adds margin above the text.</summary>
    [Parameter] public GcdsTextMarginTopValue? MarginTop { get; set; } = default;

    /// <summary>Sets the appropriate HTML tags for the selected size.</summary>
    [Parameter] public GcdsTextSizeValue? Size { get; set; } = default;

    /// <summary>Sets the main style of the text.</summary>
    [Parameter] public GcdsTextTextRoleValue? TextRole { get; set; } = default;

    [Parameter] public RenderFragment? ChildContent { get; set; }

}
