let btn = document.querySelector("button");
let h1 = document.querySelector("h1");

btn.addEventListener("click", () => {
    h1.innerHTML = "Happy New Year🎉";
    h1.style.color = "pink";
    btn.innerHTML = "📭";
});