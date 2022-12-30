import './App.css';

function App() {
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

  return (
    <div className="App">
      <div className="window controls">
        <div className="title-bar">
          <div className="title-bar-text">aklasjdaslkjd</div>
          <div className="title-bar-controls" />
        </div>
        <div className="window-body">aslkdjalksdj</div>
      </div>
      <div className="window dock">
        <div className="window-body">
          {icons.map((icon) => (
            <div key={icon} className="dock-program">
              <img
                src={`https://win98icons.alexmeub.com/icons/png/${icon}.png`}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="window taskbar">
        <button>
          <img src="https://win98icons.alexmeub.com/icons/png/windows-0.png" />{' '}
          Start
        </button>
        <p className="status-bar-field clock">
          {new Date().getHours()}:{new Date().getMinutes()}
        </p>
      </div>
    </div>
  );
}

export default App;
