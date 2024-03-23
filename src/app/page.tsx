import { Box } from "@chakra-ui/react";
import Navbar from "@/app/_components/common/navbar";
import Hero from "@/app/_components/home/hero";

export default function Home() {
  return (
    <Box as="main" p={4}>
      <Navbar />
      <Box maxW="6xl" mx="auto" mt={20} p={4}>
        <Hero />
      </Box>
    </Box>
  );
}
