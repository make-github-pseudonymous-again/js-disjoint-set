var domReady = function(callback) {
	var state = document.readyState ;
    if ( state === 'interactive' || state === 'complete' ) {
		callback() ;
	}
	else {
		document.addEventListener('DOMContentLoaded', callback);
	}
} ;


domReady(function(){

	var projectname = document.createElement('a');
	projectname.classList.add('project-name');
	projectname.text = 'union-find/non-contiguous';
	projectname.href = './index.html' ;

	var header = document.getElementsByTagName('header')[0] ;
	header.insertBefore(projectname,header.firstChild);

	var testlink = document.querySelector('header > a[data-ice="testLink"]') ;
	testlink.href = 'https://coveralls.io/github/union-find/non-contiguous' ;
	testlink.target = '_BLANK' ;

	var searchBox = document.querySelector('.search-box');
	var input = document.querySelector('.search-input');

	// active search box when focus on searchBox.
	input.addEventListener('focus', function(){
		searchBox.classList.add('active');
	});

});
