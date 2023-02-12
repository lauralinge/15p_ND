const content = document.querySelectorAll('.country');
const tab = document.querySelectorAll('.link');
const slider = document.querySelector('.countries_three');

function hideTabContent() {
  content.forEach(item => {
    item.style.display = 'none';
  });
  tab.forEach(item => {
    item.classList.remove('active');
  });
}
function showTabContent(i = 0) {
  content[i].style.display = 'grid';
  tab[i].classList.add('active');
}
hideTabContent();
showTabContent();
slider.addEventListener("click", (e) => {
  const target = e.target
  if (target) {
     tab.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            })
  }
})