$(function(){

    // Get the modal element
    var imageModal = document.getElementById('imageModal');
    
    // Add an event listener to the modal for when it is shown
    imageModal.addEventListener('show.bs.modal', function (event) {
        // Get the triggering image element
        var button = event.relatedTarget;
        
        // Get the image source and title from the data attributes
        var imageSrc = button.getAttribute('data-image-src');
        var imageTitle = button.getAttribute('data-image-title');
        
        // Get the modal elements to update
        var modalImage = imageModal.querySelector('#modalImage');
        var modalTitle = imageModal.querySelector('#imageModalLabel');
        
        // Update the modal with the image source and title
        modalImage.src = imageSrc;
        modalTitle.textContent = imageTitle;
    });

    

})



// Open the full-screen modal
function openFullscreen(src) {
var modal = document.getElementById("fullscreenModal");
var modalImg = document.getElementById("fullscreenImg");

modal.style.display = "block";
modalImg.src = src;
}

// Close the full-screen modal
function closeFullscreen() {
var modal = document.getElementById("fullscreenModal");
modal.style.display = "none";
}



function toggleReplyBox(button) {
    var replyBox = button.nextElementSibling;
    if (replyBox.style.display === "none" || replyBox.style.display === "") {
        replyBox.style.display = "block";
    } else {
        replyBox.style.display = "none";
    }
}