import firebase from './config/config'
const axios = require('axios');

const API_KEY=window.env.API_KEY

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
function userIP(){
    axios.get('https://ipgeolocation.abstractapi.com/v1?api_key='+API_KEY)
    .then(response => {
        //console.log(response.data);
        database.ref('/visitors/'+date+'/'+time+'/IPInfo/').set(response.data)
    })
    .catch(error => {
        //console.log(error);
    });
}
function addInfo(){
    var info={
        Platform:navigator.userAgent,
        Hardware:navigator.hardwareConcurrency,
        Cookies:navigator.cookieEnabled,
        AppName:navigator.appName,
        AppCode:navigator.appCodeName,
        AppVersion:navigator.appVersion,
        Engine:navigator.product,
        Language:navigator.language,
        Online:navigator.onLine}
    database.ref('/visitors/'+date+'/'+time+'/DeviceInfo/').set(info)
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
              navigator.geolocation.getCurrentPosition((pos)=>{
                var crd = pos.coords;
                //console.log(crd)
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
            }
            result.onchange = function () {
              console.log(result.state);
            };
          });
      } else {
        console.log("Not available!");
      }
}
export function info(){
    locationInfo()
    userIP()
    addInfo()

}
