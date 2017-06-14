
function val(){
  var first = document.frm.firstname.value;
  var last = document.frm.lastname.value;
  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  var chkbox = document.getElementById('checkbox');
  if (first == ""){
    //alert('First name cannot be blank.');
    document.getElementById('errorBox').style.display = 'block';
    document.getElementById('errorMessage').innerHTML = "First name cannot be blank";
    frm.firstname.focus();
    return false;
  }
  if (first.length < 5){
    //alert('Minimum length of first name is 5.');
    document.getElementById('errorBox').style.display = 'block';
    document.getElementById('errorMessage').innerHTML = "Minimum length of first name is 5 characters";
    frm.firstname.focus();
    return false;
  }
  if (last == ""){
    //alert('Last name cannot be blank.');
    document.getElementById('errorBox').style.display = 'block';
    document.getElementById('errorMessage').innerHTML = "Last name cannot be blank";
    frm.lastname.focus();
    return false;
  }
  if (last.length < 8){
    //alert('Minimum length of last name is 8.');
    document.getElementById('errorBox').style.display = 'block';
    document.getElementById('errorMessage').innerHTML = "Minimum length of last name is 8 characters";
    frm.lastname.focus();
    return false;
  }
  if (frm.email.value==""){
    //alert("Please enter the email id");
    document.getElementById('errorBox').style.display = 'block';
    document.getElementById('errorMessage').innerHTML = "Please enter the email address";
    frm.email.focus();
    return false;
  }
  if (reg.test(frm.email.value) == false){
    //alert('Invalid Email Id');
    document.getElementById('errorBox').style.display = 'block';
    document.getElementById('errorMessage').innerHTML = "Invalid Email ID";
    frm.email.focus();
    return false;
  }
  if (!chkbox.checked){
    //alert('Please check the checkbox');
    document.getElementById('errorBox').style.display = 'block';
    document.getElementById('errorMessage').innerHTML = "Please accept the Terms and Conditions";
    return false;
  }
  alert('Thank You!');
  return true;

}
