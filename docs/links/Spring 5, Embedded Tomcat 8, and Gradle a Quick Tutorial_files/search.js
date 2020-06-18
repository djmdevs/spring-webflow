let searchImage = document.querySelector('.search-img');
let searchImageMobile = document.querySelector('.search-img.mobile');
let searchBar = document.querySelector('.search-bar');
let searchInput = document.querySelector('#search-input');
let searchResults = document.querySelector('#search-results');
let searchOverlay = document.querySelector('.search-overlay');

function openSearchBanner() {
  if (searchBar.classList.contains('show') && window.innerWidth < 900) {
    searchBar.classList.remove('show');
    searchImageMobile.src='https://cdn.auth0.com/website/blog-new/search-icon-mobile.svg';
    searchResults.classList.remove('show');
    searchOverlay.classList.remove('show');
  } else if (searchBar.classList.contains('show') && window.innerWidth > 900) {
    searchBar.classList.remove('show');
    searchImage.src='https://cdn.auth0.com/website/blog-new/search-icon-desktop.svg';
    searchResults.classList.remove('show');
    searchOverlay.classList.remove('show');
  } else if (!searchBar.classList.contains('show') && window.innerWidth < 900) {
    searchBar.classList.add('show');
    searchImageMobile.src='https://cdn.auth0.com/website/blog-new/close-button-mobile.svg';
    keyUpHandler()
  } else {
    searchBar.classList.add('show');
    searchImage.src='https://cdn.auth0.com/website/blog-new/close-button-desktop.svg';
    keyUpHandler()
  }
}

function keyUpHandler() {
  searchInput.focus();
  searchInput.addEventListener('keyup', _.debounce(function() {
    let value = $( this ).val();
    searchResults.classList.add('show');
    searchOverlay.classList.add('show');
    sendMetrics(value);
  }, 300))
}

function sendMetrics(value){
  if (value.length) {
    return setTimeout(function () {
      let blogSearchData = { trackData: value, };
      metricsLib.track('blog:search', blogSearchData);
    }, 1500)
  }
}
