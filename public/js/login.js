firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    // User is signed in.
    var uid = user.uid;

  } else {
    // No user is signed in.
    //
  }
});

function login() {
  var userEmail = document.getElementById("username").value;
  var passEmail = document.getElementById("password").value;

  firebase
    .auth()
    .signInWithEmailAndPassword(userEmail, passEmail)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      // ...
      window.alert('Đăng nhập thành công');
      window.location.assign('./index.html')
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;

      window.alert('Error : ' + errorMessage);
    }); 
}
