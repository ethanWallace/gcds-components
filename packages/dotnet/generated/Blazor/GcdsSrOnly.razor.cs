using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;
using System.Text.Json;

namespace GcdsCore.Components;

/// <summary>
/// The screenreader-only component is text information only accessible with assistive technologies.
/// </summary>
public partial class GcdsSrOnly : GeneratedComponentBase
{
    /// <summary>Sets the appropriate HTML tag for the content.</summary>
    [Parameter] public GcdsSrOnlyTagValue? Tag { get; set; } = default;

    [Parameter] public RenderFragment? ChildContent { get; set; }

}
