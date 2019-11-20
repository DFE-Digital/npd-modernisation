/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()
})


// Modal show and hide
// $('.npd-saved-data').on('click', function(e) {
//   $('.npd-modal-overlay').toggleClass("hidden visible");
//   $('.npd-modal').toggleClass("hidden visible");
//   $('html').toggleClass("noscroll");
//   e.preventDefault();
// });
//
// $('.npd-modal-close').on('click', function(e) {
//   $('.npd-modal-overlay').toggleClass("hidden visible");
//   $('.npd-modal').toggleClass("hidden visible");
//   $('html').toggleClass("noscroll");
//   e.preventDefault();
// });
//
// $(document).keydown(function(e) {
//     if (e.keyCode == 27) { // ESCAPE key
//       $('.npd-modal-overlay').addClass("hidden").removeClass("visible");
//       $('.npd-modal').addClass("hidden").removeClass("visible");
//       $('html').removeClass("noscroll");
//     }
// });


// Accessible Modal
$(document).ready(function() {
  var findModal = function(elem) {

    var tabbable = elem.find('select, input, textarea, button, a').filter(':visible');

    var firstTabbable = tabbable.first();
    var lastTabbable = tabbable.last();
    // set focus on first tabbable element
    firstTabbable.focus();

    // send last tabbable back to first
    lastTabbable.on('keydown', function (e) {
       if ((e.which === 9 && !e.shiftKey)) {
           e.preventDefault();
           firstTabbable.focus();
       }
    });

    // send last shift tabbable back to last
    firstTabbable.on('keydown', function (e) {
        if ((e.which === 9 && e.shiftKey)) {
            e.preventDefault();
            lastTabbable.focus();
        }
    });

    // allow esc to close Modal
    elem.on('keyup', function(e){
      if (e.keyCode === 27 ) {
        elem.hide();
        $('.npd-modal-overlay').hide();
        $('html').removeClass("noscroll");
      };
    });
  };

  // show modal and overlay and lock scroll
  $('.show-modal').click(function(e){
    e.preventDefault();

    $('.npd-modal').show();
    $('.npd-modal-overlay').show();
    $('html').addClass("noscroll");
    findModal($('.npd-modal'));
  });

  //hide modal and overlay
  $('.close-modal').click(function(e){
    e.preventDefault();

    $('.npd-modal').hide();
    $('.npd-modal-overlay').hide();
    $('html').removeClass("noscroll");
  });


});

// Copy and paste

$('.copy').click(function(e){
    e.preventDefault();
});

function copyToClipboard(element) {
  var $temp = $("<input type='text'>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();

  $('<div class="npd-copy-success govuk-!-margin-bottom-1 govuk-!-margin-top-2"><h2 class="govuk-heading-s">Items copied</h2><p class="govuk-!-font-size-16">Those data items are in your clipboard, you can now paste them into another document.</p> </div>')
  .insertAfter('#copyButton')
  .fadeIn()
  .delay(5000)
  .fadeOut();
}



// Check all checkboxes
function checkAll(ele) {
     var checkboxes = document.getElementsByTagName('input');
     if (ele.checked) {
         for (var i = 0; i < checkboxes.length; i++) {
             if (checkboxes[i].type == 'checkbox') {
                 checkboxes[i].checked = true;
             }
         }
     } else {
         for (var i = 0; i < checkboxes.length; i++) {
             console.log(i)
             if (checkboxes[i].type == 'checkbox') {
                 checkboxes[i].checked = false;
             }
         }
     }
 }

 // Activate button
 $('input').click(function () {
     //check if checkbox is checked
     if ($(this).is(':checked')) {

         $('#govuk-button').removeAttr('disabled'); //enable input
         $('#govuk-button-fixed').removeAttr('disabled');

     } else {
         $('#govuk-button').attr('disabled', true); //disable input
         $('#govuk-button-fixed').attr('disabled', true);
     }
 });

$('input[name="selectAll"]').click(function(){
     if($(this).is(":checked")) {
         $('#govuk-button').attr('disabled', false);
         $('#govuk-button-fixed').attr('disabled', false);
     }
 });

 $(document).ready(function() {
    if ($('input').is(':checked')) {
        $('#govuk-button').attr('disabled', false); //enable input
        $('#govuk-button-fixed').attr('disabled', false);
    } else {
        $('#govuk-button').attr('disabled', true); //disable input
        $('#govuk-button-fixed').attr('disabled', true);
    }
});

 // Counter
 var count = $('ul.npd-saved-items').children().length;

 $('.npd-counter').text(count);

 // Remove data
 $(document).ready(function() {
     $("a.npd-remove-data").click(function() {
         //Do stuff when clicked
     });
 });

 // Metadata menu panel

 $(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 540) {
    $('.metadataMenu').fadeIn(100);
  } else {
    $('.metadataMenu').fadeOut(100);
  }
});

// check tooltip position
