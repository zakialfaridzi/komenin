import React from "react";
import { Box, Code, Switch, IconButton } from "@chakra-ui/react";

import { Table, Tr, Th, Td } from "./Table";
import { DeleteIcon } from "@chakra-ui/icons";
// import DeleteFeedbackButton from "./DeleteFeedbackButton";
import Head from "next/head";
import RemoveButton from "./RemoveButton";

const FeedbackTable = ({ allFeedback }) => {
  return (
    <Table>
      <Head>
        <title>Komenin - Dashboard Komen</title>
      </Head>
      <thead>
        <Tr>
          <Th>Nama</Th>
          <Th>Komen</Th>
          <Th>Route Link</Th>
          <Th>Visibilitas</Th>
          <Th width="30px">Aksi</Th>
        </Tr>
      </thead>
      <tbody>
        {allFeedback.map((feedback) => (
          <Box as="tr" key={feedback.id}>
            <Td fontWeight="medium">{feedback.author}</Td>
            <Td>{feedback.text}</Td>
            <Td>
              <Code>{"/"}</Code>
            </Td>
            <Td>
              <Switch
                colorScheme="green"
                defaultIsChecked={feedback.status === "active"}
              />
            </Td>
            <Td>
              <RemoveButton feedbackId={feedback.id} />
            </Td>
          </Box>
        ))}
      </tbody>
    </Table>
  );
};

export default FeedbackTable;
