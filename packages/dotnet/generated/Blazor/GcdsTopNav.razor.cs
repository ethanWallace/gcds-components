using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;
using System.Text.Json;

namespace GcdsCore.Components;

/// <summary>
/// A top navigation is a horizontal list of page links.
/// </summary>
public partial class GcdsTopNav : GeneratedComponentBase
{
    /// <summary>Nav alignment</summary>
    [Parameter] public GcdsTopNavAlignmentValue? Alignment { get; set; } = default;

    /// <summary>(required) Label for navigation landmark</summary>
    [Parameter] public string? Label { get; set; } = default;

    [Parameter] public RenderFragment? ChildContent { get; set; }

    [Parameter] public RenderFragment? HomeContent { get; set; }

    public Task<string?> GetNavSizeAsync() => InvokeMethodAsync<string?>("getNavSize", new object?[] {  });

    public Task UpdateNavItemQueueAsync(string? el, bool includeElement) => InvokeVoidMethodAsync("updateNavItemQueue", new object?[] { el, includeElement });

    public Task UpdateNavSizeAsync(string? size) => InvokeVoidMethodAsync("updateNavSize", new object?[] { size });

}
