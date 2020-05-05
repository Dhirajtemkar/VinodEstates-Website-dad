
var submitForm = document.getElementById("submitForm");

var imageUploader = document.getElementById("imageUploader");
var uploaderProgress = document.getElementById("uploaderProgress");


imageUploader.addEventListener('change', function(e) {
    // get file
    var file = e.target.files[0];
    let id = e.target.parentElement.getAttribute('data-id');

    // create a storage ref
    var storageRef = firebase.storage().ref('propertyPhotos/' + 'data-id/' + file.name);
    // upload file
    var task = storageRef.put(file);

    // update progress bar
    task.on('state_changed', 
    
        function progress(snapshot) {
            var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            uploaderProgress.value = percentage;
        },

        function error(err) {

        },

        function complete() {
            
        }
    
    );

});


//storing data into database
submitForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let id = e.target.parentElement.getAttribute('data-id');
    db.collection('propertyLists').add({
        // BasicDetails elements
        listingType: submitForm.listingType.value,
        propertyType: submitForm.propertyType.value,
        AptType: submitForm.AptType.value,
    
        // LocationDetail elements
        CityAdd: submitForm.CityAdd.value,
        ProjectNameAdd: submitForm.ProjectNameAdd.value,
        LocalityAdd: submitForm.LocalityAdd.value,
        HouseNoAdd: submitForm.HouseNoAdd.value,
        LandmarkAdd: submitForm.LandmarkAdd.value,
    
        // PropertyDetail elements
        Size: submitForm.Size.value,
        CarpetSize: submitForm.CarpetSize.value,
    
        Bedrooms: submitForm.Bedrooms.value,
        Bathrooms: submitForm.Bathrooms.value,
        Balconies: submitForm.Balconies.value,
        Parking: submitForm.Parking.value,        
    
        CoveredParkings: submitForm.CoveredParkings.value,
        OpenParkings: submitForm.OpenParkings.value,
        Status: submitForm.Status.value,
        FurnishingOption: submitForm.FurnishingOption.value,
    
        // PaymentDetail elements
        OwnershipOption: submitForm.OwnershipOption.value,
        Rate: submitForm.Rate.value,
        AllInclusive: submitForm.AllInclusive.value,
        Negotiable: submitForm.Negotiable.value,
        TaxAndCharge: submitForm.TaxAndCharge.value,
        
        // FeatureDetail elements @except images
        // add images too
        lift: submitForm.lift.value,
        waterSupply: submitForm.waterSupply.value,
        pipedGas: submitForm.pipedGas.value,
        description: submitForm.description.value,

    });

});