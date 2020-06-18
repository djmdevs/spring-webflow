// https://github.com/ghiculescu/jekyll-table-of-contents
(function($){
  $.fn.toc = function(options) {
    let isTut = document.getElementById("tut-nav");
    let tocTitle = isTut ? "In This Chapter" : "Table of Contents";

    let defaults = {
      title: '<h4 class="toc-title">' + tocTitle + '</h4>',
      minimumHeaders: 1,
      headers: 'h2',
      listType: 'ul', // values: [ol|ul]
      showEffect: 'slideDown', // values: [show|slideDown|fadeIn|none]
      showSpeed: 'slow', // set to 0 to deactivate effect
      classes: { list: 'toc-list',
                 item: 'toc-item'
               }
    },
    settings = $.extend(defaults, options);

        function createLink (header) {
          let innerText = (header.textContent === undefined) ? header.innerText : header.textContent;
          return "<a class='toc-anchor' href='#" + header.id + "'>" + innerText + "</a>";
        }

        let headers = $(settings.headers).filter(function() {
          // get all headers with an ID
          let previousSiblingName = $(this).prev().attr( "name" );
          if (!this.id && previousSiblingName) {
            this.id = previousSiblingName.replace(/[.:]/g, "-"); //to account for post heading that use':'
          }
          return this.id;
        }), output = $(this);

        if (0 === settings.showSpeed) {
          settings.showEffect = 'none';
        }

        let render = {
          show: function() { output.hide().html(html).show(settings.showSpeed); },
          slideDown: function() { output.hide().html(html).slideDown(settings.showSpeed); },
          fadeIn: function() { output.hide().html(html).fadeIn(settings.showSpeed); },
          none: function() { output.html(html); }
        };
      //render depending on viewport
      if (window.matchMedia("(min-width: 900px)").matches) {
        if (headers.length < 2) {
          html = '<p class="no-toc-content"></p>';
        } else {
          html = `${settings.title}<${settings.listType} class=${settings.classes.list}>`
            headers.each(function(_, header) {
              html += `<li class=${settings.classes.item}>${createLink(header)}`;
            });
          html += `</${settings.listType}>`;
        }
      } else {
        if (headers.length === 0) {
          html = '<p class="no-toc-content">This article is too short!</p>';
        } else {
          html = `<${settings.listType} class=${settings.classes.list}>`
            headers.each(function(_, header) {
              html += `<li class=${settings.classes.item}>${createLink(header)}`;
            });
          html += `</${settings.listType}>`;
        }
      }


        render[settings.showEffect]();

        let offsetHeader = $('.blog-header').outerHeight()+ 5;
        $(".toc-anchor").click(function (e) {
          e.preventDefault();
          let anchorId = $(this).attr("href"); //About-Auth0
          let target = $(anchorId).offset().top - offsetHeader; //16807
          $('html, body').animate({scrollTop: target}, 500);
        })

        let tocMaxHeight = 315;
        if ($(".toc-list").height() < 314 ) {
          $(".toc-list").addClass("hide-gradient");
        }

      };
    })(jQuery);

// Utilizing Intersection Observer to observe changes between target and ancestor element. Solution for TOC highlighting while scrolling.
// https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
function ready(fn) {
  document.addEventListener('DOMContentLoaded', fn, false)
}

ready(() => {
  const motionQuery = window.matchMedia('(prefers-reduced-motion)')

  const TableOfContents = {
    container: document.querySelector('.toc-list'),
    links: null,
    headings: null,
    intersectionOptions: {
      rootMargin: '0px',
      threshold: 1
    },
    previousSection: null,
    observer: null,

    init() {
      this.handleObserver = this.handleObserver.bind(this)

      this.setUpObserver()
      this.findLinksAndHeadings()
      this.observeSections()


      this.links.forEach(link => {
        link.addEventListener('click', this.handleLinkClick.bind(this))
      })
    },


    handleLinkClick(e) {
      e.preventDefault()
      let id = e.target.getAttribute('href').replace('#', '')
      let baseUrl = window.location.href.split('/').splice(0,5).join('/')
      window.location.href = `${baseUrl}/#${id}`

      let section = this.headings.find(heading => {
        return heading.getAttribute('id') === id
      })

      section.setAttribute('tabindex', -1)

      window.scroll({
        behavior: motionQuery.matches ? 'instant' : 'smooth',
        top: section.offsetTop - 15,
        block: 'start'
      })

      if (this.container.classList.contains('active')) {
        this.container.classList.remove('active')
      }
    },

    handleObserver(entries, observer) {
      entries.forEach(entry => {
        let href = `#${entry.target.getAttribute('id')}`,
          link = this.links.find(l => l.getAttribute('href') === href)


        if (entry.isIntersecting && entry.intersectionRatio >= 1) {
          link.classList.add('visible')
          this.previousSection = entry.target.getAttribute('id')
        } else {
          link.classList.remove('visible')
        }

        this.highlightFirstActive()
      })
    },

    highlightFirstActive() {
      let firstVisibleLink = this.container.querySelector('.visible')

      this.links.forEach(link => {
        link.classList.remove('active')
      })

      if (firstVisibleLink) {
        firstVisibleLink.classList.add('active')
      }

      if (!firstVisibleLink && this.previousSection) {
        this.container.querySelector(
          `a[href="#${this.previousSection}"]`
        ).classList.add('active')
      }
    },

    observeSections() {
      this.headings.forEach(heading => {
        this.observer.observe(heading)
      })
    },

    setUpObserver() {
      this.observer = new IntersectionObserver(
        this.handleObserver,
        this.intersectionOptions
      )
    },

    findLinksAndHeadings() {
      this.links = [...this.container.querySelectorAll('a')]
      this.headings = this.links.map(link => {
        let id = link.getAttribute('href')
        return document.querySelector(id)
      })
    }
  }

  TableOfContents.init()
});
