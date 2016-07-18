---
layout: default
title: oninit
---

This option enables you to specify a function to be executed when all editor instances have finished their initialization. This is much like the onload event of an HTML page.

Note : You can also pass the function name as a string. But in this case, the function has to be declared in the global scope of the page.

## Example of usage of the oninit option:

```html
function myCustomOnInit() {
	alert("We are ready to rumble!!");
}

tinyMCE.init({
	...
	oninit : myCustomOnInit
});

```