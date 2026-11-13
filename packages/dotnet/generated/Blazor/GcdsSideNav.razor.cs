using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;
using System.Text.Json;

namespace GcdsCore.Components;

/// <summary>
/// A side navigation is a vertical list of page links on the left side of the screen.
/// </summary>
public partial class GcdsSideNav : GeneratedComponentBase
{
    /// <summary>(required) Label for navigation landmark</summary>
    [Parameter] public string? Label { get; set; } = default;

    [Parameter] public RenderFragment? ChildContent { get; set; }

    [Parameter] public RenderFragment? HomeContent { get; set; }

    public Task<string?> GetNavSizeAsync() => InvokeMethodAsync<string?>("getNavSize", new object?[] {  });

    public Task UpdateNavItemQueueAsync(string? el, bool includeElement) => InvokeVoidMethodAsync("updateNavItemQueue", new object?[] { el, includeElement });

    public Task UpdateNavSizeAsync(string? size) => InvokeVoidMethodAsync("updateNavSize", new object?[] { size });

}
