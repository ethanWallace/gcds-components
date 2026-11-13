using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;
using System.Text.Json;

namespace GcdsCore.Components;

/// <summary>
/// The theme and topic menu is a navigation to the top tasks of Government of Canada websites.
/// </summary>
public partial class GcdsTopicMenu : GeneratedComponentBase
{
    /// <summary>Sets the homepage styling</summary>
    [Parameter] public bool Home { get; set; } = false;

    public Task CloseAllMenusAsync() => InvokeVoidMethodAsync("closeAllMenus", new object?[] {  });

    public Task<string?> GetNavSizeAsync() => InvokeMethodAsync<string?>("getNavSize", new object?[] {  });

    public Task ToggleNavAsync() => InvokeVoidMethodAsync("toggleNav", new object?[] {  });

    public Task UpdateNavItemQueueAsync(string? parent) => InvokeVoidMethodAsync("updateNavItemQueue", new object?[] { parent });

    public Task UpdateNavSizeAsync(string? size) => InvokeVoidMethodAsync("updateNavSize", new object?[] { size });

}
