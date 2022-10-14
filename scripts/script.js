(function (global) {

var dc = {};

var homeHtml = "pages/home.html" ;
var page0Html = "pages/coming.html";
var page1Html = "pages/user.html";
var page2Html = "pages/animals.html";
var page3Html = "pages/contact.html";
var page4Html = "pages/contact.html";

// Convenience function for inserting innerHTML for 'select'
var insertHtml = function (selector, html) {
  var targetElem = document.querySelector(selector);
  targetElem.innerHTML = html;
};

// Show loading icon inside element identified by 'selector'.
var showLoading = function (selector) {
  var html = "<div class='text-center'>";
  html += "<img src='images/ajax-loader.gif'></div>";
  insertHtml(selector, html);
};


// On page load (before images or CSS)
document.addEventListener("DOMContentLoaded", function (event) {

// On first load, show home view
showLoading("#main-content");
$ajaxUtils.sendGetRequest(
  homeHtml,
  function (responseText) {
    document.querySelector("#main-content")
      .innerHTML = responseText;
  },
  false);
});

  //Load contacts page
dc.loadHome = function () {
  showLoading("#main-content");
  $ajaxUtils.sendGetRequest(
  homeHtml,
  function (responseText) {
    document.querySelector("#main-content")
      .innerHTML = responseText;
  },
  false);
};

//Load contacts page
dc.loadPage0 = function () {
  showLoading("#main-content");
  $ajaxUtils.sendGetRequest(
  page0Html,
  function (responseText) {
    document.querySelector("#main-content")
      .innerHTML = responseText;
  },
  false);
};

//Load contacts page
dc.loadPage1 = function () {
  showLoading("#main-content");
  $ajaxUtils.sendGetRequest(
  page1Html,
  function (responseText) {
    document.querySelector("#main-content")
      .innerHTML = responseText;
  },
  false);
};

//Load about pagte
dc.loadPage2 = function () {
  showLoading("#main-content");
  $ajaxUtils.sendGetRequest(
  page2Html,
  function (responseText) {
    document.querySelector("#main-content")
      .innerHTML = responseText;
  },
  false);
};

//Load about pagte
dc.loadPage3 = function () {
  showLoading("#main-content");
  $ajaxUtils.sendGetRequest(
  page3Html,
  function (responseText) {
    document.querySelector("#main-content")
      .innerHTML = responseText;
  },
  false);
};

//Load about pagte
dc.loadPage4 = function () {
  showLoading("#main-content");
  $ajaxUtils.sendGetRequest(
  page4Html,
  function (responseText) {
    document.querySelector("#main-content")
      .innerHTML = responseText;
  },
  false);
};


global.$dc = dc;

})(window);

// Get the modal
//var modal = document.getElementById('id01');


// When the user clicks anywhere outside of the modal, close it
//window.onclick = function(event) {
    //if (event.target == modal) {
       // modal.style.display = "none";
   // }
//}
