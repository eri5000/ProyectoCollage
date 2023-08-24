var SpeechRecognition=window.webkitSpeechRecognition;
var Content;
var recongnition=new SpeechRecognition;

function start(){
 recongnition.start();
}
recongnition.onresult=function(event){
    console.log(event);
    Content=event.results[0][0].transcript.toLowerCase();
    console.log(Content);
    if(Content=="selfie"){
        speak();
    }
}
function speak(){
    var Synth=window.speechSynthesis;
    Webcam.attach(camera);
    speakData="Tomando tu selfie en 5 segundos";
    var utterThis=new SpeechSynthesisUtterance(speakData);
    Synth.speak(utterThis);

    setTimeout(function(){
        img_id="selfie1";
        take_snapshot();
        speakData="tomando tu selfie en 10 segundos";
        var utterThis=new SpeechSynthesisUtterance(speakData);
        Synth.speak(utterThis);
    },5000);
    
    setTimeout(function(){
        img_id="selfie2";
        take_snapshot();
        speakData="tomando tu selfie en 15 segundos";
        var utterThis=new SpeechSynthesisUtterance(speakData);
        Synth.speak(utterThis);
    },10000);

    setTimeout(function(){
        img_id="selfie3";
        take_snapshot();
        
    },15000);
}

camera=document.getElementById("camera");
Webcam.set({
    width:600,
    height:600,
    image_format:'png',
    png_quality:90

});

 function take_snapshot(){
    console.log(img_id);
    Webcam.snap(function (data_uri){
        if(img_id == "selfie1"){
            document.getElementById("result1").innerHTML='<img id="selfie1" scr="'+ data_uri +'"/>';
        }

        if(img_id == "selfie2"){
            document.getElementById("result2").innerHTML='<img id="selfie2" scr="'+ data_uri +'"/>';
        }

        if(img_id == "selfie3"){
            document.getElementById("result3").innerHTML='<img id="selfie3" scr="'+ data_uri +'"/>';
        }
    });
 }