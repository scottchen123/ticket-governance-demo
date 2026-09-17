const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1180,
    height: 820,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
    },
  });

  const contentRoot = app.isPackaged
    ? process.resourcesPath
    : path.join(__dirname, '..');
  win.loadFile(path.join(contentRoot, 'dashboard/index.html'));
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
