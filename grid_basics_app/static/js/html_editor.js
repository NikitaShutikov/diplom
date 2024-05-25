function updateIframe(textarea, iframe)
{
    textarea.style.overflow = 'hidden';
    textarea.style.height = 0;
    textarea.style.height = textarea.scrollHeight + 'px';
    
    iframe = (iframe.contentWindow) ? iframe.contentWindow : (iframe.contentDocument.document) ? iframe.contentDocument.document : iframe.contentDocument;
    iframe.document.open();
    iframe.document.write(textarea.value);
    iframe.document.close();
    return false;
}
document.addEventListener("DOMContentLoaded", function(){

    let editors = document.getElementsByClassName('html-editor');
    for (let e of editors){

        let textarea = e.children[0];
        let iframe = e.children[1];
        textarea.addEventListener('input', function() { updateIframe(textarea, iframe) } );
        updateIframe(textarea, iframe);
    }
})
