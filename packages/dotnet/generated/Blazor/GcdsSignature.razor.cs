using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;
using System.Text.Json;

namespace GcdsCore.Components;

/// <summary>
/// The signature is the Government of Canada landmark identifier found in the header or footer.
/// </summary>
public partial class GcdsSignature : GeneratedComponentBase
{
    /// <summary>Has link to canada.ca. Only applies to signature</summary>
    [Parameter] public bool HasLink { get; set; } = false;

    /// <summary>The type of graphic to render</summary>
    [Parameter] public GcdsSignatureTypeValue? Type { get; set; } = default;

    /// <summary>The colour variant to render</summary>
    [Parameter] public GcdsSignatureVariantValue? Variant { get; set; } = default;

}
