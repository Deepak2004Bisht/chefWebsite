/* =============================================================
   script.js — All interactivity for the Chef Portfolio site
   ============================================================= */

/* ---------------- TRANSLATIONS (EN <-> HI) ---------------- */
const I18N = {
  en: {
    nav_home: "Home", nav_recipes: "Recipes", nav_blog: "Blog", nav_travel: "Travel",
    nav_menu: "Menu", nav_about: "About", nav_contact: "Contact",
    search_ph: "Search recipes, blogs, travel…",
    hero_eyebrow: "Welcome to", hero_chef: "Chef",
    hero_sub: "Authentic Recipes • Food Stories • Travel Experiences",
    hero_btn1: "Explore Recipes", hero_btn2: "Read Blog",
    tag_recipes: "Featured", title_recipes: "Signature Recipes",
    desc_recipes: "Hand-picked dishes loved by our community of home cooks.",
    tag_cats: "Browse", title_cats: "Recipe Categories",
    tag_blog: "Journal", title_blog: "Latest Blog Posts",
    desc_blog: "Kitchen wisdom, stories and tips from the pass.",
    tag_travel: "On the road", title_travel: "Travel & Food Stories",
    tag_menu: "Taste", title_menu: "Chef's Special Menu",
    tag_about: "The Chef", title_about: "About Pankaj Prajapati",
    about_p1: "My journey into the hotel industry began with a casual conversation with a colleague during my Tourism Studies. Little did I know, this spark would ignite a passion that would take me on an incredible adventure. When I joined Culinary School, I was clueless about the art of crafting a chef. But something about it resonated with me - it was different, unique, and unexplored. Coming from a conservative Brahmin family where even onions and garlic were taboo, I was hesitant to venture into non-vegetarian cuisine. The thought of my family's reaction terrified me. My first encounter with chicken was a revelation. For days, I obsessively washed my hands, struggling to reconcile my new experiences with my upbringing. But with time, I adapted, and my senses expanded.",
    about_p2: "Studying Food & Nutrition was a game-changer. I discovered the science behind what we eat and how it impacts our lives. As a chef, I learned to guide people with precision and care. For me, being a chef isn't just a job - it's a way of life that demands dedication, focus, and attention to detail. From small kitchens to grand hotels, and from local flavors to international cuisine, my journey has been a whirlwind of experiences. I've had the privilege of working in some of the biggest and smallest of places, both in my country and abroad. I've savored flavors, explored new lands, and grown as a person. And I'm excited for what's yet to come. Food and fitness fuel my passion. I'm always seeking new culinary experiences, experimenting with flavors, and learning. My daily routine includes cooking, meditation, yoga, and learning new things. I find solace in nature, and visiting Gurdwara Bangla Sahib fills me with an inexplicable sense of peace. In my free time, I enjoy reading, theater, watching plays, and enthusiastically hitting the roads on my bike, feeling the rush of adrenaline as I explore new routes and take in the scenic views. There's something about the open road that invigorates me and clears my mind. I'm eager to share my knowledge of food, nutrition, and tourism with you, whether in my mother tongue or English. Join me on this journey as I share easy, delicious recipes and travel adventures - both on and off the beaten path.",
    about_l1: "🏆 National Culinary Excellence Award",
    about_l2: "🎓 Certified Master Chef, IHM",
    about_l3: "🌍 Featured in 12 food magazines",
    c1: "Recipes Published", c2: "Years Experience", c3: "Countries Visited", c4: "Happy Readers",
    title_news: "Join the Kitchen Club", desc_news: "Fresh recipes and stories delivered to your inbox every week.",
    btn_sub: "Subscribe", ph_name: "Your name", ph_email: "Your email",
    ph_phone: "Phone", ph_subject: "Subject", ph_message: "Message",
    tag_social: "Follow along", title_social: "Social Media",
    tag_contact: "Say hello", title_contact: "Get In Touch",
    ct_addr: "42 Saffron Street, Jaipur, India", map: "Map placeholder",
    btn_send: "Send Message",
    foot_about: "Authentic recipes, food stories and travel experiences — cooked with love.",
    foot_quick: "Quick Links", foot_cats: "Categories", foot_follow: "Follow",
    cat_break: "Breakfast", cat_dinner: "Dinner", cat_dessert: "Desserts", cat_street: "Street Food",
    rights: "All rights reserved.",
    read_more: "Read More →", follow: "Follow", all: "All",
     nl_ok: "🎉 Welcome aboard! Check your inbox.",
    ct_ok: "✅ Message sent! I'll reply soon.",
    ct_err: "Please fill all required fields correctly.",
    no_results: "No matches found. Try another word.",
    m_ingredients: "Ingredients", m_steps: "Method", m_about: "About this recipe",
    m_serves: "Serves", m_time: "Time", m_diff: "Difficulty", m_by: "By",
  },
  hi: {
    nav_home: "होम", nav_recipes: "रेसिपी", nav_blog: "ब्लॉग", nav_travel: "यात्रा",
    nav_menu: "मेन्यू", nav_about: "परिचय", nav_contact: "संपर्क",
    search_ph: "रेसिपी, ब्लॉग, यात्रा खोजें…",
    hero_eyebrow: "स्वागत है", hero_chef: "शेफ",
    hero_sub: "प्रामाणिक रेसिपी • खाने की कहानियाँ • यात्रा अनुभव",
    hero_btn1: "रेसिपी देखें", hero_btn2: "ब्लॉग पढ़ें",
    tag_recipes: "विशेष", title_recipes: "सिग्नेचर रेसिपी",
    desc_recipes: "हमारे घरेलू रसोइयों की पसंदीदा चुनिंदा डिशेज़।",
    tag_cats: "ब्राउज़ करें", title_cats: "रेसिपी श्रेणियाँ",
    tag_blog: "जर्नल", title_blog: "नवीनतम ब्लॉग पोस्ट",
    desc_blog: "रसोई की समझ, कहानियाँ और सुझाव।",
    tag_travel: "सफ़र में", title_travel: "यात्रा और खाने की कहानियाँ",
    tag_menu: "स्वाद", title_menu: "शेफ का स्पेशल मेन्यू",
    tag_about: "", title_about: "पंकज प्रजापति के बारे में",
    about_p1: "होटल इंडस्ट्री में मेरा सफ़र टूरिज़्म की पढ़ाई के दौरान एक साथी के साथ हुई आम बातचीत से शुरू हुआ। मुझे ज़रा भी अंदाज़ा नहीं था कि यह छोटी सी बात मेरे अंदर ऐसा जुनून जगाएगी जो मुझे एक शानदार सफ़र पर ले जाएगा। जब मैंने कलिनरी स्कूल जॉइन किया, तो मुझे शेफ़ बनने की कला के बारे में कुछ भी पता नहीं था। लेकिन इस चीज़ ने मुझे अपनी ओर खींचा - यह अलग, अनोखा और अनजाना था। एक रूढ़िवादी ब्राह्मण परिवार से होने के कारण, जहाँ प्याज़ और लहसुन तक खाना मना था, मैं नॉन-वेजिटेरियन खाना बनाने की शुरुआत करने से हिचकिचा रहा था। परिवार की प्रतिक्रिया के ख्याल से ही मैं डर जाता था। चिकन के साथ मेरा पहला अनुभव एक नई खोज जैसा था। कई दिनों तक मैं बार-बार अपने हाथ धोता रहा और अपने नए अनुभवों और अपनी परवरिश के बीच तालमेल बिठाने की कोशिश करता रहा। लेकिन समय के साथ, मैंने खुद को ढाल लिया और मेरी समझ का दायरा बढ़ गया।",
    about_p2: "फ़ूड और न्यूट्रिशन की पढ़ाई ने मेरी ज़िंदगी बदल दी। मैंने समझा कि हम जो खाते हैं, उसके पीछे क्या साइंस है और उसका हमारी ज़िंदगी पर क्या असर पड़ता है। एक शेफ़ के तौर पर, मैंने लोगों को सही और ध्यान से गाइड करना सीखा। मेरे लिए, शेफ़ होना सिर्फ़ एक नौकरी नहीं है - यह ज़िंदगी जीने का एक तरीका है जिसके लिए लगन, फ़ोकस और हर छोटी-छोटी बात पर ध्यान देने की ज़रूरत होती है। छोटी रसोई से लेकर बड़े होटलों तक, और लोकल स्वाद से लेकर इंटरनेशनल खाने तक, मेरा सफ़र बहुत सारे अनुभवों से भरा रहा है। मुझे अपने देश और विदेश, दोनों जगहों पर सबसे बड़ी और सबसे छोटी जगहों पर काम करने का मौका मिला है। मैंने अलग-अलग स्वाद चखे हैं, नई जगहों को देखा है और एक इंसान के तौर पर आगे बढ़ी हूँ। और मैं आगे आने वाले समय के लिए बहुत उत्साहित हूँ। खाना और फ़िटनेस ही मेरा जुनून है। मैं हमेशा खाने-पीने के नए अनुभव तलाशती रहती हूँ, अलग-अलग स्वादों के साथ एक्सपेरिमेंट करती हूँ और नई चीज़ें सीखती हूँ। मेरी रोज़ की रूटीन में खाना बनाना, मेडिटेशन, योग और नई चीज़ें सीखना शामिल है। मुझे कुदरत के बीच सुकून मिलता है, और गुरुद्वारा बंगला साहिब जाने से मुझे एक अजीब सी शांति का एहसास होता है। अपने खाली समय में, मुझे पढ़ना, थिएटर, नाटक देखना और पूरे जोश के साथ अपनी बाइक पर निकलना पसंद है। नए रास्तों को एक्सप्लोर करते हुए और खूबसूरत नज़ारों का मज़ा लेते हुए एड्रेनालाईन रश महसूस करना बहुत अच्छा लगता है। खुली सड़क में कुछ तो ऐसा है जो मुझे नई ऊर्जा देता है और मेरे दिमाग को साफ़ करता है। मैं खाने, न्यूट्रिशन और टूरिज़्म के बारे में अपनी जानकारी आपके साथ शेयर करने के लिए उत्सुक हूँ, चाहे वह मेरी मातृभाषा में हो या इंग्लिश में। इस सफ़र में मेरे साथ जुड़िए, जहाँ मैं आसान और स्वादिष्ट रेसिपीज़ और ट्रैवल एडवेंचर्स शेयर करूँगी - चाहे वे आम रास्ते हों या कुछ हटकर।",
    about_l1: "🏆 राष्ट्रीय पाक उत्कृष्टता पुरस्कार",
    about_l2: "🎓 प्रमाणित मास्टर शेफ, IHM",
    about_l3: "🌍 12 फूड मैगज़ीन में फीचर्ड",
    c1: "प्रकाशित रेसिपी", c2: "वर्षों का अनुभव", c3: "देश घूमे", c4: "खुश पाठक",
    title_news: "किचन क्लब से जुड़ें", desc_news: "हर हफ्ते नई रेसिपी और कहानियाँ आपके इनबॉक्स में।",
    btn_sub: "सब्सक्राइब करें", ph_name: "आपका नाम", ph_email: "आपका ईमेल",
    ph_phone: "फ़ोन", ph_subject: "विषय", ph_message: "संदेश",
    tag_social: "जुड़े रहें", title_social: "सोशल मीडिया",
    tag_contact: "नमस्ते कहें", title_contact: "संपर्क करें",
    ct_addr: "42 सैफ्रन स्ट्रीट, जयपुर, भारत", map: "मानचित्र प्लेसहोल्डर",
    btn_send: "संदेश भेजें",
    foot_about: "प्रामाणिक रेसिपी, खाने की कहानियाँ और यात्रा अनुभव — प्यार से बनाए गए।",
    foot_quick: "त्वरित लिंक", foot_cats: "श्रेणियाँ", foot_follow: "फॉलो करें",
    cat_break: "नाश्ता", cat_dinner: "रात का खाना", cat_dessert: "मिठाई", cat_street: "स्ट्रीट फूड",
    rights: "सर्वाधिकार सुरक्षित।",
    read_more: "और पढ़ें →", follow: "फॉलो", all: "सभी",
    nl_ok: "🎉 स्वागत है! अपना इनबॉक्स देखें।",
    ct_ok: "✅ संदेश भेजा गया! जल्द जवाब दूँगा।",
    ct_err: "कृपया सभी आवश्यक फ़ील्ड सही भरें।",
    no_results: "कोई परिणाम नहीं मिला। दूसरा शब्द आज़माएँ।",
    m_ingredients: "सामग्री", m_steps: "विधि", m_about: "इस रेसिपी के बारे में",
    m_serves: "परोसन", m_time: "समय", m_diff: "कठिनाई", m_by: "द्वारा",
  },
};

