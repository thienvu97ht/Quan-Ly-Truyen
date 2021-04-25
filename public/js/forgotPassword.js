function sendEmail() {
  var userEmail = document.getElementById("username").value;

  var auth = firebase.auth();

  auth
    .sendPasswordResetEmail(userEmail)
    .then(function () {
      // Email sent.
      window.alert('Gửi email xác thực thành công!');
      window.location.assign('./login.html')
    })
    .catch(function (error) {
      // An error happened.
      window.alert('Gửi email xác thực thất bại!');
    });
}
