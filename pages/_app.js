import "../styles/globals.css";
// google sign in with react auth

import { GoogleOAuthProvider } from "@react-oauth/google";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}>
      <Component {...pageProps} />
    </GoogleOAuthProvider>
  );
}
