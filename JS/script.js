const block=document.getElementsByClassName('block');

document.addEventListener('keydown',function(e){
    let code=e.key;
    if(code>=0 && code<=9){
        writeFunction(code);
    }
    if(code==='Backspace'){
        remFunction();
    }
})

function writeFunction(keyCode){
    for(let i=0;i<block.length;i++){
        if(block[i].classList.contains('active')){
                block[i].innerHTML=keyCode;
                if(block[i+1]){
                    block[i].classList.remove('active');
                    block[i+1].classList.add('active');
                }
                return;
        }
    }
}

function remFunction(){
    for(let i=0;i<block.length;i++){
        if(block[i].classList.contains('active')){
                block[i].innerHTML='-';
                if(block[i-1]){
                    block[i].classList.remove('active');
                    block[i-1].classList.add('active');
                }
                return;
        }
    }
}