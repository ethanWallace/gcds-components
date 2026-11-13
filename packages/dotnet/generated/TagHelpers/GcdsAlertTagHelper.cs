using Microsoft.AspNetCore.Razor.TagHelpers;
using System.Globalization;
using System.Text.Json;

namespace GcdsCore.Components;

/// <summary>
/// Alert displays an alert message with an optional heading, icon, and close button.
/// </summary>
[HtmlTargetElement("gcds-alert")]
public class GcdsAlertTagHelper : TagHelper
{
public enum AlertRoleValue
{
    Danger,
    Info,
    Success,
    Warning
}

public enum ContainerValue
{
    Full,
    Lg,
    Md,
    Sm,
    Xl,
    Xs
}


    /// <summary>Defines alert role.</summary>
    public AlertRoleValue? AlertRole { get; set; }
    /// <summary>Defines the max width of the alert content.</summary>
    public ContainerValue? Container { get; set; }
    /// <summary>(required) Defines the alert heading.</summary>
    public string? Heading { get; set; } = default;
    /// <summary>Defines if the alert's close button is displayed or not.</summary>
    public bool HideCloseBtn { get; set; } = false;
    /// <summary>Defines if the alert's role icon is displayed or not.</summary>
    public bool HideRoleIcon { get; set; } = false;
    /// <summary>Defines if the alert's position is fixed.</summary>
    public bool IsFixed { get; set; } = false;

    public override void Process(TagHelperContext context, TagHelperOutput output)
    {
        output.TagName = "gcds-alert";
        if (AlertRole is not null)
            output.Attributes.SetAttribute("alert-role", AlertRoleValueToAttributeValue(AlertRole.Value));
        if (Container is not null)
            output.Attributes.SetAttribute("container", ContainerValueToAttributeValue(Container.Value));
        if (!string.IsNullOrEmpty(Heading))
            output.Attributes.SetAttribute("heading", Heading);
        if (HideCloseBtn)
            output.Attributes.SetAttribute("hide-close-btn", "");
        if (HideRoleIcon)
            output.Attributes.SetAttribute("hide-role-icon", "");
        if (IsFixed)
            output.Attributes.SetAttribute("is-fixed", "");
    }

    private static string AlertRoleValueToAttributeValue(AlertRoleValue value) => value switch
    {
            AlertRoleValue.Danger => "danger",
            AlertRoleValue.Info => "info",
            AlertRoleValue.Success => "success",
            AlertRoleValue.Warning => "warning",
            _ => value.ToString(),
    };

    private static string ContainerValueToAttributeValue(ContainerValue value) => value switch
    {
            ContainerValue.Full => "full",
            ContainerValue.Lg => "lg",
            ContainerValue.Md => "md",
            ContainerValue.Sm => "sm",
            ContainerValue.Xl => "xl",
            ContainerValue.Xs => "xs",
            _ => value.ToString(),
    };
}
