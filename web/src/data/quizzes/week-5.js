export const WEEK_5_QUIZZES = {
  '15-daily-bias': {
    lessonId: 15,
    slug: '15-daily-bias',
    masteryPromptEn: 'What evidence would make you mark the day as neutral or invalidate a bullish scenario?',
    masteryPromptBn: 'কোন ধরনের প্রমাণ থাকলে আপনি একটি দিনকে নিউট্রাল (Neutral) হিসেবে চিহ্নিত করবেন অথবা একটি বুলিশ সিনারিওকে বাতিল (Invalidate) বলে গণ্য করবেন?',
    completionItems: [
      {
        id: 'read-notes',
        en: 'Read the companion article and studied the primary resources, writing summary notes in my own words.',
        bn: 'সহায়ক আর্টিকেল ও মূল রিসোর্সগুলো পড়েছি এবং নিজের ভাষায় সারসংক্ষেপ নোট লিখেছি।'
      },
      {
        id: 'lab-1',
        en: 'Chart Lab 1: Prepared pre-session daily-bias notes for 10 historical sessions before viewing the outcome.',
        bn: 'চার্ট ল্যাব ১: ফলাফল দেখার আগেই ১০টি ঐতিহাসিক সেশনের জন্য সেশন-পূর্ব ডেইলি বায়াস নোট প্রস্তুত করেছি।'
      },
      {
        id: 'lab-2',
        en: 'Chart Lab 2: Recorded direction (bullish/bearish/neutral), liquidity target, invalidation level, and confidence (low/medium/high) for each note.',
        bn: 'চার্ট ল্যাব ২: প্রতিটি নোটে ডিরেকশন (বুলিশ/বেয়ারিশ/নিউট্রাল), লিকুইডিটি টার্গেট, ইনভ্যালিডেশন লেভেল এবং কনফিডেন্স (লো/মিডিয়াম/হাই) রেকর্ড করেছি।'
      },
      {
        id: 'lab-3',
        en: 'Chart Lab 3: Scored directional accuracy and target completion independently at the end of each day without altering the original pre-session note.',
        bn: 'চার্ট ল্যাব ৩: সেশন শুরুর মূল নোট পরিবর্তন না করে দিন শেষে ডিরেকশন এবং টার্গেট পূরণের বিষয়টি আলাদাভাবে স্কোরিং করেছি।'
      },
      {
        id: 'mastery-quiz',
        en: 'Completed the Knowledge Check quiz and answered the Mastery Check prompt without looking at notes.',
        bn: 'নলেজ চেক কুইজ সম্পন্ন করেছি এবং নোট না দেখে মাস্টারি চেক প্রশ্নের উত্তর দিয়েছি।'
      }
    ],
    questions: [
      {
        qEn: 'According to Lesson 15, when is a daily bias most useful to a trader?',
        qBn: 'লেসন ১৫ অনুযায়ী, একজন ট্রেডারের কাছে ডেইলি বায়াস (Daily Bias) কখন সবচেয়ে বেশি কার্যকর হয়?',
        optionsEn: [
          'When it is treated as an unchangeable prediction that must be defended all day',
          'When it prepares you for a decision before the session unfolds as a testable hypothesis with a clear invalidation condition',
          'When it guarantees that price will reach the stated liquidity pool before the daily close',
          'When it is written after the London session has already completed its main expansion'
        ],
        optionsBn: [
          'যখন এটিকে এমন এক অপরিবর্তনীয় ভবিষ্যদ্বাণী ধরা হয় যা সারাদিন যেকোনো মূল্যে রক্ষা করতে হবে',
          'যখন এটি সেশন শুরু হওয়ার আগেই স্পষ্ট ইনভ্যালিডেশন শর্তসহ একটি যাচাইযোগ্য হাইপোথিসিস হিসেবে সিদ্ধান্ত নিতে প্রস্তুত করে',
          'যখন এটি গ্যারান্টি দেয় যে ডেইলি ক্লোজের আগেই প্রাইস নির্ধারিত লিকুইডিটি পুলে পৌঁছাবে',
          'যখন লন্ডন সেশনের মূল এক্সপ্যানশন শেষ হওয়ার পর এটি লেখা হয়'
        ],
        correctIndex: 1,
        explainEn: 'Daily bias is a testable pre-session hypothesis that states what setup you are willing to study and what price condition invalidates it, rather than a prediction to defend.',
        explainBn: 'ডেইলি বায়াস হলো সেশন শুরুর আগের একটি যাচাইযোগ্য হাইপোথিসিস যা বলে দেয় আপনি কোন সেটআপ খুঁজবেন এবং কোন শর্তে তা বাতিল হবে—এটি অন্ধভাবে রক্ষা করার কোনো ভবিষ্যদ্বাণী নয়।'
      },
      {
        qEn: 'What are the three core directional classifications allowed when preparing a pre-session daily bias note?',
        qBn: 'সেশন শুরুর আগে ডেইলি বায়াস নোট প্রস্তুত করার সময় অনুমোদিত তিনটি মূল ডিরেকশনাল ক্লাসিফিকেশন কী কী?',
        optionsEn: [
          'Long-only, Short-only, or Scalping',
          'Bullish, Bearish, or Neutral',
          'Accumulation, Manipulation, or Distribution',
          'High risk, Medium risk, or Low risk'
        ],
        optionsBn: [
          'লং-অনলি, শর্ট-অনলি অথবা স্ক্যাল্পিং',
          'বুলিশ (Bullish), বেয়ারিশ (Bearish) অথবা নিউট্রাল (Neutral)',
          'অ্যাকুমুলেশন, ম্যানিপুলেশন অথবা ডিস্ট্রিবিউশন',
          'হাই রিস্ক, মিডিয়াম রিস্ক অথবা লো রিস্ক'
        ],
        correctIndex: 1,
        explainEn: 'The workbook explicitly requires stating a bullish, bearish, or neutral scenario, recognizing that a neutral day is fully allowed when evidence is insufficient.',
        explainBn: 'ওয়ার্কবুকে স্পষ্টভাবে বুলিশ, বেয়ারিশ অথবা নিউট্রাল সিনারিও উল্লেখ করতে বলা হয়েছে এবং প্রমাণ অপর্যাপ্ত থাকলে নিউট্রাল থাকা সম্পূর্ণ অনুমোদিত।'
      },
      {
        qEn: 'In the article’s hypothetical plan, yesterday’s high is 120, yesterday’s low is 100, and current price is 108. If your rule states that a completed context candle must close below 100 to invalidate the bullish bias, what does an execution-timeframe wick to 99.8 mean?',
        qBn: 'আর্টিকেলের কাল্পনিক প্ল্যানে গতকালের হাই 120, লো 100 এবং বর্তমান প্রাইস 108। আপনার নিয়মে যদি লেখা থাকে বুলিশ বায়াস ইনভ্যালিড হতে কনটেক্সট ক্যান্ডেলকে 100-এর নিচে ক্লোজ হতে হবে, তবে এক্সিকিউশন টাইমফ্রেমে 99.8 পর্যন্ত একটি উইক (Wick) তৈরি হওয়ার অর্থ কী?',
        optionsEn: [
          'The context-level bullish bias is immediately invalidated by the wick',
          'The wick to 99.8 does not meet the close-below-100 invalidation rule by itself, though an individual execution setup may still fail',
          'You must double your position size immediately at 99.8',
          'The target automatically shifts from 120 to 140'
        ],
        optionsBn: [
          'উইকটির কারণেই কনটেক্সট লেভেলের বুলিশ বায়াস সাথে সাথে বাতিল হয়ে যাবে',
          '99.8-এর উইকটি নিজে থেকে 100-এর নিচে ক্লোজ হওয়ার ইনভ্যালিডেশন শর্ত পূরণ করে না, তবে এক্সিকিউশন টাইমফ্রেমের নিজস্ব কোনো সেটআপ ব্যর্থ হতে পারে',
          '99.8 লেভেলে সাথে সাথে পজিশন সাইজ দ্বিগুণ করতে হবে',
          'টার্গেট স্বয়ংক্রিয়ভাবে 120 থেকে বদলে 140 হয়ে যাবে'
        ],
        correctIndex: 1,
        explainEn: 'If the written rule requires a completed context candle close below 100, a wick to 99.8 on the execution timeframe does not satisfy that context invalidation rule by itself.',
        explainBn: 'লিখিত নিয়মে যদি কনটেক্সট ক্যান্ডেলকে 100-এর নিচে ক্লোজ হতে বলা হয়, তবে এক্সিকিউশন টাইমফ্রেমে 99.8 পর্যন্ত উইক তৈরি হওয়া নিজে থেকে সেই কনটেক্সট বায়াস বাতিলের শর্ত পূরণ করে না।'
      },
      {
        qEn: 'What is the fundamental difference between a daily bias "objective" and "invalidation"?',
        qBn: 'ডেইলি বায়াসের "অবজেক্টিভ (Objective)" এবং "ইনভ্যালিডেশন (Invalidation)"-এর মধ্যে মৌলিক পার্থক্য কী?',
        optionsEn: [
          'They are two names for the exact same price level',
          'The objective is the proposed destination (draw on liquidity), whereas invalidation is the specific price event that cancels the directional hypothesis',
          'The objective is used only on losing trades, whereas invalidation is used only on winning trades',
          'Invalidation is set above price in a bullish scenario, while the objective is set below price'
        ],
        optionsBn: [
          'দুটি মূলত একই প্রাইস লেভেলের দুটি ভিন্ন নাম',
          'অবজেক্টিভ হলো প্রাইসের প্রস্তাবিত গন্তব্য (লিকুইডিটি টার্গেট), আর ইনভ্যালিডেশন হলো সেই সুনির্দিষ্ট প্রাইস ইভেন্ট যা পুরো ডিরেকশনাল হাইপোথিসিসকে বাতিল করে দেয়',
          'অবজেক্টিভ কেবল লস ট্রেডে ব্যবহৃত হয় আর ইনভ্যালিডেশন কেবল প্রফিট ট্রেডে ব্যবহৃত হয়',
          'বুলিশ সিনারিওতে ইনভ্যালিডেশন প্রাইসের ওপরে থাকে এবং অবজেক্টিভ প্রাইসের নিচে থাকে'
        ],
        correctIndex: 1,
        explainEn: 'An objective defines where price is hypothesized to draw toward, while invalidation defines the price condition that proves the hypothesis wrong.',
        explainBn: 'অবজেক্টিভ নির্দেশ করে প্রাইস কোন গন্তব্যের দিকে যেতে পারে, আর ইনভ্যালিডেশন নির্ধারণ করে কোন প্রাইস ইভেন্ট ঘটলে হাইপোথিসিসটি ভুল বলে প্রমাণিত হবে।'
      },
      {
        qEn: 'How should a "neutral" daily classification be used in your trading journal?',
        qBn: 'আপনার ট্রেডিং জার্নালে "নিউট্রাল (Neutral)" ডেইলি ক্লাসিফিকেশন কীভাবে ব্যবহার করা উচিত?',
        optionsEn: [
          'Assign it only at the end of the day after a session turns out choppy and unprofitable',
          'Define operational reasons in advance (e.g., conflicting context rules, unconfirmed range, scheduled event exclusion, or no clear objective) and record it at decision time',
          'Never use neutral because the market always moves up or down eventually',
          'Use it to justify taking random trades in both directions without rules'
        ],
        optionsBn: [
          'সেশন চপি এবং অলাভজনক প্রমাণিত হওয়ার পর কেবল দিনের শেষে এটি ব্যবহার করা উচিত',
          'কখন প্রমাণ অপর্যাপ্ত হবে তা আগে থেকেই সংজ্ঞায়িত করে (যেমন পরস্পরবিরোধী কনটেক্সট, আনকনফার্মড রেঞ্জ, নিউজ বিরতি বা অস্পষ্ট টার্গেট) সিদ্ধান্ত নেওয়ার সময়েই রেকর্ড করা উচিত',
          'কখনোই নিউট্রাল ব্যবহার করা উচিত নয় কারণ মার্কেট শেষ পর্যন্ত ওপরে বা নিচে যাবেই',
          'কোনো নিয়ম ছাড়া উভয় দিকে এলোমেলো ট্রেড নেওয়ার অজুহাত হিসেবে এটি ব্যবহার করা উচিত'
        ],
        correctIndex: 1,
        explainEn: 'Neutral must be operationalized with clear criteria at the planning cutoff time rather than used retroactively as an excuse after a choppy session.',
        explainBn: 'সেশন চপি হওয়ার পর অজুহাত হিসেবে ব্যবহার না করে, সুনির্দিষ্ট মানদণ্ডের ভিত্তিতে প্ল্যানিংয়ের সময়েই নিউট্রাল বায়াস রেকর্ড করতে হবে।'
      },
      {
        qEn: 'When writing your directional hypothesis as "Under these conditions, I will look for the model’s qualifying upward setup," what does this statement imply?',
        qBn: 'আপনি যখন ডিরেকশনাল হাইপোথিসিস হিসেবে লেখেন "এই শর্তগুলো বজায় থাকলে আমি আমার মডেলের নিয়ম অনুযায়ী আপওয়ার্ড সেটআপ খুঁজব", তখন এর অর্থ কী দাঁড়ায়?',
        optionsEn: [
          'You must enter a buy order at market open regardless of lower-timeframe action',
          'It states what you are willing to study under specified conditions; it does not require an immediate entry or imply that every local pullback is wrong',
          'Any single red 1-minute candle proves the entire daily analysis was flawed',
          'The market is mathematically guaranteed to close higher than it opened'
        ],
        optionsBn: [
          'লোয়ার টাইমফ্রেমে যাই ঘটুক না কেন, মার্কেট ওপেনেই আপনাকে বাই অর্ডার নিতে হবে',
          'এটি নির্দেশ করে নির্দিষ্ট শর্তের অধীনে আপনি কোন ধরনের সেটআপ পর্যবেক্ষণ করতে প্রস্তুত; এর মানে সাথে সাথে এন্ট্রি নেওয়া নয় বা যেকোনো ছোট পুলব্যাক মানেই ধারণা ভুল হওয়া নয়',
          '১-মিনিটের একটি লাল ক্যান্ডেল তৈরি হলেই প্রমাণিত হয় পুরো ডেইলি অ্যানালাইসিস ভুল ছিল',
          'মার্কেট গাণিতিকভাবে ওপেনিং প্রাইসের ওপরে ক্লোজ হতে বাধ্য'
        ],
        correctIndex: 1,
        explainEn: 'A hypothesis frames which qualifying setups you will look for while context holds; it does not demand an immediate entry or outlaw normal intraday pullbacks.',
        explainBn: 'একটি হাইপোথিসিস নির্ধারণ করে দেয় কনটেক্সট বজায় থাকলে আপনি কোন বৈধ সেটআপ খুঁজবেন; এটি তাৎক্ষণিক এন্ট্রি নিতে বাধ্য করে না বা স্বাভাবিক পুলব্যাককে অস্বীকার করে না।'
      },
      {
        qEn: 'At the end of a session, which three distinct questions does the companion article say you should score separately?',
        qBn: 'সেশন শেষে সহায়ক আর্টিকেল অনুযায়ী কোন তিনটি ভিন্ন প্রশ্ন আলাদাভাবে স্কোর বা মূল্যায়ন করা উচিত?',
        optionsEn: [
          'Whether the hypothesis was supported, whether an eligible entry occurred, and whether you followed the plan',
          'Total pips gained, win rate percentage, and broker commission paid',
          'Asian range height, London volume, and New York close price',
          'How fast you drew the chart, how many indicators were used, and how many trades you took'
        ],
        optionsBn: [
          'হাইপোথিসিসটি মার্কেটে সমর্থন পেয়েছে কি না, নিয়ম অনুযায়ী কোনো বৈধ এন্ট্রি তৈরি হয়েছিল কি না এবং আপনি প্ল্যান মেনে চলেছেন কি না',
          'মোট কত পিপস লাভ হলো, উইন রেট কত শতাংশ এবং ব্রোকার কমিশন কত গেল',
          'এশিয়ান রেঞ্জের উচ্চতা, লন্ডন ভলিউম এবং নিউ ইয়র্ক ক্লোজ প্রাইস',
          'কত দ্রুত চার্ট এঁকেছেন, কয়টি ইন্ডিকেটর ব্যবহার করেছেন এবং কয়টি ট্রেড নিয়েছেন'
        ],
        correctIndex: 0,
        explainEn: 'Evaluating directional support, setup eligibility, and rule adherence separately prevents confusing a favorable move with no entry—or a rule-following loss—with bad process.',
        explainBn: 'ডিরেকশনাল সমর্থন, বৈধ এন্ট্রির উপস্থিতি এবং নিয়ম মেনে চলা—এই তিনটি আলাদাভাবে মূল্যায়ন করলে এন্ট্রি না দেওয়া সঠিক মুভ বা নিয়ম মেনে হওয়া লসকে ভুল প্রক্রিয়ার সাথে গুলিয়ে ফেলা হয় না।'
      },
      {
        qEn: 'Why should you keep a separate judgment for "reasoning quality" when reviewing your daily bias journal?',
        qBn: 'ডেইলি বায়াস জার্নাল রিভিউ করার সময় "যৌক্তিক বিশ্লেষণের মান (Reasoning Quality)"-এর জন্য আলাদা মূল্যায়ন রাখা কেন জরুরি?',
        optionsEn: [
          'To make losing trades look like wins in your equity curve',
          'To distinguish a weak decision that happened to win by luck from a well-specified process that encountered an ordinary loss',
          'Because reasoning quality replaces the need for stop losses',
          'So you can rewrite the original pre-session note to match the closing candle'
        ],
        optionsBn: [
          'ইকুইটি কার্ভে লস ট্রেডগুলোকে প্রফিট হিসেবে দেখানোর জন্য',
          'দুর্বল সিদ্ধান্ত হয়েও ভাগ্যগুণে জিতে যাওয়া ট্রেড এবং সুশৃঙ্খল প্রক্রিয়ার মধ্য দিয়ে আসা স্বাভাবিক লসের মধ্যে পার্থক্য করার জন্য',
          'কারণ যৌক্তিক বিশ্লেষণের মান থাকলে আর স্টপ লসের প্রয়োজন হয় না',
          'যাতে ক্লোজিং ক্যান্ডেলের সাথে মিলিয়ে সেশন শুরুর মূল নোটটি নতুন করে লেখা যায়'
        ],
        correctIndex: 1,
        explainEn: 'Checking whether anchors were known, counterevidence acknowledged, and invalidation kept fixed separates lucky weak decisions from sound processes experiencing normal variance.',
        explainBn: 'অ্যাঙ্কর জানা ছিল কি না, বিপরীত প্রমাণ বিবেচনা করা হয়েছিল কি না এবং ইনভ্যালিডেশন স্থির ছিল কি না তা যাচাই করলে ভাগ্যগুণে জেতা দুর্বল সিদ্ধান্তকে সঠিক প্রক্রিয়া থেকে আলাদা করা যায়।'
      },
      {
        qEn: 'What rule applies to public daily-bias frameworks like TTrades’ mechanical candle/close conventions when you are testing your own strategy?',
        qBn: 'নিজের স্ট্র্যাটেজি টেস্ট করার সময় TTrades-এর মেকানিক্যাল ডেইলি বায়াস ফ্রেমওয়ার্কের মতো পাবলিক নিয়মগুলোর ক্ষেত্রে কোন সতর্কতা মানতে হবে?',
        optionsEn: [
          'Silently mix their rules into the middle of your existing backtest sample whenever a trade loses',
          'Treat their candle and confirmation conventions as that educator’s specific model, and do not silently add them into a different strategy’s test sample',
          'Assume all educators use the exact same rules for daily bias',
          'Use them without checking whether they fit your instrument or timeframe'
        ],
        optionsBn: [
          'কোনো ট্রেডে লস হলেই নীরবে সেই নিয়মগুলো আপনার চলমান ব্যাকটেস্ট স্যাম্পলের মাঝখানে ঢুকিয়ে দিন',
          'তাদের ক্যান্ডেল ও কনফার্মেশন নিয়মগুলোকে ওই এডুকেটরের নিজস্ব মডেল হিসেবেই দেখুন এবং না বুঝে হুট করে অন্য স্ট্র্যাটেজির টেস্ট স্যাম্পলে যোগ করবেন না',
          'ধরে নিন সব এডুকেটর ডেইলি বায়াসের জন্য হুবহু একই নিয়ম ব্যবহার করেন',
          'আপনার ইনস্ট্রুমেন্ট বা টাইমফ্রেমের সাথে মানানসই কি না তা যাচাই না করেই সেগুলো ব্যবহার করুন'
        ],
        correctIndex: 1,
        explainEn: 'Each public educator’s rules form a specific model; mixing them silently into another strategy’s test sample contaminates your research.',
        explainBn: 'প্রত্যেক এডুকেটরের নিয়ম একটি নির্দিষ্ট মডেলের অংশ; সেগুলোকে নীরবে অন্য কোনো স্ট্র্যাটেজির টেস্ট স্যাম্পলে মিশিয়ে ফেললে আপনার রিসার্চের ফলাফল ত্রুটিপূর্ণ হয়ে পড়বে।'
      },
      {
        qEn: 'Which starting references does Lesson 15 Step 1 instruct you to mark first when forming a daily bias?',
        qBn: 'ডেইলি বায়াস তৈরির শুরুতে লেসন ১৫-এর প্রথম ধাপে (Step 1) কোন রেফারেন্সগুলো সবার আগে মার্ক করতে বলা হয়েছে?',
        optionsEn: [
          '1-minute fair value gaps from the Asian session only',
          'Daily/4H highs and lows, recent closes, and larger visible liquidity references',
          'Social media sentiment polls and retail trader positioning ratios',
          'Only the 5-minute moving average crossover'
        ],
        optionsBn: [
          'কেবল এশিয়ান সেশনের ১-মিনিটের ফেয়ার ভ্যালু গ্যাপ',
          'ডেইলি/৪-ঘণ্টা (Daily/4H) চার্টের হাই ও লো, সাম্প্রতিক ক্যান্ডেল ক্লোজ এবং দৃশ্যমান বড় লিকুইডিটি রেফারেন্সসমূহ',
          'সোশ্যাল মিডিয়ার সেন্টিমেন্ট পোল এবং রিটেইল ট্রেডারদের পজিশনিং রেশিও',
          'কেবল ৫-মিনিটের মুভিং অ্যাভারেজ ক্রসওভার'
        ],
        correctIndex: 1,
        explainEn: 'Step 1 begins with higher-timeframe context: daily/4H highs and lows, recent closes, and larger visible liquidity pools.',
        explainBn: 'প্রথম ধাপে হায়ার টাইমফ্রেম কনটেক্সট দিয়ে শুরু করতে হয়: ডেইলি/৪-ঘণ্টার হাই ও লো, সাম্প্রতিক ক্লোজ এবং বড় দৃশ্যমান লিকুইডিটি পুল।'
      },
      {
        qEn: 'Why does Lesson 15 Step 5 ask you to compare a trend-continuation day, a reversal day, and a consolidation day?',
        qBn: 'লেসন ১৫-এর ৫ম ধাপে কেন একটি ট্রেন্ড-কন্টিনিউয়েশন দিন, একটি রিভার্সাল দিন এবং একটি কনসোলিডেশন দিনের তুলনা করতে বলা হয়েছে?',
        optionsEn: [
          'To prove that consolidation days never happen in forex markets',
          'To avoid assuming that every trading day offers an obvious one-way directional expansion',
          'Because reversal days always occur on Mondays and Fridays only',
          'So you can force a trend-following trade during tight consolidations'
        ],
        optionsBn: [
          'এটি প্রমাণ করতে যে ফরেক্স মার্কেটে কখনোই কনসোলিডেশন দিন আসে না',
          'প্রতিটি ট্রেডিং দিনই যে স্পষ্ট একমুখী ডিরেকশনাল মুভ দেবে—এমন ভুল ধারণা এড়ানোর জন্য',
          'কারণ রিভার্সাল দিনগুলো কেবল সোমবার এবং শুক্রবারেই ঘটে',
          'যাতে টাইট কনসোলিডেশনের ভেতরেও জোর করে ট্রেন্ড-ফলোয়িং ট্রেড নেওয়া যায়'
        ],
        correctIndex: 1,
        explainEn: 'Comparing continuation, reversal, and consolidation profiles trains you to recognize that not every session delivers a clean directional trend.',
        explainBn: 'কন্টিনিউয়েশন, রিভার্সাল ও কনসোলিডেশন দিনের তুলনা করলে বোঝা যায় যে প্রতিদিন মার্কেটে স্পষ্ট একমুখী ট্রেন্ড পাওয়া যায় না।'
      },
      {
        qEn: 'If your written trading rules permit changing your daily bias during the session, what must you record in your journal?',
        qBn: 'আপনার লিখিত ট্রেডিং নিয়মে যদি সেশন চলাকালীন ডেইলি বায়াস পরিবর্তনের অনুমতি থাকে, তবে জার্নালে কী রেকর্ড করা আবশ্যক?',
        optionsEn: [
          'Erase the original pre-session note so it looks like you predicted the new direction all along',
          'Keep the original note intact and record the exact price event and timestamp that triggered the rule-based bias change',
          'Nothing, because intraday changes do not affect strategy review',
          'Only record the change if the new trade makes money'
        ],
        optionsBn: [
          'সেশন শুরুর মূল নোটটি মুছে ফেলতে হবে যাতে মনে হয় আপনি শুরু থেকেই নতুন দিকটি অনুমান করেছিলেন',
          'মূল নোটটি অবিকৃত রেখে ঠিক কোন প্রাইস ইভেন্ট এবং কোন সময়ে (Timestamp) নিয়ম অনুযায়ী বায়াস পরিবর্তিত হয়েছে তা লিখে রাখতে হবে',
          'কিছুই লিখতে হবে না, কারণ ইন্ট্রাডে পরিবর্তন স্ট্র্যাটেজি রিভিউতে প্রভাব ফেলে না',
          'নতুন ট্রেডটিতে কেবল লাভ হলেই পরিবর্তনটি রেকর্ড করতে হবে'
        ],
        correctIndex: 1,
        explainEn: 'The original pre-session note must never be altered; any permitted update requires logging the triggering event and exact timestamp beneath it.',
        explainBn: 'সেশন শুরুর মূল নোটটি কখনোই পরিবর্তন করা যাবে না; নিয়ম অনুযায়ী কোনো আপডেট হলে তার নিচে সুনির্দিষ্ট ট্রিগার ইভেন্ট এবং টাইমস্ট্যাম্প লগ করতে হবে।'
      },
      {
        qEn: 'Can a daily directional hypothesis be supported by price action while still offering zero eligible entries under your model?',
        qBn: 'প্রাইস অ্যাকশন আপনার ডেইলি ডিরেকশনাল হাইপোথিসিসকে সমর্থন করার পরেও কি আপনার মডেলে বৈধ এন্ট্রির সংখ্যা শূন্য (Zero) হতে পারে?',
        optionsEn: [
          'No, if the direction is right, any entry you take is automatically valid',
          'Yes, a favorable directional move toward the target may occur without ever forming your model’s required POI interaction or confirmation trigger',
          'No, because daily bias and entry trigger are the exact same rule',
          'Only on weekends when the market is closed'
        ],
        optionsBn: [
          'না, ডিরেকশন সঠিক হলে যেকোনো জায়গায় নেওয়া এন্ট্রি স্বয়ংক্রিয়ভাবে বৈধ বলে গণ্য হবে',
          'হ্যাঁ, প্রাইস আপনার প্রত্যাশিত টার্গেটের দিকে মুভ করলেও মডেলের প্রয়োজনীয় POI ট্যাপ বা কনফার্মেশন ট্রিগার নাও তৈরি হতে পারে',
          'না, কারণ ডেইলি বায়াস এবং এন্ট্রি ট্রিগার হুবহু একই নিয়ম',
          'কেবল সাপ্তাহিক ছুটির দিনে যখন মার্কেট বন্ধ থাকে'
        ],
        correctIndex: 1,
        explainEn: 'Direction and entry eligibility are separate: price can reach your daily target without offering a valid setup inside your permitted zone or window.',
        explainBn: 'ডিরেকশন এবং এন্ট্রির বৈধতা দুটি আলাদা বিষয়: আপনার অনুমোদিত জোন বা টাইম উইন্ডোতে কোনো বৈধ সেটআপ না দিয়েও প্রাইস ডেইলি টার্গেটে পৌঁছাতে পারে।'
      },
      {
        qEn: 'What is the primary danger warned against in Lesson 15’s "Watch for" note?',
        qBn: 'লেসন ১৫-এর "Watch for" নোটে কোন প্রধান ঝুঁকিটির ব্যাপারে সতর্ক করা হয়েছে?',
        optionsEn: [
          'Treating daily bias as proof that the market must reach a stated liquidity pool, rather than as a testable forecast',
          'Using a daily chart instead of a monthly chart',
          'Writing notes in a digital document instead of on paper',
          'Marking previous day highs and lows on the chart'
        ],
        optionsBn: [
          'ডেইলি বায়াসকে একটি যাচাইযোগ্য পূর্বাভাস হিসেবে না দেখে প্রাইস নির্ধারিত লিকুইডিটি পুলে পৌঁছাবেই—এমন নিশ্চিত প্রমাণ হিসেবে ধরে নেওয়া',
          'মান্থলি চার্টের বদলে ডেইলি চার্ট ব্যবহার করা',
          'কাগজের বদলে ডিজিটাল ডকুমেন্টে নোট লেখা',
          'চার্টে আগের দিনের হাই এবং লো মার্ক করা'
        ],
        correctIndex: 0,
        explainEn: 'Daily bias is a testable hypothesis/forecast, never a guarantee or proof that price is obligated to reach the stated liquidity pool.',
        explainBn: 'ডেইলি বায়াস হলো একটি যাচাইযোগ্য হাইপোথিসিস বা পূর্বাভাস; এটি কখনোই এমন কোনো গ্যারান্টি নয় যে মার্কেট নির্ধারিত লিকুইডিটি পুলে পৌঁছাতে বাধ্য।'
      },
      {
        qEn: 'In the Lesson 15 Chart Lab, how many historical sessions must you prepare pre-session daily-bias notes for?',
        qBn: 'লেসন ১৫-এর চার্ট ল্যাবে কয়টি ঐতিহাসিক সেশনের (Historical Sessions) জন্য সেশন-পূর্ব ডেইলি বায়াস নোট প্রস্তুত করতে বলা হয়েছে?',
        optionsEn: [
          '2 sessions',
          '5 sessions',
          '10 sessions',
          '50 sessions'
        ],
        optionsBn: [
          '২টি সেশন',
          '৫টি সেশন',
          '১০টি সেশন',
          '৫০টি সেশন'
        ],
        correctIndex: 2,
        explainEn: 'The Chart Lab requires preparing pre-session daily-bias notes (with direction, target, invalidation, and confidence) for 10 historical sessions.',
        explainBn: 'চার্ট ল্যাবে ১০টি ঐতিহাসিক সেশনের জন্য ডিরেকশন, টার্গেট, ইনভ্যালিডেশন ও কনফিডেন্সসহ সেশন-পূর্ব ডেইলি বায়াস নোট প্রস্তুত করতে বলা হয়েছে।'
      }
    ]
  },
  '16-time-price-dealing-range': {
    lessonId: 16,
    slug: '16-time-price-dealing-range',
    masteryPromptEn: 'Why is "London open" not always the same fixed Dhaka clock time?',
    masteryPromptBn: 'কেন "লন্ডন ওপেন (London Open)" সারা বছর ঢাকার ঘড়িতে একই নির্দিষ্ট সময়ে হয় না?',
    completionItems: [
      {
        id: 'read-notes',
        en: 'Read the companion article and studied the primary resources, writing summary notes in my own words.',
        bn: 'সহায়ক আর্টিকেল ও মূল রিসোর্সগুলো পড়েছি এবং নিজের ভাষায় সারসংক্ষেপ নোট লিখেছি।'
      },
      {
        id: 'lab-1',
        en: 'Chart Lab 1: Prepared complete time-and-price maps (range anchors, equilibrium, OHLC references, and session windows) for 10 historical days.',
        bn: 'চার্ট ল্যাব ১: ১০টি ঐতিহাসিক দিনের জন্য পূর্ণাঙ্গ টাইম-অ্যান্ড-প্রাইস ম্যাপ (রেঞ্জ অ্যাঙ্কর, ইকুইলিব্রিয়াম, OHLC রেফারেন্স এবং সেশন উইন্ডো) প্রস্তুত করেছি।'
      },
      {
        id: 'lab-2',
        en: 'Chart Lab 2: Documented at least five no-trade windows where no valid setup occurred despite having a clear directional bias.',
        bn: 'চার্ট ল্যাব ২: স্পষ্ট ডিরেকশনাল বায়াস থাকা সত্ত্বেও কোনো বৈধ সেটআপ তৈরি হয়নি—এমন অন্তত ৫টি নো-ট্রেড (No-trade) উইন্ডো ডকুমেন্ট করেছি।'
      },
      {
        id: 'lab-3',
        en: 'Chart Lab 3: Labeled the exact equivalent Bangladesh (Asia/Dhaka) clock times for my chosen session dates, accounting for Daylight Saving Time (DST).',
        bn: 'চার্ট ল্যাব ৩: ডে-লাইট সেভিং টাইম (DST) বিবেচনায় নিয়ে আমার নির্বাচিত সেশন তারিখগুলোর জন্য বাংলাদেশের (Asia/Dhaka) সঠিক সমতুল্য ঘড়ির সময় লেবেল করেছি।'
      },
      {
        id: 'mastery-quiz',
        en: 'Completed the Knowledge Check quiz and answered the Mastery Check prompt without looking at notes.',
        bn: 'নলেজ চেক কুইজ সম্পন্ন করেছি এবং নোট না দেখে মাস্টারি চেক প্রশ্নের উত্তর দিয়েছি।'
      }
    ],
    questions: [
      {
        qEn: 'What is the core outcome of Lesson 16 regarding time-of-day windows and dealing ranges?',
        qBn: 'দিনের নির্দিষ্ট সময়সীমা (Time-of-day windows) এবং ডিলিং রেঞ্জের ব্যাপারে লেসন ১৬-এর মূল লক্ষ্য (Outcome) কী?',
        optionsEn: [
          'To enter a trade automatically at the exact minute a kill zone opens without looking at price structure',
          'To add time-of-day and dealing range context without confusing timing windows with trade signals',
          'To replace all price structure analysis with a fixed clock schedule',
          'To trade only during the final five minutes of the Asian session'
        ],
        optionsBn: [
          'প্রাইস স্ট্রাকচার না দেখেই কিলজোন ওপেন হওয়ার ঠিক প্রথম মিনিটে স্বয়ংক্রিয়ভাবে ট্রেড নেওয়া',
          'টাইমিং উইন্ডোকে ট্রেড সিগন্যালের সাথে গুলিয়ে না ফেলে দিনের নির্দিষ্ট সময় এবং ডিলিং রেঞ্জের কনটেক্সট যোগ করা',
          'সব ধরনের প্রাইস স্ট্রাকচার অ্যানালাইসিস বাদ দিয়ে কেবল ঘড়ির একটি নির্দিষ্ট রুটিন অনুসরণ করা',
          'কেবল এশিয়ান সেশনের শেষ পাঁচ মিনিটে ট্রেড করা'
        ],
        correctIndex: 1,
        explainEn: 'Lesson 16 teaches how to combine dealing range location and time windows as context, while keeping "window open" separate from "setup qualified."',
        explainBn: 'লেসন ১৬ শেখায় কীভাবে ডিলিং রেঞ্জ এবং টাইম উইন্ডোকে কনটেক্সট হিসেবে যুক্ত করতে হয়, যাতে "উইন্ডো ওপেন হওয়া" এবং "সেটআপ ভ্যালিড হওয়া" দুটি আলাদা বিষয় হিসেবে থাকে।'
      },
      {
        qEn: 'In a hypothetical dealing range anchored from 200 to 240, what is the equilibrium (midpoint), and what does price trading at 214 tell you?',
        qBn: '200 থেকে 240 পর্যন্ত বিস্তৃত একটি কাল্পনিক ডিলিং রেঞ্জের ইকুইলিব্রিয়াম (মিডপয়েন্ট) কত এবং প্রাইস 214-এ অবস্থান করার অর্থ কী?',
        optionsEn: [
          'Equilibrium is 210; price at 214 is in premium and requires an immediate short entry',
          'Equilibrium is 220; price at 214 is below the midpoint (in discount), but position alone does not supply a complete entry without session window, context, and confirmation',
          'Equilibrium is 220; price at 214 means an automatic market buy order must be placed immediately',
          'Equilibrium is 230; price at 214 invalidates the entire dealing range'
        ],
        optionsBn: [
          'ইকুইলিব্রিয়াম হলো 210; প্রাইস 214-এ থাকা মানে এটি প্রিমিয়ামে আছে এবং সাথে সাথে সেল এন্ট্রি নিতে হবে',
          'ইকুইলিব্রিয়াম হলো 220; প্রাইস 214-এ থাকা মানে এটি মিডপয়েন্টের নিচে (ডিসকাউন্টে) আছে, কিন্তু সেশন উইন্ডো, কনটেক্সট ও কনফার্মেশন ছাড়া কেবল এই অবস্থানটুকুই পূর্ণাঙ্গ এন্ট্রি দেয় না',
          'ইকুইলিব্রিয়াম হলো 220; প্রাইস 214-এ যাওয়া মাত্রই স্বয়ংক্রিয়ভাবে মার্কেট বাই অর্ডার বসাতে হবে',
          'ইকুইলিব্রিয়াম হলো 230; প্রাইস 214-এ থাকা পুরো ডিলিং রেঞ্জটিকে ইনভ্যালিড করে দেয়'
        ],
        correctIndex: 1,
        explainEn: 'The midpoint of 200–240 is 220. While 214 is in discount below 220, discount location alone is not a trigger; timing, context, and confirmation rules must still qualify.',
        explainBn: '200–240 রেঞ্জের মিডপয়েন্ট হলো 220। 214 লেভেলটি 220-এর নিচে বা ডিসকাউন্টে হলেও কেবল অবস্থানই এন্ট্রি ট্রিগার নয়; টাইমিং, কনটেক্সট ও কনফার্মেশন শর্তও পূরণ হতে হবে।'
      },
      {
        qEn: 'Why does converting a session hour to Dhaka time (`Asia/Dhaka`) once and reusing that fixed hour all year cause errors?',
        qBn: 'কোনো সেশনের সময়কে বছরে একবার ঢাকার সময়ে (`Asia/Dhaka`) রূপান্তর করে সারা বছর সেই একই সময় মুখস্থ ব্যবহার করলে কেন ভুল হয়?',
        optionsEn: [
          'Because Bangladesh changes its clock by two hours every month',
          'Because London (`Europe/London`) and New York (`America/New_York`) observe Daylight Saving Time (DST) while Dhaka does not, and London and NY do not switch clocks on identical dates',
          'Because forex candles change their prices depending on your monitor resolution',
          'Because New York time moves backward by 15 minutes every Friday'
        ],
        optionsBn: [
          'কারণ বাংলাদেশ প্রতি মাসে তার ঘড়ির সময় দুই ঘণ্টা করে পরিবর্তন করে',
          'কারণ লন্ডন (`Europe/London`) ও নিউ ইয়র্ক (`America/New_York`) ডে-লাইট সেভিং টাইম (DST) পালন করলেও ঢাকা করে না, এবং লন্ডন ও নিউ ইয়র্ক একই তারিখে ঘড়ির কাঁটা পরিবর্তন করে না',
          'কারণ আপনার মনিটরের রেজোলিউশনের ওপর নির্ভর করে ফরেক্স ক্যান্ডেলের প্রাইস বদলে যায়',
          'কারণ প্রতি শুক্রবার নিউ ইয়র্ক টাইম ১৫ মিনিট করে পিছিয়ে যায়'
        ],
        correctIndex: 1,
        explainEn: 'Bangladesh (`Asia/Dhaka`, UTC+6) does not observe DST, whereas London and New York shift between standard and daylight saving time on different spring/autumn dates.',
        explainBn: 'বাংলাদেশ (UTC+6) ডে-লাইট সেভিং পালন করে না, কিন্তু লন্ডন ও নিউ ইয়র্ক বছরে দুবার ভিন্ন ভিন্ন তারিখে ঘড়ির সময় পরিবর্তন করে; তাই একটি মুখস্থ সময়ের ব্যবধান সারা বছর কাজ করে না।'
      },
      {
        qEn: 'When defining a dealing range in your pre-session map, what must you explicitly document?',
        qBn: 'সেশন শুরুর ম্যাপে একটি ডিলিং রেঞ্জ সংজ্ঞায়িত করার সময় আপনাকে কোন বিষয়টি স্পষ্টভাবে লিখে রাখতে হবে?',
        optionsEn: [
          'Only the current price without any high or low references',
          'Which two confirmed structural extremes (high and low) define the range, its midpoint, and the rule/timestamp for when a new extreme replaces an anchor',
          'Whichever random candles make the 50% level touch current price',
          'Only the highest candle wick of the previous year'
        ],
        optionsBn: [
          'কোনো হাই বা লো রেফারেন্স ছাড়াই কেবল বর্তমান প্রাইস',
          'কোন দুটি কনফার্মড স্ট্রাকচারাল এক্সট্রিম (হাই ও লো) রেঞ্জটি তৈরি করেছে, এর মিডপয়েন্ট কত এবং কোন নিয়মে ও সময়ে নতুন কোনো এক্সট্রিম পুরনো অ্যাঙ্করকে প্রতিস্থাপন করবে',
          'যে দুটি এলোমেলো ক্যান্ডেল ধরলে ৫০% লেভেলটি বর্তমান প্রাইসকে স্পর্শ করে',
          'কেবল আগের বছরের সবচেয়ে উঁচু ক্যান্ডেলের উইক'
        ],
        correctIndex: 1,
        explainEn: 'A reproducible dealing range requires explicitly naming the two confirmed structural extremes, calculating equilibrium, and logging the rule and timestamp if an anchor updates.',
        explainBn: 'একটি নির্ভরযোগ্য ডিলিং রেঞ্জের জন্য কোন দুটি কনফার্মড হাই ও লো ব্যবহার করা হয়েছে তা উল্লেখ করতে হয়, ইকুইলিব্রিয়াম বের করতে হয় এবং অ্যাঙ্কর বদলালে তার নিয়ম ও টাইমস্ট্যাম্প লিখতে হয়।'
      },
      {
        qEn: 'How should "window open" (being inside a kill zone) and "setup qualified" be recorded in a trading journal?',
        qBn: 'ট্রেডিং জার্নালে "উইন্ডো ওপেন (কিলজোনের ভেতরে থাকা)" এবং "সেটআপ কোয়ালিফায়েড (শর্ত পূরণ হওয়া)" কীভাবে রেকর্ড করা উচিত?',
        optionsEn: [
          'As the exact same thing, since being inside a kill zone guarantees a valid entry',
          'As separate journal fields, because being inside a chosen study window does not by itself satisfy directional or entry conditions',
          'Only record the kill zone if a trade was profitable',
          'Ignore the clock completely and only record candle colors'
        ],
        optionsBn: [
          'হুবহু একই বিষয় হিসেবে, কারণ কিলজোনের ভেতরে থাকা মানেই একটি বৈধ এন্ট্রি নিশ্চিত হওয়া',
          'দুটি আলাদা জার্নাল ফিল্ড হিসেবে, কারণ পর্যবেক্ষণের নির্দিষ্ট সময়ের ভেতরে থাকলেই তা নিজে থেকে ডিরেকশনাল বা এন্ট্রির শর্ত পূরণ করে না',
          'কেবল ট্রেডে লাভ হলেই কিলজোনের নাম রেকর্ড করা উচিত',
          'ঘড়ির সময় সম্পূর্ণ উপেক্ষা করে কেবল ক্যান্ডেলের রঙ রেকর্ড করা উচিত'
        ],
        correctIndex: 1,
        explainEn: 'A kill zone is merely an observation window; price must still meet your structural, POI, and confirmation criteria inside that window to qualify a setup.',
        explainBn: 'কিলজোন হলো কেবল একটি পর্যবেক্ষণ সময়সীমা; সেটআপ বৈধ হতে হলে ওই সময়ের ভেতরে প্রাইসকে অবশ্যই আপনার স্ট্রাকচার, POI এবং কনফার্মেশন শর্ত পূরণ করতে হবে।'
      },
      {
        qEn: 'What does Lesson 16 Step 4 note about the relationship between premium/discount location and the expected draw on liquidity?',
        qBn: 'প্রিমিয়াম/ডিসকাউন্ট অবস্থান এবং প্রত্যাশিত ড্র অন লিকুইডিটির (Draw on Liquidity) সম্পর্কের ব্যাপারে লেসন ১৬-এর ৪র্থ ধাপে কী বলা হয়েছে?',
        optionsEn: [
          'They always agree on every timeframe without exception',
          'Study them as separate conditions because both can disagree (e.g., price may be in premium while the near-term draw is still higher)',
          'Premium and discount only apply to cryptocurrency markets',
          'Draw on liquidity is always the exact 50% equilibrium line'
        ],
        optionsBn: [
          'কোনো ব্যতিক্রম ছাড়াই প্রতিটি টাইমফ্রেমে তারা সবসময় একমত হয়',
          'এদেরকে দুটি আলাদা শর্ত হিসেবে স্টাডি করতে হবে কারণ এরা পরস্পরবিরোধী হতে পারে (যেমন প্রাইস প্রিমিয়ামে থাকলেও নিকটবর্তী লিকুইডিটি টার্গেট আরও ওপরে থাকতে পারে)',
          'প্রিমিয়াম এবং ডিসকাউন্ট কেবল ক্রিপ্টোকারেন্সি মার্কেটে প্রযোজ্য',
          'ড্র অন লিকুইডিটি সবসময় ঠিক ৫০% ইকুইলিব্রিয়াম লাইনেই থাকে'
        ],
        correctIndex: 1,
        explainEn: 'Range position (premium/discount) and directional draw on liquidity are separate variables and can disagree, requiring explicit rules for how to handle conflicts.',
        explainBn: 'রেঞ্জের অবস্থান (প্রিমিয়াম/ডিসকাউন্ট) এবং লিকুইডিটি টার্গেট দুটি আলাদা শর্ত এবং এরা পরস্পরবিরোধী হতে পারে; তাই অমিল হলে কী করবেন তার স্পষ্ট নিয়ম থাকা চাই।'
      },
      {
        qEn: 'How should scheduled macroeconomic events (such as FOMC announcements or BLS releases) be handled in your testing plan?',
        qBn: 'নির্ধারিত অর্থনৈতিক নিউজ ইভেন্টগুলো (যেমন FOMC ঘোষণা বা BLS ডেটা রিলিজ) আপনার টেস্টিং প্ল্যানে কীভাবে অন্তর্ভুক্ত করা উচিত?',
        optionsEn: [
          'Ignore the economic calendar during testing and only remove news days that resulted in losing trades afterward',
          'Write your event-window policy before testing (such as a defined exclusion period or separate observational category) and apply it consistently to all matching event days',
          'Always place maximum-leverage orders 10 seconds before every FOMC statement',
          'Assume macroeconomic releases never affect volatility during New York sessions'
        ],
        optionsBn: [
          'টেস্টিংয়ের সময় ইকোনমিক ক্যালেন্ডার উপেক্ষা করুন এবং পরে কেবল যেসব নিউজের দিনে লস হয়েছে সেগুলো হিসাব থেকে বাদ দিন',
          'টেস্টিং শুরুর আগেই ইভেন্ট-উইন্ডো পলিসি লিখে রাখুন (যেমন নির্দিষ্ট সময়ের ট্রেড বিরতি বা আলাদা ক্যাটাগরি) এবং সব নিউজের দিনে তা সমানভাবে প্রয়োগ করুন',
          'প্রতিটি FOMC ঘোষণার ঠিক ১০ সেকেন্ড আগে সর্বোচ্চ লেভারেজ দিয়ে অর্ডার বসান',
          'ধরে নিন নিউ ইয়র্ক সেশনে অর্থনৈতিক নিউজ রিলিজ কখনোই ভোলাটিলিটিতে প্রভাব ফেলে না'
        ],
        correctIndex: 1,
        explainEn: 'Event policies must be written before testing and applied uniformly; selectively excluding only the news days that caused losses introduces severe hindsight bias.',
        explainBn: 'টেস্টিং শুরুর আগেই নিউজ ইভেন্টের নীতিমালা লিখে সব ক্ষেত্রে সমানভাবে প্রয়োগ করতে হবে; কেবল লস হওয়া নিউজের দিনগুলো বেছে বেছে বাদ দিলে ব্যাকটেস্ট পক্ষপাতদুষ্ট হয়ে পড়ে।'
      },
      {
        qEn: 'What historical information-timing pitfall does the article highlight when studying past economic releases?',
        qBn: 'অতীতের অর্থনৈতিক ডেটা রিলিজ স্টাডি করার সময় তথ্যের সময়কাল (Information Timing) সংক্রান্ত কোন ভুলটির কথা আর্টিকেলে উল্লেখ করা হয়েছে?',
        optionsEn: [
          'Historical charts never show candle wicks during news',
          'A macroeconomic release’s eventual revised value shown on modern calendars was not necessarily available at the original announcement moment',
          'Past FOMC meetings were held on Sundays',
          'Economic calendars did not exist before last month'
        ],
        optionsBn: [
          'ঐতিহাসিক চার্টে নিউজের সময় কখনোই ক্যান্ডেলের উইক দেখায় না',
          'কোনো অর্থনৈতিক ডেটার পরবর্তীতে সংশোধিত মান (Revised Value) যা আজকের ক্যালেন্ডারে দেখা যায়, তা মূল ঘোষণার মুহূর্তে জানা থাকা সম্ভব ছিল না',
          'অতীতের FOMC মিটিংগুলো রবিবার অনুষ্ঠিত হতো',
          'গত মাসের আগে কোনো ইকোনমিক ক্যালেন্ডারের অস্তিত্ব ছিল না'
        ],
        correctIndex: 1,
        explainEn: 'Macroeconomic figures are often revised months later; historical study must respect what was known at the original release timestamp, not later revisions.',
        explainBn: 'অর্থনৈতিক পরিসংখ্যান প্রায়ই কয়েক মাস পরে সংশোধিত (Revised) হয়; তাই ঐতিহাসিক বিশ্লেষণের সময় মূল ঘোষণার মুহূর্তে কোন তথ্যটি জানা ছিল তা মাথার রাখতে হয়।'
      },
      {
        qEn: 'Besides range anchors, midpoint, directional hypothesis, price reference, session window, and confirmation event, what else should a complete time-price observation state?',
        qBn: 'রেঞ্জ অ্যাঙ্কর, মিডপয়েন্ট, ডিরেকশনাল হাইপোথিসিস, প্রাইস রেফারেন্স, সেশন উইন্ডো এবং কনফার্মেশন ইভেন্টের পাশাপাশি একটি পূর্ণাঙ্গ টাইম-প্রাইস পর্যবেক্ষণে আর কী উল্লেখ থাকা উচিত?',
        optionsEn: [
          'What expires when the observation window ends',
          'The exact profit target in dollars for the next twelve months',
          'Which indicator color scheme looks best on dark mode',
          'The name of the institution that created the daily high'
        ],
        optionsBn: [
          'নির্ধারিত পর্যবেক্ষণ উইন্ডো শেষ হয়ে গেলে কোন কোন সেটআপ বা শর্তের মেয়াদ শেষ (Expire) হয়ে যাবে',
          'আগামী বারো মাসে ডলারে ঠিক কত প্রফিট হবে তার হিসাব',
          'ডার্ক মোডে কোন ইন্ডিকেটরের রঙ সবচেয়ে সুন্দর দেখায়',
          'দিনের হাই কোন প্রতিষ্ঠান তৈরি করেছে তার নাম'
        ],
        correctIndex: 0,
        explainEn: 'A complete time-price note specifies expiry: what pending setup or hypothesis becomes invalid once the designated session window closes.',
        explainBn: 'একটি পূর্ণাঙ্গ টাইম-প্রাইস নোটে মেয়াদ উত্তীর্ণের নিয়ম (Expiry) উল্লেখ থাকে—অর্থাৎ নির্ধারিত সেশন উইন্ডো শেষ হয়ে গেলে কোন পেন্ডিং সেটআপটি আর নেওয়া যাবে না।'
      },
      {
        qEn: 'Which time niveles and references does Lesson 16 Step 2 instruct you to mark on your chart?',
        qBn: 'লেসন ১৬-এর ২য় ধাপে (Step 2) চার্টে কোন কোন টাইম ও প্রাইস রেফারেন্স মার্ক করতে বলা হয়েছে?',
        optionsEn: [
          'Only yearly opening prices from ten years ago',
          'Previous-day and session OHLC levels, Asian range, London/NY references, and scheduled market openings',
          'Only 1-second tick chart closes',
          'Random horizontal lines every 25 pips'
        ],
        optionsBn: [
          'কেবল দশ বছর আগের ইয়ারলি ওপেনিং প্রাইস',
          'আগের দিন ও সেশনের OHLC লেভেল, এশিয়ান রেঞ্জ, লন্ডন/নিউ ইয়র্ক রেফারেন্স এবং নির্ধারিত মার্কেট ওপেনিং প্রাইসসমূহ',
          'কেবল ১-সেকেন্ডের টিক চার্ট ক্লোজ',
          'প্রতি ২৫ পিপস পরপর এলোমেলো হরাইজন্টাল লাইন'
        ],
        correctIndex: 1,
        explainEn: 'Step 2 focuses on marking previous-day and session OHLC boundaries, the Asian range, London/NY session references, and key opening prices (such as Midnight Open and 8:30 AM NY Open).',
        explainBn: '২য় ধাপে আগের দিন ও সেশনের OHLC সীমানা, এশিয়ান রেঞ্জ, লন্ডন/নিউ ইয়র্ক রেফারেন্স এবং গুরুত্বপূর্ণ ওপেনিং প্রাইস (যেমন মিডনাইট ওপেন ও ৮:৩০ NY ওপেন) মার্ক করতে বলা হয়েছে।'
      },
      {
        qEn: 'Why is it essential to include days with no signal, late confirmation, and conflicting range information when building your 10 daily time-price maps?',
        qBn: '১০টি ডেইলি টাইম-প্রাইস ম্যাপ তৈরির সময় কেন সিগন্যাল না আসা দিন, দেরিতে কনফার্মেশন আসা এবং পরস্পরবিরোধী রেঞ্জ তথ্যের দিনগুলোকেও অন্তর্ভুক্ত করা জরুরি?',
        optionsEn: [
          'Because real progress is the ability to reconstruct exactly what could have been observed at a given moment, even when the day never produces a usable setup',
          'So you can change your rules until every single day produces a winning trade',
          'Because losing trades only happen on Tuesdays',
          'To make your notebook look longer'
        ],
        optionsBn: [
          'কারণ কোনো দিনে কার্যকর সেটআপ না পাওয়া গেলেও ঠিক কোন মুহূর্তে চার্টে কী দেখা যাচ্ছিল তা নিখুঁতভাবে পুনর্গঠন করতে পারাই হলো আসল অগ্রগতি',
          'যাতে আপনি নিয়ম পরিবর্তন করে প্রতিটি দিনেই একটি করে জেতা ট্রেড বের করতে পারেন',
          'কারণ লস ট্রেড কেবল মঙ্গলবারেই ঘটে',
          'আপনার নোটবুকটি যাতে দেখতে বড় মনে হয়'
        ],
        correctIndex: 0,
        explainEn: 'Documenting non-signal and ambiguous windows trains objective real-time observation and prevents cherry-picking only textbook days.',
        explainBn: 'সিগন্যাল না আসা বা অস্পষ্ট দিনগুলো নথিবদ্ধ করলে রিয়েল-টাইমে নিরপেক্ষ পর্যবেক্ষণের দক্ষতা তৈরি হয় এবং কেবল নিখুঁত চার্ট বেছে নেওয়ার প্রবণতা দূর হয়।'
      },
      {
        qEn: 'What does Lesson 16’s "Watch for" warning state about quarter hours, kill zones, and opening prices?',
        qBn: 'লেসন ১৬-এর "Watch for" সতর্কবার্তায় কোয়ার্টার আওয়ার, কিলজোন এবং ওপেনিং প্রাইস সম্পর্কে কী বলা হয়েছে?',
        optionsEn: [
          'They are deterministic schedules that guarantee a reversal at the exact minute',
          'They should be treated as contextual hypotheses, not deterministic schedules',
          'They work only on gold and never on currency pairs',
          'They eliminate the need to define a dealing range'
        ],
        optionsBn: [
          'এগুলো হলো সুনিশ্চিত সময়সূচি যা ঘড়ির কাঁটায় ঠিক ওই মিনিটেই রিভার্সাল গ্যারান্টি দেয়',
          'এগুলোকে সুনিশ্চিত বা ধরাবাঁধা রুটিন হিসেবে না দেখে প্রাসঙ্গিক হাইপোথিসিস (Contextual Hypotheses) হিসেবে বিবেচনা করা উচিত',
          'এগুলো কেবল গোল্ডে কাজ করে এবং কারেন্সি পেয়ারে কখনোই কাজ করে না',
          'এগুলো ব্যবহার করলে আর ডিলিং রেঞ্জ নির্ধারণ করার প্রয়োজন হয় না'
        ],
        correctIndex: 1,
        explainEn: 'Timing windows and opening levels provide context for where and when to observe price behavior, not deterministic schedules that force market turns on command.',
        explainBn: 'টাইমিং উইন্ডো এবং ওপেনিং লেভেলগুলো কখন ও কোথায় প্রাইস পর্যবেক্ষণ করতে হবে তার কনটেক্সট দেয়; এগুলো ঘড়ির কাঁটা ধরে মার্কেট ঘোরানোর কোনো ধরাবাঁধা নিয়ম নয়।'
      },
      {
        qEn: 'Which timezone format does the companion article recommend writing alongside the date to avoid clock ambiguity?',
        qBn: 'ঘড়ির সময়ের বিভ্রান্তি এড়াতে সহায়ক আর্টিকেলে তারিখের পাশাপাশি কোন ধরনের টাইমজোন ফরম্যাট লেখার পরামর্শ দেওয়া হয়েছে?',
        optionsEn: [
          'Vague labels like "my local morning time"',
          'Named IANA timezones such as `America/New_York`, `Europe/London`, and `Asia/Dhaka` together with the specific calendar date',
          'Only "server time" without mentioning which broker server is used',
          'Only lunar calendar phases'
        ],
        optionsBn: [
          '"আমার স্থানীয় সকালের সময়"-এর মতো অস্পষ্ট লেবেল',
          'সুনির্দিষ্ট ক্যালেন্ডার তারিখের সাথে `America/New_York`, `Europe/London` এবং `Asia/Dhaka`-এর মতো স্পষ্ট টাইমজোন নাম',
          'কোন ব্রোকার সার্ভার তা উল্লেখ না করেই কেবল "সার্ভার টাইম" লেখা',
          'কেবল চন্দ্র ক্যালেন্ডারের তিথি উল্লেখ করা'
        ],
        correctIndex: 1,
        explainEn: 'Using explicit named timezones (`America/New_York`, `Europe/London`, `Asia/Dhaka`) with the exact date ensures anyone can reconstruct the exact candle and session window.',
        explainBn: 'নির্দিষ্ট তারিখের সাথে `America/New_York`, `Europe/London`, `Asia/Dhaka`-এর মতো স্পষ্ট টাইমজোন নাম ব্যবহার করলে যে কেউ সঠিক ক্যান্ডেল এবং সেশন উইন্ডোটি পুনর্গঠন করতে পারে।'
      },
      {
        qEn: 'In the Lesson 16 Chart Lab, how many "no-trade windows despite having a directional bias" must you document across your 10 historical days?',
        qBn: 'লেসন ১৬-এর চার্ট ল্যাবে ১০টি ঐতিহাসিক দিনের মধ্যে "ডিরেকশনাল বায়াস থাকা সত্ত্বেও নো-ট্রেড উইন্ডো" কমপক্ষে কয়টি ডকুমেন্ট করতে বলা হয়েছে?',
        optionsEn: [
          'Zero, because every window with a bias must be traded',
          'At least five no-trade windows',
          'Exactly one no-trade window',
          'Fifty no-trade windows'
        ],
        optionsBn: [
          'শূন্যটি, কারণ বায়াস থাকলেই প্রতিটি উইন্ডোতে ট্রেড নিতে হবে',
          'কমপক্ষে পাঁচটি (At least five) নো-ট্রেড উইন্ডো',
          'ঠিক একটি নো-ট্রেড উইন্ডো',
          'পঞ্চাশটি নো-ট্রেড উইন্ডো'
        ],
        correctIndex: 1,
        explainEn: 'The Chart Lab specifically requires documenting at least five no-trade windows despite having a directional bias, reinforcing patience when confirmation is absent.',
        explainBn: 'চার্ট ল্যাবে স্পষ্টভাবে বলা হয়েছে ডিরেকশনাল বায়াস থাকা সত্ত্বেও কনফার্মেশন বা শর্ত পূরণ না হওয়ার কারণে অন্তত ৫টি নো-ট্রেড উইন্ডো ডকুমেন্ট করতে হবে।'
      },
      {
        qEn: 'What six elements belong in the time-price checklist described in Lesson 16 Step 6?',
        qBn: 'লেসন ১৬-এর ৬ষ্ঠ ধাপে (Step 6) বর্ণিত টাইম-প্রাইস চেকলিস্টে কোন ছয়টি উপাদান থাকা উচিত?',
        optionsEn: [
          'Range, bias, session, liquidity reference, confirmation, and invalidation',
          'RSI, MACD, Stochastic, Bollinger Bands, ADX, and Volume',
          'Entry price, leverage ratio, account balance, broker name, monitor size, and internet speed',
          'Monday open, Tuesday high, Wednesday low, Thursday close, Friday range, and Sunday gap'
        ],
        optionsBn: [
          'রেঞ্জ (Range), বায়াস (Bias), সেশন (Session), লিকুইডিটি রেফারেন্স (Liquidity Reference), কনফার্মেশন (Confirmation) এবং ইনভ্যালিডেশন (Invalidation)',
          'RSI, MACD, Stochastic, Bollinger Bands, ADX এবং Volume',
          'এন্ট্রি প্রাইস, লেভারেজ রেশিও, অ্যাকাউন্ট ব্যালেন্স, ব্রোকারের নাম, মনিটরের আকার এবং ইন্টারনেটের গতি',
          'সোমবারের ওপেন, মঙ্গলবারের হাই, বুধবারের লো, বৃহস্পতিবারের ক্লোজ, শুক্রবারের রেঞ্জ এবং রবিবারের গ্যাপ'
        ],
        correctIndex: 0,
        explainEn: 'Step 6 combines all core elements into one pre-session checklist: dealing range, directional bias, session window, liquidity reference, confirmation trigger, and invalidation level.',
        explainBn: '৬ষ্ঠ ধাপে একটি পূর্ণাঙ্গ চেকলিস্টে এই ছয়টি মূল উপাদান একত্রিত করতে বলা হয়েছে: ডিলিং রেঞ্জ, বায়াস, সেশন, লিকুইডিটি রেফারেন্স, কনফার্মেশন এবং ইনভ্যালিডেশন।'
      }
    ]
  },
  '17-applying-bias': {
    lessonId: 17,
    slug: '17-applying-bias',
    masteryPromptEn: 'Can another trader understand your thesis, trigger and invalidation from one pre-session page?',
    masteryPromptBn: 'সেশন শুরুর আগের মাত্র এক পাতার নোট দেখে অন্য একজন ট্রেডার কি আপনার থিসিস, এন্ট্রি ট্রিগার এবং ইনভ্যালিডেশন লেভেল স্পষ্টভাবে বুঝতে পারবেন?',
    completionItems: [
      {
        id: 'read-notes',
        en: 'Read the companion article and studied the primary resources, writing summary notes in my own words.',
        bn: 'সহায়ক আর্টিকেল ও মূল রিসোর্সগুলো পড়েছি এবং নিজের ভাষায় সারসংক্ষেপ নোট লিখেছি।'
      },
      {
        id: 'lab-1',
        en: 'Chart Lab 1: Completed 10 full top-down markups (Daily context → 1H structure/POI → 15m/5m execution conditions) using one consistent instrument.',
        bn: 'চার্ট ল্যাব ১: একটি নির্দিষ্ট ইনস্ট্রুমেন্ট ব্যবহার করে ১০টি পূর্ণাঙ্গ টপ-ডাউন মার্কআপ (ডেইলি কনটেক্সট → ১-ঘণ্টার স্ট্রাকচার/POI → ১৫/৫-মিনিটের এক্সিকিউশন শর্ত) সম্পন্ন করেছি।'
      },
      {
        id: 'lab-2',
        en: 'Chart Lab 2: Saved two screenshots per session (one before the session at the information cutoff, and one after) with zero retrospective redrawing.',
        bn: 'চার্ট ল্যাব ২: পরবর্তীতে চার্টের দাগ পরিবর্তন না করে প্রতিটি সেশনের জন্য দুটি করে স্ক্রিনশট (একটি সেশন শুরুর আগে এবং একটি সেশন শেষে) সংরক্ষণ করেছি।'
      },
      {
        id: 'lab-3',
        en: 'Chart Lab 3: Recorded separately for each session whether the bias hypothesis was correct, whether an eligible entry existed, and whether the plan was followed.',
        bn: 'চার্ট ল্যাব ৩: প্রতিটি সেশনের জন্য বায়াস হাইপোথিসিস সঠিক ছিল কি না, বৈধ এন্ট্রি তৈরি হয়েছিল কি না এবং প্ল্যান অনুসরণ করা হয়েছে কি না—তা আলাদাভাবে রেকর্ড করেছি।'
      },
      {
        id: 'mastery-quiz',
        en: 'Completed the Knowledge Check quiz and answered the Mastery Check prompt without looking at notes.',
        bn: 'নলেজ চেক কুইজ সম্পন্ন করেছি এবং নোট না দেখে মাস্টারি চেক প্রশ্নের উত্তর দিয়েছি।'
      }
    ],
    questions: [
      {
        qEn: 'What is the main purpose of writing a structured top-down session plan before the market opens?',
        qBn: 'মার্কেট ওপেন হওয়ার আগে একটি কাঠামোগত টপ-ডাউন (Top-Down) সেশন প্ল্যান লেখার মূল উদ্দেশ্য কী?',
        optionsEn: [
          'To predict the exact closing price of every 5-minute candle in advance',
          'To reduce the number of decisions you must invent while price is moving by connecting a broad hypothesis to a specific observation and stating what happens if it never arrives',
          'To ensure you take at least three trades every single session',
          'To impress other traders with complicated chart drawings after the session ends'
        ],
        optionsBn: [
          'প্রতিটি ৫-মিনিটের ক্যান্ডেল ঠিক কত প্রাইসে ক্লোজ হবে তা আগেভাগেই ভবিষ্যদ্বাণী করা',
          'একটি সামগ্রিক হাইপোথিসিসকে সুনির্দিষ্ট পর্যবেক্ষণের সাথে যুক্ত করে এবং কাঙ্ক্ষিত পরিস্থিতি তৈরি না হলে কী করতে হবে তা স্পষ্ট করে লাইভ মার্কেটে তাৎক্ষণিক সিদ্ধান্ত বানানোর চাপ কমানো',
          'প্রতিটি সেশনে অন্তত তিনটি ট্রেড নেওয়া নিশ্চিত করা',
          'সেশন শেষে জটিল চার্ট ড্রয়িং দেখিয়ে অন্য ট্রেডারদের মুগ্ধ করা'
        ],
        correctIndex: 1,
        explainEn: 'A pre-session plan eliminates on-the-fly improvisation by linking context, setup zone, execution trigger, invalidation, and no-trade conditions beforehand.',
        explainBn: 'সেশন শুরুর আগের প্ল্যান কনটেক্সট, সেটআপ জোন, এক্সিকিউশন ট্রিগার, ইনভ্যালিডেশন ও নো-ট্রেড শর্তকে আগে থেকেই যুক্ত করে দেয়, ফলে লাইভ মার্কেটে তাৎক্ষণিক অনুমানের প্রয়োজন হয় না।'
      },
      {
        qEn: 'In Lesson 17’s top-down workflow, what is the role of each timeframe transition (Daily → 1H → 15m/5m)?',
        qBn: 'লেসন ১৭-এর টপ-ডাউন ওয়ার্কফ্লোতে এক টাইমফ্রেম থেকে অন্য টাইমফ্রেমে যাওয়ার (Daily → 1H → 15m/5m) মূল নিয়ম কী?',
        optionsEn: [
          'Each lower timeframe is allowed to completely ignore and overwrite the higher-timeframe evidence whenever a small candle moves against you',
          'Start with Daily context and bias/invalidation, use 1H for structure and POIs, and move to 15m/5m only to define entry conditions—adding detail without rewriting earlier evidence',
          'Start on the 1-minute chart and only check the Daily chart if a trade goes into drawdown',
          'Draw POIs on all three timeframes simultaneously and trade whichever level is touched first'
        ],
        optionsBn: [
          'ছোট কোনো ক্যান্ডেল বিপরীতে গেলেই লোয়ার টাইমফ্রেম হায়ার টাইমফ্রেমের সব প্রমাণ মুছে ফেলে নতুন সিদ্ধান্ত নিতে পারে',
          'ডেইলি চার্টে কনটেক্সট ও বায়াস/ইনভ্যালিডেশন নির্ধারণ করে, ১-ঘণ্টায় স্ট্রাকচার ও POI চিহ্নিত করে কেবল এন্ট্রির শর্ত দেখতে ১৫/৫-মিনিটে যাওয়া—যেখানে আগের প্রমাণ না বদলে নতুন ডিটেইল যোগ হয়',
          '১-মিনিট চার্ট দিয়ে শুরু করা এবং কেবল ট্রেড লসে গেলেই ডেইলি চার্ট দেখা',
          'তিনটি টাইমফ্রেমেই একসাথে POI এঁকে যে লেভেলটি আগে স্পর্শ করবে সেখানেই ট্রেড নেওয়া'
        ],
        correctIndex: 1,
        explainEn: 'Top-down analysis flows from Daily context to 1H structure/POIs to 15m/5m execution triggers; lower-timeframe noise must not reverse a well-defined HTF plan without an explicit rule.',
        explainBn: 'টপ-ডাউন অ্যানালাইসিস ডেইলি কনটেক্সট থেকে ১-ঘণ্টার স্ট্রাকচার/POI হয়ে ১৫/৫-মিনিটের এন্ট্রি ট্রিগারে যায়; সুনির্দিষ্ট নিয়ম ছাড়া লোয়ার টাইমফ্রেমের নয়েজ হায়ার টাইমফ্রেমের প্ল্যান উল্টে দিতে পারে না।'
      },
      {
        qEn: 'On the setup chart (such as the 1H timeframe), what should you record regarding Points of Interest (POIs)?',
        qBn: 'সেটআপ চার্টে (যেমন ১-ঘণ্টার টাইমফ্রেমে) পয়েন্ট অব ইন্টারেস্ট (POI) নির্বাচনের ক্ষেত্রে কী রেকর্ড করা উচিত?',
        optionsEn: [
          'Mark every single unmitigated candle on the chart so price is guaranteed to bounce somewhere',
          'Identify the structure and no more than the permitted number of POIs, recording exact zone boundaries and why alternative candidate zones were rejected',
          'Wait until price bounces during the session and then draw the POI box around the bounce point',
          'Only mark POIs that have already been mitigated three times'
        ],
        optionsBn: [
          'চার্টের প্রতিটি আনমিটিগেটেড ক্যান্ডেল মার্ক করা যাতে প্রাইস কোথাও না কোথাও বাউন্স করেই',
          'স্ট্রাকচার এবং আপনার নিয়মে অনুমোদিত সংখ্যক POI চিহ্নিত করা, জোনের সুনির্দিষ্ট সীমানা লেখা এবং বিকল্প অন্য কোনো জোন কেন বাদ দেওয়া হলো তার কারণ রেকর্ড করা',
          'সেশন চলাকালীন প্রাইস বাউন্স করা পর্যন্ত অপেক্ষা করে তারপর সেই বাউন্স পয়েন্টের চারপাশে POI বক্স আঁকা',
          'কেবল যেসব POI ইতিমধ্যে তিনবার মিটিগেটেড হয়েছে সেগুলো মার্ক করা'
        ],
        correctIndex: 1,
        explainEn: 'Limiting POIs to your permitted count, writing exact boundaries, and documenting why alternative zones were rejected prevents post-hoc zone shopping.',
        explainBn: 'অনুমোদিত সংখ্যক POI নির্বাচন করা, সুনির্দিষ্ট সীমানা লেখা এবং বিকল্প জোন কেন বাদ দেওয়া হলো তা নোট করে রাখলে পরবর্তীতে সুবিধামতো জোন পাল্টানোর প্রবণতা বন্ধ হয়।'
      },
      {
        qEn: 'Examine the article’s five-sentence hypothetical session plan: context invalidation below 100, objective at 120, setup zone at 107–109, execution close above a confirmed minor high after zone interaction, and no entry if uncompleted inside the window. What happens if price reaches 120 straight from 111 without ever touching 107–109?',
        qBn: 'আর্টিকেলের পাঁচ বাক্যের কাল্পনিক প্ল্যানটি বিবেচনা করুন: 100-এর নিচে কনটেক্সট ইনভ্যালিডেশন, 120 অবজেক্টিভ, 107–109 সেটআপ জোন, জোনে ট্যাপের পর মাইনর হাইয়ের ওপরে ক্লোজ এবং উইন্ডোর ভেতরে তা না হলে নো এন্ট্রি। প্রাইস যদি 107–109 জোনে না এসে সরাসরি 111 থেকে 120-এ চলে যায়, তবে ফলাফল কী হবে?',
        optionsEn: [
          'Chase the move at 118 because the daily bias was right',
          'The directional hypothesis was supported (objective 120 reached), but the setup prerequisite (107–109 interaction) did not occur, so you record "no eligible entry" and follow the plan',
          'Redraw the setup zone to 110–112 after the session so you can log a winning trade',
          'Mark the daily bias as wrong because you did not get filled'
        ],
        optionsBn: [
          'ডেইলি বায়াস সঠিক ছিল বলে 118 লেভেলেই তাড়াহুড়ো করে এন্ট্রি নিতে হবে',
          'ডিরেকশনাল হাইপোথিসিস সঠিক প্রমাণিত হয়েছে (120 স্পর্শ করেছে), কিন্তু সেটআপের পূর্বশর্ত (107–109 জোনে ট্যাপ) পূরণ হয়নি; তাই প্ল্যান মেনে "কোনো বৈধ এন্ট্রি তৈরি হয়নি" রেকর্ড করতে হবে',
          'সেশন শেষে সেটআপ জোনটি বদলে 110–112 করে দিতে হবে যাতে একটি প্রফিট ট্রেড লগ করা যায়',
          'এন্ট্রি পাননি বলে ডেইলি বায়াসকেই ভুল হিসেবে চিহ্নিত করতে হবে'
        ],
        correctIndex: 1,
        explainEn: 'When price reaches the target without interacting with your preselected 107–109 setup zone, the bias hypothesis succeeded while eligible entries remained zero.',
        explainBn: 'প্রাইস যদি আপনার পূর্বনির্ধারিত 107–109 জোনে না এসেই টার্গেটে চলে যায়, তবে বায়াস হাইপোথিসিস সফল হয়েছে কিন্তু বৈধ কোনো এন্ট্রি তৈরি হয়নি বলে গণ্য হবে।'
      },
      {
        qEn: 'Which of the following is explicitly listed in Lesson 17 as a valid pre-session "no-trade condition"?',
        qBn: 'নিচের কোনটি লেসন ১৭-তে সেশন শুরুর আগের একটি বৈধ "নো-ট্রেড শর্ত (No-trade condition)" হিসেবে স্পষ্টভাবে উল্লেখ করা হয়েছে?',
        optionsEn: [
          'Conflicting structure, major scheduled news restriction, insufficient room to the target objective, unclear stop reference, or confirmation arriving after window expiry',
          'Feeling bored after waiting 15 minutes for a candle to close',
          'Seeing that the previous trade in your journal was a loss',
          'Noticeable agreement between Daily and 1H market structure'
        ],
        optionsBn: [
          'পরস্পরবিরোধী স্ট্রাকচার, বড় নিউজ ইভেন্টের বিধিনিষেধ, টার্গেট পর্যন্ত পর্যাপ্ত জায়গা (Room to objective) না থাকা, অস্পষ্ট স্টপ রেফারেন্স কিংবা উইন্ডোর মেয়াদ শেষে কনফার্মেশন আসা',
          'ক্যান্ডেল ক্লোজ হওয়ার জন্য ১৫ মিনিট অপেক্ষা করে বিরক্ত বোধ করা',
          'জার্নালে আগের ট্রেডটিতে লস হয়েছিল তা দেখতে পাওয়া',
          'ডেইলি এবং ১-ঘণ্টার মার্কেট স্ট্রাকচারের মধ্যে স্পষ্ট মিল থাকা'
        ],
        correctIndex: 0,
        explainEn: 'No-trade conditions identify concrete failed or missing prerequisites: conflicting structure, news exclusions, poor reward room to target, missing stop reference, or expired timing.',
        explainBn: 'নো-ট্রেড শর্তগুলো সুনির্দিষ্ট ঘাটতি নির্দেশ করে: পরস্পরবিরোধী স্ট্রাকচার, নিউজ বিরতি, টার্গেট পর্যন্ত অপর্যাপ্ত জায়গা, অস্পষ্ট স্টপ রেফারেন্স বা নির্ধারিত সময় পার হয়ে যাওয়া।'
      },
      {
        qEn: 'If a fully eligible setup occurs during your observation window, but you miss taking it because you were distracted away from the desk, how should you log it?',
        qBn: 'আপনার পর্যবেক্ষণ উইন্ডোর ভেতরে সম্পূর্ণ বৈধ একটি সেটআপ তৈরি হওয়া সত্ত্বেও আপনি মনোযোগ হারানোর কারণে বা ডেস্কে না থাকায় ট্রেডটি মিস করলে জার্নালে তা কীভাবে লগ করা উচিত?',
        optionsEn: [
          'Rewrite your eligibility rules after the session to claim the setup was actually invalid',
          'Record that an eligible setup existed and log it honestly as a missed opportunity / execution lapse rather than rewriting setup eligibility',
          'Delete the entire day from your backtest sample',
          'Pretend you took the trade if it won, or claim it was invalid if it lost'
        ],
        optionsBn: [
          'সেশন শেষে আপনার নিয়মগুলো বদলে দাবি করুন যে সেটআপটি আসলে ইনভ্যালিড ছিল',
          'সেটআপের বৈধতার নিয়ম পরিবর্তন না করে সততার সাথে রেকর্ড করুন যে একটি বৈধ সেটআপ তৈরি হয়েছিল এবং এটি একটি "মিসড অপরচুনিটি" ছিল',
          'আপনার ব্যাকটেস্ট স্যাম্পল থেকে পুরো দিনটিই মুছে ফেলুন',
          'ট্রেডটি জিতলে ধরে নিন আপনি এন্ট্রি নিয়েছিলেন, আর হারলে দাবি করুন সেটআপটি ইনভ্যালিড ছিল'
        ],
        correctIndex: 1,
        explainEn: 'The article stresses keeping setup eligibility objective: if you miss a valid setup due to distraction, log a missed opportunity rather than distorting your model’s rules.',
        explainBn: 'আর্টিকেলে সেটআপের বৈধতা নিরপেক্ষ রাখার ওপর জোর দেওয়া হয়েছে: অমনোযোগিতার কারণে বৈধ সেটআপ মিস হলে নিয়ম না বাঁকিয়ে সেটিকে "মিসড অপরচুনিটি" হিসেবেই রেকর্ড করতে হবে।'
      },
      {
        qEn: 'Why does Lesson 17 require saving a "before" screenshot at the information cutoff and an "after" screenshot at the end of the session with no retrospective redrawing?',
        qBn: 'লেসন ১৭-তে কেন সেশন শুরুর নির্দিষ্ট সময়ে (Information Cutoff) একটি "Before" স্ক্রিনশট এবং সেশন শেষে কোনো দাগ পরিবর্তন না করে একটি "After" স্ক্রিনশট সেভ করতে বলা হয়েছে?',
        optionsEn: [
          'To double the number of image files stored on your hard drive',
          'To preserve hard visual evidence of your exact pre-session thesis, zone boundaries, and invalidation so hindsight bias cannot alter what you originally planned',
          'Because trading platforms automatically delete drawings every hour',
          'So you can post only the winning "after" screenshots on social media'
        ],
        optionsBn: [
          'আপনার হার্ড ড্রাইভে ছবির ফাইলের সংখ্যা দ্বিগুণ করার জন্য',
          'সেশন শুরুর থিসিস, জোনের সীমানা ও ইনভ্যালিডেশনের অকাট্য ভিজ্যুয়াল প্রমাণ সংরক্ষণ করতে, যাতে পরে ফলাফল দেখে (Hindsight Bias) মূল প্ল্যান বদলে ফেলা না যায়',
          'কারণ ট্রেডিং প্ল্যাটফর্মগুলো প্রতি ঘণ্টায় স্বয়ংক্রিয়ভাবে চার্টের ড্রয়িং মুছে ফেলে',
          'যাতে কেবল প্রফিট হওয়া "After" স্ক্রিনশটগুলো সোশ্যাল মিডিয়ায় পোস্ট করা যায়'
        ],
        correctIndex: 1,
        explainEn: 'Preserving the untouched pre-session screenshot prevents retrospective redrawing and lets you audit whether the actual session honored your original zones and levels.',
        explainBn: 'সেশন শুরুর অপরিবর্তিত স্ক্রিনশট সংরক্ষণ করলে পরবর্তীতে দাগ সরিয়ে ফেলার সুযোগ থাকে না এবং মূল জোন ও লেভেলগুলো আসলে কাজ করেছে কি না তা নিরপেক্ষভাবে যাচাই করা যায়।'
      },
      {
        qEn: 'Why is the five-sentence session plan in the companion article described as "a proposed planning structure, not a complete strategy"?',
        qBn: 'সহায়ক আর্টিকেলে পাঁচ বাক্যের সেশন প্ল্যানটিকে কেন "পূর্ণাঙ্গ স্ট্র্যাটেজি নয়, বরং প্ল্যানিংয়ের একটি প্রস্তাবিত কাঠামো" বলা হয়েছে?',
        optionsEn: [
          'Because a complete strategy for testing also requires explicit entry-price assumptions, position sizing, stop placement, target rules, expiry, and trading costs',
          'Because five sentences are too long for any trader to read',
          'Because strategies do not need invalidation levels or objectives',
          'Because you should never write down your trading plan in sentences'
        ],
        optionsBn: [
          'কারণ প্রকৃত টেস্টিংয়ের একটি পূর্ণাঙ্গ স্ট্র্যাটেজিতে এন্ট্রি প্রাইসের অনুমান, পজিশন সাইজিং, স্টপ লস, টার্গেটের নিয়ম, মেয়াদ (Expiry) এবং ট্রেডিং কস্টের হিসাবও সুনির্দিষ্ট থাকতে হয়',
          'কারণ যেকোনো ট্রেডারের পড়ার জন্য পাঁচটি বাক্য অতিরিক্ত বড়',
          'কারণ স্ট্র্যাটেজিতে ইনভ্যালিডেশন লেভেল বা অবজেক্টিভের প্রয়োজন হয় না',
          'কারণ ট্রেডিং প্ল্যান কখনোই বাক্যে লিখে রাখা উচিত নয়'
        ],
        correctIndex: 0,
        explainEn: 'While the five sentences organize context, POI, trigger, and window expiry, a complete testable strategy also needs execution fill assumptions, sizing, stop/target mechanics, and transaction costs.',
        explainBn: 'পাঁচটি বাক্য কনটেক্সট, POI, ট্রিগার ও উইন্ডো মেয়াদকে সাজিয়ে দিলেও একটি পূর্ণাঙ্গ টেস্টযোগ্য স্ট্র্যাটেজির জন্য এন্ট্রি প্রাইস, সাইজিং, স্টপ/টার্গেট এবং ট্রেডিং কস্টের নিয়মও প্রয়োজন।'
      },
      {
        qEn: 'Suppose during a simulated session you violated your written rule by entering before confirmation, yet the trade still hit the target for a profit. How should this session be reviewed?',
        qBn: 'ধরা যাক একটি সিমুলেটেড সেশনে আপনি লিখিত নিয়ম ভেঙে কনফার্মেশন হওয়ার আগেই এন্ট্রি নিয়েছেন, কিন্তু তা সত্ত্বেও ট্রেডটি টার্গেটে পৌঁছে প্রফিট দিয়েছে। এই সেশনটি কীভাবে রিভিউ করা উচিত?',
        optionsEn: [
          'Score it as 100% perfect because profit and loss (P&L) is the only thing that matters',
          'Identify and record the rule violation (plan not followed) separately from the directional outcome and P&L',
          'Change your written rule immediately so that early unconfirmed entries become standard',
          'Hide the trade from your journal'
        ],
        optionsBn: [
          'এটিকে ১০০% নিখুঁত হিসেবে স্কোর করুন কারণ লাভ-ক্ষতিই (P&L) একমাত্র বিচার্য বিষয়',
          'ডিরেকশনাল ফলাফল এবং লাভ-ক্ষতির (P&L) হিসাব থেকে আলাদা রেখে নিয়ম ভাঙার বিষয়টি (প্ল্যান অনুসরণ করা হয়নি) স্পষ্টভাবে চিহ্নিত ও রেকর্ড করুন',
          'সাথে সাথে আপনার লিখিত নিয়ম বদলে ফেলুন যাতে কনফার্মেশন ছাড়া আগাম এন্ট্রি নেওয়াই মূল নিয়ম হয়ে যায়',
          'জার্নাল থেকে ট্রেডটি লুকিয়ে ফেলুন'
        ],
        correctIndex: 1,
        explainEn: 'Judging a session solely by P&L masks process errors; logging a rule violation during a profitable trade keeps your adherence metric honest.',
        explainBn: 'কেবল লাভ-ক্ষতি (P&L) দিয়ে সেশন বিচার করলে প্রক্রিয়াগত ভুল ঢাকা পড়ে যায়; তাই লাভজনক ট্রেডেও নিয়ম ভাঙলে তা আলাদাভাবে রেকর্ড করতে হবে।'
      },
      {
        qEn: 'In another session review, the directional objective was reached, but the lower-timeframe confirmation occurred 30 minutes after your observation window expired, so you took no trade. How is this evaluated?',
        qBn: 'অন্য একটি সেশন রিভিউতে দেখা গেল ডিরেকশনাল অবজেক্টিভ স্পর্শ করেছে ঠিকই, কিন্তু লোয়ার টাইমফ্রেমের কনফার্মেশন এসেছে আপনার পর্যবেক্ষণ উইন্ডো শেষ হওয়ার ৩০ মিনিট পর, তাই আপনি কোনো ট্রেড নেননি। এটি কীভাবে মূল্যায়িত হবে?',
        optionsEn: [
          'Bias hypothesis supported, eligible entry did not exist (occurred after expiry), and plan was followed',
          'Bias hypothesis failed, eligible entry existed, and plan was violated',
          'Total failure of the trading system requiring a complete rewrite',
          'Count it as a losing trade in your win-rate calculation'
        ],
        optionsBn: [
          'বায়াস হাইপোথিসিস সমর্থন পেয়েছে, কোনো বৈধ এন্ট্রি তৈরি হয়নি (মেয়াদ শেষে কনফার্মেশন এসেছে) এবং প্ল্যান সঠিকভাবে অনুসরণ করা হয়েছে',
          'বায়াস হাইপোথিসিস ব্যর্থ হয়েছে, বৈধ এন্ট্রি ছিল এবং প্ল্যান ভাঙা হয়েছে',
          'ট্রেডিং সিস্টেমের সম্পূর্ণ ব্যর্থতা যার জন্য পুরো নিয়ম নতুন করে লিখতে হবে',
          'উইন-রেট হিসাব করার সময় এটিকে একটি লস ট্রেড হিসেবে গণনা করতে হবে'
        ],
        correctIndex: 0,
        explainEn: 'As the article’s example states: the directional objective was reached, but confirmation occurred after expiry, so the model correctly generated no entry and you followed the plan.',
        explainBn: 'আর্টিকেলের উদাহরণ অনুযায়ী: ডিরেকশনাল অবজেক্টিভ স্পর্শ করেছে, কিন্তু মেয়াদ শেষে কনফার্মেশন আসায় মডেল অনুযায়ী সঠিক কারণেই কোনো এন্ট্রি তৈরি হয়নি এবং আপনি প্ল্যান মেনে চলেছেন।'
      },
      {
        qEn: 'What should you do if new permitted information arrives during the session that requires updating your note?',
        qBn: 'সেশন চলাকালীন যদি নিয়ম অনুযায়ী অনুমোদিত নতুন কোনো তথ্য পাওয়া যায় যার কারণে নোটে আপডেট আনা প্রয়োজন, তবে আপনার কী করা উচিত?',
        optionsEn: [
          'Delete the pre-session text and replace it silently',
          'Preserve the pre-session plan and image at the cutoff, and append any mid-session updates beneath it with explicit timestamps',
          'Start a brand new journal file and throw away the morning screenshot',
          'Never write anything down during or after a session'
        ],
        optionsBn: [
          'সেশন শুরুর টেক্সট মুছে ফেলে নীরবে নতুন টেক্সট বসিয়ে দিন',
          'সেশন শুরুর প্ল্যান ও ছবিটি অপরিবর্তিত রেখে তার নিচে সুনির্দিষ্ট টাইমস্ট্যাম্পসহ (Timestamp) সেশন চলাকালীন আপডেটগুলো যোগ (Append) করুন',
          'নতুন একটি জার্নাল ফাইল খুলে সকালের স্ক্রিনশটটি ফেলে দিন',
          'সেশন চলাকালীন বা সেশন শেষে কখনোই কিছু লিখে রাখবেন না'
        ],
        correctIndex: 1,
        explainEn: 'Keeping the cutoff plan intact and appending timestamped notes during the session preserves the chronological audit trail of what you knew and when.',
        explainBn: 'সেশন শুরুর প্ল্যান অক্ষত রেখে তার নিচে টাইমস্ট্যাম্পসহ নতুন নোট যোগ করলে কোন সময়ে আপনার কাছে কী তথ্য ছিল তার সঠিক ধারাবাহিক প্রমাণ বজায় থাকে।'
      },
      {
        qEn: 'Why does Lesson 17 Step 1 instruct you to begin your top-down routine with a blank daily chart?',
        qBn: 'লেসন ১৭-এর ১ম ধাপে (Step 1) কেন একটি পরিষ্কার বা ব্ল্যাঙ্ক ডেইলি চার্ট (Blank Daily Chart) দিয়ে টপ-ডাউন রুটিন শুরু করতে বলা হয়েছে?',
        optionsEn: [
          'Because old leftover lines from previous weeks can clutter judgment, whereas starting fresh lets you objectively mark previous day high/low, major swing, dealing range, and external target',
          'Because TradingView charges extra money to save drawings overnight',
          'Because daily candles change their historical values every morning',
          'To avoid ever seeing previous day highs and lows'
        ],
        optionsBn: [
          'কারণ আগের সপ্তাহের পুরনো দাগগুলো বিশ্লেষণকে বিভ্রান্ত করতে পারে; তাই পরিষ্কার চার্টে শুরু করলে নিরপেক্ষভাবে আগের দিনের হাই/লো, মেজর সুইং, ডিলিং রেঞ্জ এবং এক্সটার্নাল টার্গেট মার্ক করা যায়',
          'কারণ রাতভর চার্টে ড্রয়িং সেভ করে রাখলে ট্রেডিংভিউ বাড়তি টাকা কাটে',
          'কারণ ডেইলি ক্যান্ডেলগুলো প্রতিদিন সকালে তাদের অতীতের মান পরিবর্তন করে',
          'যাতে আগের দিনের হাই এবং লো কখনোই চোখে না পড়ে'
        ],
        correctIndex: 0,
        explainEn: 'Starting from a clean daily chart ensures you objectively anchor today’s context—PDH/PDL, major swings, dealing range, and external liquidity—without stale clutter.',
        explainBn: 'পরিষ্কার ডেইলি চার্ট দিয়ে শুরু করলে পুরনো দাগের বিভ্রান্তি ছাড়াই আজকের কনটেক্সট—PDH/PDL, মেজর সুইং, ডিলিং রেঞ্জ এবং এক্সটার্নাল লিকুইডিটি—নিরপেক্ষভাবে মার্ক করা যায়।'
      },
      {
        qEn: 'What test does the Mastery Check use to judge whether your pre-session page is clear enough?',
        qBn: 'আপনার সেশন শুরুর নোটটি যথেষ্ট স্পষ্ট হয়েছে কি না তা যাচাই করতে মাস্টারি চেক-এ কোন মানদণ্ডটি ব্যবহার করা হয়েছে?',
        optionsEn: [
          'Whether the page contains at least 2,000 words of market commentary',
          'Whether another trader (or your future self on a second reading) can identify your thesis, trigger, invalidation, and no-entry conditions from that single page without asking what you meant',
          'Whether the trade resulted in a 10R profit',
          'Whether you used at least five different colors of boxes on the chart'
        ],
        optionsBn: [
          'পাতাটিতে অন্তত ২,০০০ শব্দের মার্কেট ধারাভাষ্য লেখা আছে কি না',
          'অন্য কোনো ট্রেডার (বা ভবিষ্যতে দ্বিতীয়বার পড়ার সময় আপনি নিজেই) আপনাকে কিছু জিজ্ঞেস না করে কেবল ওই এক পাতার নোট দেখেই আপনার থিসিস, ট্রিগার, ইনভ্যালিডেশন ও নো-এন্ট্রি শর্ত বুঝতে পারেন কি না',
          'ট্রেডটিতে ১০R প্রফিট হয়েছে কি না',
          'চার্টে অন্তত পাঁচটি ভিন্ন রঙের বক্স ব্যবহার করা হয়েছে কি না'
        ],
        correctIndex: 1,
        explainEn: 'A reproducible session plan is unambiguous: a second reader should be able to determine your exact thesis, trigger, invalidation, and exclusions without needing verbal clarification.',
        explainBn: 'একটি মানসম্মত সেশন প্ল্যান হবে দ্ব্যর্থহীন: দ্বিতীয় কোনো ব্যক্তি বা আপনি নিজে পরে পড়ার সময় বাড়তি কোনো ব্যাখ্যা ছাড়াই যেন থিসিস, ট্রিগার, ইনভ্যালিডেশন ও নো-এন্ট্রি শর্ত স্পষ্ট বুঝতে পারেন।'
      },
      {
        qEn: 'In the Lesson 17 Chart Lab, how should you select the instrument and timeframe pairing across your 10 full top-down markups?',
        qBn: 'লেসন ১৭-এর চার্ট ল্যাবে ১০টি পূর্ণাঙ্গ টপ-ডাউন মার্কআপ করার সময় ইনস্ট্রুমেন্ট এবং টাইমফ্রেম পেয়ারিং কীভাবে নির্বাচন করা উচিত?',
        optionsEn: [
          'Use 10 completely different instruments and change your timeframe pairing on every single chart',
          'Use one consistent instrument and the same timeframe pairing across all 10 plans so the observations are comparable',
          'Switch instruments mid-session whenever the first instrument moves slowly',
          'Only mark charts after reading the daily news summary at night'
        ],
        optionsBn: [
          '১০টি সম্পূর্ণ ভিন্ন ইনস্ট্রুমেন্ট ব্যবহার করুন এবং প্রতিটি চার্টে টাইমফ্রেম পেয়ারিং বদলে ফেলুন',
          'সবগুলো পর্যবেক্ষণ যাতে তুলনাযোগ্য হয় সেজন্য ১০টি প্ল্যানেই একটি নির্দিষ্ট ইনস্ট্রুমেন্ট এবং একই টাইমফ্রেম পেয়ারিং ধারাবাহিকভাবে ব্যবহার করুন',
          'প্রথম ইনস্ট্রুমেন্টটি ধীরগতিতে চললে সেশনের মাঝপথে ইনস্ট্রুমেন্ট বদলে ফেলুন',
          'কেবল রাতে ডেইলি নিউজ সামারি পড়ার পর চার্ট মার্ক করুন'
        ],
        correctIndex: 1,
        explainEn: 'Completing all 10 top-down plans on one instrument and the same chart pairing builds a consistent, comparable sample.',
        explainBn: 'একটি নির্দিষ্ট ইনস্ট্রুমেন্ট এবং একই টাইমফ্রেম পেয়ারিং ব্যবহার করে ১০টি টপ-ডাউন প্ল্যান সম্পন্ন করলে একটি ধারাবাহিক ও তুলনাযোগ্য ডেটাসেট তৈরি হয়।'
      },
      {
        qEn: 'What does Lesson 17 Step 4 warn against when dropping down to the 15m or 5m execution chart?',
        qBn: '১৫-মিনিট বা ৫-মিনিটের এক্সিকিউশন চার্টে যাওয়ার সময় লেসন ১৭-এর ৪র্থ ধাপে (Step 4) কোন বিষয়ে সতর্ক করা হয়েছে?',
        optionsEn: [
          'Do not let lower-timeframe noise reverse a well-defined higher-timeframe plan without an explicit rule',
          'Never use candlesticks on a 5-minute chart',
          'Never place a stop loss on an execution timeframe',
          'Always flip your daily bias every time a 5-minute candle closes in the opposite color'
        ],
        optionsBn: [
          'সুনির্দিষ্ট নিয়ম ছাড়া লোয়ার টাইমফ্রেমের নয়েজ (Noise) যেন আপনার সুসংজ্ঞায়িত হায়ার টাইমফ্রেম প্ল্যানকে উল্টে না দেয় সেদিকে খেয়াল রাখুন',
          '৫-মিনিটের চার্টে কখনোই ক্যান্ডেলস্টিক ব্যবহার করবেন না',
          'এক্সিকিউশন টাইমফ্রেমে কখনোই স্টপ লস বসাবেন না',
          '৫-মিনিটের ক্যান্ডেল বিপরীত রঙে ক্লোজ হলেই প্রতিবার ডেইলি বায়াস উল্টে ফেলুন'
        ],
        correctIndex: 0,
        explainEn: 'The execution chart is used strictly to verify whether your entry trigger forms at the preselected HTF POI; random lower-timeframe fluctuations should not cause you to abandon the HTF plan without a rule.',
        explainBn: 'এক্সিকিউশন চার্টের কাজ হলো কেবল পূর্বনির্ধারিত HTF জোনে আপনার এন্ট্রি ট্রিগার তৈরি হলো কি না তা দেখা; সুনির্দিষ্ট নিয়ম ছাড়া লোয়ার টাইমফ্রেমের সাধারণ ওঠানামায় মূল প্ল্যান ত্যাগ করা যাবে না।'
      }
    ]
  }
};
