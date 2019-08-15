function adapter () {
  var u = navigator.userAgent
  var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1 // android终端或者uc浏览器
  var isiOS = u.indexOf('iPhone') > -1 // ios终端
  // if (isiOS) {
  //   $('html').css('font-family: "PingFang-SC-Medium"')
  // }
  if (isAndroid || isiOS) {
    var windowsWidth = document.documentElement.clientWidth
    // console.log(windowWidth)

    document.documentElement.style.fontSize = windowsWidth / 7.5 + 'px'
  } else {
    windowsWidth = document.documentElement.clientWidth
    // console.log(windowWidth)

    if (windowsWidth > 480) {
      document.documentElement.style.fontSize = 480 / 7.5 + 'px'
    } else {
      document.documentElement.style.fontSize = windowsWidth / 7.5 + 'px'
    }
  }
}
adapter()
