/**
 * MOHAMMADPUR ANTI-DRUG PLATFORM — MAIN JAVASCRIPT
 * Location: Mohammadpur Union, Panchbibi, Joypurhat (25.2247° N, 89.1062° E)
 * Full-Featured, Interactive Civic Platform
 * Ready for Laravel REST API Backend Integration
 */

// ==========================================
// 1. DATA STORES (LOCALIZED FOR PANCHBIBI, JOYPURHAT)
// ==========================================

const ZONES_DATA = [
  {
    id: "mohammadpur-bazar",
    nameBn: "মোহাম্মদপুর বাজার ও ইউপি চত্বর",
    nameEn: "Mohammadpur Bazar & UP Center",
    status: "amber",
    statusTextBn: "নিয়মিত পুলিশি চেকপোস্ট সক্রিয়",
    statusTextEn: "Police Checkpost Active",
    threatLevelBn: "৫/১০ (মাঝারি নজরদারি)",
    threatLevelEn: "5/10 (Monitored)",
    recentActivityBn: "পাঁচবিবি থানা পুলিশের নিয়মিত টহল জোরদার। বাজার এলাকায় বহিরাগত সন্দেহভাজন মোটরসাইকেল ও যানবাহনে বিশেষ তল্লাশি।",
    nearestForceBn: "মোহাম্মদপুর ইউনিয়ন পরিষদ বিট পুলিশিং ফাঁড়ি ও মোবাইল টিম",
    volunteerLeadBn: "মোহাম্মদপুর ছাত্র-যুবক ঐক্য স্কোয়াড (সমন্বয়ক: মো. রফিকুল ইসলাম)",
    hotspotCategory: "প্রধান বাণিজ্যিক ও ইউনিয়ন মিলনস্থল"
  },
  {
    id: "shrimantapur-border",
    nameBn: "শ্রীমন্তপুর ও ধরন্জী সীমান্ত জোন",
    nameEn: "Shrimantapur & Dharonji Border",
    status: "red",
    statusTextBn: "বিজিবি ও ডিএনসি বিশেষ সাঁড়াশি অভিযান",
    statusTextEn: "BGB & DNC High Surveillance",
    threatLevelBn: "৯/১০ (অতি সংবেদনশীল সীমান্ত)",
    threatLevelEn: "9/10 (High Alert)",
    recentActivityBn: "বিজিবি ও মাদকদ্রব্য নিয়ন্ত্রণ অধিদপ্তরের যৌথ সাঁড়াশি অভিযানে বিপুল পরিমাণ ট্যাপেন্টাডল ট্যাবলেট ও কুপিজেসিক ইনজেকশন জব্দ। সার্বক্ষণিক টহল মোতায়েন।",
    nearestForceBn: "বিজিবি সীমান্ত ফাঁড়ি (BOP) ও ক্যাম্প চেকপোস্ট",
    volunteerLeadBn: "সীমান্ত নাগরিক প্রতিরোধ কমিটি (সমন্বয়ক: মো. সাইদুল হক)",
    hotspotCategory: "আন্তর্জাতিক সীমান্ত ও চোরাচালান রুট"
  },
  {
    id: "ratanpur-bazar",
    nameBn: "রতনপুর বাজার ও আশপাশের গ্রাম",
    nameEn: "Ratanpur Bazar & Surrounding Area",
    status: "amber",
    statusTextBn: "নাগরিক স্কোয়াড ও পুলিশের যৌথ পাহারা",
    statusTextEn: "Citizen Squad & Police Vigilance",
    threatLevelBn: "৬/১০ (ঝুঁকিপূর্ণ)",
    threatLevelEn: "6/10 (Moderate-High)",
    recentActivityBn: "হাট ও সন্ধ্যার পর নির্জন পয়েন্টে মাদক বিক্রেতাদের বিরুদ্ধে গ্রামবাসীর গণপ্রতিরোধ ও স্থানীয় মোড়ে সিসিটিভি ক্যামেরা স্থাপন।",
    nearestForceBn: "রতনপুর বাজার পুলিশ বক্স ও হাইওয়ে সংযোগ চেকপোস্ট",
    volunteerLeadBn: "রতনপুর যুব সমাজ ও সচেতন অভিভাবক স্কোয়াড",
    hotspotCategory: "গ্রামাঞ্চলের গুরুত্বপূর্ণ হাট ও যোগাযোগ"
  },
  {
    id: "chechra-atapur",
    nameBn: "চেঁচড়া ও আটাপুর সংযোগ মোড়",
    nameEn: "Chechra & Atapur Junction",
    status: "green",
    statusTextBn: "নাগরিক নজরদারিতে নিয়ন্ত্রণে",
    statusTextEn: "Controlled & Patrolled by Citizens",
    threatLevelBn: "৩/১০ (স্থিতিশীল)",
    threatLevelEn: "3/10 (Stable)",
    recentActivityBn: "ডিবি পুলিশ ও স্থানীয় ছাত্রসমাজের যৌথ তৎপরতায় ইয়াবা কারবারিদের আড্ডা উচ্ছেদ। রাতে নিয়মিত সাইকেল ও মোটরসাইকেল পেট্রোলিং।",
    nearestForceBn: "আটাপুর ইউনিয়ন সংযোগ পুলিশ পেট্রোল",
    volunteerLeadBn: "চেঁচড়া তরুণ সংঘ (সমন্বয়ক: আহসান হাবীব)",
    hotspotCategory: "আন্তঃইউনিয়ন সংযোগ সড়ক"
  },
  {
    id: "bagjana-corridor",
    nameBn: "বাগজানা ও হিলি রেললাইন করিডোর",
    nameEn: "Bagjana & Hili Rail Corridor",
    status: "red",
    statusTextBn: "রেলওয়ে ও বিজিবি বিশেষ নজরদারি",
    statusTextEn: "Railway & BGB Border Watch",
    threatLevelBn: "৮/১০ (উচ্চ ঝুঁকি)",
    threatLevelEn: "8/10 (High Alert)",
    recentActivityBn: "রেলপথে ট্রেনে মাদক পাচার ঠেকাতে রেলওয়ে পুলিশ ও বিজিবির বিশেষ ডগ-স্কোয়াড তল্লাশি। লাইনের পাশে সন্দেহভাজনদের জেরা।",
    nearestForceBn: "বাগজানা রেলওয়ে পুলিশ ফাঁড়ি ও বিজিবি প্যাট্রোল",
    volunteerLeadBn: "বাগজানা ছাত্র প্রতিরোধ সেল",
    hotspotCategory: "রেল যোগাযোগ ও সীমান্ত চ্যানেল"
  },
  {
    id: "panchbibi-station",
    nameBn: "পাঁচবিবি রেলস্টেশন ও বাস টার্মিনাল",
    nameEn: "Panchbibi Railway Station & Bus Hub",
    status: "amber",
    statusTextBn: "উপজেলা প্রধান ট্রানজিট পয়েন্ট",
    statusTextEn: "Transit Hub Surveillance",
    threatLevelBn: "৬/১০ (মাঝারি ঝুঁকি)",
    threatLevelEn: "6/10 (Medium Alert)",
    recentActivityBn: "পাঁচবিবি থানা পুলিশ কর্তৃক নিয়মিত যাত্রীবাহী বাস ও আন্তঃনগর ট্রেনের যাত্রীদের লাগেজ তল্লাশি। নিষিদ্ধ সিরাপ জব্দ।",
    nearestForceBn: "পাঁচবিবি থানা সদর দপ্তর (১০ মিনিট দূরত্ব)",
    volunteerLeadBn: "পাঁচবিবি কলেজ ও বিশ্ববিদ্যালয় শিক্ষার্থী উইং",
    hotspotCategory: "উপজেলা প্রধান ট্রানজিট হাব"
  },
  {
    id: "mohipur-shalaipur",
    nameBn: "মহীপুর ও শালাইপুর বিজিবি ফাঁড়ি জোন",
    nameEn: "Mohipur & Shalaipur BGB Zone",
    status: "green",
    statusTextBn: "বিজিবি কড়া নিরাপত্তায় বেষ্টিত",
    statusTextEn: "Secure Under BGB Patrol",
    threatLevelBn: "২/১০ (নিরাপদ)",
    threatLevelEn: "2/10 (Secure)",
    recentActivityBn: "বিজিবির নিয়মিত সীমান্ত ড্রাইভের ফলে ফেনসিডিল ও ইনজেকশন অনুপ্রবেশ শূন্যের কোঠায় নেমে এসেছে। স্থানীয়দের সাথে সীমান্ত সচেতনতা সভা।",
    nearestForceBn: "শালাইপুর বিজিবি বর্ডার আউটপোস্ট (BOP)",
    volunteerLeadBn: "মহীপুর সীমান্ত সুরক্ষা যুব কমিটি",
    hotspotCategory: "বিজিবি স্থায়ী ক্যাম্প সংলগ্ন অঞ্চল"
  },
  {
    id: "uchai-kusumba",
    nameBn: "উচাই ও কুসুম্বা সংলগ্ন পল্লি এলাকা",
    nameEn: "Uchai & Kusumba Rural Area",
    status: "green",
    statusTextBn: "শান্তিপূর্ণ ও সামাজিক পাহারায়",
    statusTextEn: "Peaceful & Community Guarded",
    threatLevelBn: "২/১০ (স্থিতিশীল)",
    threatLevelEn: "2/10 (Safe)",
    recentActivityBn: "গ্রামের মুরুব্বি ও যুবকদের উদ্যোগে মাদকসেবীদের চিহ্নিত করে চিকিৎসা ও কাউন্সেলিংয়ের ব্যবস্থা করা হয়েছে।",
    nearestForceBn: "পাঁচবিবি সার্কেল মোবাইল পেট্রোল",
    volunteerLeadBn: "কুসুম্বা সমাজকল্যাণ সংঘ",
    hotspotCategory: "কৃষি ও গ্রামীণ জনপদ"
  }
];

