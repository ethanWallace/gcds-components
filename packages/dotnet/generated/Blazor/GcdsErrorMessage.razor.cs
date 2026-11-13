using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;
using System.Text.Json;

namespace GcdsCore.Components;

/// <summary>
/// An error message is a description of a problem blocking a user goal.
/// </summary>
public partial class GcdsErrorMessage : GeneratedComponentBase
{
    /// <summary>(required) Id attribute for the error message.</summary>
    [Parameter] public string? MessageId { get; set; } = default;

    [Parameter] public RenderFragment? ChildContent { get; set; }

}
