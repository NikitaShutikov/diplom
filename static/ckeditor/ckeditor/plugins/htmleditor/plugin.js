CKEDITOR.plugins.add( 'htmleditor', {
    icons: 'curlybraces',
    hidpi: true,
    lang: ['ru'],
    init: function( editor ) {

        editor.addCommand('codepasting', new CKEDITOR.dialogCommand('codepastingDialog'), { allowedContent: true});

        editor.ui.addButton( 'HtmlEditor', {
            label: 'Вставить редактор',
            command: 'codepasting',
            toolbar: 'codepasting'
        });
        
        CKEDITOR.dialog.add('codepastingDialog', this.path + 'dialogs/codepasting.js');

        // // add the context menu
        // if (editor.contextMenu) {
        //     editor.addMenuGroup('htmleditorGroup');
        //     editor.addMenuItem('htmleditorItem', {
        //     label: 'HTML редактор',
        //     icon: this.path + 'icons/htmleditor.png',
        //     command: 'codepasting',
        //     group: 'htmleditorGroup'
        //     });
    
        //     editor.contextMenu.addListener(function(element) {
        //         return {htmleditorItem: CKEDITOR.TRISTATE_OFF};
        //     });
        // }
        // CKEDITOR.scriptLoader.load(scripts, function() {
        //     editor.getCommand('htmleditor').enable();
        // });
    }
});