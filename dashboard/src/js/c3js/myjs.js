
document.querySelectorAll('[id$=-title').forEach((x)=>{
    x.addEventListener('click',gotoContent);
});




function gotoContent(){
    window.location = "./contentPage.html";
    
}

