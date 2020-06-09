// DOM elements
const guideList = document.querySelector('.guides');
const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');
const accountDetails = document.querySelector('.account-details');
let userid = ""

// // האם המשתמש מחובר?
// auth.onAuthStateChanged(user => {
//   console.log(user);
// });
const setupID = (user) => {
  if (user) {
    userid = user.uid;
  } else {
    userid = "";
  }
};
// setup the ui of hte app based on the user :)
// const setupUI = (user) => {
//   if (user) {
//     // if user is log in
//     // console.log(user)
//     // go to home page page:
//     // window.location.href = "home.html".then(alert(""))
//     // we check if hte user exsist!!!!!!
//     // defind the user id as global variable
//     userid = user.uid;

//     // account info
//     // db.collection('users').doc(user.uid).get().then(doc => {
//     //   const html = `
//     //     <div>Logged in as ${user.email}</div>
//     //     <div>${doc.data().name}</div>
//     //   `;
//     //   accountDetails.innerHTML = html;
//     // });
//     // // toggle user UI elements
//     // loggedInLinks.forEach(item => item.style.display = 'block');
//     // loggedOutLinks.forEach(item => item.style.display = 'none');
//   } else {
//     userid = "";
//     // // clear account info
//     // accountDetails.innerHTML = '';
//     // // toggle user elements
//     // loggedInLinks.forEach(item => item.style.display = 'none');
//     // loggedOutLinks.forEach(item => item.style.display = 'block');
//   }
// };

// setup guides
const setupGuides = (data) => {

  if (data.length) {
    let html = '';
    data.forEach(doc => {
      const guide = doc.data();
      const li = `
        <li>
          <div class="collapsible-header grey lighten-4"> ${guide.title} </div>
          <div class="collapsible-body white"> ${guide.content} </div>
        </li>
      `;
      html += li;
    });
    guideList.innerHTML = html
  } else {
    guideList.innerHTML = '<h5 class="center-align">Login to view guides</h5>';
  }


};

// setup materialize components
document.addEventListener('DOMContentLoaded', function () {

  var modals = document.querySelectorAll('.modal');
  M.Modal.init(modals);

  var items = document.querySelectorAll('.collapsible');
  M.Collapsible.init(items);

});


// entergamepin
function gamePin() {
  var inputVal = document.getElementById("game-pin").value;
  // Displaying the value
  alert(inputVal);
  //realtime update
  db.collection('users').where('user_id', '==', userid).onSnapshot(snapshot => {
    snapshot.docs.forEach(doc => {
      db.collection('users').doc(doc.id).update({
        game_code: inputVal
      }).then(() => {
        window.location.replace("forms-invited.html");
      });
    });

  });
  // window.location.href = 'forms-invited.html';
};


// choosing habit
function habit() {
  var inputVal = document.getElementById("habit").value;
  // Displaying the value
  alert(inputVal);
  //realtime update
  db.collection('users').where('user_id', '==', userid).onSnapshot(snapshot => {
    snapshot.docs.forEach(doc => {
      db.collection('users').doc(doc.id).update({
        habit: inputVal
      }).then(() => {
        window.location.replace("forms-prize.html");
        // console.log("habit")
      });
    });

  });
  // window.location.href = 'forms-invited.html';
};
// !emojipicker
var emojiprize = ""

$(document).ready(function () {
  var el = $("#prize").emojioneArea({
    pickerPosition: "bottom",
    tonesStyle: "bullet"
  });
  el[0].emojioneArea.on("emojibtn.click", function (btn, event) {
    // console.log(btn.html());
    emojiprize = el[0].emojioneArea.getText();
    console.log(emojiprize);
  });
  // console.log();
});
// prize idea...
function prize() {
  var inputVal = document.getElementById("prize").value;
  // Displaying the value
  alert(inputVal);
  //realtime update
  db.collection('users').where('user_id', '==', userid).onSnapshot(snapshot => {
    snapshot.docs.forEach(doc => {
      db.collection('users').doc(doc.id).update({
        prize_idea: inputVal
      }).then(() => {
        window.location.replace("home.html");
      });
    });

  });
  // window.location.href = 'forms-invited.html';
};