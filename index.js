var n=document.querySelectorAll(".drum").length;

for(var i=0;i<n;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
        var btn=this.innerHTML; 
        makesound(btn);
        animate(btn);
    });
    
}
document.addEventListener("keypress", function(event){
    makesound(event.key);
    animate(event.key);
});


function makesound(key){
    switch (key) {
        case "w":
            var c=new Audio("sounds/crash.mp3")
            c.play();
            break;
        case "a":
            var k=new Audio("sounds/kick-bass.mp3")
            k.play();
            break;
        case "s":
            var s=new Audio("sounds/snare.mp3")
            s.play();
            break;
        case "d":
            var t1=new Audio("sounds/tom-1.mp3")
            t1.play();
            break;
        case "j":
            var t2=new Audio("sounds/tom-2.mp3")
            t2.play();
            break;
        case "k":
            var t3=new Audio("sounds/tom-3.mp3")
            t3.play();
            break;
        case "l":
            var t4=new Audio("sounds/tom-4.mp3")
            t4.play();
            break;
     
        default:
            console.log(btn);
            break;
     }
}
function animate(currentKey){
    var button=document.querySelector("."+currentKey);
    button.classList.add("pressed");
    setTimeout(function() {
        button.classList.remove("pressed")
    }, 100);
}