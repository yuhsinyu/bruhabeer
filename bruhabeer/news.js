document.addEventListener('DOMContentLoaded', function () {
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  const pages = document.querySelectorAll('.page');
  let currentPage = 1;

  // 點擊上一頁
  prevButton.addEventListener('click', function () {
    if (currentPage > 1) {
      updatePagination(currentPage - 1);
    }
  });

  // 點擊下一頁
  nextButton.addEventListener('click', function () {
    if (currentPage < pages.length) {
      updatePagination(currentPage + 1);
    }
  });

  // 點擊具體頁碼
  pages.forEach(function (page, index) {
    page.addEventListener('click', function () {
      updatePagination(index + 1);
    });
  });

  // 更新頁碼狀態
  function updatePagination(newPage) {
    pages[currentPage - 1].classList.remove('active');
    pages[newPage - 1].classList.add('active');
    currentPage = newPage;
  }
});
