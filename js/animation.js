document.addEventListener('scroll', function (e) {
	var top  = window.pageYOffset + window.innerHeight,
	isVisible = top > document.querySelector('#skills').offsetTop;
    var bars_list = document.getElementsByClassName("skill-bar-filled");
	if (isVisible) {
	   	for (let item of bars_list) {
	    	item.className += " skill-bar-filled-animation";
		}
    }
});