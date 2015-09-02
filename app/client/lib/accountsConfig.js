AccountsTemplates.configure( {
  // Behaviour
  confirmPassword: true,
  enablePasswordChange: true,
  forbidClientAccountCreation: false,
  overrideLoginErrors: true,
  sendVerificationEmail: false,
  lowercaseUsername: true,
  defaultState: 'signUp',

  // Appearance
  showAddRemoveServices: false,
  showForgotPasswordLink: true,
  showLabels: true,
  showPlaceholders: true,
  showResendVerificationEmailLink: false,

  // Client-side Validation
  continuousValidation: false,
  negativeFeedback: false,
  negativeValidation: false,
  positiveValidation: true,
  positiveFeedback: false,
  showValidating: true,

  // Privacy Policy and Terms of Use
  privacyUrl: 'privacy',
  termsUrl: 'terms',

  // Redirects
  homeRoutePath: '/',
  redirectTimeout: 4000,

  // Hooks
  //onLogoutHook: myLogoutFunc,
  //onSubmitHook: mySubmitFunc,
  //preSignUpHook: myPreSubmitFunc,
  hideSignInLink: false,
  // Texts
  texts: {
    title: {
      changePwd: 'Password Title',
      enrollAccount: 'Enroll Title',
      forgotPwd: 'Reset your password',
      resetPwd: 'Reset Pwd Title',
      signIn: 'Log in to play',
      signUp: 'Become a player',
      verifyEmail: 'Verify Email Title',
    },
    errors: {
      accountsCreationDisabled: 'Client side accounts creation is disabled!!!',
      cannotRemoveService: 'Cannot remove the only active service!',
      captchaVerification: 'Captcha verification failed!',
      loginForbidden: 'error.accounts.Login forbidden',
      mustBeLoggedIn: 'Create an account with your email address',
      pwdMismatch: 'error.pwdsDontMatch',
      validationErrors: 'Validation Errors',
      verifyEmailFirst: 'Please verify your email first. Check the email and follow the link!',
    }
  }
} );

