import { app, screen, BrowserWindow } from 'electron';
import isDev from 'electron-is-dev'; // New Import

const createWindow = (): void => {
  // Create a window that fills the screen's available work area.
  const primaryDisplay = screen.getPrimaryDisplay();
  const { width, height } = primaryDisplay.workAreaSize;
  let win = new BrowserWindow({
    width,
    height,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    }
  });
  console.log(isDev);
  win.loadURL(
    isDev
      ? 'http://localhost:9000'
      : `file://${app.getAppPath()}/index.html`,
  );
}

app.on('ready', createWindow);
