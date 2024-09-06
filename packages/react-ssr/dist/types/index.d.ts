import type { Components, GcdsAlertCustomEvent, GcdsBreadcrumbsItemCustomEvent, GcdsBreadcrumbsCustomEvent, GcdsButtonCustomEvent, GcdsCardCustomEvent, GcdsCheckboxCustomEvent, GcdsContainerCustomEvent, GcdsDateInputCustomEvent, GcdsDateModifiedCustomEvent, GcdsDetailsCustomEvent, GcdsErrorMessageCustomEvent, GcdsErrorSummaryCustomEvent, GcdsFieldsetCustomEvent, GcdsFileUploaderCustomEvent, GcdsFooterCustomEvent, GcdsGridColCustomEvent, GcdsGridCustomEvent, GcdsHeaderCustomEvent, GcdsHeadingCustomEvent, GcdsHintCustomEvent, GcdsIconCustomEvent, GcdsInputCustomEvent, GcdsLabelCustomEvent, GcdsLangToggleCustomEvent, GcdsLinkCustomEvent, GcdsNavGroupCustomEvent, GcdsNavLinkCustomEvent, GcdsPaginationCustomEvent, GcdsPhaseBannerCustomEvent, GcdsRadioGroupCustomEvent, GcdsSearchCustomEvent, GcdsSelectCustomEvent, GcdsSideNavCustomEvent, GcdsSignatureCustomEvent, GcdsSrOnlyCustomEvent, GcdsStepperCustomEvent, GcdsTextCustomEvent, GcdsTextareaCustomEvent, GcdsTopNavCustomEvent, GcdsTopicMenuCustomEvent, GcdsVerifyBannerCustomEvent } from '@cdssnc/gcds-components';
import type React from 'react';

