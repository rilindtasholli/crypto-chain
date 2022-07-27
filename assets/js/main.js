//check if elements is visible in viewport
function isElementVisible(id) {
    var el = document.getElementById(id);
    
    var rect     = el.getBoundingClientRect(),
        vWidth   = window.innerWidth || document.documentElement.clientWidth,
        vHeight  = window.innerHeight || document.documentElement.clientHeight,
        efp      = function (x, y) { return document.elementFromPoint(x, y) };     

    // Return false if it's not in the viewport
    if (rect.right < 0 || rect.bottom < 0 
            || rect.left > vWidth || rect.top > vHeight)
        return false;

    // Return true if any of its four corners are visible
    return (
          el.contains(efp(rect.left,  rect.top))
      ||  el.contains(efp(rect.right, rect.top))
      ||  el.contains(efp(rect.right, rect.bottom))
      ||  el.contains(efp(rect.left,  rect.bottom))
    );
}

//--------------------------- [[Sidebar]] ---------------------------------

//method for opening and closing sidebar
function toggleSideBar(){
    var sidebar = document.getElementsByClassName('sidebar')[0];
    sidebar.classList.toggle('sidebarActive')
}


//--------------------------- [[WOW.js]] -> for on-scroll animations ---------------------------------

wow = new WOW(
    {
        boxClass:     'wow',      // default
        animateClass: 'animated', // default
        offset:       0,          // default
        mobile:       true,       // default
        live:         true        // default
    }
  )
wow.init();

//--------------------------- [[GoToTop]] -> to scroll on top of the page ---------------------------------

// When the user clicks on the button, scroll to the top of the document
function goToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

var goTopButton = document.getElementsByClassName("goTopBtn")[0];

function scrollFunctionGoTopBtn() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    console.log('show')
    goTopButton.style.display = "block";
  } else {
    console.log('hide')
    goTopButton.style.display = "none";
  }
}

//------ [[Lozad.js]] -> for imporving load speed by loading images only when visible ------------

const observer = lozad('.lozad', {
  rootMargin: '400px 0px', // syntax similar to that of CSS Margin
  threshold: 0.1, // ratio of element convergence
  enableAutoReload: true // it will reload the new image when validating attributes changes
});
observer.observe();




