let minutes = 20;
let hours = 0;
let count = (60 * minutes) + (3600 * hours);
let timr;
function basetimer() {
    let sec = (count % 60).toString().padStart(2, "0");
    let min = ((Math.floor(count / 60)) - (60 * Math.floor(count / 3600))).toString().padStart(2, "0");
    let hr = (Math.floor(count / 3600)).toString().padStart(2, "0");
    if (hr > 0) {
        document.getElementById('mytimer').innerHTML = hr + ":" + min + ":" + sec;
    }
    else if (hr == 0) {
        document.getElementById('mytimer').innerHTML = min + ":" + sec;
    }
    else {
        document.getElementById('mytimer').innerHTML = "timer failed!";
    }
}
let sec;
let min;
let hr;
function smallbasetimer() {
    sec = (count % 60).toString().padStart(2, "0");
    min = ((Math.floor(count / 60)) - (60 * Math.floor(count / 3600))).toString().padStart(2, "0");
    hr = (Math.floor(count / 3600)).toString().padStart(2, "0");
    if (minutes > 59) {
        hours = hours + 1;
        minutes = minutes - 60;
    }
    if (minutes < 0) {
        hours = hr * 1;
        document.getElementById("addsec").click();
        document.getElementById("minussec").click();
    }
    if (count > 359940) {
        hr = 99;
        min = 59;
        document.getElementById('addhr').disabled = true;
        document.getElementById('addmin').disabled = true;
        document.getElementById('addsec').disabled = true;
    }
    else {
        document.getElementById('addhr').disabled = false;
        document.getElementById('addmin').disabled = false;
        document.getElementById('addsec').disabled = false;
    }
    if (count > 0) {
        $('#inputhr').attr('placeholder', hr);
        $('#inputmin').attr('placeholder', min);
        document.getElementById('mytimer').innerHTML = hr + ":" + min + ":" + sec;
        document.getElementById('minushr').disabled = false;
        document.getElementById('minusmin').disabled = false;
        document.getElementById('minussec').disabled = false;
    }
    else {
        sec = (0).toString().padStart(2, "0");
        min = (0).toString().padStart(2, "0");
        hr = (0).toString().padStart(2, "0");
        count = 0;
        document.getElementById('minushr').disabled = true;
        document.getElementById('minusmin').disabled = true;
        document.getElementById('minussec').disabled = true;
        $('#inputhr').attr('placeholder', hr);
        $('#inputmin').attr('placeholder', min);
        document.getElementById('mytimer').innerHTML = hr + ":" + min + ":" + sec;
    }
}
smallbasetimer();
function addsixtysec() {
    count = count + 60;
    document.querySelector("#inputhr").value = '';
    document.querySelector("#inputmin").value = '';
    smallbasetimer();
}
function minussixtysec() {
    count = count - 60;
    document.querySelector("#inputhr").value = '';
    document.querySelector("#inputmin").value = '';
    smallbasetimer();
}
function addfifteenmin() {
    count = count + 900;
    document.querySelector("#inputhr").value = '';
    document.querySelector("#inputmin").value = '';
    smallbasetimer();
}
function minusfifteenmin() {
    count = count - 900;
    document.querySelector("#inputhr").value = '';
    document.querySelector("#inputmin").value = '';
    smallbasetimer();
}
function addonehr() {
    count = count + 3600;
    document.querySelector("#inputhr").value = '';
    document.querySelector("#inputmin").value = '';
    smallbasetimer();
}
function minusonehr() {
    count = count - 3600;
    document.querySelector("#inputhr").value = '';
    document.querySelector("#inputmin").value = '';
    smallbasetimer();
}
function playtimer() {
    timr = setInterval (
        function timerfunc() {
            basetimer();
            count--;
            if (count < 0) {
                document.getElementById('mytimer').innerHTML = 'timer finished!';
                document.getElementById('arctimer').style.opacity = '0';
                document.getElementById('mytimerreset').style.display = 'block';
                document.getElementById('mytimer').style.animationName = 'timerblink';
                document.getElementById('mytimerpause').style.display = 'none';
                clearInterval(timr);
            }
        }
    , 1000)
    document.getElementById('mytimerplay').style.display = 'none';
    document.getElementById('mytimerreset').style.display = 'none';
    document.getElementById('mytimerpause').style.display = 'block';
    document.getElementById('negtimer').style.display = 'none';
    document.getElementById('timerinputedit').style.display = 'none';
    document.getElementById('postimer').style.display = 'none';
    document.getElementById('mytimer').style.animationName = 'idk';
    document.getElementById('arctimer').style.opacity = '1';
    document.getElementById('mytimer').style.marginTop = '25px';
}
function pausetimer() {
    clearInterval(timr);
    document.getElementById('mytimerpause').style.display = 'none';
    document.getElementById('mytimerplay').style.display = 'block';
    document.getElementById('mytimerreset').style.display = 'block';
    document.getElementById('mytimer').style.animationName = 'timerblink';
}
function resettimer() {
    count = (60 * min) + (3600 * hr);
    smallbasetimer();
    document.querySelector("#inputhr").value = '';
    document.querySelector("#inputmin").value = '';
    document.getElementById('mytimerpause').style.display = 'none';
    document.getElementById('mytimerplay').style.display = 'block';
    document.getElementById('mytimerreset').style.display = 'none';
    document.getElementById('negtimer').style.display = 'flex';
    document.getElementById('timerinputedit').style.display = 'flex';
    document.getElementById('postimer').style.display = 'flex';
    document.getElementById('mytimer').style.animationName = 'idk';
    document.getElementById('arctimer').style.opacity = '0';
    document.getElementById('mytimer').style.marginTop = '0px';
}
function limiter(input) {
    if (input.value < 0) {
        input.value = 0;
        getInputValuehrs();
    }
    else if (input.value == "") {
        console.log('alert');
    }
    else {
        getInputValuehrs();
    }
    document.getElementById("inputhr").style.opacity = '0';
}
function getInputValuehrs() {
    let inputVal = document.querySelector("#inputhr").value;
    count = (count * 0) + (min * 60);
    hours = (hours * 0);
    let mintext = 0;
    minfunc = setInterval( 
        function hourstextadd() {
            if (mintext < inputVal) {
                addonehr();
                mintext = mintext + 1;
            }
            else if (mintext == inputVal) {
                hours = 0;
                smallbasetimer();
                mintext = mintext + 1;
            }
            else {
                clearInterval(minfunc);
            }
        }
    , 10)
}
function limitermin(input) {
    if (input.value < 0) {
        input.value = 0;
        getInputValuemin();
    }
    else if (input.value > 59) {
        input.value = 59;
        getInputValuemin();
    }
    else if (input.value == "") {
        console.log('alert');
    }
    else {
        getInputValuemin();
    }
    document.getElementById("inputmin").style.opacity = '0';
}
function getInputValuemin() {
    let inputValmin = document.querySelector("#inputmin").value;
    count = (count * 0) + (hr * 3600);
    minutes = minutes * 0;
    let hourtext = 0;
    hrfunc = setInterval( 
        function hourstextadd() {
            if (hourtext < inputValmin) {
                addsixtysec();
                hourtext = hourtext + 1;
            }
            else if (hourtext == inputValmin) {
                minutes = 0;
                smallbasetimer();
                hourtext = hourtext + 1;
            }
            else {
                clearInterval(hrfunc);
            }
        }
    , 10)
}
function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
    var angleInRadians = (angleInDegrees-90) * Math.PI / 180.0;
    return {
        x: centerX + (radius * Math.cos(angleInRadians)),
        y: centerY + (radius * Math.sin(angleInRadians))
    };
}
function describeArc(x, y, radius, startAngle, endAngle) {
    var start = polarToCartesian(x, y, radius, endAngle);
    var end = polarToCartesian(x, y, radius, startAngle);
    var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
    var d = [
        "M", start.x, start.y, 
        "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
    ].join(" ");
    return d;       
}
window.onload = function() {
    setInterval( 
        function() {
            degchange = 360*(count/((min*60)+(hr*3600)))
            document.getElementById("arc1").setAttribute("d", describeArc(80, 80, 75, 0, degchange));
        }
    ), 1000;
};
