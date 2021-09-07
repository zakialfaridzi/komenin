import React from "react";
import { Box } from "@chakra-ui/react";
import { Link as LinkChakra } from "@chakra-ui/react";
import Link from "next/link";
import { Table, Tr, Th, Td } from "./Table";
import Head from "next/head";

const SiteTable = ({ sites }) => {
  return (
    <>
      <Head>
        <title>Komenin - Dashboard</title>
      </Head>
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
          {sites.map((site) => (
            <Box as="tr" key={site.linksitus}>
              <Td fontWeight="medium">{site.namasitus}</Td>
              <Td>
                <Link href={site.linksitus}>
                  <a>{site.linksitus}</a>
                </Link>
              </Td>
              <Td>
                <LinkChakra>Lihat Komen</LinkChakra>
              </Td>
              <Td>{site.createdAt}</Td>
            </Box>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default SiteTable;