let LANG = localStorage.getItem("lang") || "en";
const t = (key) => I18N[LANG][key] || key;
const txt = (obj) => (typeof obj === "string" ? obj : obj[LANG] || obj.en);

/* ---------------- RENDERERS ---------------- */
function recipeCard(r) {
  return `<article class="card reveal">
    <div class="card__media">
      <span class="card__badge">${r.category}</span>
      <img src="${r.image}" alt="${txt(r.title)}" loading="lazy" width="800" height="600" />
    </div>
    <div class="card__body">
      <h3 class="card__title">${txt(r.title)}</h3>
      <div class="card__meta">
        <span>⏱️ ${r.time}</span><span>🔥 ${r.difficulty}</span>
      </div>
      <button type="button" class="card__link" data-type="recipe" data-id="${r.id}">${t("read_more")}</button>
    </div>
  </article>`;
}

function blogCard(b) {
  const d = new Date(b.date).toLocaleDateString(LANG === "hi" ? "hi-IN" : "en-US", { year: "numeric", month: "short", day: "numeric" });
  return `<article class="card reveal">
    <div class="card__media"><img src="${b.image}" alt="${txt(b.title)}" loading="lazy" width="800" height="600" /></div>
    <div class="card__body">
      <span class="card__date">📅 ${d}</span>
      <h3 class="card__title">${txt(b.title)}</h3>
      <p class="card__text">${txt(b.desc)}</p>
      <button type="button" class="card__link" data-type="blog" data-id="${b.id}">${t("read_more")}</button>
    </div>
  </article>`;
}

