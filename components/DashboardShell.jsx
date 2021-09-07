import React from "react";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
  Button,
  Flex,
  Link,
  Avatar,
  Icon,
  Stack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  SkeletonCircle,
} from "@chakra-ui/react";

import { useAuth } from "@/lib/auth";
import { AddSiteModal } from "./AddSiteModal";

const DashboardShell = ({ children }) => {
  const { user, signout } = useAuth();

  return (
    <Box backgroundColor="gray.100" h="100vh">
      <Flex backgroundColor="white" mb={16} w="full">
        <Flex
          alignItems="center"
          justifyContent="space-between"
          pt={4}
          pb={4}
          maxW="1250px"
          margin="0 auto"
          w="full"
          px={8}
          h="70px"
        >
          <Flex>
            <Stack
              spacing={4}
              justifyContent="flex-start"
              isInline
              alignItems="center"
            >
              <Icon
                viewBox="0 0 1200.000000 1200.000000"
                color="black"
                w={12}
                h={12}
              >
                <g
                  transform="translate(0.000000,1200.000000) scale(0.100000,-0.100000)"
                  fill="currentColor"
                  stroke="none"
                >
                  <path
                    d="M5710 10239 c-904 -59 -1745 -401 -2460 -1000 -706 -591 -1230 -1471
-1410 -2368 -166 -826 -95 -1668 206 -2429 320 -809 873 -1493 1599 -1979 443
-297 978 -521 1484 -623 826 -166 1668 -95 2429 206 809 320 1493 873 1979
1599 297 443 521 978 623 1484 166 826 95 1668 -206 2429 -217 548 -532 1028
-950 1446 -872 872 -2056 1316 -3294 1235z m-250 -2139 c0 -12 -47 -401 -105
-867 -58 -465 -105 -854 -105 -865 0 -19 6 -20 133 -16 120 3 137 5 188 31 31
15 78 50 105 80 27 28 280 374 561 767 281 393 531 735 555 759 56 56 136 96
234 116 67 13 151 15 532 13 l453 -3 -641 -835 c-354 -459 -671 -871 -706
-916 -67 -85 -195 -201 -270 -244 l-44 -26 53 -26 c81 -40 160 -110 208 -185
23 -37 250 -525 505 -1083 l462 -1015 -452 -3 c-282 -1 -477 1 -520 8 -84 13
-157 51 -198 102 -17 22 -182 383 -383 839 -226 513 -363 811 -380 829 -57 59
-112 73 -306 78 l-177 4 -6 -38 c-3 -22 -53 -424 -111 -894 -58 -470 -108
-872 -111 -892 l-6 -38 -479 0 -479 0 0 21 c0 18 153 1276 447 3682 l78 637
482 0 c480 0 483 0 483 -20z"
                  />
                </g>
              </Icon>
              <Link>Situs</Link>
              <Link>Komen</Link>
            </Stack>
          </Flex>
          <Flex justifyContent="center" alignItems="center">
            {user ? (
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar size="sm" src={user?.photoUrl} />
                </MenuButton>
                <MenuList>
                  <Link
                    href="/"
                    style={{ textDecoration: "none" }}
                    onClick={signout}
                  >
                    <MenuItem>Keluar</MenuItem>
                  </Link>
                </MenuList>
              </Menu>
            ) : (
              <SkeletonCircle size="10" />
            )}
          </Flex>
        </Flex>
      </Flex>
      <Flex margin="0 auto" direction="column" maxW="1250px" px={8}>
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
        {children}
      </Flex>
    </Box>
  );
};

export default DashboardShell;
