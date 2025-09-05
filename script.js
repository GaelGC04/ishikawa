let content = null;
let background = null;
let title = null;

window.addEventListener("load", () => {
    content = document.querySelector(".content");
    title = document.querySelector(".title h1");
    background = document.querySelector(".background");
    if (content != null) {
        content.addEventListener("scroll", () => {
            const scrollTop = content.scrollTop;
            const maxScroll = content.scrollHeight - content.offsetHeight;
        
            const progress = Math.min(scrollTop / maxScroll, 1);
            let pte = (progress * 1000) / maxScroll;
            pte = pte > 0.4 ? 0.4 : pte;
            console.log(`${pte}`);
            title.style.transform = `scale(${1 - pte})`;
            title.style.marginBottom = `${20-(pte*100)}vh`;
            background.style.filter = `blur(${pte*20}px) brightness(${1 - (pte*1)})`;
        });
    }
});