type GlobalEventHandlers = {
onAnimationcancel: (event: GlobalEventHandlersEventMap['animationcancel']) => void,
onAnimationend: (event: GlobalEventHandlersEventMap['animationend']) => void,
onAnimationiteration: (event: GlobalEventHandlersEventMap['animationiteration']) => void,
onAnimationstart: (event: GlobalEventHandlersEventMap['animationstart']) => void,
onBeforeinput: (event: GlobalEventHandlersEventMap['beforeinput']) => void,
onBlur: (event: GlobalEventHandlersEventMap['blur']) => void,
onCancel: (event: GlobalEventHandlersEventMap['cancel']) => void,
onChange: (event: GlobalEventHandlersEventMap['change']) => void,
onClick: (event: GlobalEventHandlersEventMap['click']) => void,
onClose: (event: GlobalEventHandlersEventMap['close']) => void,
onContextmenu: (event: GlobalEventHandlersEventMap['contextmenu']) => void,
onCopy: (event: GlobalEventHandlersEventMap['copy']) => void,
onCut: (event: GlobalEventHandlersEventMap['cut']) => void,
onDblclick: (event: GlobalEventHandlersEventMap['dblclick']) => void,
onDrag: (event: GlobalEventHandlersEventMap['drag']) => void,
onDragend: (event: GlobalEventHandlersEventMap['dragend']) => void,
onDragenter: (event: GlobalEventHandlersEventMap['dragenter']) => void,
onDragleave: (event: GlobalEventHandlersEventMap['dragleave']) => void,
onDragover: (event: GlobalEventHandlersEventMap['dragover']) => void,
onDragstart: (event: GlobalEventHandlersEventMap['dragstart']) => void,
onDrop: (event: GlobalEventHandlersEventMap['drop']) => void,
onEmptied: (event: GlobalEventHandlersEventMap['emptied']) => void,
onError: (event: GlobalEventHandlersEventMap['error']) => void,
onFocus: (event: GlobalEventHandlersEventMap['focus']) => void,
onFocusin: (event: GlobalEventHandlersEventMap['focusin']) => void,
onFocusout: (event: GlobalEventHandlersEventMap['focusout']) => void,
onFormdata: (event: GlobalEventHandlersEventMap['formdata']) => void,
onInput: (event: GlobalEventHandlersEventMap['input']) => void,
onInvalid: (event: GlobalEventHandlersEventMap['invalid']) => void,
onKeydown: (event: GlobalEventHandlersEventMap['keydown']) => void,
onKeypress: (event: GlobalEventHandlersEventMap['keypress']) => void,
onKeyup: (event: GlobalEventHandlersEventMap['keyup']) => void,
onMousedown: (event: GlobalEventHandlersEventMap['mousedown']) => void,
onMouseenter: (event: GlobalEventHandlersEventMap['mouseenter']) => void,
onMouseleave: (event: GlobalEventHandlersEventMap['mouseleave']) => void,
onMousemove: (event: GlobalEventHandlersEventMap['mousemove']) => void,
onMouseout: (event: GlobalEventHandlersEventMap['mouseout']) => void,
onMouseover: (event: GlobalEventHandlersEventMap['mouseover']) => void,
onMouseup: (event: GlobalEventHandlersEventMap['mouseup']) => void,
onPointercancel: (event: GlobalEventHandlersEventMap['pointercancel']) => void,
onPointerdown: (event: GlobalEventHandlersEventMap['pointerdown']) => void,
onPointerenter: (event: GlobalEventHandlersEventMap['pointerenter']) => void,
onPointerleave: (event: GlobalEventHandlersEventMap['pointerleave']) => void,
onPointermove: (event: GlobalEventHandlersEventMap['pointermove']) => void,
onPointerout: (event: GlobalEventHandlersEventMap['pointerout']) => void,
onPointerover: (event: GlobalEventHandlersEventMap['pointerover']) => void,
onPointerup: (event: GlobalEventHandlersEventMap['pointerup']) => void,
onReset: (event: GlobalEventHandlersEventMap['reset']) => void,
onResize: (event: GlobalEventHandlersEventMap['resize']) => void,
onScroll: (event: GlobalEventHandlersEventMap['scroll']) => void,
onSelect: (event: GlobalEventHandlersEventMap['select']) => void,
onSelectionchange: (event: GlobalEventHandlersEventMap['selectionchange']) => void,
onSelectstart: (event: GlobalEventHandlersEventMap['selectstart']) => void,
onSlotchange: (event: GlobalEventHandlersEventMap['slotchange']) => void,
onSubmit: (event: GlobalEventHandlersEventMap['submit']) => void,
onToggle: (event: GlobalEventHandlersEventMap['toggle']) => void,
onTouchcancel: (event: GlobalEventHandlersEventMap['touchcancel']) => void,
onTouchend: (event: GlobalEventHandlersEventMap['touchend']) => void,
onTouchmove: (event: GlobalEventHandlersEventMap['touchmove']) => void,
onTouchstart: (event: GlobalEventHandlersEventMap['touchstart']) => void,
onTransitioncancel: (event: GlobalEventHandlersEventMap['transitioncancel']) => void,
onTransitionend: (event: GlobalEventHandlersEventMap['transitionend']) => void,
onTransitionrun: (event: GlobalEventHandlersEventMap['transitionrun']) => void,
onTransitionstart: (event: GlobalEventHandlersEventMap['transitionstart']) => void,
onWheel: (event: GlobalEventHandlersEventMap['wheel']) => void
};

type EnumsToStringLiterals<T> = {
  [K in keyof T]: Exclude<IsEnum<T[K]> extends true ? `${T[K]}` : T[K], 'undefined'>;
};

declare const GcdsAlert: React.ForwardRefExoticComponent<React.PropsWithChildren<Partial<EnumsToStringLiterals<Components.GcdsAlert> & {
    slot: string
  } & GlobalEventHandlers & {
    onGcdsDismiss: (event: GcdsAlertCustomEvent<HTMLGcdsAlertElementEventMap['gcdsDismiss']>) => void
  }>> & React.RefAttributes<HTMLElement | undefined> & React.HTMLAttributes<HTMLElement>>;
declare const GcdsBreadcrumbsItem: React.ForwardRefExoticComponent<React.PropsWithChildren<Partial<EnumsToStringLiterals<Components.GcdsBreadcrumbsItem> & {
    slot: string
  } & GlobalEventHandlers>> & React.RefAttributes<HTMLElement | undefined> & React.HTMLAttributes<HTMLElement>>;
