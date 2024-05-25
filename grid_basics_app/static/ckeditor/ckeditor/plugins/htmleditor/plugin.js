CKEDITOR.plugins.add( 'htmleditor', {
    icons: 'htmleditor',
    hidpi: true,
    lang: ['ru'],
    init: function( editor ) {

        editor.addCommand('htmleditor', new CKEDITOR.dialogCommand('htmleditorDialog'), { allowedContent: true});

        editor.ui.addButton( 'HtmlEditor', {
            label: 'Вставить редактор',
            command: 'htmleditor',
            toolbar: 'htmleditor'
        });
        
        CKEDITOR.dialog.add('htmleditorDialog', this.path + 'dialogs/htmleditor.js');

        // add the context menu
        if (editor.contextMenu) {
            editor.addMenuGroup('htmleditorGroup');
            editor.addMenuItem('htmleditorItem', {
            label: 'HTML редактор',
            icon: this.path + 'icons/htmleditor.png',
            command: 'htmleditor',
            group: 'htmleditorGroup'
            });
    
            editor.contextMenu.addListener(function(element) {
                return {htmleditorItem: CKEDITOR.TRISTATE_OFF};
            });
        }
        // CKEDITOR.scriptLoader.load(scripts, function() {
        //     editor.getCommand('htmleditor').enable();
        // });
    }
});