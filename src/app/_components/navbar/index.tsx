"use client";

import { Box, Flex } from "@chakra-ui/react";
import NavLinksComponent from "@/app/_components/navbar/NavLinksComponent";
import NavbarBrand from "./NavbarBrand";

export default function Navbar() {
  return (
    <Box as="nav" color="white" p={4}>
      <Flex justify="space-between" align="center">
        <NavbarBrand />
        <NavLinksComponent />
      </Flex>
    </Box>
  );
}
