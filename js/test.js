var testLists = document.getElementById('testLists');
var testForm = document.getElementById('testForm');


//create a continuous list function
function renderLists(doc){
    //creating elements
    let li = document.createElement('li');
    
    let div1 = document.createElement('div');
    let name1 = document.createElement('span');
    let name = document.createElement('span');
    let gender1 = document.createElement('span');
    let gender = document.createElement('span');

    let div2 = document.createElement('div');
    let city1 = document.createElement('span');
    let city = document.createElement('span');
    let project1 = document.createElement('span');
    let project = document.createElement('span');
    let locality1 = document.createElement('span');
    let locality = document.createElement('span');
    let landmark1 = document.createElement('span');
    let landmark = document.createElement('span');

    let deleteButton = document.createElement('div');
    deleteButton.textContent = "delete";
    deleteButton.style.width = "15vh";
    deleteButton.style.height = "5vh";
    deleteButton.style.color = "red";
    deleteButton.style.border = "1px solid red";
    deleteButton.style.margin = "5vh auto 2vh";
    deleteButton.style.textAlign = "center";
    deleteButton.style.cursor = "pointer";

    // getting the id of each doc 
    li.setAttribute('data-id', doc.id);
    li.style.listStyleType = "none";
    li.style.width = "95%";
    li.style.boxShadow = "2px 2px 5px grey";
    li.style.margin = "1vh auto";
    li.style.padding = "2vh";

    name1.innerHTML = " Name: "
    gender1.innerHTML = " Gender: "

    name.textContent = doc.data().name;
    gender.textContent = doc.data().gender;

    city.textContent = doc.data().city;
    project.textContent = doc.data().project;
    locality.textContent = doc.data().locality;
    landmark.textContent = doc.data().landmark;

    city1.innerHTML = " City: "
    project1.innerHTML = " Project: "
    locality1.innerHTML = "<br> Locality: "
    landmark1.innerHTML = " Landmark: "

    name.style.marginRight = "1vh";
    name1.style.fontWeight = "600";
    div1.appendChild(name1);    
    div1.appendChild(name);
    gender1.style.fontWeight = "600";
    div1.appendChild(gender1);
    div1.appendChild(gender);

    city1.style.fontWeight = "600";
    div2.appendChild(city1);
    div2.appendChild(city);
    project1.style.marginLeft = "2vh";
    project1.style.fontWeight = "600";
    div2.appendChild(project1);
    div2.appendChild(project);
    
    locality1.style.fontWeight = "600";
    div2.appendChild(locality1);
    div2.appendChild(locality);
    landmark1.style.marginLeft = "2vh";
    landmark1.style.fontWeight = "600"; 
    div2.appendChild(landmark1);
    div2.appendChild(landmark);

    li.appendChild(div1);
    li.appendChild(div2);
    li.appendChild(deleteButton);

    testLists.appendChild(li);

    // deleting data 
    deleteButton.addEventListener('click', (e) => {
        e.stopPropagation();
        let id = e.target.parentElement.getAttribute('data-id');
        db.collection('users').doc(id).delete();
    });


} 

// get the data from firestore (not real time)
// db.collection('users').orderBy('name').limit(2).then((snapshot) => {
//     // snapshot.docs.forEach(doc => {
//     //     renderLists(doc);
//     // });
//     console.log(snapshot.key);
// });

// real-time updates this function allows you do do things n real-time :) 
db.collection('users').onSnapshot(snapshot => {
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



// store data to firebase 
testForm.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('users').add({
        name: testForm.name.value,
        gender: testForm.gender.value,
        city: testForm.city.value,
        project: testForm.project.value,
        locality: testForm.locality.value,
        landmark: testForm.landmark.value,
        remark: testForm.ans.value
    });
    testForm.name.value = '';
    testForm.gender.value = '';
    testForm.city.value = '';
    testForm.project.value = '';
    testForm.locality.value = '';
    testForm.landmark.value = '';
    testForm.ans.value = '';

});