function travelCard(tr) {
  return `<article class="card reveal">
    <div class="card__media">
      <span class="card__badge">🍴 ${txt(tr.specialty)}</span>
      <img src="${tr.image}" alt="${txt(tr.place)}" loading="lazy" width="800" height="600" />
    </div>
    <div class="card__body">
      <h3 class="card__title">📍 ${txt(tr.place)}</h3>
      <p class="card__text">${txt(tr.story)}</p>
      <button type="button" class="card__link" data-type="travel" data-id="${tr.id}">${t("read_more")}</button>
    </div>
  </article>`;
}

function menuCard(m) {
  return `<article class="card reveal" data-cat="${m.cat}">
    <div class="card__media">
      <span class="card__price">${m.price}</span>
      <img src="${m.image}" alt="${txt(m.name)}" loading="lazy" width="800" height="600" />
    </div>
    <div class="card__body">
      <h3 class="card__title">${txt(m.name)}</h3>
      <p class="card__text">${txt(m.desc)}</p>
    </div>
  </article>`;
}


function categoryCard(c) {
  return `<div class="cat reveal"><span class="cat__icon">${c.icon}</span><span class="cat__name">${txt({ en: c.en, hi: c.hi })}</span></div>`;
}

// Social card renderer
function socialCard(s) {
  return `
    <div class="social-card reveal ${s.cls}">
      <div class="social-card__icon">${s.icon}</div>
      <div class="social-card__name">${s.name}</div>
      <div class="social-card__handle">${s.handle}</div>

      <a href="${s.link}"
         target="_blank"
         rel="noopener noreferrer"
         class="btn btn--primary">
        ${t("follow")}
      </a>
    </div>
  `;
}

