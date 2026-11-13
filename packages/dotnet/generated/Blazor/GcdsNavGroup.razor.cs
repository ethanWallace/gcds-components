using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;
using System.Text.Json;

namespace GcdsCore.Components;

/// <summary>
/// Navigational group with expandable or dropdown functionality, allowing for better organization of navigation links.
/// </summary>
public partial class GcdsNavGroup : GeneratedComponentBase
{
    protected override IReadOnlyList<string> EventNames => new[] { "gcdsBlur", "gcdsClick", "gcdsFocus" };

    /// <summary>Label for the expanded button trigger</summary>
    [Parameter] public string? CloseTrigger { get; set; } = default;

    /// <summary>(required) Label for the nav group menu</summary>
    [Parameter] public string? MenuLabel { get; set; } = default;

    /// <summary>Has the nav group been expanded</summary>
    [Parameter] public bool Open { get; set; } = false;

    /// <summary>(required) Label for the collapsed button trigger</summary>
    [Parameter] public string? OpenTrigger { get; set; } = default;

    /// <summary>Emitted when the button blurs.</summary>
    [Parameter] public EventCallback<CustomEventArgs> OnGcdsBlur { get; set; }

    /// <summary>Emitted when the button has been clicked.</summary>
    [Parameter] public EventCallback<CustomEventArgs> OnGcdsClick { get; set; }

    /// <summary>Emitted when the button has been focus.</summary>
    [Parameter] public EventCallback<CustomEventArgs> OnGcdsFocus { get; set; }

    [Parameter] public RenderFragment? ChildContent { get; set; }

    public Task FocusTriggerAsync() => InvokeVoidMethodAsync("focusTrigger", new object?[] {  });

    public Task ToggleNavAsync() => InvokeVoidMethodAsync("toggleNav", new object?[] {  });

    [JSInvokable]
    public async Task HandleGcdsBlur(CustomEventArgs args) => await OnGcdsBlur.InvokeAsync(args);

    [JSInvokable]
    public async Task HandleGcdsClick(CustomEventArgs args) => await OnGcdsClick.InvokeAsync(args);

    [JSInvokable]
    public async Task HandleGcdsFocus(CustomEventArgs args) => await OnGcdsFocus.InvokeAsync(args);

}
