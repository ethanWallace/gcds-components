using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;
using System.Text.Json;

namespace GcdsCore.Components;

/// <summary>
/// A grid is a responsive, flexible column layout to position elements on a page.
/// </summary>
public partial class GcdsGrid : GeneratedComponentBase
{
    /// <summary>If total grid size is less than the size of its grid container, this property aligns the grid along the block (column) axis</summary>
    [Parameter] public GcdsGridAlignContentValue? AlignContent { get; set; } = default;

    /// <summary>Aligns grid items along the block (column) axis</summary>
    [Parameter] public GcdsGridAlignItemsValue? AlignItems { get; set; } = default;

    /// <summary>Defines the grid's alignment if the grid containers size is smaller than the parent's size.</summary>
    [Parameter] public GcdsGridAlignmentValue? Alignment { get; set; } = default;

    /// <summary>Defines the default number of grid columns for all viewports if columns-tablet and columns-desktop are not defined. Option to set different layouts for desktop with columns-desktop and for tablet with columns-tablet.</summary>
    [Parameter] public string? Columns { get; set; } = default;

    /// <summary>Provides option to set a different number of grid columns for desktop screens.</summary>
    [Parameter] public string? ColumnsDesktop { get; set; } = default;

    /// <summary>Provides option to set a different number of grid columns for tablet screens. If columns-desktop is not defined, columns-tablet will be used to define the number of columns for desktop as well.</summary>
    [Parameter] public string? ColumnsTablet { get; set; } = default;

    /// <summary>Defines grid container size</summary>
    [Parameter] public GcdsGridContainerValue? Container { get; set; } = default;

    /// <summary>Defines element as grid or inline-grid container</summary>
    [Parameter] public GcdsGridDisplayValue? Display { get; set; } = default;

    /// <summary>Sets all grid items to have an equal height, based on the tallest item.</summary>
    [Parameter] public bool EqualRowHeight { get; set; } = false;

    /// <summary>Defines the horizontal and vertical spacing between items in a grid container for all viewports if gap-tablet and gap-desktop are not defined. Option to set different spacing for desktop with gap-desktop and for tablet with gap-tablet.</summary>
    [Parameter] public GcdsGridGapValue? Gap { get; set; } = default;

    /// <summary>Provides option to set horizontal and vertical spacing between items in a grid container for desktop screens.</summary>
    [Parameter] public GcdsGridGapDesktopValue? GapDesktop { get; set; } = default;

    /// <summary>Provides option to set horizontal and vertical spacing between items in a grid container for tablet screens. If gap-desktop is not defined, gap-tablet will be used to define the spacing for desktop screens as well.</summary>
    [Parameter] public GcdsGridGapTabletValue? GapTablet { get; set; } = default;

    /// <summary>If total grid size is less than the size of its grid container, this property aligns the grid along the inline (row) axis</summary>
    [Parameter] public GcdsGridJustifyContentValue? JustifyContent { get; set; } = default;

    /// <summary>Aligns grid items along the inline (row) axis</summary>
    [Parameter] public GcdsGridJustifyItemsValue? JustifyItems { get; set; } = default;

    /// <summary>Sets both the align-content + justify-content properties</summary>
    [Parameter] public GcdsGridPlaceContentValue? PlaceContent { get; set; } = default;

    /// <summary>Sets both the align-items + justify-items properties</summary>
    [Parameter] public GcdsGridPlaceItemsValue? PlaceItems { get; set; } = default;

    /// <summary>Set tag for grid container</summary>
    [Parameter] public GcdsGridTagValue? Tag { get; set; } = default;

    [Parameter] public RenderFragment? ChildContent { get; set; }

}
