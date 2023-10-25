const accordion = document.querySelectorAll('.panel');

accordion.forEach(function (element) {
  element.addEventListener('click', toggleElement);
});

function toggleElement(event) {
  accordion.forEach(function (element) {
    if (event.target.parentElement === element) {
      element.classList.toggle('active');
    } else {
      element.classList.remove('active');
    }
  });

  //   const allActives = document.querySelectorAll('.active');
  //   allActives.forEach(function (element) {
  //     element.classList.remove('active');
  //   });

  //   accordion.forEach(function (element) {
  //     element.classList.remove('active');
  //   });
  //   this.classList.toggle('active');
}
