// wave parameter settings
var DOM = document.getElementById('waveCanvas') // 獲取canvas物件
var DOM2 = document.getElementById('waveCanvas2') // 獲取canvas物件
var DOM3 = document.getElementById('waveCanvas3') // 獲取canvas物件
var DOM4 = document.getElementById('waveCanvas4') // 獲取canvas物件

var canvasList // 畫布陣列
var info = {} // 所有畫布通用的繪圖信息
var colorList // 每個畫布的顏色信息
var updateRate = 0.014 // canvas更新頻率
var wavecolorArr = ['#e5f2fd', '#cce5fb'] // canvas填塞(即波浪的顏色)
var initialHeight = 30 // canvas高度初始值
var waveLength = 6 // 波浪長度倍數
var unit = 14 // 波浪起伏幅度(振幅)
var waveSurge = 1 // 波浪起伏幅度倍數
var waveSpeed = 80 // 波動速度
var drawWaveArray = [
  [0.5, 20, 0],
  [0.5, 10, 0] // [不透明度,浪高,延遲位移]
]
var timer = null

// Init function 初始化函數
// Initialize variables and begin the animation. 初始化變量並開始動畫
function init (wavecolorArr) {
  info.seconds = 0
  info.t = 0
  canvasList = []
  colorList = []
  // 畫布第一種顏色規格
  canvasList.push(DOM)
  colorList.push(wavecolorArr)
  canvasList.push(DOM2)
  colorList.push(wavecolorArr)

  canvasList.push(DOM3)
  colorList.push(wavecolorArr)
  canvasList.push(DOM4)
  colorList.push(wavecolorArr)

  // 每個畫布的初始化
  for (var canvasIndex in canvasList) {
    var canvas = canvasList[canvasIndex]
    // canvas.width = document.documentElement.clientWidth // 將畫布寬度與窗口寬度匹配
    canvas.width = document.querySelector('.home').clientWidth
    canvas.height = initialHeight // 初始化canvas高度
    canvas.contextCache = canvas.getContext('2d')
  }
  // 更新處理調用
  update()
}

function update () {
  for (var canvasIndex in canvasList) {
    var canvas = canvasList[canvasIndex]
    // 繪製每個畫布
    draw(canvas, colorList[canvasIndex])
  }
  // 更新常用圖紙信息
  info.seconds = info.seconds + updateRate
  info.t = info.seconds * Math.PI
  // 遞歸
  timer = setTimeout(update, waveSpeed)
}

// Draw animation function. 繪製動畫函數。
// This function draws one frame of the animation, waits 20ms, and then calls itself again. 該函數繪製一幀動畫，等待20ms，然後再次調用自身。
function draw (canvas, color) {
  // 獲取目標畫布的上下文
  var context = canvas.contextCache
  // 清除畫布繪圖
  context.clearRect(0, 0, canvas.width, canvas.height)

  // 畫波浪 drawWave(canvas, color[數字（指定從 0 開始計數的波數）], 不透明度、波寬縮放、波起始位置延遲)
  for ([index, [waveAlpha, waveLength, waveDelay]] of drawWaveArray.entries()) {
    drawWave(canvas, color[index], waveAlpha, waveLength, waveDelay)
  }
}

//  畫波浪
//  drawWave(色, 不透明度, 波寬縮放, 波起始位置延遲)
function drawWave (canvas, color, alpha, zoom, delay) {
  var context = canvas.contextCache
  context.fillStyle = color // 填色
  context.globalAlpha = alpha // 不透明度
  context.beginPath() // 路徑起點
  drawSine(canvas, info.t / 0.5, zoom, delay)
  context.lineTo(canvas.width + 10, canvas.height) // Canvas 右下角的路徑
  context.lineTo(0, canvas.height) // Canvas 左下角的路徑
  context.closePath() // 關閉路徑
  context.fill() // 填滿波浪
}

// Function to draw sine 繪製正弦函數
// 正弦曲線從原點開始繪製成 10px 段。
// drawSine(時間, 波寬縮放, 波起始位置延遲)
function drawSine (canvas, t, zoom, delay) {
  var xAxis = Math.floor(canvas.height / 2)
  var yAxis = 0
  var context = canvas.contextCache
  // 設置初始 x 和 y，從 0,0 開始並平移到原點
  // 畫布
  var x = t // 時間是水平位置
  var y = Math.sin(x) / zoom
  context.moveTo(yAxis, unit * y + xAxis) // 將路徑放在起始位置

  // 循環繪製線段(計算寬度、繪製波浪)
  for (i = yAxis; i <= canvas.width + 10; i += 10) {
    x = t + (-yAxis + i) / unit / zoom
    y = Math.sin(x - delay) * waveSurge
    context.lineTo(i, unit * y + xAxis)
  }
}

init(wavecolorArr)

window.addEventListener('resize', () => {
  clearInterval(timer)
  init(wavecolorArr)
})
