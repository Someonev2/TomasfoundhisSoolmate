let WIN_SCR_TOP=0
function floatGarland(){$(".floatingBox").addClass("see animated animate__fadeInUp");setTimeout(function(){$(".floatingBox").toggleClass("hi");},2000);}
document.querySelector(".floatingBox, .garlandSection .garBox")?.addEventListener('click',()=>{$(".bttmGarlandWrapper .in").removeClass("animate__fadeOutDown");$(".bttmGarlandWrapper").addClass("see");$(".bttmGarlandWrapper .in").addClass("animated animate__fadeInUp");});$(".bttmGarlandWrapper .close").click(function(){$(".bttmGarlandWrapper").removeClass("see");$(".bttmGarlandWrapper .in").addClass("animate__fadeOutDown");});function openContactPop(){$("body").addClass("pop_contact_open");const top=document.querySelector('html').scrollTop;WIN_SCR_TOP=top;$("html,body").css("overflow","hidden");}
function openInterviewPop(){$("body").addClass("pop_interview_open");const top=document.querySelector('html').scrollTop;WIN_SCR_TOP=top;$("html,body").css("overflow","hidden");}
function youtube_parser(url){var regExp=/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;var match=url.match(regExp);return(match&&match[7].length==11)?match[7]:false;}
function bgmAniFunc(){$('.anibox2').addClass("hd").viewportChecker({classToAdd:'visible animated fadeInDown ',offset:0,callbackFunction:function(elem,action){setTimeout(function(){$(".bgmbar").addClass("fadeBg");},2500);}});var videocontrol=document.getElementById("videoplay");if(!videocontrol.paused){$(".bgmbar .sound").find("i.fa").removeClass("fa-volume-off");$(".bgmbar .sound").find("i.fa").addClass("fa-volume-up");}}
let isAcctBox=false
function openAcctBox(i){$("#acctBox .grp").text($(i).attr("data-group"));$("#acctBox .ment").html($(i).attr("data-bank")+"<br/>"+$(i).attr("data-number")+"<br/>"+$(i).attr("data-name"));$("#copytext").val($(i).attr("data-number"));$("#acctBox").css("display","block");isAcctBox=true}
function closeAcctBox(){$("#acctBox").css("display","none");}
function copy_to_clipboard(txtId){var copytxt=$("#"+txtId).val();const t=document.createElement("textarea");document.body.appendChild(t);t.value=copytxt;t.select();document.execCommand('copy');document.body.removeChild(t);document.querySelector(`.acc_copy`).style.display='block'
document.querySelector(`#acctBox`).style.display='none'}
function copy_to_clipboard2(txtId){var copytxt=$("#"+txtId).val();const t=document.createElement("textarea");document.body.appendChild(t);t.value=copytxt;t.select();document.execCommand('copy');document.body.removeChild(t);const msg=lang==='ko'?'복사가 완료되었습니다.':'Copied successfully.'
openAlert(msg)
document.querySelector(`.acc_copy`).style.display='block'}
function remove_focus_clipboard(){var sel=window.getSelection?window.getSelection():document.selection;if(sel){if(sel.removeAllRanges){sel.removeAllRanges();}else if(sel.empty){sel.empty();}}}
function searchDirCoord(x,y){var point=new naver.maps.Point(x,y);NAVER_MAP=new naver.maps.Map("map",{center:point,zoom:16,mapTypeControl:false,anchorSkew:true});marker=new naver.maps.Marker({position:point,map:NAVER_MAP});}
function searchAddressToCoordinate(address){naver.maps.Service.geocode({query:address},function(status,response){if(status===naver.maps.Service.Status.ERROR){return;}
if(response.v2.meta.totalCount===0){return;}
var htmlAddresses=[],item=response.v2.addresses[0],point=new naver.maps.Point(item.x,item.y);if(item.roadAddress){htmlAddresses.push('[도로명 주소] '+item.roadAddress);}
if(item.jibunAddress){htmlAddresses.push('[지번 주소] '+item.jibunAddress);}
if(item.englishAddress){htmlAddresses.push('[영문명 주소] '+item.englishAddress);}
NAVER_MAP=new naver.maps.Map("map",{center:point,zoom:16,mapTypeControl:false,anchorSkew:true});marker=new naver.maps.Marker({position:point,map:NAVER_MAP});});}
function fnCallWeb2App(type){event.preventDefault();var scheme,package,fallbackUrl,fail,useUrlScheme;const msg=lang==='ko'?'앱이 설치되어 있지 않은 경우\n길 안내가 실행되지 않을 수 있습니다':'If the app is not installed, directions may not start.'
switch(type){case 'kakaoNavi':openAlert(msg);Kakao.Navi.share({name:mp_hname,x:mp_x,y:mp_y,coordType:'wgs84'});break;case 'tmap':openAlert(msg);scheme=`tmap://route?goalx=${mp_x}&goaly=${mp_y}&goalname=${mp_hname}`;package='com.skt.tmap.ku';fallbackUrl=scheme;break;case 'naverMap':openAlert(msg);scheme=`navermaps://?menu=location&pinType=place&lat=${mp_y}&lng=${mp_x}&title=${mp_hname}`;package='com.nhn.android.nmap';fallbackUrl=`http://map.naver.com/index.nhn?elng=${mp_x}&elat=${mp_y}&etext=${mp_hname}&menu=route&pathType=0`;fail=function(){$('#fakeAnchor').remove();$('body').append(`<a href='http://map.naver.com/index.nhn?elng=${mp_x}&elat=${mp_y}&etext=${mp_hname}&menu=route&pathType=0' id='fakeAnchor'></a>`);$('#fakeAnchor').get(0).click();}
break;}
const callWeb2App=new CallWeb2App({scheme:scheme,package:package,useUrlScheme:useUrlScheme,fallbackUrl:fallbackUrl,fail:fail});callWeb2App.run();}
const moreInterview=()=>{document.querySelectorAll('#interview_pop ul.interview li').forEach(item=>item.style.display='')
document.querySelector(`#interview_pop .more`).style.display='none'}
const moreBooks=(ele)=>{document.querySelectorAll(`.books-open-list-ul li:not(.on)`).forEach((item,key)=>{if(key<4){item.classList.add('on')}})
if(document.querySelectorAll(`.books-open-list-ul li:not(.on)`).length==0){ele.style.display='none'}}
const openInfoPopup=(imgPath)=>{$(".pageCover").addClass("blur6");$(".popNoticeImg").addClass("visible");document.querySelector(`#popNoticeImgWrap img`).src=imgPath}
const bgmStreaming=()=>{if(isPlay){const bgm=document.querySelector('#videoplay');const url=bgm.getAttribute('data-url')
if(url.includes('mp3')){if(bgm.paused){bgm.play()}}else{bgm.setAttribute('type','application/x-mpegURL')
if(!Hls.isSupported()&&bgm.canPlayType('application/vnd.apple.mpegurl')==='maybe'){bgm.src=url
if(bgm.paused){bgm.play()}}else{const hls=new Hls()
hls.loadSource(url)
hls.attachMedia(bgm)
if(bgm.paused){bgm.play()}}}
if(bgm.paused){$(".bgmbar .sound").find("i.fa").addClass("fa-volume-off");$(".bgmbar .sound").find("i.fa").removeClass("fa-volume-up");}else{$(".bgmbar .sound").find("i.fa").removeClass("fa-volume-off");$(".bgmbar .sound").find("i.fa").addClass("fa-volume-up");}}}