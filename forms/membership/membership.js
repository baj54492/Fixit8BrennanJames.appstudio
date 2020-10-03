let members = ["Mary","Sam","Joey","Paul","Mike","Char","Jenny","Kennedy","Kaden","Kurt","Anne"];
let firstName = "";
btnSubmitUser.onclick=function(){
  firstName = inptFirstName.value
  if(members.includes(firstName))
    lblMembershipForm.textContent = 'You are a member!'
  else
    lblMembershipForm.textContent = 'You are not a member, let me add you!'
    members.push(firstName);
    console.log(members);
}