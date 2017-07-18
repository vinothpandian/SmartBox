require('fullpage.js')
import logo from '../images/logo.png'
import down from '../images/down.png'
import tools from '../images/tools.png'
import worker from '../images/worker.png'
import background from '../images/background.jpg'

var LogoImg = document.getElementById('logo');
LogoImg.src = logo

var DownImg = document.getElementById('down');
DownImg.src = down

var ToolsImg = document.getElementById('tools');
ToolsImg.src = tools

var BoxImg = document.getElementById('box');
BoxImg.src = logo

var WorkerImg = document.getElementById('worker');
WorkerImg.src = worker

$(document).ready(function() {
   $('#fullpage').fullpage({
     anchors: ['home', 'links'],
     verticalCentered:false,
   });
});

$('body').css('background-image', 'url(' + background + ')');
$('body').css('background-size', 'cover');