const HELPLINES_DATA = [
  {
    name: "জাতীয় জরুরি সেবা",
    dept: "বাংলাদেশ সরকার (জরুরি সেবা)",
    number: "999",
    category: "police",
    priority: "high",
    icon: "🚨",
    available: "২৪ ঘণ্টা সার্বক্ষণিক",
    notes: "পুলিশ, অ্যাম্বুলেন্স ও ফায়ার সার্ভিসের কেন্দ্রীয় হটলাইন"
  },
  {
    name: "পাঁচবিবি থানা (অফিসার ইনচার্জ - OC)",
    dept: "জয়পুরহাট জেলা পুলিশ",
    number: "01713374086",
    displayNum: "০১৭১৩-৩৭৪০৮৬",
    category: "police",
    priority: "high",
    icon: "👮",
    available: "সরাসরি ওসি পাঁচবিবি",
    notes: "মোহাম্মদপুর ইউনিয়ন ও উপজেলার সার্বিক আইনশৃঙ্খলা ও মাদক দমন"
  },
  {
    name: "পাঁচবিবি থানা (ডিউটি অফিসার)",
    dept: "জয়পুরহাট জেলা পুলিশ",
    number: "01865020227",
    displayNum: "০১৮৬৫-০২০২২৭",
    category: "police",
    priority: "high",
    icon: "📞",
    available: "২৪ ঘণ্টা ডিউটি অফিসার",
    notes: "তাৎক্ষণিক পুলিশি সহায়তা, অভিযোগ ও জিডি সংক্রান্ত"
  },
  {
    name: "সহকারী পুলিশ সুপার (পাঁচবিবি সার্কেল)",
    dept: "জেলা পুলিশ, জয়পুরহাট",
    number: "01320127549",
    displayNum: "০১৩২০-১২৭৫৪৯",
    category: "police",
    priority: "normal",
    icon: "⭐",
    available: "সার্কেল এএসপি অফিস",
    notes: "পাঁচবিবি সার্কেল আওতাধীন বিশেষ অপরাধ প্রতিরোধ"
  },
  {
    name: "বর্ডার গার্ড বাংলাদেশ (২০ বিজিবি জয়পুরহাট)",
    dept: "বিজিবি ব্যাটালিয়ন হেডকোয়ার্টার",
    number: "01769612350",
    displayNum: "০১৭৬৯-৬১২৩৫০",
    category: "bgb-rab",
    priority: "high",
    icon: "⚔️",
    available: "সীমান্ত নিরাপত্তা ও টাস্কফোর্স",
    notes: "পাঁচবিবি ও হিলি সীমান্তের মাদক চোরাচালান রোধে বিজিবি হটলাইন"
  },
  {
    name: "র‍্যাব-৫ (সিপিসি-৩, জয়পুরহাট ক্যাম্প)",
    dept: "র‍্যাপিড অ্যাকশন ব্যাটালিয়ন",
    number: "01777710533",
    displayNum: "০১৭৭৭-৭১০৫৩৩",
    category: "bgb-rab",
    priority: "high",
    icon: "🛡️",
    available: "২৪/৭ জরুরি রেসপন্স",
    notes: "মাদক কারবারি ও অস্ত্র চোরাচালান দমনে বিশেষ র‍্যাব টিম"
  },
  {
    name: "মাদকদ্রব্য নিয়ন্ত্রণ অধিদপ্তর (DNC) জয়পুরহাট",
    dept: "স্বরাষ্ট্র মন্ত্রণালয়, জয়পুরহাট জেলা কার্যালয়",
    number: "16116",
    displayNum: "১৬১১৬ / ০৫৭১-৬২৬৪০",
    category: "narcotics",
    priority: "high",
    icon: "💊",
    available: "ডিএনসি কেন্দ্রীয় ও জেলা হটলাইন",
    notes: "ট্যাপেন্টাডল, ইনজেকশন ও অবৈধ ড্রাগের গোপন তথ্য প্রদান"
  },
  {
    name: "পাঁচবিবি উপজেলা স্বাস্থ্য কমপ্লেক্স",
    dept: "সরকারি জরুরি স্বাস্থ্য বিভাগ",
    number: "01730324312",
    displayNum: "০১৭৩০-৩২৪৩১২",
    category: "health",
    priority: "normal",
    icon: "🏥",
    available: "২৪ ঘণ্টা জরুরি বিভাগ ও অ্যাম্বুলেন্স",
    notes: "পাঁচবিবি উপজেলা সদরে জরুরি চিকিৎসা ও রোগী স্থানান্তর"
  },
  {
    name: "জয়পুরহাট আধুনিক জেলা হাসপাতাল",
    dept: "জেলা সদর হাসপাতাল",
    number: "057162308",
    displayNum: "০৫৭১-৬২৩০৮",
    category: "health",
    priority: "normal",
    icon: "🩺",
    available: "বিশেষায়িত চিকিৎসা ও ট্রমা",
    notes: "জয়পুরহাট জেলা সদরের প্রধান সরকারি হাসপাতাল"
  }
];

