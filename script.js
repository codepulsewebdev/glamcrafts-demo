/* ============================================================
   GlamCraft Lenasia — script.js
   ============================================================ */

(function() {
  "use strict";

  var GALLERY = {
    "parcels-kunchas": {
      "label": "Parcels & Kunchas",
      "images": [
        { "src": "images/parcels kunchas.jpg", "title": "Parcels Kunchas" },
        { "src": "images/parcels kunchas 2.jpg", "title": "Parcels Kunchas 2" },
        { "src": "images/parcels kunchas 3.jpg", "title": "Parcels Kunchas 3" },
        { "src": "images/parcels kunchas 4.jpg", "title": "Parcels Kunchas 4" },
        { "src": "images/parcels kunchas 5.jpg", "title": "Parcels Kunchas 5" },
        { "src": "images/parcels kunchas 6.jpg", "title": "Parcels Kunchas 6" },
        { "src": "images/parcels kunchas 7.jpg", "title": "Parcels Kunchas 7" },
        { "src": "images/parcels kunchas 8.jpg", "title": "Parcels Kunchas 8" },
        { "src": "images/parcels kunchas 9.jpg", "title": "Parcels Kunchas 9" },
        { "src": "images/parcels kunchas 10.jpg", "title": "Parcels Kunchas 10" },
        { "src": "images/parcels kunchas 11.jpg", "title": "Parcels Kunchas 11" },
        { "src": "images/parcels kunchas 12.jpg", "title": "Parcels Kunchas 12" },
        { "src": "images/parcels kunchas 13.jpg", "title": "Parcels Kunchas 13" },
        { "src": "images/parcels kunchas 14.jpg", "title": "Parcels Kunchas 14" },
        { "src": "images/parcels kunchas 15.jpg", "title": "Parcels Kunchas 15" },
        { "src": "images/parcels kunchas 16.jpg", "title": "Parcels Kunchas 16" }
      ]
    },
    "baby-gifting": {
  "label": "Baby Gifting",
  "images": [
    { "src": "images/baby gifting.jpg", "title": "Baby Gifting" },
    { "src": "images/baby gifting 2.jpg", "title": "Baby Gifting 2" },
    { "src": "images/baby gifting 3.jpg", "title": "Baby Gifting 3" },
    { "src": "images/baby gifting 4.jpg", "title": "Baby Gifting 4" },
    { "src": "images/baby gifting 5.jpg", "title": "Baby Gifting 5" },
    { "src": "images/baby gifting 6.jpg", "title": "Baby Gifting 6" },
    { "src": "images/baby gifting 7.jpg", "title": "Baby Gifting 7" },
    { "src": "images/baby gifting 8.jpg", "title": "Baby Gifting 8" },
    { "src": "images/baby gifting girl 9.jpg", "title": "Baby Gifting Girl" },
    { "src": "images/baby gifting boy 10.jpg", "title": "Baby Gifting Boy" }
  ]
}
    "parcel-boxes": {
      "label": "Parcel Boxes",
      "images": [
        { "src": "images/parcel boxes.jpg", "title": "Parcel Boxes" },
        { "src": "images/parcel boxes 2.jpg", "title": "Parcel Boxes 2" },
        { "src": "images/parcel boxes3.jpg", "title": "Parcel Boxes 3" },
        { "src": "images/parcel boxes 4.jpg", "title": "Parcel Boxes 4" },
        { "src": "images/parcel boxes 5.jpg", "title": "Parcel Boxes 5" },
        { "src": "images/parcel boxes 6.jpg", "title": "Parcel Boxes 6" },
        { "src": "images/parcel boxes 7.jpg", "title": "Parcel Boxes 7" },
        { "src": "images/parcel boxes 8.jpg", "title": "Parcel Boxes 8" },
        { "src": "images/parcel boxes 9.jpg", "title": "Parcel Boxes 9" },
        { "src": "images/parcel boxes 10.jpg", "title": "Parcel Boxes 10" }
      ]
    },
    "eid-gifting": {
      "label": "Eid Gifting",
      "images": [
        { "src": "images/eid gifting.jpg", "title": "Eid Gifting" },
        { "src": "images/eid gifting 2.jpg", "title": "Eid Gifting 2" },
        { "src": "images/eid gifting 3.jpg", "title": "Eid Gifting 3" },
        { "src": "images/eid gifting 4.jpg", "title": "Eid Gifting 4" },
        { "src": "images/eid gifting 5.jpg", "title": "Eid Gifting 5" },
        { "src": "images/eid gifting 6.jpg", "title": "Eid Gifting 6" },
        { "src": "images/eid gifting 7.jpg", "title": "Eid Gifting 7" }
      ]
    },
    "dutch-pour-frame": {
      "label": "Dutch Pour Frame",
      "images": [
        { "src": "images/dutch pour frame.jpg", "title": "Dutch Pour Frame" },
        { "src": "images/dutch pour frame 2.jpg", "title": "Dutch Pour Frame 2" },
        { "src": "images/dutch pour frame 3.jpg", "title": "Dutch Pour Frame 3" },
        { "src": "images/dutch pour frame 4.jpg", "title": "Dutch Pour Frame 4" },
        { "src": "images/dutch pour frame 5.jpg", "title": "Dutch Pour Frame 5" },
        { "src": "images/dutch pour frame 6.jpg", "title": "Dutch Pour Frame 6" },
        { "src": "images/dutch pour frame 7.jpg", "title": "Dutch Pour Frame 7" }
      ]
    },
    "ring-nikkah": {
      "label": "Ring & Nikkah",
      "images": [
        { "src": "images/ring nikkah.jpg", "title": "Ring Nikkah" },
        { "src": "images/ring nikkah 2.jpg", "title": "Ring Nikkah 2" },
        { "src": "images/ring nikkah 3.jpg", "title": "Ring Nikkah 3" },
        { "src": "images/ring nikkah 4.jpg", "title": "Ring Nikkah 4" },
        { "src": "images/ring nikkah 5.jpg", "title": "Ring Nikkah 5" }
      ]
    },
    "quran-yaseen": {
      "label": "Quran & Yaseen",
      "images": [
        { "src": "images/quran yaseen.jpg", "title": "Quran Yaseen" },
        { "src": "images/quran yaseen 2.jpg", "title": "Quran Yaseen 2" },
        { "src": "images/quran yaseen 3.jpg", "title": "Quran Yaseen 3" },
        { "src": "images/quran yaseen 4.jpg", "title": "Quran Yaseen 4" },
        { "src": "images/quran yaseen 5.jpg", "title": "Quran Yaseen 5" }
      ]
    },
    "decor": {
      "label": "Decor",
      "images": [
        { "src": "images/decor.jpg", "title": "Decor" },
        { "src": "images/decor2.jpg", "title": "Decor 2" },
        { "src": "images/decor3.jpg", "title": "Decor 3" },
        { "src": "images/decor4.jpg", "title": "Decor 4" }
      ]
    },
    "musallah-stand": {
      "label": "Musallah Stand",
      "images": [
        { "src": "images/musallah stand.jpg", "title": "Musallah Stand" },
        { "src": "images/musallah stand 2.jpg", "title": "Musallah Stand 2" }
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
    function buildTile(img, index, catSlug) {
      var btn = document.createElement("button");
      btn.className = "gallery-tile";
      btn.type = "button";
      btn.setAttribute("aria-label", "View " + img.title);
      btn.dataset.cat = catSlug;
      btn.dataset.index = String(index);

      var image = document.createElement("img");
      image.src = img.src;
      image.alt = img.title;
      image.loading = "lazy";
      image.decoding = "async";
      btn.appendChild(image);

      btn.addEventListener("click", function() {
        openLightbox(catSlug, index);
      });
      return btn;
    }

    CATEGORY_ORDER.forEach(function(slug) {
      var cat = GALLERY[slug];
      var section = document.createElement("div");
      section.className = "gallery-category";

      var head = document.createElement("div");
      head.className = "gallery-category-head";
      head.innerHTML = "<h3>" + cat.label + "</h3>";
      section.appendChild(head);

      var grid = document.createElement("div");
      grid.className = "gallery-grid";

      var hasMore = cat.images.length > 4;

      if (hasMore) {
        grid.classList.add("has-more");

        cat.images.slice(0, 4).forEach(function(img, i) {
          grid.appendChild(buildTile(img, i, slug));
        });

        var more = document.createElement("button");
        more.type = "button";
        more.className = "gallery-tile see-more";
        more.textContent = "See More";
        more.setAttribute("aria-label", "See all " + cat.label + " photos");
        more.addEventListener("click", function() {
          openCategoryModal(slug);
        });
        grid.appendChild(more);
      } else {
        cat.images.forEach(function(img, i) {
          grid.appendChild(buildTile(img, i, slug));
        });
      }

      section.appendChild(grid);
      galleryRoot.appendChild(section);
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
      tile.setAttribute("aria-label", "View " + img.title);

      var thumb = document.createElement("div");
      thumb.className = "cat-tile-img";
      var image = document.createElement("img");
      image.src = img.src;
      image.alt = img.title;
      image.loading = "lazy";
      image.decoding = "async";
      thumb.appendChild(image);

      var title = document.createElement("p");
      title.className = "cat-tile-title";
      title.textContent = img.title;

      tile.appendChild(thumb);
      tile.appendChild(title);

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
  var lightboxCaption = document.getElementById("lightboxCaption");
  var lightboxClose = document.getElementById("lightboxClose");
  var lightboxPrev = document.getElementById("lightboxPrev");
  var lightboxNext = document.getElementById("lightboxNext");
  var activeIndex = 0;

  function renderLightbox() {
    var cat = GALLERY[activeCatSlug];
    var img = cat.images[activeIndex];
    lightboxImg.src = img.src;
    lightboxImg.alt = img.title;
    lightboxCaption.textContent = img.title;
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
    if (!catModal.classList.contains("active")) {
      document.body.classList.remove("modal-open");
    }
    if (!skipHistory) popModalHistoryIfNeeded("lightbox");
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
    if (lightbox && lightbox.classList.contains("active")) {
      closeLightbox(true);
      return;
    }
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
      var name = form.name.value.trim();
      var surname = form.surname.value.trim();
      var phone = form.phone.value.trim();
      var message = form.message.value.trim();

      var text =
        "Hi GlenCrafts Lenasia, I'd like to make an enquiry.\n\n" +
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

})();