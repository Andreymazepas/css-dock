document.addEventListener('DOMContentLoaded', function () {
  const icons = [
    'notepad-5',
    'cd_drive-0',
    'computer-5',
    'directory_closed-4',
    'executable-0',
    'file_windows-2',
    'game_mine_1-0',
    'msie1-2',
    'recycle_bin_full-2',
    'joystick-5',
  ];

  function populateIcons() {
    const dockWindowBody = document.querySelector('.window.dock .window-body');

    icons.forEach((icon) => {
      const dockProgram = document.createElement('div');
      dockProgram.className = 'dock-program';

      const img = document.createElement('img');
      img.src = `https://win98icons.alexmeub.com/icons/png/${icon}.png`;

      dockProgram.appendChild(img);
      dockProgram.addEventListener('click', function () {
        dockProgram.classList.add('selected');
        setTimeout(function () {
          dockProgram.classList.remove('selected');
        }, 3000);
      });

      dockWindowBody.appendChild(dockProgram);
    });
  }

  function updateClock() {
    const clockField = document.querySelector('.status-bar-field.clock');
    setInterval(function () {
      const currentTime = new Date().toLocaleTimeString();
      clockField.textContent = currentTime;
    }, 1000);
  }

  populateIcons();
  updateClock();
});
