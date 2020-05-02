document.getElementById('lottery').addEventListener('click', clickEvent);

var oldValue = "";
var box = null;

function validate(e) {
    var target = e.target;
    var position = target.selectionStart;
    oldValue = target.value.slice(0,target.selectionStart) + target.value.slice(target.selectionEnd);
    newValue = target.value.slice(0,target.selectionStart) + e.key + target.value.slice(target.selectionEnd);
    if(newValue.match("^[0-9]*$")) {
        target.value = newValue;
        oldValue = newValue;
    } else {
        target.value = oldValue;
    }
    e.preventDefault();
    target.selectionEnd = position + 1;
    //console.log(e);
}

function confirm(e) {
    if(oldValue == "69247") {
        var msg = document.createElement("P");
        msg.appendChild(document.createTextNode("Congratulations, You're the lucky winner!"));
        msg.style.width = "fit-content";
        msg.style.height = "20px";
        msg.style.position = "relative";
        msg.style.margin="0% auto";
        box.appendChild(msg);
        e.target.removeEventListener("click",confirm);
    } else {
        var msg = document.createElement("P");
        msg.appendChild(document.createTextNode("Sorry, you got a losing code."));
        msg.style.width = "fit-content";
        msg.style.height = "20px";
        msg.style.position = "relative";
        msg.style.margin="0% auto";
        box.appendChild(msg);
        e.target.childNodes[0].nodeValue = "ok";
        console.log(e.target.childNodes[0]);
        e.target.removeEventListener("click",confirm);
        e.target.addEventListener("click", function c() {
            oldValue = "";
            box.style.opacity="0";
            e.target.removeEventListener("click", c);
            setTimeout(function(){box.parentNode.removeChild(box);
            box = null;},500);
        });
        
    }
}

function clickEvent(e) {
    var x = e.offsetX;
    var w = 40;
    var h = 30;
    var f = false;
    oldValue = "";
    if(x >= 54 && x <= 63){
        if(e.view.innerWidth >= 640) {
            w = 30;
            h = 150;
        } else {
            w = 40;
            h = 200;
        }
        box = document.createElement("div");
        var inp = document.createElement("input");
        var p = document.createElement("p");
        var button = document.createElement("button");
        var text = document.createTextNode("Try to win the special prize!");
        var buttonText = document.createTextNode("confirm");
        p.appendChild(text);
        button.append(buttonText);
        p.style.width = "fit-content";
        p.style.height = "20px";
        p.style.position = "relative";
        p.style.margin="10% auto";
        inp.setAttribute("type","text");
        inp.setAttribute("placeholder","insert your code");
        inp.style.width = "70%";
        inp.style.height = "20px";
        inp.style.position = "relative";
        inp.style.left="15%";
        inp.style.backgroundColor="white";
        button.style.display="block";
        button.style.position = "relative";
        button.style.margin = "10% auto";
        box.appendChild(p);
        box.appendChild(inp);
        box.appendChild(button);
        inp.addEventListener("keypress", validate);
        inp.addEventListener("paste", function(e) {e.preventDefault();});
        button.addEventListener("click", confirm);
        var element = document.getElementsByTagName("body");
        var child = document.getElementsByTagName("section");
        element[0].insertBefore(box,child[0]);
        box.style.width="320px";
        box.style.height="240px";
        box.style.borderRadius="10%"
        box.style.backgroundColor = "red";
        box.style.position="absolute";
        box.style.left=(e.view.innerWidth - 320)/2 + "px";
        box.style.bottom ="-20px";
        box.style.opacity="0";
        box.style.zIndex="5";
        f = true;
    }
    if(f) {
        setTimeout(function(){box.style.transitionProperty="opacity";
        box.style.transitionDelay="0s";
        box.style.transitionDuration="0.5s";
        box.style.transitionTimingFunction ="ease-in";
        box.style.webkitTransition="opacity 0.5s 0s ease-in";
        box.style.opacity="1";
        }, 3);
        
    }

}

