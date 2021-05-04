---
layout: default
title: fullpage
---

This plugin adds fullpage editing support. This enables you to edit whole documents with both head and body.

## Installation Instructions

1.  Add plugin to TinyMCE plugin option list example: `plugins : "fullpage"`.
2.  Add the fullpage button name to button list, example: `theme_advanced_buttons3_add : "fullpage"`.

## Plugin options

| Name | Summary |
| --- | --- |
| [fullpage_doctypes] | This is a name/value list of possible document types. The value format of this option is name=value,name=value. These document types will be presented in the document type selection list. The default value of this option is:

XHTML 1.0 Transitional=<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">,XHTML 1.0 Frameset=<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd">,XHTML 1.0 Strict=<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">,XHTML 1.1=<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">">,HTML 4.01 Transitional=<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">,HTML 4.01 Strict=<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">,HTML 4.01 Frameset=<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd"> |
| [fullpage_fonts] | This option enables you specify what font family style values that can be added to the body element. The value format of this option is name=value;name=value. The default value of this option is: Arial=arial,helvetica,sans-serif;Courier New=courier new,courier,monospace;Georgia=georgia,times new roman,times,serif;Tahoma=tahoma,arial,helvetica,sans-serif;Times New Roman=times new roman,times,serif;Verdana=verdana,arial,helvetica,sans-serif;Impact=impact;WingDings=wingdings |
| [fullpage_fontsizes] | This is a comma separated list of possible font sizes for the style attribute of the body element. This option defaults to: 10px,11px,12px,13px,14px,15px,16px. |
| [fullpage_encodings] | This option enables you to specify what the document character encoding sets the user may select from. The default value of this option is: Western european (iso-8859-1)=iso-8859-1,Central European (iso-8859-2)=iso-8859-2,Unicode (UTF-8)=utf-8,Chinese traditional (Big5)=big5,Cyrillic (iso-8859-5)=iso-8859-5,Japanese (iso-2022-jp)=iso-2022-jp,Greek (iso-8859-7)=iso-8859-7,Korean (iso-2022-kr)=iso-2022-kr,ASCII (us-ascii)=us-ascii |
| [fullpage_default_doctype] | This option enables you to specify the default doctype for the output HTML. |
| [fullpage_default_encoding] | This option enables you to specify the default encoding for the output HTML. |
| [fullpage_default_title] | This option enables you to specify the default title for the output HTML. |
| [fullpage_default_font_size] | This option enables you to specify the default font size for body element. |
| [fullpage_default_font_family] | This option enables you to specify the default font family for body element. |
| [fullpage_default_text_color] | This option enables you to specify the default text color for body element. |
| [fullpage_default_langcode] | This option enables you to specify the default langcode for the output HTML. |
| [fullpage_default_xml_pi] | This option enables you to specify if a XML declaration should be added or not true/false option. |
| fullpage_hide_in_source_view | Hides the non body content from source view. |

## Initialization Example

```js
tinyMCE.init({
  theme : "advanced",
  mode : "textareas",
  plugins : "fullpage",
  theme_advanced_buttons3_add : "fullpage",
  fullpage_fontsizes : '13px,14px,15px,18pt,xx-large',
  fullpage_default_xml_pi : false,
  fullpage_default_langcode : 'en',
  fullpage_default_title : "My document title"
});

```