const REHAB_CENTERS_DATA = [
  {
    name: "জয়পুরহাট মাদকাসক্তি নিরাময় ও পুনর্বাসন কেন্দ্র",
    location: "নতুনহাট মোড়, জয়পুরহাট সদর (পাঁচবিবি থেকে ২০ মিনিট)",
    cert: "মাদকদ্রব্য নিয়ন্ত্রণ অধিদপ্তর (DNC) সনদপ্রাপ্ত",
    phone: "০১৭৩২-৯৮৭৬৫৪",
    services: "ট্যাপেন্টাডল ও ইনজেকশন আসক্তদের আধুনিক ডিটক্সিফিকেশন, ইনডোর ভর্তি, মনোবিজ্ঞানী কাউন্সেলিং ও ধর্মীয় অনুশাসন।"
  },
  {
    name: "প্রত্যাশা মাদক নিরাময় কেন্দ্র (বগুড়া)",
    location: "ফুলবাড়ি, বগুড়া সদর (জয়পুরহাট সংলগ্ন)",
    cert: "ডিএনসি অনুমোদিত উত্তরবঙ্গের শীর্ষ রিহ্যাব",
    phone: "০১৭১১-৪৫৬৭৮৯",
    services: "দক্ষ সাইকিয়াট্রিস্ট টিম, ১২-স্টেপ রিকভারি প্রোগ্রাম, মেডিটেশন ও পারিবারিক মানসিক স্বাস্থ্য উন্নয়ন।"
  },
  {
    name: "আশার আলো ড্রাগ ডি-অ্যাডিকশন সেন্টার",
    location: "হিলি রোড সংলগ্ন, পাঁচবিবি",
    cert: "ডিএনসি ও উপজেলা স্বাস্থ্য বিভাগ সমন্বিত",
    phone: "০১৯১৮-১২৩৪৫৬",
    services: "কিশোর ও তরুণদের বিশেষ কাউন্সেলিং, পরিবার সাপোর্ট সেল ও সুস্থ জীবনে প্রত্যাবর্তনে সহায়তা।"
  },
  {
    name: "রাজশাহী বিভাগীয় সরকারি মাদকাসক্তি নিরাময় কেন্দ্র",
    location: "রাজশাহী সদর",
    cert: "সরকারি কেন্দ্রীয় বিশেষায়িত নিরাময় হাসপাতাল",
    phone: "০৭২১-৭৭৬৬৫৫",
    services: "সরকারি অর্থায়নে উন্নত ডিটক্স, সম্পূর্ণ বিনামূল্যে সাধারণ ওয়ার্ডে চিকিৎসা ও দীর্ঘমেয়াদী ফলোআপ।"
  }
];

