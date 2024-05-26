CKEDITOR.dialog.add('htmleditorDialog', function(editor) {
    var editorPanel = {
        id: 'htmleditor',
        label: 'HTML редактор',
        elements: [
          {
            type: 'textarea',
            id: 'markup',
            label: 'Разметка',
            'default': ''
          }
        ]
    };

    return {
        // Basic properties of the dialog window: title, minimum size.
        title: 'HTML редактор',
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

          markup_val = this.getContentElement('htmleditor', 'markup').getValue();
          editor.insertHtml(`
          <div class='html-editor d-flex flex-wrap flex-lg-nowrap gap-3 gap-lg-0'>
            <textarea class="form-control language-html" spellcheck="false">${markup_val}</textarea>
            <iframe sandbox="allow-scripts" class="ratio border border-dark-subtle rounded-3" src=""></iframe> 
          </div>
          `);
        }
    };
});