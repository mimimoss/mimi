document.addEventListener('DOMContentLoaded', function() {
  const bannerText = document.getElementById("bannerText");
  if (bannerText) {
    animate(bannerText);
  } else {
    console.error("Element with ID 'bannerText' not found");
  }
});

const bannerText = document.getElementById("bannerText");

animate(bannerText);

function animate(element) {

  if (!element) {
  console.error("Element not found");
  return;
  }
  
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
