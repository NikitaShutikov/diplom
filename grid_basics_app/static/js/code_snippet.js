
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

        if (s.classList.contains('editor')){
            editor.setOptions({
                useWorker: false,
                fontSize: "12pt",
                autoScrollEditorIntoView: true,
                animatedScroll: true,
                enableBasicAutocompletion: true,
                enableSnippets: true,
                enableLiveAutocompletion: true,
                tabSize: 2,
                highlightActiveLine: false,
                highlightGutterLine: false,
                showPrintMargin: false,
                showGutter: false,
                setShowPrintMargin: true,
            });

            let iframe = document.createElement('iframe');
            s.parentElement.appendChild(iframe);
            editor.getSession().on('change', function(){
                updateIframe(editor, iframe)
            });
            updateIframe(editor, iframe);

            let newWinBtn = document.createElement('button');
            newWinBtn.addEventListener('click', function() { openInNewWindow(editor); });
            s.parentElement.appendChild(newWinBtn);
        }
        else {
            editor.setOptions({
                useWorker: false,
                fontSize: "12pt",
                enableBasicAutocompletion: true,
                enableSnippets: true,
                enableLiveAutocompletion: true,
                tabSize: 2,
                readOnly: true,
                maxLines: Infinity,
                highlightActiveLine: false,
                highlightGutterLine: false,
                showPrintMargin: false,
                showGutter: false,
                setShowPrintMargin: true,
            });
            editor.renderer.$cursorLayer.element.style.display = "none"
        }
        editor.renderer.setPadding(15);
        editor.renderer.setScrollMargin(15, 15)
        if (s.classList.contains('language-html')){
            editor.session.setMode('ace/mode/html');
        }
        else{
            editor.session.setMode('ace/mode/css');
        }


    }
})