declare const GcdsBreadcrumbs: React.ForwardRefExoticComponent<React.PropsWithChildren<Partial<EnumsToStringLiterals<Components.GcdsBreadcrumbs> & {
    slot: string
  } & GlobalEventHandlers>> & React.RefAttributes<HTMLElement | undefined> & React.HTMLAttributes<HTMLElement>>;
declare const GcdsButton: React.ForwardRefExoticComponent<React.PropsWithChildren<Partial<EnumsToStringLiterals<Components.GcdsButton> & {
    slot: string
  } & GlobalEventHandlers & {
    onGcdsClick: (event: GcdsButtonCustomEvent<HTMLGcdsButtonElementEventMap['gcdsClick']>) => void,
  onGcdsFocus: (event: GcdsButtonCustomEvent<HTMLGcdsButtonElementEventMap['gcdsFocus']>) => void,
  onGcdsBlur: (event: GcdsButtonCustomEvent<HTMLGcdsButtonElementEventMap['gcdsBlur']>) => void
  }>> & React.RefAttributes<HTMLElement | undefined> & React.HTMLAttributes<HTMLElement>>;
declare const GcdsCard: React.ForwardRefExoticComponent<React.PropsWithChildren<Partial<EnumsToStringLiterals<Components.GcdsCard> & {
    slot: string
  } & GlobalEventHandlers & {
    onGcdsFocus: (event: GcdsCardCustomEvent<HTMLGcdsCardElementEventMap['gcdsFocus']>) => void,
  onGcdsBlur: (event: GcdsCardCustomEvent<HTMLGcdsCardElementEventMap['gcdsBlur']>) => void,
  onGcdsClick: (event: GcdsCardCustomEvent<HTMLGcdsCardElementEventMap['gcdsClick']>) => void
  }>> & React.RefAttributes<HTMLElement | undefined> & React.HTMLAttributes<HTMLElement>>;
declare const GcdsCheckbox: React.ForwardRefExoticComponent<React.PropsWithChildren<Partial<EnumsToStringLiterals<Components.GcdsCheckbox> & {
    slot: string
  } & GlobalEventHandlers & {
    onGcdsClick: (event: GcdsCheckboxCustomEvent<HTMLGcdsCheckboxElementEventMap['gcdsClick']>) => void,
  onGcdsFocus: (event: GcdsCheckboxCustomEvent<HTMLGcdsCheckboxElementEventMap['gcdsFocus']>) => void,
  onGcdsBlur: (event: GcdsCheckboxCustomEvent<HTMLGcdsCheckboxElementEventMap['gcdsBlur']>) => void,
  onGcdsChange: (event: GcdsCheckboxCustomEvent<HTMLGcdsCheckboxElementEventMap['gcdsChange']>) => void,
  onGcdsError: (event: GcdsCheckboxCustomEvent<HTMLGcdsCheckboxElementEventMap['gcdsError']>) => void,
  onGcdsValid: (event: GcdsCheckboxCustomEvent<HTMLGcdsCheckboxElementEventMap['gcdsValid']>) => void
  }>> & React.RefAttributes<HTMLElement | undefined> & React.HTMLAttributes<HTMLElement>>;
declare const GcdsContainer: React.ForwardRefExoticComponent<React.PropsWithChildren<Partial<EnumsToStringLiterals<Components.GcdsContainer> & {
    slot: string
  } & GlobalEventHandlers>> & React.RefAttributes<HTMLElement | undefined> & React.HTMLAttributes<HTMLElement>>;
declare const GcdsDateInput: React.ForwardRefExoticComponent<React.PropsWithChildren<Partial<EnumsToStringLiterals<Components.GcdsDateInput> & {
    slot: string
  } & GlobalEventHandlers & {
    onGcdsFocus: (event: GcdsDateInputCustomEvent<HTMLGcdsDateInputElementEventMap['gcdsFocus']>) => void,
  onGcdsBlur: (event: GcdsDateInputCustomEvent<HTMLGcdsDateInputElementEventMap['gcdsBlur']>) => void,
  onGcdsInput: (event: GcdsDateInputCustomEvent<HTMLGcdsDateInputElementEventMap['gcdsInput']>) => void,
  onGcdsChange: (event: GcdsDateInputCustomEvent<HTMLGcdsDateInputElementEventMap['gcdsChange']>) => void,
  onGcdsError: (event: GcdsDateInputCustomEvent<HTMLGcdsDateInputElementEventMap['gcdsError']>) => void,
  onGcdsValid: (event: GcdsDateInputCustomEvent<HTMLGcdsDateInputElementEventMap['gcdsValid']>) => void
  }>> & React.RefAttributes<HTMLElement | undefined> & React.HTMLAttributes<HTMLElement>>;
