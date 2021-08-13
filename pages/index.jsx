import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { auth } from "firebase";
import { useAuth } from "../lib/auth";

export default function Home() {
  const auth = useAuth();

  const handleSignIn = (e) => {
    auth.signinWithGithub();
  };

  const handleSignOut = (e) => {
    auth.signout();
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Komenin</h1>
        {!auth?.user && <button onClick={handleSignIn}>Sign In</button>}
        <div>{auth?.user?.email}</div>
        {auth?.user && <button onClick={handleSignOut}>Sign Out</button>}

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
