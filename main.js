var counter = 0;

function todo(title,description,dueData){ 
    this.title = title
    this.description = description
    this.dueData = dueData  
};


let creatMyToDo = function(title,description,dueData){ 
    let newToDo = new todo(title,description,dueData) 
    return newToDo
}
let creatTheList = function(newToDo){ 
    var div = document.querySelector(".divMod")
    var divMyToDo = document.createElement("div")
    divMyToDo.setAttribute("class" , "divMyTOdo")
    var divTitle = document.createElement("div")
    divTitle.setAttribute("class" , "titleMyTodo")
    var htitle = document.createElement("h4")
    htitle.textContent = newToDo.title
    var hdate = document.createElement("h4")
    hdate.textContent = newToDo.dueData
    var Pdiscrption = document.createElement("p")
    Pdiscrption.textContent = newToDo.description
    var btnEdit = document.createElement("button")
    btnEdit.setAttribute("class","btnEdit")
    var imgedit = document.createElement("img")
    imgedit.setAttribute("id",`${counter}`)
    imgedit.src = "edit.png"
    btnEdit.appendChild(imgedit)

    var btnDelete = document.createElement("button")
    btnDelete.setAttribute("class","btnDelete")
    var imgDelete = document.createElement("img")
    imgDelete.setAttribute("id",`${counter}`)
    imgDelete.src = "delet.png"
    btnDelete.appendChild(imgDelete)


    divTitle.appendChild(htitle)
    divTitle.appendChild(hdate)
    divMyToDo.appendChild(divTitle)
    divMyToDo.appendChild(Pdiscrption)
    divMyToDo.appendChild(btnEdit)
    divMyToDo.appendChild(btnDelete)
    div.appendChild(divMyToDo)
    counter++

}
var creatTOdayProject = function(){ 
    let  titleToDay = document.createElement("h1")
    titleToDay.textContent= "Today list"
    let divh1 = document.createElement("div")
    divh1.setAttribute("class","divRemove")
    let btn = document.createElement("button")
    btn.setAttribute("class" , "btn")
    btn.textContent = "+"
    let div = document.createElement("div")
    div.setAttribute("class", "divMod divRemove")
    divh1.appendChild(titleToDay)
    affichage.appendChild(divh1)
    div.appendChild(btn)
    affichage.appendChild(div) 
}


    







var removeproject = function(array){ 
    var divremove = document.querySelectorAll(".divRemove")
    divremove.forEach(e => {
        e.remove();        
    });
   creatTOdayProject();
   array.forEach(e => {
    creatTheList(e)
   });
   counter = 0;
   
}

let removeTheToDoList = function(array){ 
     var divremoveTodoList = document.querySelectorAll(".divMyTOdo")
    divremoveTodoList.forEach(e => {
        e.remove();        
    });
   array.forEach(e => {
    creatTheList(e)
   });
   counter = 0;
}



let affichage = document.querySelector(".affichage")
let  btnToDay = document.querySelector("#today")
let arrayOfToday = [];
let dialog = document.querySelector("#dialog")





btnToDay.addEventListener("click",function(){ 
    removeproject(arrayOfToday);
   
    let btnCreation = document.querySelector(".btn")
    btnCreation.addEventListener("click", function(){ 
        dialog.showModal()
       
   });
   }); 
    var confirme = document.querySelector("#confirme")
    confirme.addEventListener("click",function(e){
        e.preventDefault();
        dialog.close(title.value ,description.value , dueData.value );
        let hamza =  creatMyToDo(title.value ,description.value , dueData.value )
        arrayOfToday.push(hamza)
        data();
        removeTheToDoList(arrayOfToday)
    });
     
    
    
    let cancelbtn = document.getElementById("cancel")

    cancelbtn.addEventListener("click", function(event){ 
    event.preventDefault(); 
    dialog.close();
});



 var titleEdit = document.getElementById("titleEdit")
 var descriptionEdit = document.getElementById("descriptionEdit")
 var dueDataEdit = document.getElementById("dueDataEdit")
 var dialogEdit = document.querySelector("#dialogEdit")
 var confirmEditbtn = document.querySelector("#confirmeEdit")

 let object = new todo("","","")
