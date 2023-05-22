"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { getCurrentUser, signOutUser } from "./../firebase/auth";

function Navigation() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getCurrentUser().then((user) => {
      setUser(user);
      console.log(user);
    });
  }, []);
  
  if (user) {
    return (
      <div className="px-8 flex border justify-between border-black py-2 items-center">
        <h1 className="font-semibold te">Next Authentication</h1>
        <div className="flex">
          <button
            className="border rounded-md mx-2 py-1 cursor-pointer  border-black px-4"
            onClick={async () => {
              await signOutUser();
              window.location.reload();
            }}
          >
            Sign Out
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="px-8 flex border justify-between border-black py-2 items-center">
      <h1 className="font-semibold te">Next Authentication</h1>
      <div className="flex">
        <Link className="border rounded-md mx-2 py-1 cursor-pointer  border-black px-4" href="/signup">
          Sign Up
        </Link>
        <Link className="border rounded-md mx-2 py-1 cursor-pointer  border-black px-4" href="/signin">
          Sign In
        </Link>
      </div>
    </div>
  );
}

export default Navigation;
