### `tinycomments_author_name`

> Available in Tiny Comments version 2.1 onwards.

_Optional_ - This option sets the author's display name to be used when creating or replying to comments. If this option is omitted, then the author id is used instead.

**Type:** `String`

#### Example: Using `tinycomments_author_name`

```js
tinymce.init({
  selector: '#textarea',
  tinycomments_author: 'embedded_journalist',
  tinycomments_author_name: 'Embedded Journalist',
  tinycomments_mode: 'embedded'
})
```