/* ---------------- BUILD SECTIONS ---------------- */
let activeRecipeCat = "All";
let activeMenuCat = "All";

function renderRecipes() {
  const grid = document.getElementById("recipeGrid");
  const list = SITE_DATA.recipes.filter((r) => activeRecipeCat === "All" || r.category === activeRecipeCat);
  grid.innerHTML = list.map(recipeCard).join("");
  observeReveal();
}

function renderRecipeFilters() {
  const cats = ["All", ...new Set(SITE_DATA.recipes.map((r) => r.category))];
  document.getElementById("recipeFilters").innerHTML = cats
    .map((c) => `<button class="chip ${c === activeRecipeCat ? "active" : ""}" data-cat="${c}">${c === "All" ? t("all") : c}</button>`)
    .join("");
}

function renderMenu() {
  const grid = document.getElementById("menuGrid");
  const list = SITE_DATA.menu.filter((m) => activeMenuCat === "All" || m.cat === activeMenuCat);
  grid.innerHTML = list.map(menuCard).join("");
  observeReveal();
}

function renderMenuFilters() {
  const cats = ["All", ...new Set(SITE_DATA.menu.map((m) => m.cat))];
  document.getElementById("menuFilters").innerHTML = cats
    .map((c) => `<button class="chip ${c === activeMenuCat ? "active" : ""}" data-cat="${c}">${c === "All" ? t("all") : c}</button>`)
    .join("");
}

