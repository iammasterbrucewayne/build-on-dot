import { Box, Heading } from "@chakra-ui/react";

export default function HeroHeading() {
  return (
    <Heading as="h1" size="4xl" fontWeight="black">
      Find your next{" "}
      <Box as="span" color="purple.300">
        web3
      </Box>{" "}
      project idea
    </Heading>
  );
}
