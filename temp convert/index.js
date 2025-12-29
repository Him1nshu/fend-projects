function convert(){
    let inpt = document.getElementById("inputt").value;
    let out = document.getElementById("result");
    let ff = document.getElementById("from");
    let tt = document.getElementById("to");
    let err1 = document.getElementById("dboxer");
    let err2 = document.getElementById("dboxer2");

    err1.innerText = "";
    err2.innerText = "";
    out.innerText = "";

    if (inpt.length === 0) {
        out.innerText = "no input";
        
    }

    if (ff.value === "") {
        err1.innerText = "No FROM option selected";
        
    }

    if (tt.value === "") {
        err2.innerText = "No TO option selected";
    }

    // Celsius -> Kelvin
    if (ff.value === "cl" && tt.value === "kl") {
        out.innerText = inpt+"C="+(Number(inpt) + 273.15)+"K";
    }
}
