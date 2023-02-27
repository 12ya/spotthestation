const en = {
  common: {
    ok: "OK!",
    cancel: "Cancel",
    back: "Back",
  },
  errorScreen: {
    title: "Something went wrong!",
    friendlySubtitle:
      "This is the screen that your users will see in production when an error is thrown. You'll want to customize this message (located in `app/i18n/en.ts`) and probably the layout as well (`app/screens/ErrorScreen`). If you want to remove this entirely, check `app/app.tsx` for the <ErrorBoundary> component.",
    reset: "RESET APP",
    traceTitle: "Error from %{name} stack",
  },
  errors: {
    invalidEmail: "Invalid email address.",
  },
  tabNavigator: {
    homeTab: "Home",
    skyViewTab: "Sky View",
    issNowTab: "ISS Now",
    resourcesTab: "Resources",
    settingsTab: "Settings",
  },
  onboarding: {
    splash: {
      title: "Spot the Station",
      subTitle: "Gaze up into the sky and view the International Space Station (ISS)",
    },
    login: {
      title: "Login to\nyour account",
      loginError: "Try again!\nIncorrect Credentials",
      placeholder: {
        email: "Email Address",
        password: "Password",
      },
      forgotPassword: "Forgot Password?",
      loginButton: "Login",
      loginWith: "or login with",
      haveAccountQuestion: "Don’t have an account?",
      signUpLink: "Sign Up",
    },
    forgotPassword: {
      title: "Forgot Password?",
      titleMailed: "Check Your Inbox",
      subtitle: "No worries, we’ll send you reset instructions",
      subtitleMailed: "We sent a password reset link to",
      resetButton: "Reset password",
      openEmailAppButton: "Open Email App",
      rememberQuestion: "Remember your password?",
      loginLink: "Login",
      doNotReceiveQuestion: "Don’t receive the email?",
      resend: "Resend",
    },
    resetPassword: {
      title: "Set New Password",
      subtitle: "Your new password must be different from previously used passwords.",
      resetButton: "Change password",
      password: "Password",
      confirmPassword: "Confirm Password",
      success: {
        title: "Password Changed",
        subtitle: "You have successuffly changed your passsword. Please go back to login screen.",
        button: "Back To Login",
      }
    },
    signUp: {
      title: "Sign Up",
      email: "Email Address",
      phone: "Mobile Number",
      password: "Confirm Password",
      button: "Sign Up",
      privacy: {
        first: "I agree to the",
        tos: "Terms of Services",
        second: "and",
        pp: "Privacy Policy",
      }
    },
    otp: {
      title: "Enter OTP",
      subtitle: "Please enter the OTP code sent to your mobile number",
      question: "Don’t receive any code?",
      resend: "Resend"
    },
    completeProfile: {
      profile: {
        tittle: "Complete Your Profile",
        firstName: "First Name",
        lastName: "Last Name",
        country: "Country",
        state: "State",
        city: "City",
        skipButton: "Skip",
        nextButton: "Next",
      },
      notification: {
        tittle: "Notification Settings",
        label: "Get Push Notification Alerts",
        tip: "Get alerts when the space station is approaching your location.",
        nextButton: "Next",
      },
      location: {
        tittle: "Your Location",
        subtitle: "Please allow the app to detect your location automatically, or provide your location manually.",
        detectButton: "Detect My Location",
        orLabel: "or",
        selectLocation: "Enter your location",
        detecting: "Detecting location...",
        doneButton: "Done",
        serviceAlertTitle: "Location Service not enabled",
        serviceAlertBody: "Please enable your location services to continue",
        permissionAlertTitle: "Permission not granted",
        permissionAlertBody: "Allow the app to use location service.",
      }
    }
  },
  issNowTab: {
    details: {
      latitude: "Lat.",
      longitude: "Long.",
      altitude: "Altitude",
      speed: "Speed",
      switchLabel: "Metric/Imperial"
    }
  },
  homeScreen: {
    verify: {
      title: "Verify Email",
      subtitle: "Please verify your email address",
      remindButton: "Remind me later",
      generalButton: "Verify now",
    },
    verified: {
      title: "Email Verified!",
      subtitle: "Your email address",
      subtitle2: "has been",
      subtitle3: "verified successfully",
      generalButton: "Okay",
    },
    header: {
      welcome: "Welcome, ",
      firstTimeHead: "SIGHTING TIME",
      secondTimeHead: "COUNTDOWN",
    },
    selectLocation: {
      title: "Select Location",
      inputPlaceholder: "Search location by city, pin...",
      current: "Current location",
      saved: "Saved locations",
      nearby: "Nearby locations",
      search: "Search results"
    },
    selectSightings: {
      title: "Upcoming Sightings",
      signites: "Sightings",
      button: "Notify Me (15 min before)",
    }
  },
  skyView: {
    header: "Sky View",
    timeHeader: "TIME LEFT",
    share: {
      title: "Share",
      subtitle: "these great moments to your\nfriends and family"
    },
    details: {
      title: "Internaional Space Station - Details",
      distance: "Distance",
      orbitalSpeed: "Orbital speed",
      longitude: "longitude",
      latitude: "latitude",
      altitude: "altitude",
      crewOnboard: "crew onboard",
      launched: "Launched",
      mass: "Mass",
      length: "Length",
      orbitalPeriod: "Orbital Period",
      orbitsPerDay: "Orbits/Day",
      orbitalDecay: "Orbital Decay",
      noOfOrbits: "No. of orbits",
    }
  },
  settings: {
    header: "Settings",
    termsAndConditions: "Terms and Conditions",
    contactUs: "Contact Us",
    termsAndConditionsData: {
      backButton: 'Settings',
      title: 'Terms and Conditions',
      intro: `Lorem ipsum dolor sit amet consectetur. Tellus iaculis convallis id mauris id. Volutpat eget sit odio vitae maecenas urna molestie ac elit. Arcu vulputate ipsum auctor tincidunt. Massa sit cras nisl morbi quis in tellus sit. Donec placerat vel vitae neque at donec. `,
      subtitle: 'Heading lorem ipsum goes here',
      text: `Pretium venenatis elementum faucibus lectus eu adipiscing commodo est et. Scelerisque pellentesque placerat fermentum eget id adipiscing mauris id. Pretium gravida rhoncus vel cursus non odio tortor ut accumsan. Scelerisque duis eleifend laoreet donec risus in suspendisse eu tincidunt.
      Consequat tellus nunc eu in dui. Nibh quis dolor sit rhoncus massa viverra faucibus arcu. Libero varius et ultrices ut ac. Scelerisque nunc tempor volutpat eleifend tellus risus sit. Massa mauris elementum sagittis mattis. Metus pretium morbi leo nullam mattis mauris scelerisque feugiat sit. Tortor facilisi vel egestas volutpat molestie. Sed pretium tempus vulputate ut mattis sit ultrices lacinia. Ultrices nullam amet quis eget vel aliquet ut.`,
    },
    contactUsData: {
      backButton: 'Settings',
      title: 'Contact Us',
      titlePlaceholder: 'Choose title',
      commentsPlaceholder: 'Input comments',
      ideasPlaceholder: 'Input ideas',
      sendButton: 'Send',
    }
  }
}

export default en
export type Translations = typeof en