declare const GcdsDateModified: React.ForwardRefExoticComponent<React.PropsWithChildren<Partial<EnumsToStringLiterals<Components.GcdsDateModified> & {
    slot: string
  } & GlobalEventHandlers>> & React.RefAttributes<HTMLElement | undefined> & React.HTMLAttributes<HTMLElement>>;
declare const GcdsDetails: React.ForwardRefExoticComponent<React.PropsWithChildren<Partial<EnumsToStringLiterals<Components.GcdsDetails> & {
    slot: string
  } & GlobalEventHandlers & {
    onGcdsFocus: (event: GcdsDetailsCustomEvent<HTMLGcdsDetailsElementEventMap['gcdsFocus']>) => void,
  onGcdsBlur: (event: GcdsDetailsCustomEvent<HTMLGcdsDetailsElementEventMap['gcdsBlur']>) => void,
  onGcdsClick: (event: GcdsDetailsCustomEvent<HTMLGcdsDetailsElementEventMap['gcdsClick']>) => void
  }>> & React.RefAttributes<HTMLElement | undefined> & React.HTMLAttributes<HTMLElement>>;
declare const GcdsErrorMessage: React.ForwardRefExoticComponent<React.PropsWithChildren<Partial<EnumsToStringLiterals<Components.GcdsErrorMessage> & {
    slot: string
  } & GlobalEventHandlers>> & React.RefAttributes<HTMLElement | undefined> & React.HTMLAttributes<HTMLElement>>;
declare const GcdsErrorSummary: React.ForwardRefExoticComponent<React.PropsWithChildren<Partial<EnumsToStringLiterals<Components.GcdsErrorSummary> & {
    slot: string
  } & GlobalEventHandlers>> & React.RefAttributes<HTMLElement | undefined> & React.HTMLAttributes<HTMLElement>>;
declare const GcdsFieldset: React.ForwardRefExoticComponent<React.PropsWithChildren<Partial<EnumsToStringLiterals<Components.GcdsFieldset> & {
    slot: string
  } & GlobalEventHandlers & {
    onGcdsGroupError: (event: GcdsFieldsetCustomEvent<HTMLGcdsFieldsetElementEventMap['gcdsGroupError']>) => void,
  onGcdsGroupErrorClear: (event: GcdsFieldsetCustomEvent<HTMLGcdsFieldsetElementEventMap['gcdsGroupErrorClear']>) => void,
  onGcdsError: (event: GcdsFieldsetCustomEvent<HTMLGcdsFieldsetElementEventMap['gcdsError']>) => void,
  onGcdsValid: (event: GcdsFieldsetCustomEvent<HTMLGcdsFieldsetElementEventMap['gcdsValid']>) => void
  }>> & React.RefAttributes<HTMLElement | undefined> & React.HTMLAttributes<HTMLElement>>;
