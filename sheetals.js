
function renderCafe(doc){

    var lists = document.getElementById('testLists');
   var listContainer = document.createElement('div');
    let propertyphotos = document.createElement('div');
     let listInfo = document.createElement('div');
      let row1 = document.createElement('div');
    var rate = document.createElement('p');
    var title = document.createElement('p');
      let row2 = document.createElement('div');
    var features = document.createElement('ul');
    var carpet = document.createElement('li');
    var status = document.createElement('li');
    var furnish = document.createElement('li');
    var car = document.createElement('li');
    var bath = document.createElement('li');
  
    let row3 = document.createElement('div');
    var description = document.createElement('p');
   let row4 = document.createElement('div');
    var contact = document.createElement('button');
// sytling
lists.style.width ="100%";
lists.style.margin="10px auto";
listContainer.style.width="60%";
listContainer.style.height="36vh";
listContainer.style.margin="0 auto";
listContainer.style.display="flex";
listContainer.style.padding="2vh";
listContainer.style.boxShadow="3px 7px 7px rgba(0, 0, 0, 0.4)";
propertyphotos.style.width="25%";
propertyphotos.style.height="90%";
propertyphotos.style.background="rgba(0, 0, 0, 0.6)";
propertyphotos.style.margin="1%";
listInfo.style.display="flex";
listInfo.style.flexDirection="column";
row1.style.display="flex";
row1.style.margin="0 3vh";
title.style.marginLeft="2vh";
features.style.display="flex";
features.style.height="auto";
features.style.marginLeft="3vh";
carpet.style.border="1px solid black";
carpet.style.padding="2vh";
status.style.border="1px solid black";
status.style.padding="2vh";
furnish.style.border="1px solid black";
furnish.style.padding="2vh";
car.style.border="1px solid black";
car.style.padding="2vh";
bath.style.border="1px solid black";
bath.style.padding="2vh";
row3.style.marginLeft="3vh";
row4.style.marginLeft="3vh";
contact.style.padding="1vh 2vh";

   
    rate.textContent= doc.data().Rate;
    title.textContent= doc.data().HouseNoAdd;
    carpet.textContent= doc.data().CarpetSize;
    status.textContent= doc.data().Status;
    furnish.textContent= doc.data().FurnishingOption;
    car.textContent= doc.data().Parking;
    bath.textContent= doc.data().Bathrooms;
   // description.textContent= doc.data().HouseNoAdd;


    
    description.innerHTML = "A little discription about the property and slowly ends promting the user to click"
    contact.innerHTML = "Contact Now"

   

   
    listContainer.appendChild(propertyphotos);
        listContainer.appendChild(listInfo);
         listInfo.appendChild(row1);
    listInfo.appendChild(row2);
    listInfo.appendChild(row3);
    listInfo.appendChild(row4);
    row1.appendChild(rate);
  row1.appendChild(title);
    row2.appendChild(features);
     row3.appendChild(description);
   row4.appendChild(contact);
    features.appendChild(carpet);
    features.appendChild(status);
    features.appendChild(furnish);
    features.appendChild(car);
    features.appendChild(bath);

    lists.appendChild(listContainer);
}


db.collection('propertyLists').get().then((snapshot) => {
   snapshot.docs.forEach(doc => {
         renderCafe(doc);
}) 
})