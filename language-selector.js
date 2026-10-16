(() => {
  "use strict";

  const header = document.querySelector(".site-nav .nav-inner");
  if (!header) return;

  const languages = [
    ["en", "gb", "English"],
    ["bg", "bg", "Bulgarian", "\u0411\u044a\u043b\u0433\u0430\u0440\u0441\u043a\u0438"],
    ["hr", "hr", "Croatian", "Hrvatski"],
    ["cs", "cz", "Czech", "\u010ce\u0161tina"],
    ["da", "dk", "Danish", "Dansk"],
    ["nl", "nl", "Dutch", "Nederlands"],
    ["et", "ee", "Estonian", "Eesti"],
    ["fi", "fi", "Finnish", "Suomi"],
    ["fr", "fr", "French", "Fran\u00e7ais"],
    ["de", "de", "German", "Deutsch"],
    ["el", "gr", "Greek", "\u0395\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac"],
    ["he", "il", "Hebrew", "\u05e2\u05d1\u05e8\u05d9\u05ea"],
    ["hi", "in", "Hindi", "\u0939\u093f\u0928\u094d\u0926\u0940"],
    ["is", "is", "Icelandic", "\u00cdslenska"],
    ["ga", "ie", "Irish", "Gaeilge"],
    ["it", "it", "Italian", "Italiano"],
    ["ja", "jp", "Japanese", "\u65e5\u672c\u8a9e"],
    ["ko", "kr", "Korean", "\ud55c\uad6d\uc5b4"],
    ["lv", "lv", "Latvian", "Latvie\u0161u"],
    ["lt", "lt", "Lithuanian", "Lietuvi\u0173"],
    ["no", "no", "Norwegian", "Norsk"],
    ["pl", "pl", "Polish", "Polski"],
    ["pt", "pt", "Portuguese", "Portugu\u00eas"],
    ["ro", "ro", "Romanian", "Rom\u00e2n\u0103"],
    ["sr", "rs", "Serbian", "\u0421\u0440\u043f\u0441\u043a\u0438"],
    ["sk", "sk", "Slovak", "Sloven\u010dina"],
    ["sl", "si", "Slovenian", "Sloven\u0161\u010dina"],
    ["es", "es", "Spanish", "Espa\u00f1ol"],
    ["sv", "se", "Swedish", "Svenska"],
    ["uk", "ua", "Ukrainian", "\u0423\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430"],
    ["cy", "wales", "Welsh", "Cymraeg"]
  ];
  const originalOrigin = "https://www.radar-chat.app";
  const translatedOrigin = "https://www-radar--chat-app.translate.goog";
  const current = new URL(window.location.href);
  const isTranslated = current.origin === translatedOrigin;
  const activeCode = isTranslated ? current.searchParams.get("_x_tr_tl") : "en";
  const active = languages.find(([code]) => code === activeCode) || languages[0];

  function languageUrl(code) {
    const url = new URL(current.pathname + current.search + current.hash, originalOrigin);
    for (const key of Array.from(url.searchParams.keys())) {
      if (key.startsWith("_x_tr_")) url.searchParams.delete(key);
    }
    if (code !== "en") {
      url.host = new URL(translatedOrigin).host;
      url.searchParams.set("_x_tr_sl", "auto");
      url.searchParams.set("_x_tr_tl", code);
      url.searchParams.set("_x_tr_hl", "en-US");
      url.searchParams.set("_x_tr_pto", "wapp");
    }
    return url.href;
  }

  function flag(country) {
    const image = document.createElement("img");
    image.src = new URL(`assets/flags/${country}.svg`, document.baseURI).href;
    image.alt = "";
    image.width = 28;
    image.height = 21;
    return image;
  }

  const selector = document.createElement("details");
  selector.className = "language-selector notranslate";
  selector.setAttribute("translate", "no");

  const toggle = document.createElement("summary");
  toggle.title = "Choose website language";
  toggle.setAttribute("aria-label", `Choose website language. Current language: ${active[2]}`);
  toggle.append(flag(active[1]));
  const arrow = document.createElement("span");
  arrow.className = "language-selector-arrow";
  arrow.textContent = "\u25be";
  arrow.setAttribute("aria-hidden", "true");
  toggle.append(arrow);
  selector.append(toggle);

  const choices = document.createElement("div");
  choices.className = "language-selector-choices";
  choices.setAttribute("role", "group");
  choices.setAttribute("aria-label", "Website languages");
  for (const [code, country, english, native = english] of languages) {
    const link = document.createElement("a");
    link.href = languageUrl(code);
    link.title = native === english ? english : `${native} (${english})`;
    link.setAttribute("aria-label", link.title);
    link.hreflang = code;
    if (code === active[0]) link.setAttribute("aria-current", "true");
    link.append(flag(country));
    choices.append(link);
  }
  selector.append(choices);
  header.append(selector);

  document.addEventListener("click", (event) => {
    if (!selector.contains(event.target)) selector.open = false;
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && selector.open) {
      selector.open = false;
      toggle.focus();
    }
  });
  selector.addEventListener("focusout", (event) => {
    if (!selector.contains(event.relatedTarget)) selector.open = false;
  });
})();
