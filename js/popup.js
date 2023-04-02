const popup = document.getElementById('popup');
const cancelBtn = document.getElementById('cancel');
const wrap = document.querySelector('.wrap')

cancelBtn.addEventListener('click', function() {
  popup.style.display = 'none';
wrap.style.opacity = 1;
wrap.classList.remove('notclick');
document.body.style.overflowY = 'auto'
});
