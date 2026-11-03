export const WEEK_1_QUIZZES = {
  "01-orientation": {
    "lessonId": 1,
    "slug": "01-orientation",
    "masteryPromptEn": "Explain why a chart pattern alone does not establish an edge; demonstrate a simulated order with a stop.",
    "masteryPromptBn": "ব্যাখ্যা করুন কেন শুধুমাত্র একটি চার্ট প্যাটার্নই কোনো ট্রেডিং এজ (edge) প্রতিষ্ঠা করে না; এবং স্টপ লসসহ একটি সিমুলেটেড অর্ডার কীভাবে দিতে হয় তা প্রদর্শন করুন।",
    "completionItems": [
      {
        "id": "read-notes",
        "en": "Read the companion article and wrote summary notes in my own words.",
        "bn": "সহযোগী আর্টিকেলটি পড়েছি এবং নিজের ভাষায় সারাংশ নোট লিখেছি।"
      },
      {
        "id": "lab-1",
        "en": "Saved a clean chart and identified open, high, low and close on five candles.",
        "bn": "একটি পরিষ্কার চার্ট সেভ করেছি এবং পাঁচটি ক্যান্ডেলে Open, High, Low ও Close চিহ্নিত করেছি।"
      },
      {
        "id": "lab-2",
        "en": "Marked yesterday's high and low and labeled my chart timezone.",
        "bn": "গতকালের High এবং Low মার্ক করেছি এবং আমার চার্টের Timezone লেবেল করেছি।"
      },
      {
        "id": "lab-3",
        "en": "Created a journal with date, symbol, timeframe, setup, bias, stop, target, fees, result in R and screenshot.",
        "bn": "তারিখ, সিম্বল, টাইমফ্রেম, সেটআপ, বায়াস, স্টপ, টার্গেট, ফি, R-এ ফলাফল এবং স্ক্রিনশটসহ একটি জার্নাল তৈরি করেছি।"
      },
      {
        "id": "mastery-quiz",
        "en": "Completed the Knowledge Check quiz and answered the Mastery Check without notes.",
        "bn": "নলেজ চেক কুইজ সম্পন্ন করেছি এবং নোট না দেখে মাস্টারি চেকের উত্তর দিয়েছি।"
      }
    ],
    "questions": [
      {
        "qEn": "When studying two completed candles that have identical Open, High, Low, and Close (OHLC) values, what can you definitively conclude from the finished candles alone?",
        "qBn": "যখন দুটি সম্পূর্ণ হওয়া ক্যান্ডেলের Open, High, Low এবং Close (OHLC) ভ্যালু একদম এক হয়, তখন শুধু তৈরি হওয়া ক্যান্ডেল দুটি দেখে আপনি নিশ্চিতভাবে কী সিদ্ধান্তে আসতে পারেন?",
        "optionsEn": [
          "Both candles experienced the exact same sequence of trades inside the interval.",
          "They share the same summary boundaries, but the internal sequence of whether the high or low formed first remains hidden.",
          "The target was hit before the stop loss in both candles.",
          "Institutional buyers entered at the low and exited at the close in both intervals."
        ],
        "optionsBn": [
          "উভয় ক্যান্ডেলের সময়ের ভেতর ট্রেডের ক্রম একদম হুবহু এক ছিল।",
          "তাদের সংক্ষিপ্ত সীমানাগুলো এক, কিন্তু ভেতরে High নাকি Low আগে তৈরি হয়েছিল সেই ক্রমটি অজানা থেকে যায়।",
          "উভয় ক্যান্ডেলেই স্টপ লসের আগে টার্গেট হিট হয়েছিল।",
          "উভয় সময়েই প্রাতিষ্ঠানিক ক্রেতারা Low-তে এন্ট্রি নিয়েছে এবং Close-এ এক্সিট করেছে।"
        ],
        "correctIndex": 1,
        "explainEn": "A candle compresses all activity over its interval into four values (OHLC), hiding the internal path of trades and whether the high or low was reached first.",
        "explainBn": "একটি ক্যান্ডেল ওই সময়ের সব কার্যকলাপকে চারটি ভ্যালুতে (OHLC) সংক্ষেপে তুলে ধরে, ফলে ভেতরের ট্রেডের ক্রম এবং High বা Low কোনটি আগে ছুঁয়েছে তা জানা যায় না।"
      },
      {
        "qEn": "For a hypothetical candle with an Open of 100, High of 106, Low of 98, and Close of 104, which of the following statements is strictly verified by the candle data?",
        "qBn": "ধরুন একটি কাল্পনিক ক্যান্ডেলের Open 100, High 106, Low 98 এবং Close 104—ক্যান্ডেলের ডেটা অনুযায়ী নিচের কোন তথ্যটি সম্পূর্ণ নিশ্চিত?",
        "optionsEn": [
          "Price dropped to 98 before rallying to 106.",
          "Smart money accumulated positions at 98.",
          "The closing price exceeded the opening price over that interval.",
          "Price rallied to 106 first and then pulled back to 98."
        ],
        "optionsBn": [
          "প্রাইস 106-এ ওঠার আগে 98-এ নেমেছিল।",
          "স্মার্ট মানি 98 লেভেলে পজিশন নিয়েছিল।",
          "ওই সময়ের শেষে Closing প্রাইস Opening প্রাইসের চেয়ে বেশি ছিল।",
          "প্রাইস প্রথমে 106-এ উঠেছিল এবং পরে 98-এ পুলব্যাক করেছিল।"
        ],
        "correctIndex": 2,
        "explainEn": "With Open 100 and Close 104, you only know for sure that the closing price exceeded the opening price; you do not know who bought, why they bought, or whether 106 or 98 happened first.",
        "explainBn": "Open 100 এবং Close 104 থেকে আপনি কেবল এটুকুই নিশ্চিত জানেন যে ক্লোজিং প্রাইস ওপেনিং প্রাইসের চেয়ে বেশি ছিল; কে কিনেছে বা 106 ও 98-এর মধ্যে কোনটি আগে ঘটেছে তা জানা সম্ভব নয়।"
      },
      {
        "qEn": "According to the Lesson 01 study plan, how many instruments should you focus on during your first four weeks of study?",
        "qBn": "লেসন ০১-এর স্টাডি প্ল্যান অনুযায়ী, শেখার প্রথম চার সপ্তাহে আপনার কয়টি ইনস্ট্রুমেন্টের ওপর মনোযোগ দেওয়া উচিত?",
        "optionsEn": [
          "At least five forex pairs and two crypto assets to find the most setups.",
          "Three stock indices and three commodities simultaneously.",
          "A different instrument each day depending on market volatility.",
          "One chosen market/instrument without switching during the first four weeks."
        ],
        "optionsBn": [
          "সবচেয়ে বেশি সেটআপ পাওয়ার জন্য অন্তত পাঁচটি ফরেক্স পেয়ার এবং দুটি ক্রিপ্টো অ্যাসেট।",
          "একই সাথে তিনটি স্টক ইনডেক্স এবং তিনটি কমোডিটি।",
          "মার্কেটের ভোলাটিলিটির ওপর নির্ভর করে প্রতিদিন ভিন্ন ভিন্ন ইনস্ট্রুমেন্ট।",
          "নির্দিষ্ট একটি মার্কেট বা ইনস্ট্রুমেন্ট, এবং প্রথম চার সপ্তাহে সেটি পরিবর্তন করা যাবে না।"
        ],
        "correctIndex": 3,
        "explainEn": "Lesson 01 instructs you to identify one market to study and not switch instruments during your first four weeks so your chart observations remain comparable.",
        "explainBn": "লেসন ০১-এ নির্দেশ দেওয়া হয়েছে যেকোনো একটি মার্কেট বেছে নিতে এবং প্রথম চার সপ্তাহে ইনস্ট্রুমেন্ট পরিবর্তন না করতে, যাতে আপনার চার্ট পর্যবেক্ষণগুলো সহজে তুলনা করা যায়।"
      },
      {
        "qEn": "Why is it critical to fix your data feed and explicitly record your chart timezone before marking historical setups?",
        "qBn": "হিস্টোরিক্যাল সেটআপ মার্ক করার আগে ডেটা ফিড নির্দিষ্ট রাখা এবং চার্টের Timezone স্পষ্টভাবে লিখে রাখা কেন জরুরি?",
        "optionsEn": [
          "Because changing feeds or session boundaries alters how candles form, making your marking practice difficult to compare.",
          "Because TradingView disables drawing tools if the timezone is not set to UTC.",
          "Because limit orders only work in the New York timezone.",
          "Because candlestick wicks disappear when you switch broker feeds."
        ],
        "optionsBn": [
          "কারণ বারবার ফিড বা সেশনের সময় বদলালে ক্যান্ডেলের গঠন বদলে যায়, ফলে আপনার মার্কিং প্র্যাকটিস আগেরটার সাথে মিলিয়ে দেখা কঠিন হয়ে পড়ে।",
          "কারণ টাইমজোন UTC না করলে TradingView ড্রয়িং টুল নিষ্ক্রিয় করে দেয়।",
          "কারণ লিমিট অর্ডার কেবল নিউ ইয়র্ক টাইমজোনে কাজ করে।",
          "কারণ ব্রোকার ফিড পরিবর্তন করলে ক্যান্ডেলের উইক অদৃশ্য হয়ে যায়।"
        ],
        "correctIndex": 0,
        "explainEn": "If you keep changing feeds or session boundaries, the candles themselves can change, making your marking practice inconsistent and hard to review.",
        "explainBn": "বারবার ব্রোকার ফিড বা সেশনের সীমানা বদলাতে থাকলে ক্যান্ডেলের চেহারাও বদলে যেতে পারে, যার ফলে আপনার চার্ট মার্কিংয়ের প্র্যাকটিস আগের রেকর্ডগুলোর সাথে তুলনা করা কঠিন হয়ে পড়ে।"
      },
      {
        "qEn": "What is the fundamental trade-off between a Market Order and a Limit Order?",
        "qBn": "Market Order এবং Limit Order-এর মধ্যে মূল পার্থক্য বা ট্রেড-অফ কী?",
        "optionsEn": [
          "A market order guarantees zero slippage, while a limit order guarantees immediate execution.",
          "A market order prioritizes execution over a specified price, whereas a limit order restricts the price but may remain unfilled.",
          "A market order can only be used for exits, while a limit order can only be used for entries.",
          "A limit order automatically adds leverage, whereas a market order does not."
        ],
        "optionsBn": [
          "মার্কেট অর্ডার জিরো স্লিপেজের নিশ্চয়তা দেয়, আর লিমিট অর্ডার তাৎক্ষণিক এক্সিকিউশনের নিশ্চয়তা দেয়।",
          "মার্কেট অর্ডার নির্দিষ্ট দামের চেয়ে দ্রুত এক্সিকিউশনকে প্রাধান্য দেয়, অন্যদিকে লিমিট অর্ডার দাম বেঁধে দেয় কিন্তু অর্ডারটি ফিল নাও হতে পারে।",
          "মার্কেট অর্ডার কেবল এক্সিটের জন্য এবং লিমিট অর্ডার কেবল এন্ট্রির জন্য ব্যবহার করা যায়।",
          "লিমিট অর্ডার স্বয়ংক্রিয়ভাবে লিভারেজ যোগ করে, কিন্তু মার্কেট অর্ডার তা করে না।"
        ],
        "correctIndex": 1,
        "explainEn": "A market order prioritizes getting filled immediately over a specific price, while a limit order caps the acceptable price at the risk of not being filled.",
        "explainBn": "Market Order নির্দিষ্ট দামের চেয়ে দ্রুত ট্রেড এক্সিকিউট হওয়াকে প্রাধান্য দেয়; আর Limit Order দাম নির্দিষ্ট করে দেয়, তবে এতে অর্ডারটি ফিল না হওয়ার ঝুঁকি থাকে।"
      },
      {
        "qEn": "How does a Stop Order function in trade execution?",
        "qBn": "ট্রেড এক্সিকিউশনে একটি Stop Order কীভাবে কাজ করে?",
        "optionsEn": [
          "It freezes the market price so you never lose more than 1% of your account.",
          "It guarantees an exact fill price even during weekend gaps and high-impact news.",
          "It introduces a price trigger whose subsequent execution depends on the specific order type and trading venue.",
          "It automatically converts every losing trade into a breakeven trade."
        ],
        "optionsBn": [
          "এটি মার্কেট প্রাইস ফ্রিজ করে দেয় যাতে আপনার অ্যাকাউন্টের ১%-এর বেশি লস না হয়।",
          "এটি উইকেন্ড গ্যাপ এবং বড় নিউজের সময়েও হুবহু নির্ধারিত দামে ফিল হওয়ার নিশ্চয়তা দেয়।",
          "এটি একটি প্রাইস ট্রিগার হিসেবে কাজ করে, যার পরবর্তী এক্সিকিউশন নির্ভর করে অর্ডারের ধরন এবং মার্কেট ভেন্যুর ওপর।",
          "এটি স্বয়ংক্রিয়ভাবে প্রতিটি লস হতে থাকা ট্রেডকে ব্রেকইভেন ট্রেডে রূপান্তর করে।"
        ],
        "correctIndex": 2,
        "explainEn": "A stop order acts as a trigger; once price reaches the stop level, how the order executes depends on the order configuration (e.g., stop-market vs. stop-limit) and venue liquidity.",
        "explainBn": "Stop Order একটি ট্রিগার হিসেবে কাজ করে; প্রাইস ওই লেভেলে পৌঁছালে পরবর্তীতে অর্ডারটি কীভাবে এক্সিকিউট হবে তা নির্ভর করে অর্ডারের ধরন এবং মার্কেট ভেন্যুর ওপর।"
      },
      {
        "qEn": "Why must you distinguish between a chart point, a tick, a unit, and a contract when sizing a position?",
        "qBn": "পজিশন সাইজ নির্ধারণের সময় কেন আপনাকে Chart Point, Tick, Unit এবং Contract-এর পার্থক্য বুঝতে হবে?",
        "optionsEn": [
          "Because tick size determines the color of the candlesticks on your template.",
          "Because all instruments pay exactly $10 per tick by international regulation.",
          "Because chart points only apply to cryptocurrency and ticks only apply to stocks.",
          "Because a move of one chart point does not have the same cash value across every instrument."
        ],
        "optionsBn": [
          "কারণ টিক সাইজ আপনার টেমপ্লেটের ক্যান্ডেলস্টিকের রঙ নির্ধারণ করে।",
          "কারণ আন্তর্জাতিক নিয়ম অনুযায়ী সব ইনস্ট্রুমেন্টে প্রতি টিকের মূল্য ঠিক ১০ ডলার।",
          "কারণ চার্ট পয়েন্ট কেবল ক্রিপ্টোকারেন্সিতে এবং টিক কেবল স্টকে ব্যবহৃত হয়।",
          "কারণ চার্টে এক পয়েন্ট মুভমেন্ট মানেই সব ইনস্ট্রুমেন্টে একই পরিমাণ টাকার হিসাব নয়।"
        ],
        "correctIndex": 3,
        "explainEn": "Different instruments have different tick sizes, tick values, and contract multipliers, so a one-point chart move translates to very different cash amounts depending on the product.",
        "explainBn": "ভিন্ন ভিন্ন ইনস্ট্রুমেন্টের টিক সাইজ, টিক ভ্যালু এবং কন্ট্রাক্ট মাল্টিপ্লায়ার আলাদা হয়, তাই চার্টে এক পয়েন্ট মুভমেন্ট মানেই সব মার্কেটে একই পরিমাণ টাকার হিসাব নয়।"
      },
      {
        "qEn": "Which five standard chart templates does the Lesson 01 worksheet instruct you to create?",
        "qBn": "লেসন ০১-এর ওয়ার্কশিটে আপনাকে কোন পাঁচটি স্ট্যান্ডার্ড চার্ট টেমপ্লেট তৈরি করতে বলা হয়েছে?",
        "optionsEn": [
          "Blank candlesticks, swing structure, liquidity levels, PD arrays, and top-down analysis.",
          "RSI, MACD, Bollinger Bands, Moving Averages, and Ichimoku Cloud.",
          "1-minute scalping, 5-minute news, 1-hour swing, weekly macro, and monthly dividend.",
          "Forex template, Crypto template, Futures template, Options template, and Bonds template."
        ],
        "optionsBn": [
          "Blank candlesticks, swing structure, liquidity levels, PD arrays এবং top-down analysis।",
          "RSI, MACD, Bollinger Bands, Moving Averages এবং Ichimoku Cloud।",
          "1-minute scalping, 5-minute news, 1-hour swing, weekly macro এবং monthly dividend।",
          "Forex টেমপ্লেট, Crypto টেমপ্লেট, Futures টেমপ্লেট, Options টেমপ্লেট এবং Bonds টেমপ্লেট।"
        ],
        "correctIndex": 0,
        "explainEn": "Step 4 of Lesson 01 specifies creating five standard chart templates: blank candlesticks, swing structure, liquidity levels, PD arrays, and top-down analysis.",
        "explainBn": "লেসন ০১-এর ৪ নম্বর ধাপে পাঁচটি স্ট্যান্ডার্ড চার্ট টেমপ্লেট তৈরি করতে বলা হয়েছে: blank candlesticks, swing structure, liquidity levels, PD arrays এবং top-down analysis।"
      },
      {
        "qEn": "According to Lesson 01, what is the difference between simply marking a chart and maintaining a rule-and-outcome log?",
        "qBn": "লেসন ০১ অনুযায়ী, সাধারণভাবে চার্ট মার্ক করা এবং একটি রুল-অ্যান্ড-আউটকাম (rule and outcome) লগ বজায় রাখার মধ্যে পার্থক্য কী?",
        "optionsEn": [
          "Marking a chart is testing; a rule and outcome log is only for tax reporting.",
          "Marking a chart is practice; a rule and outcome log is testing.",
          "There is no difference; drawing rectangles on historical charts proves a statistical edge.",
          "Marking a chart is for beginners, while outcome logs are only needed after five years of live trading."
        ],
        "optionsBn": [
          "চার্ট মার্ক করা হলো টেস্টিং; আর রুল ও আউটকাম লগ কেবল ট্যাক্স রিপোর্টিংয়ের জন্য।",
          "চার্ট মার্ক করা হলো প্র্যাকটিস (অনুশীলন); আর রুল ও আউটকাম লগ রাখা হলো টেস্টিং (পরীক্ষা)।",
          "কোনো পার্থক্য নেই; পুরোনো চার্টে বক্স আঁকলেই স্ট্যাটিস্টিক্যাল এজ প্রমাণিত হয়।",
          "চার্ট মার্ক করা নতুনদের জন্য, আর আউটকাম লগ কেবল পাঁচ বছর লাইভ ট্রেডিংয়ের পর প্রয়োজন হয়।"
        ],
        "correctIndex": 1,
        "explainEn": "Simply marking a chart is visual practice, whereas recording explicit rules and their subsequent outcomes in an evidence log constitutes actual testing.",
        "explainBn": "চার্ট মার্ক করা কেবল চোখের অনুশীলন বা প্র্যাকটিস; কিন্তু সুনির্দিষ্ট নিয়ম এবং তার ফলাফল লগে লিখে রাখাই হলো প্রকৃত টেস্টিং।"
      },
      {
        "qEn": "Where does a chart pattern belong if you select it after its successful outcome is already visible on the chart?",
        "qBn": "কোনো চার্ট প্যাটার্ন সফল হওয়ার পর সেটি দেখে আপনি যদি তা বেছে নেন, তবে সেটির স্থান কোথায় হওয়া উচিত?",
        "optionsEn": [
          "In your verified live performance track record.",
          "In your forward paper-trading win-rate calculation.",
          "In the example library for concept study, not in an unbiased performance sample.",
          "In your position-sizing multiplier formula."
        ],
        "optionsBn": [
          "আপনার ভেরিফায়েড লাইভ পারফরম্যান্স ট্র্যাক রেকর্ডে।",
          "আপনার ফরোয়ার্ড পেপার-ট্রেডিং উইন-রেট হিসাবের ভেতর।",
          "কনসেপ্ট শেখার উদাহরণের লাইব্রেরিতে (example library), কোনো নিরপেক্ষ পারফরম্যান্স ডেটার স্যাম্পলে নয়।",
          "আপনার পজিশন-সাইজিং মাল্টিপ্লায়ার ফর্মুলায়।"
        ],
        "correctIndex": 2,
        "explainEn": "A pattern chosen after its success is already visible is tainted by hindsight bias, so it belongs in an illustrative example library rather than an unbiased test sample.",
        "explainBn": "প্যাটার্ন সফল হওয়ার পর সেটি দেখে বেছে নিলে তাতে হিন্ডসাইট বায়াস থাকে, তাই এটি কেবল উদাহরণের লাইব্রেরিতে রাখার কাজে আসে, নিরপেক্ষ পারফরম্যান্স স্যাম্পল হিসেবে নয়।"
      },
      {
        "qEn": "What are the core rules of the initial risk policy required in Lesson 01?",
        "qBn": "লেসন ০১-এ নির্ধারিত প্রাথমিক রিস্ক পলিসির (risk policy) মূল নিয়মগুলো কী কী?",
        "optionsEn": [
          "Use 100x leverage on a small real account to build psychology quickly.",
          "Risk 10% of real capital per trade until the account doubles.",
          "Purchase premium signals and copy trades while studying Week 1.",
          "Simulated trading only while learning, no borrowed money, and no guaranteed-income expectations."
        ],
        "optionsBn": [
          "দ্রুত সাইকোলজি গড়ে তোলার জন্য ছোট রিয়েল অ্যাকাউন্টে ১০০ গুণ লিভারেজ ব্যবহার করা।",
          "অ্যাকাউন্ট দ্বিগুণ না হওয়া পর্যন্ত প্রতি ট্রেডে রিয়েল ক্যাপিটালের ১০% ঝুঁকি নেওয়া।",
          "প্রথম সপ্তাহে পড়ার পাশাপাশি প্রিমিয়াম সিগন্যাল কেনা এবং ট্রেড কপি করা।",
          "শেখার সময় শুধুমাত্র সিমুলেটেড ট্রেডিং করা, কোনো ধার করা টাকা ব্যবহার না করা এবং নিশ্চিত আয়ের প্রত্যাশা না রাখা।"
        ],
        "correctIndex": 3,
        "explainEn": "Step 6 of Lesson 01 mandates simulated trading only while learning, never using borrowed money, and rejecting guaranteed-income expectations.",
        "explainBn": "লেসন ০১-এর ৬ নম্বর ধাপে স্পষ্ট বলা হয়েছে: শেখার সময় কেবল সিমুলেটেড ট্রেডিং করতে হবে, কোনো ধার করা টাকা ব্যবহার করা যাবে না এবং নিশ্চিত আয়ের অলীক প্রত্যাশা রাখা যাবে না।"
      },
      {
        "qEn": "When using TradingView for practice, how should you handle historical Bar Replay results versus forward Paper Trading results?",
        "qBn": "প্র্যাকটিসের জন্য TradingView ব্যবহারের সময় হিস্টোরিক্যাল Bar Replay ফলাফল এবং ফরোয়ার্ড Paper Trading ফলাফল কীভাবে পরিচালনা করা উচিত?",
        "optionsEn": [
          "Keep forward paper-trading results separate from historical replay records, and export/save records outside the session.",
          "Combine them into a single win rate so your sample size looks larger.",
          "Only save winning replay trades and delete losing paper trades.",
          "Never record replay trades because historical candles cannot be viewed."
        ],
        "optionsBn": [
          "ফরোয়ার্ড পেপার-ট্রেডিং ফলাফলকে হিস্টোরিক্যাল রিপ্লে রেকর্ড থেকে আলাদা রাখা উচিত এবং সেশনের বাইরে রেকর্ডগুলো এক্সপোর্ট/সেভ করে রাখা উচিত।",
          "স্যাম্পল সাইজ বড় দেখানোর জন্য দুটিকেই একসাথে মিশিয়ে একটি উইন রেট তৈরি করা উচিত।",
          "কেবল লাভজনক রিপ্লে ট্রেডগুলো সেভ করা এবং লস হওয়া পেপার ট্রেডগুলো মুছে ফেলা উচিত।",
          "রিপ্লে ট্রেড কখনোই রেকর্ড করা উচিত নয় কারণ পুরোনো ক্যান্ডেল দেখা যায় না।"
        ],
        "correctIndex": 0,
        "explainEn": "Historical replay and live forward paper trading operate under different conditions, so their logs must be kept separate and saved outside the platform session.",
        "explainBn": "হিস্টোরিক্যাল রিপ্লে এবং ফরোয়ার্ড পেপার ট্রেডিংয়ের পরিবেশ আলাদা হওয়ায় এদের ফলাফল আলাদা রাখতে হয় এবং প্ল্যাটফর্ম সেশনের বাইরে সেভ করে রাখতে হয়।"
      },
      {
        "qEn": "Which set of fields is explicitly required in your Lesson 01 trading journal?",
        "qBn": "লেসন ০১-এর ট্রেডিং জার্নালে নিচের কোন তথ্যগুলো থাকা বাধ্যতামূলক?",
        "optionsEn": [
          "Only the ticker symbol and the dollar profit.",
          "Date, symbol, timeframe, setup, bias, stop, target, fees, result in R, and screenshot.",
          "Indicator settings, YouTube channel name, and cosmic moon phase.",
          "Entry price only, without stop loss or fees."
        ],
        "optionsBn": [
          "কেবল টিকার সিম্বল এবং কত ডলার লাভ হলো।",
          "তারিখ, সিম্বল, টাইমফ্রেম, সেটআপ, বায়াস, স্টপ, টার্গেট, ফি, R-এ ফলাফল এবং স্ক্রিনশট।",
          "ইন্ডিকেটরের সেটিংস, ইউটিউব চ্যানেলের নাম এবং চাঁদের তিথি।",
          "স্টপ লস বা ফি ছাড়া কেবল এন্ট্রি প্রাইস।"
        ],
        "correctIndex": 1,
        "explainEn": "The Lesson 01 Chart Lab requires creating a journal with date, symbol, timeframe, setup, bias, stop, target, fees, result in R, and screenshot.",
        "explainBn": "লেসন ০১-এর চার্ট ল্যাব অনুযায়ী জার্নালে তারিখ, সিম্বল, টাইমফ্রেম, সেটআপ, বায়াস, স্টপ, টার্গেট, ফি, R-এ ফলাফল এবং স্ক্রিনশট থাকা আবশ্যক।"
      },
      {
        "qEn": "Why does the companion article recommend giving every chart exercise a specific question, such as \"Can I save a decision before revealing the next candle?\"",
        "qBn": "সহযোগী আর্টিকেলে কেন প্রতিটি চার্ট অনুশীলনের পেছনে একটি নির্দিষ্ট প্রশ্ন (যেমন: \"পরের ক্যান্ডেলটি দেখার আগেই কি আমি আমার সিদ্ধান্ত সেভ করতে পারছি?\") রাখার পরামর্শ দেওয়া হয়েছে?",
        "optionsEn": [
          "Because asking questions automatically increases the payout ratio of a trade.",
          "Because TradingView requires a security question before unlocking Bar Replay.",
          "Because it produces concrete, reviewable evidence of whether your rule can be applied consistently without hindsight.",
          "Because it eliminates the need to place a stop loss on simulated orders."
        ],
        "optionsBn": [
          "কারণ প্রশ্ন করলে ট্রেডের পেআউট রেশিও স্বয়ংক্রিয়ভাবে বেড়ে যায়।",
          "কারণ Bar Replay আনলক করার আগে TradingView-তে একটি সিকিউরিটি প্রশ্ন দিতে হয়।",
          "কারণ এটি বাস্তব ও রিভিউ করার মতো প্রমাণ তৈরি করে যে আপনি ভবিষ্যতের ক্যান্ডেল না দেখেই ধারাবাহিকভাবে আপনার নিয়ম প্রয়োগ করতে পারছেন কি না।",
          "কারণ এতে সিমুলেটেড অর্ডারে স্টপ লস বসানোর প্রয়োজন থাকে না।"
        ],
        "correctIndex": 2,
        "explainEn": "Framing each exercise around a testable question creates objective evidence you can later review for consistency and lookahead bias.",
        "explainBn": "প্রতিটি অনুশীলনের পেছনে একটি সুনির্দিষ্ট প্রশ্ন রাখলে তা আপনাকে পরে রিভিউ করার মতো বাস্তব প্রমাণ দেয় এবং ভবিষ্যতের তথ্য দেখে ফেলার ভুল থেকে বাঁচায়।"
      },
      {
        "qEn": "What specific pitfall does the Lesson 01 \"Watch for\" note warn against?",
        "qBn": "লেসন ০১-এর \"Watch for\" নোটে কোন নির্দিষ্ট ভুলটি থেকে সতর্ক থাকতে বলা হয়েছে?",
        "optionsEn": [
          "Avoid using candlestick charts on timeframes higher than 15 minutes.",
          "Avoid recording fees and commissions in your paper-trading journal.",
          "Avoid marking yesterday’s high and low on your chart.",
          "Avoid purchasing indicators or using real capital before you can define a setup."
        ],
        "optionsBn": [
          "১৫ মিনিটের চেয়ে বড় টাইমফ্রেমে ক্যান্ডেলস্টিক চার্ট ব্যবহার করা থেকে বিরত থাকুন।",
          "পেপার-ট্রেডিং জার্নালে ফি এবং কমিশন লিখে রাখা থেকে বিরত থাকুন।",
          "চার্টে গতকালের High এবং Low মার্ক করা থেকে বিরত থাকুন।",
          "নিজে একটি সেটআপ সংজ্ঞায়িত করতে শেখার আগেই কোনো ইন্ডিকেটর কেনা বা রিয়েল ক্যাপিটাল ব্যবহার করা থেকে বিরত থাকুন।"
        ],
        "correctIndex": 3,
        "explainEn": "Lesson 01 explicitly warns learners to avoid purchasing indicators or risking real capital before they can clearly define and test a setup.",
        "explainBn": "লেসন ০১-এ স্পষ্টভাবে সতর্ক করা হয়েছে যেন শিক্ষার্থীরা নিজে একটি সেটআপ সংজ্ঞায়িত করতে শেখার আগে কোনো ইন্ডিকেটর না কেনে বা আসল টাকা ঝুঁকিতে না ফেলে।"
      }
    ]
  },
  "02-pullback-identification": {
    "lessonId": 2,
    "slug": "02-pullback-identification",
    "masteryPromptEn": "Given a chart, explain which level would turn your pullback interpretation into a reversal hypothesis.",
    "masteryPromptBn": "একটি চার্ট দেখে ব্যাখ্যা করুন ঠিক কোন লেভেলটি ব্রেক করলে আপনার Pullback-এর ধারণাটি একটি Reversal হাইপোথিসিসে রূপ নেবে।",
    "completionItems": [
      {
        "id": "read-notes",
        "en": "Read the companion article and wrote summary notes in my own words.",
        "bn": "সহযোগী আর্টিকেলটি পড়েছি এবং নিজের ভাষায় সারাংশ নোট লিখেছি।"
      },
      {
        "id": "lab-1",
        "en": "Annotated 15 bullish and 15 bearish impulse/pullback sequences.",
        "bn": "১৫টি বুলিশ এবং ১৫টি বিয়ারিশ ইম্পালস/পুলব্যাক সিকোয়েন্স চার্টে চিহ্নিত করেছি।"
      },
      {
        "id": "lab-2",
        "en": "Froze the chart before the next candle on five examples and predicted only whether my rule was triggered.",
        "bn": "পাঁচটি উদাহরণে পরের ক্যান্ডেল আসার আগে চার্ট ফ্রিজ করেছি এবং কেবল আমার রুলটি ট্রিগার হয়েছে কি না তা পূর্বাভাস দিয়েছি।"
      },
      {
        "id": "lab-3",
        "en": "Labeled the invalidation swing for each impulse/pullback sequence.",
        "bn": "প্রতিটি ইম্পালস/পুলব্যাক সিকোয়েন্সের জন্য ইনভ্যালিডেশন সুইংটি লেবেল করেছি।"
      },
      {
        "id": "mastery-quiz",
        "en": "Completed the Knowledge Check quiz and answered the Mastery Check without notes.",
        "bn": "নলেজ চেক কুইজ সম্পন্ন করেছি এবং নোট না দেখে মাস্টারি চেকের উত্তর দিয়েছি।"
      }
    ],
    "questions": [
      {
        "qEn": "What must you mark on your chart BEFORE labeling any price movement as a pullback or correction?",
        "qBn": "চার্টে কোনো প্রাইস মুভমেন্টকে Pullback বা কারেকশন হিসেবে লেবেল করার আগে আপনাকে অবশ্যই কোনটি মার্ক করতে হবে?",
        "optionsEn": [
          "At least three moving average crossovers.",
          "Every single red candle on the 1-minute chart.",
          "The dominant directional leg (impulse) and the confirmed structural level it depends on.",
          "The exact fib retracement level where price is guaranteed to bounce."
        ],
        "optionsBn": [
          "অন্তত তিনটি মুভিং অ্যাভারেজ ক্রসওভার।",
          "১ মিনিটের চার্টের প্রতিটি লাল ক্যান্ডেল।",
          "প্রধান ডিরেকশনাল লেগ (Impulse) এবং সেটি যে কনফার্মড স্ট্রাকচারাল লেভেলের ওপর দাঁড়িয়ে আছে।",
          "সঠিক ফিবোনাচ্চি লেভেল যেখান থেকে প্রাইস নিশ্চিতভাবে বাউন্স করবে।"
        ],
        "correctIndex": 2,
        "explainEn": "A pullback only has meaning relative to an earlier directional move, so you must first mark the dominant impulse leg and its protected structural level.",
        "explainBn": "পূর্ববর্তী কোনো ডিরেকশনাল মুভের সাপেক্ষেই কেবল Pullback সংজ্ঞায়িত হয়, তাই সবার আগে মূল ইম্পালস লেগ এবং তার কনফার্মড স্ট্রাকচারাল লেভেলটি মার্ক করতে হবে।"
      },
      {
        "qEn": "Why should you NOT define a pullback simply by counting candle colors (for example, calling every red candle in an uptrend a pullback)?",
        "qBn": "শুধুমাত্র ক্যান্ডেলের রঙ গুনে (যেমন আপট্রেন্ডে প্রতিটি লাল ক্যান্ডেলকে পুলব্যাক বলা) কেন Pullback সংজ্ঞায়িত করা উচিত নয়?",
        "optionsEn": [
          "Because candle colors change randomly every time you refresh your browser.",
          "Because institutional traders hide candle colors on their terminals.",
          "Because pullbacks only happen on green candles.",
          "Because one red candle can occur inside a continuing advance, and the relationship between swings is far more informative than candle color."
        ],
        "optionsBn": [
          "কারণ ব্রাউজার রিফ্রেশ করলেই ক্যান্ডেলের রঙ এলোমেলোভাবে বদলে যায়।",
          "কারণ প্রাতিষ্ঠানিক ট্রেডাররা তাদের টার্মিনালে ক্যান্ডেলের রঙ লুকিয়ে রাখে।",
          "কারণ পুলব্যাক কেবল সবুজ ক্যান্ডেলেই ঘটে।",
          "কারণ চলমান আপট্রেন্ডের ভেতরেও একটি লাল ক্যান্ডেল হতে পারে, এবং ক্যান্ডেলের রঙের চেয়ে সুইংগুলোর মধ্যকার সম্পর্ক অনেক বেশি কার্যকর তথ্য দেয়।"
        ],
        "correctIndex": 3,
        "explainEn": "A single opposing-color candle can be minor noise inside an expansion; structural relationships between highs and lows matter more than candle color.",
        "explainBn": "একটি বিপরীত রঙের ক্যান্ডেল চলমান মুভের ভেতর সাধারণ পজ হতে পারে; ক্যান্ডেলের রঙের চেয়ে সুইংগুলোর মধ্যকার স্ট্রাকচারাল সম্পর্ক অনেক বেশি গুরুত্বপূর্ণ।"
      },
      {
        "qEn": "In the companion article’s hypothetical sequence, price rises from 100 to 110, corrects to 106, rallies to 114, and then falls to 109. Which level serves as the critical structural low for the upward interpretation?",
        "qBn": "আর্টিকেলের কাল্পনিক উদাহরণে প্রাইস 100 থেকে 110-এ ওঠে, কারেকশন করে 106-এ নামে, এরপর 114 পর্যন্ত যায় এবং পরে 109-এ নেমে আসে। এখানে আপট্রেন্ডের ধারণাটি বহাল থাকার জন্য কোন লেভেলটি সবচেয়ে গুরুত্বপূর্ণ স্ট্রাকচারাল Low?",
        "optionsEn": [
          "106",
          "110",
          "114",
          "109"
        ],
        "optionsBn": [
          "106",
          "110",
          "114",
          "109"
        ],
        "correctIndex": 0,
        "explainEn": "Because the correction to 106 led to the new high at 114, the confirmed low at 106 becomes the protected structural level supporting the upward interpretation.",
        "explainBn": "যেহেতু 106-এ কারেকশন করার পর প্রাইস 114-তে নতুন High তৈরি করেছে, তাই বর্তমান সুইং রুল অনুযায়ী 106-এর কনফার্মড Low-টিই হলো আপট্রেন্ডের মূল ভিত্তি।"
      },
      {
        "qEn": "In that same sequence (100 -> 110 -> 106 -> 114, followed by a drop to 109), what does the observation \"Price is at 109 (below 114) while 106 remains intact\" support?",
        "qBn": "একই উদাহরণে (100 -> 110 -> 106 -> 114, এবং পরে 109-এ নামা), \"প্রাইস এখন 114-এর নিচে (109-এ) কিন্তু 106 Low এখনো অক্ষত আছে\"—এই পর্যবেক্ষণটি কী সমর্থন করে?",
        "optionsEn": [
          "A confirmed bearish trend reversal is already complete.",
          "A correction is underway and the larger upward interpretation remains possible, though whether a new advance will occur is still unknown.",
          "Price is guaranteed to break above 114 on the very next candle.",
          "The 100 level has already been invalidated."
        ],
        "optionsBn": [
          "একটি কনফার্মড বিয়ারিশ ট্রেন্ড রিভার্সাল ইতোমধ্যে সম্পন্ন হয়েছে।",
          "একটি কারেকশন চলছে এবং বড় আপট্রেন্ডের ধারণাটি এখনো বহাল থাকার সুযোগ আছে, যদিও নতুন বুলিশ মুভ শুরু হবে কি না তা এখনো অজানা।",
          "ঠিক পরের ক্যান্ডেলেই প্রাইস নিশ্চিতভাবে 114 ব্রেক করে ওপরে যাবে।",
          "100 লেভেলটি ইতোমধ্যে ইনভ্যালিড হয়ে গেছে।"
        ],
        "correctIndex": 1,
        "explainEn": "Trading below 114 while holding above 106 shows a pullback is underway and keeps the bullish structure valid, without guaranteeing that a new high must happen.",
        "explainBn": "114-এর নিচে থাকায় বোঝা যায় একটি কারেকশন চলছে এবং 106 অক্ষত থাকায় বুলিশ স্ট্রাকচার এখনো ভ্যালিড আছে, তবে নতুন র‍্যালি হবেই কি না তা এখনো অজানা।"
      },
      {
        "qEn": "In the 100 -> 110 -> 106 -> 114 sequence, if a completed candle closes below 106 under a close-based rule, what is known and what remains unknown?",
        "qBn": "100 -> 110 -> 106 -> 114 সিকোয়েন্সে যদি Close-ভিত্তিক নিয়ম অনুযায়ী একটি সম্পূর্ণ ক্যান্ডেল 106-এর নিচে ক্লোজ দেয়, তবে কোনটি নিশ্চিত জানা যায় এবং কোনটি অজানা থাকে?",
        "optionsEn": [
          "It is known that 106 was an invalid candle; it remains unknown what the close price was.",
          "It is known that a massive crash to 50 is guaranteed; nothing remains unknown.",
          "It is known that the prior upward interpretation has failed; it remains unknown whether the next regime will trend downward or range.",
          "It is known that the uptrend is stronger than ever; it remains unknown when to buy."
        ],
        "optionsBn": [
          "এটি নিশ্চিত যে 106 একটি ভুল ক্যান্ডেল ছিল; ক্লোজ প্রাইস কত ছিল তা অজানা।",
          "এটি নিশ্চিত যে প্রাইস ক্র্যাশ করে ৫০-এ যাবে; কিছুই আর অজানা নেই।",
          "এটি নিশ্চিত যে আগের আপট্রেন্ডের ধারণাটি বাতিল (Invalid) হয়েছে; তবে পরবর্তী মার্কেট ডাউনট্রেন্ডে যাবে নাকি রেঞ্জিং করবে তা এখনো অজানা।",
          "এটি নিশ্চিত যে আপট্রেন্ড আগের চেয়েও শক্তিশালী হয়েছে; কখন বাই দিতে হবে তা অজানা।"
        ],
        "correctIndex": 2,
        "explainEn": "A close below 106 invalidates the prior bullish interpretation under a close-based rule, but does not automatically guarantee whether price will trend down or consolidate.",
        "explainBn": "106-এর নিচে ক্যান্ডেল ক্লোজ হলে আগের বুলিশ ধারণাটি বাতিল হয়ে যায়, কিন্তু এরপর মার্কেট সরাসরি ডাউনট্রেন্ডে যাবে নাকি রেঞ্জিং করবে তা তখনই নিশ্চিত বলা যায় না।"
      },
      {
        "qEn": "Does a deep retracement (for example, retracing 75% of the prior impulse leg) automatically mean the trend has reversed?",
        "qBn": "একটি গভীর কারেকশন বা ডিপ পুলব্যাক (যেমন আগের ইম্পালস লেগের ৭৫% ফিরে আসা) হলেই কি স্বয়ংক্রিয়ভাবে ট্রেন্ড রিভার্স করেছে বলে ধরে নেওয়া যায়?",
        "optionsEn": [
          "Yes, any pullback deeper than 50% is automatically a trend reversal.",
          "No, because trend reversals can never happen after a deep pullback.",
          "Yes, deep pullbacks only happen in bear markets.",
          "No, a larger retracement is not automatically a trend reversal without structural evidence (such as invalidating the protected swing)."
        ],
        "optionsBn": [
          "হ্যাঁ, ৫০%-এর বেশি যেকোনো পুলব্যাকই স্বয়ংক্রিয়ভাবে একটি ট্রেন্ড রিভার্সাল।",
          "না, কারণ গভীর পুলব্যাকের পর কখনোই ট্রেন্ড রিভার্সাল হতে পারে না।",
          "হ্যাঁ, গভীর পুলব্যাক কেবল বিয়ার মার্কেটেই ঘটে।",
          "না, স্ট্রাকচারাল প্রমাণ (যেমন প্রোটেক্টেড সুইং ইনভ্যালিডেট হওয়া) ছাড়া বড় কারেকশন মানেই স্বয়ংক্রিয়ভাবে ট্রেন্ড রিভার্সাল নয়।"
        ],
        "correctIndex": 3,
        "explainEn": "Lesson 02 emphasizes that comparing shallow, deep, and overlapping pullbacks is useful, but a deeper retracement is not a reversal unless your structural invalidation rule is triggered.",
        "explainBn": "লেসন ০২-এ জোর দিয়ে বলা হয়েছে যে স্ট্রাকচারাল প্রমাণ বা প্রোটেক্টেড সুইং ব্রেক না হওয়া পর্যন্ত কেবল বড় কারেকশন দেখেই ট্রেন্ড রিভার্সাল ধরে নেওয়া যাবে না।"
      },
      {
        "qEn": "When observing a pullback approaching a Fair Value Gap (FVG) or prior support/resistance area, how should you treat that zone?",
        "qBn": "যখন একটি Pullback কোনো Fair Value Gap (FVG) বা পূর্ববর্তী সাপোর্ট/রেজিস্ট্যান্স জোনের দিকে আসে, তখন সেই জোনটিকে কীভাবে দেখা উচিত?",
        "optionsEn": [
          "Observe whether price reaches the area and how it reacts, without assuming it must reverse there.",
          "Assume price must reverse at the exact tick of the FVG and enter blindly.",
          "Delete your invalidation level because FVGs never fail.",
          "Switch to a different instrument until the FVG disappears."
        ],
        "optionsBn": [
          "প্রাইস সেই জোনে পৌঁছাচ্ছে কি না এবং সেখানে কী আচরণ করছে তা পর্যবেক্ষণ করতে হবে, কিন্তু সেখানে পৌঁছানো মাত্রই রিভার্স করবে এমনটা ধরে নেওয়া যাবে না।",
          "ধরে নিতে হবে যে প্রাইস FVG-এর একদম শুরুর পয়েন্ট থেকেই রিভার্স করবে এবং চোখ বন্ধ করে এন্ট্রি নিতে হবে।",
          "ইনভ্যালিডেশন লেভেল মুছে ফেলতে হবে কারণ FVG কখনো ফেইল করে না।",
          "FVG মুছে না যাওয়া পর্যন্ত অন্য কোনো ইনস্ট্রুমেন্টে চলে যেতে হবে।"
        ],
        "correctIndex": 0,
        "explainEn": "Step 4 of Lesson 02 states you should observe whether a pullback reaches an FVG or prior reference area without assuming it must reverse there.",
        "explainBn": "লেসন ০২-এর ৪ নম্বর ধাপে বলা হয়েছে, পুলব্যাক কোনো FVG বা রেফারেন্স এরিয়ায় পৌঁছাচ্ছে কি না তা পর্যবেক্ষণ করতে হবে, কিন্তু সেখান থেকেই রিভার্স করতে বাধ্য—এমনটা ধরে নেওয়া যাবে না।"
      },
      {
        "qEn": "Which of the following is a valid tradeoff when choosing a rule to confirm that a pullback has ended (such as waiting for a close above a minor high vs. a higher-low confirmation)?",
        "qBn": "একটি Pullback শেষ হয়েছে কি না তা কনফার্ম করার রুল বেছে নেওয়ার ক্ষেত্রে (যেমন মাইনর High-এর ওপরে ক্লোজ বনাম নতুন Higher Low কনফার্মেশন) নিচের কোন ট্রেড-অফটি সত্য?",
        "optionsEn": [
          "Every rule has zero delay and 100% accuracy if drawn correctly.",
          "Each rule has a confirmation delay: an earlier signal can fail more often, while a later signal can miss part of the move.",
          "A later signal always gives a better entry price than an earlier signal.",
          "Confirmation rules only work on historical charts and cannot be used forward."
        ],
        "optionsBn": [
          "সঠিকভাবে আঁকলে প্রতিটি নিয়মেরই কোনো ডিলে থাকে না এবং ১০০% সঠিক ফলাফল দেয়।",
          "প্রতিটি নিয়মেরই কনফার্মেশনের জন্য কিছুটা সময়ের প্রয়োজন হয়: দ্রুত পাওয়া সিগন্যাল বেশি ফেইল করতে পারে, আর দেরিতে পাওয়া সিগন্যালে মুভমেন্টের কিছু অংশ হাতছাড়া হতে পারে।",
          "দেরিতে পাওয়া সিগন্যাল সবসময় দ্রুত পাওয়া সিগন্যালের চেয়ে ভালো এন্ট্রি প্রাইস দেয়।",
          "কনফার্মেশন রুল কেবল পুরোনো চার্টে কাজ করে, লাইভ মার্কেটে ব্যবহার করা যায় না।"
        ],
        "correctIndex": 1,
        "explainEn": "Every confirmation criterion involves a tradeoff between timing and reliability: earlier triggers risk more false starts, while stricter triggers sacrifice part of the impulse.",
        "explainBn": "প্রতিটি কনফার্মেশন নিয়মেই সময় এবং নির্ভরযোগ্যতার একটি ভারসাম্য থাকে: খুব দ্রুত পাওয়া সিগন্যাল ফেইল করার ঝুঁকি বেশি থাকে, আর দেরিতে পাওয়া সিগন্যালে মুভের কিছু অংশ মিস হতে পারে।"
      },
      {
        "qEn": "Why is it a mistake to move your pullback-completion signal backward to an earlier candle after seeing a strong rally unfold?",
        "qBn": "বড় একটি র‍্যালি হয়ে যাওয়ার পর আপনার পুলব্যাক শেষ হওয়ার সিগন্যালটিকে পেছনের কোনো ক্যান্ডেলে সরিয়ে নেওয়া কেন ভুল?",
        "optionsEn": [
          "Because earlier candles have smaller wicks than later candles.",
          "Because TradingView charges a fee for moving drawing objects.",
          "Because doing so introduces hindsight bias and falsifies the actual price and time at which your rule was satisfied.",
          "Because moving a label backward turns a bullish chart into a bearish chart."
        ],
        "optionsBn": [
          "কারণ আগের ক্যান্ডেলগুলোর উইক পরের ক্যান্ডেলগুলোর চেয়ে ছোট হয়।",
          "কারণ ড্রয়িং অবজেক্ট সরালে TradingView অতিরিক্ত ফি কাটে।",
          "কারণ এটি হিন্ডসাইট বায়াস তৈরি করে এবং ঠিক কোন সময়ে ও কোন প্রাইসে আপনার নিয়মটি পূরণ হয়েছিল সেই প্রকৃত তথ্যকে বিকৃত করে।",
          "কারণ লেবেল পেছনে সরালে বুলিশ চার্ট বিয়ারিশ চার্টে পরিণত হয়।"
        ],
        "correctIndex": 2,
        "explainEn": "You must record the first candle that genuinely satisfies your pre-selected rule; shifting the marker backward after seeing the rally fabricates an unrealistic entry.",
        "explainBn": "আপনার নির্ধারিত শর্ত পূরণ করে এমন প্রথম ক্যান্ডেলটিই রেকর্ড করতে হবে; পরে র‍্যালি দেখে সিগন্যাল পেছনের ক্যান্ডেলে সরিয়ে নিলে তা অবাস্তব ও ভুল ডেটা তৈরি করবে।"
      },
      {
        "qEn": "How can the exact same downward price move be both a reversal and a pullback at the same time?",
        "qBn": "ঠিক একই নিম্নমুখী প্রাইস মুভমেন্ট কীভাবে একই সময়ে একটি Reversal এবং একটি Pullback—উভয়ই হতে পারে?",
        "optionsEn": [
          "It cannot; a move is universally either a pullback or a reversal across all timeframes.",
          "When you flip your monitor upside down during a losing trade.",
          "Only when two different brokers show opposite prices at the same second.",
          "A decline can be a reversal of a small upward swing while remaining a correction (pullback) inside a larger advance."
        ],
        "optionsBn": [
          "এটি সম্ভব নয়; যেকোনো মুভ সব টাইমফ্রেমে হয় কেবল পুলব্যাক অথবা কেবল রিভার্সাল হবে।",
          "যখন লস হতে থাকা অবস্থায় আপনি মনিটর উল্টো করে দেখেন।",
          "কেবল যখন দুটি ভিন্ন ব্রোকার একই সেকেন্ডে বিপরীত দাম দেখায়।",
          "একটি নিম্নমুখী মুভ ছোট কোনো আপওয়ার্ড সুইংয়ের জন্য Reversal হতে পারে, অথচ বড় মেজর আপট্রেন্ডের ভেতরে সেটি কেবল একটি সাধারণ কারেকশন বা Pullback হিসেবেই থাকে।"
        ],
        "correctIndex": 3,
        "explainEn": "The meaning of a move depends on the structural scale being studied: breaking a minor sub-swing reverses that local leg while acting as the retracement of a larger impulse.",
        "explainBn": "যেকোনো মুভমেন্টের অর্থ নির্ভর করে আপনি কোন স্ট্রাকচারটি দেখছেন তার ওপর: ছোট সুইংয়ের জন্য যেটা Reversal, বড় মেজর আপট্রেন্ডের ভেতরে সেটিই একটি সাধারণ Pullback হতে পারে।"
      },
      {
        "qEn": "What sentence template does the companion article suggest writing BEFORE advancing the chart during pullback practice?",
        "qBn": "পুলব্যাক প্র্যাকটিসের সময় চার্ট সামনে এগিয়ে নেওয়ার আগে কোন বাক্যটির ছক পূরণ করে লিখে রাখার পরামর্শ দেওয়া হয়েছে?",
        "optionsEn": [
          "\"I interpret this as a correction of ___ until ___ occurs.\"",
          "\"I know with 100% certainty that price will hit ___ before ___.\"",
          "\"Smart money is trapping retail traders at ___ because of ___.\"",
          "\"If this trade loses, I will change my timeframe to ___.\""
        ],
        "optionsBn": [
          "\"যতক্ষণ না ___ ঘটছে, ততক্ষণ আমি এটিকে ___-এর কারেকশন হিসেবে ধরছি।\"",
          "\"আমি ১০০% নিশ্চিতভাবে জানি যে প্রাইস ___-এর আগে ___ হিট করবে।\"",
          "\"স্মার্ট মানি ___-এর কারণে ___ লেভেলে রিটেইল ট্রেডারদের ফাঁদে ফেলছে।\"",
          "\"এই ট্রেডটি লস হলে আমি আমার টাইমফ্রেম বদলে ___ করব।\""
        ],
        "correctIndex": 0,
        "explainEn": "Writing \"I interpret this as a correction of ___ until ___ occurs\" forces you to state both the reference impulse and the exact invalidation event beforehand.",
        "explainBn": "\"যতক্ষণ না ___ ঘটছে, ততক্ষণ আমি এটিকে ___-এর কারেকশন হিসেবে ধরছি\"—এটি আগে থেকে লিখে রাখলে আপনার রেফারেন্স মুভ এবং ইনভ্যালিডেশন শর্ত দুটোই পরিষ্কার থাকে।"
      },
      {
        "qEn": "According to the Lesson 02 Chart Lab, how many bullish and bearish impulse/pullback sequences must you annotate?",
        "qBn": "লেসন ০২-এর চার্ট ল্যাব অনুযায়ী আপনাকে কয়টি বুলিশ এবং কয়টি বিয়ারিশ ইম্পালস/পুলব্যাক সিকোয়েন্স মার্ক করতে হবে?",
        "optionsEn": [
          "2 bullish and 2 bearish sequences.",
          "15 bullish and 15 bearish impulse/pullback sequences.",
          "100 bullish sequences only.",
          "5 sideways sequences only."
        ],
        "optionsBn": [
          "২টি বুলিশ এবং ২টি বিয়ারিশ সিকোয়েন্স।",
          "১৫টি বুলিশ এবং ১৫টি বিয়ারিশ ইম্পালস/পুলব্যাক সিকোয়েন্স।",
          "শুধুমাত্র ১০০টি বুলিশ সিকোয়েন্স।",
          "শুধুমাত্র ৫টি সাইডওয়েজ সিকোয়েন্স।"
        ],
        "correctIndex": 1,
        "explainEn": "The first Chart Lab task in Lesson 02 requires annotating 15 bullish and 15 bearish impulse/pullback sequences.",
        "explainBn": "লেসন ০২-এর চার্ট ল্যাবের প্রথম কাজটি হলো ১৫টি বুলিশ এবং ১৫টি বিয়ারিশ ইম্পালস/পুলব্যাক সিকোয়েন্স চার্টে চিহ্নিত করা।"
      },
      {
        "qEn": "In the Lesson 02 Chart Lab, when you freeze the chart before the next candle on five examples, what are you asked to predict?",
        "qBn": "লেসন ০২-এর চার্ট ল্যাবে পাঁচটি উদাহরণে পরের ক্যান্ডেল আসার আগে চার্ট ফ্রিজ করে আপনাকে কেবল কী পূর্বাভাস (predict) দিতে বলা হয়েছে?",
        "optionsEn": [
          "The exact closing price of the asset three weeks into the future.",
          "How many millions of dollars institutions traded in that candle.",
          "Only whether your specific pullback/invalidation rule is triggered.",
          "Whether the next 10 candles will all be green."
        ],
        "optionsBn": [
          "তিন সপ্তাহ পর ওই অ্যাসেটের চূড়ান্ত ক্লোজিং প্রাইস কত হবে।",
          "ওই ক্যান্ডেলে প্রাতিষ্ঠানিক ট্রেডাররা কত মিলিয়ন ডলার ট্রেড করেছে।",
          "কেবল আপনার নির্ধারিত পুলব্যাক বা ইনভ্যালিডেশন রুলটি ট্রিগার হয়েছে কি না।",
          "পরের ১০টি ক্যান্ডেলের সবগুলো সবুজ হবে কি না।"
        ],
        "correctIndex": 2,
        "explainEn": "Rather than trying to predict the distant future, the exercise asks you to freeze the chart and predict only whether your stated rule is triggered.",
        "explainBn": "ভবিষ্যতে মার্কেট কোথায় যাবে তা অনুমান করার বদলে, চার্ট ফ্রিজ করে কেবল আপনার নির্ধারিত রুলটি ট্রিগার হয়েছে কি না তা যাচাই করতে বলা হয়েছে।"
      },
      {
        "qEn": "Why does Lesson 02 require you to save cases where your pullback condition fails as well as cases where the expected continuation never develops?",
        "qBn": "লেসন ০২-এ কেন আপনাকে যেখানে পুলব্যাক শর্ত ভেঙে গেছে এবং যেখানে প্রত্যাশিত কন্টিনিউয়েশন কখনোই তৈরি হয়নি—উভয় ধরনের কেসই সেভ করে রাখতে বলা হয়েছে?",
        "optionsEn": [
          "Because sideways markets never occur in real trading.",
          "Because failed setups can be edited later to look like winning trades.",
          "Because you only get paid by brokers when your analysis fails.",
          "Because your goal is a repeatable interpretation with a clear expiration condition, not an illusion of 100% directional certainty."
        ],
        "optionsBn": [
          "কারণ রিয়েল ট্রেডিংয়ে সাইডওয়েজ মার্কেট কখনোই দেখা যায় না।",
          "কারণ ফেইল করা সেটআপগুলো পরে এডিট করে উইনিং ট্রেড হিসেবে দেখানো যায়।",
          "কারণ বিশ্লেষণ ভুল হলেই কেবল ব্রোকাররা আপনাকে টাকা দেয়।",
          "কারণ আপনার লক্ষ্য হলো স্পষ্ট ইনভ্যালিডেশন শর্তসহ একটি রিপিটেবল বিশ্লেষণ পদ্ধতি গড়ে তোলা, ১০০% নিশ্চিত ভবিষ্যৎবাণীর ভ্রান্ত ধারণা নয়।"
        ],
        "correctIndex": 3,
        "explainEn": "Recording both invalidations and non-continuations keeps your sample honest and builds a repeatable process with clear expiration conditions.",
        "explainBn": "শর্ত ভেঙে যাওয়া এবং কন্টিনিউয়েশন না হওয়া—উভয় কেস সংগ্রহে রাখলে আপনার ডেটা নিরপেক্ষ থাকে এবং স্পষ্ট ইনভ্যালিডেশন শর্তসহ একটি কার্যকরী বিশ্লেষণ পদ্ধতি গড়ে ওঠে।"
      },
      {
        "qEn": "What does the optional supplement from Adam H. Grimes (\"The pullback: a trade that works\") challenge you to do in Lesson 02?",
        "qBn": "লেসন ০২-এ Adam H. Grimes-এর অতিরিক্ত রিসোর্সটি (\"The pullback: a trade that works\") আপনাকে কী অনুশীলন করার চ্যালেঞ্জ দেয়?",
        "optionsEn": [
          "Describe five pullbacks without using SMC labels.",
          "Memorize 50 Japanese candlestick names in Latin.",
          "Trade pullbacks on a 1-second timeframe without a stop loss.",
          "Replace all swing highs with Fibonacci fan lines."
        ],
        "optionsBn": [
          "কোনো SMC লেবেল ব্যবহার না করেই পাঁচটি পুলব্যাক বর্ণনা করা।",
          "ল্যাটিন ভাষায় ৫০টি জাপানি ক্যান্ডেলস্টিকের নাম মুখস্থ করা।",
          "স্টপ লস ছাড়া ১ সেকেন্ডের টাইমফ্রেমে পুলব্যাক ট্রেড করা।",
          "সব সুইং হাই মুছে সেখানে ফিবোনাচ্চি ফ্যান লাইন বসানো।"
        ],
        "correctIndex": 0,
        "explainEn": "The supplement note asks you to describe five pullbacks in plain price-action terms without relying on SMC buzzwords.",
        "explainBn": "এই অতিরিক্ত অনুশীলনে আপনাকে কোনো SMC পরিভাষা বা লেবেল ব্যবহার না করে সাধারণ প্রাইস-অ্যাকশনের ভাষায় পাঁচটি পুলব্যাক বর্ণনা করতে বলা হয়েছে।"
      }
    ]
  },
  "03-swing-identification": {
    "lessonId": 3,
    "slug": "03-swing-identification",
    "masteryPromptEn": "Can another student reproduce your swing marks using your written rule?",
    "masteryPromptBn": "অন্য একজন শিক্ষার্থী কি আপনার লেখা নিয়মটি অনুসরণ করে হুবহু আপনার মতোই সুইং মার্ক করতে পারবে?",
    "completionItems": [
      {
        "id": "read-notes",
        "en": "Read the companion article and wrote summary notes in my own words.",
        "bn": "সহযোগী আর্টিকেলটি পড়েছি এবং নিজের ভাষায় সারাংশ নোট লিখেছি।"
      },
      {
        "id": "lab-1",
        "en": "Labeled 25 swings on one 1H chart and 25 on a 15m chart.",
        "bn": "একটি 1H চার্টে ২৫টি এবং একটি 15m চার্টে ২৫টি সুইং লেবেল করেছি।"
      },
      {
        "id": "lab-2",
        "en": "Circled five pivots that looked valid intrabar but had not yet been confirmed.",
        "bn": "পাঁচটি পিভট গোল করে চিহ্নিত করেছি যেগুলো ক্যান্ডেল চলাকালীন ভ্যালিড মনে হলেও তখনো কনফার্ম হয়নি।"
      },
      {
        "id": "lab-3",
        "en": "Saved 10 HH-HL / LH-LL trend examples and five ranging counterexamples.",
        "bn": "১০টি HH-HL / LH-LL ট্রেন্ডের উদাহরণ এবং ৫টি রেঞ্জিং মার্কেটের বিপরীত উদাহরণ সেভ করেছি।"
      },
      {
        "id": "mastery-quiz",
        "en": "Completed the Knowledge Check quiz and answered the Mastery Check without notes.",
        "bn": "নলেজ চেক কুইজ সম্পন্ন করেছি এবং নোট না দেখে মাস্টারি চেকের উত্তর দিয়েছি।"
      }
    ],
    "questions": [
      {
        "qEn": "Under the mechanical three-candle pivot rule introduced in Lesson 03, how is a Swing High defined?",
        "qBn": "লেসন ০৩-এ প্রবর্তিত তিন-ক্যান্ডেলের মেকানিক্যাল পিভট রুল অনুযায়ী একটি Swing High কীভাবে সংজ্ঞায়িত করা হয়?",
        "optionsEn": [
          "Any green candle whose body is larger than the previous candle.",
          "Three consecutive candles that close at the exact same price.",
          "The highest candle on your screen regardless of whether the next candle has formed.",
          "A middle candle whose high exceeds both adjacent candle highs, confirmed only after the right-hand candle closes."
        ],
        "optionsBn": [
          "যেকোনো সবুজ ক্যান্ডেল যার বডি আগের ক্যান্ডেলের চেয়ে বড়।",
          "পরপর তিনটি ক্যান্ডেল যা ঠিক একই দামে ক্লোজ হয়েছে।",
          "পরের ক্যান্ডেল তৈরি হোক বা না হোক, স্ক্রিনের সবচেয়ে উঁচু ক্যান্ডেল।",
          "এমন একটি মাঝখানের ক্যান্ডেল যার High তার দুই পাশের দুটি ক্যান্ডেলের High-এর চেয়ে বেশি, এবং যা কেবল ডান পাশের ক্যান্ডেলটি সম্পূর্ণ Close হওয়ার পরেই কনফার্ম হয়।"
        ],
        "correctIndex": 3,
        "explainEn": "A three-candle swing high requires the middle candle’s high to exceed both neighboring highs, and the right-hand neighbor must finish closing before the pivot is confirmed.",
        "explainBn": "তিন-ক্যান্ডেলের নিয়মে মাঝখানের ক্যান্ডেলের High তার দুই পাশের ক্যান্ডেলের High-এর চেয়ে বেশি হতে হয় এবং পিভটটি কনফার্ম হওয়ার জন্য ডান পাশের ক্যান্ডেলটি অবশ্যই সম্পূর্ণ Close হতে হয়।"
      },
      {
        "qEn": "Imagine three candles where Candle 1 has a high of 101 and Candle 2 closes with a high of 105. While Candle 3 is still forming, what is the status of the 105 high at Candle 2?",
        "qBn": "ধরুন তিনটি ক্যান্ডেলের মধ্যে ১ নম্বর ক্যান্ডেলের High 101 এবং ২ নম্বর ক্যান্ডেল 105 High নিয়ে Close হলো। ৩ নম্বর ক্যান্ডেলটি যখন এখনো তৈরি হচ্ছে (চলাকালীন), তখন ২ নম্বর ক্যান্ডেলের 105 High-টির অবস্থান কী?",
        "optionsEn": [
          "Candidate only (unconfirmed).",
          "Confirmed Swing High.",
          "Confirmed Break of Structure.",
          "Invalidated Swing Low."
        ],
        "optionsBn": [
          "কেবল সম্ভাব্য সুইং (Candidate only / অসম্পূর্ণ)।",
          "কনফার্মড সুইং হাই (Confirmed Swing High)।",
          "কনফার্মড ব্রেক অব স্ট্রাকচার।",
          "ইনভ্যালিডেটেড সুইং লো।"
        ],
        "correctIndex": 0,
        "explainEn": "Until the third (right-hand) candle finishes closing, its final high is unknown, so the 105 level at the second candle remains a candidate only.",
        "explainBn": "তৃতীয় বা ডান পাশের ক্যান্ডেলটি পুরোপুরি Close না হওয়া পর্যন্ত সেটির চূড়ান্ত High অজানা থাকে, তাই দ্বিতীয় ক্যান্ডেলের 105 লেভেলটি তখন কেবল একটি সম্ভাব্য সুইং (Candidate only)।"
      },
      {
        "qEn": "In the timeline where Candle 1 has a high of 101 and Candle 2 has a high of 105, what happens if Candle 3 reaches 106 before closing?",
        "qBn": "যে উদাহরণে ১ নম্বর ক্যান্ডেলের High 101 এবং ২ নম্বর ক্যান্ডেলের High 105, সেখানে ৩ নম্বর ক্যান্ডেলটি ক্লোজ হওয়ার আগে যদি 106-এ চলে যায় তবে কী ঘটবে?",
        "optionsEn": [
          "Candle 2 remains a confirmed swing high because it looked good earlier.",
          "The 105 candidate at Candle 2 fails to become a three-candle swing high, which is normal behavior under the rule.",
          "You must switch to a 1-minute chart to force Candle 2 to be a swing high.",
          "Both 105 and 106 are labeled as confirmed swing lows."
        ],
        "optionsBn": [
          "২ নম্বর ক্যান্ডেলটি কনফার্মড সুইং হাই হিসেবেই থাকবে কারণ আগে এটি দেখতে ভালো লাগছিল।",
          "২ নম্বর ক্যান্ডেলের 105-এর সম্ভাব্য সুইংটি বাতিল হয়ে যাবে, যা এই নিয়মের খুবই স্বাভাবিক একটি অংশ।",
          "২ নম্বর ক্যান্ডেলকে জোর করে সুইং হাই বানানোর জন্য আপনাকে ১ মিনিটের চার্টে চলে যেতে হবে।",
          "105 এবং 106 উভয়কেই কনফার্মড সুইং লো হিসেবে লেবেল করতে হবে।"
        ],
        "correctIndex": 1,
        "explainEn": "Because Candle 3 exceeded 105, Candle 2 is no longer higher than its right-hand neighbor, so the 105 candidate fails.",
        "explainBn": "যেহেতু ৩ নম্বর ক্যান্ডেল 105-কে ছাড়িয়ে 106-এ চলে গেছে, তাই ২ নম্বর ক্যান্ডেলটি আর তার ডান পাশের ক্যান্ডেলের চেয়ে উঁচু রইল না; ফলে 105-এর সম্ভাব্য সুইংটি বাতিল হয়ে যাবে।"
      },
      {
        "qEn": "What flaw is committed by a backtest strategy that assumes an entry at the close of the middle candle (Candle 2) because it later became a confirmed pivot?",
        "qBn": "কোনো ব্যাকটেস্ট স্ট্র্যাটেজি যদি মাঝখানের ক্যান্ডেলটি (Candle 2) পরে পিভট হয়েছে দেখে সেটির Close-এই এন্ট্রি ধরে নেয়, তবে সেখানে কোন বড় ভুলটি হচ্ছে?",
        "optionsEn": [
          "It is entering too late in the move.",
          "It is paying too much attention to commission costs.",
          "It is using future information (lookahead bias) that was not available when Candle 2 closed.",
          "It is violating the equal-highs tolerance buffer."
        ],
        "optionsBn": [
          "এটি মুভমেন্টের অনেক দেরিতে এন্ট্রি নিচ্ছে।",
          "এটি কমিশন খরচের দিকে অতিরিক্ত মনোযোগ দিচ্ছে।",
          "এটি ভবিষ্যতের তথ্য (Future Information / Lookahead bias) ব্যবহার করছে, যা ২ নম্বর ক্যান্ডেল ক্লোজ হওয়ার মুহূর্তে জানা সম্ভব ছিল না।",
          "এটি সমান High-এর টলারেন্স বাফার লঙ্ঘন করছে।"
        ],
        "correctIndex": 2,
        "explainEn": "At the close of the middle candle, the right-hand candle does not exist yet; entering at the middle close relies on future information.",
        "explainBn": "মাঝখানের ক্যান্ডেলটি যখন ক্লোজ হয়, তখন ডান পাশের ক্যান্ডেলের কোনো অস্তিত্বই থাকে না; তাই মাঝখানের ক্যান্ডেলের ক্লোজে এন্ট্রি ধরা মানে ভবিষ্যতের তথ্য চুরি করা।"
      },
      {
        "qEn": "How should you handle Equal Highs or Equal Lows when marking mechanical swings?",
        "qBn": "মেকানিক্যাল সুইং মার্ক করার সময় সমান High বা সমান Low (Equal Highs/Lows) কীভাবে হ্যান্ডেল করা উচিত?",
        "optionsEn": [
          "Change your interpretation randomly from chart to chart depending on what looks best.",
          "Always label equal highs as confirmed swing lows.",
          "Delete any chart that contains two candles with the same high.",
          "Define a separate, explicit rule beforehand—knowing that strict inequalities exclude ties while a tolerance rule requires a stated tick or price buffer."
        ],
        "optionsBn": [
          "চার্টভেদে যখন যেটা দেখতে ভালো লাগে সেভাবে ইচ্ছেমতো নিয়ম পরিবর্তন করা উচিত।",
          "সমান High-কে সবসময় কনফার্মড সুইং লো হিসেবে লেবেল করা উচিত।",
          "কোনো চার্টে দুটি ক্যান্ডেলের High সমান হলে সেই চার্টটি ডিলিট করে দেওয়া উচিত।",
          "আগে থেকেই একটি আলাদা ও সুনির্দিষ্ট নিয়ম ঠিক করে নেওয়া উচিত—যেখানে কঠোর সংজ্ঞা সমান লেভেল বাদ দেয়, আর টলারেন্স রুল ব্যবহার করলে নির্দিষ্ট কত Tick বা প্রাইস বাফার ধরা হবে তা স্পষ্ট লেখা থাকে।"
        ],
        "correctIndex": 3,
        "explainEn": "Strict inequality (`>`) excludes ties, while allowing near-equals requires a stated tick or price tolerance buffer applied consistently across every chart.",
        "explainBn": "কঠোর সংজ্ঞায় সমান লেভেল বাদ পড়ে যায়, আর সামান্য কম-বেশি মেনে নিলে (tolerance rule) ঠিক কত Tick বা প্রাইস বাফার ধরা হবে তা আগে থেকেই নির্দিষ্ট করে সব চার্টে একইভাবে প্রয়োগ করতে হয়।"
      },
      {
        "qEn": "Once pivots are confirmed, what sequence of highs and lows describes an upward trend versus a downward trend?",
        "qBn": "পিভটগুলো কনফার্ম হওয়ার পর High এবং Low-এর কোন ক্রমটি আপট্রেন্ড এবং কোন ক্রমটি ডাউনট্রেন্ড নির্দেশ করে?",
        "optionsEn": [
          "Higher Highs (HH) and Higher Lows (HL) describe an upward sequence; Lower Highs (LH) and Lower Lows (LL) describe a downward sequence.",
          "Lower Highs and Lower Lows describe an uptrend; Higher Highs and Higher Lows describe a downtrend.",
          "Equal Highs and Equal Lows describe both uptrends and downtrends.",
          "Higher Highs and Lower Lows always describe a clean uptrend."
        ],
        "optionsBn": [
          "Higher High (HH) এবং Higher Low (HL) আপওয়ার্ড সিকোয়েন্স নির্দেশ করে; আর Lower High (LH) এবং Lower Low (LL) ডাউনওয়ার্ড সিকোয়েন্স নির্দেশ করে।",
          "Lower High এবং Lower Low আপট্রেন্ড নির্দেশ করে; Higher High এবং Higher Low ডাউনট্রেন্ড নির্দেশ করে।",
          "Equal High এবং Equal Low আপট্রেন্ড ও ডাউনট্রেন্ড উভয়ই নির্দেশ করে।",
          "Higher High এবং Lower Low সবসময় একটি পরিষ্কার আপট্রেন্ড নির্দেশ করে।"
        ],
        "correctIndex": 0,
        "explainEn": "Successive Higher Highs and Higher Lows define an upward structural sequence, whereas Lower Highs and Lower Lows define a downward structural sequence.",
        "explainBn": "ক্রমাগত Higher High (HH) এবং Higher Low (HL) একটি আপট্রেন্ড এবং Lower High (LH) ও Lower Low (LL) একটি ডাউনট্রেন্ড নির্দেশ করে।"
      },
      {
        "qEn": "When confirmed swings overlap or produce conflicting sequences (such as inside a messy range), what does the companion article recommend?",
        "qBn": "যখন কনফার্মড সুইংগুলো একে অপরের ভেতরে ঢুকে যায় বা পরস্পরবিরোধী আচরণ করে (যেমন মেসি রেঞ্জিং মার্কেটে), তখন কী করার পরামর্শ দেওয়া হয়েছে?",
        "optionsEn": [
          "Erase the inconvenient pivots until the chart looks like a textbook trend.",
          "Allow overlapping or conflicting sequences to remain unclassified (or labeled as ranging) while you collect more information.",
          "Force a bullish bias by doubling your position size.",
          "Stop using confirmation rules and trade by gut feeling."
        ],
        "optionsBn": [
          "মাঝখানের অসুবিধাজনক পিভটগুলো মুছে ফেলা যতক্ষণ না চার্টটি বইয়ের ছবির মতো ট্রেন্ডিং দেখায়।",
          "আরও তথ্য না পাওয়া পর্যন্ত ওভারল্যাপিং বা পরস্পরবিরোধী সিকোয়েন্সগুলোকে আনক্লাসিফায়েড (বা রেঞ্জিং) হিসেবে রেখে দেওয়া।",
          "পজিশন সাইজ দ্বিগুণ করে জোরপূর্বক বুলিশ বায়াস নেওয়া।",
          "কনফার্মেশন রুল বাদ দিয়ে নিজের অনুমানের ওপর ট্রেড করা।"
        ],
        "correctIndex": 1,
        "explainEn": "Messy, overlapping sequences do not need to be forced into a trend label; they can remain unclassified or marked as ranging counterexamples until clear structure forms.",
        "explainBn": "ওভারল্যাপিং বা অস্পষ্ট সুইংগুলোকে জোর করে ট্রেন্ডের নাম দেওয়ার প্রয়োজন নেই; আরও তথ্য না পাওয়া পর্যন্ত সেগুলোকে আনক্লাসিফায়েড বা রেঞ্জিং হিসেবে রেখে দেওয়া যায়।"
      },
      {
        "qEn": "How should you handle small local internal pivots when the broader external trend looks obvious to the naked eye?",
        "qBn": "যখন বড় এক্সটার্নাল ট্রেন্ড খালি চোখে পরিষ্কার দেখা যায়, তখন ভেতরের ছোট লোকাল ইন্টারনাল পিভটগুলোর ক্ষেত্রে কী করা উচিত?",
        "optionsEn": [
          "Erase all local pivots so your screenshot looks cleaner for social media.",
          "Only mark swings that resulted in at least a 500-pip move.",
          "Mark local swings first using your mechanical rule, then explain which ones your structural rule promotes to external reference points without erasing the small pivots.",
          "Label every local pivot as a major reversal."
        ],
        "optionsBn": [
          "সোশ্যাল মিডিয়ায় স্ক্রিনশট সুন্দর দেখানোর জন্য সব লোকাল পিভট মুছে ফেলা উচিত।",
          "কেবল যে সুইংগুলো থেকে ৫০০ পিপসের মুভ হয়েছে সেগুলোই মার্ক করা উচিত।",
          "প্রথমে মেকানিক্যাল নিয়ম মেনে লোকাল সুইংগুলো মার্ক করা উচিত, তারপর ছোট পিভটগুলো মুছে না ফেলেই ব্যাখ্যা করা উচিত কোন নিয়ম অনুযায়ী নির্দিষ্ট সুইংগুলো এক্সটার্নাল রেফারেন্স পয়েন্টে উন্নীত হচ্ছে।",
          "প্রতিটি লোকাল পিভটকেই মেজর রিভার্সাল হিসেবে লেবেল করা উচিত।"
        ],
        "correctIndex": 2,
        "explainEn": "Do not erase inconvenient small pivots; mark local pivots mechanically first and use explicit structural rules to promote external reference swings.",
        "explainBn": "বড় ট্রেন্ড পরিষ্কার দেখা যাচ্ছে বলে মাঝখানের ছোট পিভটগুলো মুছে ফেলা যাবে না; প্রথমে লোকাল সুইংগুলো মার্ক করে সুনির্দিষ্ট নিয়মের মাধ্যমে এক্সটার্নাল সুইং আলাদা করতে হবে।"
      },
      {
        "qEn": "When comparing a 1-hour (1H) chart with a 15-minute (15m) chart over the same time period, what structural relationship will you typically observe?",
        "qBn": "একই সময়ের একটি 1H চার্টের সাথে একটি 15m চার্টের তুলনা করলে আপনি সাধারণত কী ধরনের স্ট্রাকচারাল সম্পর্ক দেখতে পাবেন?",
        "optionsEn": [
          "The 15m chart will have zero swings while the 1H chart has dozens.",
          "The 1H chart will confirm pivots 45 minutes earlier than the 15m chart.",
          "Both charts will always show the exact same number of candles and pivots.",
          "A single 1H directional leg may contain several completed 15m swings inside it."
        ],
        "optionsBn": [
          "15m চার্টে কোনো সুইং থাকবে না কিন্তু 1H চার্টে ডজনখানেক সুইং থাকবে।",
          "1H চার্ট 15m চার্টের চেয়ে ৪৫ মিনিট আগেই পিভট কনফার্ম করবে।",
          "উভয় চার্টেই সবসময় হুবহু একই সংখ্যক ক্যান্ডেল এবং পিভট দেখা যাবে।",
          "1H চার্টের একটি একক ডিরেকশনাল লেগের ভেতরে বেশ কয়েকটি সম্পূর্ণ 15m সুইং থাকতে পারে।"
        ],
        "correctIndex": 3,
        "explainEn": "Because four 15m candles form inside every 1H candle, a single 1H leg often contains multiple internal 15m swing highs and lows.",
        "explainBn": "যেহেতু প্রতি এক ঘণ্টার ক্যান্ডেলের ভেতর চারটি ১৫ মিনিটের ক্যান্ডেল থাকে, তাই একটি একক 1H লেগের ভেতর একাধিক 15m সুইং দেখা যায়।"
      },
      {
        "qEn": "How does the companion article recommend testing your swing-labeling consistency?",
        "qBn": "সহযোগী আর্টিকেলে আপনার সুইং লেবেলিংয়ের ধারাবাহিকতা (consistency) পরীক্ষা করার জন্য কোন পদ্ধতিটি অনুসরণ করতে বলা হয়েছে?",
        "optionsEn": [
          "Mark a chart segment and its confirmation times, wait two days, and repeat the exercise on the same segment without viewing your first labels to compare disagreements.",
          "Ask ten people in a chatroom whether they like your chart colors.",
          "Change your pivot rule every hour until you get zero losing trades.",
          "Only mark charts that have already been labeled by an instructor."
        ],
        "optionsBn": [
          "চার্টের একটি অংশে পিভট ও কনফার্মেশন টাইম মার্ক করুন, দুই দিন অপেক্ষা করুন এবং প্রথম মার্কিং না দেখে একই চার্টে আবার অনুশীলনটি করে অমিলগুলো তুলনা করুন।",
          "চ্যাটরুমের দশজনকে জিজ্ঞেস করুন আপনার চার্টের রঙ তাদের পছন্দ হয়েছে কি না।",
          "লস শূন্য না হওয়া পর্যন্ত প্রতি ঘণ্টায় আপনার পিভট রুল পরিবর্তন করুন।",
          "কেবল মেন্টরের আগে থেকে মার্ক করে দেওয়া চার্টগুলোতেই দাগ টানুন।"
        ],
        "correctIndex": 0,
        "explainEn": "Re-marking the same chart segment two days later blind to your first pass exposes inconsistencies in equality handling, unfinished candles, and swing selection.",
        "explainBn": "প্রথম মার্কিং না দেখে দুই দিন পর একই চার্ট আবার মার্ক করে দুটির অমিল তুলনা করলে সমান High/Low, অসম্পূর্ণ ক্যান্ডেল বা সুইং বাছাইয়ের অসামঞ্জস্যগুলো সহজেই ধরা পড়ে।"
      },
      {
        "qEn": "What does it mean if your written swing rule still relies on phrases like \"mark the obvious high\"?",
        "qBn": "আপনার লেখা সুইং রুলে যদি এখনো \"চোখে পড়ার মতো স্পষ্ট High মার্ক করুন\"-এর মতো কথা থেকে যায়, তবে এর অর্থ কী?",
        "optionsEn": [
          "Your rule is complete and ready for automated live execution.",
          "Your rule is subjective and missing explicit mechanical conditions that another learner would need to reproduce your labels.",
          "Your rule is too strict and needs to be made more vague.",
          "Your chart timeframe is too small."
        ],
        "optionsBn": [
          "আপনার নিয়মটি সম্পূর্ণ এবং লাইভ অটোমেটেড ট্রেডিংয়ের জন্য প্রস্তুত।",
          "আপনার নিয়মটি এখনো ব্যক্তিনির্ভর (subjective) এবং এতে সুনির্দিষ্ট মেকানিক্যাল শর্তের ঘাটতি আছে, যা ছাড়া অন্য কেউ হুবহু আপনার মতো মার্ক করতে পারবে না।",
          "আপনার নিয়মটি অতিরিক্ত কঠোর এবং এটিকে আরও অস্পষ্ট করা প্রয়োজন।",
          "আপনার চার্টের টাইমফ্রেম খুব ছোট।"
        ],
        "correctIndex": 1,
        "explainEn": "Phrases like \"the obvious high\" hide subjective hindsight decisions; a reproducible rule requires explicit conditions before it can be used in a trade model.",
        "explainBn": "\"চোখে পড়ার মতো স্পষ্ট High\"—এ ধরনের কথায় ব্যক্তিগত অনুমান লুকিয়ে থাকে; ট্রেড মডেলে ব্যবহারের আগে ঘাটতি থাকা শর্তগুলো সুনির্দিষ্টভাবে যুক্ত করতে হবে।"
      },
      {
        "qEn": "Why must you record BOTH the price location of a pivot AND the timestamp when it became confirmable?",
        "qBn": "একটি পিভটের প্রাইস লেভেলের পাশাপাশি ঠিক কোন সময়ে (timestamp) সেটি কনফার্ম হয়েছে—এই দুটি বিষয়ই কেন রেকর্ড করতে হবে?",
        "optionsEn": [
          "Because brokers require timestamps to calculate swap rates.",
          "Because the price of a completed candle changes after the market closes.",
          "Because a pivot’s extreme forms at the middle candle, but the knowledge that it is a confirmed pivot only exists after the right-hand candle closes.",
          "Because swing highs always confirm two candles before they form."
        ],
        "optionsBn": [
          "কারণ সোয়াপ রেট হিসাব করার জন্য ব্রোকারদের টাইমস্ট্যাম্প প্রয়োজন হয়।",
          "কারণ মার্কেট বন্ধ হওয়ার পর সম্পূর্ণ হওয়া ক্যান্ডেলের দাম বদলে যায়।",
          "কারণ পিভটের প্রাইস লেভেলটি তৈরি হয় মাঝখানের ক্যান্ডেলে, কিন্তু সেটি যে একটি কনফার্মড পিভট—সেই নিশ্চিত তথ্যটি পাওয়া যায় কেবল ডান পাশের ক্যান্ডেল ক্লোজ হওয়ার পর।",
          "কারণ সুইং হাই সবসময় তৈরি হওয়ার দুই ক্যান্ডেল আগেই কনফার্ম হয়ে যায়।"
        ],
        "correctIndex": 2,
        "explainEn": "The price extreme occurs on the middle candle, but you could only know it was a valid pivot after the subsequent confirming candle closed.",
        "explainBn": "প্রাইস লেভেলটি মাঝখানের ক্যান্ডেলে তৈরি হলেও, ডান পাশের ক্যান্ডেলটি ক্লোজ না হওয়া পর্যন্ত আপনি নিশ্চিতভাবে জানতে পারেন না যে সেটি একটি ভ্যালিড পিভট।"
      },
      {
        "qEn": "According to the Lesson 03 Chart Lab, what are the three required practical deliverables?",
        "qBn": "লেসন ০৩-এর চার্ট ল্যাব অনুযায়ী আপনার করণীয় তিনটি ব্যবহারিক কাজ কী কী?",
        "optionsEn": [
          "Label 5 swings on a monthly chart, buy an indicator, and place 10 live trades.",
          "Memorize the Penchan website URL and close TradingView.",
          "Draw 50 trendlines, 50 Fibonacci retracements, and 50 Elliott Wave counts.",
          "Label 25 swings on a 1H chart and 25 on a 15m chart; circle 5 unconfirmed candidates; save 10 HH-HL/LH-LL examples and 5 ranging counterexamples."
        ],
        "optionsBn": [
          "মান্থলি চার্টে ৫টি সুইং মার্ক করা, একটি ইন্ডিকেটর কেনা এবং ১০টি লাইভ ট্রেড নেওয়া।",
          "Penchan ওয়েবসাইটের লিংক মুখস্থ করা এবং TradingView বন্ধ করে দেওয়া।",
          "৫০টি ট্রেন্ডলাইন, ৫০টি ফিবোনাচ্চি এবং ৫০টি এলিয়ট ওয়েভ আঁকা।",
          "একটি 1H চার্টে ২৫টি ও 15m চার্টে ২৫টি সুইং লেবেল করা; ৫টি আনকনফার্মড পিভট গোল করে চিহ্নিত করা; এবং ১০টি HH-HL/LH-LL উদাহরণ ও ৫টি রেঞ্জিং উদাহরণ সেভ করা।"
        ],
        "correctIndex": 3,
        "explainEn": "The Lesson 03 Chart Lab specifies: 25 swings on 1H + 25 on 15m, 5 circled unconfirmed pivots, and 10 trending + 5 ranging examples.",
        "explainBn": "লেসন ০৩-এর চার্ট ল্যাবে নির্দিষ্ট করা তিনটি কাজ হলো: 1H ও 15m চার্টে ২৫টি করে সুইং মার্ক করা, ৫টি আনকনফার্মড পিভট চিহ্নিত করা এবং ১০টি ট্রেন্ডিং ও ৫টি রেঞ্জিং উদাহরণ সেভ করা।"
      },
      {
        "qEn": "What specific error does the Lesson 03 \"Watch for\" note warn against?",
        "qBn": "লেসন ০৩-এর \"Watch for\" নোটে কোন নির্দিষ্ট ভুলটি থেকে সতর্ক থাকতে বলা হয়েছে?",
        "optionsEn": [
          "Avoid choosing the most attractive swing retrospectively after knowing the result.",
          "Avoid using a three-candle pivot rule on a 15-minute chart.",
          "Avoid marking Lower Highs during a downtrend.",
          "Avoid comparing two timeframes on the same instrument."
        ],
        "optionsBn": [
          "ফলাফল জেনে যাওয়ার পর পেছনের চার্ট দেখে সবচেয়ে আকর্ষণীয় সুইংটি বেছে নেওয়া থেকে বিরত থাকুন।",
          "১৫ মিনিটের চার্টে তিন-ক্যান্ডেলের পিভট রুল ব্যবহার করা থেকে বিরত থাকুন।",
          "ডাউনট্রেন্ডে Lower High মার্ক করা থেকে বিরত থাকুন।",
          "একই ইনস্ট্রুমেন্টে দুটি টাইমফ্রেম তুলনা করা থেকে বিরত থাকুন।"
        ],
        "correctIndex": 0,
        "explainEn": "Cherry-picking the prettiest swing after seeing the subsequent move introduces hindsight bias; rules must be applied consistently forward.",
        "explainBn": "পরবর্তী মুভমেন্ট দেখে ফেলার পর চার্টে সবচেয়ে সুন্দর দেখতে সুইংটি বেছে নিলে তা হিন্ডসাইট বায়াস তৈরি করে; তাই সবসময় সুনির্দিষ্ট নিয়ম মেনেই সুইং মার্ক করতে হবে।"
      },
      {
        "qEn": "Why does the Lesson 03 Chart Lab ask you to circle five pivots that looked valid intrabar but had not yet been confirmed?",
        "qBn": "লেসন ০৩-এর চার্ট ল্যাবে কেন আপনাকে এমন পাঁচটি পিভট গোল করে চিহ্নিত করতে বলা হয়েছে যেগুলো ক্যান্ডেল চলাকালীন ভ্যালিড মনে হলেও তখনো কনফার্ম হয়নি?",
        "optionsEn": [
          "Because unconfirmed pivots have a 100% win rate when traded immediately.",
          "To train you to recognize premature intrabar candidates and wait for the right-hand candle to close before acting.",
          "Because TradingView deletes candles that are not circled.",
          "To prove that three-candle pivots never confirm on any timeframe."
        ],
        "optionsBn": [
          "কারণ আনকনফার্মড পিভটে সাথে সাথে ট্রেড নিলে ১০০% উইন রেট পাওয়া যায়।",
          "যাতে আপনি ক্যান্ডেল চলাকালীন অপরিপক্ব সম্ভাব্য সুইংগুলো চিনতে পারেন এবং ডান পাশের ক্যান্ডেল ক্লোজ না হওয়া পর্যন্ত অপেক্ষা করার অভ্যাস গড়ে তোলেন।",
          "কারণ গোল করে চিহ্নিত না করলে TradingView ক্যান্ডেলগুলো মুছে ফেলে।",
          "এটি প্রমাণ করতে যে তিন-ক্যান্ডেলের পিভট কখনোই কোনো টাইমফ্রেমে কনফার্ম হয় না।"
        ],
        "correctIndex": 1,
        "explainEn": "Spotting unconfirmed intrabar candidates highlights the danger of jumping in before the right-hand candle completes the pivot.",
        "explainBn": "ডান পাশের ক্যান্ডেল ক্লোজ হওয়ার আগেই যে পিভটগুলোকে ভ্যালিড মনে হয় সেগুলো চিহ্নিত করার মাধ্যমে তাড়াহুড়ো করে অপরিপক্ব সিদ্ধান্ত নেওয়ার ঝুঁকি সম্পর্কে সচেতন হওয়া যায়।"
      }
    ]
  },
  "04-inducement": {
    "lessonId": 4,
    "slug": "04-inducement",
    "masteryPromptEn": "When is a higher low a structural HL but not necessarily IDM? Defend the distinction in one chart.",
    "masteryPromptBn": "কখন একটি Higher Low স্ট্রাকচারালি ভ্যালিড HL হওয়া সত্ত্বেও সেটিকে অটোমেটিক্যালি IDM বলা যায় না? একটি চার্টের মাধ্যমে পার্থক্যটি যুক্তি দিয়ে ব্যাখ্যা করুন।",
    "completionItems": [
      {
        "id": "read-notes",
        "en": "Read the companion article and wrote summary notes in my own words.",
        "bn": "সহযোগী আর্টিকেলটি পড়েছি এবং নিজের ভাষায় সারাংশ নোট লিখেছি।"
      },
      {
        "id": "lab-1",
        "en": "Collected 20 potential IDM situations, recording 10 clear and 10 ambiguous examples.",
        "bn": "২০টি সম্ভাব্য IDM পরিস্থিতি সংগ্রহ করেছি, যার মধ্যে ১০টি স্পষ্ট এবং ১০টি দ্বিধাজনক উদাহরণ রেকর্ড করেছি।"
      },
      {
        "id": "lab-2",
        "en": "Marked the proposed IDM level, the intended external target, and the invalidation point on each example.",
        "bn": "প্রতিটি উদাহরণে প্রস্তাবিত IDM লেভেল, প্রত্যাশিত এক্সটার্নাল টার্গেট এবং ইনভ্যালিডেশন পয়েন্ট মার্ক করেছি।"
      },
      {
        "id": "lab-3",
        "en": "Wrote a one-sentence reason why each proposed IDM is not simply an ordinary HL or LH.",
        "bn": "কেন প্রতিটি প্রস্তাবিত IDM কেবল একটি সাধারণ HL বা LH নয়, তার স্বপক্ষে এক বাক্যে কারণ লিখেছি।"
      },
      {
        "id": "mastery-quiz",
        "en": "Completed the Knowledge Check quiz and answered the Mastery Check without notes.",
        "bn": "নলেজ চেক কুইজ সম্পন্ন করেছি এবং নোট না দেখে মাস্টারি চেকের উত্তর দিয়েছি।"
      }
    ],
    "questions": [
      {
        "qEn": "Why is \"Inducement (IDM)\" dangerous to study if you only apply the label after a reversal has already happened?",
        "qBn": "মার্কেট রিভার্স করার পর সেখানে \"Inducement (IDM)\" লেবেল লাগানো কেন শেখার জন্য ঝুঁকিপূর্ণ?",
        "optionsEn": [
          "Because post-hoc labeling turns every disappointing move or broken minor level into a persuasive \"trap\" story without telling you what could have been identified beforehand.",
          "Because IDM only occurs on Tuesdays and Thursdays.",
          "Because labeling IDM after a move violates exchange copyright laws.",
          "Because reversals never happen after a minor swing breaks."
        ],
        "optionsBn": [
          "কারণ ঘটনা ঘটার পর লেবেল বসালে প্রতিটি হতাশাজনক মুভ বা ছোট লেভেল ব্রেককেই একটি আকর্ষণীয় \"ফাঁদ\" বা ট্র্যাপ মনে হয়, কিন্তু আগে থেকে কী দেখে তা চেনা যেত সে সম্পর্কে কোনো ধারণা পাওয়া যায় না।",
          "কারণ IDM কেবল মঙ্গলবার এবং বৃহস্পতিবারে ঘটে।",
          "কারণ মুভ হওয়ার পর IDM লেবেল দিলে এক্সচেঞ্জের কপিরাইট আইন লঙ্ঘিত হয়।",
          "কারণ মাইনর সুইং ব্রেক করার পর কখনোই রিভার্সাল ঘটে না।"
        ],
        "correctIndex": 0,
        "explainEn": "Attaching the IDM label after seeing a reversal sounds coherent in hindsight but provides zero predictive or testable value unless defined beforehand.",
        "explainBn": "রিভার্সাল ঘটার পর সেখানে IDM লেবেল লাগিয়ে গল্প বানানো সহজ, কিন্তু আগে থেকে সুনির্দিষ্ট শর্ত না থাকলে রিয়েল-টাইমে সিদ্ধান্ত নেওয়ার ক্ষেত্রে এর কোনো মূল্য থাকে না।"
      },
      {
        "qEn": "How do different SMC educators and public sources treat the definition of Inducement (IDM)?",
        "qBn": "বিভিন্ন SMC এডুকেটর এবং পাবলিক সোর্সগুলোতে Inducement (IDM)-এর সংজ্ঞাকে কীভাবে দেখা হয়?",
        "optionsEn": [
          "Every trader in the world uses the exact same mathematical formula regulated by the CME.",
          "Teachers disagree on whether IDM is a minor swing in front of a POI, a liquidity lure, or a mandatory pre-BOS level—so you must record and stick to one explicit source definition.",
          "All sources agree that every single candle low is an IDM level.",
          "Public sources state that IDM only exists on monthly cryptocurrency charts."
        ],
        "optionsBn": [
          "পৃথিবীর সব ট্রেডার CME কর্তৃক নির্ধারিত হুবহু একই গাণিতিক সূত্র ব্যবহার করে।",
          "মেন্টরভেদে এর সংজ্ঞায় পার্থক্য রয়েছে—কেউ বলেন POI-এর সামনের ছোট সুইং, কেউ বলেন লিকুইডিটি ফাঁদ, আবার কেউ বলেন BOS কনফার্মেশনের পূর্বশর্ত; তাই সব সংজ্ঞা গুলিয়ে না ফেলে নির্দিষ্ট একটি সোর্সের নিয়ম লিখে ফলো করতে হবে।",
          "সব সোর্স একমত যে প্রতিটি ক্যান্ডেলের Low-ই একেকটি IDM লেভেল।",
          "পাবলিক সোর্স অনুযায়ী IDM কেবল মান্থলি ক্রিপ্টো চার্টেই দেখা যায়।"
        ],
        "correctIndex": 1,
        "explainEn": "Because SMC sources vary widely on what qualifies as IDM, Lesson 04 requires you to write down the exact definition you are testing rather than merging conflicting rules.",
        "explainBn": "যেহেতু বিভিন্ন সোর্সে IDM-এর সংজ্ঞায় ভিন্নতা রয়েছে, তাই লেসন ০৪-এ সব নিয়ম একসাথে গুলিয়ে না ফেলে আপনি কোন নির্দিষ্ট সংজ্ঞাটি টেস্ট করছেন তা স্পষ্টভাবে লিখে রাখতে বলা হয়েছে।"
      },
      {
        "qEn": "Before proposing that a level is an IDM candidate, what structural facts should you mark on the chart?",
        "qBn": "কোনো লেভেলকে সম্ভাব্য IDM ক্যান্ডিডেট হিসেবে প্রস্তাব করার আগে চার্টে কোন স্ট্রাকচারাল তথ্যগুলো মার্ক করতে হবে?",
        "optionsEn": [
          "The names of the institutions trading that session.",
          "At least four oscillators showing divergence.",
          "The current external range (high and low), the confirmed minor internal swing sitting inside it, and the larger untested objective.",
          "The social media sentiment index for that currency pair."
        ],
        "optionsBn": [
          "ওই সেশনে কোন কোন ব্যাংক ট্রেড করছে তাদের নাম।",
          "ডাইভারজেন্স দেখাচ্ছে এমন অন্তত চারটি অসিলেটর।",
          "বর্তমান এক্সটার্নাল রেঞ্জ (High ও Low), তার ভেতরে থাকা কনফার্মড মাইনর ইন্টারনাল সুইং এবং ওপরের বা নিচের প্রাসঙ্গিক বড় টার্গেট বা অবজেক্টিভ।",
          "ওই কারেন্সি পেয়ারের সোশ্যাল মিডিয়া সেন্টিমেন্ট ইনডেক্স।"
        ],
        "correctIndex": 2,
        "explainEn": "You can objectively mark the external high/low, the confirmed internal swing, and the larger reference objective without making claims about unseen market participants.",
        "explainBn": "পর্দার আড়ালে কারা ট্রেড করছে তা নিয়ে মনগড়া দাবি না করেও এক্সটার্নাল রেঞ্জ, ভেতরের কনফার্মড মাইনর সুইং এবং প্রাসঙ্গিক বড় অবজেক্টিভটি বস্তুনিষ্ঠভাবে চার্টে মার্ক করা সম্ভব।"
      },
      {
        "qEn": "When is a Higher Low (HL) simply a structural HL and NOT necessarily an Inducement (IDM) level?",
        "qBn": "কখন একটি Higher Low (HL) কেবল একটি সাধারণ স্ট্রাকচারাল HL হিসেবে থাকে, কিন্তু সেটিকে অটোমেটিক্যালি IDM বলা যায় না?",
        "optionsEn": [
          "When the Higher Low is formed by a green candle instead of a red candle.",
          "Never; every Higher Low in history is automatically an IDM trap.",
          "Only when the Higher Low forms on a Friday afternoon.",
          "When it maintains the upward sequence of highs and lows, but does not meet the additional observable criteria of your explicit IDM rule (such as sitting directly ahead of an unmitigated POI under your fixed selection rule)."
        ],
        "optionsBn": [
          "যখন Higher Low-টি লাল ক্যান্ডেলের বদলে সবুজ ক্যান্ডেল দিয়ে তৈরি হয়।",
          "কখনোই না; ইতিহাসের প্রতিটি Higher Low-ই স্বয়ংক্রিয়ভাবে একটি IDM ট্র্যাপ।",
          "কেবল যখন Higher Low-টি শুক্রবার বিকেলে তৈরি হয়।",
          "যখন এটি আপট্রেন্ডের স্ট্রাকচারাল ধারাবাহিকতা বজায় রাখে, কিন্তু আপনার নির্ধারিত IDM রুলের বাড়তি দৃশ্যমান শর্তগুলো (যেমন নির্দিষ্ট কোনো আনমিটিগেটেড POI-এর ঠিক সামনে থাকা ইত্যাদি) পূরণ করে না।"
        ],
        "correctIndex": 3,
        "explainEn": "A higher low can be a valid structural HL without satisfying your extra IDM criteria; an additional label must contribute a specific, observable distinction rather than just renaming every HL.",
        "explainBn": "একটি Higher Low আপনার IDM-এর বাড়তি শর্ত পূরণ না করেও স্ট্রাকচারালি ভ্যালিড HL হতে পারে; বাড়তি কোনো লেবেল যোগ করতে হলে সেখানে অবশ্যই চোখে দেখা যায় এমন কোনো আলাদা বৈশিষ্ট্য থাকতে হবে।"
      },
      {
        "qEn": "In the companion article’s hypothetical rule, an external upswing spans 100 to 120 and a confirmed internal low forms at 112. Under the proposed exercise rule, when is 112 called an IDM candidate?",
        "qBn": "সহযোগী আর্টিকেলের কাল্পনিক উদাহরণে একটি এক্সটার্নাল আপসুইং 100 থেকে 120 পর্যন্ত বিস্তৃত এবং 112-তে একটি কনফার্মড ইন্টারনাল Low তৈরি হয়েছে। প্রস্তাবিত নিয়ম অনুযায়ী কখন 112-কে একটি IDM ক্যান্ডিডেট বলা হবে?",
        "optionsEn": [
          "Only if a specified larger upside reference remains untested and your fixed internal-swing rule selects that 112 low BEFORE seeing the outcome.",
          "Only after price crashes below 100.",
          "Whenever price bounces from 112 and reaches 150.",
          "Only if 112 was formed during a central bank press conference."
        ],
        "optionsBn": [
          "কেবল যদি ওপরের দিকের নির্দিষ্ট বড় কোনো রেফারেন্স লেভেল এখনো আনটেস্টেড থাকে এবং ফলাফল দেখার আগেই আপনার নির্ধারিত ইন্টারনাল-সুইং রুল অনুযায়ী 112-এর Low-টি নির্বাচিত হয়।",
          "কেবল প্রাইস ক্র্যাশ করে 100-এর নিচে চলে যাওয়ার পর।",
          "যখনই প্রাইস 112 থেকে বাউন্স করে 150-এ পৌঁছাবে।",
          "কেবল যদি 112 লেভেলটি সেন্ট্রাল ব্যাংকের প্রেস কনফারেন্সের সময় তৈরি হয়।"
        ],
        "correctIndex": 0,
        "explainEn": "The candidate must be selected beforehand using fixed internal-swing criteria while the specified upside objective remains untested.",
        "explainBn": "ফলাফল কী হলো তা দেখার আগেই আপনার নির্ধারিত ইন্টারনাল-সুইং রুল এবং ওপরের আনটেস্টেড রেফারেন্সের শর্ত মেনে 112-কে ক্যান্ডিডেট হিসেবে বাছাই করতে হবে।"
      },
      {
        "qEn": "In that 100-to-120 upswing with an IDM candidate at 112, why does the article’s classification list four distinct outcomes (1: holds above 112 and reaches target, 2: sweeps 112, reclaims and advances, 3: breaks 112 and continues down, 4: unresolved)?",
        "qBn": "100 থেকে 120-এর আপসুইংয়ে 112-কে IDM ক্যান্ডিডেট ধরার পর আর্টিকেলে কেন চারটি আলাদা ফলাফল (১: 112-এর ওপরে টিকে থেকে টার্গেটে যাওয়া, ২: 112 সুইপ ও রিক্লেইম করে ওপরে যাওয়া, ৩: 112 ব্রেক করে নিচেই নামতে থাকা, ৪: অমীমাংসিত থাকা) রেকর্ড করতে বলা হয়েছে?",
        "optionsEn": [
          "Because every trade takes exactly four hours to complete.",
          "Because including continuation without a sweep and breakdown without recovery prevents the IDM theory from winning by definition.",
          "Because price always does all four things simultaneously.",
          "Because outcomes 1 and 3 are impossible in live markets."
        ],
        "optionsBn": [
          "কারণ প্রতিটি ট্রেড সম্পন্ন হতে ঠিক চার ঘণ্টা সময় লাগে।",
          "কারণ সুইপ ছাড়া সরাসরি কন্টিনিউয়েশন এবং ব্রেক করার পর আর ফিরে না আসা—সবগুলো অপশন রাখলে \"যা-ই ঘটুক আমার থিওরিই সঠিক\" এমন পক্ষপাতিত্ব থেকে বিশ্লেষণ মুক্ত থাকে।",
          "কারণ প্রাইস সবসময় একই সাথে চারটি কাজ করে।",
          "কারণ লাইভ মার্কেটে ১ এবং ৩ নম্বর ফলাফল ঘটা অসম্ভব।"
        ],
        "correctIndex": 1,
        "explainEn": "Tracking all possible outcomes—including when price never sweeps IDM or when it breaks straight through without reversing—makes the hypothesis genuinely falsifiable.",
        "explainBn": "সুইপ না করেই চলে যাওয়া কিংবা ব্রেক করার পর আর না ফেরা—সব ধরনের ফলাফল রেকর্ড করলে আপনার হাইপোথিসিসটি নিরপেক্ষভাবে যাচাই করা সম্ভব হয়।"
      },
      {
        "qEn": "When must you save your screenshot and selection reason for a proposed IDM candidate?",
        "qBn": "প্রস্তাবিত কোনো IDM ক্যান্ডিডেটের স্ক্রিনশট এবং সেটি বাছাই করার কারণ ঠিক কখন সেভ করতে হবে?",
        "optionsEn": [
          "After the trade has already hit take-profit.",
          "At the end of the month after filtering out all failed sweeps.",
          "Before revealing later candles, along with the observation window over which you will evaluate it.",
          "Only after price sweeps the level and forms three bullish engulfing candles."
        ],
        "optionsBn": [
          "ট্রেডটি টেক-প্রফিট হিট করার পর।",
          "মাসের শেষে সব ফেইল করা সুইপগুলো বাদ দেওয়ার পর।",
          "পরবর্তী ক্যান্ডেলগুলো উন্মোচন করার আগেই, এবং আপনি কতক্ষণ পর্যন্ত এটি পর্যবেক্ষণ করবেন সেই সময়সীমাসহ।",
          "কেবল প্রাইস লেভেলটি সুইপ করে তিনটি বুলিশ এনগালফিং ক্যান্ডেল তৈরি করার পর।"
        ],
        "correctIndex": 2,
        "explainEn": "Saving the candidate screenshot and observation window before revealing subsequent candles prevents shifting the IDM label to another swing later.",
        "explainBn": "পরবর্তী ক্যান্ডেল দেখার আগেই স্ক্রিনশট এবং পর্যবেক্ষণের সময়সীমা সেভ করে রাখলে পরে নিজের সুবিধার জন্য লেবেলটি অন্য সুইংয়ে সরিয়ে নেওয়ার সুযোগ থাকে না।"
      },
      {
        "qEn": "What should you do if your chosen IDM candidate breaks and continues straight through invalidation without reversing?",
        "qBn": "আপনার বাছাই করা IDM ক্যান্ডিডেটটি যদি ব্রেক করে এবং রিভার্স না করে সরাসরি ইনভ্যালিডেশন লেভেল পার হয়ে চলে যায়, তবে আপনার কী করা উচিত?",
        "optionsEn": [
          "Erase the IDM label and move it to the next lower swing so your chart looks right.",
          "Change your chart timeframe until the break disappears.",
          "Claim that institutions made a mistake and ignore the loss.",
          "Classify the outcome honestly as a break without recovery under your rule, without shifting the candidate to a more convenient swing."
        ],
        "optionsBn": [
          "চার্ট সুন্দর দেখানোর জন্য আগের IDM লেবেলটি মুছে নিচের আরেকটি সুইংয়ে সরিয়ে নেওয়া উচিত।",
          "ব্রেকটি অদৃশ্য না হওয়া পর্যন্ত চার্টের টাইমফ্রেম বদলাতে থাকা উচিত।",
          "দাবি করা উচিত যে ইনস্টিটিউশন ভুল করেছে এবং লসটি উপেক্ষা করা উচিত।",
          "ক্যান্ডিডেট লেভেলটি অন্য কোনো সুবিধাজনক সুইংয়ে না সরিয়ে, আপনার নিয়ম অনুযায়ী এটিকে \"ব্রেক করার পর আর ফিরে না আসা\" (break without recovery) হিসেবে সততার সাথে রেকর্ড করা উচিত।"
        ],
        "correctIndex": 3,
        "explainEn": "Once the observation window ends, you must classify the outcome honestly without moving the candidate marker to fit what happened next.",
        "explainBn": "পর্যবেক্ষণের সময় শেষ হলে ফলাফল যাই হোক তা সততার সাথে ক্লাসিফাই করতে হবে; ফলাফল মেলানোর জন্য ক্যান্ডিডেট লেভেল সরিয়ে অন্য সুইংয়ে নেওয়া যাবে না।"
      },
      {
        "qEn": "Why does Lesson 04 warn against claiming that a sweep of an IDM level \"proves institutional manipulation or engineering\"?",
        "qBn": "কোনো IDM লেভেল সুইপ করলেই সেটিকে \"প্রাতিষ্ঠানিক ম্যানিপুলেশন বা ইঞ্জিনিয়ারিংয়ের প্রমাণ\" বলা থেকে লেসন ০৪ কেন বিরত থাকতে বলে?",
        "optionsEn": [
          "Because a candle chart only records prices, not the identity or intent of the participants behind the orders.",
          "Because institutions never trade in financial markets.",
          "Because manipulation only happens on the 1-minute chart.",
          "Because retail traders control 99% of forex volume."
        ],
        "optionsBn": [
          "কারণ একটি ক্যান্ডেল চার্ট কেবল প্রাইস রেকর্ড করে, অর্ডারের পেছনের ব্যক্তিদের পরিচয় বা তাদের উদ্দেশ্য প্রকাশ করে না।",
          "কারণ প্রাতিষ্ঠানিক ট্রেডাররা কখনোই ফিন্যান্সিয়াল মার্কেটে ট্রেড করে না।",
          "কারণ ম্যানিপুলেশন কেবল ১ মিনিটের চার্টে ঘটে।",
          "কারণ রিটেইল ট্রেডাররা ফরেক্স ভলিউমের ৯৯% নিয়ন্ত্রণ করে।"
        ],
        "correctIndex": 0,
        "explainEn": "TheLesson 04 \"Watch for\" note reminds you that an IDM label is an interpretation of visible price action, not proof that institutions engineered a trap.",
        "explainBn": "লেসন ০৪-এর \"Watch for\" নোটে মনে করিয়ে দেওয়া হয়েছে যে ক্যান্ডেল চার্ট কেবল দৃশ্যমান প্রাইস রেকর্ড করে; তাই IDM লেবেলটি প্রাইস অ্যাকশনের একটি ব্যাখ্যা মাত্র, কেউ ইচ্ছে করে ফাঁদ পেতেছে তার প্রমাণ নয়।"
      },
      {
        "qEn": "According to the companion article, what is the most useful learning question to ask about adding an IDM label to your system?",
        "qBn": "সহযোগী আর্টিকেল অনুযায়ী, আপনার সিস্টেমে IDM লেবেল যোগ করার ক্ষেত্রে সবচেয়ে কার্যকরী প্রশ্ন কোনটি?",
        "optionsEn": [
          "\"Does the word Inducement sound impressive when I post charts online?\"",
          "\"Does IDM change a concrete decision compared with ordinary structure marking—such as determining a wait condition, canceling an entry, or defining a reference level?\"",
          "\"Can I label at least ten IDM points inside every single 5-minute candle?\"",
          "\"How can I use IDM to avoid ever using a stop loss?\""
        ],
        "optionsBn": [
          "\"অনলাইনে চার্ট পোস্ট করার সময় Inducement শব্দটি শুনতে কি বেশ আকর্ষণীয় লাগে?\"",
          "\"সাধারণ স্ট্রাকচার মার্কিংয়ের তুলনায় IDM লেবেলটি কি আমার সিদ্ধান্তে কোনো বাস্তব পরিবর্তন আনছে—যেমন নির্দিষ্ট কোনো শর্তের জন্য অপেক্ষা করা, এন্ট্রি বাতিল করা বা রেফারেন্স লেভেল ঠিক করা?\"",
          "\"আমি কি প্রতিটি ৫ মিনিটের ক্যান্ডেলের ভেতর অন্তত দশটি করে IDM পয়েন্ট মার্ক করতে পারি?\"",
          "\"কীভাবে আমি IDM ব্যবহার করে স্টপ লস ছাড়াই ট্রেড করতে পারি?\""
        ],
        "correctIndex": 1,
        "explainEn": "If a label does not change an operational decision (wait condition, entry cancellation, or reference level), it remains mere descriptive vocabulary rather than a functional rule.",
        "explainBn": "যদি কোনো লেবেল আপনাকে নির্দিষ্ট শর্তের জন্য অপেক্ষা করা, এন্ট্রি বাতিল করা বা রেফারেন্স লেভেল নির্ধারণ করার মতো বাস্তব সিদ্ধান্তে পরিবর্তন না আনে, তবে তা কেবল একটি বর্ণনামূলক শব্দ হিসেবেই থেকে যায়।"
      },
      {
        "qEn": "What should you do with the IDM concept if you find that it does NOT change any wait condition, entry filter, or reference level in your decisions?",
        "qBn": "আপনি যদি দেখেন যে IDM লেবেলটি আপনার কোনো অপেক্ষার শর্ত, এন্ট্রি ফিল্টার বা রেফারেন্স লেভেলের সিদ্ধান্তে কোনো পরিবর্তন আনছে না, তবে সেটির ক্ষেত্রে কী করা উচিত?",
        "optionsEn": [
          "Assume every trade will win if you write IDM on the chart.",
          "Double your trade risk whenever you see it.",
          "Leave it as descriptive vocabulary until a practical, testable rule is available.",
          "Delete your entire trading journal."
        ],
        "optionsBn": [
          "ধরে নিন চার্টে IDM লিখলেই প্রতিটি ট্রেডে লাভ হবে।",
          "যখনই এটি দেখবেন তখনই ট্রেডের ঝুঁকি দ্বিগুণ করে দিন।",
          "কার্যকরী ও যাচাইযোগ্য কোনো রুল তৈরি না হওয়া পর্যন্ত এটিকে কেবল চার্ট বর্ণনার একটি শব্দ (descriptive vocabulary) হিসেবেই রেখে দিন।",
          "আপনার পুরো ট্রেডিং জার্নাল ডিলিট করে দিন।"
        ],
        "correctIndex": 2,
        "explainEn": "Until a concept governs a concrete rule you can test, keep it as descriptive vocabulary rather than pretending it adds an edge.",
        "explainBn": "যতক্ষণ না কোনো কনসেপ্ট আপনার ট্রেডিং সিদ্ধান্তে যাচাইযোগ্য পরিবর্তন আনছে, ততক্ষণ সেটিকে কেবল বর্ণনার ভাষা হিসেবেই রাখা উচিত।"
      },
      {
        "qEn": "In the Lesson 04 study steps, what two case types are you asked to compare on historical charts?",
        "qBn": "লেসন ০৪-এর স্টাডি স্টেপ অনুযায়ী আপনাকে পুরোনো চার্টে কোন দুই ধরনের কেস তুলনা করতে বলা হয়েছে?",
        "optionsEn": [
          "A 1-month candle versus a 12-month candle.",
          "A stock split versus a dividend payout.",
          "A market order on Mondays versus a limit order on Fridays.",
          "A minor swing being swept before continuation, versus a minor swing breaking without a meaningful reversal."
        ],
        "optionsBn": [
          "১ মাসের ক্যান্ডেল বনাম ১২ মাসের ক্যান্ডেল।",
          "স্টক স্প্লিট বনাম ডিভিডেন্ড পেআউট।",
          "সোমবারে মার্কেট অর্ডার বনাম শুক্রবারে লিমিট অর্ডার।",
          "কন্টিনিউয়েশনের আগে একটি মাইনর সুইং সুইপ হওয়া বনাম কোনো অর্থপূর্ণ রিভার্সাল ছাড়াই একটি মাইনর সুইং ব্রেক করে চলে যাওয়া।"
        ],
        "correctIndex": 3,
        "explainEn": "Step 4 of Lesson 04 requires comparing cases where a minor swing is swept before continuation against cases where a minor swing breaks without a meaningful reversal.",
        "explainBn": "লেসন ০৪-এর ৪ নম্বর ধাপে কন্টিনিউয়েশনের আগে মাইনর সুইং সুইপ হওয়া এবং রিভার্সাল ছাড়াই মাইনর সুইং ব্রেক করে চলে যাওয়া—এই দুই ধরনের কেস তুলনা করতে বলা হয়েছে।"
      },
      {
        "qEn": "When revisiting your earlier chart markings in Step 6 of Lesson 04, into which three categories should you classify each disputed IDM point?",
        "qBn": "লেসন ০৪-এর ৬ নম্বর ধাপে আপনার আগের চার্ট মার্কিংগুলো রিভিউ করার সময় প্রতিটি বিতর্কিত IDM পয়েন্টকে কোন তিনটি শ্রেণিতে ভাগ করতে বলা হয়েছে?",
        "optionsEn": [
          "Confirmed under your rule, Uncertain, or Invalid.",
          "Profitable, Breakeven, or Bankrupt.",
          "Short-term, Intermediate-term, or Long-term.",
          "Forex, Crypto, or Futures."
        ],
        "optionsBn": [
          "আপনার নিয়ম অনুযায়ী কনফার্মড (Confirmed), অনিশ্চিত (Uncertain) অথবা বাতিল (Invalid)।",
          "লাভজনক, ব্রেকইভেন অথবা দেউলিয়া।",
          "শর্ট-টার্ম, ইন্টারমিডিয়েট-টার্ম অথবা লং-টার্ম।",
          "ফরেক্স, ক্রিপ্টো অথবা ফিউচারস।"
        ],
        "correctIndex": 0,
        "explainEn": "Step 6 instructs you to classify each disputed IDM point as confirmed under your rule, uncertain, or invalid.",
        "explainBn": "৬ নম্বর ধাপে প্রতিটি বিতর্কিত IDM পয়েন্টকে আপনার নিজস্ব রুল অনুযায়ী Confirmed, Uncertain অথবা Invalid—এই তিন ভাগে ক্লাসিফাই করতে বলা হয়েছে।"
      },
      {
        "qEn": "What does the Lesson 04 Chart Lab require regarding the 20 potential IDM situations you collect?",
        "qBn": "লেসন ০৪-এর চার্ট ল্যাবে আপনার সংগ্রহ করা ২০টি সম্ভাব্য IDM পরিস্থিতির ব্যাপারে কী শর্ত দেওয়া হয়েছে?",
        "optionsEn": [
          "All 20 must be textbook winning trades with zero ambiguity.",
          "Record 10 clear examples and 10 ambiguous examples, mark the level/target/invalidation, and write a one-sentence reason why each is not simply an HL/LH.",
          "Collect 20 examples from a single 1-minute chart without marking any invalidation points.",
          "Only record examples where price moved 1,000 pips."
        ],
        "optionsBn": [
          "২০টি উদাহরণই হতে হবে কোনো দ্বিধা ছাড়া শতভাগ নিখুঁত উইনিং ট্রেড।",
          "১০টি স্পষ্ট এবং ১০টি দ্বিধাজনক উদাহরণ রেকর্ড করতে হবে, লেভেল/টার্গেট/ইনভ্যালিডেশন মার্ক করতে হবে এবং কেন প্রতিটি কেবল সাধারণ HL/LH নয় তার এক বাক্যের কারণ লিখতে হবে।",
          "কোনো ইনভ্যালিডেশন পয়েন্ট মার্ক না করেই একটিমাত্র ১ মিনিটের চার্ট থেকে ২০টি উদাহরণ সংগ্রহ করতে হবে।",
          "কেবল যে উদাহরণগুলোতে প্রাইস ১,০০০ পিপস মুভ করেছে সেগুলোই রেকর্ড করতে হবে।"
        ],
        "correctIndex": 1,
        "explainEn": "The Lesson 04 Chart Lab requires 10 clear and 10 ambiguous examples, complete with level, intended external target, invalidation point, and a one-sentence distinction from a normal HL/LH.",
        "explainBn": "লেসন ০৪-এর চার্ট ল্যাবে ১০টি স্পষ্ট ও ১০টি দ্বিধাজনক উদাহরণ সংগ্রহ করতে, লেভেল/টার্গেট/ইনভ্যালিডেশন মার্ক করতে এবং কেন সেটি সাধারণ HL/LH নয় তা এক বাক্যে লিখতে বলা হয়েছে।"
      },
      {
        "qEn": "Why is it important to distinguish small lows/highs that could plausibly relate to protective stops from ordinary intrabar noise?",
        "qBn": "সাধারণ ক্যান্ডেল নয়েজের চেয়ে কোন ছোট Low বা High-গুলোতে প্রোটেক্টিভ স্টপ থাকতে পারে—তা আলাদা করার চেষ্টা করা কেন গুরুত্বপূর্ণ?",
        "optionsEn": [
          "Because ordinary noise candles are always 10 times larger than swing pivots.",
          "Because broker servers show you the exact stop-loss orders of every bank on a standard candlestick chart.",
          "Because calling every tiny one-candle pause \"inducement\" floods your chart with meaningless labels that cannot be consistently tested.",
          "Because protective stops can never be triggered in a trending market."
        ],
        "optionsBn": [
          "কারণ সাধারণ নয়েজ ক্যান্ডেলগুলো সবসময় সুইং পিভটের চেয়ে ১০ গুণ বড় হয়।",
          "কারণ সাধারণ ক্যান্ডেলস্টিক চার্টেই ব্রোকার সার্ভার সব ব্যাংকের স্টপ-লস অর্ডার দেখিয়ে দেয়।",
          "কারণ প্রতিটি ছোট এক-ক্যান্ডেলের বিরতিকে \"Inducement\" নাম দিলে চার্ট অর্থহীন লেবেলে ভরে যায়, যা কখনোই ধারাবাহিকভাবে টেস্ট করা সম্ভব নয়।",
          "কারণ ট্রেন্ডিং মার্কেটে প্রোটেক্টিভ স্টপ কখনোই হিট হতে পারে না।"
        ],
        "correctIndex": 2,
        "explainEn": "Without explicit criteria separating a structurally meaningful minor swing from random noise, every minor pause gets arbitrarily relabeled as IDM.",
        "explainBn": "সাধারণ নয়েজ এবং অর্থপূর্ণ মাইনর সুইংয়ের মধ্যে পার্থক্য করার সুনির্দিষ্ট নিয়ম না থাকলে যেকোনো ছোট ক্যান্ডেল পজকেই ইচ্ছেমতো IDM হিসেবে নাম দেওয়ার প্রবণতা তৈরি হয়।"
      }
    ]
  }
};
