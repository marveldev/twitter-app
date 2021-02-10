const toggleTheme = () => {
  const root = document.querySelector('#root');
  const dimButton = document.querySelector('#dim-button');
  const defaultButton = document.querySelector('#default-button');
  const lightsOutButton = document.querySelector('#light-out-button');

  root.className = localStorage.getItem('theme');
  document.querySelector('body').style.backgroundColor = localStorage.getItem('background-color');

  defaultButton.addEventListener('click', () => {
    root.className = 'default';
    document.querySelector('body').style.backgroundColor = '#fff';
    localStorage.setItem('theme', 'default')
    localStorage.setItem('background-color', '#fff')
  })

  dimButton.addEventListener('click', () => {
    root.className = 'dim';
    document.querySelector('body').style.backgroundColor = '#15202B';
    localStorage.setItem('theme', 'dim')
    localStorage.setItem('background-color', '#15202b')
  })

  lightsOutButton.addEventListener('click', () => {
    root.className = 'lights-out';
    document.querySelector('body').style.backgroundColor = '#000';
    localStorage.setItem('theme', 'lights-out')
    localStorage.setItem('background-color', '#000')
  })
}

export default toggleTheme;
