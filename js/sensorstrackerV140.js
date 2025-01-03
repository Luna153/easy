﻿(function (para) {
  var p = para.sdk_url,
    n = para.name,
    w = window,
    d = document,
    s = 'script',
    x = null,
    y = null;
  w['sensorsDataAnalytic201505'] = n;
  w[n] = w[n] || function (a) {
    return function () {
      (w[n]._q = w[n]._q || []).push([a, arguments]);
    }
  };
  var ifs = ['track', 'quick', 'register', 'registerPage', 'registerOnce', 'clearAllRegister', 'trackSignup', 'trackAbtest', 'setProfile', 'setOnceProfile', 'appendProfile', 'incrementProfile', 'deleteProfile', 'unsetProfile', 'identify', 'login', 'logout', 'trackLink', 'clearAllRegister'];
  for (var i = 0; i < ifs.length; i++) {
    w[n][ifs[i]] = w[n].call(null, ifs[i]);
  }
  if (!w[n]._t) {
    x = d.createElement(s), y = d.getElementsByTagName(s)[0];
    x.async = 1;
    x.src = p;
    w[n].para = para;
    y.parentNode.insertBefore(x, y);
  }
})({
  name: 'sensors',
  // 正式
  server_url: 'https://dmp.sinopac.com/DMP_SA/API/',
  sdk_url: 'https://dmp.sinopac.com/DMP_SA/SDK/Scripts/sensorsdata.min.securejs',
  heatmap_url: 'https://dmp.sinopac.com/DMP_SA/SDK/Scripts/heatmap.min.securejs',
  send_type: 'beacon',
  use_client_time: true,

  // SIT NEW
  // server_url: 'http://10.11.22.217/DMP_SA_SIT/API/',
  // sdk_url: 'http://10.11.22.217/DMP_SA_SIT/SDK/Scripts/sensorsdata.min.securejs',
  // heatmap_url: 'http://10.11.22.217/DMP_SA_SIT/SDK/Scripts/heatmap.min.securejs',

  /* UAT
  server_url: 'http://10.11.22.217/DMP_SA/API/',
  sdk_url: 'http://10.11.22.217/DMP_SA/SDK/Scripts/sensorsdata.min.securejs',
  heatmap_url: 'http://10.11.22.217/DMP_SA/SDK/Scripts/heatmap.min.securejs',
  */

  heatmap: {
    //是否開啟點擊圖，默認 default 表示開啟，自動采集 $WebClick 事件，可以設置 'not_collect' 表示關閉
    clickmap: 'default',
    //是否開啟觸達註意力圖，默認 default 表示開啟，自動采集 $WebStay 事件，可以設置 'not_collect' 表示關閉
    scroll_notice_map: 'default'
  },
  //設置 true 後會在網頁控制臺打 logger，會顯示發送的數據,設置 false 表示不顯示。默認 true
  show_log: false,
  //默認值 false，表示是否開啟單頁面自動采集 $pageview 功能，SDK 會在 url 改變之後自動采集web頁面瀏覽事件 $pageview
  is_track_single_page: false,
  //打通 App-H5
  app_js_bridge: true,
  use_app_track: true

});

var sPlatform = '';
if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
  sPlatform = 'iOS';
} else if (/(Android)/i.test(navigator.userAgent)) {
  sPlatform = 'Android';
} else {
  sPlatform = 'PC';
}

sensors.registerPage({
  is_login: "  ", //請依 用戶行為分析項目事件設計 excel檔之公共屬性所規劃填寫
  platform: sPlatform,
  product: 'easyAPP行銷專區' //請依 用戶行為分析項目事件設計 excel檔之公共屬性所規劃填寫
});


sensors.quick('autoTrack');