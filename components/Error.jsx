import { Flex, Container, Heading, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import SittingDoodle from "../public/SittingDoodle.svg";

export default function Error({ error }) {
  return (
    <Container maxWidth="6xl">
      <Stack
        spacing={2}
        alignItems="center"
        justifyContent="center"
        flexDirection="row"
        width={1200}
      >
        <Flex
          flexDirection="column"
          ml={6}
          mt={6}
          mb={6}
          mr={200}
          justifyContent="center"
          alignItems="center"
          width={600}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", md: "9.375rem" }}
            lineHeight={"110%"}
          >
            404
          </Heading>
          <Text fontWeight={600} fontSize="1.5rem" lineHeight={"110%"}>
            {error}
          </Text>{" "}
          <Link href="/">
            <a style={{ marginTop: "10px" }}>
              Klik untuk kembali ke halaman awal.
            </a>
          </Link>
        </Flex>
        <Flex>
          <Image
            src={SittingDoodle}
            width="10000px"
            height="10000px"
            alt="Picture of the author"
          />
        </Flex>
      </Stack>
    </Container>
  );
}