declare const GcdsFileUploader: React.ForwardRefExoticComponent<React.PropsWithChildren<Partial<EnumsToStringLiterals<Components.GcdsFileUploader> & {
    slot: string
  } & GlobalEventHandlers & {
    onGcdsFocus: (event: GcdsFileUploaderCustomEvent<HTMLGcdsFileUploaderElementEventMap['gcdsFocus']>) => void,
  onGcdsBlur: (event: GcdsFileUploaderCustomEvent<HTMLGcdsFileUploaderElementEventMap['gcdsBlur']>) => void,
  onGcdsChange: (event: GcdsFileUploaderCustomEvent<HTMLGcdsFileUploaderElementEventMap['gcdsChange']>) => void,
  onGcdsInput: (event: GcdsFileUploaderCustomEvent<HTMLGcdsFileUploaderElementEventMap['gcdsInput']>) => void,
  onGcdsRemoveFile: (event: GcdsFileUploaderCustomEvent<HTMLGcdsFileUploaderElementEventMap['gcdsRemoveFile']>) => void,
  onGcdsError: (event: GcdsFileUploaderCustomEvent<HTMLGcdsFileUploaderElementEventMap['gcdsError']>) => void,
  onGcdsValid: (event: GcdsFileUploaderCustomEvent<HTMLGcdsFileUploaderElementEventMap['gcdsValid']>) => void
  }>> & React.RefAttributes<HTMLElement | undefined> & React.HTMLAttributes<HTMLElement>>;
declare const GcdsFooter: React.ForwardRefExoticComponent<React.PropsWithChildren<Partial<EnumsToStringLiterals<Components.GcdsFooter> & {
    slot: string
  } & GlobalEventHandlers>> & React.RefAttributes<HTMLElement | undefined> & React.HTMLAttributes<HTMLElement>>;
declare const GcdsGridCol: React.ForwardRefExoticComponent<React.PropsWithChildren<Partial<EnumsToStringLiterals<Components.GcdsGridCol> & {
    slot: string
  } & GlobalEventHandlers>> & React.RefAttributes<HTMLElement | undefined> & React.HTMLAttributes<HTMLElement>>;
declare const GcdsGrid: React.ForwardRefExoticComponent<React.PropsWithChildren<Partial<EnumsToStringLiterals<Components.GcdsGrid> & {
    slot: string
  } & GlobalEventHandlers>> & React.RefAttributes<HTMLElement | undefined> & React.HTMLAttributes<HTMLElement>>;
declare const GcdsHeader: React.ForwardRefExoticComponent<React.PropsWithChildren<Partial<EnumsToStringLiterals<Components.GcdsHeader> & {
    slot: string
  } & GlobalEventHandlers>> & React.RefAttributes<HTMLElement | undefined> & React.HTMLAttributes<HTMLElement>>;
declare const GcdsHeading: React.ForwardRefExoticComponent<React.PropsWithChildren<Partial<EnumsToStringLiterals<Components.GcdsHeading> & {
    slot: string
  } & GlobalEventHandlers>> & React.RefAttributes<HTMLElement | undefined> & React.HTMLAttributes<HTMLElement>>;
declare const GcdsHint: React.ForwardRefExoticComponent<React.PropsWithChildren<Partial<EnumsToStringLiterals<Components.GcdsHint> & {
    slot: string
  } & GlobalEventHandlers>> & React.RefAttributes<HTMLElement | undefined> & React.HTMLAttributes<HTMLElement>>;
declare const GcdsIcon: React.ForwardRefExoticComponent<React.PropsWithChildren<Partial<EnumsToStringLiterals<Components.GcdsIcon> & {
    slot: string
  } & GlobalEventHandlers>> & React.RefAttributes<HTMLElement | undefined> & React.HTMLAttributes<HTMLElement>>;
declare const GcdsInput: React.ForwardRefExoticComponent<React.PropsWithChildren<Partial<EnumsToStringLiterals<Components.GcdsInput> & {
    slot: string
  } & GlobalEventHandlers & {
    onGcdsFocus: (event: GcdsInputCustomEvent<HTMLGcdsInputElementEventMap['gcdsFocus']>) => void,
  onGcdsBlur: (event: GcdsInputCustomEvent<HTMLGcdsInputElementEventMap['gcdsBlur']>) => void,
  onGcdsInput: (event: GcdsInputCustomEvent<HTMLGcdsInputElementEventMap['gcdsInput']>) => void,
  onGcdsChange: (event: GcdsInputCustomEvent<HTMLGcdsInputElementEventMap['gcdsChange']>) => void,
  onGcdsError: (event: GcdsInputCustomEvent<HTMLGcdsInputElementEventMap['gcdsError']>) => void,
  onGcdsValid: (event: GcdsInputCustomEvent<HTMLGcdsInputElementEventMap['gcdsValid']>) => void
  }>> & React.RefAttributes<HTMLElement | undefined> & React.HTMLAttributes<HTMLElement>>;
