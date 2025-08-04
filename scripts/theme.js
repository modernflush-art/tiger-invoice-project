// Tiger Invoice Theme Management System
// Include this script in all pages for consistent theme functionality

// Theme management functions
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeUI(savedTheme);
  }
  
  function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeUI(newTheme);
  }
  
  function updateThemeUI(theme) {
    const themeSwitch = document.getElementById('themeSwitch');
    if (themeSwitch) {
      if (theme === 'dark') {
        themeSwitch.classList.add('dark');
        themeSwitch.classList.remove('light');
      } else {
        themeSwitch.classList.add('light');
        themeSwitch.classList.remove('dark');
      }
    }
  }
  
  // Create custom theme switch
  function createThemeSwitch() {
    if (!document.getElementById('themeSwitch')) {
      const headerButtons = document.querySelector('.header-buttons, .header-controls, .header-actions');
      if (headerButtons) {
        const switchWrapper = document.createElement('div');
        switchWrapper.id = 'themeSwitch';
        switchWrapper.className = 'theme-switch light';
        switchWrapper.title = 'Toggle dark/light mode';
        switchWrapper.onclick = toggleTheme;
        switchWrapper.innerHTML = `
          <span class="switch-label switch-light"> <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="5" stroke="#22304a" stroke-width="2"/><g stroke="#22304a" stroke-width="2"><line x1="10" y1="1" x2="10" y2="4"/><line x1="10" y1="16" x2="10" y2="19"/><line x1="1" y1="10" x2="4" y2="10"/><line x1="16" y1="10" x2="19" y2="10"/><line x1="4.22" y1="4.22" x2="6.34" y2="6.34"/><line x1="13.66" y1="13.66" x2="15.78" y2="15.78"/><line x1="4.22" y1="15.78" x2="6.34" y2="13.66"/><line x1="13.66" y1="6.34" x2="15.78" y2="4.22"/></g></svg></span>
          <span class="switch-slider"></span>
          <span class="switch-label switch-dark"> <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M15.5 13.5C14.5 14.5 13 15 11.5 15C8.46 15 6 12.54 6 9.5C6 8 6.5 6.5 7.5 5.5C4.5 6 2.5 8.5 2.5 11.5C2.5 14.54 5.46 17.5 8.5 17.5C11.5 17.5 14 15.5 15.5 13.5Z" stroke="#fff" stroke-width="2"/></svg></span>
        `;
        headerButtons.insertBefore(switchWrapper, headerButtons.firstChild);
      }
    }
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    initTheme();
    createThemeSwitch();
  });
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTheme);
  } else {
    initTheme();
  } 