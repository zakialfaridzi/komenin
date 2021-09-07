import React from "react";
import { Heading, Text, Flex } from "@chakra-ui/react";
import DashboardShell from "./DashboardShell";
import Head from "next/head";
import { AddSiteModal } from "./AddSiteModal";

const EmptyState = () => {
  return (
    <Flex
      align="center"
      justify="center"
      direction="column"
      backgroundColor="whiteAlpha.900"
      width="100%"
      borderRadius={8}
      p={16}
    >
      <Head>
        <title>Komenin - Dashboard</title>
      </Head>
      <Heading size="lg" mb={2}>
        Anda belum menambahkan situs.
      </Heading>
      <Text color="#000000" mb={4}>
        Hai 👋 Ayo mulai.
      </Text>
      <AddSiteModal
        _active={{
          transform: "scale(0.95)",
        }}
      >
        Tambah Situs Pertama Anda
      </AddSiteModal>
    </Flex>
  );
};

export default EmptyState;
