function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    number: document.getElementById("number").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_vj3x31c";
  const templateID = "template_uf4r3ty";

    emailjs.send(serviceID, templateID, params)
    .then(res=>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("number").value = "";
        document.getElementById("subject").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Your message sent successfully!!")

    })
    .catch(err=>console.log(err));

}
function sendTicket() {
  var params = {
    name: document.getElementById("namee").value,
    email: document.getElementById("emaile").value,
  };
  const serviceID = "service_vj3x31c";
  const templateID = "template_oud1ppu";
  emailjs.send(serviceID, templateID, params)
  .then(res=>{
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      console.log(res);
      alert("Check your mail for your ticket!!")

  })
  .catch(err=>console.log(err));
}