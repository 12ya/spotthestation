const hi = {
  errorScreen: {
    title: "कुछ गलत हो गया!",
    friendlySubtitle:
      "यह वह स्क्रीन है जिसे आपके उपयोगकर्ता उत्पादन में देखेंगे जब कोई त्रुटि फेंक दी जाती है।आप इस संदेश को अनुकूलित करना चाहते हैं (`ऐप/i18n/en.ts`` में स्थित) और शायद लेआउट के साथ -साथ (` ऐप/स्क्रीन/एरर्सस्क्रीन`)।यदि आप इसे पूरी तरह से हटाना चाहते हैं, तो <ErrorBoundary> घटक के लिए `app/app.tsx` की जाँच करें।",
    reset: "रीसेट ऐप",
  },
  snackBar: {
    ok: "ठीक",
    dismiss: "नकार देना",
    sightingsSaved: "अंतिम सहेजे गए स्थान के लिए दृष्टि भरी हुई!",
    defaultError: "कुछ त्रुटि हुई",
    locationSaved: "स्थान बचाया",
    locationExist: "इस शीर्षक के साथ स्थान पहले से मौजूद है!",
    openSettingsError: "सेटिंग्स नहीं खोल सकते!",
    shared: "सफलतापूर्वक साझा किया!",
    savedToGallery: "गैलरी के लिए बचाया",
  },
  permissionsModal: {
    close: "बंद करना",
    openSettings: "खुली सेटिंग",
    body: "इस सुविधा का उपयोग करने के लिए, आपको गैलरी तक पहुंचने के लिए अनुमति देने की आवश्यकता है।",
  },
  permissionsAndroid: {
    title: "वीडियो सहेजने की अनुमति",
    message: "इस ऐप को आपके डिवाइस पर वीडियो सहेजने की अनुमति की आवश्यकता है।",
    buttonNeutral: "मुझसे बाद में पूछें",
    buttonNegative: "रद्द करना",
    buttonPositive: "ठीक",
  },
  thanksModal: {
    body: "हमसे संपर्क करने के लिए धन्यवाद।हमें आपका संदेश मिला है और आपके अनुरोध को संसाधित करेगा।हम भविष्य की रिलीज़ में एक संकल्प को शामिल करने की उम्मीद करते हैं।कृपया ध्यान दें कि यह एप्लिकेशन उपयोगकर्ता डेटा एकत्र नहीं करता है, इसलिए हम सभी संदेशों का व्यक्तिगत रूप से जवाब नहीं दे सकते।",
    dismiss: "नकार देना",
  },
  privacy: {
    title: "अपने स्थान का उपयोग करें",
    body: "हम आपके वर्तमान स्थान में आगामी दृष्टि की गणना करने के लिए स्थान डेटा का उपयोग करते हैं।कृपया इस कार्यक्षमता को सक्षम करने के लिए स्थान अनुमतियाँ प्रदान करें।",
    agree: "सहमत",
    skip: "छोडना",
    policy: "गोपनीयता नीति",
  },
  notifications: {
    push: {
      title: "अब आईएसएस को स्पॉट करें!",
      subTitle: "आईएसएस आपके ऊपर से गुजर रहा है",
    },
    before: {
      titleOne: "आईएसएस को स्पॉट करें",
      titleTwo: "मिनट!",
      subTitleOne: "आईएसएस आपके ऊपर से गुजर रहा है",
      subTitleTwo: "मिनटों में",
    },
  },
  units: {
    minute: "मिन",
    kilometer: "किमी",
    kilogram: "किलोग्राम",
    month: "महीना",
    metersPerSecond: "एम/एस",
  },
  tabNavigator: {
    homeTab: "घर",
    issViewTab: "इस दृश्य को देखें",
    issNowTab: "अब आईएसएस",
    resourcesTab: "संसाधन",
    settingsTab: "समायोजन",
  },
  onboarding: {
    splash: {
      title: "स्टेशन को स्पॉट करें",
      subTitle: "आकाश में टकटकी लगाएं और अंतर्राष्ट्रीय अंतरिक्ष स्टेशन (आईएसएस) देखें",
    },
    completeProfile: {
      notification: {
        title: "अधिसूचना सेटिंग्स",
        label: "पुश नोटिफिकेशन अलर्ट प्राप्त करें",
        tip: "जब अंतरिक्ष स्टेशन आपके स्थान पर आ रहा है तो अलर्ट प्राप्त करें।",
        nextButton: "अगला",
      },
      location: {
        title: "आपका स्थान",
        subtitle:
          "कृपया ऐप को अपने स्थान का स्वचालित रूप से पता लगाने की अनुमति दें, या अपना स्थान मैन्युअल रूप से प्रदान करें।",
        detectButton: "मेरे स्थान का पता लगाएं",
        orLabel: "या",
        selectLocation: "अपनी स्थिति दर्ज़ करें",
        detecting: "स्थान का पता लगाना ...",
        doneButton: "पूर्ण",
        serviceAlertTitle: "स्थान सेवाएँ अक्षम",
        serviceAlertBody: "कृपया जारी रखने के लिए अपनी स्थान सेवाओं को सक्षम करें।",
        permissionAlertTitle: "अनुमति नहीं दी गई",
        permissionAlertBody:
          "हम आपके वर्तमान स्थान में आगामी दृष्टि की गणना करने के लिए स्थान डेटा का उपयोग करते हैं।कृपया इस कार्यक्षमता को सक्षम करने के लिए स्थान अनुमतियाँ प्रदान करें।",
      },
    },
  },
  homeScreen: {
    initLoader: {
      message: "आईएसएस डेटा लोड हो रहा है ... इसे पूरा होने में एक क्षण लग सकता है।",
      trajectoryError:
        "आईएसएस प्रक्षेपवक्र डेटा वर्तमान में सर्वर रखरखाव के कारण अनुपलब्ध है।कृपया कुछ देर बाद फिर से जांच करें।",
    },
    header: {
      firstTimeHead: "अगली दृष्टि",
      secondTimeHead: "उल्टी गिनती",
    },
    selectLocation: {
      title: "स्थान चुनें",
      inputPlaceholder: "शहर, पिन द्वारा खोज स्थान ...",
      current: "वर्तमान स्थान",
      saved: "बचाए गए स्थान",
      nearby: "आस -पास के स्थान",
      search: "खोज के परिणाम",
      cta: "इस स्थान के लिए सूचनाएं अनुकूलित करें",
      actionTitle: "चेतावनी",
    },
    selectSightings: {
      title: "आगामी दृष्टि",
      sightings: "साइटिंग्स",
      selectMessage: "उन घटनाओं का चयन करें जिनके लिए आप अधिसूचित होना चाहते हैं।",
      switch: "इस स्थान पर सभी आगामी घटनाओं के लिए मुझे सूचित करें।",
      aboveHorizon: "क्षितिज के ऊपर",
      today: "आज",
      tomorrow: "आने वाला कल",
      coach: {
        title: "प्रतीक विवरण",
        moon: "यह चयनित स्थान पर रात का समय होगा जब आईएसएस क्षितिज से ऊपर होगा।",
        sunset: "चयनित स्थान पर गोधूलि होगा जब आईएसएस क्षितिज से ऊपर होगा।",
        sun: "चयनित स्थान पर दिन के उजाले होंगे जब आईएसएस क्षितिज से ऊपर होगा।",
      },
    },
    coachMarks: {
      skip: "दौरे को छोड़ें",
      next: "अगला",
      finish: "खत्म करना",
      dismiss: "नकार देना",
      locationTitle: "स्थान बदलें",
      locationData: "आप यहां से सीधे अपने स्थान को एक अलग एक में चुन सकते हैं या बदल सकते हैं।",
      sightingsTitle: "अगली दृष्टि और उलटी गिनती",
      sightingsData:
        "यह खंड आपको अपने चयनित स्थान के पास अगले आगामी आईएसएस के लिए तारीख और एक उलटी गिनती टाइमर दिखाता है।आप आगामी दृश्य की पूरी सूची देखने के लिए अगले दृश्य बॉक्स पर टैप कर सकते हैं।",
      globeTitle: "इंटरएक्टिव अर्थ",
      globeData:
        "आप स्क्रीन पर स्वाइप करके आईएसएस की वास्तविक समय की स्थिति देख सकते हैं।यह आपको पृथ्वी के साथ बातचीत करने और वास्तविक समय में आईएसएस के स्थान को ट्रैक करने की अनुमति देता है।",
      mapTitle: "2 डी मैप व्यू",
      mapData:
        "यह खंड पृथ्वी में रात और दिन के क्षेत्रों के खिलाफ आईएसएस के पूर्ण मार्ग का 2 डी प्रतिनिधित्व दिखाता है।",
      navigationTitle: "मार्गदर्शन",
      navigationData:
        "आप नीचे नेविगेशन मेनू से ऐप की विभिन्न विशेषताओं के माध्यम से ब्राउज़ कर सकते हैं।",
    },
  },
  issView: {
    timeHeader: "उलटी गिनती",
    cameraPermissionText:
      "आपने अपने फोन के कैमरे के उपयोग की अनुमति नहीं दी है।अनुमति देने के लिए यहां क्लिक करें।",
    issCaptured: "इस पल को पकड़ो",
    details: {
      title: "अंतर्राष्ट्रीय अंतरिक्ष स्टेशन - विवरण",
      distance: "दूरी",
      orbitalSpeed: "परिक्रमा",
      longitude: "देशान्तर",
      latitude: "अक्षांश",
      altitude: "ऊंचाई",
      crewOnboard: "चालक दल",
      launched: "विधानसभा शुरू हुई",
      launchedValue: "20 नवंबर 1998",
      mass: "अनुमानित द्रव्यमान",
      dimensions: "अनुमानित आयाम",
      orbitalPeriod: "कक्षीय अवधि",
      orbitsPerDay: "कक्षाओं/दिन",
      orbitalDecay: "परिक्रमा",
      dimensionsValue: "109 मीटर चौड़ा x 73 मीटर लंबा x 14 मीटर ऊँचा",
    },
  },
  settings: {
    header: "समायोजन",
    locationSettings: "स्थान सेटिंग्स",
    notificationSettings: "अधिसूचना सेटिंग्स",
    termsAndConditions: "नियम और शर्तें",
    contactUs: "संपर्क करें",
    termsAndConditionsData: {
      backButton: "समायोजन",
      ios: {
        title: "लाइसेंस -अनुप्रयोग उपयोग समझौता",
        intro1:
          "अंत-उपयोगकर्ता संयुक्त राज्य अमेरिका सरकार द्वारा विकसित निम्नलिखित लाइसेंस प्राप्त आवेदन का उपयोग करना चाहता है, जैसा कि 300 ई स्ट्रीट एसडब्ल्यू, वाशिंगटन, डी.सी. (इसके बाद नासा) में स्थित राष्ट्रीय एरोनॉटिक्स एंड स्पेस एडमिनिस्ट्रेशन द्वारा प्रतिनिधित्व किया गया है:",
        appData: {
          line1: "लाइसेंस प्राप्त आवेदन:",
          line2: "संस्करण:",
          line3: "नासा प्रौद्योगिकी संख्या: MSC-27535-1 (इसके बाद लाइसेंस प्राप्त आवेदन)",
        },
        contactData: {
          line1: "संपर्क का नासा बिंदु:",
          line2: "जैकब कीटन",
          line3: "नासा मुख्यालय",
          line4: "300 ई स्ट्रीट एसडब्ल्यू",
          line5: "ई-मेल: spotthestation@hq.nasa.gov",
        },
        intro2:
          "लाइसेंस प्राप्त आवेदन जारी करने के लिए नासा के लिए प्राधिकरण नासा नीति निर्देश (एनपीडी) 2820.1सी है",
        intro3:
          "अब इसलिए, नासा को ध्यान में रखते हुए, लाइसेंस प्राप्त एप्लिकेशन को एंड-यूज़र को जारी करने और एंड-यूज़र को गैर-ट्रांसफ़ेबल अधिकार प्रदान करने के लिए लाइसेंस प्राप्त एप्लिकेशन का उपयोग करने के लिए किसी भी iPhone या iPod टच पर निर्दिष्ट किया गया है, जिसका एंड-यूज़र मालिक है या नियंत्रण करता है और जैसा कि APP स्टोर नियमों और शर्तों के लिए निर्धारित उपयोग नियमों और शर्तों के रूप में है।",
        body: {
          line1:
            "1. नासा और एंड-यूज़र ने स्वीकार किया कि यह समझौता केवल नासा और एंड-यूज़र के बीच संपन्न हुआ है, और एप्पल के साथ नहीं, यह समझौता गैर-हस्तांतरणीय है, और नासा, न कि एप्पल, केवल लाइसेंस प्राप्त आवेदन और सामग्री के लिए जिम्मेदार है।",
          line2:
            "2. नासा और एंड-यूज़र स्वीकार करते हैं और सहमत होते हैं कि एप्पल, और एप्पल की सहायक कंपनियां, इस समझौते के तीसरे पक्ष के लाभार्थी हैं, और यह कि इस समझौते के नियमों और शर्तों के अंत-उपयोगकर्ता की स्वीकृति पर, एप्पल के पास इस समझौते को लागू करने के लिए अधिकार स्वीकार करने का अधिकार होगा (और इस समझौते के तीसरे पक्ष के लाभार्थी को लागू करने का अधिकार स्वीकार किया जाएगा।",
          line3:
            "3. लाइसेंस प्राप्त आवेदन नासा की संपत्ति है।अंत-उपयोगकर्ता स्वीकार करता है कि यह इस समझौते के तहत लाइसेंस प्राप्त आवेदन में कोई स्वामित्व ब्याज प्राप्त नहीं करता है।लाइसेंस प्राप्त आवेदन सार्वजनिक डोमेन में नहीं है और इस समझौते में कुछ भी नहीं किया जाएगा क्योंकि लाइसेंस प्राप्त आवेदन को प्रतिबंध के बिना जनता के लिए उपलब्ध कराया जाएगा।",
          line4:
            "4. एंड-यूज़र द्वारा लाइसेंस प्राप्त आवेदन का कोई रिलीज, वितरण या प्रकाशन नहीं होगा।",
          line5:
            "5. नासा न तो उत्तरदायी होगा और न ही किसी भी रखरखाव या प्रदान किए गए लाइसेंस प्राप्त आवेदन के अद्यतन के लिए, न ही लाइसेंस प्राप्त आवेदन में किसी भी त्रुटि के सुधार के लिए जिम्मेदार होगा।नासा और एंड-यूज़र स्वीकार करते हैं कि एप्पल के पास लाइसेंस प्राप्त आवेदन के संबंध में किसी भी रखरखाव और समर्थन सेवाओं को प्रस्तुत करने के लिए कोई दायित्व नहीं है।",
          line6:
            '6. एंड-यूज़र प्रतिनिधित्व करता है और वारंट करता है कि (i) वह/वह एक ऐसे देश में स्थित नहीं है जो अमेरिकी सरकार के अवलोकन के अधीन है, या जिसे अमेरिकी सरकार द्वारा "आतंकवादी सहायक" देश के रूप में नामित किया गया है;और (ii) वह किसी भी अमेरिकी सरकार की निषिद्ध या प्रतिबंधित पार्टियों की सूची में सूचीबद्ध नहीं है।',
          line7:
            '7. लाइसेंस प्राप्त एप्लिकेशन को किसी भी तरह की वारंटी के बिना "जैसा है" प्रदान किया जाता है, या तो व्यक्त किया गया, निहित, या वैधानिक, सहित, लेकिन किसी भी वारंटी तक सीमित नहीं है, जो लाइसेंस प्राप्त एप्लिकेशन विनिर्देशों के अनुरूप होगा, किसी विशेष उद्देश्य के लिए मर्चेंटेबिलिटी के किसी भी निहित वारंटियों, और उल्लंघन से स्वतंत्रता, या किसी भी वारंटी से मुक्त हो जाएगा।किसी भी घटना में नासा किसी भी नुकसान के लिए उत्तरदायी नहीं होगा, जिसमें शामिल है, लेकिन सीमित नहीं है, प्रत्यक्ष, अप्रत्यक्ष, विशेष या परिणामी नुकसान, जिसके परिणामस्वरूप, या किसी भी तरह से लाइसेंस प्राप्त एप्लिकेशन से जुड़ा हुआ है, चाहे वारंटी, अनुबंध, यातना के आधार पर, या अन्यथा, या नहीं, या नहीं, या नहीं, या नहीं, या नहीं, या नहीं, या नहीं।अंत-उपयोगकर्ता अमेरिकी सरकार, उसके ठेकेदारों और उनके उपमहाद्वीपों के खिलाफ किसी भी और सभी दावों को माफ करने के लिए सहमत है, और अमेरिकी सरकार, उसके ठेकेदारों और उनके उपठेकेदारों को किसी भी नुकसान के लिए हानिरहित और धारण करेगा, जो कि एंड-यूज़र लाइसेंस प्राप्त आवेदन के एंड-यूज़र के उपयोग से, या उसके परिणामस्वरूप, लाइसेंस प्राप्त आवेदन से प्राप्त कर सकता है।',
          line8:
            "8. कानून द्वारा लागू किए गए किसी भी वारंटी के अनुरूप लाइसेंस प्राप्त आवेदन की किसी भी विफलता की स्थिति में, एंड-यूज़र एप्पल को सूचित कर सकता है, और एप्पल एंड-यूज़र के लिए लाइसेंस प्राप्त आवेदन के लिए खरीद मूल्य (यदि कोई हो) वापस कर देगा।लागू कानून द्वारा अनुमत अधिकतम सीमा तक, एप्पल के पास किसी भी वारंटी के अनुरूप लाइसेंस प्राप्त आवेदन की किसी भी विफलता के कारण कोई अन्य नुकसान, देनदारियां, नुकसान, लागत या खर्च नहीं होगा।",
          line9:
            "9. नासा और एंड-यूज़र ने स्वीकार किया कि, किसी भी तीसरे पक्ष की स्थिति में यह दावा किया गया है कि लाइसेंस प्राप्त आवेदन या एंड-यूज़र के कब्जे और लाइसेंस प्राप्त आवेदन का उपयोग बौद्धिक संपदा अधिकारों का उल्लंघन करता है, नासा, न कि एप्पल, इस तरह के किसी भी बौद्धिक संपदा उल्लंघन के दावे की जांच, रक्षा, निपटान और निर्वहन के लिए पूरी तरह से जिम्मेदार होगा।",
          line10:
            "10. नासा और एंड-यूज़र स्वीकार करते हैं कि नासा, न कि एप्पल लाइसेंस प्राप्त आवेदन या एंड-यूज़र के कब्जे और /या लाइसेंस प्राप्त एप्लिकेशन के उपयोग से संबंधित अंतिम-उपयोगकर्ता या तीसरे पक्ष के किसी भी दावे को संबोधित करने के लिए जिम्मेदार है, जिसमें शामिल हैं, लेकिन सीमित नहीं: (i) उत्पाद देयता दावों;(ii) कोई भी दावा कि लाइसेंस प्राप्त आवेदन किसी भी लागू कानूनी या नियामक आवश्यकता के अनुरूप होने में विफल रहता है, जिसमें कानून द्वारा लागू किसी भी वारंटी शामिल हैं;और (iii) उपभोक्ता संरक्षण या इसी तरह के कानून के तहत उत्पन्न होने वाले दावे।",
          line11:
            "11. इस समझौते को लागू किया जाएगा, और सभी उद्देश्यों के लिए संयुक्त राज्य अमेरिका के संघीय कानून के अनुसार, पार्टियों के बीच कानूनी संबंध निर्धारित किए जाएंगे।",
          line12:
            "12. यह समझौता नासा और एंड-यूज़र के बीच लाइसेंस प्राप्त आवेदन जारी करने से संबंधित संपूर्ण समझ और समझौते का गठन करता है और इसे संशोधित, संशोधित या संशोधित नहीं किया जा सकता है।",
          line13:
            "13. इस समझौते के तहत लाइसेंस प्राप्त आवेदन को स्वीकार और उपयोग करके, अंत-उपयोगकर्ता इसके द्वारा सभी नियमों और शर्तों से सहमत है।",
        },
      },
      android: {
        title: "लाइसेंस -अनुप्रयोग उपयोग समझौता",
        intro1:
          "अंत-उपयोगकर्ता संयुक्त राज्य अमेरिका सरकार द्वारा विकसित निम्नलिखित उत्पाद का उपयोग करना चाहता है, जैसा कि नेशनल एरोनॉटिक्स एंड स्पेस एडमिनिस्ट्रेशन, एम्स रिसर्च सेंटर, मोफेट फील्ड, सीए 94035 (इसके बाद नासा) में स्थित एम्स रिसर्च सेंटर द्वारा दर्शाया गया है:",
        appData: {
          line1: "सॉफ़्टवेयर:",
          line2: "संस्करण:",
          line3: "नासा प्रौद्योगिकी संख्या: MSC-27535-1",
        },
        intro2:
          "लाइसेंस प्राप्त आवेदन जारी करने के लिए नासा के लिए प्राधिकरण नासा पॉलिसी डायरेक्टिव (NPD) 2820.1C है।",
        intro3:
          'अब इसलिए, नासा के बारे में विचार में, व्यक्तिगत, गैर-वाणिज्यिक उपयोग के लिए लाइसेंस प्राप्त एप्लिकेशन का उपयोग करने के लिए एंड-यूज़र को गैर-हस्तांतरणीय अधिकार के लिए एंड-यूज़र को लाइसेंस प्राप्त एप्लिकेशन को जारी करना और किसी भी एंड्रॉइड-पावर्ड मोबाइल डिवाइस ("डिवाइस") पर सेवा के एंड्रॉइड मार्केट शर्तों के लिए अनुमति दी गई है,  जिसका एंड-यूज़र मालिक है या नियंत्रण करता है, एंड-यूजर्स द्वारा अनुमत है।',
        body: {
          line1:
            "1. लाइसेंस प्राप्त आवेदन नासा की संपत्ति है।अंत-उपयोगकर्ता स्वीकार करता है कि यह इस समझौते के तहत लाइसेंस प्राप्त आवेदन में कोई स्वामित्व ब्याज प्राप्त नहीं करता है।लाइसेंस प्राप्त आवेदन सार्वजनिक डोमेन में नहीं है और इस समझौते में कुछ भी नहीं किया जाएगा क्योंकि लाइसेंस प्राप्त आवेदन को प्रतिबंध के बिना जनता के लिए उपलब्ध कराया जाएगा।",
          line2:
            "2. एंड-यूज़र द्वारा लाइसेंस प्राप्त आवेदन का कोई रिलीज, वितरण या प्रकाशन नहीं होगा।",
          line3:
            "3. नासा न तो उत्तरदायी होगा और न ही किसी भी रखरखाव या प्रदान किए गए लाइसेंस प्राप्त आवेदन के अद्यतन के लिए, न ही लाइसेंस प्राप्त आवेदन में किसी भी त्रुटि के सुधार के लिए।",
          line4:
            '4. एंड-यूज़र प्रतिनिधित्व करता है और वारंट करता है कि (i) वह/वह एक ऐसे देश में स्थित नहीं है जो अमेरिकी सरकार के अवलोकन के अधीन है, या जिसे अमेरिकी सरकार द्वारा "आतंकवादी सहायक" देश के रूप में नामित किया गया है;और (ii) वह किसी भी अमेरिकी सरकार की निषिद्ध या प्रतिबंधित पार्टियों की सूची में सूचीबद्ध नहीं है।',
          line5:
            '5. लाइसेंस प्राप्त एप्लिकेशन को किसी भी तरह की वारंटी के बिना "जैसा है" प्रदान किया जाता है, या तो व्यक्त किया गया, निहित, या वैधानिक, सहित, लेकिन किसी भी वारंटी तक सीमित नहीं है, जो लाइसेंस प्राप्त एप्लिकेशन विनिर्देशों के अनुरूप होगा, किसी विशेष उद्देश्य के लिए मर्चेंटेबिलिटी के किसी भी निहित वारंटियों, और उल्लंघन से स्वतंत्रता, या किसी भी वारंटी से मुक्त हो जाएगा।किसी भी घटना में नासा किसी भी नुकसान के लिए उत्तरदायी नहीं होगा, जिसमें शामिल है, लेकिन सीमित नहीं है, प्रत्यक्ष, अप्रत्यक्ष, विशेष या परिणामी नुकसान, जिसके परिणामस्वरूप, या किसी भी तरह से लाइसेंस प्राप्त एप्लिकेशन से जुड़ा हुआ है, चाहे वारंटी, अनुबंध, यातना के आधार पर, या अन्यथा, या नहीं, या नहीं, या नहीं, या नहीं, या नहीं, या नहीं, या नहीं।एंड-यूज़र अमेरिकी सरकार, उसके ठेकेदारों और उनके उपमहाद्वीपों के खिलाफ किसी भी और सभी दावों को माफ करने के लिए सहमत है, और किसी भी क्षति के लिए अमेरिकी सरकार, उसके ठेकेदारों और उनके उपठेकेदारों को हानिरहित और निंदा करेगा, जो एंड-यूज़र लाइसेंस प्राप्त आवेदन के एंड-यूज़र के उपयोग से प्राप्त कर सकता है, या लाइसेंस प्राप्त एप्लिकेशन से किसी भी क्षति को शामिल कर सकता है।',
          line6:
            "6. इस समझौते को लागू किया जाएगा, और सभी उद्देश्यों के लिए संयुक्त राज्य अमेरिका के संघीय कानून के अनुसार, पार्टियों के बीच कानूनी संबंध निर्धारित किए जाएंगे।",
          line7:
            "7. यह समझौता नासा और अंतिम-उपयोगकर्ता के बीच संपूर्ण समझ और समझौते का गठन करता है जो लाइसेंस प्राप्त आवेदन को जारी करने से संबंधित है और इसे संशोधित, संशोधित या संशोधित नहीं किया जा सकता है।",
          line8:
            "8. इस समझौते के तहत लाइसेंस प्राप्त आवेदन को स्वीकार और उपयोग करके, अंत-उपयोगकर्ता इसके द्वारा सभी नियमों और शर्तों से सहमत है।",
        },
      },
    },
    contactUsData: {
      backButton: "समायोजन",
      title: "संपर्क करें",
      titlePlaceholder: "शीर्षक चुनें",
      commentsPlaceholder: "इनपुट टिप्पणियाँ",
      sendButton: "भेजना",
      contactUsOptions: {
        reportAnIssue: "मामले की रिपोर्ट करें",
        improvementIdeas: "सुधार विचार",
        generalQuestions: "सामान्य सवाल",
        comments: "टिप्पणियाँ",
      },
    },
    notificationSettingsData: {
      backButton: "समायोजन",
      notificationTitle: "अधिसूचना सेटिंग्स",
      privacyTitle: "गोपनीय सेटिंग",
      upcomingLabel: "आगामी कार्यक्रम",
      customizeLabel: "सूचनाएँ अनुकूलित करें",
      upcomingTip: "घटना सूचना प्राप्त करने से रोकने के लिए बंद करें।",
      notifyMeBefore: "मुझे पहले सूचित करें",
      turnOffNotifications: "सूचनाएं बंद करो",
      from: "से",
      until: "जब तक",
    },
    locationSettingsData: {
      backToSettings: "समायोजन",
      goBack: "वापस जाओ",
      generalTitle: "स्थान सेटिंग्स",
      cta: "इस स्थान के लिए सूचनाएं अनुकूलित करें",
      locationPermission: "अनुदान स्थान अनुमति",
      addNewLocation: {
        generalTitleAdd: "नया स्थान जोड़ें",
        generalTitleEdit: "स्थान संपादित करें",
        confirnModalButton: "पुष्टि करना",
        saveButton: "स्थान सहेजें",
        searchInputPlaceholder: "शहर, ज़िप या पता दर्ज करें",
        nameInputPlaceholder: "स्थान का नाम सहेजें",
      },
      removeLocation: {
        question: "क्या आप इस स्थान को हटाना सुनिश्चित कर रहे हैं?",
        cancelButton: "रद्द करना",
        removeButton: "मिटाना",
      },
    },
  },
  resources: {
    header: "संसाधन",
    searchPlaceholder: "खोज लेख, घटनाएँ, आदि ...",
    suggestions: "सुझाव",
    searchResults: "खोज के परिणाम",
    tabs: {
      news: "समाचार",
      about: "के बारे में",
      details: "विवरण",
    },
  },
}

export default hi
export type Translations = typeof hi
