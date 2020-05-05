var listingContainer = document.getElementById('listingContainer');

//create a continuous list function
// function renderLists(doc){
//         //creating elements
//         let li = document.createElement('li');

//         // let div1 = document.createElement('div');
//         let photoContainer = document.createElement('div');

//         // let div1 = document.createElement('div');
//         let addressContainer = document.createElement('div');
//         // let localityContainer = document.createElement('div');

//         let div1 = document.createElement('div');
//         let furnishment = document.createElement('div');
//         let rateContainer = document.createElement('div');

//         let description = document.createElement('div');

//         let div2 = document.createElement('div');
//         let contactButton = document.createElement('button');

//         // getting the id of each doc 
//         li.setAttribute('data-id', doc.id);
//         li.style.listStyleType = "none";
//         li.style.width = "30vh";
//         // li.style.border = "1px solid black";
//         li.style.boxShadow = "2px 2px 5px grey";
//         li.style.margin = "2vh 3vh";
//         li.style.paddingTop = "1vh";
//         // li.style.padding = "2vh";

//         photoContainer.style.width = "90%";
//         photoContainer.style.height = "20vh"
//         photoContainer.style.background = "#C4C4C4";
//         photoContainer.style.borderRadius = "5px";
//         photoContainer.style.margin = " auto"

//         addressContainer.style.width = "90%";
//         addressContainer.style.height = "7vh"
//         addressContainer.style.fontSize = "14px";
//         addressContainer.style.margin = "0vh auto";
//         addressContainer.style.fontWeight = "650";
//         // addressContainer.style.border = "1px solid black";

//         div1.style.display = "flex";
//         div1.style.flexDirection = "row";
//         div1.style.width = "90%";
//         // div1.style.height = "5vh";
//         div1.style.margin = "0vh auto";

//         furnishment.style.width = "65%";
//         // furnishment.style.border = "1px solid black";
//         furnishment.style.fontSize = "14px";

//         // rateContainer.style.width = "20%";
//         // rateContainer.style.border = "1px solid black";
//         rateContainer.style.marginLeft = "4vh";
//         rateContainer.style.fontSize = "18px";
//         rateContainer.style.fontWeight = "700";
//         rateContainer.style.color = "green";

//         description.style.width = "90%";
//         description.style.height = "10vh";
//         // description.style.background = "#C4C4C4";
//         description.style.margin = "1vh auto";
//         description.style.padding = "0.5vh";

//         div2.style.margin = "0 auto";
//         div2.style.padding = "1vh"
//         div2.style.width = '90%';
//         // div2.style.alignItems = "center";
//         // div2.style.justifyContent = "center";
//         contactButton.style.width = "20vh";
//         contactButton.style.height = "5vh";
//         contactButton.innerHTML = "Contact";
//         contactButton.style.background = "linear-gradient(90deg, #2C6DD5 0%, #AC1BF0 0.01%, #FF4B5A 83.33%, #FF4B5A 100%)";
//         contactButton.style.color = "white";
//         contactButton.style.fontWeight = "650";
//         contactButton.style.fontSize = "18px";
//         contactButton.style.margin = "1vh auto";
//         contactButton.style.border = "0px solid black";

//         addressContainer.textContent = doc.data().HouseNoAdd;
        
//         furnishment.textContent = doc.data().FurnishingOption;
//         rateContainer.textContent = doc.data().Rate;

//         description.textContent = doc.data().HouseNoAdd;

//         div1.appendChild(furnishment);
//         div1.appendChild(rateContainer);

//         div2.appendChild(contactButton);

//         li.appendChild(photoContainer);
//         li.appendChild(addressContainer);
//         li.appendChild(div1);
//         li.appendChild(description);
//         li.appendChild(div2);
//         // li.appendChild(deleteButton);

//         listingContainer.appendChild(li);

// } 

