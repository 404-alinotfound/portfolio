 const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target.querySelector('.progress-bar');
        const width = bar.getAttribute('data-width');
        bar.style.width = width;
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.skill').forEach(skill => {
    observer.observe(skill);
  });