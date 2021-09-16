import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/breadcrumb";
import { Flex, Heading } from "@chakra-ui/layout";
import React from "react";
import { AddSiteModal } from "./AddSiteModal";

const FeedbackTableHeader = () => {
  return (
    <>
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink>Komen</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Flex justifyContent="space-between">
        <Heading mb={8}>Komen Saya</Heading>
      </Flex>
    </>
  );
};

export default FeedbackTableHeader;
