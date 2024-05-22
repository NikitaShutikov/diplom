


document.addEventListener("DOMContentLoaded", function(){
    prev = window.localStorage.getItem('data-bs-theme');
    var isOn = prev ? (prev == 'dark' ? true : false) : true;

    if (prev != null){
        document.documentElement.setAttribute('data-bs-theme', prev)
    }
    document.getElementById('theme-toggle').addEventListener("click", function(){
        document.documentElement.setAttribute('data-bs-theme', ['dark', 'light'][+isOn]);
        window.localStorage.setItem('data-bs-theme', ['dark', 'light'][+isOn]);
        isOn = !isOn;

    })
})
