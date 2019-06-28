let justClick = () => {
	let x = document.getElementById("nav-id");
	let y = document.getElementById("navbar-logo-id");
	
    if (x.className === "nav") {
        x.className += " navbar-responsive";
        y.className = "fa fa-times fa-lg";
    } else {
        x.className = "nav";
        y.className = "fa fa-bars fa-lg";
    }
}