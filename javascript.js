  //画笔和画图大小的设置
  var yyy = document.getElementById('xxx')
  var ctx = yyy.getContext('2d')
  var painting = false
  var oldpoint = { 'x': undefined, 'y': undefined }
  var pageWidth = document.documentElement.clientWidth
  var pageHeight = document.documentElement.clientHeight

  //橡皮擦的设置
  var usingEraser = false
  var eraser = document.getElementById('eraser')
  var eraser_circle = document.getElementById('circle')

  yyy.width = pageWidth
  yyy.height = pageHeight

  function drawCir(x, y, radius = 1,color='black') {
      ctx.fillStlye= color
      ctx.beginPath()
      ctx.arc(x, y, radius, 0, 360)
      ctx.fill()
      ctx.closePath()
  }


  function drawLine(x1, y1, x2, y2) {
      ctx.beginPath()
      ctx.moveTo(x1, y1)
      ctx.lineWidth = 2;
      ctx.lineTo(x2, y2)
      ctx.stroke()
      ctx.closePath()
  }

  yyy.onmousedown = (e) => {
      painting = true
      var x = e.clientX
      var y = e.clientY
      oldpoint.x = x
      oldpoint.y = y
  }

  yyy.addEventListener('mousemove', (e) => {
      if (painting && usingEraser == false) {
          var x = e.clientX
          var y = e.clientY
          var newpoint = { 'x': x, 'y': y }
          drawCir(x, y)
          drawLine(oldpoint.x,
              oldpoint.y,
              newpoint.x,
              newpoint.y)
          oldpoint.x = x
          oldpoint.y = y
      }
      if(painting && usingEraser)
      {
          ctx.beginPath()
          ctx.clearRect(e.clientX-3,e.clientY-3, 6, 6)
          ctx.closePath()
      }
  })

  
 

  yyy.onmouseup = () => {
      painting = false
  }

  eraser.onclick = () => {
      usingEraser = !usingEraser
  }