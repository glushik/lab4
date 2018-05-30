function scroll_to_top(){
    $("html,body").animate({"scrollTop":0}, 650);
}
function dropHandler(ev){
    ev.stopPropagation();
    ev.preventDefault();
    var file = ev.dataTransfer.files[0];
    //console.log(file);
    $("#reset").trigger('click');
    showInfo(file);
    if ( file.type.match(/image\/(jpeg|jpg|png|gif)/))  showThumbnail(file);

 //   removeDragData(ev);
}
function showThumbnail(data){
    var reader = new FileReader();
    reader.addEventListener('load', function(event){
        // var img  = document.createElement('img');
        // var itemPreview = itemPreviewTemplate.clone();
        // var itemPreview;
        // $("#thumbnails-zone").attr('src',event.target.result);
        $("#thumbnails-zone").html("");
        // $("#drop-info").html("");
        $("#thumbnails-zone").append("<img class='small' src = "+event.target.result+">");
        // itemPreview.data('id', data.name)
    });
    reader.readAsDataURL(data);
    // var fr = new FileReader();
    // $("#thumbnails-zone").html("");
    // $("#thumbnails-zone").append("<label style.backgroudImage = >"</label>")  ;
    
}
function dragOverHandler(ev){
    ev.stopPropagation();
    ev.preventDefault();
}

function showInfo(data){
    console.log(data);
    $("#drop-info").removeClass("hidden");
    $("#drop-info").html("");
    $("#thumbnails-zone").html("");
    $("#drop-info").append("<p>File name:"+data.name+"</p>");
    $("#drop-info").append("<p>File type:"+data.type+"</p>");
    $("#drop-info").append("<p>File size:"+data.size+"</p>");
}
function uploadFile(){
    $('input[type=file]')[0].files[0];  
    var data = $('#choose-file')[0].files[0];
    showInfo(data);
    if (data.type.substring(0,5) ==="image" ) showThumbnail(data);
}

function bestSong(){
    var radio = document.getElementsByName("song");
    var result;
    for (var i = 0; i < radio.length; ++i){
        if (radio[i].checked)  result = radio[i].value;
    }
    var year = document.getElementById("birth").value;
    console.log(year);
    var obj = {
        email: document.getElementById("email").value,
        song: result,
        birth: year
    };
    localStorage.setItem(document.getElementById("email").value, JSON.stringify(obj));
    //console.log(document.getElementById("email").value);
    //console.log(JSON.parse(localStorage.getItem(document.getElementById("email").value)));
    return false;
}

function showSong(){

    var email = document.getElementById("checkemail").value;
    if (JSON.parse(localStorage.getItem(email)).song != undefined){
        var r = new Date(JSON.parse(localStorage.getItem(email)).birth);
        var let = (new Date().getTime() - r) / (24 * 3600 * 365.25 * 1000);
        //var let = (new Date() - r );
        //console.log(let/60/60/24/365);
        alert(
            "Вам " + Math.floor(let) + " лет и вы слушаете Виника????!!!!\n"+JSON.parse(localStorage.getItem(email)).song+" - это ваша любимая песня");
            return false;
        } 
    console.log(email);
    alert("У вас нет любимой песни Виника, сердечно поздравляю");
    return false;
}




///////////////////////////////////
var ball = document.getElementById('clock');


ball.onmousedown = function(e) {

  var coords = getCoords(ball);
  var shiftX = e.pageX - coords.left;
  var shiftY = e.pageY - coords.top;

  ball.style.position = 'absolute';
  document.body.appendChild(ball);
  moveAt(e);

  ball.style.zIndex = 1000; // над другими элементами

  function moveAt(e) {
    ball.style.left = e.pageX - shiftX + 'px';
    ball.style.top = e.pageY - shiftY + 'px';
  }

  document.onmousemove = function(e) {
    moveAt(e);
  };

  ball.onmouseup = function() {
    document.onmousemove = null;
    ball.onmouseup = null;
  };

}

ball.ondragstart = function() {
  return false;
};

function getCoords(elem) {   // кроме IE8-
  var box = elem.getBoundingClientRect();
  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
  };
}

