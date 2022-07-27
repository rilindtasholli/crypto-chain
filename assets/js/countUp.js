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

let experienceNum = new CountUp('experienceNum', 0, 12);
let investmentNum = new CountUp('investmentNum', 0, 20);
let teamNum = new CountUp('teamNum', 0, 85);
let countriesNum = new CountUp('countriesNum', 0, 150);

window.onscroll = function() {
    if(isElementVisible('experienceNum')) experienceNum.start();
    if(isElementVisible('investmentNum')) investmentNum.start();
    if(isElementVisible('teamNum')) teamNum.start();
    if(isElementVisible('countriesNum')) countriesNum.start();
};