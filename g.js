
const basketBall=document.querySelector('.basket-ball');
const line=document.querySelector('.line');
const score=document.querySelector('.display');


let transferY=0;
let transferX=0;
let sc=0;
let c=1;
let x;
let con;
let ad = new Audio('s.mp3');
basketBall.addEventListener('click',()=>{
  let rect=basketBall.getBoundingClientRect();
  ad.play();
  line.style.backgroundColor='red';
  score.style.border='0.4rem solid red'

  motion();
  console.log('went-up');

  setTimeout(checkgn,1000); 

  if(rect.top<=300)setTimeout(backtoPOS,100);
  else if(rect.top<=400 && rect.top>=301)
  setTimeout(backtoPOS,300);  
  else if(rect.top>=401 && rect.top<=550)setTimeout(backtoPOS,500);
  else  setTimeout(backtoPOS,700);

  
  console.log('c',c);
  c++;
})

function backtoPOS(){

  
  basketBall.style.transform=`translate(${2*x}%,${0}%)`;
  
  basketBall.addEventListener('click',()=>{
    motion();
    clearTimeout(backtoPOS);
  });

  setTimeout(checkgn,1000);  
}


  function checkgn()
  {
 
    let rect=basketBall.getBoundingClientRect();
    console.log("line.getBoundingClientRect() in callback: \n" + "x: " + rect.left + "\ny: " + rect.top);
  
   if(rect.top>='642' && rect.top<='660')
   {
    score.textContent='0'
    console.log('you lose',x);
    line.style.backgroundColor='green';
    score.style.border='0.4rem solid green'
    sc=0;
    basketBall.style.transform=`rotate(${-2*x}deg)`
    basketBall.style.transform=`transferX(${2*x}%);`
    
  }
   else{

    setTimeout(increaseCounter,0);
   }

  }

  function increaseCounter()
  {
     sc++;
     score.textContent=sc;
  }
 
 function motion(){
  ad.play();  
 
  const directionDeterminer=Math.floor(Math.random()*11);

  if(directionDeterminer<=5 &&directionDeterminer>=0)
  {
    x=100;
   basketBall.style.transform=`translate(${x}%, ${-350}px)`;


  }
  else
  {
    x=-100;
   basketBall.style.transform=`translate(${x}%, ${-350}px)`;

  }
   

 }


  //console.log('up',valueUp);
 // console.log('right',valueRight);
 // console.log('left',valueLeft);
  //console.log('dd',directionDeterminer);
 // console.log('trasnderX',transferX);
// console.log('trasnderY',transferY);
  
