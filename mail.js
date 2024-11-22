import emailjs from 'emailjs-com';

/*const form = document.querySelector('form');
const nameInput = document.querySelector('nameuser');
const contactInput = document.querySelector('email');
const attendingInput = document.querySelector('input[name="attendance"]:checked').value
const plusInput = document.querySelector('input[name="plus_one"]:checked').value
const dietaryInput = document.querySelector('dietary');

const serviceID = 'service_cb4fygn';
const templateID = 'template_v5r98ad';
const publickey = 'y5BCXyCS9i2AChyY_';

emailjs.init(publickey);

form.addEventListener('submit', (e)=> {
    e.preventDefault();
    const inputData = {
        from_name:nameInput.value,
        user_email:contactInput.value,
        attendace:attendingInput.value,
        plus_one:plusInput.value,
        dietary:dietaryInput.value,
    };
    emailjs.send(serviceID, templateID<inputData).then(
        () => {
        nameInput.value = '';
        contactInput.value = '';
        attendingInput.value = '';
        plusInput.value = '';
        dietaryInput.value = '';
        console.log('Sucess!');
    },
    (error) => {
        console.log(error);
    }
);
}); */
emailjs.init(y5BCXyCS9i2AChyY_);

document.getElementById('rsvpForm').addEventListener('submit', sendMail);

function sendMail(event) {
    event.preventDefault();

    // Retrieve values safely with fallbacks
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const attendance = document.querySelector('input[name="attendance"]:checked')?.value || "Not Specified";
    const plusOne = document.querySelector('input[name="plus_one"]:checked')?.value || "Not Specified";
    const dietary = document.getElementById('dietary').value.trim();

    // Validation for required fields
    if (!name || !email || !attendance || !plusOne) {
        alert("Please fill in all required fields.");
        return;
    }

    // Prepare parameters for EmailJS
    const parms = {
        name,
        email,
        //attendance,
        //plus_one: plusOne,
        dietary
    };

    // Send email using EmailJS
    emailjs.send("service_cb4fygn", "template_v5r98ad", parms)
        .then(function(response) {
            alert("Email Sent!");
            console.log("SUCCESS!", response);
        }, function(error) {
            alert("Failed to send email.");
            console.error("FAILED...", error);
        });
}
