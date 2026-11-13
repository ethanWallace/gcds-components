using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;
using System.Text.Json;

namespace GcdsCore.Components;

/// <summary>
/// An icon is a symbol that visually represents an action or idea.
/// </summary>
public partial class GcdsIcon : GeneratedComponentBase
{
    /// <summary>Add icon description.</summary>
    [Parameter] public string? Label { get; set; } = default;

    /// <summary>Add margin to the left of the icon</summary>
    [Parameter] public GcdsIconMarginLeftValue? MarginLeft { get; set; } = default;

    /// <summary>Add margin to the right of the icon</summary>
    [Parameter] public GcdsIconMarginRightValue? MarginRight { get; set; } = default;

    /// <summary>(required) Name of the icon.</summary>
    [Parameter] public GcdsIconNameValue? Name { get; set; } = default;

    /// <summary>Defines the size of the icon.</summary>
    [Parameter] public GcdsIconSizeValue? Size { get; set; } = default;

}
