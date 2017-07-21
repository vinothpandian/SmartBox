require('fullpage.js')
import logo from '../images/logo.png'
import down from '../images/down.png'
import tools from '../images/tools.png'
import worker from '../images/worker.png'
import background from '../images/background.jpg'
import backgroundold from '../images/background_v1.jpg'

// var LogoImg = document.getElementById('logo');
// LogoImg.src = logo

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

$('#firstPage').css('background-image', 'linear-gradient(to bottom, rgba(0, 0, 0, 0.75) 0%, rgba(100, 100, 100, 0.25) 100%), url(' + background + ')');
$('#firstPage').css('background-size', 'cover');

$('body').css('background-image', 'linear-gradient(to bottom, rgba(0, 0, 0, 0.15), rgba(255, 255, 255, 0.35)), url(' + backgroundold + ')');
$('body').css('background-size', 'cover');
