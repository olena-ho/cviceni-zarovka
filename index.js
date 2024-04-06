document.addEventListener('click', function(event) {
  const bulb = document.querySelector('.bulb') //with 'keydown' - it would work with pressing keyboard keys, if 'click' - than with clicking the mose or finger

/*
  bulb.classList.add('bulb--on');// this just adds the class - so it turns on the bulb forever */

  bulb.classList.toggle('bulb--on'); //this enables the bulb to switch on and off with every next time a key is pressed/or mouse clicked
});

