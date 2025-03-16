const accordionItems = document.getElementsByClassName('list-item');

function closeAllItems() {
  for (let item of accordionItems) {
    const content = item.querySelector('.list-content');
    content.style.height = '0px';
    item.classList.remove('active');
  }
}

function toggleItem(item) {
  const content = item.querySelector('.list-content');
  
  if (item.classList.contains('active')) {
    content.style.height = '0px';
    item.classList.remove('active');
  } else {
    closeAllItems();
    content.style.height = content.scrollHeight + 'px';
    item.classList.add('active');
  }
}

for (let item of accordionItems) {
  item.addEventListener('click', function(e) {
    // Prevent the click from propagating if it's on the content
    if (e.target.closest('.list-content')) return;
    
    toggleItem(this);
  });
}

// Initialize: close all items
closeAllItems();

document.addEventListener('DOMContentLoaded', (event) => {
    const bannerText = document.getElementById('bannerText');
    bannerText.innerHTML = bannerText.innerHTML + bannerText.innerHTML;
});
