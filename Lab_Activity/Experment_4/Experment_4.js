function Submit(){
    // to get values using DOm
    let name=document.getElementById('name').value;
    let email=document.getElementById('email').value;
    let phone=document.getElementById('phone').value;
    let password=document.getElementById('password').value;

    // Clear From 

    document.getElementById('nameError').innerHTML=" ";
    document.getElementById('eamilError').innerHTML=" ";
    document.getElementById('phoneError').innerHTML=" ";
    document.getElementById('passwordError').innerHTML=" ";

    let valid=true;

    // Name Validation
    if(name==" "){
        document.getElementById('nameError').innerHTML="** Name is Required";
        valid=false;
    }
    if(email==" " && !email.includes("@")){
        document.getElementById('emailErrror').innerHTML="Email entered is invalid";
         valid=false;
    }
    if(phone<999999999 && phone >10000000000){
     document.getElementById('phoneError').innerHTML="Phone is Invalid";
      valid=false;
    }
    if(password.length >= 8 ){
        document.getElementById('phoneError').innerHTML="Password is less then 8 character";
         valid=false;
    }
}