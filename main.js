const { BrowserWindow, app, ipcMain, Notification } = require('electron');
const path = require('path')

const isDev = !app.isPackaged;

function createWindow() {
    const win = new BrowserWindow({
        width: 1200,
        height: 800,
        backgroundColor: "white",
        webPreferences: {
            nodeIntegration: false,
            worldSafeExecuteJavaScript: true,
            contextIsolation: true,
            preload: path.join(__dirname, 'preload.js')
        }
    })

    win.loadFile('index.html');
    win.webContents.openDevTools()
}

//auto reload

if (isDev) {
    require('electron-reload')(__dirname, {
        electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
    })
}

//show notification
ipcMain.on('notify', (_, message) => {
    //console.log("Here", message);
    new Notification({ title: 'Notifiation', body: message }).show();
})


function showNotification() {
    new Notification({ title: "s", body: "GGGG" }).show()
}

app.whenReady().then(createWindow).then(showNotification)