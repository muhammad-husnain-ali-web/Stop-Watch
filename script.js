let hour = document.querySelector(".hour")
let min = document.querySelector(".min")
let sec = document.querySelector(".sec")
let btn = "start"

let btnstart = document.querySelector(".start")
let btnreset = document.querySelector(".reset")
let h=m=s=0;
let cl = null;

// Start clock 
function startclock()
{
    cl = setInterval(() => {
        s++;
        if(s==60)
        {
            s=0;
            m++;
        }
        if(m==60)
        {
            m=0;
            h++;
        }
        if(h==13)
        {
            h=1;
            h++;
        }
        if(s <=9)
        {
            sec.innerText = "0" + s;
        }
        else
        {
            sec.innerText = s;
        }

        if(m <=9)
        {
            min.innerText = "0" + m;
        }
        else
        {
            min.innerText = m;
        }

        if(h <=9)
        {
            hour.innerText = "0" + h;
        }
        else
        {
            hour.innerText = h;
        }
    }, 1000);

    btnstart.classList.add("stopColor")
    btnstart.classList.remove("startColor")
    btnstart.innerText = "Stop"
    btn = "stop"
}

// Stop clock
function stopclock()
{
        clearInterval(cl)
        
        btnstart.classList.add("startColor")
        btnstart.innerText = "Start"
        btn = "start"
}

// reset clock
const resetclock = () =>{
    h=m=s=0;
    hour.innerText = "0" + h;
    min.innerText = "0" + m;
    sec.innerText = "0" + s;
    clearInterval(cl)

    btnstart.classList.add("startColor")
    btnstart.innerText = "Start"
    btn = "start"
}

// start/stop button
btnstart.addEventListener("click", ()=>{
    if(btn == "start")
    {
        startclock();
    }
    else 
    {
        stopclock();
    }
})

// rest button
btnreset.addEventListener("click", ()=>{
    resetclock();
})