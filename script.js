document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.category-grid');
    const scrollAmount = 280; // přibližná šířka jedné položky + gap
  
    document.querySelector('.scroll-btn.left')?.addEventListener('click', () => {
      grid?.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });
  
    document.querySelector('.scroll-btn.right')?.addEventListener('click', () => {
      grid?.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
  });
  