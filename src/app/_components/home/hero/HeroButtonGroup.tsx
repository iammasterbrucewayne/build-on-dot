"use client";

import { Link } from "@chakra-ui/next-js";
import { Button, ButtonGroup } from "@chakra-ui/react";

export default function HeroButtonGroup() {
  return (
    <ButtonGroup mt={12}>
      <Button
        as={Link}
        href="/ideas"
        colorScheme="purple"
        size="lg"
        rounded="full"
        _hover={{
          backgroundColor: "purple.400",
          textDecoration: "none",
        }}
        px={{
          base: 8,
          md: 12,
        }}
        py={{
          base: 6,
          md: 8,
        }}
      >
        Browse Ideas
      </Button>
      <Button
        variant="outline"
        colorScheme="gray"
        size="lg"
        rounded="full"
        color="gray.300"
        _hover={{
          color: "gray.800",
          backgroundColor: "gray.100",
        }}
        px={{
          base: 8,
          md: 12,
        }}
        py={{
          base: 6,
          md: 8,
        }}
      >
        Random Idea
      </Button>
    </ButtonGroup>
  );
}
