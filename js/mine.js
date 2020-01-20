


    var contacts ;

if(localStorage.getItem("ourContacts") == null)
    {
        contacts=[];
    }
else
    {
        contacts = JSON.parse(localStorage.getItem("ourContacts")) ;
    }
   
   
   

displayData()








function searchItem()
{
    
    var eluserMwgood = false;
    var userStringSearch = document.getElementById("uSearch").value;
    
    for(var i=0;i<contacts.length ;i++)
        {
            if(contacts[i].uName == userStringSearch)
                {
                    eluserMwgood = true;
                }
        }
    
    if(eluserMwgood == false)
        {
            alert("user not exist")
        }
    else
    {
        alert("user exist")
    }
    
    
    
    
}

















function Add()
{
    
    var userNameValue = document.getElementById("userName").value;
    
    var userPhoneValue = document.getElementById("userPhone").value;
    
    var userAddressValue = document.getElementById("userAddress").value;
    
    var userEmailValue = document.getElementById("userEmail").value;
    
    
    
    if(userNameValue=="" || userPhoneValue=="" || userAddressValue==""||userEmailValue=="")
        {
            alert("Pleaes fill data")
        }
    else
        {
            var person = {
                uName:userNameValue ,
                uPhone:userPhoneValue , 
                uAddress:userAddressValue ,
                uEmail :userEmailValue 
            }

           contacts.push(person);
            
            
    localStorage.setItem("ourContacts" , JSON.stringify(contacts))
            
            

            clearData()
            
            
            

            displayData();
    
        }
    
    
  
    
}



function itemDelete(indexItem)
{
    contacts.splice(indexItem ,1);
    
    localStorage.setItem("ourContacts",JSON.stringify(contacts) );
    
    displayData();
}




function displayData()
{
   
    var AllTrs = "";


    for(var i=0 ; i< contacts.length ; i++)
        {

          AllTrs =AllTrs + "<tr><td>"+contacts[i].uName+"</td><td>"+contacts[i].uPhone+"</td><td>"+contacts[i].uAddress+"</td><td>"+contacts[i].uEmail+"</td><td><button onclick='itemDelete("+i+")' class='btn btn-danger'>delete item</button></td></tr>"


        }


    document.getElementById("myTBody").innerHTML = AllTrs


}


function clearData()
{
    document.getElementById("userName").value = "";
     document.getElementById("userPhone").value = "";
     document.getElementById("userAddress").value = "";
     document.getElementById("userEmail").value = "";
    
}



















/*
var AllTrs = "";


for(var i=0 ; i< emps.length ; i++)
    {
        
      AllTrs =AllTrs + "<tr><td>"+emps[i].name+"</td><td>"+emps[i].age+"</td><td>"+emps[i].salary+"</td></tr>"
        
       
    }


document.getElementById("MyBody").innerHTML = AllTrs


*/

















