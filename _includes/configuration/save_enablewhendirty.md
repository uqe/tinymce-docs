### `save_enablewhendirty`

This option allows you to disable the save button until modifications have been made to the content of the editor. This option is enabled by default.

**Type:** `Boolean`

#### Example: Using `save_enablewhendirty`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'save',
  toolbar: 'save',
  save_enablewhendirty: true
});
```
