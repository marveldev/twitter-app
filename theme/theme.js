const toggleTheme = () => {
  const root = document.querySelector('#root');
  const dimThemeButton = document.querySelector('#dim-button');
  const defaultThemeButton = document.querySelector('#default-button');
  const darkThemeButton = document.querySelector('#light-out-button');

  root.className = localStorage.getItem('theme');
  document.querySelector('body').style.backgroundColor = localStorage.getItem('background-color') ;

  defaultThemeButton.addEventListener('click', () => {
    root.className = 'root';
    document.querySelector('body').style.backgroundColor = '#fff';
    localStorage.setItem('theme', 'root')
    localStorage.setItem('background-color', '#fff')
  })

  dimThemeButton.addEventListener('click', () => {
    root.className = 'dim-theme';
    document.querySelector('body').style.backgroundColor = '#15202B';
    localStorage.setItem('theme', 'dim-theme')
    localStorage.setItem('background-color', '#15202b')
  })

  darkThemeButton.addEventListener('click', () => {
    root.className = 'dark-theme';
    document.querySelector('body').style.backgroundColor = '#000';
    localStorage.setItem('theme', 'dark-theme')
    localStorage.setItem('background-color', '#000')
  })
}

export default toggleTheme;
