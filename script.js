//div on click diet systems page
var div1= document.getElementById("cont1");
var div2= document.getElementById("cont2");
var div3= document.getElementById("cont3");
var div4= document.getElementById("cont4");
var div5= document.getElementById("cont5");
var div6= document.getElementById("cont6");
var div7= document.getElementById("cont7");
var div8= document.getElementById("cont8");
var div9= document.getElementById("cont9");
//---------functions of diet system pages--------------
function breakfastdivClick(){
  
   div1.innerHTML=
   "<img src='css/images/breakfast1.jpg'> <h4>PALEO BANANA BREAD</h4>  <a href='https://youtu.be/ADWFDx3deAk' target='_blank'> <span><i class='fab fa-youtube'></i></span> recipe</a> "
   div1.style.backgroundColor="#3fa597";
   div2.style.display="none";
   div3.style.display="none";
   div1.style.display="block";
}

function lunchdivClick(){
   
    div2.innerHTML=
    " <img src='css/images/lunch1.jpg'><h4>Chinese Chicken Salad</h4><a href='https://youtu.be/Dw0smx9gAVU' target='_blank'> <span><i class='fab fa-youtube'></i></span> recipe</a>"
    div2.style.backgroundColor="#3fa597";
    div1.style.display="none";
   div3.style.display="none";
   div2.style.display="block";
 }

 function dinnerdivClick(){
   
    div3.innerHTML=
    "<img src='css/images/dinner1.jpg'><h4>Ginger Carrot Soup.</h4><a href='https://youtu.be/TzVArIFQB64' target='_blank'> <span><i class='fab fa-youtube'></i></span> recipe</a>"
    div3.style.backgroundColor="#3fa597";
    div1.style.display="none";
   div2.style.display="none";
   div3.style.display="block";
 }

//------------------------second page--------------------------------------
function breakfastdivClick2(){
  
    div4.innerHTML=
    "<img src='css/images/breakfast2.jpg'> <h4>Vegan Banana Pancakes</h4>  <a href='https://youtu.be/f6gSUzNQeU4' target='_blank'> <span><i class='fab fa-youtube'></i></span> recipe</a> "
    div4.style.backgroundColor="#3fa597";
    div5.style.display="none";
    div6.style.display="none";
    div4.style.display="block";
 }

 function lunchdivClick2(){
   
    div5.innerHTML=
    " <img src='css/images/lunch2.jpg'><h4>Vegan Greek Salad</h4><a href='https://youtu.be/h49NODQRAaA' target='_blank'> <span><i class='fab fa-youtube'></i></span> recipe</a>"
    div5.style.backgroundColor="#3fa597";
    div4.style.display="none";
   div6.style.display="none";
   div5.style.display="block";
 }

 function dinnerdivClick2(){
   
    div6.innerHTML=
    "<img src='css/images/dinner2.jpg'><h4>Vegetable Paella</h4><a href='https://youtu.be/KiXU6AJ6mIo' target='_blank'> <span><i class='fab fa-youtube'></i></span> recipe</a>"
    div6.style.backgroundColor="#3fa597";
    div5.style.display="none";
   div4.style.display="none";
   div6.style.display="block";
 }

 //-----------------third page----------------------------

 function breakfastdivClick3(){
  
    div7.innerHTML=
    "<img src='css/images/breakfast3.jpg'> <h4>Muffins</h4>  <a href='https://youtu.be/X4qJZsgae2M' target='_blank'> <span><i class='fab fa-youtube'></i></span> recipe</a> "
    div7.style.backgroundColor="#3fa597";
    div8.style.display="none";
    div9.style.display="none";
    div7.style.display="block";
 }

 function lunchdivClick3(){
   
    div8.innerHTML=
    " <img src='css/images/lunch3.jpg'><h4>grilled chicken breast</h4><a href='https://youtu.be/2VxNqBe267Y' target='_blank'> <span><i class='fab fa-youtube'></i></span> recipe</a>"
    div8.style.backgroundColor="#3fa597";
    div7.style.display="none";
   div9.style.display="none";
   div8.style.display="block";
 }

 function dinnerdivClick3(){
   
    div9.innerHTML=
    "<img src='css/images/dinner3.jpg'><h4>dukan cheesecake</h4><a href='https://youtu.be/B_Hp3dwBupA' target='_blank'> <span><i class='fab fa-youtube'></i></span> recipe</a>"
    div9.style.backgroundColor="#3fa597";
    div8.style.display="none";
   div7.style.display="none";
   div9.style.display="block";
 }
//----------------------------------------------------------//
//--------register page-------------------------------------//
function register(){
    //alert("Registered Successfully")
    let formDiv=document.getElementById("FID");
    let firstName=document.getElementById("firstName");
    let lastName=document.getElementById("lastName");
    let phoneNumber=document.getElementById("phoneno");
    let email=document.getElementById("email");
    if(firstName.value.length==0
        ||lastName.value.length==0
        ||phoneNumber.value.length==0
        ||email.value.length==0)
    {
        alert("please enter full info");
        event.preventDefault();
    }
    else{
        formDiv.innerHTML="<h1 style='color:white;text-align:center;font-family:'Sofia''>Registered Successfully</h1>"
    }
    
}
   
