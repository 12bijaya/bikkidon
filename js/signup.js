function validateForm() {
    // Get form inputs
    var clinicNumber = document.getElementById("HavenClinicNumber").value;
    var activationCode = document.getElementById("ActivationCode").value;
    var email = document.getElementById("Email").value;
    var retypeEmail = document.getElementById("ReTypeEmail").value;
    var firstName = document.getElementById("FirstName").value;
    var lastName = document.getElementById("LastName").value;
    var birthDate = document.getElementById("BirthDate").value;

    // Regular expression for email validation
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validate Clinic Number
    if (clinicNumber === "") {
        alert("Please enter your Haven Clinic Number");
        return false;
    }

    // Validate Activation Code
    if (activationCode === "") {
        alert("Please enter your Activation Code");
        return false;
    }

    // Validate Email
    if (!email.match(emailPattern)) {
        alert("Please enter a valid email address");
        return false;
    }

    // Validate Retype Email
    if (email !== retypeEmail) {
        alert("Email addresses do not match");
        return false;
    }

    // Validate First Name
    if (firstName === "") {
        alert("Please enter your First Name");
        return false;
    }

    // Validate Last Name
    if (lastName === "") {
        alert("Please enter your Last Name");
        return false;
    }

    // Validate Birth Date
    if (birthDate === "") {
        alert("Please enter your Birth Date");
        return false;
    }

    return true; // Form is valid
}
