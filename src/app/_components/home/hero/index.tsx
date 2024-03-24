import { Box } from "@chakra-ui/react";
import HeroHeading from "./HeroHeading";
import HeroDescription from "./HeroDescription";
import HeroButtonGroup from "./HeroButtonGroup";
import Searchbar from "@/app/_components/common/searchbar";

export default function Hero() {
  return (
    <Box as="section" mb={8} textAlign="center" maxW="3xl" mx="auto">
      <HeroHeading />
      <HeroDescription />
      <Searchbar size="lg" mt={12} maxWidth="xl" mx="auto" />
      <HeroButtonGroup />
    </Box>
  );
}
