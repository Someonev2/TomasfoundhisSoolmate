const form = document.querySelector('form');
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
});
