"use client";

import { getRandomIdea } from "@/app/_lib/utils/getRandomIdea";
import { Link } from "@chakra-ui/next-js";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

export default function HeroButtonGroup() {
  const router = useRouter();
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
        onClick={() => {
          console.log("Random Idea");
          router.push(`/ideas/${getRandomIdea()}`);
        }}
      >
        Random Idea
      </Button>
    </ButtonGroup>
  );
}
