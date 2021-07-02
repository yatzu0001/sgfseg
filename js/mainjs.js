function animateValue(id, start, end, duration) {

    if (start === end) return;

    var range = end - start;

    var current = start;

    var increment = end > start? 1 : -1;

    var stepTime = Math.abs(Math.floor(duration / range));

    var obj = document.getElementById(id);

    var timer = setInterval(function() {

        current += increment;

        obj.innerHTML = current;

        if (current == end) {

            clearInterval(timer);

        }

    }, stepTime);

}



animateValue("value", 0, 7, 100);



var coll = document.getElementsByClassName("collapsible");

var i;



for (i = 0; i < coll.length; i++) {

  coll[i].addEventListener("click", function() {

    this.classList.toggle("active");

    var content = this.nextElementSibling;

    if (content.style.maxHeight){

      content.style.maxHeight = null;

    } else {

      content.style.maxHeight = content.scrollHeight + "px";

    } 

  });

}



$('.button').click(function(){

  var buttonId = $(this).attr('id');

  $('#modal-container').removeAttr('class').addClass(buttonId);

  $('body').addClass('modal-active');

})



$('#modal-container').click(function(){

  $(this).addClass('out');

  $('body').removeClass('modal-active');

});