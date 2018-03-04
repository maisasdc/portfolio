//Menu section
//Show RESUME page
$(document).ready(function(){
  
  $('#menu-resume').on('click', function()  {
    $('.resume-page').show();
    
 });  
}); 

//Hide RESUME page when user clicks in other menus (Home, About, Portfolio)
$(document).ready(function(){
  
  $('.menu-item').on('click', function()  {
    $('.resume-page').hide();
    
 });  
}); 
  

// PORTFOLIO
//Change portfolio caption background
/*
$('.portfolio-caption').hover(function() { 
  
  //Check if URL (Github, FreeCodeCamp) of the portfolio image are associated
 var codeIcon = $(this).prev().attr('href');
  
  if(codeIcon.indexOf("codepen")){
   
    $(this)
      .addClass('portfolio-caption-hover')
      .html('<i class="fa fa-free-code-camp fa-4x" aria-hidden="true"></i>') 
  } else if(codeIcon.indexOf("#")) {
    console.log('else if');
  } 
    
}, function() {
    $(this)
      .removeClass('portfolio-caption-hover')
      .children('i').remove();
 
}); */



// FOOTER
// Define current year

document.getElementById('current-year').appendChild(document.createTextNode(new Date().getFullYear()));

//Sroll up footer button
$(".footer-button").on('click', function(event) {
  
  event.preventDefault();
  
  $("html, body").animate({ scrollTop: 0 }, 'slow');
  
  //Hide resume section when user clicks to scroll up
  $('.resume-page').hide();
  
});

//Button color change
$('.footer-button').mouseover(function() {
  $(this).css('color', '#ffa500');
})
.mouseout(function() {
  $(this).css('color', '#494949');
});
