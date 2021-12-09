const { BrowserWindow, app, ipcMain, Notification } = require('electron');
const path = require('path')

function createWindow() {
    const win = new BrowserWindow({
        width: 1200,
        height: 800,
        backgroundColor: "white",
        webPreferences: {
            nodeIntegration: false,
            worldSafeExecuteJavaScript: true,
            contextIsolation: true
        }
    })

    win.loadFile('index.html');
    win.webContents.openDevTools()
}

//auto reload
require("electron-reload")(__dirname, {
    electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
})

app.whenReady().then(createWindow)