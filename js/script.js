  // Скрипты для главной
if (document.querySelector(".modal-message") !== null) {
  var popup_message = document.querySelector(".modal-message");
  var close_popup_message = popup_message.querySelector(".modal-close");
  var form_message = popup_message.querySelector("form");
  var user_name = form_message.querySelector("[name=user-name]");
  var user_mail = form_message.querySelector("[name=user-mail]");
  var user_message = form_message.querySelector("[name=user-message]");

  form_message.addEventListener("submit", function(evt) {
    if (!user_name.value || !user_mail.value || !user_message.value) {
      evt.preventDefault();
      popup_message.classList.remove("form-error");
      void popup_message.offsetWidth;
      popup_message.classList.add("form-error");
    }
  })
}

if (document.querySelector(".link-write-us") !== null) {
  var message_link = document.querySelector(".link-write-us");
  message_link.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup_message.classList.add("modal-show");
    popup_message.classList.add("modal-animation");
  })
  close_popup_message.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup_message.classList.remove("modal-show");
    popup_message.classList.remove("modal-animation");
    popup_message.classList.remove("form-error");
  })
}

if (document.querySelector(".modal-map") !== null) {
  var popup_map = document.querySelector(".modal-map");
  var map_link = document.querySelector(".map-link");
  var close_popup_map = popup_map.querySelector(".modal-close");
  map_link.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup_map.classList.add("modal-show");
  })
  close_popup_map.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup_map.classList.remove("modal-show");
  })
}

if (document.querySelector(".promo-slider") !== null) {
  var slider = document.querySelector(".promo-slider");
  var slide_perforators = slider.querySelector("#slide-perforators");
  var slide_drills = slider.querySelector("#slide-drills");
  var next_button = slider.querySelector(".button-next");
  var back_button = slider.querySelector(".button-back");
  var toggle_slide_1 = slider.querySelector(".slider-toggle-item--1");
  var toggle_slide_2 = slider.querySelector(".slider-toggle-item--2");

  toggle_slide_1.addEventListener("click", function(evt) {
    evt.preventDefault();
    slide_drills.removeAttribute("checked");
    slide_perforators.setAttribute("checked", true);
  })
  toggle_slide_2.addEventListener("click", function(evt) {
    evt.preventDefault();
    slide_perforators.removeAttribute("checked");
    slide_drills.setAttribute("checked", true);
  })

  next_button.addEventListener("click", function(evt) {
    evt.preventDefault();
    if (slide_perforators.checked) {
      slide_perforators.removeAttribute("checked");
      slide_drills.setAttribute("checked", true);
    } else {
      slide_drills.removeAttribute("checked");
      slide_perforators.setAttribute("checked", true);
    }
  })

  back_button.addEventListener("click", function(evt) {
    evt.preventDefault();
    if (slide_drills.checked) {
      slide_drills.removeAttribute("checked");
      slide_perforators.setAttribute("checked", true);
    } else {
      slide_perforators.removeAttribute("checked");
      slide_drills.setAttribute("checked", true);
    }
  })
}

// Скрипты для каталога
if (document.querySelector(".modal-kart") !== null) {
  var popup_kart = document.querySelector(".modal-kart");
  var buy_items = document.querySelectorAll(".button-buy");
  var close_popup_kart = popup_kart.querySelector(".modal-close");
  for (var i = 0; i < buy_items.length; i++) {
    var buy_item = buy_items[i];
    buy_item.addEventListener("click", click_on_button);
  }

  function click_on_button(evt) {
    evt.preventDefault();
    popup_kart.classList.add("modal-show");
  }

  close_popup_kart.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup_kart.classList.remove("modal-show");
  })
}
