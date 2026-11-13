using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;
using System.Text.Json;

namespace GcdsCore.Components;

/// <summary>
/// Date modified is an indicator of the last update to a webpage or application.
/// </summary>
public partial class GcdsDateModified : GeneratedComponentBase
{
    /// <summary>Set date modified type. Default is date.</summary>
    [Parameter] public GcdsDateModifiedTypeValue? Type { get; set; } = default;

    [Parameter] public RenderFragment? ChildContent { get; set; }

}
