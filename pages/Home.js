import { useEffect, useState } from "react";
import Layout from "../components/Layout";

// export function
export default function Home() {
  const [admin, setAdmin] = useState(null);

  useEffect(() => {
    const storedAdmin = localStorage.getItem("admin");
    if (storedAdmin) {
      setAdmin(JSON.parse(storedAdmin));
    }
  }, []);

  console.log("Admin in Home.js:", admin); // Debugging

  return (
    <Layout>
      <div className="text-blue-900 flex justify-between rounded-lg overflow-hidden">
        <h2>
          Hello, <b>{admin?.name || "Guest"}</b>
        </h2>
        <div className="flex bg-gray-300 gap-1 text-black">
          <img
            src={admin?.picture || "/default-avatar.png"}
            alt="Profile"
            className="w-6 h-6 rounded-full"
          />
          <span className="px-2">{admin?.name || "Guest"}</span>
        </div>
      </div>
    </Layout>
  );
}
