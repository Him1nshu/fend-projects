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

    
    if (ff.value === tt.value && tt.value!="" && ff.value!="") {
        out.innerText ="same type conversion";
        }

        
    // if (ff.value === "fn" && tt.value === "fn") {
    //     out.innerText ="same type conversion";
    //     }

        
    // if (ff.value === "kl" && tt.value === "kl") {
    //     out.innerText ="same type conversion";
    //     }

    
    // if (ff.value === "cl" && tt.value === "cl") {
    //     out.innerText ="same type conversion";
    //     }

    else if (ff.value === "cl" && tt.value === "kl") {
        out.innerText = inpt+"C="+(Number(inpt) + 273.15)+"K";
    }
    
    else if (ff.value === "cl" && tt.value === "fn") {
        out.innerText = inpt+"C="+((Number(inpt)*(9/5)) + 32)+"F";
    }

    else if (ff.value === "kl" && tt.value === "cl") {
        out.innerText = inpt+"K="+(Number(inpt) - 273.15)+"C";
    }
    
    else if (ff.value === "kl" && tt.value === "fn") {
        out.innerText = inpt+"K="+((Number(inpt) - 273.15)*(9/5)+32)+"F";
    }


    else if (ff.value === "fn" && tt.value === "cl") {
        out.innerText =inpt+"F="+((Number(inpt) - 32)*(5/9))+"C";
        }

    else if (ff.value === "fn" && tt.value === "kl") {
        out.innerText =inpt+"F="+((Number(inpt) - 32)*(5/9)+273.15)+"K";
        }


    
    
}
