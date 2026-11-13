using System.Text.Json;

namespace GcdsCore.Components;

/// <summary>
/// Wraps a DOM CustomEvent dispatched by a web component, passed from JS
/// interop into the generated Blazor component's [JSInvokable] handlers.
/// </summary>
public class CustomEventArgs
{
    public string Type { get; set; } = string.Empty;

    /// <summary>
    /// The event's `detail` payload, as raw JSON. Deserialize with
    /// <c>Detail?.Deserialize&lt;T&gt;()</c> into whatever shape the
    /// specific custom event's detail is documented to carry.
    /// </summary>
    public JsonElement? Detail { get; set; }
}
