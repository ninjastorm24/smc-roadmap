# Mitigation, Reclaimed Level ও QML: নামের আগে প্রাইসের ঘটনাপ্রবাহ লিখুন

ভিন্ন ভিন্ন সোর্সের পার্থক্য বজায় রেখে পুরোনো জোনের পুনর্ব্যবহার এবং রিভার্সাল সিকোয়েন্স তুলনা করুন।

**Lesson 09 · Week 4 · প্রায় ৩ মিনিট**

[Series index](README.md) · [Lesson worksheet](../lessons/09-mitigation-reclaimed-qml.md) · [Roadmap](../SOLO_LEARNING_ROADMAP.md#week-4)

মার্কেট যখন পুরোনো কোনো লেভেলে ফিরে আসে, তখন কেউ সেটিকে বলেন Mitigation, কেউ বলেন Reclaimed Block, আবার কেউ সেখানে Quasimodo (QML) প্যাটার্ন দেখতে পান। এই নামগুলো কিন্তু একে অপরের হুবহু বিকল্প নয়। এগুলো আগের ভিন্ন ভিন্ন প্রাইস অ্যাকশনের ওপর নির্ভর করে এবং জোনের সীমানাও আলাদাভাবে নির্ধারণ করে।

তাই শুরুতেই সময়ের ধারাবাহিকতা অনুযায়ী ঘটনাটি বর্ণনা করুন: আগে কোন লেভেলটি ছিল, প্রাইস সেটিকে কীভাবে অতিক্রম করেছে, পরে আবার লেভেলটি ফিরে পেয়েছে কি না এবং রিটেস্ট হয়েছে কি না। এরপর নির্দিষ্ট সোর্সের নিয়ম অনুযায়ী সেটির নাম বা লেবেল দিন।

## Mitigation Block-এর জন্য একটি নির্দিষ্ট সংজ্ঞা বেছে নিন

ওয়ার্কবুক আপনাকে Mitigation Block-এর জন্য যেকোনো একটি নির্দিষ্ট ও ধারাবাহিক সোর্স অনুসরণ করতে বলে। যেমন, [TTrades explanation](https://ttrades.com/mitigation-blocks-simplified/)-এ একটি ব্যর্থ সুইং-ভিত্তিক জোনের কথা বলা হয়েছে এবং Breaker Block-এর সাথে এর শর্তগত পার্থক্য দেখানো হয়েছে। অন্য ট্রেডার বা শিক্ষকেরা এই ঘটনাগুলোকে ভিন্নভাবে সাজাতে পারেন।

আপনার কনসেপ্ট নোটে সুইং সিকোয়েন্স, বৈধ ক্যান্ডেল এবং প্রয়োজনীয় স্ট্রাকচারাল ঘটনাটি সরাসরি লিখে রাখুন। নিয়মটি যদি আগের হাই বা লো সুইপ না করে একটি ফেইলিওর সুইং (failure swing) দাবি করে, তবে সেই পার্থক্যটি স্পষ্টভাবে উল্লেখ করুন। শুধু ক্যান্ডেল দেখেই “ইনস্টিটিউশনগুলো তাদের পুরোনো লস পজিশন ক্লোজ করতে ফিরে এসেছে”—এমন গৎবাঁধা গল্প সংজ্ঞার ভেতর ঢোকাবেন না; কারণ শুধু চার্ট দেখে কারও উদ্দেশ্য প্রমাণ করা যায় না।

## Reclaimed শব্দটি একটি সম্পর্ক বোঝায়, পূর্ণাঙ্গ ট্রেডিং মেথড নয়

কোনো লেভেল Reclaim করার সহজ অর্থ হলো—লেভেলটি একবার হারানোর পর আবার ফিরে পাওয়া। কিন্তু আপনার রিসার্চ রুলসে পরিষ্কার লেখা থাকতে হবে “হারানো” এবং “ফিরে পাওয়া” বলতে ঠিক কী বোঝানো হচ্ছে।

ধরুন, একটি কাল্পনিক লেভেল ১০০। প্রাইস ১০০-এর নিচে শুধু একটি উইক তৈরি করে আবার ১০০-এর ওপরে ক্লোজ দিল—এটি এক ধরনের ঘটনা। আবার ১০০-এর নিচে পরপর কয়েকটি ক্যান্ডেল ক্লোজ হওয়ার পর প্রাইস পুনরায় ওপরে ক্লোজ দিয়ে রিটেস্ট করল—এটি আরেকটি ভিন্ন ঘটনা। এই পার্থক্য লিখে না রেখে দুটিকেই একই সেটআপ হিসেবে ধরলে এক্সিকিউশনের গুরুত্বপূর্ণ তারতম্যগুলো আড়ালে চলে যাবে।

ব্যক্তিগত কোনো মেন্টরের সম্পূর্ণ Reclaimed Block মেথড এই ওয়ার্কবুকে দেওয়া হয়নি। তাই সুনির্দিষ্ট শর্তাবলি হাতে না পাওয়া পর্যন্ত ওই মডেলটিকে আংশিক ম্যাপ করা ধারণা হিসেবেই রাখুন।

## QML-এর একটি নির্দিষ্ট স্ট্রাকচারাল সিকোয়েন্স আছে

ওয়ার্কবুকের বিয়ারিশ Quasimodo (QML) উদাহরণের ক্ষেত্রে শুরুতে একটি হাই, এরপর একটি Higher High, তারপর গুরুত্বপূর্ণ একটি স্ট্রাকচারাল লো ব্রেক এবং সবশেষে আগের হাই বা বাম পাশের শোল্ডার (shoulder) এরিয়ায় প্রাইসের ফিরে আসাকে বিবেচনা করা হয়। বুলিশ QML-এর ক্ষেত্রে ঠিক এর বিপরীত ক্রমটি প্রযোজ্য হবে।

একটি কাল্পনিক সিকোয়েন্স হতে পারে এমন: প্রথমে ১১০-এ একটি হাই, মাঝখানে ১০৪-এ একটি লো, এরপর ১১৩-তে একটি Higher High এবং পরে ১০৪-এর নিচে একটি বৈধ ক্যান্ডেল ক্লোজ। তখন আগের ১১০-এর আশেপাশের হাই লেভেলটি ভবিষ্যতে প্রাইস ফিরে আসার জন্য একটি সম্ভাব্য রেফারেন্স জোন হয়ে ওঠে। তবে সেখানে প্রাইসের রিটেস্ট করা এবং এন্ট্রি ট্রিগার পাওয়া—দুটি আলাদা শর্ত হিসেবেই থাকবে।

মাঝখানের লো ব্রেক না হলে বিয়ারিশ QML সিকোয়েন্সটি অসম্পূর্ণ। আবার প্রাইস যদি ফিরে না আসে, তবে রিটেস্ট এন্ট্রি নেওয়ারও সুযোগ নেই। আর নির্ধারিত ইনভ্যালিডেশন লেভেল যদি আগেই হিট করে ফেলে, তবে পরে নিজের সুবিধামতো নতুন শোল্ডার না খুঁজে সেটআপটিকে ব্যর্থ হিসেবেই রেকর্ড করুন।

## একটি ওয়ার্কশিট, তিনটি আলাদা বিবরণ

প্রতিটি উদাহরণের ক্ষেত্রে আগে প্রাইসের মূল ঘটনাগুলো নিরেটভাবে লিখে ফেলুন। তারপর দেখুন কোন সোর্সের নিয়ম অনুযায়ী সেখানে কোন লেবেলটি প্রযোজ্য হচ্ছে। এমন কিছু চার্ট সংগ্রহে রাখুন যেখানে কেবল একটি লেবেলই খাটে, এবং এমন কিছু উদাহরণও রাখুন যেখানে কোনো নামই সঠিকভাবে প্রযোজ্য হয় না।

সবচেয়ে ভালো ব্যাখ্যা হলো সেটি, যেখান থেকে টেকনিক্যাল নামগুলো সরিয়ে ফেললেও প্রাইসের লজিকটি পুরোপুরি পরিষ্কার থাকে। আপনি কি শুধু চার্টে আকর্ষণীয় একটি আকৃতি খুঁজছেন, নাকি সত্যিকারের ঘটনাপ্রবাহটি বুঝতে পারছেন—তা যাচাই করার এটিই সবচেয়ে কার্যকর উপায়।

## ওয়ার্কবুক ভিত্তি ও বাড়তি পড়াশোনা

এই মৌলিক লেখাটি [workbook lesson 09](../lessons/09-mitigation-reclaimed-qml.md)-এর ওপর ভিত্তি করে বিস্তৃত করা হয়েছে। সংখ্যার উদাহরণ এবং প্রস্তাবিত রিসার্চ রুলগুলো বিষয়টি সহজভাবে বোঝানোর জন্য যোগ করা হয়েছে। লেখাটি পড়ার পর ওয়ার্কশিটের সম্পূর্ণ চার্ট ল্যাব অনুশীলনটি সম্পন্ন করুন।

- [TTrades - mitigation blocks simplified](https://ttrades.com/mitigation-blocks-simplified/)
- [Qazi Forex Tips - Quasimodo pattern (Hindi/Urdu video)](https://qaziforextips.com/lesson-quasimodo-pattern.html)

## ভিডিও রিসোর্স

- **FX Journal** — [What is a Mitigation Block? Avoid These Mistakes to Go From Beginner to Pro!](https://www.youtube.com/watch?v=DXJ8C3BcT40&list=PLWWLDjWg4GhkDxAMJv_59s1TyBpE_twro): Mitigation Block এবং Breaker Block-এর পার্থক্য ও জোন নির্বাচনের সাধারণ ভুলগুলো এড়ানোর গাইড।
- **FX Journal** — [Reclaimed Order Block: Secret Strategy of Professional Traders | SMC Trading Bangla](https://www.youtube.com/watch?v=yCg73vAXkR0&list=PLWWLDjWg4GhkDxAMJv_59s1TyBpE_twro): ট্রেন্ড কন্টিনিউয়েশনে Reclaimed Order Block কীভাবে কাজ করে তা নিয়ে প্রফেশনাল ট্রেডিং টিউটোরিয়াল।
- **FX Journal** — [QML - Best Trading Strategy in Forex, Crypto and Stocks for Beginners in Bangla](https://www.youtube.com/watch?v=_G1Zl58leBc&list=PLWWLDjWg4GhkDxAMJv_59s1TyBpE_twro): Quasimodo (QML) রিভার্সাল প্যাটার্ন এবং লেফট শোল্ডার জোন থেকে এন্ট্রি নেওয়ার সম্পূর্ণ বাংলা গাইড।
- [TTrades — Mitigation Blocks Simplified: ICT Concepts](https://www.youtube.com/watch?v=bbWPoajy2MY) — একটি Mitigation Block (failure swing) এবং একটি Breaker Block (liquidity sweep)-এর মধ্যকার স্ট্রাকচারাল পার্থক্য পরিষ্কারভাবে তুলে ধরা হয়েছে।
- [Learn SMC With Kushal — What Is a Mitigation Block? How to Trade With It (Bengali)](https://www.youtube.com/watch?v=O-VqAtLPS6o) — বাংলায় Mitigation Block চেনার উপায় এবং রিটেস্টের শর্তগুলো আলোচনা করা হয়েছে।
- [Guardeer — All Block Types (Breaker, Reclaimed, Mitigation) In SMC: Lecture 7 (Hindi)](https://www.youtube.com/watch?v=ZGRXswei3kI) — হিন্দিতে Rejection, Breaker, Reclaimed এবং Mitigation Block-এর তুলনামূলক আলোচনা।
- [Guardeer Student — Whale Eyes Course Lecture 7: Rejection Block, Reclaimed Order Block & Mitigation (Hindi)](https://www.youtube.com/watch?v=wsVOs1o1Yw8&list=PLIusEm0IfW4k) — চার্টে Reclaimed Order Block, Rejection Block এবং রিভার্সাল সিকোয়েন্সের বিস্তারিত প্র্যাকটিক্যাল ওয়াকথ্রু।
- [Mulham Trading — EVERY ICT PD Array Explained in 20 Minutes!](https://www.youtube.com/watch?v=4VUMUla4rXg) — Mitigation, Breaker এবং Reclaimed জোনসহ ICT PD Array-গুলোর সম্পূর্ণ ক্রম ও ধারণা একত্রে সংক্ষেপে আলোচনা করা হয়েছে।

[← Rejection Block, Breaker এবং Unicorn Model: গঠনের ধারাবাহিকতা বুঝে নিন](08-rejection-breaker-unicorn.md) · [Point of Interest (POI) নির্বাচন: কেন বাদ দিচ্ছেন সেটিও স্পষ্ট রাখুন →](11-structure-based-poi.md)