function renderAll() {
  renderRecipeFilters();
  renderRecipes();
  document.getElementById("categoryGrid").innerHTML = SITE_DATA.categories.map(categoryCard).join("");
  document.getElementById("blogGrid").innerHTML = SITE_DATA.blogs.map(blogCard).join("");
  document.getElementById("travelGrid").innerHTML = SITE_DATA.travels.map(travelCard).join("");
  renderMenuFilters();
  renderMenu();
  document.getElementById("socialGrid").innerHTML = SITE_DATA.socials.map(socialCard).join("");
  observeReveal();
}

/* ---------------- LANGUAGE SWITCH ---------------- */
function applyLang() {
  document.documentElement.lang = LANG;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const k = el.getAttribute("data-i18n");
    if (I18N[LANG][k]) el.textContent = I18N[LANG][k];
  });
  document.querySelectorAll("[data-i18n-ph]").forEach((el) => {
    const k = el.getAttribute("data-i18n-ph");
    if (I18N[LANG][k]) el.setAttribute("placeholder", I18N[LANG][k]);
  });
  const btn = document.getElementById("langBtn");
  btn.innerHTML = LANG === "en" ? 'EN&nbsp;|&nbsp;<span>हिंदी</span>' : '<span>EN</span>&nbsp;|&nbsp;हिंदी';
  renderAll(); // re-render dynamic content in new language
}

/* ---------------- TYPING ANIMATION ---------------- */
const TYPE_WORDS = {
  en: ["Delicious Recipes", "Easy Cooking", "Travel Blogs", "Healthy Meals", "Street Food", "Traditional Indian Food"],
  hi: ["स्वादिष्ट रेसिपी", "आसान खाना पकाना", "यात्रा ब्लॉग", "हेल्दी भोजन", "स्ट्रीट फूड", "पारंपरिक भारतीय खाना"],
};
function startTyping() {
  const el = document.getElementById("typed");
  let w = 0, c = 0, deleting = false;
  function tick() {
    const words = TYPE_WORDS[LANG];
    const word = words[w % words.length];
    el.textContent = deleting ? word.slice(0, c--) : word.slice(0, c++);
    let delay = deleting ? 45 : 95;
    if (!deleting && c === word.length + 1) { deleting = true; delay = 1400; }
    else if (deleting && c === 0) { deleting = false; w++; delay = 350; }
    setTimeout(tick, delay);
  }
  tick();
}

