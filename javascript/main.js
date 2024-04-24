const bannerText = document.getElementById("bannerText");

animate(bannerText);

function animate(element) {
  let elementWidth = element.offsetWidth;
  let parentWidth = element.parentElement.offsetWidth;
  let flag = 0;

  setInterval(() => {
    if (flag >= parentWidth) {
      flag = -elementWidth;
    }
    element.style.marginLeft = flag + "px";
    flag++;
  }, 10);
}
