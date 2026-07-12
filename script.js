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
    title_heading:"The Journey from Soil to Modern Cuisine",
    about_p1: "My name is Pankaj Prajapati. For me, food is not merely a means to satisfy hunger; it is the most beautiful medium to reach people's hearts. I believe that every flavor carries with it a memory, a story, and an emotion. I come from the Prajapati family. Just as a potter shapes ordinary clay with his hands into a beautiful and functional work of art, I strive to give a new identity to simple ingredients and traditional flavors using my imagination, technique, and experience. To me, every dish is not just a recipe but a process of creation. Just as clay takes on a new form on the potter's wheel, every dish in my kitchen is born as a new story and a fresh experience. Perhaps this art of creation is the greatest legacy I inherited from my roots—a legacy that is evident in every dish I prepare today. My journey did not begin in a grand hotel or a culinary school. It started in a small shop where I sold handmade samosas, bread, and snacks. The smiles, trust, and appreciation of my customers were my greatest rewards. The desire to learn something new and improve every day kept growing within me. One day, someone said to me, You have a gift; don't limit it to just this shop. Make it your profession. That single sentence proved to be the turning point of my life. That very day, I decided to give my craft a new identity. This passion for learning led me into the world of the hospitality industry. While working in five-star hotels, luxury catering services, premium clubs, and large professional kitchens, I mastered world-class techniques, discipline, and the art of presentation. Yet, throughout this journey, I never left behind my roots or the flavors of my heritage.",
    about_p2: "Today, I am known as a modern Indian chef. My mission is to present India’s traditional and street foods to the world using modern techniques, exquisite presentation, and innovative flavors. I believe that iconic treats like *golgappa*, *samosa*, *chaat*, or *kachori*—or even the famous flavors of a humble street-side stall—deserve to be served on a fine-dining plate with the same pride and elegance as any international delicacy. For me, every dish tells a story. I want guests not merely to eat, but to experience India’s culture, its soil, and the memories attached to it with every single bite. The greatest honor for me is when a guest remarks that they have tasted a familiar flavor in a completely new and unique way for the first time. Cooking and traveling are the two greatest passions of my life. Visiting new places, exploring local markets, tasting street food, meeting farmers, artisans, and locals, and understanding their traditions—these experiences have been my greatest teachers. Every journey inspires my next menu and reminds me that the true essence of Indian cuisine lies in its soil, its culture, and its people. I believe that a chef does not just create recipes; they craft experiences. Just as a potter creates art from clay, I strive to mold memories out of flavors. Every plate I serve embodies the soul of tradition, the elegance of modern technique, and a deep respect for Indian culture. This journey continues. Every new trip, every new flavor, and every new dish inspires me to learn and create something fresh. For me, cooking is not merely a profession; it is my identity, my passion, and my story.",
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
    title_heading:" सफ़र मिट्टी से मॉडर्न क्यूज़ीन तक ",
    about_p1: "मेरा नाम पंकज प्रजापति है। मेरे लिए खाना सिर्फ़ पेट भरने का ज़रिया नहीं, बल्कि लोगों के दिलों तक पहुँचने का सबसे खूबसूरत माध्यम है। मेरा मानना है कि हर स्वाद अपने साथ एक याद, एक कहानी और एक एहसास लेकर आता है। मैं प्रजापति परिवार से हूँ। जिस तरह एक कुम्हार साधारण मिट्टी को अपने हाथों से आकार देकर उसे एक खूबसूरत और उपयोगी कलाकृति में बदल देता है, उसी तरह मैं भी साधारण सामग्री और पारंपरिक स्वादों को अपनी कल्पना, तकनीक और अनुभव से एक नई पहचान देने की कोशिश करता हूँ। मेरे लिए हर डिश सिर्फ़ एक रेसिपी नहीं, बल्कि सृजन की एक प्रक्रिया है। जैसे कुम्हार के चाक पर मिट्टी नया रूप लेती है, वैसे ही मेरे किचन में हर डिश एक नई कहानी और नया अनुभव बनकर जन्म लेती है। शायद यही सृजन की कला मेरी मिट्टी से मिली सबसे बड़ी विरासत है, जो आज मेरे हर व्यंजन में दिखाई देती है। मेरा सफ़र किसी बड़े होटल या क्यूलिनरी स्कूल से शुरू नहीं हुआ। इसकी शुरुआत मेरी छोटी-सी दुकान से हुई, जहाँ मैं अपने हाथों से बने समोसे, ब्रेड और स्नैक्स बेचता था। ग्राहकों की मुस्कान, उनका विश्वास और उनकी तारीफ़ मेरे लिए सबसे बड़ा पुरस्कार थे। हर दिन कुछ नया सीखने और बेहतर बनाने की चाह मेरे भीतर बढ़ती गई। एक दिन किसी ने मुझसे कहा, “तुम्हारे हाथों में हुनर है, इसे सिर्फ़ दुकान तक मत रखो। इसे अपना प्रोफेशन बनाओ।” शायद वही एक वाक्य मेरी ज़िंदगी का सबसे बड़ा मोड़ बन गया। उसी दिन मैंने तय कर लिया कि मैं अपनी कला को एक नई पहचान दूँगा। सीखने की इसी लगन ने मुझे होटल इंडस्ट्री की दुनिया तक पहुँचाया। पाँच सितारा होटलों, लग्ज़री कैटरिंग, प्रीमियम क्लब्स और बड़े-बड़े प्रोफेशनल किचन्स में काम करते हुए मैंने विश्वस्तरीय तकनीकें, अनुशासन और प्रस्तुति की कला सीखी। लेकिन इस पूरे सफ़र में मैंने कभी अपनी जड़ों और अपनी मिट्टी के स्वाद को पीछे नहीं छोड़ा।",
    about_p2: "आज मेरी पहचान एक Modern Indian Chef के रूप में है। मेरा उद्देश्य भारत के पारंपरिक और स्ट्रीट फूड को आधुनिक तकनीकों, बेहतरीन प्रस्तुति और नए फ्लेवर के साथ दुनिया के सामने पेश करना है। मेरा विश्वास है कि गोलगप्पा, समोसा, चाट, कचौरी या किसी गली का मशहूर स्वाद भी उतनी ही शान से फाइन डाइनिंग की प्लेट पर परोसा जा सकता है, जितनी किसी अंतरराष्ट्रीय डिश की। मेरे लिए हर डिश एक कहानी है। मैं चाहता हूँ कि मेहमान सिर्फ़ खाना न खाएँ, बल्कि हर निवाले के साथ भारत की संस्कृति, उसकी मिट्टी और उससे जुड़ी यादों को महसूस करें। जब कोई मेहमान कहता है कि उसने पहली बार किसी परिचित स्वाद को इतने नए अंदाज़ में चखा है, वही मेरे लिए सबसे बड़ा सम्मान होता है। खाना बनाना और सफ़र करना मेरी ज़िंदगी के दो सबसे बड़े जुनून हैं। नई जगहों पर जाना, स्थानीय बाज़ारों में घूमना, स्ट्रीट फूड चखना, किसानों, कारीगरों और स्थानीय लोगों से मिलना, उनकी परंपराओं को समझना—यही मेरी सबसे बड़ी सीख है। मेरी हर यात्रा मेरे अगले मेन्यू की प्रेरणा बनती है और मुझे याद दिलाती है कि भारत का असली स्वाद उसकी मिट्टी, उसकी संस्कृति और उसके लोगों में बसता है। मैं मानता हूँ कि एक शेफ सिर्फ़ रेसिपी नहीं बनाता, बल्कि अनुभव रचता है। जैसे एक कुम्हार मिट्टी से कला का सृजन करता है, वैसे ही मैं स्वादों से यादें गढ़ने की कोशिश करता हूँ। मेरी हर प्लेट में परंपरा की आत्मा, आधुनिक तकनीक की सुंदरता और भारतीय संस्कृति का सम्मान साथ चलता है। यह सफ़र अभी जारी है। हर नई यात्रा, हर नया स्वाद और हर नई प्लेट मुझे फिर से सीखने और कुछ नया रचने की प्रेरणा देती है। क्योंकि मेरे लिए खाना सिर्फ़ एक पेशा नहीं, बल्कि मेरी पहचान, मेरा जुनून और मेरी कहानी है।",
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
