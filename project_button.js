document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.project-filters .filter-btn');
  const projects = document.querySelectorAll('.projects-grid .project-link');

  function applyFilter(filter) {
    projects.forEach(link => {
      const cats = (link.dataset.category || '').toLowerCase().split(/\s+/);
      if (filter === 'all' || cats.includes(filter)) {
        link.classList.remove('hide');
      } else {
        link.classList.add('hide');
      }
    });
  }

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      applyFilter(btn.dataset.filter);
    });
  });

  // initial state (respects the button that has .active)
  applyFilter(document.querySelector('.filter-btn.active')?.dataset.filter || 'all');
});
// This script handles the filtering of project links based on categories
// It listens for button clicks and applies the appropriate filter to the project links