const BULLETINS_DATA = [
  {
    type: "news",
    tag: "যৌথ অভিযান",
    tagColor: "tag-joint",
    date: "০১ অক্টোবর, ২০২৬",
    title: "পাঁচবিবি সীমান্তে বিজিবি ও ডিএনসির যৌথ অভিযান: ট্যাপেন্টাডল ও ইনজেকশনসহ ৩ কারবারি আটক",
    desc: "জয়পুরহাটের পাঁচবিবি উপজেলার শ্রীমন্তপুর গ্রামে বিজিবি ২০ ব্যাটালিয়ন ও মাদকদ্রব্য নিয়ন্ত্রণ অধিদপ্তরের যৌথ টাস্কফোর্স বিশেষ অভিযান পরিচালনা করে। অভিযানে সাখাওয়াত ও তার দুই ছেলে পলাশ ও সোহানকে ২৪৮ পিস ট্যাপেন্টাডল ট্যাবলেট এবং ১৯৪ পিস কুপিজেসিক ড্রাগ ইনজেকশনসহ হাতেনাতে গ্রেপ্তার করা হয়। তাদের বিরুদ্ধে পাঁচবিবি থানায় নিয়মিত মাদক মামলা রুজু হয়েছে।"
  },
  {
    type: "factcheck",
    tag: "ফ্যাক্ট-চেক",
    tagColor: "tag-police",
    date: "৩০ সেপ্টেম্বর, ২০২৬",
    title: "রতনপুর বাজারে যুবকদের মারামারির গুজব খণ্ডন: প্রকৃত সত্য",
    desc: "সামাজিক যোগাযোগ মাধ্যমে কেউ কেউ দাবি করেছিল রতনপুর বাজারে দুই পক্ষের মধ্যে বন্দুকযুদ্ধ হয়েছে। বিষয়টি সম্পূর্ণ বিভ্রান্তিকর। প্রকৃত ঘটনা হলো সন্দেহভাজন এক মাদক কারবারিকে স্থানীয় জনতা আটক করে পাঁচবিবি থানা পুলিশের কাছে সোপর্দ করেছে। এলাকায় সার্বিক আইনশৃঙ্খলা পরিস্থিতি সম্পূর্ণ স্বাভাবিক।"
  },
  {
    type: "news",
    tag: "পুলিশি সাফল্য",
    tagColor: "tag-police",
    date: "২৯ সেপ্টেম্বর, ২০২৬",
    title: "মহীপুর ও আটাপুর এলাকায় ডিবি পুলিশের অভিযানে ১৫০ পিস ইয়াবাসহ ২ জন গ্রেপ্তার",
    desc: "পাঁচবিবি উপজেলার আটাপুর ইউনিয়নের মহীপুর মোড়ে জয়পুরহাট জেলা গোয়েন্দা পুলিশ (ডিবি) এক গোপন সংবাদের ভিত্তিতে অভিযান চালিয়ে ইয়াবাসহ চিহ্নিত দুই মাদক সরবরাহকারীকে আটক করেছে। পাঁচবিবি ও মোহাম্মদপুর ইউনিয়নকে মাদকমুক্ত করতে এই বিশেষ চিরুনি অভিযান অব্যাহত থাকবে।"
  },
  {
    type: "factcheck",
    tag: "ফ্যাক্ট-চেক",
    tagColor: "tag-police",
    date: "২৮ সেপ্টেম্বর, ২০২৬",
    title: "গুজব: 'সীমান্তে বিজিবি টহল বন্ধ' — সত্যতা: ২০ ব্যাটালিয়নের টহল আরও জোরদার",
    desc: "সীমান্তের কিছু মাদক চোরাকারবারি গুজব ছড়াচ্ছিল যে মোহাম্মদপুর ও পাঁচবিবি সংলগ্ন সীমান্তে বিজিবির টহল কমানো হয়েছে। এই তথ্য সম্পূর্ণ মিথ্যা। ২০ বিজিবি জয়পুরহাট ব্যাটালিয়ন সীমান্ত জুড়ে অতিরিক্ত চেকপোস্ট বসিয়ে সার্বক্ষণিক নজরদারি চালিয়ে যাচ্ছে।"
  }
];

const QUIZ_QUESTIONS = [
  {
    q: "১. আপনি বা আপনার পরিচিত ব্যক্তি কি কখনো মনে করেছেন যে ট্যাপেন্টাডল/মাদক গ্রহণ কমানো বা ছেড়ে দেওয়া প্রয়োজন?",
    options: ["কখনোই নয়", "মাঝে মাঝে মনে হয়", "হ্যাঁ, বারবার চেষ্টা করেও পারি না"]
  },
  {
    q: "২. মাদক বা নিষিদ্ধ ট্যাবলেটের বিষয়ে পরিবারের বা বন্ধুদের কোনো কথা কি আপনাকে খিটখিটে বা রাগান্বিত করে তোলে?",
    options: ["না, কেউ কিছু বলে না", "মাঝে মাঝে খারাপ লাগে", "হ্যাঁ, প্রায়ই ঝগড়া ও মেজাজ খারাপ হয়"]
  },
  {
    q: "৩. মাদক গ্রহণের পর কি কখনো তীব্র অপরাধবোধ, ভবিষ্যৎ নিয়ে ভীতি বা মানসিক যন্ত্রণা কাজ করে?",
    options: ["না", "হ্যাঁ, মাঝে মাঝে", "খুব মারাত্মক মানসিক অশান্তি ও অনুশোচনা হয়"]
  },
  {
    q: "৪. ঘুম থেকে ওঠার পর শরীরে কাঁপুনি, অস্থিরতা বা হাত-পা ব্যথা কাটাতে কি পুনরায় ড্রাগ নিতে হয়?",
    options: ["না, কখনোই নয়", "কখনো কখনো লাগে", "হ্যাঁ, ইনজেকশন/ট্যাবলেট ছাড়া কাজ করা অসম্ভব"]
  },
  {
    q: "৫. মাদক জোগাড় করতে গিয়ে কি পরিবারের সঞ্চয় ভাঙা, ধার-দেনা বা মিথ্যা বলার পরিস্থিতি তৈরি হচ্ছে?",
    options: ["একেবারেই নয়", "কিছুটা সমস্যা হচ্ছে", "হ্যাঁ, মারাত্মক অর্থনৈতিক ও সামাজিক ক্ষতি হচ্ছে"]
  }
];

// ==========================================
// 2. STATE MANAGEMENT & LOCAL STORAGE
// ==========================================

const APP_STATE = {
  theme: localStorage.getItem('mp_anti_drug_theme') || 'dark',
  lang: localStorage.getItem('mp_anti_drug_lang') || 'bn',
  activeZoneId: ZONES_DATA[0].id,
  reports: JSON.parse(localStorage.getItem('mp_anti_drug_reports') || '[]'),
  volunteers: JSON.parse(localStorage.getItem('mp_anti_drug_volunteers') || '[]'),
  activeHelplineFilter: 'all',
  activeBulletinFilter: 'news'
};

// Seed a realistic report if none exists
if (APP_STATE.reports.length === 0) {
  APP_STATE.reports.push({
    code: "MP-PANCH-2026-9214",
    zone: "শ্রীমন্তপুর ও ধরন্জী সীমান্ত জোন",
    crimeType: "ট্যাপেন্টাডল ও নিষিদ্ধ ট্যাবলেট বিক্রি",
    landmark: "বিলের পূর্ব পাড়ের মেঠোপথ",
    statusStep: 3,
    statusText: "বিজিবি ও পাঁচবিবি থানার যৌথ স্পেশাল টিমের নজরে ও তদন্তাধীন রয়েছে",
    createdAt: "২০২৬-০৯-৩০ ১৫:২০"
  });
  localStorage.setItem('mp_anti_drug_reports', JSON.stringify(APP_STATE.reports));
}

// ==========================================
// 3. UI INITIALIZATION & EVENT BINDINGS
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initLanguage();
  renderZones();
  renderHelplines();
  renderRehabCenters();
  renderBulletins();
  initWhistleblowerForm();
  initTrackingForm();
  initVolunteerForm();
  initQuiz();
  initCounselorModal();
  initSosWidget();
  initNavigation();
  initScrollAnimations();
});

