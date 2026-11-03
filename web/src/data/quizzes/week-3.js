export const WEEK_3_QUIZZES = {
  '12-liquidity-grab-sweep': {
    lessonId: 12,
    slug: '12-liquidity-grab-sweep',
    masteryPromptEn: 'How do you tell a sweep hypothesis from a confirmed structural breakout in real time?',
    masteryPromptBn: 'রিয়েল টাইমে আপনি কীভাবে একটি সম্ভাব্য Liquidity Sweep (হাইপোথিসিস) এবং একটি কনফার্মড স্ট্রাকচারাল Breakout-এর মধ্যে পার্থক্য করবেন?',
    completionItems: [
      {
        id: 'read-notes',
        en: 'Studied the primary resource and wrote summary notes in my own words',
        bn: 'প্রাথমিক রিসোর্সটি পড়েছি এবং নিজের ভাষায় সারাংশ নোট লিখেছি'
      },
      {
        id: 'lab-1',
        en: 'Marked BSL and SSL on 20 charts before the later candles were revealed',
        bn: 'পরবর্তী ক্যান্ডেলগুলো প্রকাশের আগেই ২০টি চার্টে BSL এবং SSL মার্ক করেছি'
      },
      {
        id: 'lab-2',
        en: 'Collected 10 sweeps and 10 sustained breakouts using one consistent close-back rule',
        bn: 'একটি নির্দিষ্ট ক্লোজ-ব্যাক নিয়ম ব্যবহার করে ১০টি Sweep এবং ১০টি স্থায়ী Breakout সংগ্রহ করেছি'
      },
      {
        id: 'lab-3',
        en: 'Wrote the next visible target, or "no clear target", on each sample',
        bn: 'প্রতিটি উদাহরণে পরবর্তী দৃশ্যমান টার্গেট অথবা "কোনো স্পষ্ট টার্গেট নেই" লিখে রেখেছি'
      },
      {
        id: 'mastery-quiz',
        en: 'Completed the Knowledge Check quiz and answered the Mastery Check without notes',
        bn: 'নলেজ চেক কুইজ সম্পন্ন করেছি এবং নোট না দেখে মাস্টারি চেকের উত্তর দিয়েছি'
      }
    ],
    questions: [
      {
        qEn: 'In SMC teaching conventions, how are buy-side liquidity (BSL) and sell-side liquidity (SSL) defined?',
        qBn: 'SMC শিক্ষার প্রচলিত নিয়মে Buy-Side Liquidity (BSL) এবং Sell-Side Liquidity (SSL) কীভাবে সংজ্ঞায়িত করা হয়?',
        optionsEn: [
          'BSL is defined as areas above highs, and SSL is defined as areas below lows as hypotheses about where stops may cluster',
          'BSL is below swing lows where buyers enter, and SSL is above swing highs where sellers enter',
          'BSL and SSL represent verified institutional order book volumes visible directly on a standard candle chart',
          'BSL refers exclusively to bull market trends and SSL refers exclusively to bear market trends'
        ],
        optionsBn: [
          'স্টপ অর্ডার কোথায় জমা হতে পারে তার ধারণা (হাইপোথিসিস) হিসেবে হাইয়ের ওপরের অংশকে BSL এবং লোয়ের নিচের অংশকে SSL ধরা হয়',
          'BSL হলো সুইং লোয়ের নিচে যেখানে বায়াররা এন্ট্রি নেয়, আর SSL হলো সুইং হাইয়ের ওপরে যেখানে সেলাররা এন্ট্রি নেয়',
          'BSL এবং SSL হলো সাধারণ ক্যান্ডেল চার্টে সরাসরি দৃশ্যমান ইনস্টিটিউশনাল অর্ডার বুকের নিশ্চিত ভলিউম',
          'BSL কেবল বুল মার্কেট ট্রেন্ড এবং SSL কেবল বিয়ার মার্কেট ট্রেন্ড বোঝাতে ব্যবহৃত হয়'
        ],
        correctIndex: 0,
        explainEn: 'SMC associates buy-side liquidity with areas above highs and sell-side liquidity with areas below lows as hypotheses about resting stop clusters.',
        explainBn: 'SMC-তে সুইং হাইয়ের ওপরের অংশকে BSL এবং সুইং লোয়ের নিচের অংশকে SSL হিসেবে ধরা হয়, যা মূলত কোথায় স্টপ অর্ডার থাকতে পারে তার একটি হাইপোথিসিস।'
      },
      {
        qEn: 'What can a standard candlestick chart alone NOT establish regarding liquidity levels?',
        qBn: 'লিকুইডিটি লেভেলগুলোর ব্যাপারে শুধু একটি সাধারণ ক্যান্ডেলস্টিক চার্ট দেখে কোন বিষয়টি নিশ্চিত করা যায় না?',
        optionsEn: [
          'Whether yesterday’s high or low was traded through today',
          'The exact number, size, or ownership of unseen resting stop orders behind a visible high or low',
          'Where equal highs or equal lows visually formed in the past',
          'Whether a completed candle closed above or below a prior reference price'
        ],
        optionsBn: [
          'গতকালের হাই বা লো আজকের ট্রেডিংয়ে অতিক্রম হয়েছে কি না',
          'দৃশ্যমান কোনো হাই বা লোয়ের পেছনে লুকানো স্টপ অর্ডারের প্রকৃত সংখ্যা, আকার বা মালিকানা',
          'অতীতে চার্টের কোথায় Equal Highs বা Equal Lows তৈরি হয়েছিল',
          'একটি পূর্ণাঙ্গ ক্যান্ডেল আগের রেফারেন্স প্রাইসের ওপরে নাকি নিচে ক্লোজ হয়েছে'
        ],
        correctIndex: 1,
        explainEn: 'While a reference level like yesterday’s high is visible, a candlestick chart alone cannot show the actual placement, size, or ownership of unseen orders behind it.',
        explainBn: 'গতকালের হাই চার্টে দেখা গেলেও, শুধু ক্যান্ডেলস্টিক চার্ট দেখে তার পেছনে থাকা অদৃশ্য অর্ডারের প্রকৃত সংখ্যা, আকার বা মালিকানা নিশ্চিত করা যায় না।'
      },
      {
        qEn: 'Using the article’s illustrative close-based rule around a prior high of 110, how is a candle with a high of 111 and a completed close of 109 classified?',
        qBn: 'আর্টিকেলের উদাহরণ অনুযায়ী আগের হাই যদি ১১০ হয়, তবে একটি ক্যান্ডেল ১১১ হাই তৈরি করে ১০৯-এ পূর্ণাঙ্গ ক্লোজ দিলে সেটিকে কী হিসেবে শ্রেণিবদ্ধ করা হবে?',
        optionsEn: [
          'Confirmed structural breakout',
          'Pending observation',
          'Sweep candidate',
          'Unresolved equilibrium shift'
        ],
        optionsBn: [
          'কনফার্মড স্ট্রাকচারাল Breakout',
          'অমীমাংসিত পর্যবেক্ষণ (Pending)',
          'সম্ভাব্য Sweep (Sweep candidate)',
          'অমীমাংসিত ইকুইলিব্রিয়াম শিফট'
        ],
        correctIndex: 2,
        explainEn: 'When price trades above the marked level of 110 (reaching 111) and the completed candle closes back inside at 109, it qualifies as a sweep candidate under the example rule.',
        explainBn: 'প্রাইস ১১০ লেভেল ছাড়িয়ে ১১১ পর্যন্ত যাওয়ার পর পূর্ণাঙ্গ ক্যান্ডেলটি আবার ভেতরে ১০৯-এ ক্লোজ দিলে উদাহরণ নিয়ম অনুযায়ী সেটিকে সম্ভাব্য Sweep (Sweep candidate) বলা হয়।'
      },
      {
        qEn: 'Under the same illustrative rule around a prior high of 110, how is a completed candle with a high of 111 and a close of 110.5 classified?',
        qBn: 'একই উদাহরণ নিয়মে আগের হাই ১১০ হলে, কোনো পূর্ণাঙ্গ ক্যান্ডেলের হাই ১১১ এবং ক্লোজ ১১০.৫ হলে সেটিকে কী বলা হবে?',
        optionsEn: [
          'Sweep candidate',
          'Failed manipulation',
          'Internal retracement',
          'Breakout candidate'
        ],
        optionsBn: [
          'সম্ভাব্য Sweep (Sweep candidate)',
          'ব্যর্থ ম্যানিপুলেশন',
          'ইন্টারনাল রিট্রেসমেন্ট',
          'সম্ভাব্য Breakout (Breakout candidate)'
        ],
        correctIndex: 3,
        explainEn: 'A completed candle closing at 110.5 finishes beyond the 110 reference high, making it a breakout candidate under the example close rule.',
        explainBn: 'পূর্ণাঙ্গ ক্যান্ডেলটি ১১০ লেভেলের ওপরে ১১০.৫-এ ক্লোজ দেওয়ায় উদাহরণ নিয়ম অনুযায়ী এটি একটি সম্ভাব্য Breakout (Breakout candidate)।'
      },
      {
        qEn: 'How should you classify a candle that has traded above a reference level of 110 to 111 while the candle is still open?',
        qBn: 'একটি ক্যান্ডেল ১১০-এর রেফারেন্স লেভেল ছাড়িয়ে ১১১-তে ট্রেড করছে কিন্তু ক্যান্ডেলটি এখনো ক্লোজ হয়নি (রানিং)—এ অবস্থায় এটিকে কীভাবে শ্রেণিবদ্ধ করা উচিত?',
        optionsEn: [
          'Immediately enter as a guaranteed liquidity sweep',
          'Classify it as "Pending" until the candle completes and closes',
          'Classify it as a confirmed breakout because the wick broke 110',
          'Delete the 110 reference level from the chart immediately'
        ],
        optionsBn: [
          'নিশ্চিত লিকুইডিটি সুইপ ধরে সাথে সাথে এন্ট্রি নেওয়া উচিত',
          'ক্যান্ডেলটি সম্পূর্ণ হয়ে ক্লোজ না হওয়া পর্যন্ত এটিকে "Pending" (অমীমাংসিত) হিসেবে রাখা উচিত',
          'উইক ১১০ ভেঙেছে বলে সাথে সাথে কনফার্মড ব্রেকআউট ধরা উচিত',
          'চার্ট থেকে ১১০ রেফারেন্স লেভেলটি সাথে সাথে মুছে ফেলা উচিত'
        ],
        correctIndex: 1,
        explainEn: 'Under a close-based rule, an open candle has not yet established whether it will close back inside or stay beyond the level, so its status remains Pending.',
        explainBn: 'ক্লোজ-ভিত্তিক নিয়মে একটি রানিং ক্যান্ডেল লেভেলের ভেতরে ক্লোজ দেবে নাকি বাইরেই থাকবে তা নিশ্চিত না হওয়ায় ক্যান্ডেল শেষ হওয়া পর্যন্ত এটি "Pending" থাকে।'
      },
      {
        qEn: 'What distinguishes external-range liquidity (ERL) from internal-range liquidity (IRL) in your mapping workflow?',
        qBn: 'আপনার চার্ট ম্যাপিং প্রক্রিয়ায় External-Range Liquidity (ERL) এবং Internal-Range Liquidity (IRL)-এর মূল পার্থক্য কী?',
        optionsEn: [
          'ERL consists of important prior range highs/lows, while IRL consists of minor pivots and imbalances inside the chosen range',
          'ERL only appears on 1-minute charts, while IRL only appears on monthly charts',
          'ERL refers exclusively to FVGs, while IRL refers exclusively to previous year highs and lows',
          'ERL and IRL are permanently fixed for a price level regardless of which range anchor you choose'
        ],
        optionsBn: [
          'ERL হলো নির্বাচিত রেঞ্জের বাইরের গুরুত্বপূর্ণ হাই/লো, আর IRL হলো ওই রেঞ্জের ভেতরের মাইনর পিভট এবং ইমব্যালেন্স',
          'ERL কেবল ১-মিনিটের চার্টে দেখা যায়, আর IRL কেবল মান্থলি চার্টে দেখা যায়',
          'ERL বলতে কেবল FVG বোঝায়, আর IRL বলতে কেবল আগের বছরের হাই ও লো বোঝায়',
          'আপনি যে রেঞ্জ অ্যাঙ্করই বেছে নিন না কেন, একটি নির্দিষ্ট প্রাইস লেভেলের জন্য ERL ও IRL চিরকাল অপরিবর্তিত থাকে'
        ],
        correctIndex: 0,
        explainEn: 'External-range levels are the key highs and lows bounding the chosen dealing range, while internal-range levels are minor pivots and imbalances inside that range.',
        explainBn: 'নির্বাচিত রেঞ্জের সীমানা নির্ধারণকারী প্রধান হাই/লোগুলো হলো ERL, আর সেই রেঞ্জের ভেতরে থাকা ছোট পিভট ও ইমব্যালেন্সগুলো হলো IRL।'
      },
      {
        qEn: 'Can the exact same price level act as internal liquidity in one analysis and external liquidity in another?',
        qBn: 'একই প্রাইস লেভেল কি একটি অ্যানালাইসিসে Internal Liquidity এবং অন্য একটি অ্যানালাইসিসে External Liquidity হিসেবে কাজ করতে পারে?',
        optionsEn: [
          'No, once a level is internal it can never be external on any timeframe or range',
          'Yes, because the role of a reference price depends on which range anchors you choose',
          'Only if the broker changes the historical candle data',
          'No, because external liquidity only exists on foreign exchange pairs'
        ],
        optionsBn: [
          'না, একটি লেভেল একবার ইন্টারনাল হলে কোনো টাইমফ্রেম বা রেঞ্জেই তা এক্সটার্নাল হতে পারে না',
          'হ্যাঁ, কারণ একটি রেফারেন্স প্রাইসের ভূমিকা নির্ভর করে আপনি কোন রেঞ্জ অ্যাঙ্কর বেছে নিচ্ছেন তার ওপর',
          'কেবল যদি ব্রোকার ঐতিহাসিক ক্যান্ডেল ডেটা পরিবর্তন করে দেয়',
          'না, কারণ এক্সটার্নাল লিকুইডিটি কেবল ফরেক্স পেয়ারেই থাকে'
        ],
        correctIndex: 1,
        explainEn: 'The article notes that you choose which range makes a reference internal or external, so the same price can occupy different roles under different range anchors.',
        explainBn: 'কোন রেঞ্জের সাপেক্ষে একটি লেভেল Internal বা External হবে তা রেঞ্জের অ্যাঙ্করের ওপর নির্ভর করে; তাই রেঞ্জ বদলে গেলে একই প্রাইস লেভেল ভিন্ন ভূমিকা পালন করতে পারে।'
      },
      {
        qEn: 'Suppose a breakout candidate closes above 110 at 110.5, and several candles later price reverses back below 110. How should you record this in your journal?',
        qBn: 'ধরুন একটি সম্ভাব্য Breakout ক্যান্ডেল ১১০-এর ওপরে ১১০.৫-এ ক্লোজ দেওয়ার কয়েক ক্যান্ডেল পর প্রাইস আবার ঘুরে ১১০-এর নিচে চলে এল। আপনার জার্নালে এটি কীভাবে রেকর্ড করা উচিত?',
        optionsEn: [
          'Erase the original breakout entry and pretend the eventual sweep was already confirmed on the first candle',
          'Record the initial breakout candidate and separately log the later reversal without rewriting what was known at the earlier moment',
          'Move the reference level from 110 to 112 so the first candle looks like a wick sweep',
          'Ignore the event completely because breakouts are never allowed to fail'
        ],
        optionsBn: [
          'শুরুর ব্রেকআউট রেকর্ডটি মুছে ফেলে এমন ভাব করা উচিত যেন প্রথম ক্যান্ডেলেই সুইপটি নিশ্চিত জানা ছিল',
          'প্রথমে এটিকে সম্ভাব্য ব্রেকআউট হিসেবে রেখে পরের রিভার্সালটিকে আলাদাভাবে রেকর্ড করা উচিত, শুরুর তথ্য বিকৃত না করে',
          'রেফারেন্স লেভেলটি ১১০ থেকে সরিয়ে ১১২ করে দেওয়া উচিত যাতে প্রথম ক্যান্ডেলটিকে উইক সুইপ মনে হয়',
          'ঘটনাটি পুরোপুরি বাদ দেওয়া উচিত কারণ ব্রেকআউট কখনো ব্যর্থ হতে পারে না'
        ],
        correctIndex: 1,
        explainEn: 'If a breakout later reverses, you must record the later change separately rather than pretending the eventual sweep interpretation was confirmed at the earlier moment.',
        explainBn: 'কোনো Breakout হওয়ার পর প্রাইস আবার উল্টো দিকে ঘুরে গেলে পরের পরিবর্তনটিকে আলাদাভাবে রেকর্ড করতে হবে; শুরুতেই এটি নিশ্চিত Sweep ছিল বলে হিন্ডসাইট দাবি করা যাবে না।'
      },
      {
        qEn: 'Why is the statement "price accepted above the high" problematic for backtesting unless further defined?',
        qBn: 'আরও সুনির্দিষ্ট সংজ্ঞা ছাড়া "প্রাইস হাইয়ের ওপরে অ্যাকসেপ্ট হয়েছে"—এই কথাটি ব্যাকটেস্টিংয়ের জন্য কেন সমস্যাজনক?',
        optionsEn: [
          'Because price can never trade above a prior high in financial markets',
          'Because it is too vague; you must specify an exact rule such as two completed closes above the level or a specific retest and close',
          'Because acceptance only applies to sell-side liquidity below lows',
          'Because indicators automatically calculate acceptance without needing rules'
        ],
        optionsBn: [
          'কারণ ফিন্যান্সিয়াল মার্কেটে প্রাইস কখনোই আগের হাইয়ের ওপরে ট্রেড করতে পারে না',
          'কারণ কথাটি অত্যন্ত অস্পষ্ট; আপনাকে অবশ্যই পরপর দুটি পূর্ণাঙ্গ ক্যান্ডেল ক্লোজ বা নির্দিষ্ট রিটেস্ট ও ক্লোজের মতো সুনির্দিষ্ট নিয়ম ঠিক করতে হবে',
          'কারণ অ্যাকসেপ্টেন্স কেবল লোয়ের নিচে থাকা Sell-Side Liquidity-এর ক্ষেত্রে প্রযোজ্য',
          'কারণ কোনো নিয়ম ছাড়াই ইন্ডিকেটর স্বয়ংক্রিয়ভাবে অ্যাকসেপ্টেন্স হিসাব করে ফেলে'
        ],
        correctIndex: 1,
        explainEn: '“Price accepted above the high” is too vague for testing; a testable rule requires specific criteria like two completed closes above the level or a defined retest and close.',
        explainBn: '“প্রাইস হাইয়ের ওপরে অ্যাকসেপ্ট হয়েছে” কথাটি পরীক্ষার জন্য বড্ড অস্পষ্ট; ব্যাকটেস্ট করতে হলে পরপর দুটি ক্যান্ডেল ক্লোজ বা নির্দিষ্ট রিটেস্টের মতো পরিষ্কার নিয়ম থাকতে হবে।'
      },
      {
        qEn: 'Why is it necessary to set a fixed review window (observation window) when testing reactions at liquidity levels?',
        qBn: 'লিকুইডিটি লেভেলে প্রাইসের রিঅ্যাকশন টেস্ট করার সময় একটি নির্দিষ্ট রিভিউ উইন্ডো (পর্যবেক্ষণ সময়সীমা) ঠিক করে নেওয়া কেন জরুরি?',
        optionsEn: [
          'Because waiting indefinitely until a favorable reaction eventually appears makes almost any reference level look useful',
          'Because exchange servers delete price history after 24 hours',
          'To ensure every single trade achieves a 100% win rate',
          'Because liquidity levels only exist for exactly three minutes after market open'
        ],
        optionsBn: [
          'কারণ নিজের অনুকূলে রিঅ্যাকশন না পাওয়া পর্যন্ত অনির্দিষ্টকাল অপেক্ষা করতে থাকলে প্রায় যেকোনো লেভেলকেই শেষ পর্যন্ত কার্যকর মনে হতে পারে',
          'কারণ এক্সচেঞ্জ সার্ভার ২৪ ঘণ্টা পর প্রাইস হিস্ট্রি মুছে ফেলে',
          'যাতে প্রতিটি ট্রেডে ১০০% উইন রেট নিশ্চিত করা যায়',
          'কারণ মার্কেট ওপেন হওয়ার পর লিকুইডিটি লেভেল কেবল তিন মিনিট স্থায়ী হয়'
        ],
        correctIndex: 0,
        explainEn: 'Without a fixed review window, waiting indefinitely until price eventually reacts makes almost any marked level appear successful in hindsight.',
        explainBn: 'নির্দিষ্ট পর্যবেক্ষণ সময়সীমা না থাকলে নিজের অনুকূলে রিঅ্যাকশন পাওয়া পর্যন্ত অনির্দিষ্টকাল অপেক্ষা করলে যেকোনো লেভেলকেই শেষ পর্যন্ত সফল মনে হতে পারে।'
      },
      {
        qEn: 'What should you record if your fixed review window ends while price is still hovering indecisively near the marked liquidity level?',
        qBn: 'আপনার নির্ধারিত পর্যবেক্ষণ সময়সীমা (review window) শেষ হওয়ার পরও প্রাইস যদি মার্ক করা লেভেলের আশেপাশেই ঝুলে থাকে, তবে ফলাফল হিসেবে কী রেকর্ড করা উচিত?',
        optionsEn: [
          'Count it as a winning sweep setup',
          'Record an unresolved result',
          'Double the review window until a winning move happens',
          'Delete the level from your sample library so it does not affect statistics'
        ],
        optionsBn: [
          'এটিকে একটি সফল সুইপ সেটআপ হিসেবে গণ্য করা উচিত',
          'ফলাফলটিকে অমীমাংসিত (unresolved) হিসেবে রেকর্ড করা উচিত',
          'অনুকূল মুভ না পাওয়া পর্যন্ত রিভিউ উইন্ডো দ্বিগুণ করে দেওয়া উচিত',
          'পরিসংখ্যান ঠিক রাখতে আপনার স্যাম্পল লাইব্রেরি থেকে লেভেলটি মুছে ফেলা উচিত'
        ],
        correctIndex: 1,
        explainEn: 'When the fixed review window expires with price still lingering near the level, you should honestly log an unresolved result rather than stretching the window.',
        explainBn: 'নির্ধারিত সময়সীমা শেষ হওয়ার পরও প্রাইস লেভেলের আশেপাশেই ঝুলে থাকলে সময় না বাড়িয়ে ফলাফলটিকে অমীমাংসিত (unresolved) হিসেবে রেকর্ড করতে হবে।'
      },
      {
        qEn: 'How does the lesson advise handling the industry terms "liquidity grab" versus "liquidity sweep"?',
        qBn: '"Liquidity Grab" বনাম "Liquidity Sweep"—এই দুটি পরিভাষা ব্যবহারের ক্ষেত্রে লেসনে কী পরামর্শ দেওয়া হয়েছে?',
        optionsEn: [
          'Define "grab" versus "sweep" explicitly for your own journal, because the industry does not have one universal boundary',
          'Never use either word because they are forbidden in SMC',
          'Use "grab" only for crypto and "sweep" only for forex pairs',
          'Assume every educator in the world uses the exact same pip count to separate them'
        ],
        optionsBn: [
          'আপনার নিজের জার্নালের জন্য "Grab" বনাম "Sweep"-এর সংজ্ঞা সুনির্দিষ্ট করে নিন, কারণ ইন্ডাস্ট্রিতে এদের সর্বজনীন কোনো একক সীমানা নেই',
          'কোনো শব্দই ব্যবহার করবেন না কারণ SMC-তে এগুলো নিষিদ্ধ',
          '"Grab" কেবল ক্রিপ্টোতে এবং "Sweep" কেবল ফরেক্স পেয়ারে ব্যবহার করুন',
          'ধরে নিন বিশ্বের সব ট্রেডার ও এডুকেটর এদের আলাদা করতে হুবহু একই পিপ সংখ্যা ব্যবহার করেন'
        ],
        correctIndex: 0,
        explainEn: 'Because the trading industry lacks a single universal distinction between "grab" and "sweep," you must define the boundary clearly in your own journal.',
        explainBn: 'ট্রেডিং ইন্ডাস্ট্রিতে "Grab" এবং "Sweep"-এর মধ্যে সর্বজনীন কোনো একক সীমারেখা না থাকায় আপনার নিজস্ব জার্নালের জন্য এর সংজ্ঞা নিজেকেই স্পষ্ট করে নিতে হবে।'
      },
      {
        qEn: 'Which reference levels should you mark before dropping down to lower timeframes in Lesson 12?',
        qBn: 'লেসন ১২ অনুযায়ী লোয়ার টাইমফ্রেমে যাওয়ার আগে কোন রেফারেন্স লেভেলগুলো মার্ক করে নেওয়া উচিত?',
        optionsEn: [
          'Only 1-minute micro gaps from three weeks ago',
          'Previous day high/low (PDH/PDL), session high/low, and qualifying equal highs/lows',
          'Only moving average crossovers and RSI overbought lines',
          'Random round numbers without looking at prior price swings'
        ],
        optionsBn: [
          'কেবল তিন সপ্তাহ আগের ১-মিনিটের মাইক্রো গ্যাপগুলো',
          'আগের দিনের হাই/লো (PDH/PDL), সেশন হাই/লো এবং বৈধ Equal Highs/Lows',
          'কেবল মুভিং অ্যাভারেজ ক্রসওভার এবং RSI ওভারবট লাইন',
          'আগের প্রাইস সুইং না দেখে যেকোনো র‍্যান্ডম রাউন্ড নাম্বার'
        ],
        correctIndex: 1,
        explainEn: 'Study step 3 directs you to mark previous day high/low, session high/low, and equal high/low levels before moving to lower timeframes.',
        explainBn: 'লোয়ার টাইমফ্রেমে যাওয়ার আগে আগের দিনের হাই/লো (PDH/PDL), সেশনের হাই/লো এবং বৈধ Equal Highs/Lows মার্ক করে নেওয়া উচিত।'
      },
      {
        qEn: 'When building a balanced example library of liquidity events from a preselected date range, what should you do with marked levels that price never reached?',
        qBn: 'পূর্বনির্ধারিত তারিখের রেঞ্জ থেকে লিকুইডিটি ইভেন্টের একটি ভারসাম্যপূর্ণ সংগ্রহ তৈরি করার সময় যে মার্ক করা লেভেলগুলোতে প্রাইস কখনোই পৌঁছায়নি সেগুলোর কী করবেন?',
        optionsEn: [
          'Delete them so your chart looks cleaner and your hit rate looks higher',
          'Keep them in the sample library with their original timestamps, rather than assuming every marked high and low must eventually be visited',
          'Redraw the lines closer to current price so they count as touched',
          'Count them as confirmed sweeps automatically'
        ],
        optionsBn: [
          'চার্ট পরিষ্কার রাখতে এবং হিট রেট বেশি দেখাতে সেগুলো মুছে ফেলব',
          'আসল টাইমস্ট্যাম্পসহ সেগুলোকে তালিকায় রাখব; কারণ মার্ক করা প্রতিটি হাই বা লোতে প্রাইসকে পৌঁছাতেই হবে এমন কোনো কথা নেই',
          'লাইনগুলোকে বর্তমান প্রাইসের কাছে টেনে আনব যাতে সেগুলো টাচ করেছে বলে গণ্য হয়',
          'সেগুলোকে স্বয়ংক্রিয়ভাবে কনফার্মড সুইপ হিসেবে গণ্য করব'
        ],
        correctIndex: 1,
        explainEn: 'A balanced sample library preserves the level before interaction, keeps original timestamps, and includes levels that were never reached.',
        explainBn: 'একটি ভারসাম্যপূর্ণ সংগ্রহে প্রাইস পৌঁছানোর আগেই লেভেল ও টাইমস্ট্যাম্প সেভ করতে হয় এবং যে লেভেলগুলোতে প্রাইস কখনোই পৌঁছায়নি সেগুলোও তালিকায় রাখতে হয়।'
      },
      {
        qEn: 'Why does Lesson 12 warn against automatically interpreting every break of a high or low as "institutional manipulation"?',
        qBn: 'যেকোনো হাই বা লো ব্রেক হলেই সেটিকে স্বয়ংক্রিয়ভাবে "ইনস্টিটিউশনাল ম্যানিপুলেশন" হিসেবে ব্যাখ্যা করতে লেসন ১২-তে কেন নিষেধ করা হয়েছে?',
        optionsEn: [
          'Because neither a sweep nor a breakout guarantees subsequent direction, and a sweep can still be followed by renewed expansion through the same level',
          'Because institutions only trade on weekends when retail charts are closed',
          'Because every break of a high is guaranteed to continue upward forever',
          'Because manipulation only occurs on stocks, never in forex or crypto'
        ],
        optionsBn: [
          'কারণ Sweep বা Breakout কোনোটিই পরবর্তী দিকের শতভাগ নিশ্চয়তা দেয় না, এবং একটি Sweep হওয়ার পরও প্রাইস পুনরায় এক্সপানশন তৈরি করে সেই লেভেল ভেঙে চলে যেতে পারে',
          'কারণ ইনস্টিটিউশনগুলো কেবল সপ্তাহান্তে ট্রেড করে যখন রিটেল চার্ট বন্ধ থাকে',
          'কারণ যেকোনো হাই ব্রেক হলে প্রাইস আজীবন ওপরে যেতেই থাকে',
          'কারণ ম্যানিপুলেশন কেবল স্টকে ঘটে, ফরেক্স বা ক্রিপ্টোতে কখনোই ঘটে না'
        ],
        correctIndex: 0,
        explainEn: 'Tracking what price actually does after the event is essential because a break can be a sustained breakout or a sweep that later expands through the level anyway.',
        explainBn: 'ইভেন্টের পরে প্রাইস বাস্তবে কী করে তা ট্র্যাক করা জরুরি; কারণ প্রতিটি ব্রেকই ম্যানিপুলেশন নয়—তা স্থায়ী ব্রেকআউট হতে পারে কিংবা সুইপ হওয়ার পরও প্রাইস আবার লেভেলটি ভেঙে বেরিয়ে যেতে পারে।'
      }
    ]
  },
  '13-liquidity-pools-ranges': {
    lessonId: 13,
    slug: '13-liquidity-pools-ranges',
    masteryPromptEn: 'Why do premium/discount labels change when the reference range changes?',
    masteryPromptBn: 'রেফারেন্স রেঞ্জ পরিবর্তন হলে কেন Premium এবং Discount-এর লেবেলও পরিবর্তিত হয়ে যায়?',
    completionItems: [
      {
        id: 'read-notes',
        en: 'Studied the primary resource and wrote summary notes in my own words',
        bn: 'প্রাথমিক রিসোর্সটি পড়েছি এবং নিজের ভাষায় সারাংশ নোট লিখেছি'
      },
      {
        id: 'lab-1',
        en: 'Marked 15 liquidity pools and 10 displacement voids on my charts',
        bn: 'চার্টে ১৫টি Liquidity Pool এবং ১০টি Displacement Void মার্ক করেছি'
      },
      {
        id: 'lab-2',
        en: 'Drew 10 dealing ranges with equilibrium (EQ), premium, and discount zones',
        bn: 'Equilibrium (EQ), Premium এবং Discount জোনসহ ১০টি Dealing Range এঁকেছি'
      },
      {
        id: 'lab-3',
        en: 'Compared supply/demand boxes with OB candidates across five examples',
        bn: 'পাঁচটি উদাহরণে Supply/Demand বক্সের সাথে সম্ভাব্য Order Block-এর তুলনা করেছি'
      },
      {
        id: 'mastery-quiz',
        en: 'Completed the Knowledge Check quiz and answered the Mastery Check without notes',
        bn: 'নলেজ চেক কুইজ সম্পন্ন করেছি এবং নোট না দেখে মাস্টারি চেকের উত্তর দিয়েছি'
      }
    ],
    questions: [
      {
        qEn: 'How do a liquidity pool, a liquidity void, and a discount zone differ conceptually?',
        qBn: 'ধারণাগতভাবে একটি Liquidity Pool, একটি Liquidity Void এবং একটি Discount Zone একে অপরের থেকে কীভাবে আলাদা?',
        optionsEn: [
          'They are three interchangeable synonyms for a three-candle Fair Value Gap',
          'A pool concerns clustered reference levels, a void describes a stretch of rapid price movement, and discount locates price within a chosen range',
          'A pool measures exact broker volume, a void measures spread widening, and discount measures company dividends',
          'Pools only occur at lows, voids only occur in uptrends, and discount only occurs above the 50% midpoint'
        ],
        optionsBn: [
          'এগুলো তিন-ক্যান্ডেলের Fair Value Gap বোঝানোর তিনটি সমার্থক শব্দ',
          'Pool হলো কাছাকাছি থাকা রেফারেন্স লেভেলের ক্লাস্টার, Void হলো প্রাইসের দ্রুত একমুখী মুভমেন্টের অংশ, আর Discount হলো নির্বাচিত রেঞ্জের ভেতর প্রাইসের আপেক্ষিক অবস্থান',
          'Pool ব্রোকারের প্রকৃত ভলিউম মাপে, Void স্প্রেড বৃদ্ধি মাপে এবং Discount কোম্পানির ডিভিডেন্ড মাপে',
          'Pool কেবল লোতে তৈরি হয়, Void কেবল আপট্রেন্ডে তৈরি হয় এবং Discount কেবল ৫০% মিডপয়েন্টের ওপরে থাকে'
        ],
        correctIndex: 1,
        explainEn: 'Even when they appear near each other, a liquidity pool refers to clustered levels, a void describes rapid range expansion, and discount describes relative position below a range midpoint.',
        explainBn: 'চার্টে কাছাকাছি দেখা গেলেও এগুলো আলাদা বিষয়: Pool হলো লেভেলের ক্লাস্টার, Void হলো দ্রুত প্রাইস মুভমেন্টের অংশ, আর Discount হলো নির্দিষ্ট রেঞ্জের মিডপয়েন্টের নিচে প্রাইসের অবস্থান।'
      },
      {
        qEn: 'To make identifying "equal highs" or "equal lows" in a liquidity pool reproducible during testing, what should you specify?',
        qBn: 'টেস্টিংয়ের সময় Liquidity Pool-এর "Equal Highs" বা "Equal Lows" বারবার একইভাবে চেনার (reproducible) জন্য কোন বিষয়টি সুনির্দিষ্ট করা উচিত?',
        optionsEn: [
          'Use a vague visual impression of "roughly the same height" without numeric limits',
          'State how close the levels must be (e.g., a tolerance expressed in ticks/pips) and when each pivot becomes confirmed',
          'Require that both highs occur at the exact same minute of the day',
          'Only mark equal highs after price has already swept them and reversed 500 pips'
        ],
        optionsBn: [
          'কোনো সংখ্যার হিসাব ছাড়াই খালি চোখে "মোটামুটি সমান" মনে হওয়ার ওপর নির্ভর করা',
          'লেভেল দুটি সর্বোচ্চ কত টিক বা পিপের মধ্যে থাকলে "সমান" ধরা হবে এবং প্রতিটি পিভট কখন কনফার্ম হচ্ছে তা সুনির্দিষ্টভাবে লিখে রাখা',
          'শর্ত দেওয়া যে দুটি হাইকেই দিনের ঠিক একই মিনিটে তৈরি হতে হবে',
          'প্রাইস লেভেলগুলো সুইপ করে ৫০০ পিপ ঘুরে যাওয়ার পর কেবল সেগুলোকে Equal Highs হিসেবে মার্ক করা'
        ],
        correctIndex: 1,
        explainEn: 'Expressing proximity tolerance in ticks/pips and recording when each swing confirms makes a liquidity pool definition reproducible rather than subjective.',
        explainBn: 'টিক বা পিপের হিসাবে দূরত্বের সীমা (tolerance) এবং পিভট কনফার্ম হওয়ার নিয়ম লিখে রাখলে "মোটামুটি সমান" বলার অস্পষ্টতা দূর হয় এবং তা বারবার যাচাই করা যায়।'
      },
      {
        qEn: 'In a confirmed dealing range anchored from 100 to 120, what is the equilibrium (EQ) price, and how are prices partitioned around it?',
        qBn: '১০০ থেকে ১২০ পর্যন্ত অ্যাঙ্কর করা একটি কনফার্মড Dealing Range-এ Equilibrium (EQ) প্রাইস কত, এবং এর চারপাশে প্রাইস কীভাবে ভাগ করা হয়?',
        optionsEn: [
          'EQ is 110; prices above 110 are in the premium half, and prices below 110 are in the discount half',
          'EQ is 110; prices above 110 are in discount, and prices below 110 are in premium',
          'EQ is 105; only prices below 100 are considered discount',
          'EQ is 115; prices between 100 and 115 are equilibrium'
        ],
        optionsBn: [
          'EQ হলো ১১০; ১১০-এর ওপরের প্রাইসগুলো Premium অংশে এবং ১১০-এর নিচের প্রাইসগুলো Discount অংশে অবস্থিত',
          'EQ হলো ১১০; ১১০-এর ওপরের প্রাইসগুলো Discount-এ এবং নিচের প্রাইসগুলো Premium-এ থাকে',
          'EQ হলো ১০৫; কেবল ১০০-এর নিচের প্রাইসগুলোকেই Discount ধরা হয়',
          'EQ হলো ১১৫; ১০০ থেকে ১১৫ পর্যন্ত পুরো অংশটিই ইকুইলিব্রিয়াম'
        ],
        correctIndex: 0,
        explainEn: 'For a range from 100 to 120, the 50% midpoint (equilibrium) is 110, placing prices above 110 in premium and prices below 110 in discount.',
        explainBn: '১০০ থেকে ১২০ রেঞ্জের ৫০% মধ্যবিন্দু বা Equilibrium হলো ১১০; তাই ১১০-এর ওপরের প্রাইসগুলো Premium এবং নিচের প্রাইসগুলো Discount অংশে পড়ে।'
      },
      {
        qEn: 'In the article’s numerical comparison, why is price 114 labeled "premium" in the 100–120 range (EQ 110) but "discount" in the 108–128 range (EQ 118)?',
        qBn: 'আর্টিকেলের গাণিতিক উদাহরণে ১১৪ প্রাইসটি কেন ১০০–১২০ রেঞ্জে (EQ ১১০) "Premium" কিন্তু ১০৮–১২৮ রেঞ্জে (EQ ১১৮) "Discount" হিসেবে চিহ্নিত হয়েছে?',
        optionsEn: [
          'Because the first calculation made an arithmetic error',
          'Because premium and discount describe relative position within the chosen anchor range, and 114 sits above 110 in the first range but below 118 in the second',
          'Because 114 is an institutional magic number that flips polarity every hour',
          'Because discount always means price is above the midpoint in a higher range'
        ],
        optionsBn: [
          'কারণ প্রথম হিসাবটিতে গাণিতিক ভুল ছিল',
          'কারণ Premium ও Discount নির্বাচিত রেঞ্জের সাপেক্ষে আপেক্ষিক অবস্থান বোঝায়—প্রথম রেঞ্জে ১১৪ ছিল ১১০-এর ওপরে, কিন্তু দ্বিতীয় রেঞ্জে তা ১১৮-এর নিচে চলে গেছে',
          'কারণ ১১৪ একটি ইনস্টিটিউশনাল ম্যাজিক নাম্বার যা প্রতি ঘণ্টায় দিক পরিবর্তন করে',
          'কারণ বড় রেঞ্জে মিডপয়েন্টের ওপরে থাকাকেই সবসময় Discount বলে'
        ],
        correctIndex: 1,
        explainEn: 'Premium and discount are relative positions determined entirely by the range anchors: 114 is above the 110 midpoint of 100–120, yet below the 118 midpoint of 108–128.',
        explainBn: 'Premium ও Discount সম্পূর্ণভাবে নির্বাচিত রেঞ্জের দুই প্রান্তের (anchor) ওপর নির্ভরশীল আপেক্ষিক অবস্থান: ১০০–১২০ রেঞ্জে ১১৪ মিডপয়েন্ট ১১০-এর ওপরে, কিন্তু ১০৮–১২৮ রেঞ্জে তা মিডপয়েন্ট ১১৮-এর নিচে।'
      },
      {
        qEn: 'How does the workbook distinguish a broader "liquidity void" from a specific Fair Value Gap (FVG)?',
        qBn: 'ওয়ার্কবুকে একটি সুনির্দিষ্ট Fair Value Gap (FVG) থেকে বড় আকারের "Liquidity Void"-কে কীভাবে আলাদা করা হয়েছে?',
        optionsEn: [
          'An FVG uses a specific three-candle non-overlap rule, whereas a liquidity void describes a broader rapid price run that may contain several FVGs or none',
          'A liquidity void is always smaller than a single candle’s wick, whereas an FVG spans at least 20 candles',
          'A liquidity void proves zero trading volume occurred on the exchange, whereas an FVG proves high volume',
          'There is no difference; every rapid price run must be marked using only the middle candle’s open price'
        ],
        optionsBn: [
          'FVG তিন-ক্যান্ডেলের ওভারল্যাপ না হওয়ার সুনির্দিষ্ট নিয়ম মেনে চলে, আর Liquidity Void হলো একটি বড় একমুখী দ্রুত প্রাইস রান যার ভেতর একাধিক FVG থাকতে পারে বা নাও থাকতে পারে',
          'Liquidity Void সবসময় এক ক্যান্ডেলের উইকের চেয়ে ছোট হয়, আর FVG অন্তত ২০টি ক্যান্ডেল জুড়ে থাকে',
          'Liquidity Void প্রমাণ করে এক্সচেঞ্জে শূন্য ভলিউম লেনদেন হয়েছে, আর FVG উচ্চ ভলিউম প্রমাণ করে',
          'কোনো পার্থক্য নেই; প্রতিটি দ্রুত প্রাইস রানকেই কেবল মাঝের ক্যান্ডেলের ওপেন প্রাইস দিয়ে মার্ক করতে হয়'
        ],
        correctIndex: 0,
        explainEn: 'An FVG is defined strictly by three candles with non-overlapping wicks, while a liquidity void describes a broader rapid price run that can contain multiple FVGs or none at all.',
        explainBn: 'FVG তিন ক্যান্ডেলের ওভারল্যাপ না হওয়া সীমানা দিয়ে সংজ্ঞায়িত হয়, কিন্তু Liquidity Void হলো প্রাইসের দ্রুত একমুখী রান যার ভেতর একাধিক FVG থাকতে পারে আবার একটিও না থাকতে পারে।'
      },
      {
        qEn: 'What caution does the article give about visually fast, large candles in a liquidity void?',
        qBn: 'Liquidity Void-এর ভেতর দেখতে বড় ও দ্রুত মনে হওয়া ক্যান্ডেলগুলোর ব্যাপারে আর্টিকেলে কী সতর্কবার্তা দেওয়া হয়েছে?',
        optionsEn: [
          'Do not infer measured trading volume solely from the visual speed or length of candles',
          'Always assume zero contracts were traded during a tall candle',
          'Fast candles guarantee that price will retrace 100% of the move within the next two bars',
          'Large candles should be deleted from the chart before drawing dealing ranges'
        ],
        optionsBn: [
          'ক্যান্ডেলগুলো খালি চোখে দেখতে বড় বা দ্রুত মনে হলেই কেবল তা দেখে প্রকৃত ট্রেডিং ভলিউম অনুমান করে নেবেন না',
          'লম্বা ক্যান্ডেল দেখলেই ধরে নিন সেখানে কোনো কন্ট্রাক্ট লেনদেন হয়নি',
          'দ্রুত ক্যান্ডেল গ্যারান্টি দেয় যে পরের দুই বারের মধ্যেই প্রাইস ১০০% রিট্রেস করবে',
          'Dealing Range আঁকার আগে বড় ক্যান্ডেলগুলো চার্ট থেকে মুছে ফেলা উচিত'
        ],
        correctIndex: 0,
        explainEn: 'Visual candle speed or height on a price chart does not measure actual traded volume.',
        explainBn: 'চার্টে ক্যান্ডেলের বাহ্যিক গতি বা উচ্চতা দেখে সেখানে প্রকৃতপক্ষে কত ট্রেডিং ভলিউম লেনদেন হয়েছে তা মাপা বা অনুমান করা উচিত নয়।'
      },
      {
        qEn: 'Does price entering the discount half of a dealing range automatically trigger a buy signal?',
        qBn: 'প্রাইস কোনো Dealing Range-এর Discount অংশে প্রবেশ করলেই কি তা স্বয়ংক্রিয়ভাবে বাই (Buy) সিগন্যাল দেয়?',
        optionsEn: [
          'Yes, you should buy immediately the moment price crosses 0.1 ticks below equilibrium',
          'No, premium and discount are relative positions within a range, not a valuation model or an automatic buy/sell instruction',
          'Yes, because price is mathematically forbidden from breaking the range low once in discount',
          'Only if you are trading on a 1-second chart without a stop loss'
        ],
        optionsBn: [
          'হ্যাঁ, প্রাইস Equilibrium-এর নিচে নামার সাথে সাথেই চোখ বন্ধ করে বাই নেওয়া উচিত',
          'না, Premium এবং Discount কেবল রেঞ্জের ভেতর প্রাইসের আপেক্ষিক অবস্থান নির্দেশ করে—এটি কোনো ভ্যালুয়েশন মডেল বা স্বয়ংক্রিয় বাই/সেল সিগন্যাল নয়',
          'হ্যাঁ, কারণ ডিসকাউন্টে ঢোকার পর প্রাইস গাণিতিকভাবে কখনোই রেঞ্জের লো ভাঙতে পারে না',
          'কেবল যদি আপনি স্টপ লস ছাড়া ১-সেকেন্ডের চার্টে ট্রেড করেন'
        ],
        correctIndex: 1,
        explainEn: 'Premium and discount merely state where price sits relative to a chosen range’s 50% midpoint; they are context filters, not standalone entry triggers.',
        explainBn: 'Premium এবং Discount কেবল নির্বাচিত রেঞ্জের ৫০% মিডপয়েন্টের সাপেক্ষে প্রাইসের আপেক্ষিক অবস্থান জানায়; এগুলো কনটেক্সট ফিল্টার, সরাসরি ট্রেড নেওয়ার সিগন্যাল নয়।'
      },
      {
        qEn: 'How does the lesson advise comparing basic supply/demand zones with order block (OB) candidates?',
        qBn: 'বেসিক Supply/Demand জোনের সাথে সম্ভাব্য Order Block (OB)-এর তুলনা করার ক্ষেত্রে লেসনে কী পরামর্শ দেওয়া হয়েছে?',
        optionsEn: [
          'Treat every candle preceding a move as both a supply/demand zone and an OB automatically without checking rules',
          'Compare their boundary conventions and prerequisites across examples rather than assuming every preceding area is identical',
          'Never draw supply/demand zones because they are illegal on TradingView',
          'Assume supply/demand zones only work on commodities and OBs only work on indices'
        ],
        optionsBn: [
          'কোনো নিয়ম যাচাই না করেই মুভের আগের প্রতিটি ক্যান্ডেলকে স্বয়ংক্রিয়ভাবে একই সাথে Supply/Demand এবং OB ধরে নেওয়া উচিত',
          'মুভের আগের যেকোনো ক্যান্ডেলকে স্বয়ংক্রিয়ভাবে দুটোই না ভেবে, উদাহরণের মাধ্যমে এদের সীমানা টানার পদ্ধতি ও পূর্বশর্তগুলোর তুলনা করা উচিত',
          'কখনোই Supply/Demand জোন আঁকা উচিত নয় কারণ TradingView-তে তা নিষিদ্ধ',
          'ধরে নেওয়া উচিত যে Supply/Demand কেবল কমোডিটিতে এবং OB কেবল ইনডেক্সে কাজ করে'
        ],
        correctIndex: 1,
        explainEn: 'Supply/demand zones and order blocks use different selection and boundary rules, so you should compare their boundaries and prerequisites rather than conflating them.',
        explainBn: 'Supply/Demand জোন এবং Order Block বাছাই ও সীমানা নির্ধারণের নিয়ম আলাদা; তাই এদের এক না ভেবে বাস্তব উদাহরণে এদের সীমানা ও পূর্বশর্তগুলো তুলনা করা উচিত।'
      },
      {
        qEn: 'Examine this educational scenario from the article: "Within the confirmed 100–120 range, I will observe a defined bullish POI below 110 after a qualifying interaction with a marked low. A close below the stated invalidation cancels the scenario." What is still required before this becomes a complete trade model?',
        qBn: 'আর্টিকেলের এই শিক্ষামূলক সিনারিওটি দেখুন: "কনফার্ম হওয়া ১০০–১২০ রেঞ্জের ভেতর, মার্ক করা একটি লো লেভেলে বৈধ ইন্টারঅ্যাকশন হওয়ার পর আমি ১১০-এর নিচে একটি নির্দিষ্ট বুলিশ POI খুঁজব। নির্ধারিত ইনভ্যালিডেশন লেভেলের নিচে ক্লোজ হলে সিনারিওটি বাতিল হবে।" এটি একটি পূর্ণাঙ্গ ট্রেড মডেল হওয়ার জন্য আর কী প্রয়োজন?',
        optionsEn: [
          'Nothing; that sentence alone specifies every execution detail needed',
          'Exact POI selection rules, entry confirmation criteria, and exit/target rules',
          'Removing the invalidation level so the trade can never be wrong',
          'Changing the equilibrium of 100–120 from 110 to 119'
        ],
        optionsBn: [
          'কিছুই না; ওই এক বাক্যেই ট্রেড এক্সিকিউশনের সমস্ত খুঁটিনাটি দেওয়া আছে',
          'সুনির্দিষ্ট POI নির্বাচনের নিয়ম, এন্ট্রি কনফার্মেশনের শর্ত এবং এক্সিট/টার্গেট রুল',
          'ইনভ্যালিডেশন লেভেলটি সরিয়ে ফেলা যাতে ট্রেডটি কখনো ভুল প্রমাণিত না হয়',
          '১০০–১২০ রেঞ্জের ইকুইলিব্রিয়াম ১১০ থেকে বদলে ১১৯ করে দেওয়া'
        ],
        correctIndex: 1,
        explainEn: 'While the scenario shows how range, liquidity interaction, discount, and invalidation fit together, a complete trade model still needs exact POI, confirmation, and exit rules.',
        explainBn: 'এই বাক্যটি বিভিন্ন শর্তের সমন্বয় দেখালেও একটি পূর্ণাঙ্গ ট্রেড মডেল হতে হলে এতে সুনির্দিষ্ট POI বাছাই, এন্ট্রি কনফার্মেশন এবং এক্সিট রুল যোগ করতে হবে।'
      },
      {
        qEn: 'When practicing dealing ranges on historical charts, what should you log first and what should you avoid doing afterward?',
        qBn: 'হিস্টোরিক্যাল চার্টে Dealing Range অনুশীলনের সময় শুরুতে কোনটি রেকর্ড করা উচিত এবং পরবর্তীতে কোন কাজটি এড়িয়ে চলা উচিত?',
        optionsEn: [
          'Record when the range anchors became confirmed, and avoid redrawing the range afterward simply to improve the explanation of a finished move',
          'Draw the range only after the entire trend is finished, and adjust the anchors until the 50% line touches the exact reversal wick',
          'Change the range anchors on every single 5-minute candle without logging why',
          'Only draw ranges where price never moved above or below equilibrium'
        ],
        optionsBn: [
          'রেঞ্জের অ্যাঙ্কর হাই/লো কখন কনফার্ম হয়েছিল তা আগে লিখে রাখা উচিত, এবং শুধু ঘটে যাওয়া মুভকে সুন্দরভাবে ব্যাখ্যা করার জন্য পরে সুবিধামতো রেঞ্জ নতুন করে আঁকা এড়িয়ে চলা উচিত',
          'পুরো ট্রেন্ড শেষ হওয়ার পর রেঞ্জ আঁকা উচিত এবং ৫০% লাইনটি ঠিক রিভার্সাল উইকে না ছোঁয়া পর্যন্ত অ্যাঙ্কর সরাতে থাকা উচিত',
          'কোনো কারণ লগ না করেই প্রতি ৫-মিনিটের ক্যান্ডেলে রেঞ্জের অ্যাঙ্কর বদলে ফেলা উচিত',
          'কেবল সেই রেঞ্জগুলোই আঁকা উচিত যেখানে প্রাইস কখনোই ইকুইলিব্রিয়ামের ওপরে বা নিচে যায়নি'
        ],
        correctIndex: 0,
        explainEn: 'You must lock the range-selection convention and log when anchors confirm; if the midpoint updates later, log the rule that permitted the update instead of retrofitting finished moves.',
        explainBn: 'রেঞ্জের অ্যাঙ্কর কখন কনফার্ম হয়েছে তা আগে লগ করতে হবে এবং পরে মিডপয়েন্ট বদলালে কোন নিয়মে আপডেট হলো তা লিখতে হবে—ঘটে যাওয়া মুভ মেলানোর জন্য ইচ্ছেমতো রেঞ্জ আঁকা যাবে না।'
      },
      {
        qEn: 'What does the "Watch for" warning in Lesson 13 emphasize when labeling zones on a chart?',
        qBn: 'চার্টে কোনো জোন লেবেল করার সময় লেসন ১৩-এর "Watch for" সতর্কবার্তায় কোন বিষয়টির ওপর জোর দেওয়া হয়েছে?',
        optionsEn: [
          'Do not claim a zone is "institutional" without evidence beyond price behavior',
          'Always label every FVG as a guaranteed central bank intervention zone',
          'Never use equilibrium on timeframes higher than 15 minutes',
          'Only trade liquidity pools that form on Fridays'
        ],
        optionsBn: [
          'প্রাইসের আচরণের বাইরে অতিরিক্ত কোনো প্রমাণ ছাড়া কোনো জোনকে "ইনস্টিটিউশনাল" বলে দাবি করবেন না',
          'প্রতিটি FVG-কেই নিশ্চিতভাবে সেন্ট্রাল ব্যাংকের ইন্টারভেনশন জোন হিসেবে লেবেল করুন',
          '১৫ মিনিটের ওপরের টাইমফ্রেমে কখনোই ইকুইলিব্রিয়াম ব্যবহার করবেন না',
          'কেবল শুক্রবারে তৈরি হওয়া লিকুইডিটি পুলেই ট্রেড করুন'
        ],
        correctIndex: 0,
        explainEn: 'Lesson 13 explicitly warns: "Do not claim a zone is \'institutional\' without evidence beyond price behavior."',
        explainBn: 'লেসন ১৩-তে স্পষ্ট সতর্ক করা হয়েছে: চার্টের প্রাইস আচরণের বাইরে সুনির্দিষ্ট প্রমাণ ছাড়া কোনো জোনকে "ইনস্টিটিউশনাল" বলে দাবি করবেন না।'
      },
      {
        qEn: 'What does labeling a cluster of equal highs or lows as a "liquidity pool" actually represent in your analysis?',
        qBn: 'সমান বা কাছাকাছি থাকা একাধিক হাই বা লোয়ের ক্লাস্টারকে "Liquidity Pool" হিসেবে লেবেল করা আপনার অ্যানালাইসিসে আসলে কী নির্দেশ করে?',
        optionsEn: [
          'A direct measurement of the exact dollar amount of resting limit and stop orders',
          'A hypothesis about possible order concentration around visible reference clusters, not a guaranteed stop measurement',
          'Proof that retail traders are 100% long and institutions are 100% short',
          'A guarantee that price will reverse within 5 pips of touching the cluster'
        ],
        optionsBn: [
          'সেখানে বসে থাকা লিমিট ও স্টপ অর্ডারের প্রকৃত ডলার পরিমাণের সরাসরি পরিমাপ',
          'দৃশ্যমান রেফারেন্স ক্লাস্টারের আশেপাশে সম্ভাব্য অর্ডার জমে থাকার একটি ধারণা (হাইপোথিসিস)—প্রকৃত অর্ডারের নিশ্চিত পরিমাপ নয়',
          'প্রমাণ যে রিটেল ট্রেডাররা ১০০% লং এবং ইনস্টিটিউশনগুলো ১০০% শর্ট পজিশনে আছে',
          'নিশ্চয়তা যে প্রাইস ক্লাস্টারটি ছোঁয়ার ৫ পিপের মধ্যে ঘুরে যাবেই'
        ],
        correctIndex: 1,
        explainEn: 'Marking equal highs/lows as a liquidity pool states a testable hypothesis about where orders might cluster; it does not measure actual resting orders.',
        explainBn: 'Equal Highs/Lows-কে Liquidity Pool বলা মূলত সেখানে সম্ভাব্য অর্ডার জমে থাকার একটি হাইপোথিসিস; এটি দিয়ে প্রকৃতপক্ষে কত অর্ডার বসে আছে তা মাপা যায় না।'
      },
      {
        qEn: 'If you mark a liquidity void on your chart, what three details should you explicitly state in your notes?',
        qBn: 'আপনি যদি চার্টে কোনো Liquidity Void মার্ক করেন, তবে আপনার নোটে কোন তিনটি তথ্য স্পষ্টভাবে উল্লেখ করা উচিত?',
        optionsEn: [
          'Its start price, its end price, and the formation convention you used to define it',
          'The name of the bank that caused the void, the exact volume, and the news headline',
          'Only the midpoint of the void without recording where it starts or ends',
          'The RSI value, the MACD histogram height, and the stochastic crossover'
        ],
        optionsBn: [
          'ভয়েডটির শুরুর প্রাইস (start), শেষের প্রাইস (end) এবং এটি চিহ্নিত করতে আপনি কোন গঠনের নিয়ম (formation convention) ব্যবহার করেছেন',
          'কোন ব্যাংক ভয়েডটি তৈরি করেছে তার নাম, প্রকৃত ভলিউম এবং নিউজের শিরোনাম',
          'শুরু বা শেষ কোথায় তা না লিখে কেবল ভয়েডটির মধ্যবিন্দু',
          'RSI-এর মান, MACD হিস্টোগ্রামের উচ্চতা এবং স্টকাস্টিক ক্রসওভার'
        ],
        correctIndex: 0,
        explainEn: 'Because a void is broader than a strict three-candle FVG, you must state its start, end, and formation convention so your markings remain consistent.',
        explainBn: 'যেহেতু Void তিন-ক্যান্ডেলের FVG-এর চেয়ে বিস্তৃত ধারণা, তাই ধারাবাহিকতা বজায় রাখতে এর শুরু, শেষ এবং গঠনের নিয়ম পরিষ্কারভাবে উল্লেখ করতে হয়।'
      },
      {
        qEn: 'Why should you add liquidity pools and voids AFTER locking and confirming the dealing range anchors in your practice workflow?',
        qBn: 'প্র্যাকটিস করার সময় Dealing Range-এর অ্যাঙ্করগুলো কনফার্ম ও স্থির করার পর সেখানে Liquidity Pool এবং Void যোগ করা উচিত কেন?',
        optionsEn: [
          'Because organizing the structural range and its equilibrium first establishes the objective framework (premium/discount) before evaluating internal zones and pools',
          'Because TradingView does not allow drawing rectangles before drawing Fibonacci tools',
          'Because liquidity pools disappear if drawn before equilibrium',
          'Because voids can only exist at the exact 50% equilibrium line'
        ],
        optionsBn: [
          'কারণ আগে স্ট্রাকচারাল রেঞ্জ ও তার Equilibrium ঠিক করে নিলে ভেতরের জোন ও পুলগুলো মূল্যায়নের আগেই একটি সুনির্দিষ্ট কাঠামো (Premium/Discount) তৈরি হয়ে যায়',
          'কারণ TradingView-তে ফিবোনাচি টুল আঁকার আগে বক্স আঁকা যায় না',
          'কারণ ইকুইলিব্রিয়াম আঁকার আগে লিকুইডিটি পুল আঁকলে তা অদৃশ্য হয়ে যায়',
          'কারণ ভয়েড কেবল ঠিক ৫০% ইকুইলিব্রিয়াম লাইনেই থাকতে পারে'
        ],
        correctIndex: 0,
        explainEn: 'Organizing the dealing range and its confirmed anchors first gives every internal pool, void, and POI a clear relative position around equilibrium.',
        explainBn: 'জোন আঁকার আগে পুরো Dealing Range এবং এর কনফার্মড অ্যাঙ্কর সাজিয়ে নিলে প্রতিটি পুল, ভয়েড ও POI প্রিমিয়াম নাকি ডিসকাউন্টে আছে তা নিরপেক্ষভাবে বোঝা যায়।'
      },
      {
        qEn: 'In a bearish scenario within a confirmed 200–250 dealing range (EQ 225), where would a premium-aligned bearish POI be located?',
        qBn: '২০০–২৫০-এর একটি কনফার্মড Dealing Range-এ (যার EQ ২২৫) বিয়ারিশ সিনারিওর ক্ষেত্রে Premium-এ থাকা একটি বিয়ারিশ POI কোথায় অবস্থিত হবে?',
        optionsEn: [
          'Between 200 and 225, below equilibrium',
          'Between 225 and 250, above the 50% equilibrium midpoint',
          'Below 190, completely outside the dealing range low',
          'Only at 200.00 exactly'
        ],
        optionsBn: [
          '২০০ থেকে ২২৫-এর মধ্যে, অর্থাৎ ইকুইলিব্রিয়ামের নিচে',
          '২২৫ থেকে ২৫০-এর মধ্যে, অর্থাৎ ৫০% ইকুইলিব্রিয়াম মিডপয়েন্টের ওপরে',
          '১৯০-এর নিচে, ডিলিং রেঞ্জের লোয়ের সম্পূর্ণ বাইরে',
          'কেবল ঠিক ২০০.০০ প্রাইসে'
        ],
        correctIndex: 1,
        explainEn: 'In a 200–250 range, equilibrium is 225; the premium half lies above 225 (between 225 and 250).',
        explainBn: '২০০–২৫০ রেঞ্জের ৫০% মিডপয়েন্ট বা Equilibrium হলো ২২৫; তাই এর ওপরের অংশ অর্থাৎ ২২৫ থেকে ২৫০ পর্যন্ত হলো Premium জোন।'
      }
    ]
  },
  '06-fvg-ifvg-order-block-imbalance': {
    lessonId: 6,
    slug: '06-fvg-ifvg-order-block-imbalance',
    masteryPromptEn: 'Can you identify the three candles creating an FVG without using an indicator?',
    masteryPromptBn: 'কোনো ইন্ডিকেটর ব্যবহার না করেই কি আপনি একটি FVG তৈরিকারী তিনটি ক্যান্ডেল চিহ্নিত করতে পারেন?',
    completionItems: [
      {
        id: 'read-notes',
        en: 'Studied the primary resource and wrote summary notes in my own words',
        bn: 'প্রাথমিক রিসোর্সটি পড়েছি এবং নিজের ভাষায় সারাংশ নোট লিখেছি'
      },
      {
        id: 'lab-1',
        en: 'Marked 20 FVGs (10 bullish and 10 bearish) and noted their fill or inversion outcomes',
        bn: '২০টি FVG (১০টি বুলিশ এবং ১০টি বিয়ারিশ) মার্ক করেছি এবং সেগুলোর Fill বা Inversion ফলাফল নোট করেছি'
      },
      {
        id: 'lab-2',
        en: 'Marked 10 OB candidates and distinguished each from nearby FVGs',
        bn: '১০টি সম্ভাব্য Order Block মার্ক করেছি এবং পাশের FVG থেকে সেগুলোর পার্থক্য চিহ্নিত করেছি'
      },
      {
        id: 'lab-3',
        en: 'Saved five counterexamples where an attractive zone failed',
        bn: 'দেখতে আকর্ষণীয় হওয়া সত্ত্বেও জোন ফেইল করেছে এমন পাঁচটি বিপরীত উদাহরণ (counterexample) সেভ করেছি'
      },
      {
        id: 'mastery-quiz',
        en: 'Completed the Knowledge Check quiz and answered the Mastery Check without notes',
        bn: 'নলেজ চেক কুইজ সম্পন্ন করেছি এবং নোট না দেখে মাস্টারি চেকের উত্তর দিয়েছি'
      }
    ],
    questions: [
      {
        qEn: 'What is the exact three-candle price condition required to form a bullish Fair Value Gap (FVG)?',
        qBn: 'একটি বুলিশ Fair Value Gap (FVG) তৈরি হওয়ার জন্য তিন-ক্যান্ডেলের সুনির্দিষ্ট প্রাইস শর্ত কোনটি?',
        optionsEn: [
          'Candle 3’s low is above Candle 1’s high, leaving a non-overlapping interval between them',
          'Candle 3’s high is below Candle 1’s low',
          'Candle 2’s open is equal to Candle 1’s close with no wicks on either candle',
          'All three candles must have identical highs and lows'
        ],
        optionsBn: [
          'তৃতীয় ক্যান্ডেলের Low প্রথম ক্যান্ডেলের High-এর ওপরে থাকবে, যা দুটি দামের মাঝখানে একটি ওভারল্যাপহীন ফাঁকা অংশ তৈরি করে',
          'তৃতীয় ক্যান্ডেলের High প্রথম ক্যান্ডেলের Low-এর নিচে থাকবে',
          'দ্বিতীয় ক্যান্ডেলের Open প্রথম ক্যান্ডেলের Close-এর সমান হবে এবং কোনো উইক থাকবে না',
          'তিনটি ক্যান্ডেলেরই High এবং Low হুবহু সমান হতে হবে'
        ],
        correctIndex: 0,
        explainEn: 'For a bullish three-candle FVG, candle 3’s low must stay above candle 1’s high; the interval between candle 1 high and candle 3 low defines the gap.',
        explainBn: 'বুলিশ তিন-ক্যান্ডেল FVG-এর ক্ষেত্রে তৃতীয় ক্যান্ডেলের Low প্রথম ক্যান্ডেলের High-এর ওপরে থাকতে হয়; এই দুই প্রাইসের মাঝখানের অংশই হলো গ্যাপ।'
      },
      {
        qEn: 'What is the exact three-candle price condition required to form a bearish Fair Value Gap (FVG)?',
        qBn: 'একটি বিয়ারিশ Fair Value Gap (FVG) তৈরি হওয়ার জন্য তিন-ক্যান্ডেলের সুনির্দিষ্ট প্রাইস শর্ত কোনটি?',
        optionsEn: [
          'Candle 3’s low is above Candle 1’s high',
          'Candle 3’s high is below Candle 1’s low, leaving a non-overlapping interval between them',
          'Candle 1 and Candle 3 must both be bullish candles with overlapping wicks',
          'Candle 2 must close above Candle 1’s high'
        ],
        optionsBn: [
          'তৃতীয় ক্যান্ডেলের Low প্রথম ক্যান্ডেলের High-এর ওপরে থাকবে',
          'তৃতীয় ক্যান্ডেলের High প্রথম ক্যান্ডেলের Low-এর নিচে থাকবে, যা এদের মাঝখানে ওভারল্যাপহীন গ্যাপ তৈরি করে',
          'প্রথম ও তৃতীয় উভয় ক্যান্ডেলকেই বুলিশ হতে হবে এবং তাদের উইক ওভারল্যাপ করতে হবে',
          'দ্বিতীয় ক্যান্ডেলকে অবশ্যই প্রথম ক্যান্ডেলের High-এর ওপরে ক্লোজ দিতে হবে'
        ],
        correctIndex: 1,
        explainEn: 'Reversing the inequality for a bearish FVG requires candle 3’s high to remain below candle 1’s low.',
        explainBn: 'বিয়ারিশ FVG-এর ক্ষেত্রে শর্তটি উল্টে যায়—এখানে তৃতীয় ক্যান্ডেলের High প্রথম ক্যান্ডেলের Low-এর নিচে থাকতে হয়।'
      },
      {
        qEn: 'In the article’s hypothetical bullish FVG where Candle 1 has a high of 100 and Candle 3 has a low of 103, what are the gap boundaries and the consequent encroachment (midpoint)?',
        qBn: 'আর্টিকেলের কাল্পনিক বুলিশ FVG উদাহরণে প্রথম ক্যান্ডেলের High 100 এবং তৃতীয় ক্যান্ডেলের Low 103 হলে, জোনটির সীমানা এবং মধ্যবিন্দু (Consequent Encroachment / Midpoint) কত?',
        optionsEn: [
          'Boundaries 100 to 103, with midpoint at 101.5',
          'Boundaries 98 to 103, with midpoint at 100.5',
          'Boundaries 100 to 101.5, with midpoint at 100.75',
          'Boundaries 101 to 102, with midpoint at 101.0'
        ],
        optionsBn: [
          'সীমানা 100 থেকে 103, এবং মধ্যবিন্দু (Midpoint) 101.5',
          'সীমানা 98 থেকে 103, এবং মধ্যবিন্দু 100.5',
          'সীমানা 100 থেকে 101.5, এবং মধ্যবিন্দু 100.75',
          'সীমানা 101 থেকে 102, এবং মধ্যবিন্দু 101.0'
        ],
        correctIndex: 0,
        explainEn: 'With candle 1 high at 100 and candle 3 low at 103, the FVG runs from 100 to 103 and its midpoint (consequent encroachment) is 101.5.',
        explainBn: 'প্রথম ক্যান্ডেলের High 100 এবং তৃতীয় ক্যান্ডেলের Low 103 হওয়ায় FVG জোনটি 100 থেকে 103 পর্যন্ত বিস্তৃত এবং এর মধ্যবিন্দু (CE) হলো 101.5।'
      },
      {
        qEn: 'When does a three-candle Fair Value Gap actually become knowable and confirmed in real time?',
        qBn: 'রিয়েল টাইমে তিন-ক্যান্ডেলের একটি Fair Value Gap ঠিক কখন নিশ্চিতভাবে জানা ও কনফার্ম করা সম্ভব হয়?',
        optionsEn: [
          'The instant Candle 2 expands strongly, before Candle 3 even opens',
          'Only when the third candle meets your completed-candle (close) rule',
          'During the first 10 seconds of Candle 3 forming',
          'Only after price returns and fills the gap five hours later'
        ],
        optionsBn: [
          'দ্বিতীয় ক্যান্ডেলটি বড় আকার ধারণ করার সাথে সাথেই, তৃতীয় ক্যান্ডেল ওপেন হওয়ার আগেই',
          'কেবল যখন তৃতীয় ক্যান্ডেলটি আপনার নির্ধারিত নিয়মে সম্পূর্ণভাবে Close হয়',
          'তৃতীয় ক্যান্ডেলটি তৈরি হওয়ার প্রথম ১০ সেকেন্ডের মধ্যে',
          'পাঁচ ঘণ্টা পর প্রাইস ফিরে এসে গ্যাপটি পূরণ করার পর'
        ],
        correctIndex: 1,
        explainEn: 'Because Candle 3 could still trade back to overlap Candle 1 before closing, the candidate gap becomes knowable only when Candle 3 completes.',
        explainBn: 'তৃতীয় ক্যান্ডেলটি ক্লোজ হওয়ার আগে যেকোনো মুহূর্তে ফিরে গিয়ে প্রথম ক্যান্ডেলকে ওভারল্যাপ করে ফেলতে পারে; তাই তৃতীয় ক্যান্ডেল সম্পূর্ণ ক্লোজ হওয়ার পরেই কেবল FVG কনফার্ম হয়।'
      },
      {
        qEn: 'Does a bullish FVG from 100 to 103 prove that zero transactions occurred between 100 and 103?',
        qBn: '100 থেকে 103 পর্যন্ত একটি বুলিশ FVG থাকা মানেই কি ওই পুরো প্রাইস অংশে কোনো লেনদেনই (transaction) হয়নি?',
        optionsEn: [
          'Yes, the exchange halted trading between 100 and 103',
          'No, price traveled through that interval during the middle candle, so it is not evidence that the interval had no transactions',
          'Yes, only weekend gaps and FVGs have zero transactions',
          'It proves that only buy limit orders were filled and zero sell orders existed'
        ],
        optionsBn: [
          'হ্যাঁ, 100 থেকে 103-এর মধ্যে এক্সচেঞ্জে লেনদেন বন্ধ ছিল',
          'না, মাঝখানের দ্বিতীয় ক্যান্ডেলটি তৈরি হওয়ার সময় প্রাইস এই জায়গার ভেতর দিয়েই গেছে, তাই ওই অংশে কোনো লেনদেন হয়নি এমন দাবি করা ভুল',
          'হ্যাঁ, উইকেন্ড গ্যাপ এবং FVG উভয় ক্ষেত্রেই শূন্য লেনদেন হয়',
          'এটি প্রমাণ করে যে সেখানে কেবল বাই লিমিট অর্ডার ফিল হয়েছে এবং কোনো সেল অর্ডার ছিল না'
        ],
        correctIndex: 1,
        explainEn: 'Price traded through the 100–103 interval during Candle 2, so an FVG simply marks non-overlap between Candle 1 and Candle 3 rather than an absence of transactions.',
        explainBn: 'মাঝখানের দ্বিতীয় ক্যান্ডেলটি তৈরি হওয়ার সময় প্রাইস 100–103 অংশের ভেতর দিয়েই গেছে; তাই FVG মানে প্রথম ও তৃতীয় ক্যান্ডেলের ওভারল্যাপ না থাকা, লেনদেন শূন্য হওয়া নয়।'
      },
      {
        qEn: 'Why does the article warn against calling an FVG, an iFVG, and an Order Block by the single blanket label "imbalance"?',
        qBn: 'FVG, iFVG এবং Order Block—এই সবগুলোকে একত্রে ঢালাওভাবে শুধু "Imbalance" বলে চালিয়ে দিতে আর্টিকেলে কেন নিষেধ করা হয়েছে?',
        optionsEn: [
          'Because calling all of them "imbalance" hides the specific formation, confirmation, and failure differences you need for testing',
          'Because Order Blocks never form near fast price moves',
          'Because the word "imbalance" is copyrighted by stock exchanges',
          'Because FVGs and Order Blocks always have identical upper and lower price boundaries'
        ],
        optionsBn: [
          'কারণ সবগুলোকে এক নামে ডাকলে ব্যাকটেস্ট করার জন্য এদের গঠন, কনফার্মেশন এবং ফেইল করার যে সূক্ষ্ম পার্থক্যগুলো জানা দরকার তা আড়াল হয়ে যায়',
          'কারণ দ্রুত প্রাইস মুভের আশেপাশে কখনোই Order Block তৈরি হয় না',
          'কারণ "Imbalance" শব্দটি স্টক এক্সচেঞ্জের কপিরাইট করা',
          'কারণ FVG এবং Order Block-এর ওপরের ও নিচের প্রাইস সীমানা সবসময় হুবহু এক হয়'
        ],
        correctIndex: 0,
        explainEn: 'Grouping distinct concepts under one vague label obscures their different formation rules, confirmation times, and invalidation criteria.',
        explainBn: 'তিনটি ভিন্ন ধারণাকে এক নামে চালিয়ে দিলে সেগুলোর তৈরি হওয়া, কনফার্ম হওয়া এবং ফেইল করার আলাদা নিয়মগুলো আড়াল হয়ে যায় যা সঠিক টেস্টিংয়ের জন্য অপরিহার্য।'
      },
      {
        qEn: 'How does an Inverse Fair Value Gap (iFVG) differ from a simple filled or traded-through FVG?',
        qBn: 'সাধারণভাবে পূরণ হওয়া (filled) বা ভেদ করে চলে যাওয়া একটি FVG থেকে Inverse Fair Value Gap (iFVG) কীভাবে আলাদা?',
        optionsEn: [
          'An iFVG is an FVG that was never touched by price',
          'An iFVG adds a role-change hypothesis after the original gap fails (e.g., a specified close through the gap followed by a qualifying retest from the opposite side)',
          'An iFVG forms only when three candles overlap completely',
          'Every FVG that is touched by 1 pip automatically becomes an iFVG'
        ],
        optionsBn: [
          'iFVG হলো এমন একটি FVG যা প্রাইস কখনোই স্পর্শ করেনি',
          'মূল FVG জোনটি ফেইল করার পর (যেমন নির্দিষ্ট নিয়মে গ্যাপের বাইরে ক্লোজ দেওয়া) বিপরীত দিক থেকে রিটেস্টের মাধ্যমে সেটির ভূমিকা বদলে যাওয়ার হাইপোথিসিসই হলো iFVG',
          'তিনটি ক্যান্ডেল সম্পূর্ণ ওভারল্যাপ করলেই কেবল iFVG তৈরি হয়',
          'প্রাইস কোনো FVG-কে ১ পিপ স্পর্শ করলেই তা সাথে সাথে iFVG হয়ে যায়'
        ],
        correctIndex: 1,
        explainEn: 'A fill simply describes price trading through the gap, whereas an iFVG requires defined failure/inversion conditions (such as closing through the gap) so the former gap flips its role.',
        explainBn: 'গ্যাপ পূরণ হওয়া মানে প্রাইস জোনটি অতিক্রম করা, আর iFVG হলো নির্দিষ্ট নিয়মে মূল গ্যাপটি ভেঙে যাওয়ার পর বিপরীত দিক থেকে রেফারেন্স জোন হিসেবে কাজ করার ধারণা।'
      },
      {
        qEn: 'Why must you record the original FVG formation time and the later failure/inversion time separately?',
        qBn: 'মূল FVG তৈরি হওয়ার সময় এবং পরে সেটি ফেইল বা ইনভার্ট হওয়ার সময় কেন আলাদাভাবে রেকর্ড করতে হবে?',
        optionsEn: [
          'Because a zone cannot be used as an inverse setup (iFVG) before its inversion conditions actually exist in real time',
          'Because brokers charge higher commissions on inverse setups',
          'Because an FVG and an iFVG always form on the exact same candle',
          'To prove that the original FVG never existed'
        ],
        optionsBn: [
          'কারণ ইনভার্সনের শর্তগুলো বাস্তবে পূরণ হওয়ার আগেই কোনো জোনকে সময়ের আগে ইনভার্স সেটআপ (iFVG) হিসেবে ব্যবহার করা যায় না',
          'কারণ ইনভার্স সেটআপে ব্রোকাররা বেশি কমিশন কাটে',
          'কারণ FVG এবং iFVG সবসময় একই ক্যান্ডেলে তৈরি হয়',
          'এটি প্রমাণ করার জন্য যে মূল FVG-টি কখনো তৈরিই হয়নি'
        ],
        correctIndex: 0,
        explainEn: 'Separating formation and failure timestamps prevents hindsight bias—you cannot treat a gap as an inverse zone before the close-through and inversion rules have occurred.',
        explainBn: 'গঠন ও ফেইল করার সময় আলাদাভাবে না লিখলে হিন্ডসাইট বায়াস তৈরি হয়; ইনভার্সনের শর্ত পূরণ হওয়ার আগেই কোনো গ্যাপকে ইনভার্স জোন হিসেবে ধরা যাবে না।'
      },
      {
        qEn: 'How does the workbook define a baseline Order Block (OB) candidate compared to an FVG?',
        qBn: 'FVG-এর তুলনায় ওয়ার্কবুকে একটি বেসলাইন সম্ভাব্য Order Block (OB)-কে কীভাবে সংজ্ঞায়িত করা হয়েছে?',
        optionsEn: [
          'The non-overlapping space between Candle 1 and Candle 3',
          'The last opposing candle before a clear directional expansion (a candle-based zone rather than a gap between candles)',
          'The first candle after a trend has completely finished',
          'Any doji candle that forms inside a quiet Asian session consolidation'
        ],
        optionsBn: [
          'প্রথম ও তৃতীয় ক্যান্ডেলের মাঝখানের ওভারল্যাপহীন ফাঁকা জায়গা',
          'স্পষ্ট ডিরেকশনাল এক্সপানশন বা বড় মুভের ঠিক আগের শেষ বিপরীত ক্যান্ডেল (অর্থাৎ গ্যাপের বদলে একটি ক্যান্ডেল-ভিত্তিক জোন)',
          'ট্রেন্ড পুরোপুরি শেষ হওয়ার পরের প্রথম ক্যান্ডেল',
          'শান্ত এশিয়ান সেশনের কনসোলিডেশনের ভেতর তৈরি হওয়া যেকোনো দোজি ক্যান্ডেল'
        ],
        correctIndex: 1,
        explainEn: 'While an FVG measures the non-overlap between candle 1 and candle 3, an order block candidate selects the last opposing candle prior to the directional expansion.',
        explainBn: 'FVG প্রথম ও তৃতীয় ক্যান্ডেলের মাঝখানের ফাঁকা অংশ নেয়, কিন্তু Order Block নেয় ডিরেকশনাল এক্সপানশনের ঠিক আগের শেষ বিপরীত ক্যান্ডেলটিকে।'
      },
      {
        qEn: 'In the article’s example, a hypothetical OB spans 98–101 while a nearby FVG spans 100–103 (intersecting at 100–101). Why does their overlap NOT automatically prove two independent confirmations?',
        qBn: 'আর্টিকেলের উদাহরণে একটি OB 98–101 এবং পাশের একটি FVG 100–103 পর্যন্ত বিস্তৃত (যাদের কমন অংশ 100–101)। এদের এই ওভারল্যাপ কেন স্বয়ংক্রিয়ভাবে দুটি স্বাধীন কনফার্মেশন প্রমাণ করে না?',
        optionsEn: [
          'Because 100–101 is mathematically outside both zones',
          'Because both zones share and depend on the exact same directional expansion move, so their qualification must still be recorded separately',
          'Because an OB and an FVG are never allowed to touch each other on valid charts',
          'Because overlapping zones automatically cancel each other out and become invalid'
        ],
        optionsBn: [
          'কারণ গাণিতিকভাবে 100–101 দুটি জোনেরই বাইরে অবস্থিত',
          'কারণ দুটি জোনই একই ডিরেকশনাল এক্সপানশন মুভ থেকে তৈরি হয়েছে; তাই এদের ওভারল্যাপ মানেই দুটি আলাদা স্বাধীন প্রমাণ নয় এবং প্রতিটির যোগ্যতা আলাদাভাবে রেকর্ড করতে হবে',
          'কারণ বৈধ চার্টে OB এবং FVG কখনো একে অপরকে স্পর্শ করতে পারে না',
          'কারণ দুটি জোন ওভারল্যাপ করলে তারা স্বয়ংক্রিয়ভাবে একে অপরকে বাতিল করে ইনভ্যালিড হয়ে যায়'
        ],
        correctIndex: 1,
        explainEn: 'Both the OB (98–101) and the FVG (100–103) were created by the same expansion leg, so their overlap at 100–101 is a shared byproduct rather than two statistically independent signals.',
        explainBn: 'OB (98–101) এবং FVG (100–103) উভয়ই একই এক্সপানশন মুভের ফল; তাই 100–101 অংশে ওভারল্যাপ থাকা মানেই দুটি সম্পূর্ণ স্বাধীন কনফার্মেশন নয়।'
      },
      {
        qEn: 'When tracking 20 FVG candidates during a fixed observation window, what outcome categories should you record, and how should you treat gaps that are never revisited?',
        qBn: 'নির্দিষ্ট পর্যবেক্ষণ সময়ের মধ্যে ২০টি সম্ভাব্য FVG ট্র্যাক করার সময় ফলাফলের কোন ক্যাটাগরিগুলো রেকর্ড করা উচিত, এবং যে গ্যাপগুলোতে প্রাইস কখনোই ফিরে আসেনি সেগুলোর কী করা উচিত?',
        optionsEn: [
          'Record full failure, partial revisit, midpoint touch, and no revisit—and never silently remove gaps that never offer an entry',
          'Only record gaps that produced a 3R winner and delete all untouched or failed gaps',
          'Extend the observation window to five years so every gap eventually gets touched',
          'Count untouched gaps as winning trades in your win-rate calculation'
        ],
        optionsBn: [
          'পুরোপুরি ফেইল করা, আংশিক রিভিজিট, মিডপয়েন্ট টাচ এবং কখনোই ফিরে না আসা (no revisit) রেকর্ড করা উচিত—এবং যে গ্যাপগুলোতে এন্ট্রি পাওয়া যায়নি সেগুলোকে চুপচাপ হিসাব থেকে বাদ দেওয়া যাবে না',
          'কেবল ৩R প্রফিট দেওয়া গ্যাপগুলো রেখে আনটাচড বা ফেইল করা সব গ্যাপ মুছে ফেলা উচিত',
          'পর্যবেক্ষণ সময় ৫ বছর বাড়িয়ে দেওয়া উচিত যাতে প্রতিটি গ্যাপই একসময় টাচ করে',
          'যে গ্যাপগুলোতে প্রাইস ফেরেনি সেগুলোকে উইন রেটের হিসাবে জয়ী ট্রেড হিসেবে ধরা উচিত'
        ],
        correctIndex: 0,
        explainEn: 'You must define outcome categories beforehand (partial touch, midpoint, full pass-through/failure, no revisit) and keep unrevisited gaps in your sample rather than silently dropping them.',
        explainBn: 'উদাহরণ সংগ্রহের আগেই ফলাফলের ক্যাটাগরি ঠিক করতে হবে এবং যে গ্যাপগুলোতে প্রাইস কখনোই ফিরে আসেনি সেগুলোকে চুপচাপ তালিকা থেকে বাদ না দিয়ে স্যাম্পলে রাখতে হবে।'
      },
      {
        qEn: 'According to Study Step 5 of Lesson 06, what comparison helps you evaluate the importance of directional context for FVGs?',
        qBn: 'লেসন ০৬-এর ৫ নম্বর স্টাডি স্টেপ অনুযায়ী, FVG-এর ক্ষেত্রে ডিরেকশনাল কনটেক্সটের গুরুত্ব বোঝার জন্য কোন তুলনাটি করতে বলা হয়েছে?',
        optionsEn: [
          'Compare five FVGs that align with higher-timeframe direction against five that form randomly mid-range',
          'Compare five FVGs on gold against five FVGs on agricultural futures',
          'Compare FVGs formed on Mondays against FVGs formed on Tuesdays',
          'Compare indicator-drawn FVGs against Fibonacci arcs'
        ],
        optionsBn: [
          'হায়ার-টাইমফ্রেম ডিরেকশনের সাথে সামঞ্জস্যপূর্ণ পাঁচটি FVG-এর সাথে রেঞ্জের মাঝখানে এলোমেলোভাবে তৈরি হওয়া পাঁচটি FVG-এর তুলনা করা',
          'গোল্ডের পাঁচটি FVG-এর সাথে এগ্রিকালচারাল ফিউচার্সের পাঁচটি FVG-এর তুলনা করা',
          'সোমবারে তৈরি হওয়া FVG-এর সাথে মঙ্গলবারে তৈরি হওয়া FVG-এর তুলনা করা',
          'ইন্ডিকেটর দিয়ে আঁকা FVG-এর সাথে ফিবোনাচি আর্কের তুলনা করা'
        ],
        correctIndex: 0,
        explainEn: 'Comparing five FVGs aligned with higher-timeframe direction against five random mid-range FVGs highlights how structural context affects zone behavior.',
        explainBn: 'হায়ার-টাইমফ্রেমের দিকের সাথে মিলে যাওয়া পাঁচটি FVG এবং রেঞ্জের মাঝখানে এলোমেলোভাবে তৈরি হওয়া পাঁচটি FVG তুলনা করলে জোনের ওপর কনটেক্সটের প্রভাব স্পষ্ট বোঝা যায়।'
      },
      {
        qEn: 'What does the term "consequent encroachment" (CE) refer to when analyzing a Fair Value Gap?',
        qBn: 'একটি Fair Value Gap বিশ্লেষণের সময় "Consequent Encroachment" (CE) বলতে কী বোঝানো হয়?',
        optionsEn: [
          'The 50% midpoint of the Fair Value Gap',
          'The full height of all three candles combined',
          'The stop loss placed 20 pips beyond Candle 2',
          'A gap that forms only during central bank interest rate decisions'
        ],
        optionsBn: [
          'Fair Value Gap জোনটির ৫০% মধ্যবিন্দু (Midpoint)',
          'তিনটি ক্যান্ডেলের সম্মিলিত সম্পূর্ণ উচ্চতা',
          'দ্বিতীয় ক্যান্ডেলের ২০ পিপ বাইরে বসানো স্টপ লস',
          'কেবল সেন্ট্রাল ব্যাংকের সুদের হার ঘোষণার সময় তৈরি হওয়া গ্যাপ'
        ],
        correctIndex: 0,
        explainEn: 'Consequent encroachment (CE) is the ICT/SMC term for the 50% midpoint of a Fair Value Gap or inefficiency.',
        explainBn: 'Consequent Encroachment (CE) হলো ICT/SMC পরিভাষায় একটি Fair Value Gap বা গ্যাপ জোনের ঠিক মাঝখানের বিন্দু বা ৫০% Midpoint।'
      },
      {
        qEn: 'According to the article, what is your "first useful result" when practicing FVG, iFVG, and OB identification?',
        qBn: 'আর্টিকেল অনুযায়ী FVG, iFVG এবং OB চিহ্নিত করার অনুশীলনে আপনার "প্রথম কার্যকরী সাফল্য" কোনটি?',
        optionsEn: [
          'Doubling a live trading account within the first week',
          'Consistent, reproducible identification of the zones and their rules before asking whether an entry rule adds value after costs',
          'Finding an indicator that enters trades automatically without human review',
          'Proving that every FVG holds 100% of the time'
        ],
        optionsBn: [
          'প্রথম সপ্তাহের মধ্যেই লাইভ ট্রেডিং অ্যাকাউন্ট দ্বিগুণ করে ফেলা',
          'ট্রেডিং খরচ বাদে কোনো এন্ট্রি রুল লাভজনক কি না তা দেখার আগে, প্রতিটি জোন ধারাবাহিকভাবে ও নির্ভুলভাবে একই নিয়মে চিনতে পারা',
          'মানুষের পর্যবেক্ষণ ছাড়াই অটোমেটিক ট্রেড নেয় এমন একটি ইন্ডিকেটর খুঁজে বের করা',
          'প্রমাণ করা যে প্রতিটি FVG ১০০% সময়ই কাজ করে'
        ],
        correctIndex: 1,
        explainEn: 'Consistent, reproducible identification of formations and boundaries is the essential first milestone before testing profitability after trading costs.',
        explainBn: 'কোনো এন্ট্রি রুল লাভজনক কি না তা পরীক্ষা করার আগে আপনার প্রথম কার্যকরী সাফল্য হলো প্রতিটি জোন ও তার সীমানা বারবার একই নিয়মে নির্ভুলভাবে চিনতে পারা।'
      },
      {
        qEn: 'What are the three anatomical parts of an Order Block candidate candle that Lesson 06 asks you to identify?',
        qBn: 'লেসন ০৬-এ একটি সম্ভাব্য Order Block ক্যান্ডেলের কোন তিনটি অংশ আলাদাভাবে চিহ্নিত করতে বলা হয়েছে?',
        optionsEn: [
          'Its body, its wick, and its midpoint',
          'Its volume profile, its delta footprint, and its tick speed',
          'Candle 1 high, Candle 2 close, and Candle 3 low',
          'Only the closing price of the candle'
        ],
        optionsBn: [
          'ক্যান্ডেলটির বডি (body), উইক (wick) এবং মধ্যবিন্দু (midpoint)',
          'ক্যান্ডেলটির ভলিউম প্রোফাইল, ডেল্টা ফুটপ্রিন্ট এবং টিক স্পিড',
          'প্রথম ক্যান্ডেলের হাই, দ্বিতীয় ক্যান্ডেলের ক্লোজ এবং তৃতীয় ক্যান্ডেলের লো',
          'কেবল ক্যান্ডেলটির ক্লোজিং প্রাইস'
        ],
        correctIndex: 0,
        explainEn: 'Study step 4 instructs you to locate the last opposing candle before directional expansion and identify its body, wick, and midpoint.',
        explainBn: 'লেসনের ৪ নম্বর ধাপে ডিরেকশনাল এক্সপানশনের আগের শেষ বিপরীত ক্যান্ডেলটি খুঁজে বের করে তার বডি, উইক এবং মিডপয়েন্ট চিহ্নিত করতে বলা হয়েছে।'
      }
    ]
  }
};
