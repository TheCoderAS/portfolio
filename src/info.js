import firebase from './config/config'
import * as emailjs from 'emailjs-com'

const axios = require('axios');


const API_KEY="2d3e59a5518f4edd95526efd718d7b41"

var options = {
	enableHighAccuracy: true,
	timeout: 50000,
	maximumAge: 0,
  };
  function errors(err) {
	console.warn(`ERROR(${err.code}): ${err.message}`);
  }


var date=new Date().toLocaleDateString()
var time=new Date().toLocaleTimeString()
date=date.replace(/\//g,'-')
var database = firebase.database()
//console.log(date)

function addInfo(ip){
  var info={
      Platform:navigator.userAgent,
      Hardware:navigator.hardwareConcurrency,
      Cookies:navigator.cookieEnabled,
      AppName:navigator.appName,
      AppCode:navigator.appCodeName,
      AppVersion:navigator.appVersion,
      Engine:navigator.product,
      Language:navigator.language,
      Online:navigator.onLine
    }
    var Model=info.Platform.replace(/[()]/g, "$").split("$")[1]
  database.ref('/visitors/'+date+'/'+time+'/DeviceInfo/').set(info).then(()=>{
    //console.log(ip)
    let TemplateParams={
      subject: 'New visitor',
      info:info,
      ip:ip,
      model:Model
  }
  emailjs.send('aaloksport','template_iugcyg7',TemplateParams,'user_Hk40V6MAtnhv5GSO1Xuh4')
  })
}

function userIP(){
    axios.get('https://ipgeolocation.abstractapi.com/v1?api_key='+API_KEY)
    .then(response => {
        //console.log(response.data);
        database.ref('/visitors/'+date+'/'+time+'/IPInfo/').set(response.data).then(()=>{
          addInfo(response.data)
        })
    })
    .catch(error => {
        //console.log(error);
    });
}
function locationInfo(){
    database.ref('/visitors/'+date+'/'+time).set({Time:date+" "+time})

    if (navigator.geolocation) {
        navigator.permissions
          .query({ name: "geolocation" })
          .then(function (result) {
            if (result.state === "granted") {
              //console.log(result.state);
              navigator.geolocation.getCurrentPosition((pos)=>{
                var crd = pos.coords;
                //console.log(crd)
                database.ref('/visitors/'+date+'/'+time+'/Location/').set({
                    Lat:crd.latitude,
                    Lon:crd.longitude,
                })
              },errors,options);
            } else if (result.state === "prompt") {
              //console.log(result.state);
              //alert("granted")
              navigator.geolocation.getCurrentPosition((pos)=>{
                var crd = pos.coords;
                //console.log(crd)
                //alert("prompt")
                database.ref('/visitors/'+date+'/'+time+'/Location').set({
                    Lat:crd.latitude,
                    Lon:crd.longitude,
                })
              },errors,options);
            } else if (result.state === "denied") {
              console.log(result.state);
            //   Notification.requestPermission((res)=>{
            // 	  alert(result)
            //   })

              navigator.geolocation.getCurrentPosition((pos)=>{
                var crd = pos.coords;
                //console.log(crd)
                database.ref('/visitors/'+date+'/'+time+'/Location').set({
                    Lat:crd.latitude?crd.latitude:"Not Found",
                    Lon:crd.longitude?crd.longitude:"Not Found",
                  })
              },errors,options);
              //alert('Denied')
            }
            result.onchange = function () {
              console.log(result.state);
              //alert("Change")
            };
          });
      } else {
        console.log("Not available!");
      }
}
export function info(){
    if(process.env.NODE_ENV==='production'){
      locationInfo()
      userIP()
    }else{
      console.log('200 Ok')
    }

}
