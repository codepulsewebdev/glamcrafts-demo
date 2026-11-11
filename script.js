/* ============================================================
   Glamcrafts Lenasia — script.js
   ============================================================ */

(function() {
  "use strict";

  var GALLERY = {
    "parcels-kunchas": {
      "label": "Gift Parcels & Kunchas",
      "images": [
        { "src": "images/Screenshot_20261111_123313_Instagram.jpg" },
        { "src": "images/Screenshot_20261111_123326_Instagram.jpg" },
        { "src": "images/Screenshot_20261111_123328_Instagram.jpg" },
        { "src": "images/Screenshot_20261111_123331_Instagram.jpg" },
        { "src": "images/Screenshot_20261111_123333_Instagram.jpg" },
        { "src": "images/Screenshot_20261111_123336_Instagram.jpg" },
        { "src": "images/Screenshot_20261111_123340_Instagram.jpg" },
        { "src": "images/Screenshot_20261111_123343_Instagram.jpg" },
        { "src": "images/Screenshot_20261111_123346_Instagram.jpg" },
        { "src": "images/Screenshot_20261111_123358_Instagram.jpg" },
        { "src": "images/Screenshot_20261111_123401_Instagram.jpg" },
        { "src": "images/Screenshot_20261111_123404_Instagram.jpg" },
        { "src": "images/Screenshot_20261111_123407_Instagram.jpg" },
        { "src": "images/Screenshot_20261111_123414_Instagram.jpg" },
        { "src": "images/Screenshot_20261111_123417_Instagram.jpg" },
        { "src": "images/parcels kunchas.jpg" },
        { "src": "images/parcels kunchas 2.jpg" },
        { "src": "images/parcels kunchas 3.jpg" },
        { "src": "images/parcels kunchas 4.jpg" },
        { "src": "images/parcels kunchas 5.jpg" },
        { "src": "images/parcels kunchas 6.jpg" },
        { "src": "images/parcels kunchas 7.jpg" },
        { "src": "images/parcels kunchas 8.jpg" },
        { "src": "images/parcels kunchas 9.jpg" },
        { "src": "images/parcels kunchas 10.jpg" },
        { "src": "images/parcels kunchas 11.jpg" },
        { "src": "images/parcels kunchas 12.jpg" },
        { "src": "images/parcels kunchas 13.jpg" },
        { "src": "images/parcels kunchas 14.jpg" },
        { "src": "images/parcels kunchas 15.jpg" },
        { "src": "images/parcels kunchas 16.jpg" }
      ]
    },
    "baby-gifting": {
      "label": "Baby Gifts & Hampers",
      "images": [
        { "src": "images/Screenshot_20261111_123443_Instagram.jpg" },
        { "src": "images/Screenshot_20261111_123447_Instagram.jpg" },
        { "src": "images/Screenshot_20261111_123450_Instagram.jpg" },
        { "src": "images/Screenshot_20261111_123453_Instagram.jpg" },
        { "src": "images/Screenshot_20261111_123455_Instagram.jpg" },
        { "src": "images/Screenshot_20261111_123458_Instagram.jpg" },
        { "src": "images/baby gifting.jpg" },
        { "src": "images/baby gifting 2.jpg" },
        { "src": "images/baby gifting 3.jpg" },
        { "src": "images/baby gifting 4.jpg" },
        { "src": "images/baby gifting 5.jpg" },
        { "src": "images/baby gifting 6.jpg" },
        { "src": "images/baby gifting 7.jpg" },
        { "src": "images/baby gifting 8.jpg" },
        { "src": "images/baby gifting girl 9.jpg" },
        { "src": "images/baby gifting boy 10.jpg" }
      ]
    },
    "parcel-boxes": {
      "label": "Gift Parcel Boxes",
      "images": [
        { "src": "images/Screenshot_20261111_123614_Instagram.jpg" },
        { "src": "images/Screenshot_20261111_123623_Instagram.jpg" },
        { "src": "images/Screenshot_20261111_123617_Instagram.jpg" },
        { "src": "images/Screenshot_20261111_123626_Instagram.jpg" },
        { "src": "images/Screenshot_20261111_123619_Instagram.jpg" },
        { "src": "images/Screenshot_20261111_123621_Instagram.jpg" },
        { "src": "images/parcel boxes.jpg" },
        { "src": "images/parcel boxes 2.jpg" },
        { "src": "images/parcel boxes3.jpg" },
        { "src": "images/parcel boxes 4.jpg" },
        { "src": "images/parcel boxes 5.jpg" },
        { "src": "images/parcel boxes 6.jpg" },
        { "src": "images/parcel boxes 7.jpg" },
        { "src": "images/parcel boxes 8.jpg" },
        { "src": "images/parcel boxes 9.jpg" },
        { "src": "images/parcel boxes 10.jpg" }
      ]
    },
    "eid-gifting": {
      "label": "Eid Gifts",
      "images": [
        { "src": "images/eid gifting.jpg" },
        { "src": "images/eid gifting 2.jpg" },
        { "src": "images/eid gifting 3.jpg" },
        { "src": "images/eid gifting 4.jpg" },
        { "src": "images/eid gifting 5.jpg" },
        { "src": "images/eid gifting 6.jpg" },
        { "src": "images/eid gifting 7.jpg" }
      ]
    },
    "dutch-pour-frame": {
      "label": "Dutch Pour Art Frames",
      "images": [
        { "src": "images/Screenshot_20261111_123526_Instagram.jpg" },
        { "src": "images/Screenshot_20261111_123530_Instagram.jpg" },
        { "src": "images/dutch pour frame.jpg" },
        { "src": "images/dutch pour frame 2.jpg" },
        { "src": "images/dutch pour frame 3.jpg" },
        { "src": "images/dutch pour frame 4.jpg" },
        { "src": "images/dutch pour frame 5.jpg" },
        { "src": "images/dutch pour frame 6.jpg" },
        { "src": "images/dutch pour frame 7.jpg" }
      ]
    },
    "ring-nikkah": {
      "label": "Nikah & Ring Parcels",
      "images": [
        { "src": "images/Screenshot_20261111_123636_Instagram.jpg" },
        { "src": "images/Screenshot_20261111_123639_Instagram.jpg" },
        { "src": "images/ring nikkah.jpg" },
        { "src": "images/ring nikkah 2.jpg" },
        { "src": "images/ring nikkah 3.jpg" },
        { "src": "images/ring nikkah 4.jpg" },
        { "src": "images/ring nikkah 5.jpg" }
      ]
    },
    "quran-yaseen": {
      "label": "Quran & Yaseen Gifting",
      "images": [
        { "src": "images/Screenshot_20261111_123540_Instagram.jpg" },
        { "src": "images/Screenshot_20261111_123543_Instagram.jpg" },
        { "src": "images/Screenshot_20261111_123547_Instagram.jpg" },
        { "src": "images/Screenshot_20261111_123553_Instagram.jpg" },
        { "src": "images/quran yaseen.jpg" },
        { "src": "images/quran yaseen 2.jpg" },
        { "src": "images/quran yaseen 3.jpg" },
        { "src": "images/quran yaseen 4.jpg" },
        { "src": "images/quran yaseen 5.jpg" }
      ]
    },
    "decor": {
      "label": "Handcrafted D\u00e9cor",
      "images": [
        { "src": "images/Screenshot_20261111_123507_Instagram.jpg" },
        { "src": "images/Screenshot_20261111_123514_Instagram.jpg" },
        { "src": "images/Screenshot_20261111_123516_Instagram.jpg" },
        { "src": "images/decor.jpg" },
        { "src": "images/decor2.jpg" },
        { "src": "images/decor3.jpg" },
        { "src": "images/decor4.jpg" }
      ]
    },
    "musallah-stand": {
      "label": "Musallah Stands",
      "images": [
        { "src": "images/musallah stand.jpg" },
        { "src": "images/musallah stand 2.jpg" }
      ]
    },
    "school-projects": {
      "label": "School Projects & Model Kits",
      "images": [
        { "src": "images/school projects mineshaft headgear.jpg" },
        { "src": "images/school projects electromagnetic crane.jpg" },
        { "src": "images/school projects house with buzzer and light.jpg" },
        { "src": "images/home-kits.png" }
      ]
    }
  };

var CATEGORY_ORDER = Object.keys(GALLERY);
  var WHATSAPP_NUMBER = "27785659464";

  /* -----------------------------------------------------------
     MOBILE NAV TOGGLE
     ----------------------------------------------------------- */
  var navToggle = document.getElementById("navToggle");
  var mainNav = document.getElementById("main-nav");

  if (navToggle) {
    navToggle.addEventListener("click", function() {
      var isOpen = mainNav.classList.toggle("open");
      navToggle.classList.toggle("open", isOpen);
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    mainNav.addEventListener("click", function(e) {
      if (e.target.tagName === "A") {
        mainNav.classList.remove("open");
        navToggle.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* -----------------------------------------------------------
     ACTIVE NAV LINK
     ----------------------------------------------------------- */
  var currentPage = window.location.pathname.split("/").pop() || "index.html";
  var navLinks = document.querySelectorAll(".main-nav a");
  navLinks.forEach(function(link) {
    var href = link.getAttribute("href");
    if (href === currentPage || (currentPage === "index.html" && href === "index.html")) {
      link.classList.add("active");
    }
    if (currentPage === "about.html" && href === "about.html") {
      link.classList.add("active");
    }
  });

  /* -----------------------------------------------------------
     RENDER GALLERY
     ----------------------------------------------------------- */
  var galleryRoot = document.getElementById("galleryCategories");

  if (galleryRoot) {
    galleryRoot.querySelectorAll("button[data-cat]").forEach(function(button) {
      button.addEventListener("click", function() {
        openLightbox(button.dataset.cat, Number(button.dataset.index));
      });
    });
  }

  /* -----------------------------------------------------------
     CATEGORY MODAL
     ----------------------------------------------------------- */
  var catModal = document.getElementById("catModal");
  var catModalTitle = document.getElementById("catModalTitle");
  var catModalGrid = document.getElementById("catModalGrid");
  var catModalClose = document.getElementById("catModalClose");
  var activeCatSlug = null;

  function openCategoryModal(slug) {
    if (!catModal) return;
    activeCatSlug = slug;
    var cat = GALLERY[slug];
    catModalTitle.textContent = cat.label;
    catModalGrid.innerHTML = "";

    cat.images.forEach(function(img, i) {
      var tile = document.createElement("button");
      tile.type = "button";
      tile.className = "cat-tile";
      tile.setAttribute("aria-label", "View image");

      var thumb = document.createElement("div");
      thumb.className = "cat-tile-img";
      var image = document.createElement("img");
      image.src = img.src;
      image.alt = cat.label + " — portfolio example " + (i + 1);
      image.loading = "lazy";
      image.decoding = "async";
      thumb.appendChild(image);

      tile.appendChild(thumb);

      tile.addEventListener("click", function() {
        openLightbox(slug, i);
      });

      catModalGrid.appendChild(tile);
    });

    catModal.classList.add("active");
    catModal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    pushModalHistory("category");
  }

  function closeCategoryModal(skipHistory) {
    if (!catModal) return;
    catModal.classList.remove("active");
    catModal.setAttribute("aria-hidden", "true");
    if (!lightbox.classList.contains("active")) {
      document.body.classList.remove("modal-open");
    }
    if (!skipHistory) popModalHistoryIfNeeded("category");
  }

  if (catModalClose) {
    catModalClose.addEventListener("click", function() { closeCategoryModal(); });
    catModal.addEventListener("click", function(e) {
      if (e.target === catModal) closeCategoryModal();
    });
  }

  /* -----------------------------------------------------------
     LIGHTBOX
     ----------------------------------------------------------- */
  var lightbox = document.getElementById("lightbox");
  var lightboxImg = document.getElementById("lightboxImg");
  var lightboxClose = document.getElementById("lightboxClose");
  var lightboxPrev = document.getElementById("lightboxPrev");
  var lightboxNext = document.getElementById("lightboxNext");
  var activeIndex = 0;

  function renderLightbox() {
    var cat = GALLERY[activeCatSlug];
    var img = cat.images[activeIndex];
    lightboxImg.src = img.src;
    lightboxImg.alt = cat.label + " — portfolio example " + (activeIndex + 1);
  }

  function openLightbox(slug, index) {
    if (!lightbox) return;
    activeCatSlug = slug;
    activeIndex = index;
    renderLightbox();
    lightbox.classList.add("active");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    pushModalHistory("lightbox");
  }

  function closeLightbox(skipHistory) {
    if (!lightbox) return;
    lightbox.classList.remove("active");
    lightbox.setAttribute("aria-hidden", "true");
    lightboxImg.classList.remove("zoomed");
    
    // Only remove body class if category modal is also closed
    if (!catModal || !catModal.classList.contains("active")) {
      document.body.classList.remove("modal-open");
    }
    
    if (!skipHistory) {
      // Go back to category modal state
      if (history.state && history.state.glamcraftModal === "lightbox") {
        history.back();
      }
    }
  }

  function showPrev() {
    var cat = GALLERY[activeCatSlug];
    activeIndex = (activeIndex - 1 + cat.images.length) % cat.images.length;
    renderLightbox();
  }

  function showNext() {
    var cat = GALLERY[activeCatSlug];
    activeIndex = (activeIndex + 1) % cat.images.length;
    renderLightbox();
  }

  if (lightboxClose) {
    lightboxClose.addEventListener("click", function() { closeLightbox(); });
    lightboxPrev.addEventListener("click", showPrev);
    lightboxNext.addEventListener("click", showNext);
    lightbox.addEventListener("click", function(e) {
      if (e.target === lightbox) closeLightbox();
    });
    lightboxImg.addEventListener("click", function() {
      lightboxImg.classList.toggle("zoomed");
    });

    document.addEventListener("keydown", function(e) {
      if (!lightbox.classList.contains("active")) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    });
  }

  /* -----------------------------------------------------------
     HISTORY / BACK BUTTON
     ----------------------------------------------------------- */
  function pushModalHistory(kind) {
    history.pushState({ glamcraftModal: kind }, "");
  }

  function popModalHistoryIfNeeded(kind) {
    if (history.state && history.state.glamcraftModal === kind) {
      history.back();
    }
  }

  window.addEventListener("popstate", function() {
    // If lightbox is open, close it and return (don't close category)
    if (lightbox && lightbox.classList.contains("active")) {
      closeLightbox(true);
      return;
    }
    // If only category modal is open, close it
    if (catModal && catModal.classList.contains("active")) {
      closeCategoryModal(true);
    }
  });

  /* -----------------------------------------------------------
     ENQUIRY FORM
     ----------------------------------------------------------- */
  var form = document.getElementById("enquiryForm");
  if (form) {
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      if (!form.reportValidity()) return;
      var name = form.elements.namedItem("name").value.trim();
      var surname = form.elements.namedItem("surname").value.trim();
      var phone = form.elements.namedItem("phone").value.trim();
      var message = form.elements.namedItem("message").value.trim();

      var text =
        "Hi Glamcrafts Lenasia, I'd like to make an enquiry.\n\n" +
        "Name: " + name + " " + surname + "\n" +
        "Phone: " + phone + "\n" +
        "Message: " + message;

      var url = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(text);
      window.open(url, "_blank", "noopener");
    });
  }

  /* -----------------------------------------------------------
     FOOTER YEAR
     ----------------------------------------------------------- */
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }


  /* Full portfolio pages: click to enlarge with keyboard navigation. */
  var portfolioButtons = Array.prototype.slice.call(document.querySelectorAll('[data-portfolio-image]'));
  if (portfolioButtons.length) {
    var preview = document.createElement('div');
    preview.className = 'portfolio-viewer';
    preview.hidden = true;
    preview.innerHTML = '<div class="portfolio-viewer-inner" role="dialog" aria-modal="true" aria-label="Photo viewer">' +
      '<button type="button" class="portfolio-viewer-close" aria-label="Close photo">&times;</button>' +
      '<button type="button" class="portfolio-viewer-prev" aria-label="Previous photo">&#10094;</button>' +
      '<img alt="" src="" decoding="async">' +
      '<button type="button" class="portfolio-viewer-next" aria-label="Next photo">&#10095;</button>' +
      '<span class="portfolio-viewer-counter" aria-live="polite"></span></div>';
    document.body.appendChild(preview);
    var activePhoto = 0, previousFocus = null;
    var close = preview.querySelector('.portfolio-viewer-close');
    function showPhoto(index) {
      activePhoto = (index + portfolioButtons.length) % portfolioButtons.length;
      var target = portfolioButtons[activePhoto];
      var previewImg = preview.querySelector('img');
      previewImg.src = target.getAttribute('data-portfolio-image');
      previewImg.alt = target.querySelector('img').alt;
      preview.querySelector('.portfolio-viewer-counter').textContent = (activePhoto + 1) + ' / ' + portfolioButtons.length;
    }
    function openPhoto(index) {
      previousFocus = document.activeElement;
      showPhoto(index);
      preview.hidden = false;
      document.body.classList.add('portfolio-viewer-open');
      close.focus();
    }
    function closePhoto() {
      preview.hidden = true;
      document.body.classList.remove('portfolio-viewer-open');
      if (previousFocus && previousFocus.focus) previousFocus.focus();
    }
    portfolioButtons.forEach(function(button,index) {
      button.addEventListener('click',function() {openPhoto(index);});
    });
    close.addEventListener('click',closePhoto);
    preview.querySelector('.portfolio-viewer-prev').addEventListener('click',function(){showPhoto(activePhoto-1);});
    preview.querySelector('.portfolio-viewer-next').addEventListener('click',function(){showPhoto(activePhoto+1);});
    preview.addEventListener('click',function(event){if(event.target===preview)closePhoto();});
    preview.addEventListener('keydown',function(event){
      if (event.key==='Tab') {
        var controls=[close,preview.querySelector('.portfolio-viewer-prev'),preview.querySelector('.portfolio-viewer-next')];
        if (event.shiftKey && document.activeElement===controls[0]) {event.preventDefault();controls[2].focus();}
        else if (!event.shiftKey && document.activeElement===controls[2]) {event.preventDefault();controls[0].focus();}
      }
    });
    document.addEventListener('keydown',function(event){
      if (preview.hidden)return;
      if(event.key==='Escape'){event.preventDefault();closePhoto();}
      if(event.key==='ArrowLeft'){event.preventDefault();showPhoto(activePhoto-1);}
      if(event.key==='ArrowRight'){event.preventDefault();showPhoto(activePhoto+1);}
    });
  }

})();
