$(document).ready(function () {
	/*$(".zoom_03").elevateZoom({
		constrainType: "height",
		constrainSize: 274,
		zoomType: "lens",
		containLensZoom: true,
		gallery: 'gallery_01',
		cursor: 'pointer',
		galleryActiveClass: "active",
		scrollZoom: true
	});

//pass the images to Fancybox
	$(".zoom_03").bind("click", function (e) {
		var ez = $('.zoom_03').data('elevateZoom');
		$.fancybox(ez.getGalleryList());
		return false;
	});*/

	// Add Attr  data-zoom-image="img/PAL-03308-5.jpg" & Class zoom_03

	// Vars
	/*var navLink = $(".third-nav .navbar-nav .nav-item .nav-link");

	$(navLink).on("mouseenter", function () {
		$(this).siblings(".dropdown-menu").delay(260).slideDown(450);
	});
	$(".third-nav .navbar-nav .nav-item .dropdown-menu").on("mouseleave", function () {
		$(this).delay("260").slideUp("450");
	});*/

	$(".preview-btn").on("click", function () {
		$(".preview-out").slideDown(500);
	});
	$(".fa-times").on("click", function () {
		$(".preview-out").slideUp(350);
	});
});