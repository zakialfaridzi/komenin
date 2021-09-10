import React from "react";
import { Box, Skeleton } from "@chakra-ui/react";
import { Table, Tr, Th, Td } from "./Table";

const SkeletonRow = ({ width }) => (
  <Box as="tr">
    <Td>
      <Skeleton height="10px" w={width} my={4} />
    </Td>
    <Td>
      <Skeleton height="10px" w={width} my={4} />
    </Td>
    <Td>
      <Skeleton height="10px" w={width} my={4} />
    </Td>
    <Td>
      <Skeleton height="10px" w={width} my={4} />
    </Td>
  </Box>
);

const SiteTableSkeleton = () => {
  return (
    <Table>
      <thead>
        <Tr>
          <Th>Nama Situs</Th>
          <Th>Link Situs</Th>
          <Th>Link Komen</Th>
          <Th>Tanggal Buat</Th>
          <Th>{""}</Th>
        </Tr>
      </thead>
      <tbody>
        <SkeletonRow width="75px" />
        <SkeletonRow width="150px" />
        <SkeletonRow width="125px" />
        <SkeletonRow width="100px" />
        <SkeletonRow width="75px" />
      </tbody>
    </Table>
  );
};

export default SiteTableSkeleton;
