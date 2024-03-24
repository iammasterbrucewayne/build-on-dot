import { Link } from "@chakra-ui/next-js";
import { Box, Heading, Text } from "@chakra-ui/react";

export default function NoIdeaFound() {
  return (
    <Box>
      <Heading size="4xl" mb={4}>
        😐
      </Heading>
      <Heading size="lg" mb={2}>
        Well, this is awkward...
      </Heading>
      <Text mb={8}>
        Nothing is turning up with that word or phrase.
        <br /> Please try entering another, or browse all ideas.
      </Text>
      <Link href="/ideas" color="purple.300" mt={20}>
        Browse all ideas
      </Link>
    </Box>
  );
}
