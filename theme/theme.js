const toggleTheme = () => {
  const root = document.querySelector('#root');
  const dimThemeButton = document.querySelector('#dim-button');
  const defaultThemeButton = document.querySelector('#default-button');
  const darkThemeButton = document.querySelector('#light-out-button');
  
  dimThemeButton.addEventListener('click', () => {
    root.className = 'dim-theme';
    document.querySelector('body').style.backgroundColor = '#15202B';
  })
  
  defaultThemeButton.addEventListener('click', () => {
    root.className = 'root';
    document.querySelector('body').style.backgroundColor = '#fff';
  })
  
  darkThemeButton.addEventListener('click', () => {
    root.className = 'dark-theme';
    document.querySelector('body').style.backgroundColor = '#000';
  })
}
export default toggleTheme;
