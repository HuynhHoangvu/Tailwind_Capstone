
//   ASK
  function toggleAccordion(button) {
    const content = button.nextElementSibling;
    const icon = button.querySelector('span:last-child');

    if (content.classList.contains('hidden')) {
      document.querySelectorAll('#accordion div > div').forEach(el => el.classList.add('hidden'));
      document.querySelectorAll('#accordion button span:last-child').forEach(el => el.textContent = '+');
      content.classList.remove('hidden');
      icon.textContent = '×';
    } else {
      content.classList.add('hidden');
      icon.textContent = '+';
    }
  }
// COST
 const tabButtons = document.querySelectorAll('.price-button');

    tabButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Remove active class từ tất cả nút
        tabButtons.forEach(btn => btn.classList.remove('active'));

        // Thêm active vào nút được click
        button.classList.add('active');
      });
    });
// Slick carousel
$('.slider_content').slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
  dots: false,
  responsive: [
    {
      breakpoint: 1024, // màn hình < 1024px
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 768, // màn hình < 768px (tablet/mobile)
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480, // màn hình < 480px (mobile nhỏ)
      settings: {
        slidesToShow: 1
      }
    }
  ]
});
