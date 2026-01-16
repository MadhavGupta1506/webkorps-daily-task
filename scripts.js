/*let input;
input=prompt("Enter a marks:");
if(input>=80){
    alert("A Grade");
}
else if(70<=input && input<80){
    alert("B Grade");
}
else if(60<=input && input<70){
    alert("C Grade");
}
else if(50<=input && input<60){
    alert("D Grade");
}
else{
    alert("F Grade");
}*/

// loops

// for (let i=1;i<=100;i+=1){
// if(!(i&1))
// console.log(i);
// }

// let val=20
// input=prompt("Enter a number:");
// while(val!=input){
//     input=prompt("Enter a number:");
// }
// alert("You have entered the correct number");

// let input;
// input=prompt("Enter full name")
// console.log("username is: " + "@" + input+ input.length);

// arr=[85,97,44,37,76,60]
// let s=0
// for( let i=0; i<arr.length; i++){
//     arr[i]=arr[i]-0.1*arr[i];
// }
// console.log(arr);

// arr=["bloomerg","microsoft","google","apple","uber","facebook"]
// arr.splice(0,1)
// console.log(arr);
// arr.splice(3,1,"ola");
// // arr.push("amazon");
// console.log(arr);

// const arrowfunc=(a,b)=>{ return a*b};

// const countVowel=(str)=>{
//     let count=0;
//     for(ch of str){
//         if(ch=="a" || ch=="e" || ch=="i" || ch=="o" || ch=="u" )
//             count++

//     }
//     return count
// }
// console.log(countVowel('ahello world'))

// let arr=[101,112,103,50,61,74,89,21,121]

// FOR EACH METHOD
// arr.forEach((val,arr)=> {
// console.log(val*val,arr);
// });

// MAP METHOD
// let newArr=arr.map((val)=>{
//     return val
// })

// FILTER METHOD
// let newArr=arr.filter((val)=>{
// return val%2==0
// })
//
// console.log(newArr)

// REDUCE METHOD
// const final=arr.reduce((maxx,curr)=>{
//     return maxx>curr?maxx:curr
// })

// console.log(final)

// const ans= arr.filter((val)=>{
//     return val>90
// })
// console.log(ans)

// let n=prompt("Enter a number n:");
// let  arr=[];

// for(let i=1;i<=n;i++){
//     arr[i-1]=i;
// }
// console.log(arr)

// let sum=arr.reduce((val,curr)=>{
//     return val+curr
// })
// console.log(sum)

// let prod=arr.reduce((val,curr)=>{
//     return val* curr
// })
// console.log(prod)

// document.getElementById("onButton").onclick(()=>bulbFunc(1));
// function bulbFunc(state){
//     if(state==1){
//         console.dir(document.getElementsByClassName("circle"));
//     }

//     return true
// }

let body=document.querySelector("body");
let onButton= document.getElementById("onButton");
let light=1
onButton.addEventListener("click",()=>{
  light=light==1?0:1;
    bulbFunc(light)
    swapMode(light)

})

function swapMode(mode){
  if(mode==0){

    body.style.backgroundColor="#1a1616"
    body.style.color="White"
    mouse.style.backgroundColor="rgba(0, 255, 255, 0.6)";
  }
  else{
    body.style.color="Black";
    body.style.backgroundColor="White";
    mouse.style.backgroundColor="Yellow";
    mouse.style.boxShadow= "0 0 15px Yellow, 0 0 30px Yellow";
  } 
}


function bulbFunc(state) {
  let circle = document.getElementsByClassName("circle")[0];
  let rectangle = document.getElementsByClassName("rectangle")[0];

  if (state === 1) {
    circle.style.backgroundColor = "Yellow";
    rectangle.style.backgroundColor = "Yellow";
    rectangle.style.boxShadow= "0 0 4px 5px rgb(242, 242, 118)";
    circle.style.boxShadow= "0 0 25px 10px rgb(242, 242, 118)";
    rectangle.style.borderTopColor="Yellow";

  } else {
    rectangle.style.boxShadow= "None";
    circle.style.boxShadow= "None";
    
    circle.style.backgroundColor = "Wheat";
    rectangle.style.backgroundColor = "Wheat";
    rectangle.style.borderTopColor="Wheat";

  }
}
function changeText() {
  let hello = document.querySelector("h1");
  hello.innerText += " This is Madhav";
  let divs = document.getElementsByClassName("box");

  divs[0].innerText = "Hello World";
  divs[1].innerText = "THis is madhav";
  divs[2].innerHTML = "Random text";
}


let clickButton=document.createElement("button");
clickButton.style.color="White";
clickButton.style.backgroundColor="Red";
clickButton.style.height="50px"
clickButton.innerText="Click Me!"

clickButton.style.width="100px"
body.prepend(clickButton)

let newPara=document.createElement("p");
newPara.innerText="Hello This is new para";
newPara.classList.add("newClass");

let mouse=document.querySelector(".mouse");
document.addEventListener("mouseover",(evt)=>{
  mouse.style.left=evt.clientX+"px";
  mouse.style.top=evt.clientY+"px";
  
  
})

document.addEventListener("mouseover", () => {
  mouse.style.opacity = "1";
});

document.addEventListener("mouseout", () => {
  mouse.style.opacity = "0";
});
document.addEventListener("DOMContentLoaded", () => {

  const mouse = document.querySelector(".mouse");

  let x = 0, y = 0;
  let targetX = 0, targetY = 0;

  document.addEventListener("mousemove", (e) => {
    targetX = e.clientX;
    targetY = e.clientY;
  });

  function animate(){
    // smooth follow effect
    x += (targetX - x) * 0.15;
    y += (targetY - y) * 0.15;

    mouse.style.left = x + "px";
    mouse.style.top  = y + "px";

    requestAnimationFrame(animate);
  }

  animate();
});




// const func=(id)=>{setTimeout(()=>{
//   console.log("Hello",id)
//   func(id-1)
// },1000)
// }
// func(100)



const URL="https://dragonball-api.com/api/characters/1";

const getData=async ()=>{
  let response= await fetch(URL);
  console.log(response);
  let data=await response.json()
  console.log(data.description)
};
getData();