function renderLists(doc){
        //creating elements
        let li = document.createElement('li');

        // let div1 = document.createElement('div');
        let photoContainer = document.createElement('div');

        let divX = document.createElement('div');

        // let div1 = document.createElement('div');
        let addressContainer = document.createElement('div');
        // let localityContainer = document.createElement('div');
        


        let div1 = document.createElement('div');
        let furnishment = document.createElement('div');
        let rateContainer = document.createElement('div');
        let rateIcon = document.createElement('div');
        let rate = document.createElement('div');


        let description = document.createElement('div');

        let div2 = document.createElement('div');
        let contactButton = document.createElement('button');
        let contactLink = document.createElement('a');

        // getting the id of each doc 
        li.setAttribute('data-id', doc.id);
        li.style.listStyleType = "none";
        li.style.width = "97%";
        li.style.display = "flex";
        // li.style.border = "1px solid black";
        li.style.boxShadow = "2px 2px 5px grey";
        li.style.margin = "2vh auto";
        li.style.paddingTop = "0.5vh";
        li.style.paddingBottom = "0.5vh";
        // li.style.padding = "2vh";

        photoContainer.style.width = "35%";
        // photoContainer.style.height = "17vh"
        photoContainer.style.background= "url('/img/eg1.jpg')";
        photoContainer.style.borderRadius = "5px";
        photoContainer.style.margin = "2vh"
        photoContainer.style.marginBottom = "2vh";

        divX.style.width = "60%";

        addressContainer.style.width = "95%";
        // addressContainer.style.height = "7vh"
        addressContainer.style.fontSize = "14px";
        addressContainer.style.margin = "0.5vh auto";
        addressContainer.style.fontWeight = "650";
        // addressContainer.style.border = "1px solid black";

        div1.style.display = "flex";
        div1.style.flexDirection = "row";
        div1.style.width = "95%";
        // div1.style.height = "5vh";
        div1.style.margin = "0vh auto";

        furnishment.style.width = "55%";
        // furnishment.style.border = "1px solid black";
        furnishment.style.fontSize = "14px";

        rateContainer.style.width = "45%";
        rateContainer.style.display = "flex";
        rateContainer.style.flexDirection = "row";
        // rateContainer.style.border = "1px solid black";
        rateIcon.style.padding = "0vh auto";
        rateContainer.style.marginLeft = "0vh";
        rateContainer.style.fontSize = "18px";
        rateContainer.style.fontWeight = "700";
        rateContainer.style.color = "green";

        rate.style.width = "80%"
        // rateIcon.style.border = "1px solid black";
        // rate.style.border = "1px solid black";
        rateIcon.style.width = "20%";
        rateIcon.style.height = "60%";

        rateIcon.style.alignItems = "center";
        rateIcon.style.margin = "auto 0vh";
        rateIcon.style.background = "url(/img/rupee-sign-solid.svg) no-repeat";


        description.style.width = "95%";
        description.style.lineHeight = "14px";
        description.style.maxHeight = "40px";
        // description.style.background = "#C4C4C4";
        description.style.margin = "0vh auto";
        description.style.padding = "0vh";
        description.style.fontSize = "12px";
        description.style.display = "-webkit-box";
        description.style.webkitLineClamp = "2";
        description.style.webkitBoxOrient = "vertical";
        // description.style.whiteSpace = "nowrap";
        description.style.overflow = "hidden";
        description.style.textOverflow = "ellipsis";
        

        div2.style.margin = "0 auto";
        div2.style.padding = "1vh"
        div2.style.width = '90%';
        // div2.style.alignItems = "center";
        // div2.style.justifyContent = "center";
        contactButton.style.width = "14vh";
        contactButton.style.height = "3.5vh";
        contactButton.innerHTML = "Contact";
        contactButton.style.background = "linear-gradient(90deg, #2C6DD5 0%, #AC1BF0 0.01%, #FF4B5A 83.33%, #FF4B5A 100%)";
        contactButton.style.color = "white";
        contactButton.style.fontWeight = "650";
        contactButton.style.fontSize = "18px";
        contactButton.style.margin = "0.3vh auto";
        contactButton.style.border = "0px solid black";
        contactLink.href = "contact.html";

        addressContainer.textContent = doc.data().HouseNoAdd;
        
        furnishment.textContent = doc.data().FurnishingOption;

        rate.textContent = doc.data().Rate;

        description.textContent = doc.data().description;

        div1.appendChild(furnishment);
        rateContainer.appendChild(rateIcon);
        rateContainer.appendChild(rate);
        div1.appendChild(rateContainer);

        contactLink.appendChild(contactButton);
        div2.appendChild(contactLink);

        divX.appendChild(addressContainer);
        divX.appendChild(div1);
        divX.appendChild(description);
        divX.appendChild(div2);

        li.appendChild(photoContainer);
        li.appendChild(divX);
        // li.appendChild(addressContainer);
        // li.appendChild(div1);
        // li.appendChild(description);
        // li.appendChild(div2);
        // li.appendChild(deleteButton);

        listingContainer.appendChild(li);

} 


// var Vref = db.collection('propertyLists');

// Vref.orderByChild('Rate').limitToLast(3).once('value', function(snapshot){
//         console.log(snapshot.val());
// });
// var Xref = firebase.database().ref('propertyLists');
// db.collection('propertyLists').where('Rate', '==', '30000').get().then((snapshot) => {
//         // snapshot.docs.forEach(doc => {
//         //     renderLists(doc);
//         // });
//         console.log(snapshot.key);
//     });

// real-time updates this function allows you do do things n real-time :) 
db.collection('propertyLists').onSnapshot(snapshot => {
let changes = snapshot.docChanges();
changes.forEach(change => {
        if(change.type == 'added'){
                renderLists(change.doc);
        } else if(change.type == 'removed'){
        let li = testLists.querySelector('[data-id' + change.doc.id + ']');
        testLists.removeChild(li);
        }
});
});