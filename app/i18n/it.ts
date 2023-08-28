const it = {
  name: "Italiano",
  errorScreen: {
    title: "Qualcosa è andato storto!",
    friendlySubtitle:
      "Questo è lo schermo che i tuoi utenti vedranno in produzione quando viene generato un errore. Ti consigliamo di personalizzare questo messaggio (situato in `app/i18n/en.ts`) e probabilmente anche il layout (`app/schermate/ErrorScreen`). Se si desidera rimuoverlo del tutto, controlla `app/app.tsx` per il componente <ErrorBoundary>.",
    reset: "Ripristina l'app",
  },
  snackBar: {
    ok: "OK",
    dismiss: "Ignora",
    sightingsSaved: "Avvistamenti per l'ultima posizione salvata caricati!",
    defaultError: "Si sono verificati alcuni errori",
    locationSaved: "Posizione salvata",
    locationExist: "La posizione con questo titolo esiste già!",
    openSettingsError: "Impossibile aprire le impostazioni!",
    shared: "Condiviso con successo!",
    savedToGallery: "Salvato nella galleria",
  },
  permissionsModal: {
    close: "Chiudi",
    openSettings: "Apri le impostazioni",
    body: "Per utilizzare questa funzione, è necessario concedere l'autorizzazione per accedere alla galleria.",
  },
  permissionsAndroid: {
    title: "Autorizzazione per salvare i video",
    message: "Questa app richiede l'autorizzazione per salvare i video sul tuo dispositivo.",
    buttonNeutral: "Chiedimelo più tardi",
    buttonNegative: "Annulla",
    buttonPositive: "OK",
  },
  thanksModal: {
    body: "Grazie per averci contattato. Abbiamo ricevuto il tuo messaggio ed elaboreremo la tua richiesta. Si prega di notare che questa applicazione non raccoglie i dati dell'utente, quindi non possiamo rispondere a tutti i messaggi individualmente.",
    dismiss: "Ignora",
  },
  privacy: {
    title: "Usa la tua posizione",
    body: "Usiamo i dati sulla posizione per calcolare gli avvistamenti imminenti nella tua posizione attuale. Si prega di concedere l'autorizzazione ad accedere la tua posizione per abilitare questa funzionalità.",
    agree: "Accetta",
    skip: "Salta",
    policy: "Politica sulla Riservatezza",
  },
  notifications: {
    push: {
      title: "Individua l'ISS ora!",
      subTitle: "L'ISS sta passando sopra di te alle",
    },
    before: {
      titleOne: "Individua l'ISS",
      titleTwo: "minuti!",
      subTitleOne: "La ISS sta passando sopra di te tra",
      subTitleTwo: "minuti alle",
    },
  },
  units: {
    minute: "min",
    kilometer: "km",
    kilogram: "kg",
    month: "mese",
    metersPerSecond: "m/s",
  },
  tabNavigator: {
    homeTab: "Home",
    issViewTab: "Vista ISS",
    issNowTab: "L'ISS ora",
    resourcesTab: "Risorse",
    settingsTab: "Impostazioni",
  },
  onboarding: {
    splash: {
      title: "Individua la stazione",
      subTitle: "Guarda il cielo e visualizza la Stazione Spaziale Internazionale",
    },
    completeProfile: {
      notification: {
        title: "Impostazioni di notifica",
        label: "River avvisi di notifica",
        tip: "Ricevi avvisi quando la stazione spaziale si avvicina alla tua posizione.",
        nextButton: "Avanti",
      },
      location: {
        title: "La tua posizione",
        subtitle:
          "Si prega di consentire all'app di rilevare automaticamente la tua posizione o di fornire la tua posizione manualmente.",
        detectButton: "Rileva la mia posizione",
        orLabel: "o",
        selectLocation: "Inserisci la tua posizione",
        detecting: "Rilevamento della posizione ...",
        doneButton: "Fatto",
        serviceAlertTitle: "Servizi di posizione disabilitati",
        serviceAlertBody: "Si prega di consentire ai servizi di localizzazione di continuare.",
        permissionAlertTitle: "Autorizzazione non concessa",
        permissionAlertBody:
          "Usiamo i dati sulla posizione per calcolare gli avvistamenti imminenti nella tua posizione attuale. Si prega di concedere l'autorizzazione ad accedere alla tua posizione per abilitare questa funzionalità.",
      },
    },
  },
  homeScreen: {
    initLoader: {
      message:
        "I dati dell'ISS stanno caricando ... Questo potrebbe richiedere un momento per essere completato.",
      trajectoryError:
        "I dati della traiettoria dell'ISS non sono attualmente disponibili a causa della manutenzione del server. Si prega di riprovare più tardi.",
    },
    header: {
      firstTimeHead: "ELENCO DEI PROSSIMI AVVISTAMENTI",
      secondTimeHead: "Conto alla rovescia",
      timezone: "Fuso orario",
    },
    selectLocation: {
      title: "Seleziona posizione",
      inputPlaceholder: "Cerca la posizione specificando la città, ...",
      current: "Posizione attuale",
      saved: "Posizioni salvate",
      nearby: "Posizioni vicine",
      search: "Risultati di ricerca",
      cta: "Personalizza le notifiche per questa posizione",
      actionTitle: "Allerta",
      refresh: "Ricaricare",
    },
    selectSightings: {
      title: "Avvistamenti imminenti",
      sightings: "Avvistamenti",
      selectMessage: "Seleziona eventi per i quali vorresti essere avvisato.",
      switch: "Avvisami per tutti gli eventi imminenti in questa posizione.",
      aboveHorizon: "Sopra l'orizzonte",
      today: "Oggi",
      tomorrow: "Domani",
      appears: "Appare",
      disappears: "Scompare",
      empty:
        "Non ci sono potenziali avvistamenti della ISS per questa località dal {{start}} al {{end}}.",
      coach: {
        title: "Descrizione delle icone",
        moon: "Sarà notte nella posizione selezionata quando l'ISS è al di sopra dell'orizzonte.",
        sunset:
          "Ci sarà il crepuscolo nella posizione selezionata quando l'ISS è al di sopra dell'orizzonte.",
      },
    },
    coachMarks: {
      skip: "Salta il tour",
      next: "Avanti",
      finish: "Fine",
      dismiss: "Ignora",
      locationTitle: "Cambia posizione",
      locationData: "Puoi selezionare o modificare la tua posizione direttamente da qui.",
      sightingsTitle: "Prossimo avvistamento e conto alla rovescia",
      sightingsData:
        "Questa sezione mostra la data e un timer per il conto alla rovescia per il prossimo avvistamento dell'ISS vicino alla posizione selezionata. Usa l'opzione \"avvistamenti successivi\" per vedere un elenco completo dei prossimi avvistamenti.",
      globeTitle: "Terra interattiva",
      globeData:
        "È possibile visualizzare la posizione in tempo reale dell'ISS scorrere il dito sullo schermo. Ciò consente di interagire con la Terra e tracciare della posizione dell'ISS in tempo reale.",
      mapTitle: "Vista della mappa 2D",
      mapData:
        "Questa sezione mostra una rappresentazione 2D dell'intero percorso dell'ISS relativamente alle regioni notturne e diurne di tutta la terra.",
      navigationTitle: "Navigazione",
      navigationData:
        "È possibile scoprire diverse funzionalità dell'app dal menu di navigazione in basso.",
    },
  },
  issView: {
    timeHeader: "Conto alla rovescia",
    cameraPermissionText:
      "Non hai permesso l'uso della fotocamera del telefono. Clicca qui per consentire.",
    issCaptured: "Catturare questo momento",
    details: {
      title: "Stazione Spaziale Internazionale - Dettagli",
      orbitalSpeed: "Velocità orbitale",
      longitude: "Longitudine",
      latitude: "Latitudine",
      altitude: "Altitudine",
      crewOnboard: "Numero tipico di equipaggio a bordo",
      launched: "L'Assemblaggio iniziò il",
      launchedValue: "20 novembre 1998",
      mass: "Massa stimata",
      dimensions: "Dimensioni stimate",
      orbitalPeriod: "Periodo orbitale",
      orbitsPerDay: "Orbite/Giorno",
      dimensionsValue: "109m di larghezza x 73m di lunghezza x 14m di altezza",
    },
  },
  settings: {
    header: "Impostazioni",
    locationSettings: "Impostazioni di posizione",
    notificationSettings: "Impostazioni di notifica",
    termsAndConditions: "Termini e Condizioni",
    contactUs: "Contattaci",
    language: "Lingua",
    termsAndConditionsData: {
      backButton: "Settings",
      ios: {
        title: "LICENSED APPLICATION USAGE AGREEMENT",
        intro1:
          "END-USER wishes to use the following LICENSED APPLICATION developed by the United States Government as represented by the National Aeronautics and Space Administration, located at 300 E Street SW, Washington, D.C. (hereinafter NASA):",
        appData: {
          line1: "Licensed Application:",
          line2: "Version:",
          line3: "NASA Technology Number: MSC-27535-1 (hereinafter LICENSED APPLICATION)",
        },
        contactData: {
          line1: "NASA Point of Contact:",
          line2: "Jacob Keaton",
          line3: "NASA Headquarters",
          line4: "300 E Street SW",
          line5: "E-mail: SpotTheStation@hq.nasa.gov",
        },
        intro2:
          "The authority for NASA to release the LICENSED APPLICATION is NASA Policy Directive (NPD) 2820.1C",
        intro3:
          "NOW THEREFORE, in consideration of NASA releasing the LICENSED APPLICATION to END-USER and granting END-USER the non-transferable right to use the LICENSED APPLICATION as specified herein on any iPhone or iPod touch that END-USER owns or controls and as permitted by the Usage Rules set forth in the App Store Terms and Conditions for non-commercial purposes only, END-USER agrees as follows:",
        body: {
          line1:
            "1.        NASA and END-USER acknowledge that this Agreement is concluded between NASA and END-USER only, and not with Apple, this Agreement is non-transferable, and NASA, not Apple, is solely responsible for the LICENSED APPLICATION and the content thereof.",
          line2:
            "2.        NASA and END-USER acknowledge and agree that Apple, and Apple’s subsidiaries, are third party beneficiaries of this Agreement, and that upon END-USER’s acceptance of the terms and conditions of this Agreement, Apple will have the right (and will be deemed to have accepted the right) to enforce this Agreement against END-USER as a third party beneficiary of this Agreement.",
          line3:
            "3.        The LICENSED APPLICATION remains the property of NASA.  END-USER acknowledges that it acquires no ownership interest in the LICENSED APPLICATION under this Agreement.  The LICENSED APPLICATION is not in the public domain and nothing in this Agreement shall be construed as making the LICENSED APPLICATION available to the public without restriction.",
          line4:
            "4.        There shall be no release, distribution, or publication of the LICENSED APPLICATION by END-USER.",
          line5:
            "5.        NASA shall be neither liable nor responsible for any maintenance or updating of the provided LICENSED APPLICATION, nor for correction of any errors in the LICENSED APPLICATION.  NASA and END-USER acknowledge that Apple has no obligation whatsoever to furnish any maintenance and support services with respect to the LICENSED APPLICATION.",
          line6:
            "6.        END-USER represents and warrants that (i) he/she is not located in a country that is subject to a U.S. Government embargo, or that has been designated by the U.S. Government as a “terrorist supporting” country; and (ii) he/she is not listed on any U.S. Government list of prohibited or restricted parties.",
          line7:
            "7.        THE LICENSED APPLICATION IS PROVIDED “AS IS” WITHOUT ANY WARRANTY OF ANY KIND, EITHER EXPRESSED, IMPLIED, OR STATUTORY, INCLUDING, BUT NOT LIMITED TO, ANY WARRANTY THAT THE LICENSED APPLICATION WILL CONFORM TO SPECIFICATIONS, ANY IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND FREEDOM FROM INFRINGEMENT, OR ANY WARRANTY THAT THE LICENSED APPLICATION WILL BE ERROR FREE.  IN NO EVENT SHALL NASA BE LIABLE FOR ANY DAMAGES, INCLUDING, BUT NOT LIMITED TO, DIRECT, INDIRECT, SPECIAL OR CONSEQUENTIAL DAMAGES, ARISING OUT OF, RESULTING FROM, OR IN ANY WAY CONNECTED WITH THE LICENSED APPLICATION, WHETHER OR NOT BASED UPON WARRANTY, CONTRACT, TORT, OR OTHERWISE, WHETHER OR NOT INJURY WAS SUSTAINED BY PERSONS OR PROPERTY OR OTHERWISE, AND WHETHER OR NOT LOSS WAS SUSTAINED FROM, OR AROSE OUT OF USE OF THE LICENSED APPLICATION. END-USER AGREES TO WAIVE ANY AND ALL CLAIMS AGAINST THE U.S. GOVERNMENT, ITS CONTRACTORS AND THEIR SUBCONTRACTORS, AND SHALL INDEMNIFY AND HOLD HARMLESS THE U.S. GOVERNMENT, ITS CONTRACTORS AND THEIR SUBCONTRACTORS FOR ANY DAMAGE THAT END-USER MAY INCUR FROM END-USER’S USE OF THE LICENSED APPLICATION, INCLUDING ANY DAMAGES FROM PRODUCTS BASED ON, OR RESULTING FROM, THE LICENSED APPLICATION.",
          line8:
            "8.        In the event of any failure of the LICENSED APPLICATION to conform to any warranty made applicable by law, END-USER may notify Apple, and Apple will refund the purchase price (if any) for the LICENSED APPLICATION to END-USER. To the maximum extent permitted by applicable law, Apple will have no other losses, liabilities, damages, costs or expenses attributable to any failure of the LICENSED APPLICATION to conform to any warranty.",
          line9:
            "9.        NASA and END-USER acknowledge that, in the event of any third party claim that the LICENSED APPLICATION or END-USER’s possession and use of LICENSED APPLICATION infringes intellectual property rights, NASA, not Apple, will be solely responsible for the investigation, defense, settlement and discharge of any such intellectual property infringement claim, subject to law.",
          line10:
            "10.        NASA and END-USER acknowledge that NASA, not Apple is responsible for addressing any claims of END-USER or third party relating to the LICENSED APPLICATION or END-USER’s possession and /or use of the LICENSED APPLICATION, including, but not limited to:  (i) product liability claims; (ii) any claim that the LICENSED APPLICATION fails to conform to any applicable legal or regulatory requirement, including any warranties made applicable by law; and (iii) claims arising under consumer protection or similar legislation.",
          line11:
            "11.        This Agreement shall be construed, and the legal relations between the parties hereto shall be determined, in accordance with United States federal law for all purposes.",
          line12:
            "12.        This Agreement constitutes the entire understanding and agreement between NASA and END-USER relating to release of the LICENSED APPLICATION and may not be superseded, modified or amended.",
          line13:
            "13.        By accepting and using the LICENSED APPLICATION under this Agreement, END-USER hereby agrees to all terms and conditions herein.",
        },
      },
      android: {
        title: "LICENSED APPLICATION USAGE AGREEMENT",
        intro1:
          "END-USER wishes to use the following PRODUCT developed by the United States Government as represented by the National Aeronautics and Space Administration, Ames Research Center, located at Moffett Field, CA 94035 (hereinafter NASA):",
        appData: {
          line1: "Software:",
          line2: "Version:",
          line3: "NASA Technology Number: MSC-27535-1",
        },
        intro2:
          "The authority for NASA to release the LICENSED APPLICATION is NASA Policy Directive (NPD) 2820.1C.",
        intro3:
          "NOW THEREFORE, in consideration of NASA releasing the LICENSED APPLICATION to END-USER and granting END-USER the non-transferable right to use the LICENSED APPLICATION for personal, noncommercial use and as specified herein and as permitted by the Android Market Terms of Service on any Android-powered mobile device (“Device”) that END-USER owns or controls, END-USER agrees as follows:",
        body: {
          line1:
            "1.	The LICENSED APPLICATION remains the property of NASA.  END-USER acknowledges that it acquires no ownership interest in the LICENSED APPLICATION under this Agreement.  The LICENSED APPLICATION is not in the public domain and nothing in this Agreement shall be construed as making the LICENSED APPLICATION available to the public without restriction.",
          line2:
            "2.	There shall be no release, distribution, or publication of the LICENSED APPLICATION by END-USER.",
          line3:
            "3.	NASA shall be neither liable nor responsible for any maintenance or updating of the provided LICENSED APPLICATION, nor for correction of any errors in the LICENSED APPLICATION.",
          line4:
            "4.	END-USER represents and warrants that (i) he/she is not located in a country that is subject to a U.S. Government embargo, or that has been designated by the U.S. Government as a “terrorist supporting” country; and (ii) he/she is not listed on any U.S. Government list of prohibited or restricted parties.",
          line5:
            "5.	THE LICENSED APPLICATION IS PROVIDED “AS IS” WITHOUT ANY WARRANTY OF ANY KIND, EITHER EXPRESSED, IMPLIED, OR STATUTORY, INCLUDING, BUT NOT LIMITED TO, ANY WARRANTY THAT THE LICENSED APPLICATION WILL CONFORM TO SPECIFICATIONS, ANY IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND FREEDOM FROM INFRINGEMENT, OR ANY WARRANTY THAT THE LICENSED APPLICATION WILL BE ERROR FREE.  IN NO EVENT SHALL NASA BE LIABLE FOR ANY DAMAGES, INCLUDING, BUT NOT LIMITED TO, DIRECT, INDIRECT, SPECIAL OR CONSEQUENTIAL DAMAGES, ARISING OUT OF, RESULTING FROM, OR IN ANY WAY CONNECTED WITH THE LICENSED APPLICATION, WHETHER OR NOT BASED UPON WARRANTY, CONTRACT, TORT, OR OTHERWISE, WHETHER OR NOT INJURY WAS SUSTAINED BY PERSONS OR PROPERTY OR OTHERWISE, AND WHETHER OR NOT LOSS WAS SUSTAINED FROM, OR AROSE OUT OF USE OF THE LICENSED APPLICATION.   END-USER AGREES TO WAIVE ANY AND ALL CLAIMS AGAINST THE U.S. GOVERNMENT, ITS CONTRACTORS AND THEIR SUBCONTRACTORS, AND SHALL INDEMNIFY AND HOLD HARMLESS THE U.S. GOVERNMENT, ITS CONTRACTORS AND THEIR SUBCONTRACTORS FOR ANY DAMAGE THAT END-USER MAY INCUR FROM END-USER’S USE OF THE LICENSED APPLICATION, INCLUDING ANY DAMAGES FROM LICENSED APPLICATIONS BASED ON, OR RESULTING FROM, THE LICENSED APPLICATION.",
          line6:
            "6.	This Agreement shall be construed, and the legal relations between the parties hereto shall be determined, in accordance with United States federal law for all purposes.",
          line7:
            "7.	This Agreement constitutes the entire understanding and agreement between NASA and END-USER relating to release of the LICENSED APPLICATION and may not be superseded, modified or amended.",
          line8:
            "8.	By accepting and using the LICENSED APPLICATION under this Agreement, END-USER hereby agrees to all terms and conditions herein.",
        },
      },
    },
    contactUsData: {
      backButton: "Impostazioni",
      title: "Contattaci",
      titlePlaceholder: "Scegli il titolo",
      commentsPlaceholder: "Inserisci Commenti",
      sendButton: "Invia",
      contactUsOptions: {
        reportAnIssue: "Segnala un problema",
        improvementIdeas: "Idee di miglioramento",
        generalQuestions: "Domande generali",
        comments: "Commenti",
      },
    },
    notificationSettingsData: {
      backButton: "Impostazioni",
      notificationTitle: "Impostazioni di notifica",
      privacyTitle: "Impostazioni sulla Privacy",
      upcomingLabel: "Prossimi eventi",
      customizeLabel: "Personalizza le notifiche",
      upcomingTip: "Disattiva le notifiche per smettere di ricevere notifiche di eventi.",
      notifyMeBefore: "Avvisami prima",
      turnOffNotifications: "Disattiva le notifiche",
      from: "Da",
      until: "Fino a",
    },
    locationSettingsData: {
      backToSettings: "Impostazioni",
      goBack: "Torna indietro",
      generalTitle: "Impostazioni di posizione",
      cta: "Personalizza le notifiche per questa posizione",
      locationPermission: "Concedi il permesso ad accedere la tua posizione",
      addNewLocation: {
        generalTitleAdd: "Aggiungi una nuova posizione",
        generalTitleEdit: "Modifica la posizione",
        confirnModalButton: "Conferma",
        saveButton: "Salva la posizione",
        searchInputPlaceholder: "Specifica la città, CAP o indirizzo",
        nameInputPlaceholder: "Salva il nome della posizione",
      },
      removeLocation: {
        question: "Sei sicuro di voler eliminare questa posizione?",
        cancelButton: "Annulla",
        removeButton: "Elimina",
      },
    },
    localCalculations: "Calcoli locali",
  },
  resources: {
    header: "Risorse",
    searchPlaceholder: "Cerca articoli, eventi, ecc ...",
    suggestions: "Suggerimenti",
    searchResults: "Risultati di ricerca",
    tabs: {
      news: "Notizie",
      about: "Di",
      details: "Dettagli",
    },
  },
}

export default it
export type Translations = typeof it