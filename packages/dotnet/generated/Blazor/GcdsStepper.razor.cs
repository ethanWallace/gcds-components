using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;
using System.Text.Json;

namespace GcdsCore.Components;

/// <summary>
/// A stepper is a progress tracker for a multi-step process.
/// </summary>
public partial class GcdsStepper : GeneratedComponentBase
{
    /// <summary>(required) Defines the current step.</summary>
    [Parameter] public double? CurrentStep { get; set; } = default;

    /// <summary>Defines the heading tag to render</summary>
    [Parameter] public GcdsStepperTagValue? Tag { get; set; } = default;

    /// <summary>(required) Defines the total amount of steps.</summary>
    [Parameter] public double? TotalSteps { get; set; } = default;

    [Parameter] public RenderFragment? ChildContent { get; set; }

}
