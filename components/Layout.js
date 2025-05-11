import Nav from "../components/Nav";
import { useState, useEffect } from "react";
import Logo from "../components/Logo";

// Google sign-in

import { useGoogleLogin } from "@react-oauth/google";

export default function Layout({ children }) {
  const [showNav, setShowNav] = useState(false);
  const [admin, setAdmin] = useState(null);

  // Check if admin is already logged in
  useEffect(() => {
    const storedAdmin = localStorage.getItem("admin");
    if (storedAdmin) {
      setAdmin(JSON.parse(storedAdmin));
    }
  }, []);

  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        // Fetch user info from Google's API using the access token
        const res = await fetch(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
          }
        );
        const user = await res.json();
        console.log("User:", user);

        // Send user data to your backend
        const backendRes = await fetch("/api/google.api", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: user.email,
            name: user.name,
            picture: user.picture,
            email_verified: user.email_verified,
          }),
        });

        const data = await backendRes.json();

        if (data.success) {
          localStorage.setItem("admin", JSON.stringify(user));
          setAdmin(user); // Update state to reflect login
        } else {
          alert("Access Denied: You are not authorized.");
        }
      } catch (error) {
        console.error("Login error:", error);
      }
    },
    onError: () => console.log("Login Failed"),
  });

  // If no admin, show the blue Google login screen
  if (!admin) {
    return (
      <div className="bg-blue-900 w-screen h-screen flex items-center justify-center">
        {/* <div className="text-center w-full">
          <GoogleLogin
            onSuccess={handleLoginSuccess}
            onError={() => console.log("Login Failed")}
          />
        </div> */}
        <button
          onClick={login}
          id="google-button"
          className="bg-white text-blue-900 px-4 py-2  rounded-lg shadow-md hover:bg-gray-100"
        >
          Sign in with Google 🚀
        </button>
      </div>
    );
  }

  return (
    <div className="bg-bgGary min-h-screen">
      {/* Mobile Navigation */}
      <div className="md:hidden flex items-center p-4">
        <button onClick={() => setShowNav(true)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6"
          >
            <path
              fillRule="evenodd"
              d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div className="flex grow justify-center mr-6">
          <Logo />
        </div>
      </div>

      {/* Main Layout */}
      <div className="flex">
        <Nav show={showNav} />
        <div className="flex-grow p-4">{children}</div>
      </div>
    </div>
  );
}
