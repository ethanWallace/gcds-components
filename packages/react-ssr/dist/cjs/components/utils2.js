var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var utils2_exports = {};
__export(utils2_exports, {
  g: () => getNavItems,
  h: () => handleKeyDownNav
});
module.exports = __toCommonJS(utils2_exports);
async function handleKeyDownNav(event, nav, queue) {
  const key = event.key;
  const currentIndex = queue.indexOf(document.activeElement == nav ? document.activeElement.shadowRoot.activeElement : document.activeElement);
  const activeElement = queue[currentIndex];
  switch (key) {
    case "ArrowDown":
      event.preventDefault();
      if (currentIndex + 1 > queue.length - 1) {
        await focusNavItem(0, queue);
      } else {
        await focusNavItem(currentIndex + 1, queue);
      }
      break;
    case "ArrowUp":
      event.preventDefault();
      if (currentIndex - 1 < 0) {
        await focusNavItem(queue.length - 1, queue);
      } else {
        await focusNavItem(currentIndex - 1, queue);
      }
      break;
    case "ArrowRight":
      event.preventDefault();
      if (activeElement.nodeName == "GCDS-NAV-GROUP" && !activeElement.hasAttribute("open")) {
        await toggleNavGroup(activeElement, nav);
      }
      break;
    case "ArrowLeft":
    case "Escape":
      event.preventDefault();
      if (activeElement.nodeName == "GCDS-NAV-GROUP" && activeElement.hasAttribute("open")) {
        await toggleNavGroup(activeElement, nav);
      } else if (activeElement.parentNode.nodeName == "GCDS-NAV-GROUP") {
        await toggleNavGroup(activeElement.parentNode, nav);
      } else if (activeElement.parentNode == nav && await activeElement.parentNode.getNavSize() == "mobile") {
        await toggleNavGroup(queue[queue.length - 1], nav);
      }
      break;
    case "Tab":
      if (nav.nodeName != "GCDS-SIDE-NAV") {
        if (activeElement.nodeName == "GCDS-NAV-GROUP" && activeElement.hasAttribute("open")) {
          event.preventDefault();
          await toggleNavGroup(activeElement, nav);
        } else if (activeElement.parentNode.nodeName == "GCDS-NAV-GROUP") {
          event.preventDefault();
          await toggleNavGroup(activeElement.parentNode, nav);
        }
      }
      break;
    case "Enter":
    case " ":
      if (activeElement.nodeName == "GCDS-NAV-GROUP") {
        event.preventDefault();
        await toggleNavGroup(activeElement, nav);
      }
      break;
  }
}
async function focusNavItem(index, queue) {
  if (queue[index].nodeName == "GCDS-NAV-LINK") {
    queue[index].focusLink();
  } else if (queue[index].nodeName == "GCDS-NAV-GROUP") {
    queue[index].focusTrigger();
  }
}
async function toggleNavGroup(group, nav) {
  const navGroup = group;
  if (navGroup.hasAttribute("open")) {
    await navGroup.toggleNav();
    navGroup.focusTrigger();
    nav.updateNavItemQueue(nav);
  } else {
    await navGroup.toggleNav();
    setTimeout(async () => {
      await focusNavItem(0, document.activeElement == nav ? nav.children : navGroup.children);
    }, 10);
    if (nav.nodeName == "GCDS-SIDE-NAV") {
      nav.updateNavItemQueue(nav);
    } else {
      nav.updateNavItemQueue(document.activeElement == nav ? nav : navGroup, document.activeElement == nav ? false : true);
    }
  }
}
async function getNavItems(el) {
  const indexedItems = Array.from(el.children);
  indexedItems.forEach(async (item) => {
    if (item.nodeName == "GCDS-NAV-GROUP" && item.open) {
      const groupChildren = await getNavItems(item);
      indexedItems.splice(indexedItems.indexOf(item) + 1, 0, ...groupChildren);
    }
  });
  return indexedItems;
}