/* ---------------- SCROLL REVEAL ---------------- */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); revealObserver.unobserve(e.target); } });
}, { threshold: 0.12 });
function observeReveal() { document.querySelectorAll(".reveal:not(.in)").forEach((el) => revealObserver.observe(el)); }

/* ---------------- ANIMATED COUNTERS ---------------- */
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (!e.isIntersecting) return;
    const el = e.target;
    const target = +el.dataset.target;
    const suffix = el.dataset.suffix || "";
    let n = 0;
    const step = Math.max(1, target / 60);
    const run = () => {
      n += step;
      if (n >= target) { el.textContent = target + suffix; }
      else { el.textContent = Math.floor(n) + suffix; requestAnimationFrame(run); }
    };
    run();
    counterObserver.unobserve(el);
  });
}, { threshold: 0.5 });

/* ---------------- LIVE SEARCH ---------------- */
function runSearch(q) {
  const box = document.getElementById("searchResults");
  q = q.trim().toLowerCase();
  if (!q) { box.innerHTML = ""; return; }
  const items = [];
  SITE_DATA.recipes.forEach((r) => items.push({ img: r.image, title: txt(r.title), type: "Recipe", href: "#recipes" }));
  SITE_DATA.blogs.forEach((b) => items.push({ img: b.image, title: txt(b.title), type: "Blog", href: "#blog" }));
  SITE_DATA.travels.forEach((tr) => items.push({ img: tr.image, title: txt(tr.place), type: "Travel", href: "#travel" }));
  const matches = items.filter((i) => i.title.toLowerCase().includes(q));
  box.innerHTML = matches.length
    ? matches.map((m) => `<a class="search-item" href="${m.href}"><img src="${m.img}" alt=""><div><small>${m.type}</small><div>${m.title}</div></div></a>`).join("")
    : `<div class="search-item">${t("no_results")}</div>`;
}

/* ---------------- FORM HELPERS ---------------- */
const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

/* ---------------- READ MORE MODAL ---------------- */
let slideIndex = 0, slideCount = 0;

function findItem(type, id) {
  if (type === "recipe") return SITE_DATA.recipes.find((x) => x.id === id);
  if (type === "blog") return SITE_DATA.blogs.find((x) => x.id === id);
  if (type === "travel") return SITE_DATA.travels.find((x) => x.id === id);
  return null;
}

function goToSlide(i) {
  const slides = document.getElementById("modalSlides");
  slideIndex = (i + slideCount) % slideCount;
  slides.style.transform = `translateX(-${slideIndex * 100}%)`;
  document.querySelectorAll("#modalDots button").forEach((d, k) => d.classList.toggle("active", k === slideIndex));
}

