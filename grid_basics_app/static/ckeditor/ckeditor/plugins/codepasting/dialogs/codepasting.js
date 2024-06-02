CKEDITOR.dialog.add('codepastingDialog', function(editor) {
    var editorPanel = {
        id: 'codepasting',
        label: 'Вставка кода',
        elements: [
          {
            type: 'textarea',
            id: 'code_snippet',
            label: 'Код',
            'default': ''
          },
          {
            type: 'select',
            id: 'code_type',
            items :
            [
              ['Редактор HTML'],
              ['HTML'],
              ['CSS']
            ],
            label: 'Тип',
            'default': 'HTML',
          }
        ]
    };

    return {
        // Basic properties of the dialog window: title, minimum size.
        title: 'Вставка кода',
        minWidth: 600,
        minHeight: 400,
        // Dialog window contents definition.
        contents: [
          editorPanel
        ],
        onLoad: function() {
          dialog = this;
        },
        onShow: function() {
        },
        // This method is invoked once a user clicks the OK button, confirming the dialog.
        onOk: function() {
          let snippet = this.getContentElement('codepasting', 'code_snippet').getValue();
          let type = this.getContentElement('codepasting', 'code_type').getValue();
          let classes = [];
          switch(type){
            case 'Редактор HTML':
              classes.push('language-html');
              classes.push('editor');
              break;
            case 'HTML':
              classes.push('language-html');
              break;
            case 'CSS':
              classes.push('language-css');
              break;
          }
          var SURROGATE_PAIR_REGEXP = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
              // Match everything outside of normal chars and " (quote character)
              NON_ALPHANUMERIC_REGEXP = /([^\#-~| |!])/g;
          /**
           * Escapes all potentially dangerous characters, so that the
           * resulting string can be safely inserted into attribute or
           * element text.
           * @param value
           * @returns {string} escaped text
           */
          function encodeEntities(value) {
            return value.
              replace(/&/g, '&amp;').
              replace(SURROGATE_PAIR_REGEXP, function(value) {
                var hi = value.charCodeAt(0);
                var low = value.charCodeAt(1);
                return '&#' + (((hi - 0xD800) * 0x400) + (low - 0xDC00) + 0x10000) + ';';
              }).
              replace(NON_ALPHANUMERIC_REGEXP, function(value) {
                return '&#' + value.charCodeAt(0) + ';';
              }).
              replace(/</g, '&lt;').
              replace(/>/g, '&gt;');
          }
          debugger;
          let result = `<pre><code class="${classes.join(' ')}">${encodeEntities(snippet)}</code></pre>`;
          editor.insertHtml(result);
        }
    };
});