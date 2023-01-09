export const getAuthError = (error: string) => {
  switch (error) {
    case "auth/user-not-found":
      return "No user found with this email.";
    case "auth/user-disabled":
      return "User disabled.";
    case "auth/invalid-email":
      return " Wrong email/password combination.";
    case "auth/wrong-password":
      return "Wrong email/password combination.";
    default:
      return "An unexpected error occurred.";
  }
};
