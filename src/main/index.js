'use strict'

import { app, BrowserWindow } from 'electron'
import { rootPath } from 'electron-root-path'
import * as path from 'path'
import { format as formatUrl } from 'url'
import { plugin } from 'postcss';

const isDevelopment = process.env.NODE_ENV !== 'production'

// global reference to mainWindow (necessary to prevent window from being garbage collected)
let mainWindow

// quit application when all windows are closed
app.on('window-all-closed', () => {
  // on macOS it is common for applications to stay open until the user explicitly quits
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // on macOS it is common to re-create a window even after all windows have been closed
  if (mainWindow === null) {
    mainWindow = createMainWindow()
  }
})

// Specify flash path, supposing it is placed in the same directory with main.js.
let pluginName
let pepperPath
let icon  = 'assets/attainia.png'
switch (process.platform) {
  case 'win32':
    pluginName = 'pepflashplayer64_32_0_0_223.dll'
    break
  case 'darwin':
    pluginName = 'PepperFlashPlayer.plugin'
    break
}

app.commandLine.appendSwitch('ppapi-flash-path', path.join(__static, pluginName))
app.commandLine.appendSwitch('ppapi-flash-version', '32.0.0.223')

// create main BrowserWindow when electron is ready
app.on('ready', () => {
  mainWindow = new BrowserWindow({
    'icon': icon,
    'width': 1500,
    'height': 1000,
    'webPreferences': {
      'plugins': true
    }
  });
  // If you see the flash version number load you were able to load flash successfuly. 
  mainWindow.loadURL('https://wwwimages.adobe.com/www.adobe.com/swf/software/flash/about/flashAbout_info_small.swf');
})

