"use client";

import { useEffect, useState } from "react";
import { getCurrentUser } from "./../firebase/auth";

function Cards() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCurrentUser().then((user) => {
      setUser(user);
      setLoading(false);
      console.log(user);
    });
  }, []);

  if (loading) {
    return (
      <div>
        <h1>Cards</h1>
        <p>LOADING...</p>
      </div>
    );
  } else {
    if (!user) {
      return (
        <div>
          <h1>Cards</h1>
          <p>Please Log In...</p>
        </div>
      );
    }
  }

  return (
    <div>
      <h1>Cards</h1>
      <p>{user}</p>
    </div>
  );
}

export default Cards;
