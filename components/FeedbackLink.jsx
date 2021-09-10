import { Flex, Link } from "@chakra-ui/layout";
import React from "react";

const FeedbackLink = ({ siteId }) => {
  return (
    <Flex justifyContent="space-between" mb={8} width="full" mt={2}>
      <Link fontWeight="bold" fontSize="sm" href={`/p/${siteId}`}>
        Komenin
      </Link>
      <Link fontSize="xs" color="black" href="/">
        Menggunakan Komenin ⚡
      </Link>
    </Flex>
  );
};

export default FeedbackLink;
