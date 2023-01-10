tinymce.init({
  selector: "textarea#advanced-typography",
  height: 300,
  menu: { tools: { title: 'Tools', items: 'code wordcount typography' }},
  plugins: 'code typography',
  toolbar: 'bold italic | code typography',
  content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }',
  typography_default_lang: 'en-US',
  typography_langs: [
    'en-US',
    'es',
    'de'
  ],
  typography_rules: [
    'common/punctuation/quote',
    'en-US/dash/main',
    'common/nbsp/afterParagraphMark',
    'common/nbsp/afterSectionMark',
    'common/nbsp/afterShortWord',
    'common/nbsp/beforeShortLastNumber',
    'common/nbsp/beforeShortLastWord',
    'common/nbsp/dpi',
    'common/punctuation/apostrophe',
    'common/space/delBeforePunctuation',
    'common/space/afterComma',
    'common/space/afterColon',
    'common/space/afterExclamationMark',
    'common/space/afterQuestionMark',
    'common/space/afterSemicolon',
    'common/space/beforeBracket',
    'common/space/bracket',
    'common/space/delBeforeDot',
    'common/space/squareBracket',
    'common/number/mathSigns',
    'common/number/times',
    'common/number/fraction',
    'common/symbols/arrow',
    'common/symbols/cf',
    'common/symbols/copy',
    'common/punctuation/delDoublePunctuation',
    'common/punctuation/hellip'
  ],
  typography_ignore: [ 'code' ]
});