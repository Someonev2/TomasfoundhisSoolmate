let G_ANI_LTT_OBJ=null;function activateSplash(splashType,isBgm,isGarland){offScroll()
if(splashType=="v1")
{splash_v1(isBgm,isGarland);}
else if(splashType=="v2")
{var newImage0=$(".ltt_wrapper .opening_v2_bg .img_01").attr("src");var newImage1=$(".ltt_wrapper .opening_v2_bg .img_02").attr("src");var imagesLoaded=0;function checkImagesLoaded(){imagesLoaded++;if(imagesLoaded===2){splash_v2(isBgm,isGarland);}}
var img0=new Image();img0.src=newImage0;img0.onload=checkImagesLoaded;var img1=new Image();img1.src=newImage1;img1.onload=checkImagesLoaded;}
else if(splashType=="v3")
{splash_v3(isBgm,isGarland);}}
function offSplash(){if(G_ANI_LTT_OBJ!=null){G_ANI_LTT_OBJ.stop();G_ANI_LTT_OBJ.destroy();G_ANI_LTT_OBJ=null;}
const v1=document.querySelector(".splash");if(v1){v1.style.display='none';}
const v2_3=document.querySelector(".ltt_wrapper");if(v2_3){v2_3.style.display='none';}}
function onScroll(){const viewer=document.querySelector(`#card_viewer`)
if(viewer){viewer.style.overflowY=''}else{document.body.style.overflowY=''
document.body.style.height=''
document.body.style.width=''
document.body.style.position=''}}
function offScroll(){const viewer=document.querySelector(`#card_viewer`)
if(viewer){viewer.style.overflowY='hidden'}else{document.body.style.overflowY='hidden'
document.body.style.height='100%'
document.body.style.width='100%'
document.body.style.position='fixed'}}
function splash_v1(isBgm,isGarland){$(".pageCover").addClass("blur");var typingBool=false;var typingIdx=0;var typingTxt=$(".typing-txt").text();typingTxt=[...typingTxt];$(typingTxt).each(function(idx,val){if(val==''){typingTxt.splice(idx,1);}});if(typingBool==false){typingBool=true;var tyInt=setInterval(typing,90);}
function typing(){if(typingIdx<typingTxt.length){$(".typing").append(typingTxt[typingIdx]);typingIdx++;}else{clearInterval(tyInt);}}
setTimeout(function(){$(".pageCover").removeClass("blur");if($("#pop_rsvp").hasClass("needShow")){$("#pop_rsvp").css("display","block");}
$(".splash").addClass("animate__animated animate__fadeOut");setTimeout(function(){if(isBgm){bgmAniFunc();bgmStreaming();}
$(".splash").detach();if(isGarland){floatGarland();};onScroll()},1000);},2200);}
function splash_v2(isBgm,isGarland){offSplash();const v2=document.querySelector(".ltt_wrapper.v2");if(v2){v2.style.display='block';}
const splashElement=document.querySelector('#splash_v2_id');splashElement.style.background="transparent";splashElement.classList.remove('keys');void splashElement.offsetWidth;G_ANI_LTT_OBJ=lottie.loadAnimation({container:document.getElementById('opening-v2-text'),renderer:'svg',loop:false,autoplay:false,path:"/src/bodymovin/v2.json"});function onDOMLoaded(){G_ANI_LTT_OBJ.goToAndStop(0,true);G_ANI_LTT_OBJ.play();splashElement.classList.add("keys");}
function onAnimationComplete(){function onAnimationEnd(){splashElement.style.display="none";splashElement.removeEventListener('animationend',onAnimationEnd);if(isBgm){bgmAniFunc();bgmStreaming();}
if(isGarland){floatGarland();}
if($("#pop_rsvp").hasClass("needShow")){$("#pop_rsvp").css("display","block");}
onScroll()}
splashElement.removeEventListener('animationend',onAnimationEnd);splashElement.addEventListener('animationend',onAnimationEnd);}
G_ANI_LTT_OBJ.addEventListener('DOMLoaded',onDOMLoaded);G_ANI_LTT_OBJ.addEventListener('complete',onAnimationComplete);}
function splash_v3(isBgm,isGarland){offSplash();const v3=document.querySelector(".ltt_wrapper.v3");if(v3){v3.style.display='block';}
const splashElement=document.querySelector('#splash_v3_id');splashElement.classList.remove('keys');void splashElement.offsetWidth;fetch('/src/bodymovin/v3.json').then(response=>response.json()).then(animationData=>{animationData.layers.forEach(layer=>{if(layer.shapes){layer.shapes.forEach(shape=>{findAndChangeStrokeColor(shape);});}});G_ANI_LTT_OBJ=lottie.loadAnimation({container:document.getElementById('opening_v3'),renderer:'svg',loop:false,autoplay:false,animationData:animationData});function onDOMLoaded(){G_ANI_LTT_OBJ.goToAndStop(0,true);G_ANI_LTT_OBJ.play();splashElement.classList.add("keys");}
function onAnimationComplete(){function onAnimationEnd(){splashElement.style.display="none";splashElement.removeEventListener('animationend',onAnimationEnd);if(isBgm){bgmAniFunc();bgmStreaming();}
if(isGarland){floatGarland();}}
splashElement.removeEventListener('animationend',onAnimationEnd);splashElement.addEventListener('animationend',onAnimationEnd);}
G_ANI_LTT_OBJ.addEventListener('DOMLoaded',onDOMLoaded);G_ANI_LTT_OBJ.addEventListener('complete',onAnimationComplete);}).catch(error=>console.error('Error loading the animation:',error));function findAndChangeStrokeColor(shape){if(shape.ty==='st'){shape.c.k=[1,1,1,1];}else if(shape.it){shape.it.forEach(subShape=>{findAndChangeStrokeColor(subShape);});}}}