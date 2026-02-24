let cookies = document.querySelector('.cookies');
let cookiesCancelIcon = document.querySelector('.cancel');

cookiesCancelIcon.addEventListener("click",
 function() {
    let cookie = document.querySelectorAll('.cookies');
    cookie.forEach(cookies => {
        cookies.classList.toggle('active')
    })
});

window.addEventListener("load", () => {
    const cookieBox = document.querySelector(".cookies"), 
        buttons = document.querySelectorAll("#accept");

    if(document.cookie.includes("true")) return;
    cookieBox.classList.add("show");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            cookieBox.classList.remove("show");

            if (button.id == "accept") {
                document.cookie = "cookie= true; max-age=" + 60 * 60 * 24 * 30;
                document.querySelector(".cookies").style.display= null;
            }
        });
    });
});