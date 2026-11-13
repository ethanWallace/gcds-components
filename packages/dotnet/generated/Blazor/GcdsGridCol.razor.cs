using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;
using System.Text.Json;

namespace GcdsCore.Components;

/// <summary>
/// A grid column is a single column in a grid layout, allowing for flexible content arrangement.
/// </summary>
public partial class GcdsGridCol : GeneratedComponentBase
{
    /// <summary>Optimize grid column size for desktop (1024px and above). Desktop grid column sizes are based on a 12 column grid.</summary>
    [Parameter] public string? Desktop { get; set; } = default;

    /// <summary>Optimize grid column size for tablet (768px - 1023px). Tablet grid column sizes are based on a 6 column grid. The tablet size will also be used for desktop, if desktop is undefined.</summary>
    [Parameter] public string? Tablet { get; set; } = "6";

    /// <summary>Set tag for grid column</summary>
    [Parameter] public string? Tag { get; set; } = "'div'";

    [Parameter] public RenderFragment? ChildContent { get; set; }

}
