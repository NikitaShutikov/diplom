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
          debugger;

          code_val = this.getContentElement('codepasting', 'code_snippet').getValue();
          code_type = this.getContentElement('codepasting', 'code_type').getValue();
          debugger;
          editor.insertHtml(`
          <pre class='html-editor'>
            <textarea class="editor" spellcheck="false" wrap="off">${markup_val}</textarea>
          </div>
          `);
        }
    };
});