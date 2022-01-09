let s=document.getElementById("screen");
let buttons=document.querySelectorAll(".btn");
precolor="";
prebackcolor="";
for (const btn of buttons) 
{
    btn.addEventListener("click", (b)=>{
        btext = b.target.innerText;
        console.log(b);
        if(btext == "C")
        {
            s.value = "";
        }
        else if(btext == "=")
        {
            s.value = eval(s.value); 
        }
        else
        {
            s.value += btext;
        }
    })
    btn.addEventListener("mouseover", (b)=>{
        e = b.target;
        precolor = e.style["color"];
        prebackcolor=e.style["background-color"];
        e.style["background-color"]="black";
        e.style["color"]="white";
    })
    btn.addEventListener("mouseout", (b)=>{
        e = b.target;
        e.style["background-color"]=prebackcolor;
        e.style["color"]=precolor;
    })
}