declare const GcdsLabel: React.ForwardRefExoticComponent<React.PropsWithChildren<Partial<EnumsToStringLiterals<Components.GcdsLabel> & {
    slot: string
  } & GlobalEventHandlers>> & React.RefAttributes<HTMLElement | undefined> & React.HTMLAttributes<HTMLElement>>;
declare const GcdsLangToggle: React.ForwardRefExoticComponent<React.PropsWithChildren<Partial<EnumsToStringLiterals<Components.GcdsLangToggle> & {
    slot: string
  } & GlobalEventHandlers>> & React.RefAttributes<HTMLElement | undefined> & React.HTMLAttributes<HTMLElement>>;
declare const GcdsLink: React.ForwardRefExoticComponent<React.PropsWithChildren<Partial<EnumsToStringLiterals<Components.GcdsLink> & {
    slot: string
  } & GlobalEventHandlers & {
    onGcdsFocus: (event: GcdsLinkCustomEvent<HTMLGcdsLinkElementEventMap['gcdsFocus']>) => void,
  onGcdsBlur: (event: GcdsLinkCustomEvent<HTMLGcdsLinkElementEventMap['gcdsBlur']>) => void,
  onGcdsClick: (event: GcdsLinkCustomEvent<HTMLGcdsLinkElementEventMap['gcdsClick']>) => void
  }>> & React.RefAttributes<HTMLElement | undefined> & React.HTMLAttributes<HTMLElement>>;
declare const GcdsNavGroup: React.ForwardRefExoticComponent<React.PropsWithChildren<Partial<EnumsToStringLiterals<Components.GcdsNavGroup> & {
    slot: string
  } & GlobalEventHandlers & {
    onGcdsClick: (event: GcdsNavGroupCustomEvent<HTMLGcdsNavGroupElementEventMap['gcdsClick']>) => void,
  onGcdsFocus: (event: GcdsNavGroupCustomEvent<HTMLGcdsNavGroupElementEventMap['gcdsFocus']>) => void,
  onGcdsBlur: (event: GcdsNavGroupCustomEvent<HTMLGcdsNavGroupElementEventMap['gcdsBlur']>) => void
  }>> & React.RefAttributes<HTMLElement | undefined> & React.HTMLAttributes<HTMLElement>>;
declare const GcdsNavLink: React.ForwardRefExoticComponent<React.PropsWithChildren<Partial<EnumsToStringLiterals<Components.GcdsNavLink> & {
    slot: string
  } & GlobalEventHandlers & {
    onGcdsClick: (event: GcdsNavLinkCustomEvent<HTMLGcdsNavLinkElementEventMap['gcdsClick']>) => void,
  onGcdsFocus: (event: GcdsNavLinkCustomEvent<HTMLGcdsNavLinkElementEventMap['gcdsFocus']>) => void,
  onGcdsBlur: (event: GcdsNavLinkCustomEvent<HTMLGcdsNavLinkElementEventMap['gcdsBlur']>) => void
  }>> & React.RefAttributes<HTMLElement | undefined> & React.HTMLAttributes<HTMLElement>>;
declare const GcdsPagination: React.ForwardRefExoticComponent<React.PropsWithChildren<Partial<EnumsToStringLiterals<Components.GcdsPagination> & {
    slot: string
  } & GlobalEventHandlers & {
    onGcdsFocus: (event: GcdsPaginationCustomEvent<HTMLGcdsPaginationElementEventMap['gcdsFocus']>) => void,
  onGcdsBlur: (event: GcdsPaginationCustomEvent<HTMLGcdsPaginationElementEventMap['gcdsBlur']>) => void,
  onGcdsClick: (event: GcdsPaginationCustomEvent<HTMLGcdsPaginationElementEventMap['gcdsClick']>) => void
  }>> & React.RefAttributes<HTMLElement | undefined> & React.HTMLAttributes<HTMLElement>>;
