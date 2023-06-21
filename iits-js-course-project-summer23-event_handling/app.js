// Your solution goes here.
// Hints:
// -> Handle the onsubmit function using attribute or js event listener.
// -> Take the value of input, calculate the grade and update ui.
// -> Maximum number can be 100
// -> Clear the input field after value submission
let formSubmit = document.getElementById("iits-formSubmit");
let inPut = document.getElementById("iits-inp");
let button = document.querySelector("button");
let aCount = document.getElementById("iits-a_count"); 
let bpCount = document.getElementById("iits-bp_count"); 
let bCount = document.getElementById("iits-b_count"); 
let bmCount = document.getElementById("iits-bm_count"); 
let cCount = document.getElementById("iits-c_count"); 
let fpCount = document.getElementById("iits-f_count"); 
let ValueOfinput;
let i1 = 0,i2 = 0,i3 = 0,i4 = 0,i5 = 0,i6 = 0;
function s() 
{
  if (ValueOfinput >= 81 && ValueOfinput <= 100)
   {
    i1++;
    aCount.textContent = i1;
  }
   else if (ValueOfinput >= 71 && ValueOfinput <= 80)
    {
    i2++;
    bpCount.textContent = i2;
  } 
  else if (ValueOfinput >= 61 && ValueOfinput <= 70) 
  {
    i3++;
    bCount.textContent = i3;
  }
   else if (ValueOfinput >= 51 && ValueOfinput <= 60)
    {
    i4++;
    bmCount.textContent = i4;
  }
   else if (ValueOfinput >= 40 && ValueOfinput <= 50)
    {
    i5++;
    cCount.textContent = i5;
  }
   else 
   {
    i6++;
    fpCount.textContent = i6;
  }
}
formSubmit.addEventListener("submit", function eventbutton(event)
 {
  if (inPut.value <= 100) 
  {
    ValueOfinput = parseFloat(inPut.value);
    console.log(ValueOfinput);
    event.preventDefault();
  } else
   {
    alert("Maximum value should be 100");
  }
  inPut.value = "";
  s();
});