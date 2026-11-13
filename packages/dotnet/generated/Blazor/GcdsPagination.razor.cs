using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;
using System.Text.Json;

namespace GcdsCore.Components;

/// <summary>
/// Pagination is a division of content into multiple linked pages.
/// </summary>
public partial class GcdsPagination : GeneratedComponentBase
{
    protected override IReadOnlyList<string> EventNames => new[] { "gcdsBlur", "gcdsClick", "gcdsFocus" };

    /// <summary>List display - Current page number</summary>
    [Parameter] public double? CurrentPage { get; set; } = default;

    /// <summary>Determines the pagination display style.</summary>
    [Parameter] public GcdsPaginationDisplayValue? Display { get; set; } = default;

    /// <summary>(required) Navigation element label</summary>
    [Parameter] public string? Label { get; set; } = default;

    /// <summary>Simple display - href for next link</summary>
    [Parameter] public string? NextHref { get; set; } = default;

    /// <summary>Simple display - lable for next link</summary>
    [Parameter] public string? NextLabel { get; set; } = default;

    /// <summary>Simple display - href for previous link</summary>
    [Parameter] public string? PreviousHref { get; set; } = default;

    /// <summary>Simple display - label for previous link</summary>
    [Parameter] public string? PreviousLabel { get; set; } = default;

    /// <summary>List display - Total number of pages</summary>
    [Parameter] public double? TotalPages { get; set; } = default;

    /// <summary>List display - URL object to create query strings and fragment on links</summary>
    [Parameter] public string? Url { get; set; } = default;

    /// <summary>Emitted when the link loses focus.</summary>
    [Parameter] public EventCallback<CustomEventArgs> OnGcdsBlur { get; set; }

    /// <summary>Emitted when the link has been clicked. Contains the href in event detail when using simple display, or an object with page and href when using list display.</summary>
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
