let nameTxt = document.getElementById('nameTxt')
let emailTxt = document.getElementById('emailTxt')
let malebtn = document.getElementById('malebtn')
let femalebtn = document.getElementById('femalebtn')
let jakartabtn = document.getElementById('jakartabtn')
let bogorbtn = document.getElementById('bogorbtn')
let bandungbtn = document.getElementById('bandungbtn')
let bekasibtn = document.getElementById('bekasibtn')
let message = document.getElementById('messageTxt')
let agreement = document.getElementById('agreementbox')
let submitBtn = document.getElementById('submitBtn')

function validate(){
    let name = nameTxt.value
    let email = emailTxt.value
    let gender = null
    let address = null
    let message = messageTxt.value
    let agreement = agreementbox.checked

    if(malebtn.checked == true){
        gender = "Male"
    }
    else if(femalebtn.checked == true)[
        gender = "Female"
    ]

    if(email.includes("@") == false){
        alert("Email must includes '@'")
        return
    }

    if(email.indexOf("@") !== email.lastIndexOf("@")){
        alert("Email must includes only one '@'")
        return
    }

    if(email.startsWith("@") || email.endsWith("@")){
        alert("Email must not starts or ends with '@' ")
        return
    }

    if(email.startsWith(".") || email.endsWith(".")){
        alert("Email must not starts or ends with '.' ")
        return
    }

    if(
        email.indexOf("@") + 1 == email.indexOf("@") ||
        email.indexOf(".") + 1 == email.indexOf(".")
    ){
        alert("'@' and '.' must not near each other")
        return
    }

    if(jakartabtn.checked == true){
        address = "Jakarta"
    }
    else if(bogorbtn.checked == true){
        address = "Bogor"
    }
    else if(bandungbtn.checked == true){
        address = "Bandung"
    }
    else if(bekasibtn.checked == true){
        address = "Bekasi"
    }

    if(gender == null){
        alert("Gender must be filled!")
        return
    }

    if(address == null){
        alert("Address must be filled!")
        return
    }

    if(message == null){
        alert("Please enter your message")
        return
    }

    if(agreement == false){
        alert("You must agree to our Terms & Conditions!")
        return
    }

    let isConfirm = confirm(`
        Name: ${name}
        Email: ${email}
        Gender: ${gender}
        Branch Location: ${address}
        Message: ${message}
    `)

    if(isConfirm == true){
        alert("Feedback Success!");
    }
    else if(isConfirm == false){
        alert("Feedback Fail")
    }

}

submitBtn.addEventListener("click", validate)