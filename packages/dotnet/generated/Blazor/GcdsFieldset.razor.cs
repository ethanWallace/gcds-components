using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;
using System.Text.Json;

namespace GcdsCore.Components;

/// <summary>
/// A fieldset is a group of multiple form components or elements.
/// </summary>
public partial class GcdsFieldset : GeneratedComponentBase
{
    /// <summary>Hint displayed below the legend.</summary>
    [Parameter] public string? Hint { get; set; } = default;

    /// <summary>(required) The title for the contents of the fieldset</summary>
    [Parameter] public string? Legend { get; set; } = default;

    /// <summary>(required) Sets the appropriate font size for the fieldset legend.</summary>
    [Parameter] public GcdsFieldsetLegendSizeValue? LegendSize { get; set; } = default;

    [Parameter] public RenderFragment? ChildContent { get; set; }

}
