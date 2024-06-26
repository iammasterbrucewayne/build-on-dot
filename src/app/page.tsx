import { Box } from "@chakra-ui/react";
import Navbar from "@/app/_components/common/navbar";
import Hero from "@/app/_components/home/hero";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense fallback={null}>
      <Box as="main" p={4} maxW="6xl" mx="auto">
        <Navbar />
        <Box mt={20} p={4}>
          <Hero />
        </Box>
      </Box>
    </Suspense>
  );
}