declare const GcdsPhaseBanner: React.ForwardRefExoticComponent<React.PropsWithChildren<Partial<EnumsToStringLiterals<Components.GcdsPhaseBanner> & {
    slot: string
  } & GlobalEventHandlers>> & React.RefAttributes<HTMLElement | undefined> & React.HTMLAttributes<HTMLElement>>;
declare const GcdsRadioGroup: React.ForwardRefExoticComponent<React.PropsWithChildren<Partial<EnumsToStringLiterals<Components.GcdsRadioGroup> & {
    slot: string
  } & GlobalEventHandlers & {
    onGcdsChange: (event: GcdsRadioGroupCustomEvent<HTMLGcdsRadioGroupElementEventMap['gcdsChange']>) => void,
  onGcdsFocus: (event: GcdsRadioGroupCustomEvent<HTMLGcdsRadioGroupElementEventMap['gcdsFocus']>) => void,
  onGcdsBlur: (event: GcdsRadioGroupCustomEvent<HTMLGcdsRadioGroupElementEventMap['gcdsBlur']>) => void
  }>> & React.RefAttributes<HTMLElement | undefined> & React.HTMLAttributes<HTMLElement>>;
declare const GcdsSearch: React.ForwardRefExoticComponent<React.PropsWithChildren<Partial<EnumsToStringLiterals<Components.GcdsSearch> & {
    slot: string
  } & GlobalEventHandlers & {
    onGcdsInput: (event: GcdsSearchCustomEvent<HTMLGcdsSearchElementEventMap['gcdsInput']>) => void,
  onGcdsChange: (event: GcdsSearchCustomEvent<HTMLGcdsSearchElementEventMap['gcdsChange']>) => void,
  onGcdsFocus: (event: GcdsSearchCustomEvent<HTMLGcdsSearchElementEventMap['gcdsFocus']>) => void,
  onGcdsBlur: (event: GcdsSearchCustomEvent<HTMLGcdsSearchElementEventMap['gcdsBlur']>) => void,
  onGcdsSubmit: (event: GcdsSearchCustomEvent<HTMLGcdsSearchElementEventMap['gcdsSubmit']>) => void
  }>> & React.RefAttributes<HTMLElement | undefined> & React.HTMLAttributes<HTMLElement>>;
declare const GcdsSelect: React.ForwardRefExoticComponent<React.PropsWithChildren<Partial<EnumsToStringLiterals<Components.GcdsSelect> & {
    slot: string
  } & GlobalEventHandlers & {
    onGcdsChange: (event: GcdsSelectCustomEvent<HTMLGcdsSelectElementEventMap['gcdsChange']>) => void,
  onGcdsInput: (event: GcdsSelectCustomEvent<HTMLGcdsSelectElementEventMap['gcdsInput']>) => void,
  onGcdsFocus: (event: GcdsSelectCustomEvent<HTMLGcdsSelectElementEventMap['gcdsFocus']>) => void,
  onGcdsBlur: (event: GcdsSelectCustomEvent<HTMLGcdsSelectElementEventMap['gcdsBlur']>) => void,
  onGcdsError: (event: GcdsSelectCustomEvent<HTMLGcdsSelectElementEventMap['gcdsError']>) => void,
  onGcdsValid: (event: GcdsSelectCustomEvent<HTMLGcdsSelectElementEventMap['gcdsValid']>) => void
  }>> & React.RefAttributes<HTMLElement | undefined> & React.HTMLAttributes<HTMLElement>>;
declare const GcdsSideNav: React.ForwardRefExoticComponent<React.PropsWithChildren<Partial<EnumsToStringLiterals<Components.GcdsSideNav> & {
    slot: string
  } & GlobalEventHandlers>> & React.RefAttributes<HTMLElement | undefined> & React.HTMLAttributes<HTMLElement>>;
declare const GcdsSignature: React.ForwardRefExoticComponent<React.PropsWithChildren<Partial<EnumsToStringLiterals<Components.GcdsSignature> & {
    slot: string
  } & GlobalEventHandlers>> & React.RefAttributes<HTMLElement | undefined> & React.HTMLAttributes<HTMLElement>>;
