"use strict";var bg={isInstall:!1,isWallpaperInit:!1,init:function(){var i=this;chrome.runtime.onInstalled.addListener(function(t){"install"==t.reason?(i.isInstall=!0,i.checkWpAndInstallBothDone()):"update"==t.reason&&(localStorage.showUpdateNote="off")}),oldData.init(function(){bgHome.init(),bgWallpaper.init(function(){i.isWallpaperInit=!0,i.checkWpAndInstallBothDone()}),bgUser.init(),bgSetting.init(),bgSearch.init(),bgData.init(),bgWeather.init(),bgCloudIcon.init(),bgTopsites.init(),bgGmail.init(),bgAutoBackup.init(),bgCloudApi.init(),chrome.runtime.setUninstallURL("https://uninstall.infinitynewtab.com/")})},checkWpAndInstallBothDone:function(){var t=this;t.isWallpaperInit&&t.isInstall&&(t.isInstall=!1,chrome.tabs.create({url:"chrome://newtab"}))}};bg.init();