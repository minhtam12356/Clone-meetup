function run(){
    if(window.outerWidth >= 768){  
        var ulList = document.getElementsByClassName('ulList');
        ulList[0].style.transform = 'translateX(0px)'
        ulList[0].style.transition = 'all 0.25s'
        var butMoveLeft = document.getElementsByClassName('left');
        var butMoveRight = document.getElementsByClassName('right');
        var text = document.getElementsByClassName('textBox');
        var countUllist = ulList[0].childElementCount;
        var getTransform = ulList[0].style.transform;
        var getString1 = getTransform.split('').slice(11);
        getString1.splice(-2);
        var getString3 = parseInt(getString1.join(''));
        if(getString3 === 0){
            butMoveLeft[0].style.display = 'none';
        }
    
        butMoveLeft[0].addEventListener('click', clickLeft);
        function clickLeft(){
            var getTransform = ulList[0].style.transform;
            var getString1 = getTransform.split('').slice(11);
            getString1.splice(-2);
            var getString3 = parseInt(getString1.join(''));
            butMoveRight[0].style.display = 'inline-flex';
            ulList[0].style.transform = 'translateX(' + (getString3 + 270) + 'px)'
            ulList[0].style.transition = 'all 0.25s'
            if(getString3 + 270 === 0){
                butMoveLeft[0].style.display = 'none';
            }
        }
    
        butMoveRight[0].addEventListener('click', clickRight);
        function clickRight(){
            var getTransform = ulList[0].style.transform;
            var getString1 = getTransform.split('').slice(11);
            getString1.splice(-2);
            var getString3 = parseInt(getString1.join(''));
            butMoveLeft[0].style.display = 'inline-flex';
            ulList[0].style.transform = 'translateX(' + (getString3 - 270) + 'px)'
            ulList[0].style.transition = 'all 0.25s'
            if((getString3 - 270)/-270 === countUllist - 4){
                butMoveRight[0].style.display = 'none';
            }
        }
    
        //2
        var ulList = document.getElementsByClassName('ulList');
        ulList[1].style.transform = 'translateX(0px)'
        ulList[1].style.transition = 'all 0.25s'
        var countUllist = ulList[1].childElementCount;
        var getTransform = ulList[1].style.transform;
        var getString1 = getTransform.split('').slice(11);
        getString1.splice(-2);
        var getString3 = parseInt(getString1.join(''));
        if(getString3 === 0){
            butMoveLeft[1].style.display = 'none';
        }
    
        butMoveLeft[1].addEventListener('click', clickLeft2);
        function clickLeft2(){
            var getTransform = ulList[1].style.transform;
            var getString1 = getTransform.split('').slice(11);
            getString1.splice(-2);
            var getString3 = parseInt(getString1.join(''));
            butMoveRight[1].style.display = 'inline-flex';
            ulList[1].style.transform = 'translateX(' + (getString3 + 270) + 'px)'
            ulList[1].style.transition = 'all 0.25s'
            if(getString3 + 270 === 0){
                butMoveLeft[1].style.display = 'none';
            }
        }
    
        butMoveRight[1].addEventListener('click', clickRight2);
        function clickRight2(){
            var getTransform = ulList[1].style.transform;
            var getString1 = getTransform.split('').slice(11);
            getString1.splice(-2);
            var getString3 = parseInt(getString1.join(''));
            butMoveLeft[1].style.display = 'inline-flex';
            ulList[1].style.transform = 'translateX(' + (getString3 - 270) + 'px)'
            ulList[1].style.transition = 'all 0.25s'
            if((getString3 - 270)/-270 === countUllist - 4){
                butMoveRight[1].style.display = 'none';
            }
        }
    }
    
    text[0].addEventListener('focus', clickText);
    function clickText(){
            text[0].value = "";
    }
    text[0].addEventListener('blur', clickText1);
    function clickText1(){
            text[0].value = "Ho Chi Minh City, VN";
    }
    
    
}
run();
