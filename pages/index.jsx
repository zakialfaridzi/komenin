import Head from "next/head";
import Link from "next/link";
import {
  Box,
  Button,
  Code,
  Flex,
  Heading,
  Icon,
  Text,
  Stack,
} from "@chakra-ui/react";
import { useAuth } from "@/lib/auth";
import DashboardShell from "@/components/DashboardShell";
import { LogoIcon } from "@/styles/Icons/LogoIcon";
import { GithubIcon } from "@/styles/Icons/GithubIcon";
import { GoogleIcon } from "@/styles/Icons/GoogleIcon";

export default function Home() {
  const auth = useAuth();

  const handleSignIn = (e) => {
    auth.signinWithGitHub();
  };

  return (
    <Box bg="gray.100">
      <Flex
        as="main"
        direction="column"
        align="center"
        justify="center"
        h="100vh"
      >
        <Head>
          <title>Komenin - Home</title>
          <script
            dangerouslySetInnerHTML={{
              __html: `
          if (document.cookie && document.cookie.includes('komenin-auth')) {
            window.location.href = "/dashboard"
          }
        `,
            }}
          />
        </Head>
        <LogoIcon color="black" w={32} h={32} />
        <Heading isTruncated>Komenin</Heading>
        {auth?.user ? (
          <Button
            fontWeight="medium"
            mt={4}
            size="md"
            backgroundColor="white"
            color="gray.900"
            variant="solid"
            _hover={{
              transform: "scale(1.03)",
            }}
          >
            <Link href="/dashboard">
              <a>Buka Dashboard</a>
            </Link>
          </Button>
        ) : (
          <Stack>
            <Button
              onClick={(e) => auth.signinWithGitHub()}
              fontWeight="medium"
              leftIcon={<GithubIcon />}
              mt={4}
              size="lg"
              backgroundColor="#333"
              color="white"
              variant="solid"
              _hover={{
                transform: "scale(1.03)",
              }}
            >
              Log In via GitHub
            </Button>
            <Button
              onClick={(e) => auth.signinWithGoogle()}
              backgroundColor="white"
              color="gray.900"
              variant="outline"
              fontWeight="medium"
              leftIcon={<GoogleIcon />}
              mt={4}
              size="lg"
              _hover={{
                transform: "scale(1.03)",
              }}
            >
              Log In via Google
            </Button>
          </Stack>
        )}
      </Flex>
    </Box>
  );
}
