import Head from "next/head";
import Link from "next/link";
import { Box, Button, Code, Flex, Heading, Icon, Text } from "@chakra-ui/react";
import { useAuth } from "@/lib/auth";
import DashboardShell from "@/components/DashboardShell";
import { LogoIcon } from "@/styles/Icons/LogoIcon";

export default function Home() {
  const auth = useAuth();

  const handleSignIn = (e) => {
    auth.signinWithGitHub();
  };

  const handleSignOut = (e) => {
    auth.signout();
  };

  return (
    <Flex
      as="main"
      direction="column"
      align="center"
      justify="center"
      h="100vh"
    >
      <Head>
        <title>Komenin - Home</title>
      </Head>
      <LogoIcon color="black" w={32} h={32} />
      <Heading isTruncated>Komenin</Heading>
      {auth?.user ? (
        <Button mt={4} size="sm">
          <Link href="/dashboard">
            <a>Buka Dashboard</a>
          </Link>
        </Button>
      ) : (
        <Button variant="ghost" size="sm" mt={4} onClick={handleSignIn}>
          Masuk
        </Button>
      )}
    </Flex>
  );
}