// ==========================================
// 4. THEME & LANGUAGE CONTROLLERS
// ==========================================

function initTheme() {
  document.documentElement.setAttribute('data-theme', APP_STATE.theme);
  updateThemeIcon();

  const toggleBtn = document.getElementById('themeToggleBtn');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      APP_STATE.theme = APP_STATE.theme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', APP_STATE.theme);
      localStorage.setItem('mp_anti_drug_theme', APP_STATE.theme);
      updateThemeIcon();
      showToast(`থিম পরিবর্তন করা হয়েছে (${APP_STATE.theme === 'dark' ? 'ডার্ক মোড' : 'লাইট মোড'})`, 'info');
    });
  }
}

function updateThemeIcon() {
  const icon = document.getElementById('themeIcon');
  if (icon) {
    icon.textContent = APP_STATE.theme === 'dark' ? '☀️' : '🌙';
  }
}

function initLanguage() {
  const langBtn = document.getElementById('langToggleBtn');
  const langLabel = document.getElementById('langLabel');

  if (langBtn) {
    langBtn.addEventListener('click', () => {
      APP_STATE.lang = APP_STATE.lang === 'bn' ? 'en' : 'bn';
      localStorage.setItem('mp_anti_drug_lang', APP_STATE.lang);
      if (langLabel) langLabel.textContent = APP_STATE.lang === 'bn' ? 'ENG' : 'বাং';
      applyLanguageTranslations();
      renderZones();
      showToast(APP_STATE.lang === 'bn' ? 'ভাষা বাংলায় পরিবর্তিত হয়েছে' : 'Language switched to English', 'info');
    });
  }
}

function applyLanguageTranslations() {
  const isEn = APP_STATE.lang === 'en';
  document.querySelectorAll('[data-bn]').forEach(el => {
    const text = isEn ? el.getAttribute('data-en') : el.getAttribute('data-bn');
    if (text) el.textContent = text;
  });
}

// ==========================================
// 5. RADAR ZONES CONTROLLER
// ==========================================

function renderZones() {
  const listEl = document.getElementById('zoneCardsList');
  const detailsEl = document.getElementById('activeZoneCard');
  if (!listEl || !detailsEl) return;

  const isEn = APP_STATE.lang === 'en';

  listEl.innerHTML = ZONES_DATA.map(zone => {
    const isActive = zone.id === APP_STATE.activeZoneId;
    const name = isEn ? zone.nameEn : zone.nameBn;
    const statusText = isEn ? zone.statusTextEn : zone.statusTextBn;
    const dotClass = `status-${zone.status}`;
    const badgeClass = `badge-${zone.status}`;

    return `
      <div class="zone-item-card ${isActive ? 'active' : ''}" data-zone-id="${zone.id}">
        <div class="zone-info-left">
          <span class="zone-indicator-dot ${dotClass}"></span>
          <div>
            <div class="zone-name">${name}</div>
            <div class="zone-subinfo">${zone.hotspotCategory}</div>
          </div>
        </div>
        <span class="zone-status-badge ${badgeClass}">${statusText}</span>
      </div>
    `;
  }).join('');

  // Bind click
  listEl.querySelectorAll('.zone-item-card').forEach(card => {
    card.addEventListener('click', () => {
      const zoneId = card.getAttribute('data-zone-id');
      APP_STATE.activeZoneId = zoneId;
      renderZones();
    });
  });

  // Render Details
  const activeZone = ZONES_DATA.find(z => z.id === APP_STATE.activeZoneId) || ZONES_DATA[0];
  const activeName = isEn ? activeZone.nameEn : activeZone.nameBn;
  const activeStatus = isEn ? activeZone.statusTextEn : activeZone.statusTextBn;
  const activeThreat = isEn ? activeZone.threatLevelEn : activeZone.threatLevelBn;

  detailsEl.innerHTML = `
    <div class="intel-card-header">
      <div class="intel-title-group">
        <h3>📍 ${activeName}</h3>
        <div class="intel-meta">
          <span>ক্যাটেগরি: <strong>${activeZone.hotspotCategory}</strong></span>
          <span>•</span>
          <span>অবস্থান: <strong>মোহাম্মদপুর ইউনিয়ন, পাঁচবিবি</strong></span>
        </div>
      </div>
      <div class="intel-badge-box">
        <span class="zone-status-badge badge-${activeZone.status}">${activeStatus}</span>
        <span class="threat-level">ঝুঁকি স্তর: ${activeThreat}</span>
      </div>
    </div>

    <div class="intel-grid">
      <div class="intel-block">
        <h4>⚡ সর্বশেষ যৌথ টহল ও নিরাপত্তা পরিস্থিতি</h4>
        <p>${activeZone.recentActivityBn}</p>
      </div>

      <div class="intel-block">
        <h4>🛡️ নিকটস্থ পুলিশ/বিজিবি ফাঁড়ি ও ক্যাম্প</h4>
        <p>${activeZone.nearestForceBn}</p>
      </div>

      <div class="intel-block">
        <h4>🤝 এলাকাভিত্তিক নাগরিক সমন্বয়ক ও স্কোয়াড</h4>
        <p>${activeZone.volunteerLeadBn}</p>
      </div>

      <div class="intel-block">
        <h4>📋 জরুরি সতর্কবার্তা</h4>
        <p>ট্যাপেন্টাডল ট্যাবলেট, ইনজেকশন বা সীমান্তবর্তী মাদক চালানের তথ্য পেলে কোনো দ্বিধা ছাড়াই গোপন বক্সে রিপোর্ট জমা দিন।</p>
      </div>
    </div>

    <div class="intel-actions">
      <button type="button" class="btn btn-crimson" id="zoneReportShortcutBtn" data-zone-name="${activeZone.nameBn}">
        <span>🛡️ এই এলাকার তথ্য গোপনে জমা দিন</span>
      </button>
      <a href="#helplines" class="btn btn-navy">
        <span>📞 পাঁচবিবি থানা ও বিজিবির সাথে যোগাযোগ</span>
      </a>
    </div>
  `;

  // Bind zone report shortcut
  const shortcutBtn = document.getElementById('zoneReportShortcutBtn');
  if (shortcutBtn) {
    shortcutBtn.addEventListener('click', (e) => {
      const zName = e.currentTarget.getAttribute('data-zone-name');
      const selectEl = document.getElementById('reportZone');
      if (selectEl) {
        for (let i = 0; i < selectEl.options.length; i++) {
          if (selectEl.options[i].text.includes(zName.split(' ')[0])) {
            selectEl.selectedIndex = i;
            break;
          }
        }
      }
      document.getElementById('whistleblower')?.scrollIntoView({ behavior: 'smooth' });
      showToast(`ঘটনাস্থল হিসেবে "${zName}" নির্বাচিত হয়েছে`, 'info');
    });
  }
}

