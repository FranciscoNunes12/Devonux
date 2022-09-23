import $ from "jquery";

// Home screen titles
var text = ['Web based solutions', 
      'We develop digital products', 
      'To match our client needs', 
      'Real problems, need smart solutions'
    ],
    part,
    i = 0,
    offset = 0,
    len = text.length,
    forwards = true,
    skip_count = 0,
    skip_delay = 15,
    speed = 80;
var handleText = function () {
  setInterval(function () {
    if (forwards) {
      if (offset >= text[i].length) {
        ++skip_count;
        if (skip_count === skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    }
    else {
      if (offset === 0) {
        forwards = true;
        i++;
        offset = 0;
        if (i >= len) {
          i = 0;
        }
      }
    }
    part = text[i].substr(0, offset);
    if (skip_count === 0) {
      if (forwards) {
        offset++;
      }
      else {
        offset--;
      }
    }
    $('.devonux-intro').text(part);
  },speed);
};

$(document).ready(function () {
  handleText();
});

/*$(window).on('scroll', function(){
  if ($(".dvnx-us-block-title").is(':visible')){
      
    //var dvnx = $('.dvnx-us-block-title').text();

    //$('.dvnx-us-block-title').text(dvnx.substring(0, 1) + 'e' + dvnx.substring(1)).fadeIn(500);
    //$('.dvnx-us-block-title').text(dvnx.substring(2, 3) + 'o' + dvnx.substring(3)).fadeIn(500);
    //$('.dvnx-us-block-title').text(dvnx.substring(4, 5) + 'u' + dvnx.substring(5)).fadeIn(500);
  }
});*/

