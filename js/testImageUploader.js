
var uploader = document.getElementById("uploader");
var uploaderProgress = document.getElementById("uploaderProgress");


uploader.addEventListener('change', function(e) {
    // get file
    var file = e.target.files[0];
    // let id = e.target.parentElement.getAttribute('data-id');

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
