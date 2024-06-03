
import './ace/ace.js';
import './ace/ext-language_tools.js';
import './ace/mode-html.js';
import './ace/snippets/html.js';


function updateIframe(editor, iframe)
{

    iframe = (iframe.contentWindow) ? iframe.contentWindow : (iframe.contentDocument.document) ? iframe.contentDocument.document : iframe.contentDocument;
    iframe.document.open();
    iframe.document.write(editor.getValue());
    iframe.document.close();
    return false;
}
function openInNewWindow(editor){
    var win = window.open("", "Example", "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width="+screen.availWidth+",height="+screen.availHeight);
    win.document.body.innerHTML = editor.getValue();
}

document.addEventListener("DOMContentLoaded", function(){

    for (let s of document.getElementsByTagName('code')) {
        let editor = ace.edit(s);
        let options = {
            autoScrollEditorIntoView: true,
            animatedScroll: true,
            useWorker: false,
            fontSize: "12pt",
            enableBasicAutocompletion: true,
            enableSnippets: true,
            enableLiveAutocompletion: true,
            tabSize: 2,
            highlightActiveLine: false,
            highlightGutterLine: false,
            showPrintMargin: false,
            showGutter: false,
            setShowPrintMargin: false,
        };
        let mode;
        let container = s.parentElement;
        let toolbar = document.createElement('div');

        if (s.classList.contains('editor')){
            mode ='ace/mode/html';

            let iframe = document.createElement('iframe');
            container.appendChild(iframe);
            
            editor.getSession().on('change', function(){
                updateIframe(editor, iframe)
            });
            updateIframe(editor, iframe);

            let newWinBtn = document.createElement('button');
            newWinBtn.classList.add('new-win-btn');
            newWinBtn.addEventListener('click', function() { openInNewWindow(editor); });
            container.appendChild(newWinBtn);
            

        }
        else {
            if(s.classList.contains('language-html')){
                mode = 'ace/mode/html';
            }
            else{
                mode = 'ace/mode/css';
            }
            options.readOnly = true;
            options.maxLines = Infinity;
            editor.renderer.$cursorLayer.element.style.display = "none";


        }


        editor.session.setMode(mode);
        editor.setOptions(options);
        editor.renderer.setPadding(15);
        editor.renderer.setScrollMargin(15, 15)



    }
})
