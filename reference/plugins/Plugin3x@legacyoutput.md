---
layout: default
title: legacyoutput
---

This plugin will change the output for TinyMCE to produce legacy elements such as font, b, i, u, strike and use align attributes. This plugin can be useful if you want to use TinyMCE as a HTML mail client or to render contents to Flash. This is NOT intended to be used for producing normal web contents in for example a CMS. These elements should no longer be used for such purposes since they are deprecated in the later XHTML and HTML5 specifications.

## Initialization Example

```html
tinyMCE.init({
	theme : "advanced",
	mode : "textareas",
	plugins : "legacyoutput"
});

```