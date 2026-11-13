using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;
using System.Text.Json;

namespace GcdsCore.Components;

/// <summary>
/// A container is a basic box layout with a set width for its contents.
/// </summary>
public partial class GcdsContainer : GeneratedComponentBase
{
    /// <summary>Defines the container's alignment. This property is ignored when `layout` is set to `page`, as the page layout has higher priority.</summary>
    [Parameter] public GcdsContainerAlignmentValue? Alignment { get; set; } = default;

    /// <summary>Defines if the container has a border.</summary>
    [Parameter] public bool Border { get; set; } = false;

    /// <summary>Controls how the container aligns with the page layout. When set to `page`, the container uses a max width of 1140px and switches to 90% width on smaller screens to scale consistently with core page layout components such as the header and footer. When set to `full`, the container spans the full width (100%) of its parent.</summary>
    [Parameter] public GcdsContainerLayoutValue? Layout { get; set; } = default;

    /// <summary>Container margin. Horizontal margins (left and right) are not applied if the container’s alignment property is defined, since alignment has higher priority.</summary>
    [Parameter] public GcdsContainerMarginValue? Margin { get; set; } = default;

    /// <summary>Defines the container's padding.</summary>
    [Parameter] public GcdsContainerPaddingValue? Padding { get; set; } = default;

    /// <summary>Defines container size.</summary>
    [Parameter] public GcdsContainerSizeValue? Size { get; set; } = default;

    /// <summary>Set tag for container.</summary>
    [Parameter] public string? Tag { get; set; } = "'div'";

    [Parameter] public RenderFragment? ChildContent { get; set; }

}
