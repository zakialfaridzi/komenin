import React from "react";
import { Box } from "@chakra-ui/react";
import { Link as LinkChakra } from "@chakra-ui/react";
import Link from "next/link";
import { Table, Tr, Th, Td } from "./Table";
import Head from "next/head";
import { useRouter } from "next/router";
import dateFormat from "dateformat";
import formatTanggal from "@/lib/formatTanggal";

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
            <Th>Tanggal Buat</Th>
            <Th>Link Komen</Th>
            <Th>{""}</Th>
          </Tr>
        </thead>
        <tbody>
          {sites.map((site) => (
            <Box as="tr" key={site.linksitus}>
              <Td fontWeight="medium">{site.namasitus}</Td>
              <Td>
                <Link href={site.linksitus} passHref={true}>
                  <LinkChakra target="_blank" rel="noopener noreferrer">
                    {site.linksitus}
                  </LinkChakra>
                </Link>
              </Td>
              <Td>
                {dateFormat(site.createdAt, `dddd, dd mmm yyyy | HH:MM:ss t`)}
              </Td>
              <Td>
                <Link as={`p/${site.id}`} href="/p/[siteId]" passHref>
                  <LinkChakra>Lihat Komen</LinkChakra>
                </Link>
              </Td>
            </Box>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default SiteTable;
