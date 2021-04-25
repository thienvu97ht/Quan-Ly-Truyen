firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    // User is signed in.
    var uid = user.uid;
    var user = firebase.auth().currentUser;
    var email = user.email;
    document.querySelector('.hello-username').innerHTML = `Xin chào &#160<p class="show-email">${email}</p>`
  } else {
    // No user is signed in.
    // 
  }
});

function signOut() {
  firebase
    .auth()
    .signOut()
    .then(() => {
      // Sign-out successful.
      window.alert('Đăng xuất thành công!');
      window.location.assign('./login.html')
    })
    .catch((error) => {
      // An error happened.
      window.alert('Error : ' + error);
    });
}
