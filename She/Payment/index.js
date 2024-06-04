function sendTicket() {
  var params = {
    name: document.getElementById("namee").value,
    email: document.getElementById("emaile").value,
  };
  const serviceID = "service_vj3x31c";
  const templateID = "template_oud1ppu";
  emailjs.send(serviceID, templateID, params)
  .then(res=>{
      document.getElementById("namee").value = "";
      document.getElementById("emaile").value = "";
      document.getElementById("card").value = "";
      console.log(res);
      alert("Check your mail for your ticket!!")

  })
  .catch(err=>console.log(err));
}

function sendTicket1() {
  var params = {
    name: document.getElementById("name1").value,
    email: document.getElementById("email1").value,
  };
  const serviceID = "service_x81s3g6";
  const templateID = "template_rmeox4x";
  emailjs.send(serviceID, templateID, params)
  .then(res=>{
      document.getElementById("name1").value = "";
      document.getElementById("email1").value = "";
      document.getElementById("card1").value = "";
      console.log(res);
      alert("Check your mail for your ticket!!")

  })
  .catch(err=>console.log(err));
}

function sendTicket2() {
  var params = {
    name: document.getElementById("name2").value,
    email: document.getElementById("email2").value,
  };
  const serviceID = "service_x81s3g6";
  const templateID = "template_i1du6jt";
  emailjs.send(serviceID, templateID, params)
  .then(res=>{
      document.getElementById("name2").value = "";
      document.getElementById("email2").value = "";
      document.getElementById("card2").value = "";
      console.log(res);
      alert("Check your mail for your ticket!!")

  })
  .catch(err=>console.log(err));
}