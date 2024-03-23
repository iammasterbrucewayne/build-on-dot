"use client";

import { Box, Flex, Text } from "@chakra-ui/react";
import NavLinksComponent from "@/app/_components/navbar/NavLinksComponent";

export default function Navbar() {
  return (
    <Box as="nav" color="white" p={4}>
      <Flex justify="space-between">
        <Text fontSize="xl" fontWeight="semibold">
          Build On Dot
        </Text>
        <NavLinksComponent />
      </Flex>
    </Box>
  );
}
