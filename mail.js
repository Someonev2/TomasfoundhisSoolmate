function sendMail(){
    let parms = {
        name : document.getElementById("name").value,
        contact : document.getElementById("contact").value,
        attendace1 : document.getElementById("attending").value,
        attendace2 : document.getElementById("not_attending").value,
        plus_one1 : document.getElementById("plus_one_yes").value,
        plus_one1 : document.getElementById("plus_one_no").value,
        dietary : document.getElementById("dietary").value,
    }

    emailjs.send("service_cb4fygn","template_v5r98ad",parms).then(alert("Email Sent!"))