affichage.addEventListener("click",function(event){
    
    if (event.target.tagName = 'BUTTON' && event.target.parentElement.className == 'btnEdit' ) { 
             let  index = event.target.id
            console.log(index)
            object = arrayOfToday[index]    

            titleEdit.value = object.title
            descriptionEdit.value = object.description
            dueDataEdit.value = object.dueData
            dialogEdit.showModal()
       
        
      
       
       confirmEditbtn.addEventListener("click",function(e){
           e.preventDefault();
       dialogEdit.close(titleEdit.value ,descriptionEdit.value , dueDataEdit.value );
       console.log(object)
       object.title = titleEdit.value
       object.description = descriptionEdit.value
       object.dueData = dueDataEdit.value
       data()
       removeTheToDoList(arrayOfToday);
});
}else if (event.target.tagName = 'BUTTON' && event.target.parentElement.className == 'btnDelete' ){ 
    let  index2 = event.target.id
    arrayOfToday.splice(index2,1)
    data()
  removeTheToDoList(arrayOfToday);
}else  if (event.target.tagName = 'BUTTON' && event.target.parentElement.className == 'btnEdit1' ) { 
    let  index12 = event.target.id
   
   object = allProjects[index][index12]    

   titleEdit.value = object.title
   descriptionEdit.value = object.description
   dueDataEdit.value = object.dueData
   dialogEdit.showModal()




confirmEditbtn.addEventListener("click",function(e){
  e.preventDefault();
dialogEdit.close(titleEdit.value ,descriptionEdit.value , dueDataEdit.value );
console.log(object)
object.title = titleEdit.value
object.description = descriptionEdit.value
object.dueData = dueDataEdit.value
data()
removeTheToDoList1(allProjects[index]);
});
}else if (event.target.tagName = 'BUTTON' && event.target.parentElement.className == 'btnDelete1' ){ 
let  index22 = event.target.id
allProjects[index].splice(index22,1)
data()
removeTheToDoList1(allProjects[index]);
}
}); 



//projects part 

let creatNewProject = function(title){
    let divdiv = document.createElement("div")
    divdiv.setAttribute("class","divdiv")
    let div = document.createElement("div")
    div.setAttribute("class","removeprojects ")
    let button = document.createElement("button")
    button.setAttribute("class","btnOfProject")
    button.setAttribute("id",`${counter2}`)
    button.textContent= title
    let delet = document.createElement("button")
    delet.textContent = "X"
    delet.setAttribute("class","supprime")
    delet.setAttribute("id",`${counter2}`)
    div.appendChild(button)
    divdiv.appendChild(div)
    divdiv.appendChild(delet)

    projectContainer.appendChild(divdiv)
    counter2++
}

let removeAllProject = function(){
    let allProjects = document.querySelectorAll(".divdiv")
    allProjects.forEach(e => {
        e.remove();
    });
}

var creatTitleProject = function(title){ 
    let  titleToDay = document.createElement("h1")
    titleToDay.textContent= `${title}`
    let divh1 = document.createElement("div")
    divh1.setAttribute("class","divRemove")
    let btn = document.createElement("button")
    btn.setAttribute("class" , "btn1")
    btn.textContent = "+"
    let div = document.createElement("div")
    div.setAttribute("class", "divMod divRemove")
    divh1.appendChild(titleToDay)
    affichage.appendChild(divh1)
    div.appendChild(btn)
    affichage.appendChild(div) 
}

var removeprojectFromALLProject = function(array,title){ 
    var divremove = document.querySelectorAll(".divRemove")
    divremove.forEach(e => {
        e.remove();        
    });
  creatTitleProject(title)
   array.forEach(e => {
    creatTheList1(e)
   });
   counter = 0;
   
}
var removeprojectFromALLProject1 = function(title){ 
    var divremove = document.querySelectorAll(".divRemove")
    divremove.forEach(e => {
        e.remove();        
    });
  creatTitleProject(title) 
}

