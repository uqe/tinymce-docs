---
layout: default
title: Creating custom Basic toolbar buttons
title_nav: Basic toolbar button
description: Creating custom Basic toolbar buttons for TinyMCE
keywords: toolbar toolbarbuttons buttons toolbarbuttonsapi
---

A basic button triggers its `onAction` function when clicked.

### Config options

| Name | Value | Requirement | Description |
| ---- | ----- | ----------- | ----------- |
| text | string | optional | Text to display if no icon is found. |
| icon | string | optional | {{site.predefinedIconsOnly}} |
| tooltip | string | optional | Text for button tooltip.  |
| disabled | boolean | optional | default: false - Represents the button's state. When true, button is unclickable. Toggled by the button's API. |
| onSetup | (api) => (api) => void | optional | default: () => () => {} - Function invoked when the button is rendered. |
| onAction | (api) => void | required | Function invoked when the button is clicked. For details, see: [Using `onSetup`](#usingonsetup). |

### API

| Name | Value | Description |
| ---- | ----- | ----------- |
| isDisabled | () => boolean | Checks if the button is disabled. |
| setDisabled | (state: boolean) => void | Sets the button's disabled state. |

### Basic button example and explanation

The following example adds two buttons to the toolbar:

{% include live-demo.html id="custom-toolbar-button" tab="js" %}

The first button inserts "It's my button!" into the editor when clicked. The second button is an example of how `onSetup` works. This button inserts a `time` element containing the current date into the editor using a `toTimeHtml()` helper function - a simplified version of {{site.productname}}'s [insertdatetime]({{site.baseurl}}/plugins/opensource/insertdatetime/) plugin.

In this example an icon from the `insertdatetime` plugin is used to demonstrate how to use a registered icon. `disabled` is set to `true` so that the button is disabled when it is first rendered.

`onSetup` is used to listen to the editor's [`NodeChange` event]({{site.baseurl}}/advanced/events/#editorcoreevents) to disable the button when the cursor is inside a `time` element (or "node"). This ensures it is not possible to insert a `time` element into another `time` element.

{% include misc/onSetup.md %}