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
          editor.insertHtml(`
          <div class='html-editor'>
            <textarea class="form-control" spellcheck="false"><pre><code class="language-html">123</code></pre></textarea>
            <iframe src=""></iframe> 
          </div>
          `);
        }
    };
});