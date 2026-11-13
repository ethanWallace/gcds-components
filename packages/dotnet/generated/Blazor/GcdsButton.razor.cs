using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;
using System.Text.Json;

namespace GcdsCore.Components;

/// <summary>
/// The button is an interactive object that emphasizes an action.
/// </summary>
public partial class GcdsButton : GeneratedComponentBase
{
    protected override IReadOnlyList<string> EventNames => new[] { "gcdsBlur", "gcdsClick", "gcdsFocus" };

    /// <summary>The buttonId attribute specifies the id for a &lt;button&gt; element.</summary>
    [Parameter] public string? ButtonId { get; set; } = default;

    /// <summary>Set the main style</summary>
    [Parameter] public GcdsButtonButtonRoleValue? ButtonRole { get; set; } = default;

    /// <summary>The disabled attribute for a &lt;button&gt; element.</summary>
    [Parameter] public bool Disabled { get; set; }

    /// <summary>The download attribute specifies that the target (the file specified in the href attribute) will be downloaded when a user clicks on the hyperlink</summary>
    [Parameter] public string? Download { get; set; } = default;

    /// <summary>The href attribute specifies the URL of the page the link goes to</summary>
    [Parameter] public string? Href { get; set; } = default;

    /// <summary>The name attribute specifies the name for a &lt;button&gt; element.</summary>
    [Parameter] public string? Name { get; set; } = default;

    /// <summary>The rel attribute specifies the relationship between the current document and the linked document</summary>
    [Parameter] public string? Rel { get; set; } = default;

    /// <summary>Set the button size</summary>
    [Parameter] public GcdsButtonSizeValue? Size { get; set; } = default;

    /// <summary>The target attribute specifies where to open the linked document</summary>
    [Parameter] public string? Target { get; set; } = default;

    /// <summary>Set button types</summary>
    [Parameter] public GcdsButtonTypeValue? Type { get; set; } = default;

    /// <summary>The value attribute specifies the value for a &lt;button&gt; element.</summary>
    [Parameter] public string? Value { get; set; } = default;

    /// <summary>Emitted when the button loses focus.</summary>
    [Parameter] public EventCallback<CustomEventArgs> OnGcdsBlur { get; set; }

    /// <summary>Emitted when the button has been clicked. Contains the value or href in the event detail.</summary>
    [Parameter] public EventCallback<CustomEventArgs> OnGcdsClick { get; set; }

    /// <summary>Emitted when the button has focus.</summary>
    [Parameter] public EventCallback<CustomEventArgs> OnGcdsFocus { get; set; }

    [Parameter] public RenderFragment? ChildContent { get; set; }

    [JSInvokable]
    public async Task HandleGcdsBlur(CustomEventArgs args) => await OnGcdsBlur.InvokeAsync(args);

    [JSInvokable]
    public async Task HandleGcdsClick(CustomEventArgs args) => await OnGcdsClick.InvokeAsync(args);

    [JSInvokable]
    public async Task HandleGcdsFocus(CustomEventArgs args) => await OnGcdsFocus.InvokeAsync(args);

}
