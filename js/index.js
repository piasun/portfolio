//email js//

function validate() {
    let name = document.querySelector('.name')
    let email = document.querySelector('.email')
    let msg = document.querySelector('.message')
    let sendBtn = document.querySelector('.send-btn')

    sendBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (name.value == "" || email.value == "" || msg.value == ""){
            emptyerror();
        } else {
            sendmail(name.value, email.value, msg.value);
            success();
        }
    });
}
validate();

function sendmail(name,email,msg){
    emailjs.send("service_yjcv0er","template_t27qed9",{
        from_name: email,
        to_name: name,
        message: msg,
        });
}

function emptyerror() {
    swal({
        title:"Oh no...",
        text:"Fields can not be empty!",
        icon: "error",
    });
}

function success() {
    swal({
        title:"Email sent successfully",
        text:"I will get back to you as soon as possible",
        icon: "Success",
    });
}

