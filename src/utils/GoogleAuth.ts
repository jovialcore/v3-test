interface IReturnGoogleAuth {
  signIn: () => Promise<gapi.auth2.GoogleUser>
}

export default async function GoogleAuth():Promise<IReturnGoogleAuth> {
  const auth = gapi.auth2.getAuthInstance();

  async function signIn():Promise<gapi.auth2.GoogleUser> {
    const user = await auth.signIn();
    return user;
  }

  return { signIn };
}