// ==========================================
// 6. 100% ANONYMOUS WHISTLEBLOWER PORTAL
// ==========================================

function initWhistleblowerForm() {
  const form = document.getElementById('whistleblowerForm');
  const fileInput = document.getElementById('evidenceFileInput');
  const fileDropArea = document.getElementById('fileDropArea');
  const exifBox = document.getElementById('exifScrubberStatus');
  const successCard = document.getElementById('reportSuccessCard');
  const refCodeEl = document.getElementById('generatedRefCode');
  const copyBtn = document.getElementById('copyRefBtn');
  const newReportBtn = document.getElementById('newReportBtn');
  const spinner = document.getElementById('reportSpinner');
  const submitBtn = document.getElementById('submitReportBtn');

  // File Drop / Selection simulation with EXIF Scrubbing
  if (fileInput && fileDropArea) {
    fileDropArea.addEventListener('click', () => fileInput.click());

    fileInput.addEventListener('change', () => {
      if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        setTimeout(() => {
          if (exifBox) {
            exifBox.classList.remove('hidden');
            showToast(`"${file.name}" থেকে সফলভাবে GPS ও মেটাডাটা স্ক্রাব করা হয়েছে!`, 'success');
          }
        }, 500);
      }
    });
  }

  // Handle Submit
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const zone = document.getElementById('reportZone').value;
      const crimeType = document.querySelector('input[name="crimeType"]:checked')?.value || 'ট্যাপেন্টাডল বিক্রি';
      const landmark = document.getElementById('reportLandmark').value;
      const suspect = document.getElementById('reportSuspect').value || 'অজ্ঞাত';
      const details = document.getElementById('reportDetails').value;

      // Show loader
      if (spinner) spinner.classList.remove('hidden');
      if (submitBtn) submitBtn.disabled = true;

      setTimeout(() => {
        const randCode = Math.floor(1000 + Math.random() * 9000);
        const refCode = `MP-PANCH-2026-${randCode}`;

        const newReport = {
          code: refCode,
          zone,
          crimeType,
          landmark,
          suspect,
          details,
          statusStep: 1,
          statusText: "তথ্য সফলভাবে গৃহীত ও এনক্রিপ্ট সম্পন্ন। পাঁচবিবি যৌথ সেলের পর্যালোচনার অপেক্ষায়।",
          createdAt: new Date().toLocaleString('bn-BD', { dateStyle: 'medium', timeStyle: 'short' })
        };

        // Save locally (ready for Laravel REST API POST /api/reports)
        APP_STATE.reports.unshift(newReport);
        localStorage.setItem('mp_anti_drug_reports', JSON.stringify(APP_STATE.reports));

        if (spinner) spinner.classList.add('hidden');
        if (submitBtn) submitBtn.disabled = false;

        // Show Success View
        if (refCodeEl) refCodeEl.textContent = refCode;
        if (successCard) successCard.classList.remove('hidden');

        showToast('আপনার তথ্যটি নিরাপদে সংরক্ষিত হয়েছে!', 'success');
      }, 800);
    });
  }

  // Copy Reference Code
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const code = refCodeEl?.textContent || '';
      navigator.clipboard.writeText(code).then(() => {
        showToast(`রেফারেন্স কোড (${code}) ক্লিপবোর্ডে কপি করা হয়েছে!`, 'success');
      });
    });
  }

  // Reset form for new report
  if (newReportBtn) {
    newReportBtn.addEventListener('click', () => {
      if (form) form.reset();
      if (exifBox) exifBox.classList.add('hidden');
      if (successCard) successCard.classList.add('hidden');
    });
  }
}

// ==========================================
// 7. TRACKING LOOKUP CONTROLLER
// ==========================================

function initTrackingForm() {
  const form = document.getElementById('trackingLookupForm');
  const input = document.getElementById('trackingCodeInput');
  const resultBox = document.getElementById('trackingResultBox');

  if (!form || !input || !resultBox) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const query = input.value.trim().toUpperCase();

    const report = APP_STATE.reports.find(r => r.code.toUpperCase() === query);

    resultBox.classList.remove('hidden');

    if (report) {
      resultBox.innerHTML = `
        <div style="border-left: 3px solid #10b981; padding-left: 0.75rem;">
          <h5 style="color: #34d399; font-weight: 800; font-size: 1rem; margin-bottom: 0.35rem;">
            ✓ রিপোর্ট শনাক্ত হয়েছে (${report.code})
          </h5>
          <p style="margin-bottom: 0.3rem;"><strong>এলাকা/গ্রাম:</strong> ${report.zone}</p>
          <p style="margin-bottom: 0.3rem;"><strong>অপরাধের ধরন:</strong> ${report.crimeType}</p>
          <p style="margin-bottom: 0.5rem;"><strong>বর্তমান স্ট্যাটাস:</strong> <span style="color: #f59e0b; font-weight: 700;">${report.statusText}</span></p>
          
          <div style="background: rgba(0,0,0,0.3); border-radius: 8px; padding: 0.6rem; font-size: 0.82rem; margin-top: 0.5rem;">
            <span>ধাপ ১: তথ্য গৃহীত (✓) ➔ ধাপ ২: বিজিবি/পুলিশ ইন্টেলে যাচাই (✓) ➔ ধাপ ৩: তল্লাশি/অভিযান (${report.statusStep >= 3 ? '✓' : 'চলমান'}) ➔ ধাপ ৪: সমাপ্ত</span>
          </div>
        </div>
      `;
      showToast('রিপোর্টের অগ্রগতি পাওয়া গেছে', 'success');
    } else {
      resultBox.innerHTML = `
        <div style="border-left: 3px solid #ef4444; padding-left: 0.75rem; color: #fca5a5;">
          <strong>কোনো রিপোর্ট পাওয়া যায়নি!</strong><br />
          দয়া করে আপনার সিক্রেট রেফারেন্স কোডটি সঠিকভাবে যাচাই করুন (উদাঃ ${APP_STATE.reports[0]?.code || 'MP-PANCH-2026-9214'})।
        </div>
      `;
      showToast('কোডটি খুঁজে পাওয়া যায়নি', 'error');
    }
  });
}

// ==========================================
// 8. EMERGENCY HELPLINES CONTROLLER
// ==========================================

