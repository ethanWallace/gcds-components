using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;
using System.Text.Json;

namespace GcdsCore.Components;

/// <summary>
/// The language toggle is a link to the same content in the other Official Language.
/// </summary>
public partial class GcdsLangToggle : GeneratedComponentBase
{
    protected override IReadOnlyList<string> EventNames => new[] { "gcdsBlur", "gcdsClick", "gcdsFocus" };

    /// <summary>(required) The href attribute specifies the URL of the opposite language page</summary>
    [Parameter] public string? Href { get; set; } = default;

    /// <summary>Emitted when the link loses focus.</summary>
    [Parameter] public EventCallback<CustomEventArgs> OnGcdsBlur { get; set; }

    /// <summary>Emitted when the link has been clicked. Contains the href in the event detail.</summary>
    [Parameter] public EventCallback<CustomEventArgs> OnGcdsClick { get; set; }

    /// <summary>Emitted when the link has focus.</summary>
    [Parameter] public EventCallback<CustomEventArgs> OnGcdsFocus { get; set; }

    [JSInvokable]
    public async Task HandleGcdsBlur(CustomEventArgs args) => await OnGcdsBlur.InvokeAsync(args);

    [JSInvokable]
    public async Task HandleGcdsClick(CustomEventArgs args) => await OnGcdsClick.InvokeAsync(args);

    [JSInvokable]
    public async Task HandleGcdsFocus(CustomEventArgs args) => await OnGcdsFocus.InvokeAsync(args);

}
