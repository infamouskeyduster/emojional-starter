var happyButton = document.querySelector('.happy');
var sillyButton = document.querySelector('.silly');
var cryingButton = document.querySelector('.crying');
var happyMsgContent = document.getElementById('message');
var sillyMsgContent = document.getElementById('message');
var cryingMsgContent = document.getElementById('message');
var happyArray = ['Yay!', 'Your smile just cheered me up.', 'You go!'];
var message = document.getElementById('message');

happyButton.addEventListener('click', happyMsg);
sillyButton.addEventListener('click', sillyMsg);
cryingButton.addEventListener('click', cryingMsg);

// function happyMsg() {
//   document.querySelector("#message").innerHTML = ['Yay! ', 'Your smile just cheered me up.', 'You go!'].sort();
// }
//
// function happyMsg(happyArray) {
//   for (var i = 0; i < 3; i++) {
//     // console.log(happyArray[1]);
//     document.getElementById("message").innerText = happyArray[i];
//   }
//
//   return happyArray[i];
// }

function happyMsg() {
  if (happyMsgContent.innerHTML === '') {
    happyMsgContent.innerHTML = 'Yay!';
  } else if (happyMsgContent.innerHTML === 'Yay!') {
    happyMsgContent.innerHTML = 'Your smile just cheered me up.';
  } else if (happyMsgContent.innerHTML === 'Your smile just cheered me up.') {
    happyMsgContent.innerHTML = 'You go!';
  } else if (happyMsgContent.innerHTML === 'You go!') {
    happyMsgContent.innerHTML = 'Yay!';
  }
}

function sillyMsg() {
  if (sillyMsgContent.innerHTML === '') {
    happyMsgContent.innerHTML = 'Ok!';
  } else if (happyMsgContent.innerHTML === 'Ok!') {
    happyMsgContent.innerHTML = 'Interesting response';
  } else if (happyMsgContent.innerHTML === 'Interesting response') {
    happyMsgContent.innerHTML = 'Me too.';
  } else if (happyMsgContent.innerHTML === 'Me too.') {
    happyMsgContent.innerHTML = 'Ok!';
  }
}

function cryingMsg() {
  if (cryingMsgContent.innerHTML === '') {
    happyMsgContent.innerHTML = 'What can I do?';
  } else if (happyMsgContent.innerHTML === 'What can I do?') {
    happyMsgContent.innerHTML = 'We can cry together!';
  } else if (happyMsgContent.innerHTML === 'We can cry together!') {
    happyMsgContent.innerHTML = 'Do you want to talk?';
  } else if (happyMsgContent.innerHTML === 'Do you want to talk?') {
    happyMsgContent.innerHTML = 'What can I do?';
  }
}
