import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { supabase } from "./supabase";

export default function Protected({ children }) {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    const checkUser = async () => {
      const { data } = await supabase.auth.getSession();
      setUser(data.session?.user ?? null);
    };

    checkUser();

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null);
      }
    );

    return () => listener.subscription.unsubscribe();
  }, []);

  if (user === undefined) return <p>Loading...</p>;

  if (!user) return <Navigate to="/login" replace />;

  return children;
}