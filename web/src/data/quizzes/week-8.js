export const WEEK_8_QUIZZES = {
  "25-advanced-entries-part-2": {
    "lessonId": 25,
    "slug": "25-advanced-entries-part-2",
    "masteryPromptEn": "Which specific entry-model labels cannot be implemented from public sources without guessing?",
    "masteryPromptBn": "সুনির্দিষ্ট কোন এন্ট্রি-মডেল লেবেলগুলো অনুমান (guessing) না করে কেবল পাবলিক সোর্স থেকে বাস্তবায়ন করা সম্ভব নয়?",
    "completionItems": [
      {
        "id": "read-notes",
        "en": "Read the companion article and wrote summary notes in my own words",
        "bn": "সহায়ক আর্টিকেলটি পড়েছি এবং নিজের ভাষায় সারাংশ নোট লিখেছি"
      },
      {
        "id": "lab-1",
        "en": "Built eight entry-model cards and tagged ambiguous rules",
        "bn": "আটটি এন্ট্রি-মডেল কার্ড তৈরি করেছি এবং অস্পষ্ট নিয়মগুলো ট্যাগ করেছি"
      },
      {
        "id": "lab-2",
        "en": "Used 10 blind historical examples to compare rule consistency across two models",
        "bn": "দুটি মডেলের নিয়মের ধারাবাহিকতা তুলনা করতে ১০টি ব্লাইন্ড (ফলাফল না দেখা) ঐতিহাসিক উদাহরণ ব্যবহার করেছি"
      },
      {
        "id": "lab-3",
        "en": "Discarded any model that needed retrospective adjustment to call a signal valid",
        "bn": "সিগন্যালকে বৈধ বলার জন্য ফলাফল দেখার পর নিয়ম সমন্বয় (retrospective adjustment) করতে হয় এমন যেকোনো মডেল বাদ দিয়েছি"
      },
      {
        "id": "mastery-quiz",
        "en": "Completed the Knowledge Check quiz and answered the Mastery Check without notes",
        "bn": "নলেজ চেক কুইজ সম্পন্ন করেছি এবং নোট ছাড়াই মাস্টারি চেকের উত্তর দিয়েছি"
      }
    ],
    "questions": [
      {
        "qEn": "What central question does Lesson 25 ask when auditing confirmation and timing-oriented entry models?",
        "qBn": "কনফার্মেশন এবং টাইমিং-ভিত্তিক এন্ট্রি মডেলগুলো যাচাই করার সময় লেসন ২৫ কোন মূল প্রশ্নটি সামনে আনে?",
        "optionsEn": [
          "How many acronyms can be stacked onto a single winning screenshot?",
          "What exact event changes the decision from waiting to eligible?",
          "Which indicator repaints the fastest on a 1-minute chart?",
          "How can rules be adjusted after the trade closes to keep win rate at 100%?"
        ],
        "optionsBn": [
          "একটি জয়ী স্ক্রিনশটে কতগুলো সংক্ষিপ্ত নাম (acronyms) একসাথে বসানো যায়?",
          "ঠিক কোন সুনির্দিষ্ট ঘটনাটি আপনার সিদ্ধান্তকে \"অপেক্ষা\" থেকে \"এন্ট্রির উপযুক্ত\" (eligible) অবস্থায় নিয়ে যায়?",
          "১-মিনিটের চার্টে কোন ইন্ডিকেটরটি সবচেয়ে দ্রুত রিপেইন্ট করে?",
          "ট্রেড ক্লোজ হওয়ার পর কীভাবে নিয়ম পরিবর্তন করলে উইন রেট ১০০% রাখা যায়?"
        ],
        "correctIndex": 1,
        "explainEn": "Auditing the trigger means identifying the exact, observable event in real time that moves a setup from waiting to eligible.",
        "explainBn": "ট্রিগার যাচাই করার অর্থ হলো বাস্তব সময়ে ঠিক কোন পর্যবেক্ষণযোগ্য ঘটনাটি একটি সেটআপকে অপেক্ষা থেকে এন্ট্রির যোগ্য অবস্থায় নিয়ে যায় তা শনাক্ত করা।"
      },
      {
        "qEn": "Why does an \"engulfing\" entry trigger require an explicit boundary convention before testing?",
        "qBn": "টেস্টিং শুরু করার আগেই একটি \"Engulfing\" এন্ট্রি ট্রিগারের জন্য কেন সুনির্দিষ্ট বাউন্ডারি নিয়ম নির্ধারণ করা প্রয়োজন?",
        "optionsEn": [
          "Because engulfing patterns automatically determine position size and target without rules",
          "Because engulfing candles only occur on weekly forex charts",
          "Because body-engulfing and full-range outside-bar definitions select different candles, and you must also state whether strict inequality and candle close are required",
          "Because candlesticks do not have open and close prices"
        ],
        "optionsBn": [
          "কারণ এনগালফিং প্যাটার্ন কোনো নিয়ম ছাড়াই স্বয়ংক্রিয়ভাবে পজিশন সাইজ ও টার্গেট নির্ধারণ করে দেয়",
          "কারণ এনগালফিং ক্যান্ডেল কেবল ফরেক্সের উইকলি চার্টেই দেখা যায়",
          "কারণ বডি-এনগালফিং এবং ফুল-রেঞ্জ আউটসাইড বার ভিন্ন ভিন্ন ক্যান্ডেল নির্বাচন করে, এবং আগের ক্যান্ডেলকে ছাড়িয়ে যাওয়া ও ক্যান্ডেল ক্লোজ হওয়া বাধ্যতামূলক কি না তাও নির্দিষ্ট করতে হয়",
          "কারণ ক্যান্ডেলস্টিকে ওপেন এবং ক্লোজ প্রাইস থাকে না"
        ],
        "correctIndex": 2,
        "explainEn": "Without specifying body vs. full range, strict inequality, and candle closure, two observers will mark different engulfing triggers.",
        "explainBn": "শুধু বডি নাকি পুরো রেঞ্জ, আগের ক্যান্ডেলকে ছাড়িয়ে যাওয়া এবং ক্যান্ডেল ক্লোজের নিয়ম নির্দিষ্ট না করলে দুজন পর্যবেক্ষক ভিন্ন ভিন্ন ক্যান্ডেলকে ট্রিগার হিসেবে মার্ক করবেন।"
      },
      {
        "qEn": "In the article’s engulfing example, Candle 1 has a body of 100–102 and Candle 2 has a body of 99–103. What does this observation alone establish?",
        "qBn": "আর্টিকেলের এনগালফিং উদাহরণে, প্রথম ক্যান্ডেলের বডি ১০০–১০২ এবং দ্বিতীয় ক্যান্ডেলের বডি ৯৯–১০৩। কেবল এই পর্যবেক্ষণটি কী প্রমাণ করে?",
        "optionsEn": [
          "It shows that the second body contains the first, but context, direction, order type, stop, and expiry still need definition before it is a trading model",
          "It proves a guaranteed trading edge and reproduces all of the course’s advanced variants",
          "It means you should immediately enter both long and short at 103",
          "It invalidates all Fair Value Gaps on the chart"
        ],
        "optionsBn": [
          "এটি কেবল দেখায় যে দ্বিতীয় বডিটি প্রথমটিকে ঢেকে ফেলেছে; কিন্তু ট্রেডিং মডেলে পরিণত হতে হলে এর কনটেক্সট, ডিরেকশন, অর্ডার টাইপ, স্টপ এবং এক্সপায়ারি আলাদাভাবে সংজ্ঞায়িত করতে হবে",
          "এটি একটি নিশ্চিত ট্রেডিং এজ প্রমাণ করে এবং কোর্সের সব অ্যাডভান্সড ভ্যারিয়েন্টকে হুবহু তুলে ধরে",
          "এর মানে ১০৩ প্রাইসে সাথে সাথে লং এবং শর্ট উভয় এন্ট্রি নেওয়া উচিত",
          "এটি চার্টের সব Fair Value Gap ইনভ্যালিড করে দেয়"
        ],
        "correctIndex": 0,
        "explainEn": "A geometric candle containment is just a pattern definition; it requires context, direction, execution, stop, and expiry rules to become a testable setup.",
        "explainBn": "একটি ক্যান্ডেলের বডি অন্যটিকে ঢেকে ফেলা কেবল একটি জ্যামিতিক প্যাটার্ন; এটিকে টেস্টযোগ্য সেটআপে রূপ দিতে কনটেক্সট, ডিরেকশন, এক্সিকিউশন, স্টপ ও এক্সপায়ারি নিয়ম প্রয়োজন।"
      },
      {
        "qEn": "What three-step sequence is required to define an Inversion Fair Value Gap (iFVG) entry?",
        "qBn": "একটি Inversion Fair Value Gap (iFVG) এন্ট্রি সংজ্ঞায়িত করার জন্য কোন তিন-ধাপের ক্রমটি (sequence) প্রয়োজন?",
        "optionsEn": [
          "Widening a non-overlapping gap until it touches current price",
          "Any single wick touching a moving average",
          "Entering before the third candle of the original FVG closes",
          "Original qualifying gap, its defined failure (inversion), and a qualifying role-change interaction"
        ],
        "optionsBn": [
          "ওভারল্যাপ না করা একটি গ্যাপকে টেনে বর্তমান প্রাইস পর্যন্ত বড় করা",
          "যেকোনো একটি উইক মুভিং অ্যাভারেজ স্পর্শ করা",
          "মূল FVG-এর তৃতীয় ক্যান্ডেল ক্লোজ হওয়ার আগেই এন্ট্রি নেওয়া",
          "প্রথমে মূল বৈধ গ্যাপ থাকা, নির্ধারিত নিয়মে সেটির ফেইলিউর (ইনভার্সন) হওয়া এবং এরপর বিপরীতমুখী রোল-চেঞ্জ ইন্টারঅ্যাকশন ঘটা"
        ],
        "correctIndex": 3,
        "explainEn": "An iFVG requires the initial FVG, a rule-defined failure through that gap, and a subsequent retest/interaction acting in the opposite role.",
        "explainBn": "একটি iFVG-এর জন্য প্রথমে মূল FVG, নির্দিষ্ট নিয়মে সেই গ্যাপের ফেইলিউর এবং পরবর্তীতে বিপরীত ভূমিকায় (role-change) প্রাইসের ইন্টারঅ্যাকশন প্রয়োজন।"
      },
      {
        "qEn": "How does one common public convention define a Balanced Price Range (BPR)?",
        "qBn": "প্রচলিত একটি পাবলিক নিয়ম অনুযায়ী Balanced Price Range (BPR) কীভাবে সংজ্ঞায়িত করা হয়?",
        "optionsEn": [
          "The average daily range of the past 14 sessions",
          "The price overlap (intersection) between two opposing, completed Fair Value Gaps",
          "Any candle whose open equals its close",
          "The spread between bid and ask during news events"
        ],
        "optionsBn": [
          "বিগত ১৪টি সেশনের গড় ডেইলি রেঞ্জ",
          "বিপরীতমুখী এবং সম্পন্ন হওয়া দুটি Fair Value Gap (FVG)-এর মধ্যকার ওভারল্যাপ বা কমন অংশ",
          "যে ক্যান্ডেলের ওপেন এবং ক্লোজ প্রাইস সমান",
          "নিউজ ইভেন্টের সময় বিড এবং আস্ক প্রাইসের পার্থক্য"
        ],
        "correctIndex": 1,
        "explainEn": "In public SMC education (such as TTrades and The Right Trader), a BPR is constructed from the overlapping zone of a bullish FVG and a bearish FVG.",
        "explainBn": "পাবলিক SMC শিক্ষায় একটি বুলিশ FVG এবং একটি বিয়ারিশ FVG-এর ওভারল্যাপ বা কমন অংশকে Balanced Price Range (BPR) হিসেবে সংজ্ঞায়িত করা হয়।"
      },
      {
        "qEn": "In the article’s numerical BPR example, a completed bullish FVG spans 100–103 and a later completed bearish FVG spans 102–105. What is the BPR overlap, and when does it become usable?",
        "qBn": "আর্টিকেলের সংখ্যাগত BPR উদাহরণে, একটি সম্পন্ন বুলিশ FVG ১০০–১০৩ এবং পরের একটি সম্পন্ন বিয়ারিশ FVG ১০২–১০৫। এদের BPR ওভারল্যাপ কত এবং এটি কখন ব্যবহারযোগ্য হয়?",
        "optionsEn": [
          "100–105; usable before the first gap forms",
          "103–105; usable without waiting for candle closes",
          "100–102; usable immediately during the bullish impulse",
          "102–103; usable only after the later bearish gap has also completed under its own candle-close rules"
        ],
        "optionsBn": [
          "১০০–১০৫; প্রথম গ্যাপ তৈরি হওয়ার আগেই ব্যবহারযোগ্য",
          "১০৩–১০৫; ক্যান্ডেল ক্লোজের অপেক্ষা না করেই ব্যবহারযোগ্য",
          "১০০–১০২; বুলিশ ইমপালস চলাকালীন সাথে সাথেই ব্যবহারযোগ্য",
          "১০২–১০৩; কেবল পরের বিয়ারিশ গ্যাপটি নিজস্ব ক্যান্ডেল-ক্লোজ নিয়ম অনুযায়ী সম্পন্ন হওয়ার পরেই ব্যবহারযোগ্য"
        ],
        "correctIndex": 3,
        "explainEn": "The intersection of [100, 103] and [102, 105] is 102–103, and it does not exist as a BPR reference until the second FVG’s third candle closes.",
        "explainBn": "১০০–১০৩ এবং ১০২–১০৫-এর কমন অংশ হলো ১০২–১০৩, এবং দ্বিতীয় FVG-টি পুরোপুরি ক্লোজ না হওয়া পর্যন্ত এই ওভারল্যাপটি BPR রেফারেন্স হিসেবে অস্তিত্ব পায় না।"
      },
      {
        "qEn": "What should you do if an opposing bullish FVG (e.g., 100–101) and bearish FVG (e.g., 103–105) do NOT overlap?",
        "qBn": "বিপরীতমুখী একটি বুলিশ FVG (যেমন ১০০–১০১) এবং একটি বিয়ারিশ FVG (যেমন ১০৩–১০৫) যদি একে অপরকে ওভারল্যাপ না করে, তবে আপনার কী করা উচিত?",
        "optionsEn": [
          "Widen their boundaries manually until they touch at 102",
          "Switch to line charts so every candle overlaps",
          "Conclude that this construction produces no BPR; do not force or widen boundaries to invent one",
          "Call it a Double BPR and risk twice as much"
        ],
        "optionsBn": [
          "ম্যানুয়ালি বাউন্ডারি বাড়িয়ে ১০২-এ একসাথে মিলিয়ে দেওয়া",
          "লাইন চার্টে সুইচ করা যাতে প্রতিটি ক্যান্ডেল ওভারল্যাপ করে",
          "সিদ্ধান্ত নেওয়া যে এই গঠনে কোনো BPR তৈরি হয়নি; জোর করে BPR বানানোর জন্য গ্যাপের বাউন্ডারি বাড়িয়ে দেওয়া যাবে না",
          "একে ডাবল BPR নাম দিয়ে দ্বিগুণ রিস্ক নেওয়া"
        ],
        "correctIndex": 2,
        "explainEn": "If the two gaps do not intersect, no BPR exists under that rule; stretching boundaries after the fact ruins rule integrity.",
        "explainBn": "গ্যাপ দুটি একে অপরকে ছেদ না করলে এই নিয়মে কোনো BPR তৈরি হয়নি; ফলাফল দেখে জোর করে বাউন্ডারি বাড়ানো নিয়মের সততা নষ্ট করে।"
      },
      {
        "qEn": "How should Lesson 25’s unresolved abbreviations—such as MCS/WCS/DCS/SCS/MSCS, OC (in OC/BPR), and CiC (in Session + CiC + QT)—be handled?",
        "qBn": "লেসন ২৫-এর অমীমাংসিত সংক্ষিপ্ত নামগুলো—যেমন MCS/WCS/DCS/SCS/MSCS, OC (OC/BPR-এ), এবং CiC (Session + CiC + QT-তে)—কীভাবে হ্যান্ডেল করা উচিত?",
        "optionsEn": [
          "Avoid expanding or guessing ambiguous abbreviations unless you can cite the original source’s exact wording; keep them tagged as unresolved in the catalog",
          "Make up your own acronym expansions and claim they are official ICT rules",
          "Assume they all mean buying every market open",
          "Delete the entire Week 8 module"
        ],
        "optionsBn": [
          "মূল সোর্সের হুবহু সংজ্ঞা উদ্ধৃত করতে না পারলে অস্পষ্ট সংক্ষিপ্ত নামগুলোর অর্থ অনুমান করা থেকে বিরত থাকা এবং ক্যাটালগে সেগুলোকে অমীমাংসিত হিসেবে ট্যাগ করে রাখা",
          "নিজে থেকে পূর্ণরূপ বানিয়ে সেগুলোকে অফিশিয়াল ICT নিয়ম বলে দাবি করা",
          "ধরে নেওয়া যে এগুলোর সবগুলোর অর্থই প্রতিটি মার্কেট ওপেনে বাই নেওয়া",
          "সম্পূর্ণ উইক ৮ মডিউল মুছে ফেলা"
        ],
        "correctIndex": 0,
        "explainEn": "Lesson 25 strictly warns against guessing or inventing expansions for instructor-specific acronyms like MCS, OC, or CiC without original source definitions.",
        "explainBn": "লেসন ২৫ স্পষ্টভাবে সতর্ক করে যে মূল সোর্সের সংজ্ঞা ছাড়া MCS, OC বা CiC-এর মতো প্রশিক্ষক-নির্দিষ্ট সংক্ষিপ্ত নামগুলোর অর্থ অনুমান বা তৈরি করা যাবে না।"
      },
      {
        "qEn": "What is required to turn a \"Back-to-Back (B2B) key-level entry\" or an \"Advanced killzone entry\" into a testable hypothesis?",
        "qBn": "একটি \"Back-to-Back (B2B) key-level entry\" বা \"Advanced killzone entry\"-কে টেস্টযোগ্য হাইপোথিসিসে রূপান্তর করতে কী প্রয়োজন?",
        "optionsEn": [
          "Draw two random horizontal lines anywhere on the chart",
          "Only trade when you feel confident during London or New York",
          "For B2B, specify which two events form the level and how entry qualifies; for killzones, state the exact dated time window plus full price and execution conditions",
          "Wait until the trading session is over before marking the killzone"
        ],
        "optionsBn": [
          "চার্টের যেকোনো জায়গায় দুটি আনুমানিক অনুভূমিক লাইন আঁকা",
          "লন্ডন বা নিউ ইয়র্ক সেশনে কেবল আত্মবিশ্বাস অনুভব করলেই ট্রেড নেওয়া",
          "B2B-এর ক্ষেত্রে কোন দুটি ঘটনা লেভেলটি তৈরি করে ও এন্ট্রি কীভাবে বৈধ হয় তা নির্দিষ্ট করা; আর কিলজোনের ক্ষেত্রে নির্দিষ্ট সময়সীমার পাশাপাশি প্রাইস ও এক্সিকিউশনের সম্পূর্ণ শর্ত উল্লেখ করা",
          "কিলজোন মার্ক করার জন্য ট্রেডিং সেশন শেষ হওয়া পর্যন্ত অপেক্ষা করা"
        ],
        "correctIndex": 2,
        "explainEn": "Both B2B key-level entries and killzone models require explicit event definitions, time boundaries, and trigger/execution rules.",
        "explainBn": "B2B কি-লেভেল এবং কিলজোন মডেল উভয়ের ক্ষেত্রেই সুনির্দিষ্ট ইভেন্টের সংজ্ঞা, সময়সীমা এবং ট্রিগার ও এক্সিকিউশন নিয়ম উল্লেখ থাকা আবশ্যক।"
      },
      {
        "qEn": "Why does adding both \"displacement break of structure\" and \"FVG creation\" on the same impulse not automatically double your independent evidence?",
        "qBn": "একই ইমপালস মুভে \"ডিসপ্লেসমেন্ট স্ট্রাকচার ব্রেক\" এবং \"FVG তৈরি হওয়া\"—এই দুটি শর্ত একসাথে যোগ করলেই কেন আপনার স্বাধীন প্রমাণ দ্বিগুণ হয়ে যায় না?",
        "optionsEn": [
          "Because displacement candles never create FVGs",
          "Because structure breaks are bearish while FVGs are always bullish",
          "Because FVGs only occur in ranging markets",
          "Because both labels depend on a shared underlying price event (the same impulsive candle)"
        ],
        "optionsBn": [
          "কারণ ডিসপ্লেসমেন্ট ক্যান্ডেল কখনোই FVG তৈরি করে না",
          "কারণ স্ট্রাকচার ব্রেক সবসময় বিয়ারিশ আর FVG সবসময় বুলিশ",
          "কারণ FVG কেবল রেঞ্জিং মার্কেটেই তৈরি হয়",
          "কারণ দুটি লেবেলই আসলে একই প্রাইস ইভেন্টের (একই শক্তিশালী ডিসপ্লেসমেন্ট ক্যান্ডেল) ওপর নির্ভরশীল"
        ],
        "correctIndex": 3,
        "explainEn": "When a single displacement candle breaks structure and leaves an FVG, the two labels describe the same movement rather than two independent confirmations.",
        "explainBn": "যখন একটি একক ডিসপ্লেসমেন্ট ক্যান্ডেল একই সাথে স্ট্রাকচার ব্রেক করে এবং FVG তৈরি করে, তখন দুটি লেবেল আসলে একই মুভমেন্টকে বর্ণনা করে—দুটি আলাদা স্বাধীন প্রমাণ দেয় না।"
      },
      {
        "qEn": "How should you test whether adding an extra filter or condition actually improves a baseline entry model?",
        "qBn": "একটি বেসলাইন এন্ট্রি মডেলে অতিরিক্ত কোনো ফিল্টার বা শর্ত যোগ করলে তা আসলেই পারফরম্যান্স উন্নত করে কি না, সেটি কীভাবে টেস্ট করা উচিত?",
        "optionsEn": [
          "Change five rules at once on the evaluation sample until losses disappear",
          "Keep the baseline fixed, change one condition at a time on development data, and record excluded opportunities and transaction costs",
          "Only check whether the filter removed your biggest recent losing trade",
          "Test the filter on 3 hand-picked winning charts"
        ],
        "optionsBn": [
          "লস পুরোপুরি মুছে না যাওয়া পর্যন্ত ইভ্যালুয়েশন স্যাম্পলে একসাথে পাঁচটি নিয়ম পরিবর্তন করা",
          "বেসলাইন মডেলটি স্থির রেখে ডেভেলপমেন্ট ডেটাতে একবারে একটি করে শর্ত পরিবর্তন করা এবং ফিল্টারের কারণে বাদ পড়া সুযোগ ও ট্রানজ্যাকশন খরচ রেকর্ড করা",
          "ফিল্টারটি আপনার সাম্প্রতিক সবচেয়ে বড় লস ট্রেডটিকে বাদ দিতে পেরেছে কি না কেবল সেটি দেখা",
          "বাছাই করা ৩টি জয়ী চার্টে ফিল্টারটি টেস্ট করা"
        ],
        "correctIndex": 1,
        "explainEn": "Controlled comparison modifies one variable at a time on development data while tracking both filtered-out winners and transaction costs.",
        "explainBn": "নিয়ন্ত্রিত তুলনার নিয়ম হলো ডেভেলপমেন্ট ডেটাতে একবারে একটি শর্ত পরিবর্তন করা এবং এর ফলে বাদ পড়া ভালো ট্রেড ও খরচের হিসাব রাখা।"
      },
      {
        "qEn": "What does Lesson 25 mean by grading each candidate model on \"observability\"?",
        "qBn": "লেসন ২৫-এ প্রতিটি সম্ভাব্য মডেলকে \"পর্যবেক্ষণযোগ্যতা (observability)\"-এর ভিত্তিতে মূল্যায়ন করার অর্থ কী?",
        "optionsEn": [
          "Asking whether you can know the setup in real time without future bars, and whether two people following the card agree on the trigger",
          "Checking whether the chart uses bright colors",
          "Counting how many views a tutorial video has on YouTube",
          "Seeing if the pattern is visible from 10 feet away"
        ],
        "optionsBn": [
          "ভবিষ্যৎ ক্যান্ডেল না দেখে বাস্তব সময়ে সেটআপটি শনাক্ত করা যায় কি না এবং কার্ডটি অনুসরণ করে দুজন মানুষ একই ট্রিগারে একমত হতে পারেন কি না তা যাচাই করা",
          "চার্টে উজ্জ্বল রঙ ব্যবহার করা হয়েছে কি না তা দেখা",
          "ইউটিউবে টিউটোরিয়াল ভিডিওটির ভিউ সংখ্যা গণনা করা",
          "দশ ফুট দূর থেকে প্যাটার্নটি দেখা যায় কি না তা পরীক্ষা করা"
        ],
        "correctIndex": 0,
        "explainEn": "Observability requires real-time causal identification (no look-ahead) and inter-observer agreement on the exact trigger.",
        "explainBn": "পর্যবেক্ষণযোগ্যতার অর্থ হলো ভবিষ্যৎ ক্যান্ডেল না দেখে বাস্তব সময়ে সেটআপটি চেনা যাওয়া এবং নির্দিষ্ট ট্রিগারটির ব্যাপারে দুজন পর্যবেক্ষকের সিদ্ধান্তে মিল থাকা।"
      },
      {
        "qEn": "When using 10 blind historical examples to compare your two clearest model cards, what should you do if disagreement arises over what the trigger means?",
        "qBn": "আপনার সবচেয়ে স্পষ্ট দুটি মডেল কার্ড তুলনা করতে ১০টি ব্লাইন্ড ঐতিহাসিক উদাহরণ ব্যবহারের সময় যদি ট্রিগারের অর্থ নিয়েই দ্বিধা তৈরি হয়, তবে কী করা উচিত?",
        "optionsEn": [
          "Look at the trade outcomes first and pick the interpretation that won",
          "Combine both ambiguous triggers into an even larger rulebook",
          "Ignore the ambiguous trades and only log the obvious winners",
          "Record disagreement before viewing outcomes, and repair the trigger definition before interpreting which candidate won more often"
        ],
        "optionsBn": [
          "আগে ট্রেডের ফলাফল দেখা এবং যে ব্যাখ্যায় ট্রেড জিতেছে সেটি বেছে নেওয়া",
          "দুটি অস্পষ্ট ট্রিগারকে একত্রিত করে আরও বড় একটি রুলবুক তৈরি করা",
          "অস্পষ্ট ট্রেডগুলো উপেক্ষা করে কেবল নিশ্চিত জয়ী ট্রেডগুলো লগ করা",
          "ফলাফল দেখার আগেই মতপার্থক্য রেকর্ড করা এবং কোন মডেল বেশি জিতেছে সেই হিসাব করার আগে ট্রিগারের সংজ্ঞাটি মেরামত করা"
        ],
        "correctIndex": 3,
        "explainEn": "Definitional ambiguity must be resolved before outcome statistics mean anything; otherwise win rates merely reflect hindsight bias.",
        "explainBn": "ফলাফলের পরিসংখ্যান বিশ্লেষণ করার আগেই সংজ্ঞাগত অস্পষ্টতা দূর করতে হবে; তা না হলে উইন রেটের হিসাব কেবল হাইন্ডসাইট বায়াসকেই প্রতিফলিত করবে।"
      },
      {
        "qEn": "To how many models does Lesson 25 instruct you to reduce your shortlist by the end of the lesson, and what qualities should you prefer?",
        "qBn": "লেসন ২৫-এর শেষে আপনার শর্টলিস্ট কমিয়ে সর্বোচ্চ কয়টি মডেলে নামিয়ে আনতে বলা হয়েছে এবং কোন গুণগুলোকে প্রাধান্য দিতে বলা হয়েছে?",
        "optionsEn": [
          "At least 12 models with the maximum number of exceptions",
          "Exactly 8 models traded simultaneously on 1-minute charts",
          "At most two models, preferring fewer variables and the clearest invalidation",
          "One model for every day of the month"
        ],
        "optionsBn": [
          "সর্বোচ্চ সংখ্যক ব্যতিক্রমসহ অন্তত ১২টি মডেল",
          "১-মিনিটের চার্টে একই সাথে ট্রেড করার জন্য ঠিক ৮টি মডেল",
          "সর্বোচ্চ দুটি মডেল, যেখানে কম ভ্যারিয়েবল এবং সবচেয়ে স্পষ্ট ইনভ্যালিডেশন নিয়মকে প্রাধান্য দেওয়া হবে",
          "মাসের প্রতিটি দিনের জন্য আলাদা একটি করে মডেল"
        ],
        "correctIndex": 2,
        "explainEn": "Narrowing the shortlist to at most two models with fewer variables and unambiguous invalidation prevents overfitting and execution paralysis.",
        "explainBn": "কম ভ্যারিয়েবল এবং স্পষ্ট ইনভ্যালিডেশনসহ সর্বোচ্চ দুটি মডেলে শর্টলিস্ট নামিয়ে আনলে ওভারফিটিং এবং এক্সিকিউশনের দ্বিধা দূর হয়।"
      },
      {
        "qEn": "What warning is highlighted in Lesson 25 under \"Watch for\"?",
        "qBn": "লেসন ২৫-এর \"Watch for\" অংশে কোন সতর্কবার্তাটি তুলে ধরা হয়েছে?",
        "optionsEn": [
          "A model with many exceptions may fit past charts while failing in forward simulation",
          "Simple rules with clear invalidation are impossible to backtest",
          "Inversion FVGs never fail in live markets",
          "Searching for filters on evaluation data keeps the sample untouched"
        ],
        "optionsBn": [
          "অনেকগুলো ব্যতিক্রম (exceptions) থাকা একটি মডেল অতীতের চার্টে দারুণভাবে মিলে গেলেও ফরোয়ার্ড সিমুলেশনে ব্যর্থ হতে পারে",
          "স্পষ্ট ইনভ্যালিডেশনসহ সহজ নিয়ম ব্যাকটেস্ট করা অসম্ভব",
          "লাইভ মার্কেটে Inversion FVG কখনোই ব্যর্থ হয় না",
          "ইভ্যালুয়েশন ডেটার ওপর বারবার ফিল্টার খুঁজলে স্যাম্পলটি আনটাচড থাকে"
        ],
        "correctIndex": 0,
        "explainEn": "Adding endless exceptions and retrospective rules curve-fits historical data and breaks down in live forward simulation.",
        "explainBn": "অসংখ্য ব্যতিক্রম এবং ফলাফল-পরবর্তী নিয়ম যোগ করলে তা অতীতের ডেটায় কার্ভ-ফিট (curve-fit) হয়ে যায় এবং ফরোয়ার্ড সিমুলেশনে ব্যর্থ হয়।"
      }
    ]
  },
  "26-advanced-entries-part-3": {
    "lessonId": 26,
    "slug": "26-advanced-entries-part-3",
    "masteryPromptEn": "Can you state all model conditions in fewer than eight unambiguous rules?",
    "masteryPromptBn": "আপনি কি আটটিরও কম নিঃসংশয় ও স্পষ্ট নিয়মের মধ্যে আপনার মডেলের সব শর্ত প্রকাশ করতে পারেন?",
    "completionItems": [
      {
        "id": "read-notes",
        "en": "Read the companion article and wrote summary notes in my own words",
        "bn": "সহায়ক আর্টিকেলটি পড়েছি এবং নিজের ভাষায় সারাংশ নোট লিখেছি"
      },
      {
        "id": "lab-1",
        "en": "Finalized a one-page trading playbook and 20–30 historical entries",
        "bn": "এক পাতার একটি চূড়ান্ত ট্রেডিং প্লেবুক এবং ২০–৩০টি ঐতিহাসিক এন্ট্রির রেকর্ড সম্পন্ন করেছি"
      },
      {
        "id": "lab-2",
        "en": "Began a separate 4-week paper-trading log, retaining losing and missed examples",
        "bn": "লস হওয়া এবং মিস হওয়া উদাহরণগুলো সংরক্ষণ করে আলাদা একটি ৪-সপ্তাহের পেপার-ট্রেডিং লগ শুরু করেছি"
      },
      {
        "id": "lab-3",
        "en": "Completed a post-test review to decide whether to continue, refine once, or abandon the setup",
        "bn": "সেটআপটি চালিয়ে যাব, একবার পরিমার্জন করব নাকি বাদ দেব—সেই সিদ্ধান্ত নিতে একটি পোস্ট-টেস্ট রিভিউ সম্পন্ন করেছি"
      },
      {
        "id": "mastery-quiz",
        "en": "Completed the Knowledge Check quiz and answered the Mastery Check without notes",
        "bn": "নলেজ চেক কুইজ সম্পন্ন করেছি এবং নোট ছাড়াই মাস্টারি চেকের উত্তর দিয়েছি"
      }
    ],
    "questions": [
      {
        "qEn": "Which remaining screenshot labels complete the unresolved catalog inventory in Lesson 26?",
        "qBn": "লেসন ২৬-এ বাকি থাকা কোন স্ক্রিনশট লেবেলগুলোর মাধ্যমে অমীমাংসিত ক্যাটালগ তালিকাটি সম্পন্ন করা হয়েছে?",
        "optionsEn": [
          "MACD Histogram, Stochastic RSI, and Parabolic SAR",
          "Fixed TCiC, 2s CiC, Fixed QT Relation, Liquidity Purge, and Liquidity Pool entries",
          "Elliott Wave 5, Gann Fan, and Fibonacci Spiral",
          "Buy and hold index funds"
        ],
        "optionsBn": [
          "MACD Histogram, Stochastic RSI এবং Parabolic SAR",
          "Fixed TCiC, 2s CiC, Fixed QT Relation, Liquidity Purge এবং Liquidity Pool এন্ট্রি",
          "Elliott Wave 5, Gann Fan এবং Fibonacci Spiral",
          "বাই অ্যান্ড হোল্ড ইনডেক্স ফান্ড"
        ],
        "correctIndex": 1,
        "explainEn": "Lesson 26 completes the workbook catalog with Fixed TCiC, 2s CiC, Fixed QT Relation, Liquidity Purge, and Liquidity Pool entries.",
        "explainBn": "লেসন ২৬-এ Fixed TCiC, 2s CiC, Fixed QT Relation, Liquidity Purge এবং Liquidity Pool এন্ট্রিগুলোর মাধ্যমে ওয়ার্কবুকের ক্যাটালগ তালিকা সম্পন্ন করা হয়েছে।"
      },
      {
        "qEn": "Why does the article caution that \"Liquidity Purge\" and \"Liquidity Pool\" labels do not automatically give you a complete trading strategy?",
        "qBn": "\"Liquidity Purge\" এবং \"Liquidity Pool\" লেবেল দুটি কেন স্বয়ংক্রিয়ভাবে আপনাকে একটি সম্পূর্ণ ট্রেডিং স্ট্র্যাটেজি দেয় না বলে আর্টিকেলে সতর্ক করা হয়েছে?",
        "optionsEn": [
          "Because liquidity never exists in financial markets",
          "Because pools and purges only apply to centralized stock exchanges",
          "Because \"purge\" resembles a sweep without supplying the course’s exact entry rules, and a \"pool\" identifies a location hypothesis without providing transaction rules",
          "Because they forbid using stop losses"
        ],
        "optionsBn": [
          "কারণ ফিন্যান্সিয়াল মার্কেটে কখনোই লিকুইডিটি থাকে না",
          "কারণ পুল এবং পার্জ কেবল স্টক এক্সচেঞ্জেই প্রযোজ্য",
          "কারণ \"purge\" শুনতে সুইপের মতো হলেও তা কোর্সের মূল এন্ট্রি নিয়ম দেয় না, আর \"pool\" কেবল একটি সম্ভাব্য লোকেশন নির্দেশ করে কিন্তু লেনদেনের (transaction) নিয়ম দেয় না",
          "কারণ এগুলোতে স্টপ লস ব্যবহার নিষিদ্ধ"
        ],
        "correctIndex": 2,
        "explainEn": "Resembling a public sweep or naming a liquidity location does not specify the exact trigger, invalidation, expiry, and execution rules.",
        "explainBn": "পাবলিক সুইপের সাথে নামের মিল থাকা বা লিকুইডিটির অবস্থান চিহ্নিত করার মাধ্যমে সুনির্দিষ্ট ট্রিগার, ইনভ্যালিডেশন, এক্সপায়ারি এবং এক্সিকিউশন নিয়ম পাওয়া যায় না।"
      },
      {
        "qEn": "Which five criteria does Lesson 26 specify for choosing your final testable model?",
        "qBn": "আপনার চূড়ান্ত টেস্টযোগ্য মডেল বেছে নেওয়ার জন্য লেসন ২৬ কোন পাঁচটি মানদণ্ড (criteria) নির্দিষ্ট করে দেয়?",
        "optionsEn": [
          "Clarity, repeatability, market fit, realistic stops, and sufficient opportunities",
          "Maximum complexity, secret acronyms, zero losses, 1-second charts, and high leverage",
          "Popularity on social media, number of indicators, widest stops, and fewest rules",
          "Trading all 28 forex pairs with no session restriction"
        ],
        "optionsBn": [
          "স্পষ্টতা (clarity), পুনরাবৃত্তিযোগ্যতা (repeatability), মার্কেটের সাথে সামঞ্জস্য (market fit), বাস্তবসম্মত স্টপ লস এবং পর্যাপ্ত সুযোগের সংখ্যা",
          "সর্বোচ্চ জটিলতা, গোপন সংক্ষিপ্ত নাম, শূন্য লস, ১-সেকেন্ডের চার্ট এবং উচ্চ লিভারেজ",
          "সোশ্যাল মিডিয়ায় জনপ্রিয়তা, ইন্ডিকেটরের সংখ্যা, সবচেয়ে বড় স্টপ এবং সবচেয়ে কম নিয়ম",
          "কোনো সেশন সীমাবদ্ধতা ছাড়াই ২৮টি ফরেক্স পেয়ারে ট্রেড করা"
        ],
        "correctIndex": 0,
        "explainEn": "A practical final candidate must offer rule clarity, repeatability across observers, market fit, realistic stop distances, and enough setups to build a sample.",
        "explainBn": "একটি কার্যকর চূড়ান্ত মডেলে অবশ্যই নিয়মের স্পষ্টতা, পুনরাবৃত্তিযোগ্যতা, মার্কেটের সাথে সামঞ্জস্য, বাস্তবসম্মত স্টপ দূরত্ব এবং স্যাম্পল তৈরির মতো পর্যাপ্ত সুযোগ থাকতে হবে।"
      },
      {
        "qEn": "What must be recorded and versioned on your frozen entry card BEFORE opening the test sample?",
        "qBn": "টেস্ট স্যাম্পল ওপেন করার আগেই আপনার ফ্রিজ করা এন্ট্রি কার্ডে কী কী রেকর্ড ও ভার্সন করে রাখতে হবে?",
        "optionsEn": [
          "Only the name of the instrument",
          "The target profit needed to pass a prop-firm challenge in two days",
          "A list of dates where the market trended nicely",
          "Instrument, feed, timeframes, session, context, location, trigger, entry, stop, target, expiry, sizing, costs, ambiguous-fill rules, and event-exclusion rules"
        ],
        "optionsBn": [
          "কেবল ইনস্ট্রুমেন্টের নাম",
          "দুই দিনে প্রপ-ফার্ম চ্যালেঞ্জ পাস করার জন্য প্রয়োজনীয় প্রফিট টার্গেট",
          "মার্কেটে ভালো ট্রেন্ড ছিল এমন তারিখগুলোর একটি তালিকা",
          "ইনস্ট্রুমেন্ট, ডেটা ফিড, টাইমফ্রেম, সেশন, কনটেক্সট, লোকেশন, ট্রিগার, এন্ট্রি, স্টপ, টার্গেট, এক্সপায়ারি, সাইজিং, খরচ, অস্পষ্ট ফিলের নিয়ম এবং নিউজ বর্জনের নিয়ম"
        ],
        "correctIndex": 3,
        "explainEn": "Freezing the complete specification—including feed, costs, ambiguous fills, and news exclusions—prevents mid-sample rule drift.",
        "explainBn": "ডেটা ফিড, খরচ, অস্পষ্ট ফিল এবং নিউজ বর্জনসহ সম্পূর্ণ স্পেসিফিকেশন আগে থেকেই ফ্রিজ ও ভার্সন করে রাখলে স্যাম্পল চলাকালীন নিয়ম বদলে যাওয়ার ঝুঁকি থাকে না।"
      },
      {
        "qEn": "How does the article describe the role of the initial 20–30 blind historical scenarios compared to later stages?",
        "qBn": "পরবর্তী ধাপগুলোর তুলনায় শুরুর ২০–৩০টি ব্লাইন্ড ঐতিহাসিক সিনারিওর ভূমিকাকে আর্টিকেলে কীভাবে বর্ণনা করা হয়েছে?",
        "optionsEn": [
          "As final proof that you should immediately trade live with maximum leverage",
          "As an initial workflow check to reveal inconsistent rules and incomplete records before extended historical (50–100), reserved evaluation, and 4-week forward stages",
          "As an alternative name for the 4-week live forward test",
          "As a way to select only winning trades for your portfolio"
        ],
        "optionsBn": [
          "সর্বোচ্চ লিভারেজ দিয়ে সাথে সাথে লাইভ ট্রেডিং শুরু করার চূড়ান্ত প্রমাণ হিসেবে",
          "পরবর্তী বিস্তৃত ঐতিহাসিক স্যাম্পল (৫০–১০০), সংরক্ষিত ইভ্যালুয়েশন এবং ৪-সপ্তাহের ফরোয়ার্ড ধাপে যাওয়ার আগে নিয়মের অসামঞ্জস্য ও অসম্পূর্ণ রেকর্ড ধরার প্রাথমিক ওয়ার্কফ্লো চেক হিসেবে",
          "৪-সপ্তাহের ফরোয়ার্ড টেস্টেরই আরেকটি বিকল্প নাম হিসেবে",
          "পোর্টফোলিওর জন্য কেবল জয়ী ট্রেডগুলো বাছাই করার উপায় হিসেবে"
        ],
        "correctIndex": 1,
        "explainEn": "The first 20–30 blind setups test whether your workflow and rules hold together without ambiguity; larger historical, evaluation, and forward stages follow separately.",
        "explainBn": "প্রথম ২০–৩০টি ব্লাইন্ড সেটআপ মূলত যাচাই করে আপনার নিয়ম ও ওয়ার্কফ্লো নিঃসংশয়ভাবে কাজ করছে কি না; এরপর আলাদাভাবে বড় ঐতিহাসিক স্যাম্পল, ইভ্যালুয়েশন এবং ফরোয়ার্ড টেস্ট ধাপ আসে।"
      },
      {
        "qEn": "In the article’s arithmetic example, three filled simulated trades have net outcomes after costs of +1.5R, −1.1R, and +0.2R. What is the mean net R (expectancy per trade) of those three trades?",
        "qBn": "আর্টিকেলের গাণিতিক উদাহরণে, তিনটি ফিল হওয়া সিমুলেটেড ট্রেডের খরচ বাদে নিট ফলাফল হলো +1.5R, −1.1R এবং +0.2R। এই তিনটি ট্রেডের গড় নিট R (expectancy) কত?",
        "optionsEn": [
          "+0.6R",
          "−0.2R",
          "+0.93R",
          "+0.2R"
        ],
        "optionsBn": [
          "+0.6R",
          "−0.2R",
          "+0.93R",
          "+0.2R"
        ],
        "correctIndex": 3,
        "explainEn": "The sum of (+1.5R − 1.1R + 0.2R) is +0.6R. Dividing +0.6R by 3 trades gives a mean net outcome of +0.2R per trade.",
        "explainBn": "(+1.5R − 1.1R + 0.2R)-এর যোগফল হলো +0.6R। এটিকে ৩টি ট্রেড দিয়ে ভাগ করলে প্রতি ট্রেডে গড় নিট ফলাফল দাঁড়ায় +0.2R।"
      },
      {
        "qEn": "What does the article note right after showing the three-trade mean net R calculation (+1.5R, −1.1R, +0.2R = +0.2R)?",
        "qBn": "তিনটি ট্রেডের গড় নিট R (+0.2R) হিসাবটি দেখানোর ঠিক পরেই আর্টিকেলে কোন গুরুত্বপূর্ণ কথাটি মনে করিয়ে দেওয়া হয়েছে?",
        "optionsEn": [
          "Costs should be ignored whenever net R is positive",
          "Three trades are statistically sufficient to prove a strategy for 10 years",
          "Three trades provide an arithmetic example, not a reliable performance conclusion",
          "You should change the initial 1R risk denominator after every trade"
        ],
        "optionsBn": [
          "নিট R পজিটিভ হলেই ট্রেডিং খরচ উপেক্ষা করা উচিত",
          "আগামী ১০ বছরের জন্য স্ট্র্যাটেজি প্রমাণ করতে তিনটি ট্রেডই পরিসংখ্যানগতভাবে যথেষ্ট",
          "মাত্র তিনটি ট্রেড কেবল গাণিতিক হিসাব বোঝার উদাহরণ দেয়, কোনো নির্ভরযোগ্য পারফরম্যান্সের সিদ্ধান্ত দেয় না",
          "প্রতিটি ট্রেডের পর প্রাথমিক রিস্ক (1R)-এর ভিত্তি পরিবর্তন করা উচিত"
        ],
        "correctIndex": 2,
        "explainEn": "Three trades illustrate how to compute net R after costs with a fixed initial risk denominator, but statistical evaluation requires a much larger sample.",
        "explainBn": "তিনটি ট্রেডের উদাহরণটি কেবল স্থির প্রাথমিক রিস্ক (1R) ধরে খরচ বাদে নিট R হিসাব করার নিয়ম দেখায়, কিন্তু নির্ভরযোগ্য মূল্যায়নের জন্য অনেক বড় স্যাম্পল প্রয়োজন।"
      },
      {
        "qEn": "How should sessions where no valid setup occurred (\"no-entry sessions\") be recorded in your performance accounting?",
        "qBn": "যেসব সেশনে নিয়ম অনুযায়ী কোনো বৈধ সেটআপ তৈরি হয়নি (\"no-entry sessions\"), আপনার পারফরম্যান্স হিসাবে সেগুলোকে কীভাবে রেকর্ড করা উচিত?",
        "optionsEn": [
          "Record them in opportunity/coverage statistics rather than counting them as zero-return filled trades",
          "Count them as zero-return filled trades so your trade count looks huge",
          "Count them as winning trades with +1R profit",
          "Delete those dates so it looks like your strategy trades every single day"
        ],
        "optionsBn": [
          "সেগুলোকে শূন্য-রিটার্ন ট্রেড হিসেবে না ধরে সুযোগ বা কভারেজ পরিসংখ্যানে (coverage statistics) রাখা",
          "ট্রেডের সংখ্যা অনেক বড় দেখানোর জন্য সেগুলোকে শূন্য-রিটার্নের ফিল হওয়া ট্রেড হিসেবে গণনা করা",
          "+1R প্রফিটের জয়ী ট্রেড হিসেবে গণনা করা",
          "ওই তারিখগুলো মুছে ফেলা যাতে মনে হয় স্ট্র্যাটেজিটি প্রতিদিনই ট্রেড দেয়"
        ],
        "correctIndex": 0,
        "explainEn": "No-entry sessions tell you how often the setup appears across calendar sessions (coverage), without artificially diluting average R per filled trade.",
        "explainBn": "নো-এন্ট্রি সেশনগুলো কভারেজ পরিসংখ্যানে রাখলে বোঝা যায় কতগুলো সেশনে সুযোগ তৈরি হচ্ছে, এবং এতে ফিল হওয়া ট্রেডের গড় R কৃত্রিমভাবে কমে যায় না।"
      },
      {
        "qEn": "How should you handle \"uncertain or ambiguous fills\" (for example, when price touches your limit price to the exact tick or candle sequence is unclear)?",
        "qBn": "অর্ডার ফিল হওয়া নিয়ে সংশয় বা অস্পষ্টতা থাকলে (\"uncertain or ambiguous fills\"—যেমন প্রাইস একদম লিমিট প্রাইস ছুঁয়ে ফিরে গেলে বা ক্যান্ডেলের ভেতরের ক্রম অস্পষ্ট হলে) কী করা উচিত?",
        "optionsEn": [
          "Always assume the fill occurred if the trade reached take-profit, and assume it missed if it hit stop-loss",
          "Increase leverage retroactively on ambiguous trades",
          "Flag uncertain fills explicitly under a predefined rule rather than assuming the favorable sequence",
          "Switch data feeds until the candle wick disappears"
        ],
        "optionsBn": [
          "ট্রেডটি টেক-প্রফিটে গেলে ফিল হয়েছে ধরে নেওয়া, আর স্টপ-লসে গেলে ফিল হয়নি ধরে নেওয়া",
          "অস্পষ্ট ট্রেডগুলোতে পেছনের তারিখে লিভারেজ বাড়িয়ে দেওয়া",
          "ফলাফল নিজের পক্ষে গেছে ধরে না নিয়ে পূর্বনির্ধারিত নিয়ম অনুযায়ী সন্দেহজনক ফিলগুলোকে আলাদাভাবে ফ্ল্যাগ (flag) করে রাখা",
          "উইকটি অদৃশ্য না হওয়া পর্যন্ত ডেটা ফিড পরিবর্তন করতে থাকা"
        ],
        "correctIndex": 2,
        "explainEn": "Assuming favorable fills on close calls inflates backtest expectancy; flagging them tests whether your edge survives conservative fill assumptions.",
        "explainBn": "সন্দেহজনক ক্ষেত্রে অর্ডার নিজের পক্ষে ফিল হয়েছে ধরে নিলে ব্যাকটেস্টের ফলাফল কৃত্রিমভাবে ফুলেফেঁপে ওঠে; তাই সেগুলোকে আলাদাভাবে ফ্ল্যাগ করে রক্ষণশীলভাবে যাচাই করা জরুরি।"
      },
      {
        "qEn": "What happens if you change a rule during or after reviewing an evaluation sample?",
        "qBn": "ইভ্যালুয়েশন স্যাম্পল চলাকালীন বা সেটি রিভিউ করার পর আপনি যদি কোনো নিয়ম পরিবর্তন করেন, তবে কী ঘটবে?",
        "optionsEn": [
          "You can keep calling the same sample an independent evaluation",
          "The strategy automatically passes forward testing",
          "You only need to re-calculate winning trades",
          "You must record a new version number, treat the data used to choose that change as development evidence, and find a new period for independent evaluation"
        ],
        "optionsBn": [
          "ওই একই স্যাম্পলকে তখনো স্বাধীন ইভ্যালুয়েশন স্যাম্পল বলে দাবি করা যাবে",
          "স্ট্র্যাটেজিটি স্বয়ংক্রিয়ভাবে ফরোয়ার্ড টেস্টিংয়ে পাস করে যাবে",
          "কেবল জয়ী ট্রেডগুলো নতুন করে হিসাব করলেই চলবে",
          "একটি নতুন ভার্সন নম্বর রেকর্ড করতে হবে, যে ডেটা দেখে নিয়ম বদলানো হয়েছে সেটিকে ডেভেলপমেন্ট ডেটা হিসেবে গণ্য করতে হবে এবং স্বাধীন মূল্যায়নের জন্য নতুন আরেকটি সময়কাল খুঁজে নিতে হবে"
        ],
        "correctIndex": 3,
        "explainEn": "Rules must remain frozen during a sample; any rule revision creates a new version that must be evaluated on fresh, untouched data.",
        "explainBn": "স্যাম্পল চলাকালীন নিয়ম অবশ্যই স্থির থাকতে হবে; যেকোনো নিয়ম পরিবর্তনের ফলে একটি নতুন ভার্সন তৈরি হয় যা সম্পূর্ণ নতুন ও আনটাচড ডেটায় মূল্যায়ন করতে হবে।"
      },
      {
        "qEn": "In the post-test review at the end of Lesson 26, what are the three evidence-based decisions you can make about a tested setup?",
        "qBn": "লেসন ২৬-এর শেষে পোস্ট-টেস্ট রিভিউতে প্রমাণের ভিত্তিতে একটি পরীক্ষিত সেটআপ সম্পর্কে কোন তিনটি সিদ্ধান্ত নেওয়া যেতে পারে?",
        "optionsEn": [
          "Borrow money, trade news events blindly, or remove all stop losses",
          "Continue (collect more unchanged observations), refine once between samples (to fix a specific definitional problem), or abandon/archive the setup",
          "Hide losing trades, rename the strategy, or sell a course",
          "Double risk every day, trade 15 setups at once, or delete your journal"
        ],
        "optionsBn": [
          "ঋণ নেওয়া, অন্ধভাবে নিউজ ট্রেড করা অথবা সব স্টপ লস তুলে দেওয়া",
          "চালিয়ে যাওয়া (অপরিবর্তিত নিয়মে আরও পর্যবেক্ষণ সংগ্রহ), দুই স্যাম্পলের মাঝে একবার পরিমার্জন করা (নির্দিষ্ট সংজ্ঞাগত সমস্যা দূর করতে), অথবা সেটআপটি বাদ দিয়ে আর্কাইভ করা",
          "লস ট্রেড লুকিয়ে ফেলা, স্ট্র্যাটেজির নাম বদলানো অথবা কোর্স বিক্রি করা",
          "প্রতিদিন রিস্ক দ্বিগুণ করা, একসাথে ১৫টি সেটআপে ট্রেড করা অথবা জার্নাল মুছে ফেলা"
        ],
        "correctIndex": 1,
        "explainEn": "A disciplined research cycle ends each sample with an explicit decision: continue unchanged, refine a specific definition for the next sample, or archive the model.",
        "explainBn": "একটি সুশৃঙ্খল রিসার্চ প্রক্রিয়ায় প্রতিটি স্যাম্পল শেষে তিনটি সুনির্দিষ্ট সিদ্ধান্তের একটি নেওয়া হয়: অপরিবর্তিতভাবে চালিয়ে যাওয়া, পরবর্তী স্যাম্পলের জন্য নির্দিষ্ট সংজ্ঞা পরিমার্জন করা, অথবা মডেলটি আর্কাইভ করা।"
      },
      {
        "qEn": "Why should you save the original playbook version and its failure log even when you decide to archive or abandon a model?",
        "qBn": "কোনো মডেল বাদ দেওয়া বা আর্কাইভ করার সিদ্ধান্ত নিলেও কেন সেটির মূল প্লেবুক ভার্সন এবং ব্যর্থতার লগ সংরক্ষণ করা উচিত?",
        "optionsEn": [
          "Because the finished workbook should leave you with an inspectable research record, including the exact reasons a model did not survive testing",
          "So you can accidentally trade the failed rules again next month",
          "Because brokers require failed backtests for tax reporting",
          "To make your hard drive fuller"
        ],
        "optionsBn": [
          "কারণ ওয়ার্কবুকটি শেষ করার পর আপনার হাতে এমন একটি যাচাইযোগ্য রিসার্চ রেকর্ড থাকা উচিত, যেখানে কোনো মডেল কেন টিকে থাকতে পারল না তারও স্পষ্ট কারণ লেখা থাকবে",
          "যাতে পরের মাসে ভুল করে আবার সেই ব্যর্থ নিয়মেই ট্রেড করা যায়",
          "কারণ ট্যাক্স রিপোর্টিংয়ের জন্য ব্রোকাররা ব্যর্থ ব্যাকটেস্ট চায়",
          "হার্ডড্রাইভ ভরে রাখার জন্য"
        ],
        "correctIndex": 0,
        "explainEn": "Preserving archived versions and their failure modes prevents repeating dead ends and proves your research process is genuine.",
        "explainBn": "আর্কাইভ করা ভার্সন ও ব্যর্থতার কারণ সংরক্ষণ করলে ভবিষ্যতে একই ভুলের পুনরাবৃত্তি রোধ হয় এবং আপনার রিসার্চ প্রক্রিয়ার স্বচ্ছতা বজায় থাকে।"
      },
      {
        "qEn": "Why must forward paper-trading results be kept separate from historical Bar Replay backtest results?",
        "qBn": "ফরোয়ার্ড পেপার-ট্রেডিংয়ের ফলাফলকে কেন ঐতিহাসিক বার-রিপ্লে (Bar Replay) ব্যাকটেস্টের ফলাফল থেকে আলাদা রাখতে হবে?",
        "optionsEn": [
          "Because historical charts do not show candlesticks",
          "Because paper trading uses a different calendar year",
          "Because R-multiples cannot be calculated in paper trading",
          "Because historical replay and live-speed forward simulation have different look-ahead risks, pacing, and execution conditions"
        ],
        "optionsBn": [
          "কারণ ঐতিহাসিক চার্টে ক্যান্ডেলস্টিক দেখা যায় না",
          "কারণ পেপার ট্রেডিংয়ে ভিন্ন ক্যালেন্ডার বছর ব্যবহার করা হয়",
          "কারণ পেপার ট্রেডিংয়ে R-multiple হিসাব করা যায় না",
          "কারণ ঐতিহাসিক রিপ্লে এবং লাইভ-স্পিড ফরোয়ার্ড সিমুলেশনে লুক-অ্যাহেড ঝুঁকি, সময়ের গতি এবং এক্সিকিউশন পরিবেশ ভিন্ন থাকে"
        ],
        "correctIndex": 3,
        "explainEn": "Real-time forward simulation tests patience, live order placement, and zero look-ahead in ways historical bar replay cannot fully replicate.",
        "explainBn": "বাস্তব সময়ের ফরোয়ার্ড সিমুলেশনে ধৈর্য, লাইভ অর্ডার বসানো এবং ভবিষ্যৎ না জানার যে পরীক্ষা হয়, তা ঐতিহাসিক বার-রিপ্লেতে পুরোপুরি পাওয়া সম্ভব নয়।"
      },
      {
        "qEn": "When using Bar Replay for historical testing, what habit does Lesson 26’s practical note recommend?",
        "qBn": "ঐতিহাসিক টেস্টিংয়ের জন্য Bar Replay ব্যবহারের সময় লেসন ২৬-এর ব্যবহারিক নোটে কোন অভ্যাসটি গড়ে তুলতে বলা হয়েছে?",
        "optionsEn": [
          "Jump 50 candles ahead first to see where price goes, then rewind to place the entry",
          "Only replay days where you already know a huge trend happened",
          "Advance one candle at a time and record the exact moment your pivot or trigger becomes confirmable",
          "Keep results only inside the platform’s temporary memory without saving an external log"
        ],
        "optionsBn": [
          "প্রথমে ৫০টি ক্যান্ডেল সামনে এগিয়ে প্রাইস কোথায় গেছে তা দেখে নেওয়া এবং এরপর পেছনে ফিরে এন্ট্রি বসানো",
          "কেবল যে দিনগুলোতে বড় ট্রেন্ড হয়েছিল বলে আপনি আগে থেকেই জানেন সেই দিনগুলো রিপ্লে করা",
          "একবারে একটি করে ক্যান্ডেল সামনে এগোনো এবং ঠিক কোন মুহূর্তে আপনার পিভট বা ট্রিগারটি নিশ্চিত (confirmable) হচ্ছে তা রেকর্ড করা",
          "বাইরে কোনো লগ সেভ না করে কেবল প্ল্যাটফর্মের অস্থায়ী মেমোরিতেই ফলাফল রাখা"
        ],
        "correctIndex": 2,
        "explainEn": "Advancing one bar at a time and logging the exact confirmation candle prevents subtle look-ahead bias during manual replay.",
        "explainBn": "একবারে একটি করে ক্যান্ডেল এগিয়ে ঠিক কোন ক্যান্ডেলে কনফার্মেশন মিলছে তা লগ করলে ম্যানুয়াল রিপ্লের সময় সূক্ষ্ম লুক-অ্যাহেড বায়াস এড়ানো যায়।"
      },
      {
        "qEn": "What critical final reminder does Lesson 26 give under \"Watch for\"?",
        "qBn": "লেসন ২৬-এর \"Watch for\" অংশে কোন চূড়ান্ত ও গুরুত্বপূর্ণ সতর্কবার্তাটি দেওয়া হয়েছে?",
        "optionsEn": [
          "Neither finishing the 26 classes nor finding a high historical win rate justifies live leveraged trading",
          "Completing Lesson 26 guarantees instant profitability on leveraged futures accounts",
          "A high historical win rate eliminates the need for a daily stop condition",
          "Paper trading for four weeks guarantees zero drawdown in live markets"
        ],
        "optionsBn": [
          "২৬টি ক্লাস শেষ করা কিংবা ঐতিহাসিক ব্যাকটেস্টে উচ্চ উইন রেট পাওয়া—কোনোটিই লাইভ লিভারেজড ট্রেডিং শুরু করার যৌক্তিকতা প্রমাণ করে না",
          "লেসন ২৬ শেষ করলেই লিভারেজড ফিউচার্স অ্যাকাউন্টে তাৎক্ষণিক প্রফিট নিশ্চিত হয়",
          "ঐতিহাসিক উইন রেট বেশি হলে ডেইলি স্টপ লিমিটের কোনো প্রয়োজন থাকে না",
          "চার সপ্তাহ পেপার ট্রেডিং করলে লাইভ মার্কেটে জিরো ড্রডাউন নিশ্চিত হয়"
        ],
        "correctIndex": 0,
        "explainEn": "Course completion and historical backtest numbers do not remove the substantial financial risk of live leveraged trading.",
        "explainBn": "কোর্স সম্পন্ন করা বা ব্যাকটেস্টের ভালো পরিসংখ্যান লাইভ লিভারেজড ট্রেডিংয়ের বিশাল আর্থিক ঝুঁকিকে কখনোই দূর করে দেয় না।"
      }
    ]
  }
};