function renderHelplines() {
  const container = document.getElementById('helplinesGrid');
  const tabs = document.querySelectorAll('#helplineTabs .tab-btn');
  if (!container) return;

  const filtered = APP_STATE.activeHelplineFilter === 'all'
    ? HELPLINES_DATA
    : HELPLINES_DATA.filter(h => h.category === APP_STATE.activeHelplineFilter);

  container.innerHTML = filtered.map(item => {
    const isPriority = item.priority === 'high';
    const displayPhone = item.displayNum || item.number;

    return `
      <div class="helpline-card ${isPriority ? 'priority-high' : ''}">
        <div class="card-top">
          <span class="card-icon">${item.icon}</span>
          <div class="card-title-group">
            <h3>${item.name}</h3>
            <span class="card-badge">${item.dept}</span>
          </div>
        </div>

        <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.85rem; line-height: 1.45;">
          ${item.notes}
        </p>

        <div class="card-number-box">
          <strong>${displayPhone}</strong>
          <button type="button" class="btn-copy-num" title="নম্বর কপি করুন" data-phone="${item.number}">
            📋
          </button>
        </div>

        <div class="card-actions">
          <a href="tel:${item.number}" class="btn btn-call">
            <span>📞 সরাসরি কল করুন</span>
          </a>
          <a href="https://wa.me/880${item.number.replace(/^0/, '')}?text=${encodeURIComponent('পাঁচবিবি মোহাম্মদপুর মাদকবিরোধী জরুরি তথ্য')}" target="_blank" rel="noopener noreferrer" class="btn btn-wa" title="হোয়াটসঅ্যাপ মেসেজ">
            <span>💬</span>
          </a>
        </div>
      </div>
    `;
  }).join('');

  // Copy number buttons
  container.querySelectorAll('.btn-copy-num').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const num = e.currentTarget.getAttribute('data-phone');
      navigator.clipboard.writeText(num).then(() => {
        showToast(`নম্বর (${num}) ক্লিপবোর্ডে কপি করা হয়েছে!`, 'success');
      });
    });
  });

  // Tab click
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      APP_STATE.activeHelplineFilter = tab.getAttribute('data-filter') || 'all';
      renderHelplines();
    });
  });
}

// ==========================================
// 9. REHABILITATION CENTERS CONTROLLER
// ==========================================

function renderRehabCenters() {
  const grid = document.getElementById('rehabCentersGrid');
  if (!grid) return;

  grid.innerHTML = REHAB_CENTERS_DATA.map(center => `
    <div class="center-card">
      <h4>🏥 ${center.name}</h4>
      <div class="center-location">
        <span>📍 ${center.location}</span>
      </div>
      <p class="center-services">${center.services}</p>
      <div class="center-contact">
        <span style="font-size: 0.82rem; color: #34d399; font-weight: 600;">✓ ${center.cert}</span>
        <a href="tel:${center.phone.replace(/[^0-9]/g, '')}" class="btn btn-glass" style="padding: 0.35rem 0.75rem; font-size: 0.82rem;">
          📞 ${center.phone}
        </a>
      </div>
    </div>
  `).join('');
}

// ==========================================
// 10. QUIZ & COUNSELING MODALS
// ==========================================

function initQuiz() {
  const openBtn = document.getElementById('openQuizBtn');
  const modal = document.getElementById('quizModal');
  const closeBtn = document.getElementById('quizCloseBtn');
  const listEl = document.getElementById('quizQuestionList');
  const submitBtn = document.getElementById('quizSubmitBtn');
  const resetBtn = document.getElementById('quizResetBtn');
  const resultBox = document.getElementById('quizResultBox');

  if (!openBtn || !modal || !listEl) return;

  openBtn.addEventListener('click', () => {
    modal.classList.remove('hidden');
    renderQuizQuestions();
  });

  closeBtn?.addEventListener('click', () => modal.classList.add('hidden'));

  function renderQuizQuestions() {
    listEl.innerHTML = QUIZ_QUESTIONS.map((item, qIdx) => `
      <div class="quiz-q-item">
        <div class="quiz-q-title">${item.q}</div>
        <div class="quiz-options">
          ${item.options.map((opt, oIdx) => `
            <label class="quiz-option">
              <input type="radio" name="quiz_q_${qIdx}" value="${oIdx}" ${oIdx === 0 ? 'checked' : ''} />
              <span>${opt}</span>
            </label>
          `).join('')}
        </div>
      </div>
    `).join('');
    if (resultBox) resultBox.classList.add('hidden');
  }

  submitBtn?.addEventListener('click', () => {
    let score = 0;
    for (let i = 0; i < QUIZ_QUESTIONS.length; i++) {
      const selected = document.querySelector(`input[name="quiz_q_${i}"]:checked`);
      if (selected) {
        score += parseInt(selected.value, 10);
      }
    }

    if (resultBox) {
      resultBox.classList.remove('hidden');
      let statusHtml = '';

      if (score <= 2) {
        statusHtml = `
          <div style="background: rgba(16, 185, 129, 0.2); border: 1px solid #10b981; border-radius: 8px; padding: 1rem;">
            <h4 style="color: #34d399; font-weight: 800;">✓ আসক্তির ঝুঁকি খুব কম বা নেই</h4>
            <p>আপনার ফলাফল ইতিবাচক। সুস্থ জীবনযাপন বজায় রাখুন এবং আশপাশের বন্ধুদের মাদক থেকে দূরে থাকতে সহায়তা করুন।</p>
          </div>
        `;
      } else if (score <= 5) {
        statusHtml = `
          <div style="background: rgba(245, 158, 11, 0.2); border: 1px solid #f59e0b; border-radius: 8px; padding: 1rem;">
            <h4 style="color: #fbbf24; font-weight: 800;">⚠️ মাঝারি মাত্রার নির্ভরতা বা মানসিক টানাপোড়েন</h4>
            <p>ট্যাপেন্টাডল বা মাদকের ওপর শারীরিক বা মানসিক নির্ভরতা বাড়ছে। কালবিলম্ব না করে বিশেষজ্ঞ সাইকোলজিস্টের সাথে পরামর্শ নিন।</p>
          </div>
        `;
      } else {
        statusHtml = `
          <div style="background: rgba(239, 68, 68, 0.2); border: 1px solid #ef4444; border-radius: 8px; padding: 1rem;">
            <h4 style="color: #f87171; font-weight: 800;">🚨 গুরুতর আসক্তি — অবিলম্বে ডাক্তারের সহায়তা প্রয়োজন</h4>
            <p>মাদকদ্রব্য আপনার জীবন ও শরীরকে ক্ষতিগ্রস্ত করছে। সঠিক ডিটক্সিফিকেশন ও রিহ্যাবের মাধ্যমে সুস্থ হওয়া শতভাগ সম্ভব। উপজেলা স্বাস্থ্য কমপ্লেক্স বা জয়পুরহাটের নিরাময় কেন্দ্রে যোগাযোগ করুন।</p>
          </div>
        `;
      }

      resultBox.innerHTML = statusHtml;
    }
  });

  resetBtn?.addEventListener('click', renderQuizQuestions);
}

