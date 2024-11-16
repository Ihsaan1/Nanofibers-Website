function contact() {

    event.preventDefault();

    let firstName = document.getElementById('fname').value.trim();
    let lastName = document.getElementById('lname').value.trim();
    let subject = document.getElementById('subject').value.trim();

    if (!firstName || !lastName || !subject) {
        alert('Fill out all fields')
        return
    }
    
    alert("Thanks for contacting us we will get back to you as soon as possible!");
    

    document.getElementById('fname').value = '';
    document.getElementById('lname').value = '';
    document.getElementById('subject').value = '';
}