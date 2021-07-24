$(document).ready(function(){
  var d = new Date();
  var n = d.getHours();
  if(n > 19 || n < 6){
    document.querySelector('body').style.backgroundColor = '#232323';
    document.querySelector('body').style.color = 'white';
    var alist = document.querySelectorAll('a');
    var i = 0;
    while (i < alist.length) {
      alist[i].style.color = 'orange';
      i = i + 1;
    }
    document.getElementById('mainlogo').src = 'img/mainlogo_dark.png';
  }
  else{
    document.querySelector('body').style.backgroundColor = 'white';
    document.querySelector('body').style.color = 'black';
    var alist = document.querySelectorAll('a');
    var i = 0;
    while (i < alist.length) {
      alist[i].style.color = '00B4DB';
      i = i + 1;
    }
  }
});
