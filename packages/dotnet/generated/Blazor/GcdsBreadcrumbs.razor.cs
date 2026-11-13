using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;
using System.Text.Json;

namespace GcdsCore.Components;

/// <summary>
/// Breadcrumbs is a path to the current page from each preceding level of the site's hierarchy.
/// </summary>
public partial class GcdsBreadcrumbs : GeneratedComponentBase
{
    /// <summary>Defines if the default canada.ca link is displayed or omitted.</summary>
    [Parameter] public bool HideCanadaLink { get; set; } = false;

    [Parameter] public RenderFragment? ChildContent { get; set; }

}
