---
layout: default
title: language
---

This option should contain a language code of the language pack to use with TinyMCE. These codes are in ISO-639-1 format. To see if your language is available, check the contents of `"tinymce/jscripts/tiny_mce/langs"`. The default value of this option is "en" for English.

If TinyMCE doesn't have a language pack for your language you could always write your own and contribute it back to the project by uploading it as a patch at SourceForge. A description on how to create language packs can be found in the Language Packs section.

## Example of usage of the language option:

```js
tinyMCE.init({
	mode : "textareas",
	language : "nl"
...
});
```

Replace `"nl"` for your language.