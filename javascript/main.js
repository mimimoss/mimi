const bannerText = document.getElementById("bannerText");
animate(bannerText);

function animate(element) {
    let cloneWidth = element.offsetWidth;
    let parentWidth = element.parentElement.offsetWidth;
    let flag = 0;

    while (flag < parentWidth + cloneWidth) {
        let clone = element.cloneNode(true);
        element.parentElement.appendChild(clone);
        clone.style.left = flag + "px";
        flag += cloneWidth + 10; // 10px gap
    }

    setInterval(() => {
        let clones = document.querySelectorAll('.text');
        clones.forEach(clone => {
            let left = parseInt(clone.style.left);
            clone.style.left = left - 1 + "px";
            if (left <= -cloneWidth) {
                clone.style.left = parentWidth + "px";
            }
        });
    }, 10);
}
