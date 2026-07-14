/* =============================================================
   data.js — All editable content for the Chef Portfolio site.
   To add a new recipe / blog / travel story / menu item,
   just add one more object to the relevant array below.
   Every text field has an English (en) and Hindi (hi) version.

   READ MORE POPUP:
   - Recipes use: gallery (array of image paths for the slideshow),
     desc, ingredients {en:[], hi:[]} and steps {en:[], hi:[]}.
   - Blogs use: gallery and content {en:[paragraphs], hi:[paragraphs]}.
   To add a new blog post, copy one blog object, change the id,
   image, gallery, date, title, desc and content — that's it.
   ============================================================= */

const SITE_DATA = {
  chefName: "Chef Pankaj",

  /* ---------------- FEATURED RECIPES ---------------- */
  recipes: [
    {
      id: "r1",
      image: "images/recipe1.jpg",
      gallery: ["images/recipe1.jpg", "images/menu1.jpg", "images/recipe4.jpg"],
      category: "Non-Vegetarian",
      time: "45 min",
      difficulty: "Medium",
      serves: "4",
      title: { en: "Creamy Butter Chicken", hi: "क्रीमी बटर चिकन" },
      desc: {
        en: "Tender chicken simmered in a velvety tomato and cashew gravy, finished with butter and cream for that classic restaurant taste at home.",
        hi: "मुलायम चिकन को टमाटर और काजू की मखमली ग्रेवी में पकाया जाता है, फिर मक्खन और क्रीम के साथ रेस्तरां जैसा स्वाद घर पर।",
      },
      ingredients: {
        en: ["500g boneless chicken", "3 tomatoes, pureed", "2 tbsp butter", "1/4 cup fresh cream", "1 tbsp ginger-garlic paste", "1 tsp garam masala", "1 tsp red chilli powder", "Salt to taste"],
        hi: ["500 ग्राम बोनलेस चिकन", "3 टमाटर, प्यूरी", "2 बड़े चम्मच मक्खन", "1/4 कप ताज़ी क्रीम", "1 बड़ा चम्मच अदरक-लहसुन पेस्ट", "1 छोटा चम्मच गरम मसाला", "1 छोटा चम्मच लाल मिर्च पाउडर", "स्वादानुसार नमक"],
      },
      steps: {
        en: ["Marinate chicken with yogurt, chilli and ginger-garlic paste for 30 minutes.", "Grill or pan-sear the chicken until lightly charred.", "Cook tomato puree with butter and spices until thick.", "Add cream and the chicken, simmer for 10 minutes and serve hot."],
        hi: ["चिकन को दही, मिर्च और अदरक-लहसुन पेस्ट में 30 मिनट मैरिनेट करें।", "चिकन को हल्का सुनहरा होने तक ग्रिल या सेंक लें।", "टमाटर प्यूरी को मक्खन और मसालों के साथ गाढ़ा होने तक पकाएँ।", "क्रीम और चिकन डालें, 10 मिनट पकाएँ और गरम परोसें।"],
      },
    },
    {
      id: "r2",
      image: "images/recipe2.jpg",
      gallery: ["images/recipe2.jpg", "images/recipe3.jpg", "images/menu2.jpg"],
      category: "Breakfast",
      time: "30 min",
      difficulty: "Easy",
      serves: "3",
      title: { en: "Crispy Masala Dosa", hi: "कुरकुरा मसाला डोसा" },
      desc: {
        en: "Golden, crispy fermented rice crepes wrapped around a spiced potato filling — a South Indian breakfast classic.",
        hi: "सुनहरा, कुरकुरा चावल का डोसा जिसमें मसालेदार आलू की भरावन होती है — एक दक्षिण भारतीय नाश्ता।",
      },
      ingredients: {
        en: ["2 cups dosa batter", "3 boiled potatoes", "1 onion, sliced", "1 tsp mustard seeds", "Curry leaves", "1/2 tsp turmeric", "Salt to taste", "Oil for cooking"],
        hi: ["2 कप डोसा घोल", "3 उबले आलू", "1 प्याज़, कटा", "1 छोटा चम्मच राई", "करी पत्ता", "1/2 छोटा चम्मच हल्दी", "स्वादानुसार नमक", "पकाने के लिए तेल"],
      },
      steps: {
        en: ["Temper mustard seeds and curry leaves, add onion and turmeric.", "Mash in the potatoes with salt to make the filling.", "Spread batter thin on a hot tawa and drizzle oil.", "Add filling, fold and serve with chutney and sambar."],
        hi: ["राई और करी पत्ता तड़काएँ, प्याज़ और हल्दी डालें।", "आलू और नमक मिलाकर भरावन बनाएँ।", "गरम तवे पर घोल पतला फैलाएँ और तेल छिड़कें।", "भरावन डालें, मोड़ें और चटनी-सांभर के साथ परोसें।"],
      },
    },
    {
      id: "r3",
      image: "images/recipe3.jpg",
      gallery: ["images/recipe3.jpg", "images/menu2.jpg", "images/recipe1.jpg"],
      category: "Lunch",
      time: "50 min",
      difficulty: "Medium",
      serves: "5",
      title: { en: "Veg Dum Biryani", hi: "वेज दम बिरयानी" },
      desc: {
        en: "Fragrant basmati rice layered with spiced vegetables, saffron and fried onions, slow-cooked on dum for deep flavour.",
        hi: "खुशबूदार बासमती चावल, मसालेदार सब्ज़ियों, केसर और तली प्याज़ के साथ दम पर धीमी आँच पर पकाया।",
      },
      ingredients: {
        en: ["2 cups basmati rice", "2 cups mixed vegetables", "1 cup yogurt", "2 onions, fried", "Saffron in warm milk", "Biryani masala", "Mint & coriander", "Ghee"],
        hi: ["2 कप बासमती चावल", "2 कप मिली-जुली सब्ज़ियाँ", "1 कप दही", "2 प्याज़, तली", "गरम दूध में केसर", "बिरयानी मसाला", "पुदीना व धनिया", "घी"],
      },
      steps: {
        en: ["Cook rice till 70% done and set aside.", "Cook vegetables with yogurt and biryani masala.", "Layer rice and vegetables with saffron, mint and fried onions.", "Cover tightly and cook on low dum for 20 minutes."],
        hi: ["चावल 70% पकाकर अलग रखें।", "सब्ज़ियों को दही और बिरयानी मसाले में पकाएँ।", "चावल व सब्ज़ी की परतें केसर, पुदीना और तली प्याज़ के साथ लगाएँ।", "ढककर धीमी दम पर 20 मिनट पकाएँ।"],
      },
    },
    {
      id: "r4",
      image: "images/recipe4.jpg",
      gallery: ["images/recipe4.jpg", "images/menu2.jpg", "images/recipe2.jpg"],
      category: "Desserts",
      time: "40 min",
      difficulty: "Medium",
      serves: "6",
      title: { en: "Warm Gulab Jamun", hi: "गरम गुलाब जामुन" },
      desc: {
        en: "Soft milk-solid dumplings fried golden and soaked in fragrant rose-cardamom syrup — best served warm.",
        hi: "मुलायम खोया के गोले सुनहरे तले और गुलाब-इलायची चाशनी में भिगोए — गरम परोसें।",
      },
      ingredients: {
        en: ["1 cup khoya", "2 tbsp flour", "1.5 cups sugar", "1.5 cups water", "4 cardamom pods", "1 tsp rose water", "Oil/ghee to fry"],
        hi: ["1 कप खोया", "2 बड़े चम्मच मैदा", "1.5 कप चीनी", "1.5 कप पानी", "4 इलायची", "1 छोटा चम्मच गुलाब जल", "तलने के लिए तेल/घी"],
      },
      steps: {
        en: ["Knead khoya and flour into a smooth soft dough.", "Boil sugar and water into a one-string syrup with cardamom.", "Roll small balls and fry on low heat till golden.", "Soak the hot jamuns in warm syrup for 30 minutes."],
        hi: ["खोया और मैदा को मुलायम आटे जैसा गूंथें।", "चीनी-पानी को इलायची के साथ एक तार की चाशनी बनाएँ।", "छोटे गोले बनाकर धीमी आँच पर सुनहरा तलें।", "गरम जामुन को गरम चाशनी में 30 मिनट भिगोएँ।"],
      },
    },
    {
      id: "r5",
      image: "images/recipe5.jpg",
      gallery: ["images/recipe5.jpg", "images/menu1.jpg", "images/recipe2.jpg"],
      category: "Street Food",
      time: "25 min",
      difficulty: "Easy",
      serves: "4",
      title: { en: "Tangy Pani Puri", hi: "चटपटी पानी पूरी" },
      desc: {
        en: "Crisp hollow puris filled with spiced potato, tangy tamarind chutney and cooling mint water — India's favourite street snack.",
        hi: "कुरकुरी पूरी में मसालेदार आलू, खट्टी इमली चटनी और ठंडा पुदीना पानी — भारत का पसंदीदा स्ट्रीट स्नैक।",
      },
      ingredients: {
        en: ["24 puris", "2 boiled potatoes", "1/2 cup boiled chickpeas", "Mint-coriander water", "Tamarind chutney", "Chaat masala", "Black salt"],
        hi: ["24 पूरी", "2 उबले आलू", "1/2 कप उबले चने", "पुदीना-धनिया पानी", "इमली चटनी", "चाट मसाला", "काला नमक"],
      },
      steps: {
        en: ["Mash potatoes with chickpeas, chaat masala and salt.", "Blend mint, coriander and spices with water for the pani.", "Crack a hole in each puri and add the filling.", "Dip in tamarind chutney and mint water — eat immediately."],
        hi: ["आलू, चने, चाट मसाला और नमक मिलाएँ।", "पुदीना, धनिया और मसाले को पानी में पीसकर पानी बनाएँ।", "हर पूरी में छेद कर भरावन भरें।", "इमली चटनी और पुदीना पानी में डुबोकर तुरंत खाएँ।"],
      },
    },
    {
      id: "r6",
      image: "images/recipe6.jpg",
      gallery: ["images/recipe6.jpg", "images/recipe3.jpg", "images/menu1.jpg"],
      category: "Healthy Recipes",
      time: "15 min",
      difficulty: "Easy",
      serves: "2",
      title: { en: "Green Power Bowl", hi: "ग्रीन पावर बाउल" },
      desc: {
        en: "A fresh, protein-packed bowl of greens, sprouts and grains tossed in a zesty lemon dressing — light yet filling.",
        hi: "हरी सब्ज़ियों, अंकुरित दालों और अनाज का ताज़ा, प्रोटीन से भरपूर बाउल, नींबू ड्रेसिंग के साथ — हल्का पर भरपूर।",
      },
      ingredients: {
        en: ["1 cup cooked quinoa", "1 cup mixed sprouts", "Handful spinach", "1 cucumber, diced", "1 avocado", "Lemon juice", "Olive oil", "Salt & pepper"],
        hi: ["1 कप पका क्विनोआ", "1 कप मिले अंकुरित", "मुट्ठीभर पालक", "1 खीरा, कटा", "1 एवोकाडो", "नींबू रस", "ऑलिव ऑयल", "नमक व काली मिर्च"],
      },
      steps: {
        en: ["Whisk lemon juice, olive oil, salt and pepper into a dressing.", "Add quinoa, sprouts, spinach and cucumber to a bowl.", "Top with sliced avocado.", "Drizzle the dressing and toss gently before serving."],
        hi: ["नींबू रस, ऑलिव ऑयल, नमक व मिर्च की ड्रेसिंग बनाएँ।", "बाउल में क्विनोआ, अंकुरित, पालक और खीरा डालें।", "ऊपर कटा एवोकाडो रखें।", "ड्रेसिंग डालकर हल्के से मिलाएँ और परोसें।"],
      },
    },
  ],

  /* ---------------- CATEGORIES ---------------- */
  categories: [
    { icon: "🍳", en: "Breakfast", hi: "नाश्ता" },
    { icon: "🍛", en: "Lunch", hi: "दोपहर का भोजन" },
    { icon: "🍽️", en: "Dinner", hi: "रात का खाना" },
    { icon: "🍟", en: "Snacks", hi: "स्नैक्स" },
    { icon: "🍰", en: "Desserts", hi: "मिठाई" },
    { icon: "🥗", en: "Vegetarian", hi: "शाकाहारी" },
    { icon: "🍗", en: "Non-Vegetarian", hi: "मांसाहारी" },
    { icon: "🥑", en: "Healthy Recipes", hi: "हेल्दी रेसिपी" },
    { icon: "🌮", en: "Street Food", hi: "स्ट्रीट फूड" },
    { icon: "🥤", en: "Drinks", hi: "पेय" },
  ],

  /* ---------------- BLOG POSTS ---------------- */
  blogs: [
    {
      id: "b1",
      image: "images/blog1.jpg",
      gallery: ["images/blog1.jpg", "images/recipe6.jpg", "images/menu1.jpg"],
      date: "2026-06-12",
      author: "Chef Aarav",
      title: { en: "Starting Your Home Cooking Journey", hi: "अपनी घरेलू खाना पकाने की यात्रा शुरू करें" },
      desc: {
        en: "Simple habits and pantry staples that turn everyday meals into something special.",
        hi: "सरल आदतें और रसोई की चीज़ें जो रोज़ के खाने को खास बना देती हैं।",
      },
      content: {
        en: [
          "Cooking at home does not need to be complicated. The secret is to start with a well-stocked pantry — good salt, a few whole spices, quality oil and fresh aromatics like onion, garlic and ginger. With these basics you can build almost any dish.",
          "Begin with one recipe a week and repeat it until it feels effortless. Repetition builds confidence far faster than jumping between complicated dishes. Taste as you cook and trust your senses — smell, colour and sizzle tell you more than any timer.",
          "Finally, keep your workspace clean and your ingredients prepped before you turn on the heat. This one habit, borrowed from professional kitchens, will transform how calm and enjoyable your cooking feels.",
        ],
        hi: [
          "घर पर खाना बनाना मुश्किल नहीं है। राज़ है एक अच्छी तरह भरी रसोई — अच्छा नमक, कुछ साबुत मसाले, अच्छा तेल और ताज़ा प्याज़, लहसुन, अदरक। इन बुनियादी चीज़ों से आप लगभग कोई भी व्यंजन बना सकते हैं।",
          "हफ्ते में एक रेसिपी से शुरू करें और उसे तब तक दोहराएँ जब तक वह आसान न लगने लगे। दोहराव आत्मविश्वास तेज़ी से बढ़ाता है। पकाते समय चखें और अपनी इंद्रियों पर भरोसा करें — खुशबू, रंग और आवाज़ टाइमर से ज़्यादा बताते हैं।",
          "अंत में, आँच जलाने से पहले अपनी जगह साफ़ और सामग्री तैयार रखें। पेशेवर रसोई की यह आदत आपके खाना पकाने को शांत और आनंददायक बना देगी।",
        ],
      },
    },
    {
      id: "b2",
      image: "images/blog2.jpg",
      gallery: ["images/blog2.jpg", "images/recipe1.jpg", "images/travel3.jpg"],
      date: "2026-05-28",
      author: "Chef Aarav",
      title: { en: "The Secret World of Indian Spices", hi: "भारतीय मसालों की रहस्यमय दुनिया" },
      desc: {
        en: "How to balance heat, aroma and colour like a professional kitchen.",
        hi: "पेशेवर रसोई की तरह तीखापन, खुशबू और रंग कैसे संतुलित करें।",
      },
      content: {
        en: [
          "Indian cooking is often described as complex, but at its heart it is about balance. Every spice plays a role — cumin brings earthiness, coriander adds freshness, chilli brings heat, and turmeric lends colour and warmth.",
          "The real magic happens in the tempering, or tadka. Blooming whole spices in hot oil releases their essential oils and completely changes the depth of a dish. Add spices in the right order so nothing burns and every layer shines.",
          "Store your spices whole and grind them fresh whenever you can. A small spice grinder is one of the best investments a home cook can make — the difference in aroma is unmistakable.",
        ],
        hi: [
          "भारतीय खाना अक्सर जटिल कहा जाता है, पर इसका मूल संतुलन है। हर मसाले की भूमिका है — जीरा मिट्टी जैसा स्वाद, धनिया ताज़गी, मिर्च तीखापन और हल्दी रंग व गर्माहट देती है।",
          "असली जादू तड़के में होता है। गरम तेल में साबुत मसाले भूनने से उनके तेल निकलते हैं और व्यंजन की गहराई बदल जाती है। मसाले सही क्रम में डालें ताकि कुछ जले नहीं।",
          "मसाले साबुत रखें और जब हो सके ताज़ा पीसें। एक छोटी मसाला ग्राइंडर घरेलू रसोइये के लिए बेहतरीन निवेश है — खुशबू का फर्क साफ़ महसूस होता है।",
        ],
      },
    },
    {
      id: "b3",
      image: "images/blog3.jpg",
      gallery: ["images/blog3.jpg", "images/recipe2.jpg", "images/menu2.jpg"],
      date: "2026-05-10",
      author: "Chef Aarav",
      title: { en: "Perfect Soft Dough Every Time", hi: "हर बार परफेक्ट मुलायम आटा" },
      desc: {
        en: "Kneading techniques for fluffy rotis, naans and stuffed breads.",
        hi: "फूली रोटी, नान और भरवां ब्रेड के लिए आटा गूंथने की तकनीक।",
      },
      content: {
        en: [
          "Soft rotis start long before the tawa. The trick is hydration — add water gradually and knead until the dough is soft, smooth and springs back gently when pressed.",
          "Rest is essential. Let the dough sit covered for at least 20 minutes so the gluten relaxes. This single step is the difference between chewy and cloud-soft breads.",
          "For naan and stuffed breads, a little yogurt or milk in the dough adds richness and keeps them tender for longer. Roll evenly and cook on high heat for those beautiful puffed pockets.",
        ],
        hi: [
          "मुलायम रोटी तवे से बहुत पहले शुरू होती है। राज़ है पानी — धीरे-धीरे पानी डालें और आटे को तब तक गूंथें जब तक वह मुलायम, चिकना और दबाने पर वापस उठे।",
          "आराम ज़रूरी है। आटे को ढककर कम से कम 20 मिनट रखें ताकि ग्लूटेन ढीला हो। यही कदम सख्त और बादल जैसी मुलायम रोटी में फर्क करता है।",
          "नान और भरवां ब्रेड के लिए आटे में थोड़ा दही या दूध डालें, इससे नरमी बनी रहती है। एकसार बेलें और तेज़ आँच पर पकाएँ ताकि सुंदर फूली जेबें बनें।",
        ],
      },
    },
  ],

  /* ---------------- TRAVEL STORIES ---------------- */
  travels: [
    {
      id: "t1",
      image: "images/travel1.jpg",
      gallery: ["images/travel1.jpg", "images/recipe5.jpg", "images/menu1.jpg"],
      place: { en: "Old Delhi", hi: "पुरानी दिल्ली" },
      specialty: { en: "Chandni Chowk Chaat", hi: "चांदनी चौक चाट" },
      story: {
        en: "Weaving through crackling stalls where every corner smells of ghee and adventure.",
        hi: "उन गलियों में जहाँ हर कोने से घी और रोमांच की खुशबू आती है।",
      },
      content: {
        en: [
          "Old Delhi is a feast for every sense. The narrow lanes of Chandni Chowk are lined with vendors who have perfected a single dish over generations.",
          "From crisp aloo tikki to syrup-soaked jalebi pulled straight from the pan, every bite tells a story of the city's layered history. Eating here is less about a meal and more about a moment.",
        ],
        hi: [
          "पुरानी दिल्ली हर इंद्रिय के लिए दावत है। चांदनी चौक की संकरी गलियाँ ऐसे विक्रेताओं से भरी हैं जिन्होंने पीढ़ियों में एक ही व्यंजन को निखारा है।",
          "कुरकुरी आलू टिक्की से लेकर कढ़ाई से निकली चाशनी भरी जलेबी तक, हर निवाला शहर के इतिहास की कहानी कहता है।",
        ],
      },
    },
    {
      id: "t2",
      image: "images/travel2.jpg",
      gallery: ["images/travel2.jpg", "images/recipe1.jpg", "images/recipe6.jpg"],
      place: { en: "Kerala Backwaters", hi: "केरल बैकवाटर्स" },
      specialty: { en: "Coconut Fish Curry", hi: "नारियल मछली करी" },
      story: {
        en: "Cooking aboard a houseboat as palm shadows drift across still green water.",
        hi: "हाउसबोट पर खाना बनाना जहाँ हरे पानी पर ताड़ की छाया तैरती है।",
      },
      content: {
        en: [
          "The Kerala backwaters move at their own gentle pace. Aboard a traditional houseboat, meals are cooked with whatever the morning catch brings.",
          "Fresh fish simmered in coconut milk, curry leaves and kokum is a revelation — creamy, tangy and deeply comforting against the quiet green landscape.",
        ],
        hi: [
          "केरल के बैकवाटर अपनी ही शांत गति से चलते हैं। पारंपरिक हाउसबोट पर सुबह की पकड़ से खाना बनता है।",
          "नारियल दूध, करी पत्ता और कोकम में पकी ताज़ा मछली एक अनुभव है — मलाईदार, खट्टी और सुकून देने वाली।",
        ],
      },
    },
    {
      id: "t3",
      image: "images/travel3.jpg",
      gallery: ["images/travel3.jpg", "images/recipe4.jpg", "images/recipe1.jpg"],
      place: { en: "Rajasthan", hi: "राजस्थान" },
      specialty: { en: "Laal Maas & Spices", hi: "लाल मांस और मसाले" },
      story: {
        en: "Hunting for the boldest chillies in mountains of colour at the spice bazaar.",
        hi: "मसाला बाज़ार में रंगों के ढेर में सबसे तीखी मिर्च की तलाश।",
      },
      content: {
        en: [
          "Rajasthan cooks with fire and pride. The spice bazaars are mountains of red chillies, each variety promising a different kind of heat.",
          "Laal maas, the fiery mutton curry built on Mathania chillies, is not for the faint-hearted — but one spoonful explains why this desert cuisine is legendary.",
        ],
        hi: [
          "राजस्थान आग और गर्व से पकाता है। मसाला बाज़ार लाल मिर्चों के पहाड़ हैं, हर किस्म अलग तीखापन देती है।",
          "मथानिया मिर्च से बना तीखा लाल मांस कमज़ोर दिल वालों के लिए नहीं — पर एक चम्मच बता देता है कि यह रेगिस्तानी व्यंजन क्यों मशहूर है।",
        ],
      },
    },
  ],

  /* ---------------- CHEF'S SPECIAL MENU ---------------- */
  menu: [
    {
      id: "m1",
      image: "images/menu1.jpg",
      cat: "Starters",
      price: "₹320",
      name: { en: "Smoked Paneer Tikka", hi: "स्मोक्ड पनीर टिक्का" },
      desc: { en: "Charred cottage cheese, mint chutney glaze.", hi: "अंगारों पर सिका पनीर, पुदीना चटनी।" },
    },
    {
      id: "m2",
      image: "images/recipe1.jpg",
      cat: "Mains",
      price: "₹480",
      name: { en: "Signature Butter Chicken", hi: "सिग्नेचर बटर चिकन" },
      desc: { en: "Slow simmered tomato-cream gravy.", hi: "धीमी आँच पर पकी टमाटर-क्रीम ग्रेवी।" },
    },
    {
      id: "m3",
      image: "images/recipe3.jpg",
      cat: "Mains",
      price: "₹360",
      name: { en: "Royal Veg Biryani", hi: "रॉयल वेज बिरयानी" },
      desc: { en: "Fragrant basmati, saffron, fried onions.", hi: "खुशबूदार बासमती, केसर, तली प्याज़।" },
    },
    {
      id: "m4",
      image: "images/menu2.jpg",
      cat: "Desserts",
      price: "₹240",
      name: { en: "Mango Kulfi", hi: "आम कुल्फी" },
      desc: { en: "Alphonso mango, cardamom, pistachio.", hi: "अल्फांसो आम, इलायची, पिस्ता।" },
    },
    {
      id: "m5",
      image: "images/recipe4.jpg",
      cat: "Desserts",
      price: "₹200",
      name: { en: "Warm Gulab Jamun", hi: "गरम गुलाब जामुन" },
      desc: { en: "Golden dumplings in rose syrup.", hi: "गुलाब चाशनी में सुनहरे गुलाब जामुन।" },
    },
    {
      id: "m6",
      image: "images/recipe5.jpg",
      cat: "Starters",
      price: "₹180",
      name: { en: "Crispy Pani Puri", hi: "कुरकुरी पानी पूरी" },
      desc: { en: "Six shells, spiced water, chutneys.", hi: "छह पूरी, मसाला पानी, चटनियाँ।" },
    },
  ],

  /* ---------------- SOCIAL ---------------- */
  socials: [
  {
    name: "Instagram",
    handle: "Chef pankaj prajapati",
    icon: "📷",
    cls: "instagram",
    link: "https://www.instagram.com/chefpankaj01?igsh=MTYweGF3bGhpanI3eA%3D%3D&utm_source=qr"
  },
  {
    name: "Facebook",
    handle: "",
    icon: "📘",
    cls: "facebook",
    link: "https://facebook.com"
  },
  {
    name: "YouTube",
    handle: "@chefpankaj9173",
    icon: "▶️",
    cls: "youtube",
    link: "https://www.youtube.com/@chefpankaj9173"
  },
  {
    name: "LinkedIn",
    handle: "",
    icon: "💼",
    cls: "linkedin",
    link: "https://linkedin.com/in"
  },
  {
    name: "Pinterest",
    handle: "chefpankaj979",
    icon: "📌",
    cls: "pinterest",
    link: "https://in.pinterest.com/chefpankaj979/?invite_code=afd396cde903445eb879367880e5b206&sender=988681061854694610"
  }
]
};
