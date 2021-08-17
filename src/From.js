import React from 'react';
import "./Form.css";
import firebase from "./firebase";

function toogle(event){
    event.preventDefault();
    //console.log("Hello");
    if(document.querySelector(".name1").value !== "" && document.querySelector(".name2").value !== ""){
        document.querySelector(".Result-div").classList.add("Result-div-On");
        document.querySelector("i.refresh-icon").classList.add("r-i-on");
        let perc = calculate(document.querySelector(".name1").value,document.querySelector(".name2").value);
        firebase.database().ref("-app/-anonymous/").push({
          person_1: document.querySelector(".name1").value,
          person_2: document.querySelector(".name2").value,
          percentage: perc
      });
    }else{
      alert("Please Fill The Names");
    }
  }

function sumOfDigits(num)
{
    let sum0=0;
    while(num>0)
    {
        sum0+=(num%10);
        num/=10;
    }
    return sum0;
}

function ord(str){
  return str.charCodeAt(0);
}
  
function calculate(name1, name2){
  name1 = name1.toLowerCase();
  name2 = name2.toLowerCase();
  let sum1 = 0;
  let sum2 = 0;
  for(let i=0; i<name1.length; i++){
    sum1 = ord(name1[i]);
  }
  for(let i=0; i<name2.length; i++){
    sum2 = ord(name2[i]);
  }
  //console.log(sum1, sum2);
  let perc=(sumOfDigits(sum1)+sumOfDigits(sum2))+60;
  if(perc>100) perc=100;
  setNum(perc);
  return perc;
}

function setNum(num){
  let n_3 = parseInt(num/100);
  num %= 100;
  let n_2 = parseInt(num/10);
  num %= 10;
  let n_1 = parseInt(num);
  // console.log(n_1);
  // console.log(n_2);
  // console.log(n_3);
  document.querySelector(".n_3").innerHTML = n_3;
  document.querySelector(".n_2").innerHTML = n_2;
  document.querySelector(".n_1").innerHTML = n_1;
  document.querySelectorAll(".pers span").forEach(flow);
}
function flow(item){
  let endNum = parseInt(item.innerHTML);
  let x = 0;
  setInterval(function(){
    if(x <= endNum){
      item.innerHTML = x;
      x+=1;
    }
  }, 70);
}

function From() {
  return (
    <div className="form-app">
        <form className="checkForm">
            <input type="text" className="name1" placeholder="Your Name"/>
            <input type="text" className="name2" placeholder="Your Partners Name"/>
            <button type="submit" onClick={toogle}>Calculate</button>
        </form>
    </div>
  );
}

export default From;
