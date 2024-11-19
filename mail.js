function sendMail(){
    let parms = {
        name : document.getElementById("name").value,
        contact : document.getElementById("contact").value,
        attendace : document.getElementByName("attendance").value,
        plus_one : document.getElementByName("plus_one").value,
        dietary : document.getElementById("dietary").value,
    }

    emailjs.send("service_cb4fygn","template_v5r98ad",parms).then(alert("Email Sent!"))
}
