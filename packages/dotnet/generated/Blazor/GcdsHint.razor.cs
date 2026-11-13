using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;
using System.Text.Json;

namespace GcdsCore.Components;

/// <summary>
/// Hint provides additional information or context to help users understand the content or functionality of a related element.
/// </summary>
public partial class GcdsHint : GeneratedComponentBase
{
    /// <summary>Id attribute for the hint.</summary>
    [Parameter] public string? HintId { get; set; } = default;

    [Parameter] public RenderFragment? ChildContent { get; set; }

}
