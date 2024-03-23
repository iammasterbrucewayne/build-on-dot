"use client";

import { Box, Flex } from "@chakra-ui/react";
import NavLinksComponent from "@/app/_components/common/navbar/NavLinksComponent";
import NavbarBrand from "@/app/_components/common/navbar/NavbarBrand";
import NavbarActions from "@/app/_components/common/navbar/NavbarActions";
import { NavMenuMobile } from "@/app/_components/common/navbar/NavMenuMobile";

export default function Navbar() {
  return (
    <Box as="nav" color="white" p={4}>
      <Flex justify="space-between" align="center">
        <NavbarBrand />
        <NavLinksComponent />
        <NavbarActions />
        <NavMenuMobile />
      </Flex>
    </Box>
  );
}
