/* ===================================================================
   TAQUERÍA LOS SOLES — main.js
   Preloader, parallax, partículas, contadores, typewriter, filtros,
   menú móvil y envío de pedidos por WhatsApp.
=================================================================== */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* -----------------------------------------------------------------
     PRELOADER
  ----------------------------------------------------------------- */
  var loader = document.getElementById('loader');
  var loaderBar = document.getElementById('loader-bar');
  var body = document.body;
  var MIN_LOADER_TIME = 2200;
  var startTime = Date.now();
  var pageLoaded = false;

  function setBar(pct) { if (loaderBar) loaderBar.style.width = pct + '%'; }

  setTimeout(function () { setBar(28); }, 120);
  setTimeout(function () { setBar(58); }, 700);
  setTimeout(function () { setBar(82); }, 1400);

  function hideLoader() {
    setBar(100);
    var elapsed = Date.now() - startTime;
    var wait = Math.max(MIN_LOADER_TIME - elapsed, 0);

    setTimeout(function () {
      if (loader) loader.classList.add('loader-hide');
      body.classList.remove('is-loading');
      revealHeroNow();

      setTimeout(function () {
        if (loader) loader.classList.add('loader-done');
      }, reduceMotion ? 0 : 1150);
    }, wait);
  }

  window.addEventListener('load', function () {
    pageLoaded = true;
    hideLoader();
  });
  // Fallback por si el evento load tarda demasiado (imágenes externas lentas)
  setTimeout(function () { if (!pageLoaded) hideLoader(); }, 4500);

  /* -----------------------------------------------------------------
     MENÚ MÓVIL
  ----------------------------------------------------------------- */
  var hamburger = document.getElementById('hamburger');
  var mobileMenu = document.getElementById('mobile-menu');
  var menuClose = document.getElementById('menu-close');

  function openMobileMenu() {
    mobileMenu.classList.add('open');
    hamburger.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
    body.style.overflow = 'hidden';
  }
  function closeMobileMenu() {
    mobileMenu.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    body.style.overflow = '';
  }
  if (hamburger) {
    hamburger.addEventListener('click', function () {
      mobileMenu.classList.contains('open') ? closeMobileMenu() : openMobileMenu();
    });
  }
  if (menuClose) menuClose.addEventListener('click', closeMobileMenu);
  if (mobileMenu) {
    mobileMenu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', closeMobileMenu);
    });
  }

  /* -----------------------------------------------------------------
     NAVBAR — estado al hacer scroll
  ----------------------------------------------------------------- */
  var navbar = document.getElementById('navbar');
  function updateNavbar() {
    if (!navbar) return;
    if (window.scrollY > 40) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  }
  window.addEventListener('scroll', updateNavbar, { passive: true });
  updateNavbar();

  /* -----------------------------------------------------------------
     PARTÍCULAS (brasas doradas flotando)
  ----------------------------------------------------------------- */
  function createParticles(container, count) {
    if (!container || reduceMotion) return;
    for (var i = 0; i < count; i++) {
      var p = document.createElement('span');
      p.className = 'particle';
      var size = 3 + Math.random() * 5;
      p.style.width = size + 'px';
      p.style.height = size + 'px';
      p.style.left = Math.random() * 100 + '%';
      p.style.setProperty('--drift', (Math.random() * 80 - 40) + 'px');
      var duration = 7 + Math.random() * 9;
      p.style.animationDuration = duration + 's';
      p.style.animationDelay = (Math.random() * duration) + 's';
      container.appendChild(p);
    }
  }
  createParticles(document.getElementById('hero-particles'), 26);
  document.querySelectorAll('[data-particles]').forEach(function (el) {
    createParticles(el, 18);
  });

  /* -----------------------------------------------------------------
     PARALLAX — fondos fijos con movimiento (funciona también en móvil)
  ----------------------------------------------------------------- */
  var parallaxEls = Array.prototype.slice.call(document.querySelectorAll('[data-parallax]'));
  var heroBg = document.getElementById('hero-bg');
  var ticking = false;

  function updateParallax() {
    var vh = window.innerHeight;

    if (heroBg) {
      var offset = window.scrollY * 0.32;
      heroBg.style.transform = 'translateY(' + offset + 'px) scale(1.12)';
    }

    parallaxEls.forEach(function (el) {
      var rect = el.parentElement.getBoundingClientRect();
      var centerDelta = (rect.top + rect.height / 2) - vh / 2;
      var move = centerDelta * -0.12;
      move = Math.max(Math.min(move, 60), -60);
      el.style.transform = 'translateY(' + move + 'px)';
    });

    ticking = false;
  }

  function onScrollParallax() {
    if (!ticking && !reduceMotion) {
      window.requestAnimationFrame(updateParallax);
      ticking = true;
    }
  }
  window.addEventListener('scroll', onScrollParallax, { passive: true });
  window.addEventListener('resize', onScrollParallax);
  updateParallax();

  /* -----------------------------------------------------------------
     TYPEWRITER — título del hero
  ----------------------------------------------------------------- */
  var typewriterEl = document.getElementById('typewriter');
  var cursorEl = document.getElementById('hero-cursor');
  var typewriterStarted = false;

  function typeWriter() {
    if (!typewriterEl || typewriterStarted) return;
    typewriterStarted = true;
    var text = typewriterEl.getAttribute('data-text') || '';

    if (reduceMotion) {
      typewriterEl.textContent = text;
      return;
    }

    var i = 0;
    typewriterEl.textContent = '';
    (function type() {
      if (i <= text.length) {
        typewriterEl.textContent = text.slice(0, i);
        i++;
        setTimeout(type, 65);
      } else if (cursorEl) {
        setTimeout(function () { cursorEl.style.opacity = '0.35'; }, 900);
      }
    })();
  }

  /* -----------------------------------------------------------------
     REVEAL ON SCROLL (IntersectionObserver)
  ----------------------------------------------------------------- */
  var revealEls = document.querySelectorAll('.reveal');
  var heroRevealEls = document.querySelectorAll('.hero .reveal');

  var revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

  revealEls.forEach(function (el) {
    // El hero se revela manualmente al terminar el preloader, no por scroll
    if (!el.closest('.hero')) revealObserver.observe(el);
  });

  function revealHeroNow() {
    heroRevealEls.forEach(function (el) {
      el.classList.add('is-visible');
    });
    typeWriter();
  }

  /* -----------------------------------------------------------------
     CONTADORES — estadísticas que suben desde 0
  ----------------------------------------------------------------- */
  var statNums = document.querySelectorAll('.stat-num');

  function animateCount(el) {
    var target = parseFloat(el.getAttribute('data-target'), 10);
    var prefix = el.getAttribute('data-prefix') || '';
    var suffix = el.getAttribute('data-suffix') || '';
    var duration = 1600;
    var startTs = null;

    if (reduceMotion) {
      el.textContent = prefix + target + suffix;
      return;
    }

    function step(ts) {
      if (!startTs) startTs = ts;
      var progress = Math.min((ts - startTs) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      var value = Math.floor(eased * target);
      el.textContent = prefix + value + suffix;
      if (progress < 1) window.requestAnimationFrame(step);
      else el.textContent = prefix + target + suffix;
    }
    window.requestAnimationFrame(step);
  }

  var statsObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        animateCount(entry.target);
        statsObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  statNums.forEach(function (el) { statsObserver.observe(el); });

  /* -----------------------------------------------------------------
     FILTROS DE MENÚ
  ----------------------------------------------------------------- */
  var filterButtons = document.querySelectorAll('.menu-filter');
  var menuCards = document.querySelectorAll('.menu-card');

  filterButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      filterButtons.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      var cat = btn.getAttribute('data-cat');

      menuCards.forEach(function (card) {
        var show = cat === 'all' || card.getAttribute('data-cat') === cat;
        card.style.display = show ? '' : 'none';
      });
    });
  });

  /* -----------------------------------------------------------------
     FORMULARIO DE CONTACTO → ABRE WHATSAPP CON EL MENSAJE
  ----------------------------------------------------------------- */
  var contactForm = document.getElementById('contact-form');
  var WHATSAPP_NUMBER = '525633649600';

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      var nombre = (document.getElementById('nombre') || {}).value || '';
      var telefono = (document.getElementById('telefono') || {}).value || '';
      var pedido = (document.getElementById('pedido') || {}).value || '';

      var mensaje = '¡Hola! Soy ' + nombre.trim() + '. Quiero pedir: ' + pedido.trim() + '.';
      if (telefono.trim()) mensaje += ' Mi teléfono de contacto es ' + telefono.trim() + '.';
      mensaje += ' (Enviado desde la página web de Taquería Los Soles 🌮)';

      var url = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(mensaje);
      window.open(url, '_blank', 'noopener');
      contactForm.reset();
    });
  }

})();