let creatTheList1 = function(newToDo){ 
    var div = document.querySelector(".divMod")
    var divMyToDo = document.createElement("div")
    divMyToDo.setAttribute("class" , "divMyTOdo")
    var divTitle = document.createElement("div")
    divTitle.setAttribute("class" , "titleMyTodo")
    var htitle = document.createElement("h4")
    htitle.textContent = newToDo.title
    var hdate = document.createElement("h4")
    hdate.textContent = newToDo.dueData
    var Pdiscrption = document.createElement("p")
    Pdiscrption.textContent = newToDo.description
    var btnEdit = document.createElement("button")
    btnEdit.setAttribute("class","btnEdit1")
    var imgedit = document.createElement("img")
    imgedit.setAttribute("id",`${counter}`)
    imgedit.src = "edit.png"
    btnEdit.appendChild(imgedit)

    var btnDelete = document.createElement("button")
    btnDelete.setAttribute("class","btnDelete1")
    var imgDelete = document.createElement("img")
    imgDelete.setAttribute("id",`${counter}`)
    imgDelete.src = "delet.png"
    btnDelete.appendChild(imgDelete)


    divTitle.appendChild(htitle)
    divTitle.appendChild(hdate)
    divMyToDo.appendChild(divTitle)
    divMyToDo.appendChild(Pdiscrption)
    divMyToDo.appendChild(btnEdit)
    divMyToDo.appendChild(btnDelete)
    div.appendChild(divMyToDo)
    counter++

}

let removeTheToDoList1 = function(array){ 
    var divremoveTodoList = document.querySelectorAll(".divMyTOdo")
   divremoveTodoList.forEach(e => {
       e.remove();        
   });
  array.forEach(e => {
   creatTheList1(e)
  });
  counter = 0;
}






let projectContainer = document.querySelector(".divOfProjects");
let counter2 = 0;
let allProjects = [];
let alltitles = [];
let index;
let btnOfAllProjects = document.querySelector("#projects");
let dialog1 = document.querySelector("#dialog1")

let dialog2 = document.querySelector("#dialog2")
let title2 = document.getElementById("title2")
let confirme2 = document.getElementById("confirme2")



btnOfAllProjects.addEventListener("click",function(){ 
    dialog2.showModal();

})
    confirme2.addEventListener("click",function(e){
        e.preventDefault();
        dialog2.close(title2);
        
        
    
    let title = title2.value
    let myarray = [];
    allProjects.push(myarray)
    alltitles.push(title)
    
    removeAllProject();
    alltitles.forEach(e => {
        creatNewProject(e)
    });
    counter2 = 0;
    removeprojectFromALLProject1(title);
    index = allProjects.length-1
    data()

    let btnCreation1 = document.querySelector(".btn1")
    btnCreation1.addEventListener("click", function(){ 
    dialog1.showModal()
})

})




    
projectContainer.addEventListener("click",function(event){
    
    if (event.target.tagName = 'BUTTON' && event.target.className == 'btnOfProject' ){ 
          index = event.target.id
        
         
        removeprojectFromALLProject(allProjects[index],alltitles[index])
     data();
     let btnCreation1 = document.querySelector(".btn1")
     btnCreation1.addEventListener("click", function(){ 
     dialog1.showModal()});
    
    }else if (event.target.tagName = 'BUTTON' && event.target.className == 'supprime' ){
        let indexOfSupprime = event.target.id
        console.log(indexOfSupprime)
        alltitles.splice(indexOfSupprime,1)
        allProjects.splice(indexOfSupprime,1)
        removeAllProject();
        alltitles.forEach(e => {
            creatNewProject(e)
            
        });
        counter2 = 0;
        if(index == indexOfSupprime){ 
            var divremove = document.querySelectorAll(".divRemove")
            divremove.forEach(e => {
                e.remove();        
            });
        }
        index--;
        data()
    }
   
   


    
});


    var confirme1 = document.querySelector("#confirme1")
    confirme1.addEventListener("click",function(e){
        e.preventDefault();
        dialog1.close(title1.value ,description1.value , dueData1.value );
        let hamza =  creatMyToDo(title1.value ,description1.value , dueData1.value )
        console.log(index)
        allProjects[index].push(hamza)
        data()
        removeTheToDoList1(allProjects[index])
    });

     
    
    
    let cancelbtn1 = document.getElementById("cancel1")

    cancelbtn1.addEventListener("click", function(event){ 
    event.preventDefault(); 
    dialog1.close();

});

let data = function(){ 
    localStorage.setItem("arrayOfToday",JSON.stringify(arrayOfToday));
    localStorage.setItem("allProjects",JSON.stringify(allProjects));
    localStorage.setItem("alltitles",JSON.stringify(alltitles));
    localStorage.setItem("index",JSON.stringify(index));
}



arrayOfToday = JSON.parse(localStorage.getItem("arrayOfToday"))
allProjects = JSON.parse(localStorage.getItem("allProjects"))
alltitles = JSON.parse(localStorage.getItem("alltitles"))
index = JSON.parse(localStorage.getItem("index"))

alltitles.forEach(e => {
    creatNewProject(e)
});


