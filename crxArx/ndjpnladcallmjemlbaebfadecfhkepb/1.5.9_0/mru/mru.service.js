!function(){"use strict";function e(e,t,n,i,r){function o(){var t=e.defer();return r.getUserType().then(function(e){if(e!==i.USER_TYPE.MSA&&e!==i.USER_TYPE.O365)return t.reject(i.RECENTS.ERROR.UNSUPPORTED_USER_TYPE),t.promise;var n=e===i.USER_TYPE.MSA?i.RECENTS.ONEDRIVE_ENDPOINT:i.O365CONFIG.MRU_URL+i.RECENTS.FILTER;E(e,n).then(function(n){t.resolve(e===i.USER_TYPE.MSA?u(n.data):n)},function(e){return t.reject(e),t.promise})}),t.promise}function E(t,r){var o=e.defer(),E={method:"GET",accept:"application/json",url:r,contentType:"application/json",headers:{"X-UserType":t}};return n(E).success(function(e){o.resolve(e)}).error(function(){o.reject(i.RECENTS.ERROR.GENERIC)}),o.promise}function u(e){var t=[];if(Utilities.isUndefinedOrNull(e))return t;for(var n=0;n<e.length;n++)if(Utilities.isNotUndefinedOrNull(e[n].type)&&Utilities.isNotUndefinedOrNull(e[n].name)){var r;if("notebook"===e[n].type)r="notebook";else if(r=Utilities.getFileExtension(e[n].name),!i.FILE.SUPPORTED_FILE_TYPES[r])continue;t.push({DocumentUrl:e[n].link,Timestamp:e[n].updated_time,Application:i.FILE.SUPPORTED_FILE_TYPES[r],FileName:e[n].name,Id:e[n].id})}return t}var s={getRecentDocumentList:o,getRecentDocs:E,normalizeMruList:u};return s}angular.module("app.mru",[]).factory("mruService",["$q","$log","$http","constants","userService",e])}();