import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/breadcrumb";
import { Flex, Heading } from "@chakra-ui/layout";
import React from "react";
import { AddSiteModal } from "./AddSiteModal";

const SiteTableHeader = () => {
  return (
    <>
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink>Situs</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Flex justifyContent="space-between">
        <Heading mb={8}>Situs Saya</Heading>
        <AddSiteModal
          backgroundColor="black"
          color="white"
          fontWeight="medium"
          _hover={{ bg: "gray.700" }}
          _active={{
            bg: "gray.800",
            transform: "scale(0.95)",
          }}
        >
          + Tambah Situs
        </AddSiteModal>
      </Flex>
    </>
  );
};

export default SiteTableHeader;
