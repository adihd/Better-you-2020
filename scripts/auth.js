// listen for auth status changes תראה אם המשתמש מתחבר או מתמנתק



//  בודק האם המשתמש מתחבר או מתנתק אם יש שינוי אז קורא לפונקציות
// ! בדיקה האם המשתמש מחובר או לא 
//  /////////////////////////////////////////////////////////////////////////


auth.onAuthStateChanged(user => {
  console.log(user);
  // if the user log in show this contect
  if (user) {
    // אם המשתמש מתחבר
    db.collection('guides').onSnapshot(snapshot => {
      // setupGuides(snapshot.docs);
      // תתחבר ותשנה את היו אי בהתאם!!
      console.log("user is login");
      console.log(user);
      // setupUI(user);
      setupID(user);
    }, err => console.log(err.message));
    // if the user is log out show this : log out null!
  } else {
    // אם המשתמש מתנתק
    console.log("user is logout and its null")
    // setupUI();
    setupID();
    // setupGuides([]);
  }
});
//  /////////////////////////////////////////////////////////////////////////


// if ( document.URL.includes("homepage.aspx") ) {
//   //Code here
// }

// ! הרשמה לאפליקציה
//  /////////////////////////////////////////////////////////////////////////
// !emojipicker
var useremoji1 = ""

$(document).ready(function () {
  var el = $("#standalone").emojioneArea({
    standalone: true,
    autocomplete: false
  });
  el[0].emojioneArea.on("emojibtn.click", function (btn, event) {
    // console.log(btn.html());
    useremoji1 = el[0].emojioneArea.getText();
    console.log(useremoji1);
  });
  // console.log();
});
// signup
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
  // alert("dfsdffsd");
  e.preventDefault();

  // get user info
  const email = signupForm['signup-email'].value;
  alert(signupForm['signup-email'].value);
  const password = signupForm['signup-password'].value;
  const useremoji = useremoji1;
  // sign up the user & add firestore data for ex the name of the user
  auth.createUserWithEmailAndPassword(email, password).then(cred => {
    // alert(signupForm['signup-name'].value);
    console.log("user signin success!!!")
    return db.collection('users').doc(cred.user.uid).set({
      // mail: signupForm['signup-email'].value,
      name: signupForm['signup-name'].value,
      mail: email,
      my_status: false,
      game_code: "",
      game_points: 0,
      habit: "",
      max_points: 1000,
      partner_id: "",
      partner_name: "",
      partner_emoji: "",
      user_id: cred.user.uid,
      prize_idea: "",
      user_emoji: useremoji,
      paired: false
    });
  }).then(() => {
    // close the signup modal & reset form
    // window.location.href = "forms-code.html";
    // const modal = document.querySelector('#modal-signup');
    // M.Modal.getInstance(modal).close();
    console.log("user data signin success!!!")
    signupForm.reset();
    window.location.replace("forms-code.html");
    // go to the next page

    // $(window).load(function () {
    //   console.log("hi adidas!")
    // })

  });
});

//  /////////////////////////////////////////////////////////////////////////
// ! התנתקות מהאפליקציה
//  /////////////////////////////////////////////////////////////////////////

// // logout
// const logout = document.querySelector('#logout');
// logout.addEventListener('click', (e) => {
//   e.preventDefault();
//   auth.signOut();
// });

// ! התחברות לוג אין לאפליקציה
// login
// const loginForm = document.querySelector('#login-form');
// loginForm.addEventListener('submit', (e) => {
//   e.preventDefault();

//   // get user info
//   const email = loginForm['login-email'].value;
//   const password = loginForm['login-password'].value;

//   // log the user in
//   auth.signInWithEmailAndPassword(email, password).then((cred) => {
//     // close the signup modal & reset form
//     const modal = document.querySelector('#modal-login');
//     M.Modal.getInstance(modal).close();
//     loginForm.reset();
//   });

// });