function openModal(type, id) {
  const item = findItem(type, id);
  if (!item) return;
  const gallery = item.gallery && item.gallery.length ? item.gallery : [item.image];

  // Slides + dots
  document.getElementById("modalSlides").innerHTML = gallery
    .map((src) => `<img src="${src}" alt="" loading="lazy" />`).join("");
  document.getElementById("modalDots").innerHTML = gallery
    .map((_, i) => `<button type="button" aria-label="Go to image ${i + 1}"></button>`).join("");
  slideCount = gallery.length;
  slideIndex = 0;
  const showNav = slideCount > 1;
  document.getElementById("modalPrev").style.display = showNav ? "" : "none";
  document.getElementById("modalNext").style.display = showNav ? "" : "none";
  document.getElementById("modalDots").style.display = showNav ? "" : "none";
  document.querySelectorAll("#modalDots button").forEach((d, k) => {
    d.classList.toggle("active", k === 0);
    d.addEventListener("click", () => goToSlide(k));
  });
  goToSlide(0);

  const badge = document.getElementById("modalBadge");
  const meta = document.getElementById("modalMeta");
  const content = document.getElementById("modalContent");

  if (type === "recipe") {
    badge.style.display = "";
    badge.textContent = item.category;
    document.getElementById("modalTitle").textContent = txt(item.title);
    meta.innerHTML = `<span>⏱️ ${t("m_time")}: ${item.time}</span><span>🔥 ${t("m_diff")}: ${item.difficulty}</span>${item.serves ? `<span>🍽️ ${t("m_serves")}: ${item.serves}</span>` : ""}`;
    const ing = (item.ingredients && item.ingredients[LANG]) || [];
    const steps = (item.steps && item.steps[LANG]) || [];
    content.innerHTML = `
      <h4>${t("m_about")}</h4><p>${txt(item.desc)}</p>
      <h4>${t("m_ingredients")}</h4><ul>${ing.map((i) => `<li>${i}</li>`).join("")}</ul>
      <h4>${t("m_steps")}</h4><ol>${steps.map((s) => `<li>${s}</li>`).join("")}</ol>`;
  } else if (type === "blog") {
    badge.style.display = "";
    const d = new Date(item.date).toLocaleDateString(LANG === "hi" ? "hi-IN" : "en-US", { year: "numeric", month: "short", day: "numeric" });
    badge.textContent = "📅 " + d;
    document.getElementById("modalTitle").textContent = txt(item.title);
    meta.innerHTML = item.author ? `<span>✍️ ${t("m_by")} ${item.author}</span>` : "";
    const paras = (item.content && item.content[LANG]) || [txt(item.desc)];
    content.innerHTML = paras.map((p) => `<p>${p}</p>`).join("");
  } else {
    badge.style.display = "";
    badge.textContent = "🍴 " + txt(item.specialty);
    document.getElementById("modalTitle").textContent = "📍 " + txt(item.place);
    meta.innerHTML = "";
    const paras = (item.content && item.content[LANG]) || [txt(item.story)];
    content.innerHTML = paras.map((p) => `<p>${p}</p>`).join("");
  }

  const modal = document.getElementById("modal");
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function setupModal() {
  const modal = document.getElementById("modal");
  document.getElementById("modalClose").addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });
  document.getElementById("modalPrev").addEventListener("click", () => goToSlide(slideIndex - 1));
  document.getElementById("modalNext").addEventListener("click", () => goToSlide(slideIndex + 1));
  document.addEventListener("keydown", (e) => {
    if (!modal.classList.contains("open")) return;
    if (e.key === "Escape") closeModal();
    if (e.key === "ArrowLeft") goToSlide(slideIndex - 1);
    if (e.key === "ArrowRight") goToSlide(slideIndex + 1);
  });
  // Delegated Read More clicks
  document.body.addEventListener("click", (e) => {
    const btn = e.target.closest(".card__link[data-id]");
    if (!btn) return;
    openModal(btn.dataset.type, btn.dataset.id);
  });
}


