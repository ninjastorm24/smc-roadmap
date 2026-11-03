export const WEEK_4A_QUIZZES = {
  '07-advanced-order-block': {
    lessonId: 7,
    slug: '07-advanced-order-block',
    masteryPromptEn:
      'How would you distinguish an OB from any arbitrary last bearish/bullish candle?',
    masteryPromptBn:
      'যেকোনো সাধারণ শেষ বুলিশ/বেয়ারিশ ক্যান্ডেল থেকে একটি প্রকৃত Order Block (OB)-কে আপনি কীভাবে আলাদা করবেন?',
    completionItems: [
      {
        id: 'read-notes',
        en: 'Studied the primary resource and wrote notes in my own words',
        bn: 'মূল রিসোর্সটি পড়েছি এবং নিজের ভাষায় নোট লিখেছি',
      },
      {
        id: 'lab-1',
        en: 'Collected 20 OBs: 10 that reacted and 10 that failed or were never revisited',
        bn: '২০টি OB সংগ্রহ করেছি: ১০টি যেগুলো রিঅ্যাক্ট করেছে এবং ১০টি যেগুলো ব্যর্থ হয়েছে বা কখনোই রিভিজিট হয়নি',
      },
      {
        id: 'lab-2',
        en: 'Marked exact zone boundaries and one objective invalidation per example',
        bn: 'প্রতিটি উদাহরণের জন্য সুনির্দিষ্ট জোন বাউন্ডারি এবং একটি অবজেক্টিভ ইনভ্যালিডেশন চিহ্নিত করেছি',
      },
      {
        id: 'lab-3',
        en: 'Compared the same OB on 1H versus 5m before drawing conclusions',
        bn: 'সিদ্ধান্তে পৌঁছানোর আগে একই OB ১-ঘণ্টা (1H) বনাম ৫-মিনিট (5m) চার্টে তুলনা করেছি',
      },
      {
        id: 'mastery-quiz',
        en: 'Answered the mastery check without notes and passed the 15-question quiz',
        bn: 'নোট ছাড়াই মাস্টারি চেকের উত্তর দিয়েছি এবং ১৫-প্রশ্নের কুইজে উত্তীর্ণ হয়েছি',
      },
    ],
    questions: [
      {
        qEn: 'What is the primary goal of Lesson 07 regarding Advanced Order Blocks?',
        qBn: 'Advanced Order Block সংক্রান্ত লেসন ০৭-এর প্রধান লক্ষ্য কী?',
        optionsEn: [
          'To memorize secret candle patterns that never fail',
          'To build reproducible OB selection and grading rules, including failed candidates',
          'To remove all stop-losses when trading order blocks',
          'To replace market structure completely with midpoint lines',
        ],
        optionsBn: [
          'কখনোই ব্যর্থ হয় না এমন গোপন ক্যান্ডেল প্যাটার্ন মুখস্থ করা',
          'ব্যর্থ ক্যান্ডিডেটসহ পুনরায় প্রয়োগযোগ্য OB নির্বাচন এবং গ্রেডিং নিয়ম তৈরি করা',
          'অর্ডার ব্লক ট্রেড করার সময় সব স্টপ-লস বাদ দেওয়া',
          'মার্কেট স্ট্রাকচারকে সম্পূর্ণভাবে মিডপয়েন্ট লাইন দিয়ে প্রতিস্থাপন করা',
        ],
        correctIndex: 1,
        explainEn:
          'Lesson 07 focuses on building reproducible OB selection and grading rules while accounting for failed and unrevisited candidates.',
        explainBn:
          'লেসন ০৭-এর মূল ফোকাস হলো ব্যর্থ এবং আনরিভিজিটেড ক্যান্ডিডেটগুলোকে হিসাবে রেখে পুনরায় প্রয়োগযোগ্য OB নির্বাচন ও গ্রেডিং নিয়ম তৈরি করা।',
      },
      {
        qEn: 'What distinguishes a valid Order Block candidate from any arbitrary opposing candle before a move?',
        qBn: 'যেকোনো সাধারণ বিপরীতমুখী ক্যান্ডেল থেকে একটি বৈধ Order Block ক্যান্ডিডেটকে কী আলাদা করে?',
        optionsEn: [
          'Whether the subsequent reaction eventually makes money in hindsight',
          'Meaningful displacement or structural confirmation within defined structural context',
          'The color theme of the charting platform',
          'Whether the candle occurs exactly at midnight',
        ],
        optionsBn: [
          'পরবর্তী রিঅ্যাকশনটি শেষ পর্যন্ত লাভজনক হয় কি না তা পরে দেখে বিচার করা',
          'নির্ধারিত স্ট্রাকচারাল প্রেক্ষাপটে অর্থবহ ডিসপ্লেসমেন্ট বা স্ট্রাকচারাল কনফার্মেশন',
          'চার্টিং প্ল্যাটফর্মের কালার থিম',
          'ক্যান্ডেলটি ঠিক মধ্যরাতে তৈরি হয়েছে কি না',
        ],
        correctIndex: 1,
        explainEn:
          'An OB candidate qualifies through pre-defined formation criteria such as meaningful displacement and structural confirmation, not hindsight profit.',
        explainBn:
          'একটি OB ক্যান্ডিডেট পূর্বনির্ধারিত গঠন শর্ত যেমন অর্থবহ ডিসপ্লেসমেন্ট এবং স্ট্রাকচারাল কনফার্মেশনের মাধ্যমে যোগ্য হয়, হাইন্ডসাইট মুনাফার ভিত্তিতে নয়।',
      },
      {
        qEn: 'In the companion blog hypothetical bullish example (low 98, open 101, close 99, high 102), what are the full-range and body-only zones?',
        qBn: 'কম্প্যানিয়ন ব্লগের কাল্পনিক বুলিশ উদাহরণে (লো ৯৮, ওপেন ১০১, ক্লোজ ৯৯, হাই ১০২), ফুল-রেঞ্জ এবং বডি-অনলি জোন কোনগুলো?',
        optionsEn: [
          'Full-range: 99–101; Body-only: 98–102',
          'Full-range: 98–102; Body-only: 99–101',
          'Full-range: 98–99; Body-only: 101–102',
          'Full-range: 100–102; Body-only: 98–100',
        ],
        optionsBn: [
          'ফুল-রেঞ্জ: ৯৯–১০১; বডি-অনলি: ৯৮–১০২',
          'ফুল-রেঞ্জ: ৯৮–১০২; বডি-অনলি: ৯৯–১০১',
          'ফুল-রেঞ্জ: ৯৮–৯৯; বডি-অনলি: ১০১–১০২',
          'ফুল-রেঞ্জ: ১০০–১০২; বডি-অনলি: ৯৮–১০০',
        ],
        correctIndex: 1,
        explainEn:
          'The full candle spans from the low (98) to the high (102), while the bearish body spans between the close (99) and open (101).',
        explainBn:
          'পুরো ক্যান্ডেলটি লো (৯৮) থেকে হাই (১০২) পর্যন্ত বিস্তৃত, আর বেয়ারিশ বডিটি ক্লোজ (৯৯) এবং ওপেন (১০১)-এর মধ্যে অবস্থিত।',
      },
      {
        qEn: 'What rule must you follow when comparing full-wick, full-body, and midpoint (mean threshold) OB boundary refinements?',
        qBn: 'ফুল-উইক, ফুল-বডি এবং মিডপয়েন্ট (mean threshold) OB বাউন্ডারি রিফাইনমেন্ট তুলনা করার সময় কোন নিয়মটি অবশ্যই মেনে চলতে হবে?',
        optionsEn: [
          'Switch to whichever boundary makes each individual trade win',
          'Never change the boundary method midway through a backtest',
          'Always use the smallest possible boundary on higher timeframes only',
          'Ignore boundaries and enter anywhere near the candle',
        ],
        optionsBn: [
          'প্রতিটি ট্রেডকে জেতানোর জন্য যে বাউন্ডারি সুবিধা হয় সেটিতেই পরিবর্তন করা',
          'একটি ব্যাকটেস্টের মাঝপথে কখনোই বাউন্ডারি নির্ধারণের পদ্ধতি পরিবর্তন না করা',
          'শুধুমাত্র হায়ার টাইমফ্রেমে সর্বদা সবচেয়ে ছোট বাউন্ডারি ব্যবহার করা',
          'বাউন্ডারি উপেক্ষা করে ক্যান্ডেলের কাছাকাছি যেকোনো স্থানে এন্ট্রি নেওয়া',
        ],
        correctIndex: 1,
        explainEn:
          'Changing boundary definitions mid-sample corrupts the backtest because each boundary convention represents a distinct test model.',
        explainBn:
          'ব্যাকটেস্টের মাঝপথে বাউন্ডারির সংজ্ঞা পরিবর্তন করলে ফলাফল বিকৃত হয়, কারণ প্রতিটি বাউন্ডারি পদ্ধতি একটি ভিন্ন টেস্ট মডেল নির্দেশ করে।',
      },
      {
        qEn: 'When should an Order Block candidate be classified as a qualified OB in your research log?',
        qBn: 'আপনার রিসার্চ লগে একটি Order Block ক্যান্ডিডেটকে কখন যোগ্য (qualified) OB হিসেবে শ্রেণীবদ্ধ করা উচিত?',
        optionsEn: [
          'Only after price taps the zone and rallies 3R in profit',
          'When its formation conditions are satisfied, before seeing whether a later reaction succeeds',
          'Only after three separate retests hold the level',
          'At the end of the month when reviewing winning trades only',
        ],
        optionsBn: [
          'শুধুমাত্র প্রাইস জোনটি স্পর্শ করে 3R মুনাফায় যাওয়ার পরে',
          'যখন এর গঠনের শর্তগুলো পূরণ হয়, পরবর্তী রিঅ্যাকশন সফল হয় কি না তা দেখার আগেই',
          'শুধুমাত্র তিনটি পৃথক রিটেস্ট লেভেলটিকে ধরে রাখার পরে',
          'মাসের শেষে শুধুমাত্র জয়ী ট্রেডগুলো রিভিউ করার সময়',
        ],
        correctIndex: 1,
        explainEn:
          'Qualification must depend strictly on formation rules at confirmation time, separating candidate selection from subsequent price behavior.',
        explainBn:
          'কনফার্মেশনের সময়ে শুধুমাত্র গঠনের নিয়মের ওপর ভিত্তি করে যোগ্যতা নির্ধারণ করতে হবে, যাতে ক্যান্ডিডেট নির্বাচন পরবর্তী প্রাইস আচরণ থেকে আলাদা থাকে।',
      },
      {
        qEn: 'How should an qualified OB that is never revisited by price be treated in your dataset?',
        qBn: 'একটি যোগ্য OB যা প্রাইস কখনোই রিভিজিট করেনি, আপনার ডেটাসেটে সেটিকে কীভাবে গণ্য করা উচিত?',
        optionsEn: [
          'Delete it so your charts look cleaner',
          'Count it as a winning trade since it did not hit a stop-loss',
          'Record it as a real observation (no revisit) in the formation sample even though it created no fill',
          'Redraw the box wider until it touches price',
        ],
        optionsBn: [
          'চার্ট পরিষ্কার রাখার জন্য এটি মুছে ফেলা উচিত',
          'স্টপ-লস হিট করেনি বলে এটিকে জয়ী ট্রেড হিসেবে গণনা করা উচিত',
          'কোনো ফিল তৈরি না করলেও ফরমেশন স্যাম্পলে এটিকে একটি প্রকৃত পর্যবেক্ষণ (no revisit) হিসেবে রেকর্ড করা উচিত',
          'প্রাইস স্পর্শ না করা পর্যন্ত বক্সটি আরও চওড়া করে আঁকা উচিত',
        ],
        correctIndex: 2,
        explainEn:
          'Unrevisited and failed zones are both part of the formation sample and must be recorded independently of trade fills.',
        explainBn:
          'আনরিভিজিটেড এবং ব্যর্থ জোন উভয়ই ফরমেশন স্যাম্পলের অংশ এবং ট্রেড ফিল নিরপেক্ষভাবে সেগুলো রেকর্ড করতে হবে।',
      },
      {
        qEn: 'Why must you explicitly define what counts as a "new visit" to an Order Block?',
        qBn: 'একটি Order Block-এ "নতুন ভিজিট" (new visit) বলতে কী বোঝায় তা স্পষ্টভাবে সংজ্ঞায়িত করা কেন জরুরি?',
        optionsEn: [
          'Because multiple candles inside one continuous interaction may not be separate retests, preventing "freshness" from becoming a flexible excuse',
          'Because brokers require a visit count before placing limit orders',
          'Because an OB is only valid on its fifth visit',
          'Because timeframe candles never overlap inside a zone',
        ],
        optionsBn: [
          'কারণ একটি একক ধারাবাহিক ইন্টারঅ্যাকশনের ভেতরের একাধিক ক্যান্ডেল আলাদা রিটেস্ট নাও হতে পারে; এটি "ফ্রেশনেস"-কে ইচ্ছেমতো অজুহাত হওয়া থেকে রক্ষা করে',
          'কারণ লিমিট অর্ডার প্লেস করার আগে ব্রোকারদের ভিজিট কাউন্ট প্রয়োজন হয়',
          'কারণ একটি OB শুধুমাত্র তার পঞ্চম ভিজিটে বৈধ হয়',
          'কারণ টাইমফ্রেম ক্যান্ডেলগুলো কখনোই জোনের ভেতরে ওভারল্যাপ করে না',
        ],
        correctIndex: 0,
        explainEn:
          'Without an objective definition separating one continuous interaction from distinct visits, "freshness" becomes a subjective hindsight label.',
        explainBn:
          'একটি ধারাবাহিক ইন্টারঅ্যাকশন থেকে আলাদা ভিজিটকে পৃথক করার সুনির্দিষ্ট সংজ্ঞা ছাড়া "ফ্রেশনেস" একটি সাবজেক্টিভ হাইন্ডসাইট লেবেলে পরিণত হয়।',
      },
      {
        qEn: 'Which four contextual factors does Lesson 07 specify when grading Order Block context?',
        qBn: 'Order Block-এর প্রেক্ষাপট (context) গ্রেডিং করার সময় লেসন ০৭ কোন চারটি উপাদান উল্লেখ করে?',
        optionsEn: [
          'RSI divergence, MACD crossover, Bollinger Band width, and volume profile',
          'External bias, liquidity event, position in premium/discount, and proximity to opposing liquidity',
          'Day of the week, broker spread, leverage ratio, and account balance',
          'Candle body color, chart zoom level, indicator count, and news sentiment',
        ],
        optionsBn: [
          'RSI ডাইভারজেন্স, MACD ক্রসওভার, বলিঞ্জার ব্যান্ড প্রস্থ এবং ভলিউম প্রোফাইল',
          'এক্সটার্নাল বায়াস, লিকুইডিটি ইভেন্ট, প্রিমিয়াম/ডিসকাউন্টে অবস্থান এবং বিপরীত লিকুইডিটির নৈকট্য',
          'সপ্তাহের দিন, ব্রোকার স্প্রেড, লিভারেজ অনুপাত এবং অ্যাকাউন্ট ব্যালেন্স',
          'ক্যান্ডেল বডির রঙ, চার্ট জুম লেভেল, ইন্ডিকেটর সংখ্যা এবং নিউজ সেন্টিমেন্ট',
        ],
        correctIndex: 1,
        explainEn:
          'Study step 4 grades OB context by external bias, liquidity event, premium/discount position, and proximity to opposing liquidity.',
        explainBn:
          'স্টাডি স্টেপ ৪ অনুযায়ী এক্সটার্নাল বায়াস, লিকুইডিটি ইভেন্ট, প্রিমিয়াম/ডিসকাউন্টে অবস্থান এবং বিপরীত লিকুইডিটির নৈকট্য দিয়ে OB প্রেক্ষাপট গ্রেড করা হয়।',
      },
      {
        qEn: 'How does Lesson 07 structure the Order Block quality rubric?',
        qBn: 'লেসন ০৭ কীভাবে Order Block কোয়ালিটি রুব্রিক (rubric) সাজানোর নির্দেশ দেয়?',
        optionsEn: [
          'One single composite score from 1 to 100 with no mandatory rules',
          'Three mandatory factors and three optional factors tracked to see which actually improve results',
          'Ten optional factors where any two are enough to trade',
          'Only visual intuition without written criteria',
        ],
        optionsBn: [
          'কোনো বাধ্যতামূলক নিয়ম ছাড়াই ১ থেকে ১০০ পর্যন্ত একটি একক স্কোর',
          'তিনটি বাধ্যতামূলক ফ্যাক্টর এবং তিনটি ঐচ্ছিক ফ্যাক্টর আলাদাভাবে ট্র্যাক করা যাতে বোঝা যায় কোনটি আসলেই ফলাফল উন্নত করে',
          'দশটি ঐচ্ছিক ফ্যাক্টর যার যেকোনো দুটি থাকলেই ট্রেড নেওয়া যায়',
          'লিখিত মানদণ্ড ছাড়া শুধুমাত্র ভিজ্যুয়াল অনুমান',
        ],
        correctIndex: 1,
        explainEn:
          'Separating three mandatory factors from three optional factors prevents hiding a weak candidate behind a total score and allows controlled testing.',
        explainBn:
          'তিনটি বাধ্যতামূলক ফ্যাক্টর থেকে তিনটি ঐচ্ছিক ফ্যাক্টর আলাদা রাখলে দুর্বল ক্যান্ডিডেট মোট স্কোরের আড়ালে লুকিয়ে থাকে না এবং নিয়ন্ত্রিত পরীক্ষা করা যায়।',
      },
      {
        qEn: 'Why should optional filters (such as premium/discount or a prior sweep) be kept in separate columns from mandatory prerequisites?',
        qBn: 'ঐচ্ছিক ফিল্টারগুলোকে (যেমন প্রিমিয়াম/ডিসকাউন্ট বা পূর্ববর্তী সুইপ) বাধ্যতামূলক শর্ত থেকে আলাদা কলামে রাখা উচিত কেন?',
        optionsEn: [
          'So you can compare a baseline against one optional filter at a time and see what actually changed the sample',
          'Because spreadsheets cannot calculate more than three columns',
          'To make sure every single chart setup gets rejected',
          'So you can change mandatory rules after seeing the trade outcome',
        ],
        optionsBn: [
          'যাতে আপনি বেসলাইনের সাথে একটি করে ঐচ্ছিক ফিল্টার তুলনা করতে পারেন এবং কোন পরিবর্তনটি স্যাম্পলে প্রভাব ফেলেছে তা বুঝতে পারেন',
          'কারণ স্প্রেডশিট তিনটির বেশি কলাম গণনা করতে পারে না',
          'যাতে প্রতিটি চার্ট সেটআপ বাতিল হয়ে যায় তা নিশ্চিত করা যায়',
          'যাতে ট্রেডের ফলাফল দেখার পরে বাধ্যতামূলক নিয়মগুলো পরিবর্তন করা যায়',
        ],
        correctIndex: 0,
        explainEn:
          'Adding every favorable condition at once hides which specific filter actually improved or degraded the baseline sample.',
        explainBn:
          'সব অনুকূল শর্ত একসাথে যোগ করলে কোন নির্দিষ্ট ফিল্টারটি বেসলাইন স্যাম্পলকে উন্নত বা খারাপ করেছে তা আলাদা করে বোঝা যায় না।',
      },
      {
        qEn: 'According to the companion article, what are the three core mandatory questions suggested for a baseline OB rubric?',
        qBn: 'কম্প্যানিয়ন আর্টিকেল অনুযায়ী, একটি বেসলাইন OB রুব্রিকের জন্য প্রস্তাবিত তিনটি মূল বাধ্যতামূলক প্রশ্ন কী কী?',
        optionsEn: [
          'Did the structural prerequisite occur, are boundaries reproducible, and is invalidation clear?',
          'Is the candle large, is it Friday, and is the spread zero?',
          'Did Twitter confirm the bias, is the wick short, and did price already bounce?',
          'Are three timeframes aligned, is RSI oversold, and is volume high?',
        ],
        optionsBn: [
          'স্ট্রাকচারাল পূর্বশর্তটি কি ঘটেছে, বাউন্ডারিগুলো কি পুনরায় প্রয়োগযোগ্য এবং ইনভ্যালিডেশন কি স্পষ্ট?',
          'ক্যান্ডেলটি কি বড়, আজ কি শুক্রবার এবং স্প্রেড কি শূন্য?',
          'টুইটার কি বায়াস কনফার্ম করেছে, উইক কি ছোট এবং প্রাইস কি ইতোমধ্যে বাউন্স করেছে?',
          'তিনটি টাইমফ্রেম কি অ্যালাইনড, RSI কি ওভারসোল্ড এবং ভলিউম কি বেশি?',
        ],
        correctIndex: 0,
        explainEn:
          'A solid baseline checks whether the structural prerequisite occurred, boundaries are reproducible, and the invalidation level is clear.',
        explainBn:
          'একটি শক্তিশালী বেসলাইন পরীক্ষা করে যে স্ট্রাকচারাল পূর্বশর্ত ঘটেছে কি না, বাউন্ডারিগুলো পুনরায় প্রয়োগযোগ্য কি না এবং ইনভ্যালিডেশন লেভেল স্পষ্ট কি না।',
      },
      {
        qEn: 'What does the Lesson 07 chart lab require you to collect and compare?',
        qBn: 'লেসন ০৭-এর চার্ট ল্যাবে আপনাকে কী সংগ্রহ এবং তুলনা করতে বলা হয়েছে?',
        optionsEn: [
          'Only 5 winning OBs on the daily chart',
          '20 OBs (10 that reacted and 10 that failed or were never revisited), with exact boundaries, objective invalidation, and a 1H vs 5m comparison',
          '50 random candles without any structural context',
          '10 indicator crossovers on a 1-minute chart',
        ],
        optionsBn: [
          'ডেইলি চার্টে শুধুমাত্র ৫টি জয়ী OB',
          '২০টি OB (১০টি যা রিঅ্যাক্ট করেছে এবং ১০টি যা ব্যর্থ হয়েছে বা কখনো রিভিজিট হয়নি), সুনির্দিষ্ট বাউন্ডারি, অবজেক্টিভ ইনভ্যালিডেশন এবং 1H বনাম 5m তুলনাসহ',
          'কোনো স্ট্রাকচারাল প্রেক্ষাপট ছাড়াই ৫০টি এলোমেলো ক্যান্ডেল',
          '১-মিনিটের চার্টে ১০টি ইন্ডিকেটর ক্রসওভার',
        ],
        correctIndex: 1,
        explainEn:
          'The chart lab requires 20 OBs balanced between reactions and failures/non-revisits, with exact boundaries, invalidations, and 1H vs 5m comparisons.',
        explainBn:
          'চার্ট ল্যাবে ১০টি সফল রিঅ্যাকশন এবং ১০টি ব্যর্থ/আনরিভিজিটেড OB সহ মোট ২০টি উদাহরণ, সুনির্দিষ্ট বাউন্ডারি, ইনভ্যালিডেশন এবং 1H বনাম 5m তুলনা প্রয়োজন।',
      },
      {
        qEn: 'When observing how price behaves upon revisiting a qualified OB, which outcomes should you distinguish?',
        qBn: 'একটি যোগ্য OB-তে প্রাইস রিভিজিট করার পর কীভাবে আচরণ করে তা পর্যবেক্ষণের সময় কোন ফলাফলগুলো আলাদা করা উচিত?',
        optionsEn: [
          'Clean rejection, partial mitigation, immediate invalidation, or no revisit at all',
          'Only full target hit versus broker slippage',
          'Bullish engulfing only versus doji candle only',
          'Morning session versus afternoon session only',
        ],
        optionsBn: [
          'ক্লিন রিজেকশন, আংশিক মিটিগেশন (partial mitigation), তাৎক্ষণিক ইনভ্যালিডেশন, অথবা আদৌ কোনো রিভিজিট না হওয়া',
          'শুধুমাত্র পূর্ণ টার্গেট হিট বনাম ব্রোকার স্লিপেজ',
          'শুধুমাত্র বুলিশ এনগালফিং বনাম শুধুমাত্র দোজি ক্যান্ডেল',
          'শুধুমাত্র সকালের সেশন বনাম বিকেলের সেশন',
        ],
        correctIndex: 0,
        explainEn:
          'Study step 5 specifies observing whether a zone gets a clean rejection, partial mitigation, immediate invalidation, or no revisit at all.',
        explainBn:
          'স্টাডি স্টেপ ৫ অনুযায়ী জোনটিতে ক্লিন রিজেকশন, আংশিক মিটিগেশন, তাৎক্ষণিক ইনভ্যালিডেশন নাকি কোনো রিভিজিটই হয়নি তা পর্যবেক্ষণ করতে হয়।',
      },
      {
        qEn: 'What should you record for every rejected OB candidate during your chart review?',
        qBn: 'চার্ট রিভিউ করার সময় প্রতিটি বাতিলকৃত (rejected) OB ক্যান্ডিডেটের জন্য আপনার কী রেকর্ড করা উচিত?',
        optionsEn: [
          'Nothing, rejected candidates should never be logged',
          'The specific condition that failed, and check later that you still choose the same candle and edges',
          'Only the profit you would have made if you broke your rules',
          'A new rule that makes the rejected candidate valid',
        ],
        optionsBn: [
          'কিছুই না, বাতিল ক্যান্ডিডেট কখনোই লগ করা উচিত নয়',
          'যে নির্দিষ্ট শর্তটি পূরণ হয়নি তা রেকর্ড করা, এবং পরে যাচাই করা যে আপনি একই ক্যান্ডেল ও বাউন্ডারি নির্বাচন করছেন কি না',
          'নিয়ম ভাঙলে কত লাভ হতো শুধুমাত্র সেই হিসাব',
          'এমন একটি নতুন নিয়ম যা বাতিল ক্যান্ডিডেটটিকে বৈধ করে তোলে',
        ],
        correctIndex: 1,
        explainEn:
          'Logging the exact failed condition for rejected candidates and re-checking your candle/edge selection later ensures rule reproducibility.',
        explainBn:
          'বাতিল ক্যান্ডিডেটের জন্য ঠিক কোন শর্তটি ব্যর্থ হয়েছে তা লিখে রাখা এবং পরে একই ক্যান্ডেল ও বাউন্ডারি নির্বাচন করা হচ্ছে কি না তা যাচাই করা নিয়মের ধারাবাহিকতা নিশ্চিত করে।',
      },
      {
        qEn: 'What counts as genuine research progress in the Advanced Order Block worksheet even if your first entry model loses money?',
        qBn: 'আপনার প্রথম এন্ট্রি মডেলটি যদি অর্থ হারায়ও, তবুও Advanced Order Block ওয়ার্কশিটে কোন বিষয়টিকে প্রকৃত রিসার্চ অগ্রগতি হিসেবে গণ্য করা হয়?',
        optionsEn: [
          'Adding five more indicators until the backtest shows a 100% win rate',
          'Being able to point to a candidate, its confirmation time, boundaries, permitted revisit, and failure rule without seeing the future',
          'Renaming every losing Order Block into a liquidity sweep after the fact',
          'Only testing bull markets and ignoring bear markets',
        ],
        optionsBn: [
          'ব্যাকটেস্টে ১০০% উইন রেট না আসা পর্যন্ত আরও পাঁচটি ইন্ডিকেটর যোগ করা',
          'ভবিষ্যৎ চার্ট না দেখেই একটি ক্যান্ডিডেট, তার কনফার্মেশন সময়, বাউন্ডারি, অনুমোদিত রিভিজিট এবং ব্যর্থতার নিয়ম নির্দিষ্ট করতে পারা',
          'প্রতিটি লস করা Order Block-কে ঘটনার পরে লিকুইডিটি সুইপ হিসেবে নতুন নাম দেওয়া',
          'শুধুমাত্র বুল মার্কেট টেস্ট করা এবং বেয়ার মার্কেট উপেক্ষা করা',
        ],
        correctIndex: 1,
        explainEn:
          'Defining candidate selection, confirmation time, boundaries, revisit rules, and invalidation without hindsight is the core benchmark of research quality.',
        explainBn:
          'ভবিষ্যৎ না দেখেই ক্যান্ডিডেট নির্বাচন, কনফার্মেশন সময়, বাউন্ডারি, রিভিজিট নিয়ম এবং ইনভ্যালিডেশন নির্ধারণ করতে পারাই রিসার্চের মানের মূল মাপকাঠি।',
      },
    ],
  },
  '08-rejection-breaker-unicorn': {
    lessonId: 8,
    slug: '08-rejection-breaker-unicorn',
    masteryPromptEn:
      'What must happen before an ordinary OB becomes a breaker in your rules?',
    masteryPromptBn:
      'আপনার নিয়ম অনুযায়ী একটি সাধারণ Order Block (OB) ব্রেকার ব্লকে (Breaker Block) পরিণত হওয়ার আগে কী ঘটতে হবে?',
    completionItems: [
      {
        id: 'read-notes',
        en: 'Studied the primary resource and wrote notes in my own words',
        bn: 'মূল রিসোর্সটি পড়েছি এবং নিজের ভাষায় নোট লিখেছি',
      },
      {
        id: 'lab-1',
        en: 'Drew 10 breaker setups, 5 wick rejection zones, and 10 breaker/FVG overlaps',
        bn: '১০টি ব্রেকার সেটআপ, ৫টি উইক রিজেকশন জোন এবং ১০টি ব্রেকার/FVG ওভারল্যাপ চিহ্নিত করেছি',
      },
      {
        id: 'lab-2',
        en: 'Identified the original OB, the failure/violation, and the revisit for each example',
        bn: 'প্রতিটি উদাহরণের জন্য মূল OB, সেটির ব্যর্থতা/ভাঙন এবং পরবর্তী রিভিজিট চিহ্নিত করেছি',
      },
      {
        id: 'lab-3',
        en: 'Explained 5 cases where a claimed Unicorn overlap never produced a controlled entry',
        bn: 'এমন ৫টি কেস ব্যাখ্যা করেছি যেখানে কথিত Unicorn ওভারল্যাপ কখনোই নিয়ন্ত্রিত এন্ট্রি দেয়নি',
      },
      {
        id: 'mastery-quiz',
        en: 'Answered the mastery check without notes and passed the 15-question quiz',
        bn: 'নোট ছাড়াই মাস্টারি চেকের উত্তর দিয়েছি এবং ১৫-প্রশ্নের কুইজে উত্তীর্ণ হয়েছি',
      },
    ],
    questions: [
      {
        qEn: 'What is the main learning outcome of Lesson 08?',
        qBn: 'লেসন ০৮-এর প্রধান শিক্ষণীয় ফলাফল (learning outcome) কী?',
        optionsEn: [
          'To treat all rectangles in the same price area as identical setups',
          'To differentiate a wick-based rejection area, a failed OB acting as a breaker, and a breaker-FVG overlap',
          'To trade every long candle wick without waiting for structure',
          'To replace all Order Blocks with Fibonacci retracements',
        ],
        optionsBn: [
          'একই প্রাইস এরিয়ার সব আয়তক্ষেত্রকে একই সেটআপ হিসেবে বিবেচনা করা',
          'উইক-ভিত্তিক রিজেকশন এরিয়া, ব্রেকার হিসেবে কাজ করা ব্যর্থ OB এবং ব্রেকার-FVG ওভারল্যাপের মধ্যে পার্থক্য করতে পারা',
          'স্ট্রাকচারের অপেক্ষা না করেই প্রতিটি লম্বা ক্যান্ডেল উইকে ট্রেড নেওয়া',
          'সব Order Block-কে ফিবোনাচ্চি রিট্রেসমেন্ট দিয়ে প্রতিস্থাপন করা',
        ],
        correctIndex: 1,
        explainEn:
          'Lesson 08 teaches how to distinguish three distinct formation sequences: wick-based rejection blocks, breaker blocks, and Unicorn (breaker-FVG) overlaps.',
        explainBn:
          'লেসন ০৮ শেখায় কীভাবে তিনটি ভিন্ন গঠন প্রক্রিয়া আলাদা করতে হয়: উইক-ভিত্তিক রিজেকশন ব্লক, ব্রেকার ব্লক এবং ইউনিকর্ন (ব্রেকার-FVG) ওভারল্যাপ।',
      },
      {
        qEn: 'How is a Rejection Block characterized in the workbook and companion article?',
        qBn: 'ওয়ার্কবুক এবং কম্প্যানিয়ন আর্টিকেলে Rejection Block-কে কীভাবে বর্ণনা করা হয়েছে?',
        optionsEn: [
          'A gap between three consecutive candle bodies during a news release',
          'A wick-centered candidate zone formed after rejection from a price extreme, whose exact boundaries must be defined',
          'Any candle that has zero upper or lower wicks',
          'A failed Fair Value Gap in the middle of a consolidation range',
        ],
        optionsBn: [
          'নিউজ রিলিজের সময় পরপর তিনটি ক্যান্ডেল বডির মাঝখানের গ্যাপ',
          'প্রাইস এক্সট্রিম থেকে রিজেকশনের পর গঠিত একটি উইক-কেন্দ্রিক ক্যান্ডিডেট জোন, যার সুনির্দিষ্ট বাউন্ডারি সংজ্ঞায়িত করতে হয়',
          'যেকোনো ক্যান্ডেল যার কোনো আপার বা লোয়ার উইক নেই',
          'কনসলিডেশন রেঞ্জের মাঝখানে একটি ব্যর্থ Fair Value Gap',
        ],
        correctIndex: 1,
        explainEn:
          'A rejection block emphasizes a wick-centered area at a price extreme, and because naming and boundaries vary across educators, you must record your exact convention.',
        explainBn:
          'রিজেকশন ব্লক প্রাইস এক্সট্রিমে উইক-কেন্দ্রিক এরিয়াকে গুরুত্ব দেয়, এবং প্রশিক্ষকভেদে এর নাম ও বাউন্ডারি ভিন্ন হওয়ায় নিজের সুনির্দিষ্ট নিয়ম লিখে রাখতে হয়।',
      },
      {
        qEn: 'In the hypothetical rejection-wick example where a candle has a high of 110 and a body top of 106, what is the upper-wick zone and rule?',
        qBn: 'কাল্পনিক রিজেকশন-উইক উদাহরণে যেখানে ক্যান্ডেলের হাই ১১০ এবং বডি টপ ১০৬, সেখানে আপার-উইক জোন এবং নিয়মটি কী?',
        optionsEn: [
          'The zone is 106–110, and a later test cannot quietly shorten the zone to exclude a losing touch',
          'The zone is 100–106, and you can resize it after entry',
          'The zone is 110–114 above the wick high',
          'The zone is only the single price point at 108',
        ],
        optionsBn: [
          'জোনটি হলো ১০৬–১১০, এবং পরবর্তী টেস্টে লস এড়ানোর জন্য নীরবে জোনটি ছোট করা যাবে না',
          'জোনটি হলো ১০০–১০৬, এবং এন্ট্রির পরে এটি রিসাইজ করা যাবে',
          'জোনটি হলো উইক হাইয়ের ওপরে ১১০–১১৪',
          'জোনটি শুধুমাত্র ১০৮ প্রাইস পয়েন্টে সীমাবদ্ধ',
        ],
        correctIndex: 0,
        explainEn:
          'The upper wick spans from the body top (106) to the high (110), and boundaries must remain fixed rather than adjusted in hindsight to avoid losses.',
        explainBn:
          'আপার উইকটি বডি টপ (১০৬) থেকে হাই (১১০) পর্যন্ত বিস্তৃত, এবং লস এড়াতে পরে বাউন্ডারি পরিবর্তন না করে তা স্থির রাখতে হবে।',
      },
      {
        qEn: 'What does a long wick at a price extreme directly tell you on a price chart?',
        qBn: 'প্রাইস এক্সট্রিমে একটি লম্বা উইক প্রাইস চার্টে আপনাকে সরাসরি কী জানায়?',
        optionsEn: [
          'The exact identity of the institutional bank placing orders and a guaranteed reversal',
          'Only that price traded beyond an earlier reference and closed elsewhere in the candle’s range',
          'That the trend will continue for at least 500 pips without pullbacks',
          'That no retail traders were active during that candle',
        ],
        optionsBn: [
          'অর্ডার প্রদানকারী প্রাতিষ্ঠানিক ব্যাংকের সঠিক পরিচয় এবং একটি নিশ্চিত রিভার্সাল',
          'শুধুমাত্র এই যে প্রাইস পূর্ববর্তী কোনো রেফারেন্সের বাইরে ট্রেড করেছে এবং ক্যান্ডেলের রেঞ্জের অন্য কোথাও ক্লোজ হয়েছে',
          'ট্রেন্ডটি কোনো পুলব্যাক ছাড়াই অন্তত ৫০০ পিপ চলতে থাকবে',
          'ওই ক্যান্ডেল চলাকালীন কোনো রিটেইল ট্রেডার সক্রিয় ছিল না',
        ],
        correctIndex: 1,
        explainEn:
          'A long wick is an objective price observation (trading beyond a reference and closing away); it does not by itself prove participant identity or guarantee a reversal.',
        explainBn:
          'লম্বা উইক হলো প্রাইসের একটি বস্তুনিষ্ঠ পর্যবেক্ষণ (রেফারেন্সের বাইরে ট্রেড করে দূরে ক্লোজ হওয়া); এটি নিজে থেকে অংশগ্রহণকারীর পরিচয় বা নিশ্চিত রিভার্সাল প্রমাণ করে না।',
      },
      {
        qEn: 'What sequence of events must occur for an ordinary Order Block to become a Breaker Block candidate?',
        qBn: 'একটি সাধারণ Order Block ব্রেকার ব্লক (Breaker Block) ক্যান্ডিডেটে পরিণত হওয়ার জন্য কোন ঘটনার ক্রমটি ঘটতে হবে?',
        optionsEn: [
          'A previously qualified OB must be violated with confirming structural shift, and then considered when price revisits from the other side',
          'An OB must hold three times in the same direction without ever being broken',
          'Any random candle in the middle of a range must be crossed by a moving average',
          'Price must gap over a weekend without touching any candle',
        ],
        optionsBn: [
          'একটি পূর্ব-যোগ্য OB ভেঙে কনফার্মিং স্ট্রাকচারাল শিফট ঘটতে হবে এবং পরে বিপরীত দিক থেকে রিভিজিট করার সময় সেটিকে বিবেচনা করতে হবে',
          'একটি OB কখনোই না ভেঙে একই দিকে তিনবার হোল্ড করতে হবে',
          'রেঞ্জের মাঝখানের যেকোনো ক্যান্ডেলকে একটি মুভিং অ্যাভারেজ অতিক্রম করতে হবে',
          'সপ্তাহান্তে প্রাইস কোনো ক্যান্ডেল স্পর্শ না করে গ্যাপ দিতে হবে',
        ],
        correctIndex: 0,
        explainEn:
          'A breaker requires a prior qualified OB, a decisive violation/structural shift, and a subsequent revisit from the opposite side.',
        explainBn:
          'ব্রেকার হওয়ার জন্য প্রথমে একটি যোগ্য OB থাকতে হবে, এরপর সেটির সুস্পষ্ট ভাঙন/স্ট্রাকচারাল শিফট এবং পরবর্তীতে বিপরীত দিক থেকে রিভিজিট হতে হবে।',
      },
      {
        qEn: 'In the article’s example where a bearish OB at 104–106 is violated by a confirming close above and bullish structure shift, when does it become eligible as a bullish breaker?',
        qBn: 'আর্টিকেলের উদাহরণে যেখানে ১০৪–১০৬-এর একটি বেয়ারিশ OB ওপরে কনফার্মিং ক্লোজ এবং বুলিশ স্ট্রাকচার শিফটের মাধ্যমে ভেঙে যায়, সেটি কখন বুলিশ ব্রেকার হিসেবে যোগ্য হয়?',
        optionsEn: [
          'At the exact same timestamp when the original bearish OB first formed',
          'Only after the confirming break above the boundary and structural condition have occurred',
          'Before price ever reaches 104 for the first time',
          'Only after the bullish trade hits take-profit',
        ],
        optionsBn: [
          'মূল বেয়ারিশ OB যখন প্রথম তৈরি হয়েছিল ঠিক সেই একই সময়ে',
          'শুধুমাত্র বাউন্ডারির ওপরে কনফার্মিং ব্রেক এবং স্ট্রাকচারাল শর্ত পূরণ হওয়ার পরেই',
          'প্রাইস প্রথমবার ১০৪-এ পৌঁছানোর আগেই',
          'শুধুমাত্র বুলিশ ট্রেডটি টেক-প্রফিট হিট করার পরে',
        ],
        correctIndex: 1,
        explainEn:
          'The earlier bearish OB and the later bullish breaker hypothesis have different eligibility times; the breaker only qualifies after the confirming break.',
        explainBn:
          'পূর্বের বেয়ারিশ OB এবং পরবর্তী বুলিশ ব্রেকার হাইপোথিসিসের যোগ্যতার সময় আলাদা; কনফার্মিং ব্রেক ঘটার পরেই কেবল ব্রেকারটি যোগ্য হয়।',
      },
      {
        qEn: 'What defines the "Unicorn" model in SMC/ICT terminology as taught in Lesson 08?',
        qBn: 'লেসন ০৮-এ শেখানো SMC/ICT পরিভাষায় "Unicorn" মডেলটি কী দ্বারা সংজ্ঞায়িত হয়?',
        optionsEn: [
          'The overlap (intersection) between a qualified Breaker Block and a Fair Value Gap (FVG)',
          'Three consecutive doji candles at the daily open',
          'A Rejection Block that forms without any Fair Value Gap nearby',
          'Two Order Blocks on different currency pairs moving opposite to each other',
        ],
        optionsBn: [
          'একটি যোগ্য Breaker Block এবং একটি Fair Value Gap (FVG)-এর মধ্যকার ওভারল্যাপ (ছেদ অংশ)',
          'ডেইলি ওপেনে পরপর তিনটি দোজি ক্যান্ডেল',
          'আশেপাশে কোনো Fair Value Gap ছাড়াই গঠিত একটি Rejection Block',
          'দুটি ভিন্ন কারেন্সি পেয়ারে পরস্পর বিপরীতমুখী দুটি Order Block',
        ],
        correctIndex: 0,
        explainEn:
          'The Unicorn model is defined by the confluence overlap between a breaker block and a fair value gap during the structural shift.',
        explainBn:
          'স্ট্রাকচারাল শিফটের সময় একটি ব্রেকার ব্লক এবং একটি ফেয়ার ভ্যালু গ্যাপের (FVG) ওভারল্যাপ বা ছেদ অংশই Unicorn মডেল হিসেবে সংজ্ঞায়িত।',
      },
      {
        qEn: 'If a bullish Breaker Block spans 104–106 and a qualifying bullish FVG spans 105–108, what is the Unicorn overlap interval?',
        qBn: 'যদি একটি বুলিশ Breaker Block ১০৪–১০৬ পর্যন্ত এবং একটি যোগ্য বুলিশ FVG ১০৫–১০৮ পর্যন্ত বিস্তৃত হয়, তবে Unicorn ওভারল্যাপের সীমা কত?',
        optionsEn: [
          '104–108',
          '105–106',
          '104–105',
          '106–108',
        ],
        optionsBn: [
          '১০৪–১০৮',
          '১০৫–১০৬',
          '১০৪–১০৫',
          '১০৬–১০৮',
        ],
        correctIndex: 1,
        explainEn:
          'The intersection of the interval 104–106 and the interval 105–108 is the shared range 105–106.',
        explainBn:
          '১০৪–১০৬ এবং ১০৫–১০৮ সীমার সাধারণ ছেদ অংশ বা ওভারল্যাপ হলো ১০৫–১০৬।',
      },
      {
        qEn: 'Why is the agreement between a Breaker Block and an overlapping FVG not automatically two independent pieces of evidence?',
        qBn: 'একটি Breaker Block এবং ওভারল্যাপিং FVG-এর সহাবস্থান কেন স্বয়ংক্রিয়ভাবে দুটি স্বাধীন প্রমাণ হিসেবে গণ্য হয় না?',
        optionsEn: [
          'Because both the breaker violation and the FVG creation may depend on the exact same expansion leg',
          'Because Fair Value Gaps only appear on line charts',
          'Because Breaker Blocks cannot form during impulsive moves',
          'Because overlapping rectangles cancel each other out mathematically',
        ],
        optionsBn: [
          'কারণ ব্রেকার ভাঙন এবং FVG তৈরি হওয়া উভয়ই ঠিক একই এক্সপানশন লেগের ওপর নির্ভরশীল হতে পারে',
          'কারণ Fair Value Gap শুধুমাত্র লাইন চার্টে দেখা যায়',
          'কারণ ইমপালসিভ মুভের সময় Breaker Block তৈরি হতে পারে না',
          'কারণ ওভারল্যাপিং আয়তক্ষেত্রগুলো গাণিতিকভাবে একে অপরকে বাতিল করে দেয়',
        ],
        correctIndex: 0,
        explainEn:
          'Since the same displacement move often breaks the prior OB and leaves the FVG, their overlap reflects one forceful move rather than two unrelated events.',
        explainBn:
          'যেহেতু একই ডিসপ্লেসমেন্ট মুভ প্রায়ই পূর্বের OB ভাঙে এবং FVG তৈরি করে, তাই এদের ওভারল্যাপ দুটি ভিন্ন ঘটনার বদলে একটি একক শক্তিশালী মুভকেই প্রতিফলিত করে।',
      },
      {
        qEn: 'Why shouldn’t you place a trade merely because a Breaker Block box and an FVG box overlap on your chart?',
        qBn: 'চার্টে শুধুমাত্র একটি Breaker Block বক্স এবং একটি FVG বক্স ওভারল্যাপ করেছে বলেই কেন ট্রেড নেওয়া উচিত নয়?',
        optionsEn: [
          'Because a narrower interval still requires a documented entry trigger, expiry, invalidation rule, and target',
          'Because Unicorn setups are only meant for cryptocurrency charts',
          'Because overlapping boxes always mean the market is closed',
          'Because you must wait for five more overlapping boxes first',
        ],
        optionsBn: [
          'কারণ একটি সরু রেঞ্জ পাওয়া গেলেও সেটির জন্য সুনির্দিষ্ট এন্ট্রি ট্রিগার, মেয়াদ (expiry), ইনভ্যালিডেশন নিয়ম এবং টার্গেট থাকা আবশ্যক',
          'কারণ Unicorn সেটআপ শুধুমাত্র ক্রিপ্টোকারেন্সি চার্টের জন্য প্রযোজ্য',
          'কারণ ওভারল্যাপিং বক্স মানেই মার্কেট বন্ধ রয়েছে',
          'কারণ প্রথমে আরও পাঁচটি ওভারল্যাপিং বক্সের জন্য অপেক্ষা করতে হয়',
        ],
        correctIndex: 0,
        explainEn:
          'Study step 5 stresses documenting an explicit entry trigger, invalidation rule, and target rather than trading solely because two boxes overlap.',
        explainBn:
          'স্টাডি স্টেপ ৫ অনুযায়ী শুধুমাত্র দুটি বক্সের ওভারল্যাপ দেখেই ট্রেড না নিয়ে সুনির্দিষ্ট এন্ট্রি ট্রিগার, ইনভ্যালিডেশন নিয়ম এবং টার্গেট ডকুমেন্ট করা জরুরি।',
      },
      {
        qEn: 'How can two traders referencing the exact same 105–106 Unicorn overlap end up with completely different trade results?',
        qBn: 'ঠিক একই ১০৫–১০৬ Unicorn ওভারল্যাপ অনুসরণ করেও দুজন ট্রেডারের ট্রেডের ফলাফল কীভাবে সম্পূর্ণ ভিন্ন হতে পারে?',
        optionsEn: [
          'A limit order at the overlap versus a market order after a confirming close have different fill and invalidation mechanics',
          'One trader draws the box in blue while the other draws it in green',
          'Price moves differently depending on screen resolution',
          'Limit orders are guaranteed to never hit stop-loss',
        ],
        optionsBn: [
          'ওভারল্যাপে লিমিট অর্ডার বনাম কনফার্মিং ক্লোজের পর মার্কেট অর্ডারের ফিল এবং ইনভ্যালিডেশন প্রক্রিয়া ভিন্ন হয়',
          'একজন ট্রেডার বক্সটি নীল রঙে আঁকেন এবং অন্যজন সবুজ রঙে আঁকেন',
          'স্ক্রিন রেজোলিউশনের ওপর ভিত্তি করে প্রাইস ভিন্নভাবে মুভ করে',
          'লিমিট অর্ডারে কখনোই স্টপ-লস হিট না করার গ্যারান্টি থাকে',
        ],
        correctIndex: 0,
        explainEn:
          'Order execution type (limit fill on touch vs. market entry after confirmation close) changes which setups trigger and how stops behave.',
        explainBn:
          'অর্ডার এক্সিকিউশন পদ্ধতি (স্পর্শে লিমিট ফিল বনাম কনফার্মেশন ক্লোজের পর মার্কেট এন্ট্রি) কোন সেটআপ ট্রিগার হবে এবং স্টপ কীভাবে কাজ করবে তা বদলে দেয়।',
      },
      {
        qEn: 'What contextual factor gives a Breaker Block hypothesis plausible structural meaning according to Study Step 3?',
        qBn: 'স্টাডি স্টেপ ৩ অনুযায়ী কোন প্রেক্ষাপটটি একটি Breaker Block হাইপোথিসিসকে যৌক্তিক স্ট্রাকচারাল অর্থ প্রদান করে?',
        optionsEn: [
          'A mapped directional structure shift or prior liquidity event (sweep)',
          'A random candle formation during low-volume holiday hours',
          'An oscillator crossing the 50 midpoint line',
          'A round psychological number with no structural break',
        ],
        optionsBn: [
          'একটি চিহ্নিত ডিরেকশনাল স্ট্রাকচার শিফট বা পূর্ববর্তী লিকুইডিটি ইভেন্ট (সুইপ)',
          'কম ভলিউমের ছুটির সময়ে তৈরি হওয়া যেকোনো ক্যান্ডেল',
          'একটি অসিলেটরের ৫০ মিডপয়েন্ট লাইন অতিক্রম করা',
          'কোনো স্ট্রাকচারাল ব্রেক ছাড়াই একটি রাউন্ড সাইকোলজিক্যাল নম্বর',
        ],
        correctIndex: 0,
        explainEn:
          'A breaker gains plausible context when anchored to a clear directional structure shift or liquidity sweep sequence.',
        explainBn:
          'একটি সুস্পষ্ট ডিরেকশনাল স্ট্রাকচার শিফট বা লিকুইডিটি সুইপ সিকোয়েন্সের সাথে যুক্ত থাকলেই ব্রেকার ব্লক যৌক্তিক প্রেক্ষাপট পায়।',
      },
      {
        qEn: 'How should you select historical sample dates when testing whether the Unicorn FVG overlap improves Breaker Block performance?',
        qBn: 'Unicorn FVG ওভারল্যাপ Breaker Block-এর পারফরম্যান্স উন্নত করে কি না তা পরীক্ষা করার সময় ঐতিহাসিক স্যাম্পল তারিখ কীভাবে নির্বাচন করা উচিত?',
        optionsEn: [
          'Choose the sample dates before selecting attractive examples, and include sequences with no overlap, no revisit, and failed entries',
          'Scroll through the chart to cherry-pick only textbook winners first',
          'Only record dates where both the breaker and FVG resulted in 5R wins',
          'Exclude any week where a setup failed to revisit',
        ],
        optionsBn: [
          'আকর্ষণীয় উদাহরণ খোঁজার আগেই স্যাম্পল তারিখ নির্বাচন করুন এবং ওভারল্যাপহীন, রিভিজিটহীন ও ব্যর্থ এন্ট্রিগুলোও অন্তর্ভুক্ত করুন',
          'চার্ট স্ক্রল করে শুধুমাত্র টেক্সটবুক জয়ী ট্রেডগুলো আগে বেছে নিন',
          'শুধুমাত্র সেই তারিখগুলো রেকর্ড করুন যেখানে ব্রেকার এবং FVG উভয়ই 5R জয় দিয়েছে',
          'যে সপ্তাহে কোনো সেটআপ রিভিজিট করেনি সেই সপ্তাহটি বাদ দিন',
        ],
        correctIndex: 0,
        explainEn:
          'Fixing sample dates beforehand and logging non-overlaps, non-revisits, and failures prevents cherry-picking bias.',
        explainBn:
          'আগেই স্যাম্পল তারিখ নির্ধারণ করা এবং ওভারল্যাপহীন, রিভিজিটহীন ও ব্যর্থ সেটআপ লগ করা চেরি-পিকিং বায়াস প্রতিরোধ করে।',
      },
      {
        qEn: 'What specific examples must you collect to complete the Lesson 08 Chart Lab?',
        qBn: 'লেসন ০৮-এর চার্ট ল্যাব সম্পন্ন করতে আপনাকে কোন নির্দিষ্ট উদাহরণগুলো সংগ্রহ করতে হবে?',
        optionsEn: [
          '10 breaker setups, 5 wick rejection zones, 10 breaker/FVG overlaps, plus 5 cases where a claimed Unicorn overlap never produced a controlled entry',
          '25 random support and resistance lines on a monthly chart',
          'only 3 winning Unicorn trades from social media screenshots',
          '10 moving average crossovers and 10 RSI divergences',
        ],
        optionsBn: [
          '১০টি ব্রেকার সেটআপ, ৫টি উইক রিজেকশন জোন, ১০টি ব্রেকার/FVG ওভারল্যাপ এবং ৫টি কেস যেখানে কথিত Unicorn ওভারল্যাপ কখনোই নিয়ন্ত্রিত এন্ট্রি দেয়নি',
          'মান্থলি চার্টে ২৫টি এলোমেলো সাপোর্ট এবং রেজিস্ট্যান্স লাইন',
          'সোশ্যাল মিডিয়া স্ক্রিনশট থেকে শুধুমাত্র ৩টি জয়ী Unicorn ট্রেড',
          '১০টি মুভিং অ্যাভারেজ ক্রসওভার এবং ১০টি RSI ডাইভারজেন্স',
        ],
        correctIndex: 0,
        explainEn:
          'The chart lab requires 10 breakers, 5 rejection zones, 10 breaker/FVG overlaps, and 5 documented Unicorn cases that never yielded a controlled entry.',
        explainBn:
          'চার্ট ল্যাবে ১০টি ব্রেকার, ৫টি রিজেকশন জোন, ১০টি ব্রেকার/FVG ওভারল্যাপ এবং ৫টি Unicorn কেস (যেগুলো নিয়ন্ত্রিত এন্ট্রি দেয়নি) ডকুমেন্ট করা আবশ্যক।',
      },
      {
        qEn: 'What should comparing separate columns for rejection qualification, breaker qualification, and FVG overlap ultimately reveal?',
        qBn: 'রিজেকশন যোগ্যতা, ব্রেকার যোগ্যতা এবং FVG ওভারল্যাপের জন্য আলাদা কলাম তুলনা করলে শেষ পর্যন্ত কী প্রকাশ পাওয়া উচিত?',
        optionsEn: [
          'Whether the overlap actually contributes clearer location, fewer opportunities, different fills, or no measurable improvement',
          'That fancy pattern names guarantee profits regardless of rules',
          'That you never need an invalidation level when trading a Unicorn',
          'That all three patterns always occur on the exact same candle',
        ],
        optionsBn: [
          'ওভারল্যাপটি আসলেই আরও স্পষ্ট লোকেশন, কম সুযোগ, ভিন্ন ফিল নাকি কোনো পরিমাপযোগ্য উন্নতিই দেয় না তা প্রকাশ করা',
          'নিয়ম যাই হোক না কেন, আকর্ষণীয় প্যাটার্নের নামই মুনাফার নিশ্চয়তা দেয়',
          'Unicorn ট্রেড করার সময় কখনোই ইনভ্যালিডেশন লেভেলের প্রয়োজন হয় না',
          'তিনটি প্যাটার্নই সর্বদা ঠিক একই ক্যান্ডেলে ঘটে থাকে',
        ],
        correctIndex: 0,
        explainEn:
          'Controlled column comparisons show the true empirical effect of adding confluence—whether it improves precision, reduces frequency, alters fills, or adds no edge.',
        explainBn:
          'নিয়ন্ত্রিত কলাম তুলনা দেখায় কনফ্লুয়েন্স যোগ করার প্রকৃত প্রভাব কী—এটি কি নিখুঁত লোকেশন দেয়, ট্রেডের সংখ্যা কমায়, ফিল পরিবর্তন করে, নাকি কোনো বাড়তি সুবিধাই দেয় না।',
      },
    ],
  },
}
