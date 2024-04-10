const { app, BrowserWindow, Menu } = require("electron");
const config = require("dotenv");
const path = require("path");

config?.config({ path: [path?.resolve(__dirname, "./.env")] });

Menu?.setApplicationMenu(false);

const createWindow = () => {
  const window = new BrowserWindow({
    width: 800,
    height: 600,
  });

  const appUrl = process?.env?.APPLICATION_URL;
  if (appUrl) {
    window?.maximize();
    window?.loadURL(appUrl);
  }
};

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
