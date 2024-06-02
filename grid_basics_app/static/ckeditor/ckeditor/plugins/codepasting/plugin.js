CKEDITOR.plugins.add( 'codepasting', {
    requires: 'widget',
    icons: 'codepasting',
    hidpi: true,
    lang: ['ru'],
    init: function( editor ) {

        CKEDITOR.dialog.add('codepastingDialog', this.path + 'dialogs/codepasting.js');
        
        editor.addCommand('codepasting', new CKEDITOR.dialogCommand('codepastingDialog'), { allowedContent: true});

        editor.ui.addButton( 'CodePasting', {
            label: 'Вставить код',
            command: 'codepasting',
            toolbar: 'codepasting'
        });
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