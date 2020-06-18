  window.onscroll = function() {
    addStickyToc()
  };

  let mainNav           =   $('nav.blog-header');
  let mobileToc         =   $('#mobile-toc-nav');
  let sticky            =   mobileToc.offset().top;

  function addStickyToc() {
    if(mobileToc.css('display') !== 'none') {
      if (window.pageYOffset > sticky) {
        mobileToc.addClass("sticky-toc");
        mainNav.addClass("blog-header--relative");
      } else {
        mobileToc.removeClass("sticky-toc");
        mainNav.removeClass("blog-header--relative");
      }
    } else {
      mobileToc.removeClass("sticky-toc");
      mainNav.removeClass("blog-header--relative");
    }
  }

  // $.fn.isVisible = function(){
  //     let win = $(window);
  //     obj = $(this);
  //     let scrollPosition = win.scrollTop();
  //     let visibleArea = win.scrollTop() + win.height();
  //     let objEndPos = (obj.offset().top + win.height());
  //     console.log(`scroll position is: ${scrollPosition}`)
  //     console.log(`visible area is: ${visibleArea}`)
  //     console.log(`objext end position is: ${objEndPos}`)
  //
  //     return(visibleArea >= objEndPos && scrollPosition <= objEndPos ? true : false)
  // };
  //
  //
  // $(window).scroll(function(){
  //   let blogContent = $('#main-post-content');
  //   let mainNav   =   $('nav.blog-header');
  //   let mobileToc =   $('#mobile-toc-nav');
  //
  //   if (mobileToc.css('display') !== 'none') {
  //     if (blogContent.isVisible()) {
  //       mobileToc.addClass("sticky-toc");
  //       mainNav.css('position', 'relative');
  //       console.log(blogContent.isVisible())
  //     } else {
  //       mobileToc.removeClass("sticky-toc");
  //       mainNav.css('position', 'sticky');
  //       console.log(blogContent.isVisible())
  //     }
  //   }
  // });


  $('.toc-nav').click(function () {
    $('#mobile-toc-nav').toggleClass('show-mobile-toc');
    $('.mobile-toc-content').toggleClass('show-toc-content');
    $("#mobile-toc-overlay ul li").click(function() {
     $('.toc-nav').click();
    })
  })