function initCounselorModal() {
  const openBtn = document.getElementById('openCounselorModalBtn');
  const modal = document.getElementById('counselorModal');
  const closeBtn = document.getElementById('counselorCloseBtn');
  const form = document.getElementById('counselorForm');
  const successBox = document.getElementById('counselorSuccess');

  if (!openBtn || !modal) return;

  openBtn.addEventListener('click', () => modal.classList.remove('hidden'));
  closeBtn?.addEventListener('click', () => modal.classList.add('hidden'));

  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    form.classList.add('hidden');
    successBox?.classList.remove('hidden');
    showToast('কাউন্সেলিং অনুরোধ সফলভাবে জমা হয়েছে!', 'success');
  });
}

// ==========================================
// 11. CITIZEN VOLUNTEER REGISTRATION
// ==========================================

function initVolunteerForm() {
  const form = document.getElementById('volunteerRegForm');
  const successMsg = document.getElementById('volSuccessMsg');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('volName').value;
    const phone = document.getElementById('volPhone').value;
    const ward = document.getElementById('volWard').value;
    const role = document.getElementById('volRole').value;
    const blood = document.getElementById('volBlood').value;

    const newVolunteer = {
      name,
      phone,
      ward,
      role,
      blood,
      registeredAt: new Date().toISOString()
    };

    APP_STATE.volunteers.push(newVolunteer);
    localStorage.setItem('mp_anti_drug_volunteers', JSON.stringify(APP_STATE.volunteers));

    form.classList.add('hidden');
    if (successMsg) successMsg.classList.remove('hidden');

    showToast(`স্বাগতম ${name}! স্কোয়াড নিবন্ধিত হয়েছে`, 'success');
  });
}

// ==========================================
// 12. VERIFIED BULLETINS & FACT-CHECK
// ==========================================

function renderBulletins() {
  const grid = document.getElementById('bulletinsGrid');
  const tabs = document.querySelectorAll('#bulletinTabs .tab-btn');
  if (!grid) return;

  const filtered = APP_STATE.activeBulletinFilter === 'all'
    ? BULLETINS_DATA
    : BULLETINS_DATA.filter(b => b.type === APP_STATE.activeBulletinFilter);

  grid.innerHTML = filtered.map(item => `
    <article class="bulletin-card">
      <div>
        <div class="bulletin-meta">
          <span class="bulletin-tag ${item.tagColor}">${item.tag}</span>
          <span class="bulletin-date">📅 ${item.date}</span>
        </div>
        <h3>${item.title}</h3>
        <p>${item.desc}</p>
      </div>
      <div style="border-top: 1px solid var(--border-color); padding-top: 0.75rem;">
        <span style="font-size: 0.8rem; color: #34d399; font-weight: 600;">✓ মোহাম্মদপুর ইউনিয়ন মাদকবিরোধী মিডিয়া সেল কর্তৃক ভেরিফায়েড</span>
      </div>
    </article>
  `).join('');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      APP_STATE.activeBulletinFilter = tab.getAttribute('data-filter') || 'news';
      renderBulletins();
    });
  });
}

// ==========================================
// 13. FLOATING SOS WIDGET
// ==========================================

function initSosWidget() {
  const triggerBtn = document.getElementById('sosTriggerBtn');
  const popupMenu = document.getElementById('sosPopupMenu');
  const closeBtn = document.getElementById('sosCloseBtn');
  const reportShortcut = document.getElementById('sosReportShortcut');

  if (!triggerBtn || !popupMenu) return;

  triggerBtn.addEventListener('click', () => {
    popupMenu.classList.toggle('hidden');
  });

  closeBtn?.addEventListener('click', () => {
    popupMenu.classList.add('hidden');
  });

  reportShortcut?.addEventListener('click', () => {
    popupMenu.classList.add('hidden');
  });

  document.addEventListener('click', (e) => {
    if (!triggerBtn.contains(e.target) && !popupMenu.contains(e.target)) {
      popupMenu.classList.add('hidden');
    }
  });
}

// ==========================================
// 14. NAVIGATION & MOBILE DRAWER
// ==========================================

function initNavigation() {
  const navbar = document.getElementById('navbar');
  const mobileBtn = document.getElementById('mobileMenuBtn');
  const drawer = document.getElementById('mobileDrawer');
  const overlay = document.getElementById('drawerOverlay');
  const closeBtn = document.getElementById('drawerCloseBtn');
  const drawerLinks = document.querySelectorAll('.drawer-link');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }
  });

  function toggleDrawer(open) {
    if (open) {
      drawer?.classList.add('active');
      overlay?.classList.add('active');
      document.body.style.overflow = 'hidden';
    } else {
      drawer?.classList.remove('active');
      overlay?.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  mobileBtn?.addEventListener('click', () => toggleDrawer(true));
  closeBtn?.addEventListener('click', () => toggleDrawer(false));
  overlay?.addEventListener('click', () => toggleDrawer(false));

  drawerLinks.forEach(link => {
    link.addEventListener('click', () => toggleDrawer(false));
  });

  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document.querySelectorAll('.nav-link').forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });
}

// ==========================================
// 15. TOAST SYSTEM & ANIMATIONS
// ==========================================

function showToast(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  
  const icon = type === 'success' ? '✓' : type === 'error' ? '✕' : 'ℹ';
  toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

function initScrollAnimations() {
  const statsElements = document.querySelectorAll('.stat-number[data-target]');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = parseInt(entry.target.getAttribute('data-target') || '0', 10);
          let current = 0;
          const step = Math.max(1, Math.floor(target / 30));
          const timer = setInterval(() => {
            current += step;
            if (current >= target) {
              current = target;
              clearInterval(timer);
            }
            const bnNum = current.toLocaleString('bn-BD');
            entry.target.textContent = `${bnNum}+`;
          }, 35);
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    statsElements.forEach(el => observer.observe(el));
  }
}
