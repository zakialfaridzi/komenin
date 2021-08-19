import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { auth } from "firebase";
import { Button, Code, Heading, Text } from "@chakra-ui/react";
import { useAuth } from "@/lib/auth";

export default function Home() {
  const auth = useAuth();

  const handleSignIn = (e) => {
    auth.signinWithGitHub();
  };

  const handleSignOut = (e) => {
    auth.signout();
  };

  return (
    <div>
      <Head>
        <title>Komenin - Home</title>
      </Head>
      <main>
        <Heading isTruncated>Komenin</Heading>
        {!auth?.user && (
          <Button colorScheme="blue" onClick={handleSignIn}>
            Sign In
          </Button>
        )}
        <div>{auth?.user?.email}</div>
        {auth?.user && (
          <Button colorScheme="red" onClick={handleSignOut}>
            Sign Out
          </Button>
        )}

        <Text>
          <Code>Current User: {auth?.user?.name}</Code>
        </Text>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
