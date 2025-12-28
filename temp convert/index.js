
function convert(){
    let inpt=document.getElementById("inputt").value;
    let out=document.getElementById("result");
    let ff=document.getElementById("from");
    let err1=document.getElementById("dboxer");

    
    if(inpt.length===0)out.innerText="no input";
    if (ff.value === "") {
        err1.innerText = "❌ No option selected";
    } else {
        err1.innerText = "✅ Selected: " + select.value;
    }
}