/* ---------------- INIT ---------------- */
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();
  applyLang();
  startTyping();
  document.querySelectorAll(".counter__num").forEach((el) => counterObserver.observe(el));

  // Loader
  window.addEventListener("load", () => setTimeout(() => document.getElementById("loader").classList.add("hide"), 500));

  // Sticky header + scroll progress + back to top + active nav
  const header = document.getElementById("header");
  const progress = document.getElementById("progress");
  const toTop = document.getElementById("toTop");
  const sections = [...document.querySelectorAll("section[id]")];
  window.addEventListener("scroll", () => {
    const y = window.scrollY;
    header.classList.toggle("scrolled", y > 40);
    toTop.classList.toggle("show", y > 500);
    const h = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = (y / h) * 100 + "%";
    let cur = "home";
    sections.forEach((s) => { if (y >= s.offsetTop - 120) cur = s.id; });
    document.querySelectorAll(".nav__link").forEach((l) => l.classList.toggle("active", l.getAttribute("href") === "#" + cur));
  });
  toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  // Mobile menu
  const nav = document.getElementById("nav");
  const burger = document.getElementById("hamburger");
  const toggleMenu = (open) => {
    nav.classList.toggle("open", open);
    burger.classList.toggle("open", open);
    burger.setAttribute("aria-expanded", open);
  };
  burger.addEventListener("click", () => toggleMenu(!nav.classList.contains("open")));
  nav.querySelectorAll(".nav__link").forEach((l) => l.addEventListener("click", () => toggleMenu(false)));
  document.getElementById("navClose").addEventListener("click", () => toggleMenu(false));

  // Read More modal
  setupModal();


  // Language toggle
  document.getElementById("langBtn").addEventListener("click", () => {
    LANG = LANG === "en" ? "hi" : "en";
    localStorage.setItem("lang", LANG);
    applyLang();
  });

  // Search overlay
  const overlay = document.getElementById("searchOverlay");
  const input = document.getElementById("searchInput");
  document.getElementById("searchBtn").addEventListener("click", () => { overlay.classList.add("open"); input.focus(); });
  document.getElementById("searchClose").addEventListener("click", () => overlay.classList.remove("open"));
  overlay.addEventListener("click", (e) => { if (e.target === overlay) overlay.classList.remove("open"); });
  input.addEventListener("input", (e) => runSearch(e.target.value));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") overlay.classList.remove("open"); });

  // Filter clicks (event delegation)
  document.getElementById("recipeFilters").addEventListener("click", (e) => {
    if (!e.target.classList.contains("chip")) return;
    activeRecipeCat = e.target.dataset.cat;
    renderRecipeFilters(); renderRecipes();
  });
  document.getElementById("menuFilters").addEventListener("click", (e) => {
    if (!e.target.classList.contains("chip")) return;
    activeMenuCat = e.target.dataset.cat;
    renderMenuFilters(); renderMenu();
  });

  // Newsletter
  document.getElementById("newsletterForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("nlName");
    const email = document.getElementById("nlEmail");
    const msg = document.getElementById("nlMsg");
    if (!name.value.trim() || !isEmail(email.value)) {
      msg.textContent = t("ct_err"); msg.className = "form-msg err pop"; return;
    }
    msg.textContent = t("nl_ok"); msg.className = "form-msg ok pop";
    e.target.reset();
  });

  // Contact form validation
  document.getElementById("contactForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const fields = ["cName", "cEmail", "cSubject", "cMessage"].map((id) => document.getElementById(id));
    const msg = document.getElementById("contactMsg");
    let ok = true;
    fields.forEach((f) => {
      const bad = !f.value.trim() || (f.id === "cEmail" && !isEmail(f.value));
      f.classList.toggle("invalid", bad);
      if (bad) ok = false;
    });
    if (!ok) { msg.textContent = t("ct_err"); msg.className = "form-msg err pop"; return; }
    const btn = e.target.querySelector("button");
    const label = btn.textContent;
    btn.classList.add("loading"); btn.textContent = "…";
    setTimeout(() => {
      btn.classList.remove("loading"); btn.textContent = label;
      msg.textContent = t("ct_ok"); msg.className = "form-msg ok pop";
      e.target.reset();
    }, 1200);
  });

  // Ripple effect
  document.querySelectorAll(".ripple").forEach((b) => {
    b.addEventListener("click", function (e) {
      const rect = this.getBoundingClientRect();
      const rp = document.createElement("span");
      rp.className = "rp";
      const size = Math.max(rect.width, rect.height);
      rp.style.width = rp.style.height = size + "px";
      rp.style.left = e.clientX - rect.left - size / 2 + "px";
      rp.style.top = e.clientY - rect.top - size / 2 + "px";
      this.appendChild(rp);
      setTimeout(() => rp.remove(), 600);
    });
  });

  observeReveal();
});