declare const GcdsSrOnly: React.ForwardRefExoticComponent<React.PropsWithChildren<Partial<EnumsToStringLiterals<Components.GcdsSrOnly> & {
    slot: string
  } & GlobalEventHandlers>> & React.RefAttributes<HTMLElement | undefined> & React.HTMLAttributes<HTMLElement>>;
declare const GcdsStepper: React.ForwardRefExoticComponent<React.PropsWithChildren<Partial<EnumsToStringLiterals<Components.GcdsStepper> & {
    slot: string
  } & GlobalEventHandlers>> & React.RefAttributes<HTMLElement | undefined> & React.HTMLAttributes<HTMLElement>>;
declare const GcdsText: React.ForwardRefExoticComponent<React.PropsWithChildren<Partial<EnumsToStringLiterals<Components.GcdsText> & {
    slot: string
  } & GlobalEventHandlers>> & React.RefAttributes<HTMLElement | undefined> & React.HTMLAttributes<HTMLElement>>;
declare const GcdsTextarea: React.ForwardRefExoticComponent<React.PropsWithChildren<Partial<EnumsToStringLiterals<Components.GcdsTextarea> & {
    slot: string
  } & GlobalEventHandlers & {
    onGcdsFocus: (event: GcdsTextareaCustomEvent<HTMLGcdsTextareaElementEventMap['gcdsFocus']>) => void,
  onGcdsBlur: (event: GcdsTextareaCustomEvent<HTMLGcdsTextareaElementEventMap['gcdsBlur']>) => void,
  onGcdsChange: (event: GcdsTextareaCustomEvent<HTMLGcdsTextareaElementEventMap['gcdsChange']>) => void,
  onGcdsInput: (event: GcdsTextareaCustomEvent<HTMLGcdsTextareaElementEventMap['gcdsInput']>) => void,
  onGcdsError: (event: GcdsTextareaCustomEvent<HTMLGcdsTextareaElementEventMap['gcdsError']>) => void,
  onGcdsValid: (event: GcdsTextareaCustomEvent<HTMLGcdsTextareaElementEventMap['gcdsValid']>) => void
  }>> & React.RefAttributes<HTMLElement | undefined> & React.HTMLAttributes<HTMLElement>>;
declare const GcdsTopNav: React.ForwardRefExoticComponent<React.PropsWithChildren<Partial<EnumsToStringLiterals<Components.GcdsTopNav> & {
    slot: string
  } & GlobalEventHandlers>> & React.RefAttributes<HTMLElement | undefined> & React.HTMLAttributes<HTMLElement>>;
declare const GcdsTopicMenu: React.ForwardRefExoticComponent<React.PropsWithChildren<Partial<EnumsToStringLiterals<Components.GcdsTopicMenu> & {
    slot: string
  } & GlobalEventHandlers>> & React.RefAttributes<HTMLElement | undefined> & React.HTMLAttributes<HTMLElement>>;
declare const GcdsVerifyBanner: React.ForwardRefExoticComponent<React.PropsWithChildren<Partial<EnumsToStringLiterals<Components.GcdsVerifyBanner> & {
    slot: string
  } & GlobalEventHandlers>> & React.RefAttributes<HTMLElement | undefined> & React.HTMLAttributes<HTMLElement>>;

export { GcdsAlert,
GcdsBreadcrumbsItem,
GcdsBreadcrumbs,
GcdsButton,
GcdsCard,
GcdsCheckbox,
GcdsContainer,
GcdsDateInput,
GcdsDateModified,
GcdsDetails,
GcdsErrorMessage,
GcdsErrorSummary,
GcdsFieldset,
GcdsFileUploader,
GcdsFooter,
GcdsGridCol,
GcdsGrid,
GcdsHeader,
GcdsHeading,
GcdsHint,
GcdsIcon,
GcdsInput,
GcdsLabel,
GcdsLangToggle,
GcdsLink,
GcdsNavGroup,
GcdsNavLink,
GcdsPagination,
GcdsPhaseBanner,
GcdsRadioGroup,
GcdsSearch,
GcdsSelect,
GcdsSideNav,
GcdsSignature,
GcdsSrOnly,
GcdsStepper,
GcdsText,
GcdsTextarea,
GcdsTopNav,
GcdsTopicMenu,
GcdsVerifyBanner };
