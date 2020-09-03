

<!-- hide this script from non-javascript-enabled browsers
if (document.images) {

panel1 = new Image(115, 32);panel1.src = 'link1.jpg';
panel11 = new Image(115, 32);panel11.src = 'link1_.jpg';
panel2 = new Image(115, 32);panel2.src = 'link2.jpg';
panel22 = new Image(115, 32);panel22.src = 'link2_.jpg';
panel3 = new Image(115, 32);panel3.src = 'link3.jpg';
panel33 = new Image(115, 32);panel33.src = 'link3_.jpg';
panel4 = new Image(115, 32);panel4.src = 'link4.jpg';
panel44 = new Image(115, 32);panel44.src = 'link4_.jpg';
panel5 = new Image(318, 32);panel5.src = 'bg1_.jpg';
panel55 = new Image(318, 32);panel55.src = 'bg1.jpg';
panel6 = new Image(318, 32);panel6.src = 'bg2_.jpg';
panel66 = new Image(318, 32);panel66.src = 'bg2.jpg';

}

function di(id,name){
if (document.images) {
  document.images[id].src=eval(name+".src");
}
function dm(msgStr) {
  document.returnValue = false;
  if (document.images) { 
     window.status = msgStr;
     document.returnValue = true;
  }
}
var showMsg = navigator.userAgent != "Mozilla/4.0 (compatible; MSIE 4.0; Mac_PowerPC)";
function dmim(msgStr) {
  document.returnValue = false;
  if (showMsg) { 
    window.status = msgStr;
    document.returnValue = true;
  }
}

}