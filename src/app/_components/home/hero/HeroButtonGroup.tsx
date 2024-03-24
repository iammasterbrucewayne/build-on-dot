"use client";

import IdeasContext from "@/app/_lib/context/ideas-context";
import { Link } from "@chakra-ui/next-js";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { isNil, random } from "lodash";
import { useRouter } from "next/navigation";
import { useContext } from "react";

export default function HeroButtonGroup() {
  const router = useRouter();

  const ideas = useContext(IdeasContext);

  const getRandomIdea = () => {
    if (ideas) return ideas[random(0, ideas.length - 1)].slug;
  };
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
        isDisabled={isNil(ideas) || ideas.length === 0}
        onClick={() => {
          router.push(`/ideas/${getRandomIdea()}`);
        }}
      >
        Random Idea
      </Button>
    </ButtonGroup>
  );
}
