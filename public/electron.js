const { app, BrowserWindow, ipcMain, nativeTheme } = require("electron");
const path = require("path");
const isDev = require("electron-is-dev");
let mainWindow = null;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    title: "The Watchlist",
    width: 500,
    height: 700,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      preload: path.join(__dirname, "preload.js"),
    },
    icon: path.join(__dirname, '../src/assets/tw.png'),
  });

  const baseUrl = isDev
    ? "http://localhost:3000"
    : `file://${path.join(__dirname, "../dist/index.html")}`;

    mainWindow.loadURL(baseUrl);

    mainWindow.on('closed', () => (mainWindow = null));

  if (isDev) {
    mainWindow.webContents.openDevTools({ mode: "detach" });
  }
};

ipcMain.handle("dark-mode:toggle", () => {
  if (nativeTheme.shouldUseDarkColors) {
    nativeTheme.themeSource = "light";
  } else {
    nativeTheme.themeSource = "dark";
  }
  return nativeTheme.shouldUseDarkColors;
});

ipcMain.handle("dark-mode:system", () => {
  nativeTheme.themeSource = "system";
});

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
