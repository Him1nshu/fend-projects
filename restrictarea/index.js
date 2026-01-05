
    const n=document.getElementById("ta");
    const ww=document.getElementById("wc");
    n.addEventListener("input", () => {
    ww.textContent=n.value.length+"/250";
    if(n.value.length>250){
        n.style.color="red";
        n.disabled=true;
    }
});
