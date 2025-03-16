// document.addEventListener('DOMContentLoaded', function() {
//   const bannerText = document.getElementById("bannerText");
//   if (bannerText) {
//     animate(bannerText);
//   } else {
//     console.error("Element with ID 'bannerText' not found");
//   }
// });

// // Get all the expandable items
// const expandableItems = document.querySelectorAll('.list-item');

// // Add a click event listener to each expandable item
// expandableItems.forEach(item => {
//   item.querySelector('.item-title').addEventListener('click', () => {
//     // Toggle the "active" class to expand/collapse the item
//     item.classList.toggle('active');

//     // Change the expand icon to a minus or plus
//     const expandIcon = item.querySelector('.expand-icon');
//     expandIcon.textContent = expandIcon.textContent === '+' ? '-' : '+';
//   });
// });

// const bannerText = document.getElementById("bannerText");

// animate(bannerText);

// function animate(element) {

//   if (!element) {
//   console.error("Element not found");
//   return;
//   }
  
//   let elementWidth = element.offsetWidth;
//   let parentWidth = element.parentElement.offsetWidth;
//   let flag = 0;

//   setInterval(() => {
//     if (flag >= parentWidth) {
//       flag = -elementWidth;
//     }
//     element.style.marginLeft = flag + "px";
//     flag++;
//   }, 30);
// }

document.addEventListener('DOMContentLoaded', function() {
    const bannerText = document.getElementById("bannerText");
    if (bannerText) {
      animate(bannerText);
    } else {
      console.error("Element with ID 'bannerText' not found");
    }
  
    // Get all the expandable items
    const expandableItems = document.querySelectorAll('.list-item, .list-item2');
  
    // Add a click event listener to each expandable item
    expandableItems.forEach(item => {
      const itemTitle = item.querySelector('.item-title');
      itemTitle.addEventListener('click', () => {
        // Toggle the "active" class to expand/collapse the item
        item.classList.toggle('active');
  
        // Change the expand icon to a minus or plus
        const expandIcon = itemTitle.querySelector('.expand-icon');
        expandIcon.textContent = expandIcon.textContent === '+' ? '-' : '+';
      });
    });
  });
  
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
    }, 30);
  }