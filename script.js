let btn = document.querySelector("button");
let h1 = document.querySelector("h1");
let click = 1;
btn.addEventListener("click", () => {
    if(click === 1){
        h1.innerHTML = "Happy New Year🎉";
        h1.style.color = "pink";
        btn.innerHTML = "📭";
        click = 2;
    } 
    else {
        location.reload();
    }
});