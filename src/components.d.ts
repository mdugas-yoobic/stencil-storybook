/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { FileData } from "./github/2.molecules/file-line/file-line";
import { repoData } from "./github/3.organisms/file-list/file-list";
import { TIcons } from "./github/1.atoms/icon/icon";
import { TLanguage } from "./github/1.atoms/languageBar/language-bar";
import { TLanguage as TLanguage1 } from "./github/1.atoms/languageBar/language-bar";
import { Item } from "./components/todoItem/todoItem";
import { Item as Item1 } from "./components/todoItem/todoItem";
export namespace Components {
    interface FirstComp {
        "name": string;
    }
    interface GhA {
        "align": string;
        "url": string;
    }
    interface GhButton {
        "class": string;
    }
    interface GhDropdownButton {
        "buttonName": string;
        "class": string;
        "dropdownSize": string;
    }
    interface GhDropdownModal {
        "class": string;
        "size": string;
    }
    interface GhFileLine {
        "fileData": FileData;
        "hover": boolean;
        "rounded": boolean;
    }
    interface GhFileList {
        "repoData": repoData;
    }
    interface GhIcon {
        "color": string;
        "type": TIcons;
    }
    interface GhLanguageBar {
        "languagesList": TLanguage[];
    }
    interface GhLanguageDesc {
        "language": TLanguage1;
    }
    interface GhLanguageSection {
        "languages": TLanguage1[];
    }
    interface GhNavItem {
        "class": string;
    }
    interface GhNavbar {
        "class": string;
        "items": string[];
    }
    interface ItemList {
        "delay": number;
    }
    interface TodoComplete {
        "todoItems": Item[];
    }
    interface TodoItem {
        "description": string;
        "done": boolean;
        "uuid": number;
    }
    interface TodoSection {
    }
    interface XButton {
        "enable": boolean;
    }
}
export interface TodoItemCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLTodoItemElement;
}
export interface TodoSectionCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLTodoSectionElement;
}
declare global {
    interface HTMLFirstCompElement extends Components.FirstComp, HTMLStencilElement {
    }
    var HTMLFirstCompElement: {
        prototype: HTMLFirstCompElement;
        new (): HTMLFirstCompElement;
    };
    interface HTMLGhAElement extends Components.GhA, HTMLStencilElement {
    }
    var HTMLGhAElement: {
        prototype: HTMLGhAElement;
        new (): HTMLGhAElement;
    };
    interface HTMLGhButtonElement extends Components.GhButton, HTMLStencilElement {
    }
    var HTMLGhButtonElement: {
        prototype: HTMLGhButtonElement;
        new (): HTMLGhButtonElement;
    };
    interface HTMLGhDropdownButtonElement extends Components.GhDropdownButton, HTMLStencilElement {
    }
    var HTMLGhDropdownButtonElement: {
        prototype: HTMLGhDropdownButtonElement;
        new (): HTMLGhDropdownButtonElement;
    };
    interface HTMLGhDropdownModalElement extends Components.GhDropdownModal, HTMLStencilElement {
    }
    var HTMLGhDropdownModalElement: {
        prototype: HTMLGhDropdownModalElement;
        new (): HTMLGhDropdownModalElement;
    };
    interface HTMLGhFileLineElement extends Components.GhFileLine, HTMLStencilElement {
    }
    var HTMLGhFileLineElement: {
        prototype: HTMLGhFileLineElement;
        new (): HTMLGhFileLineElement;
    };
    interface HTMLGhFileListElement extends Components.GhFileList, HTMLStencilElement {
    }
    var HTMLGhFileListElement: {
        prototype: HTMLGhFileListElement;
        new (): HTMLGhFileListElement;
    };
    interface HTMLGhIconElement extends Components.GhIcon, HTMLStencilElement {
    }
    var HTMLGhIconElement: {
        prototype: HTMLGhIconElement;
        new (): HTMLGhIconElement;
    };
    interface HTMLGhLanguageBarElement extends Components.GhLanguageBar, HTMLStencilElement {
    }
    var HTMLGhLanguageBarElement: {
        prototype: HTMLGhLanguageBarElement;
        new (): HTMLGhLanguageBarElement;
    };
    interface HTMLGhLanguageDescElement extends Components.GhLanguageDesc, HTMLStencilElement {
    }
    var HTMLGhLanguageDescElement: {
        prototype: HTMLGhLanguageDescElement;
        new (): HTMLGhLanguageDescElement;
    };
    interface HTMLGhLanguageSectionElement extends Components.GhLanguageSection, HTMLStencilElement {
    }
    var HTMLGhLanguageSectionElement: {
        prototype: HTMLGhLanguageSectionElement;
        new (): HTMLGhLanguageSectionElement;
    };
    interface HTMLGhNavItemElement extends Components.GhNavItem, HTMLStencilElement {
    }
    var HTMLGhNavItemElement: {
        prototype: HTMLGhNavItemElement;
        new (): HTMLGhNavItemElement;
    };
    interface HTMLGhNavbarElement extends Components.GhNavbar, HTMLStencilElement {
    }
    var HTMLGhNavbarElement: {
        prototype: HTMLGhNavbarElement;
        new (): HTMLGhNavbarElement;
    };
    interface HTMLItemListElement extends Components.ItemList, HTMLStencilElement {
    }
    var HTMLItemListElement: {
        prototype: HTMLItemListElement;
        new (): HTMLItemListElement;
    };
    interface HTMLTodoCompleteElement extends Components.TodoComplete, HTMLStencilElement {
    }
    var HTMLTodoCompleteElement: {
        prototype: HTMLTodoCompleteElement;
        new (): HTMLTodoCompleteElement;
    };
    interface HTMLTodoItemElement extends Components.TodoItem, HTMLStencilElement {
    }
    var HTMLTodoItemElement: {
        prototype: HTMLTodoItemElement;
        new (): HTMLTodoItemElement;
    };
    interface HTMLTodoSectionElement extends Components.TodoSection, HTMLStencilElement {
    }
    var HTMLTodoSectionElement: {
        prototype: HTMLTodoSectionElement;
        new (): HTMLTodoSectionElement;
    };
    interface HTMLXButtonElement extends Components.XButton, HTMLStencilElement {
    }
    var HTMLXButtonElement: {
        prototype: HTMLXButtonElement;
        new (): HTMLXButtonElement;
    };
    interface HTMLElementTagNameMap {
        "first-comp": HTMLFirstCompElement;
        "gh-a": HTMLGhAElement;
        "gh-button": HTMLGhButtonElement;
        "gh-dropdown-button": HTMLGhDropdownButtonElement;
        "gh-dropdown-modal": HTMLGhDropdownModalElement;
        "gh-file-line": HTMLGhFileLineElement;
        "gh-file-list": HTMLGhFileListElement;
        "gh-icon": HTMLGhIconElement;
        "gh-language-bar": HTMLGhLanguageBarElement;
        "gh-language-desc": HTMLGhLanguageDescElement;
        "gh-language-section": HTMLGhLanguageSectionElement;
        "gh-nav-item": HTMLGhNavItemElement;
        "gh-navbar": HTMLGhNavbarElement;
        "item-list": HTMLItemListElement;
        "todo-complete": HTMLTodoCompleteElement;
        "todo-item": HTMLTodoItemElement;
        "todo-section": HTMLTodoSectionElement;
        "x-button": HTMLXButtonElement;
    }
}
declare namespace LocalJSX {
    interface FirstComp {
        "name"?: string;
    }
    interface GhA {
        "align"?: string;
        "url"?: string;
    }
    interface GhButton {
        "class"?: string;
    }
    interface GhDropdownButton {
        "buttonName": string;
        "class"?: string;
        "dropdownSize"?: string;
    }
    interface GhDropdownModal {
        "class"?: string;
        "size"?: string;
    }
    interface GhFileLine {
        "fileData": FileData;
        "hover"?: boolean;
        "rounded"?: boolean;
    }
    interface GhFileList {
        "repoData": repoData;
    }
    interface GhIcon {
        "color"?: string;
        "type"?: TIcons;
    }
    interface GhLanguageBar {
        "languagesList"?: TLanguage[];
    }
    interface GhLanguageDesc {
        "language"?: TLanguage1;
    }
    interface GhLanguageSection {
        "languages"?: TLanguage1[];
    }
    interface GhNavItem {
        "class"?: string;
    }
    interface GhNavbar {
        "class"?: string;
        "items"?: string[];
    }
    interface ItemList {
        "delay"?: number;
    }
    interface TodoComplete {
        "todoItems"?: Item[];
    }
    interface TodoItem {
        "description"?: string;
        "done"?: boolean;
        "onShouldDelete"?: (event: TodoItemCustomEvent<number>) => void;
        "onUpdatedDescription"?: (event: TodoItemCustomEvent<Item>) => void;
        "uuid": number;
    }
    interface TodoSection {
        "onClearListEvent"?: (event: TodoSectionCustomEvent<any>) => void;
    }
    interface XButton {
        "enable"?: boolean;
    }
    interface IntrinsicElements {
        "first-comp": FirstComp;
        "gh-a": GhA;
        "gh-button": GhButton;
        "gh-dropdown-button": GhDropdownButton;
        "gh-dropdown-modal": GhDropdownModal;
        "gh-file-line": GhFileLine;
        "gh-file-list": GhFileList;
        "gh-icon": GhIcon;
        "gh-language-bar": GhLanguageBar;
        "gh-language-desc": GhLanguageDesc;
        "gh-language-section": GhLanguageSection;
        "gh-nav-item": GhNavItem;
        "gh-navbar": GhNavbar;
        "item-list": ItemList;
        "todo-complete": TodoComplete;
        "todo-item": TodoItem;
        "todo-section": TodoSection;
        "x-button": XButton;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "first-comp": LocalJSX.FirstComp & JSXBase.HTMLAttributes<HTMLFirstCompElement>;
            "gh-a": LocalJSX.GhA & JSXBase.HTMLAttributes<HTMLGhAElement>;
            "gh-button": LocalJSX.GhButton & JSXBase.HTMLAttributes<HTMLGhButtonElement>;
            "gh-dropdown-button": LocalJSX.GhDropdownButton & JSXBase.HTMLAttributes<HTMLGhDropdownButtonElement>;
            "gh-dropdown-modal": LocalJSX.GhDropdownModal & JSXBase.HTMLAttributes<HTMLGhDropdownModalElement>;
            "gh-file-line": LocalJSX.GhFileLine & JSXBase.HTMLAttributes<HTMLGhFileLineElement>;
            "gh-file-list": LocalJSX.GhFileList & JSXBase.HTMLAttributes<HTMLGhFileListElement>;
            "gh-icon": LocalJSX.GhIcon & JSXBase.HTMLAttributes<HTMLGhIconElement>;
            "gh-language-bar": LocalJSX.GhLanguageBar & JSXBase.HTMLAttributes<HTMLGhLanguageBarElement>;
            "gh-language-desc": LocalJSX.GhLanguageDesc & JSXBase.HTMLAttributes<HTMLGhLanguageDescElement>;
            "gh-language-section": LocalJSX.GhLanguageSection & JSXBase.HTMLAttributes<HTMLGhLanguageSectionElement>;
            "gh-nav-item": LocalJSX.GhNavItem & JSXBase.HTMLAttributes<HTMLGhNavItemElement>;
            "gh-navbar": LocalJSX.GhNavbar & JSXBase.HTMLAttributes<HTMLGhNavbarElement>;
            "item-list": LocalJSX.ItemList & JSXBase.HTMLAttributes<HTMLItemListElement>;
            "todo-complete": LocalJSX.TodoComplete & JSXBase.HTMLAttributes<HTMLTodoCompleteElement>;
            "todo-item": LocalJSX.TodoItem & JSXBase.HTMLAttributes<HTMLTodoItemElement>;
            "todo-section": LocalJSX.TodoSection & JSXBase.HTMLAttributes<HTMLTodoSectionElement>;
            "x-button": LocalJSX.XButton & JSXBase.HTMLAttributes<HTMLXButtonElement>;
        }
    }
}
