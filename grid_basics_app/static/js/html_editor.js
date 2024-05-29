function updateIframe(textarea, iframe)
{
    iframe = (iframe.contentWindow) ? iframe.contentWindow : (iframe.contentDocument.document) ? iframe.contentDocument.document : iframe.contentDocument;
    iframe.document.open();
    iframe.document.write(textarea.value);
    iframe.document.close();
    return false;
}
function openInNewWindow(textarea){
    var win = window.open("", "Example", "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width="+screen.availWidth+",height="+screen.availHeight);
    win.document.body.innerHTML = textarea.value;
}
document.addEventListener("DOMContentLoaded", function(){

    let editors = document.getElementsByClassName('html-editor');
    for (let e of editors){

        let textarea = e.children[0];
        let iframe = e.children[1];
        //Событие на ввод
        textarea.addEventListener('input', function() { updateIframe(textarea, iframe) } );
        //Разрешаем ввод символов табуляции
        textarea.addEventListener('keydown', function(e) { 
            if (e.key == 'Tab') {
                e.preventDefault();
                var start = this.selectionStart;
                var end = this.selectionEnd;
            
                // set textarea value to: text before caret + tab + text after caret
                this.value = this.value.substring(0, start) +
                  "\t" + this.value.substring(end);
            
                // put caret at right position again
                this.selectionStart =
                  this.selectionEnd = start + 1;
              }
        });
        updateIframe(textarea, iframe);
        //Добавление кнопки открытия в новом окне
        newWinBtn = document.createElement('button');
        newWinBtn.addEventListener('click', function() { openInNewWindow(textarea); });
        e.appendChild(newWinBtn);

        // textarea.style.height = 0;
        // textarea.style.height = textarea.scrollHeight + 'px';
    }
})
