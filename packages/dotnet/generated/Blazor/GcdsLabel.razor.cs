using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;
using System.Text.Json;

namespace GcdsCore.Components;

/// <summary>
/// Label for form fields, providing accessibility and context for users.
/// </summary>
public partial class GcdsLabel : GeneratedComponentBase
{
    /// <summary>Specifies if the label is hidden or not.</summary>
    [Parameter] public bool HideLabel { get; set; }

    /// <summary>Form field label</summary>
    [Parameter] public string? Label { get; set; } = default;

    /// <summary>Defines the label's for attribute.</summary>
    [Parameter] public string? LabelFor { get; set; } = default;

    /// <summary>Specifies if a form field is required or not.</summary>
    [Parameter] public bool Required { get; set; }

    [Parameter] public RenderFragment? ChildContent { get; set; }

}
