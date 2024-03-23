import { Box } from "@chakra-ui/react";
import HeroHeading from "./HeroHeading";
import HeroDescription from "./HeroDescription";
import HeroButtonGroup from "./HeroButtonGroup";

export default function Hero() {
  return (
    <Box as="section" mb={8} textAlign="center" maxW="3xl" mx="auto">
      <HeroHeading />
      <HeroDescription />
      <HeroButtonGroup />
    </Box>
  );
}
