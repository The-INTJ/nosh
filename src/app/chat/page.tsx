"use client";
import bookData from "@tst/data/BookData";
import { ChatPageProps } from "@lib/definitions/props";
import styles from "@styles/pages/BookPage.module.scss";
import { UserContext } from "@lib/context";
import { useContext } from "react";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Loading from "@/components/Loading";

const Chat: React.FC<ChatPageProps> = ({  }) => {
  const [mounted, setMounted] = useState(false);
  const { user, username } = useContext(UserContext);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Check if the user is null, use react router to redirect to the login page
  if (!user) {
    router.replace("/account/login?redirect=/chat");
    return <Loading />;
  }


  return (
    <div className={styles.container}>
      <h1>Chat</h1>
    </div>
  );
};

export default Chat;
