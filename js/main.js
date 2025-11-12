// Shared behaviors for buttons and smooth scroll
document.addEventListener('DOMContentLoaded', function () {
    // Back to top visibility toggle (supports both legacy .to-top and new .back-to-top-btn)
    var toTopLegacy = document.querySelector('.to-top');
    var toTop = document.querySelector('.back-to-top-btn');

    function toggleTopBtn() {
        var y = window.pageYOffset || document.documentElement.scrollTop;
        if (toTopLegacy) {
            toTopLegacy.classList.toggle('visible', y > 200);
        }
        if (toTop) {
            toTop.classList.toggle('visible', y > 200);
        }
    }

    toggleTopBtn();
    window.addEventListener('scroll', toggleTopBtn);

    // Smooth scroll for in-page anchors
    document.body.addEventListener('click', function (e) {
        var a = e.target.closest('a[href^="#"]');
        if (!a) return;
        var id = a.getAttribute('href');
        if (id.length > 1) {
            var el = document.querySelector(id);
            if (el) {
                e.preventDefault();
                window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 10, behavior: 'smooth' });
            }
        }
    });

    // Scroll cue button on hero
    var cue = document.querySelector('.scroll-cue');
    if (cue) {
        cue.addEventListener('click', function (e) {
            var target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                window.scrollTo({ top: target.offsetTop - 10, behavior: 'smooth' });
            }
        });
    }

    // Mobile hamburger menu (home page only)
    var hamburger = document.querySelector('.hamburger');
    var mobileMenu = document.getElementById('mobile-menu');
    if (hamburger && mobileMenu) {
        function closeMenu(){
            document.body.classList.remove('menu-open');
            hamburger.classList.remove('is-open');
            hamburger.setAttribute('aria-expanded','false');
            mobileMenu.setAttribute('hidden','');
        }
        function openMenu(){
            document.body.classList.add('menu-open');
            hamburger.classList.add('is-open');
            hamburger.setAttribute('aria-expanded','true');
            mobileMenu.removeAttribute('hidden');
        }
        hamburger.addEventListener('click', function(){
            var expanded = this.getAttribute('aria-expanded') === 'true';
            if (expanded) { closeMenu(); } else { openMenu(); }
        });
        // Close when clicking any link
        mobileMenu.addEventListener('click', function(e){
            if (e.target.tagName === 'A') { closeMenu(); }
        });
        // ESC key closes
        document.addEventListener('keydown', function(e){
            if (e.key === 'Escape' && document.body.classList.contains('menu-open')){ closeMenu(); }
        });
    }
});
