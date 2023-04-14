
function S1(){
  document.getElementById('section-one').style.display = 'block';
  document.getElementById('section-two').style.display = 'none';
  document.getElementById('section-thre').style.display = 'none';
}
function S2(){
  document.getElementById('section-one').style.display = 'none';
  document.getElementById('section-two').style.display = 'Block';
  document.getElementById('section-thre').style.display = 'none';
}
function S3(){
  document.getElementById('section-one').style.display = 'none';
  document.getElementById('section-two').style.display = 'none';
  document.getElementById('section-thre').style.display = 'block';
  document.getElementById('section-thre').style.zIndex = '1';
}