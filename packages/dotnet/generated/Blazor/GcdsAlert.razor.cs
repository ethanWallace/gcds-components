using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;
using System.Text.Json;

namespace GcdsCore.Components;

/// <summary>
/// Alert displays an alert message with an optional heading, icon, and close button.
/// </summary>
public partial class GcdsAlert : GeneratedComponentBase
{
    protected override IReadOnlyList<string> EventNames => new[] { "gcdsDismiss" };

    /// <summary>Defines alert role.</summary>
    [Parameter] public GcdsAlertAlertRoleValue? AlertRole { get; set; } = default;

    /// <summary>Defines the max width of the alert content.</summary>
    [Parameter] public GcdsAlertContainerValue? Container { get; set; } = default;

    /// <summary>(required) Defines the alert heading.</summary>
    [Parameter] public string? Heading { get; set; } = default;

    /// <summary>Defines if the alert's close button is displayed or not.</summary>
    [Parameter] public bool HideCloseBtn { get; set; } = false;

    /// <summary>Defines if the alert's role icon is displayed or not.</summary>
    [Parameter] public bool HideRoleIcon { get; set; } = false;

    /// <summary>Defines if the alert's position is fixed.</summary>
    [Parameter] public bool IsFixed { get; set; } = false;

    /// <summary>Events</summary>
    [Parameter] public EventCallback<CustomEventArgs> OnGcdsDismiss { get; set; }

    [Parameter] public RenderFragment? ChildContent { get; set; }

    [JSInvokable]
    public async Task HandleGcdsDismiss(CustomEventArgs args) => await OnGcdsDismiss.InvokeAsync(args);

}
