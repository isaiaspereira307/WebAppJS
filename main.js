const { app, BrowserWindow } = require('electron')

let win = null
let contents = null

function createWindow () {
    win = new BrowserWindow({
        width: 800,
        height: 600,
        titleBarStyle: 'hidden',
        alwaysOnTop: false,
        webPreferences: {
            nodeIntegration: true
        }
    })

    win.loadURL('https://www.electronjs.org/docs/tutorial')
    contents = win.webContents

}

function toggleDevTools() {
    contents.toggleDevTools()
}

function createShortcuts() {
    globalShortcut.register('CmdOrCtrl+J', toggleDevTools)
}

app.whenReady()
.then(createWindow)
.then(createShortcuts)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})