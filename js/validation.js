
function val(){
  var first = document.frm.firstname.value;
  var last = document.frm.lastname.value;
  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  var chkbox = document.getElementById('checkbox');
  if (first == ""){
    alert('First name cannot be blank.');
    return false;
  }
  if (first.length < 5){
    alert('Minimum length of first name is 5.');
    frm.firstname.focus();
    return false;
  }
  if (last == ""){
    alert('Last name cannot be blank.');
    return false;
  }
  if (last.length < 8){
    alert('Minimum length of last name is 8.');
    frm.lastname.focus();
    return false;
  }
  if (frm.email.value==""){
    alert("Please enter the email id");
    frm.email.focus();
    return false;
  }
  if (reg.test(frm.email.value) == false){
    alert('Invalid Email Id');
    frm.email.focus();
    return false;
  }
  if (!chkbox.checked){
    alert('Please check the checkbox');
    return false;
  }
  alert('Thank You!');
  return true;

}
