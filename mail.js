const form = document.querySelector('form');
const nameInput = document.querySelector('name2');
const contactInput = document.querySelector('contact');
const attendingInput1 = document.querySelector('attending1');
const attendingInput2 = document.querySelector('attending2');
const plusInput1 = document.querySelector('plus1');
const plusInput2 = document.querySelector('plus2');
const dietaryInput = document.querySelector('dietary');

const serviceID = 'service_tfcnu7r';
const templateID = 'template_v5r98ad';
const publickey = 'y5BCXyCS9i2AChyY_';

emailjs.init(publickey);

form.addEventListener('submit', (e)=> {
    e.preventDefault();
    const inputData = {
        from_name:nameInput.value,
        user_email:contactInput.value,
        attendace1:attendingInput1.value,
        attendace2:attendingInput2.value,
        plus1:plusInput1.value,
        plus2:plusInput2.value,
        dietary:dietaryInput.value,
    };
    emailjs.send(serviceID, templateID<inputData).then(()=>{
        nameInput.value = '';
        contactInput.value = '';
        attendingInput1.value = '';
        attendingInput2.value = '';
        plusInput1.value = '';
        plusInput2.value = '';
        dietaryInput.value = '';
        console.log('Sucess!');
    },
    (error) => {
        console.log(error);
    }
);
});
