function sendEmail(){
  Email.send({
    Host : "smtp.gmail.com",
    Username : "sagarikasinghacdac@gmail.com",
    Password : "saga@cdac",
    To : 'sagarikasingha@gmail.com',
    From : document.getElementsById("email").value,
    Subject : "Contact from Portfolio",
    Body : " you got new message"
}).then(
  message => alert(message)
);
}