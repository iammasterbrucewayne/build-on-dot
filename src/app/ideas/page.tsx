"use client";

import { useContext } from "react";
import { Box, Stack } from "@chakra-ui/react";
import Navbar from "@/app/_components/common/navbar";
import { useSearchParams } from "next/navigation";
import Searchbar from "@/app/_components/common/searchbar";
import IdeaFilterMenuMobile from "../_components/ideas/IdeaFilterMenuMobile";
import IdeasContext from "../_lib/context/ideas-context";
import IdeaGrid from "../_components/ideas/IdeaGrid";

export default function Ideas() {
  const search = useSearchParams();
  const category = search?.get("category");
  const query = search?.get("query");

  const ideas = useContext(IdeasContext);

  return (
    <Box as="main" p={4} maxW="6xl" mx="auto">
      <Navbar />
      <Box px={4}>
        <Searchbar size="lg" mt={12} maxWidth="xl" mx="auto" />
      </Box>
      <Stack p={4} spacing={4} align="end">
        <IdeaFilterMenuMobile />
        <IdeaGrid ideas={ideas} category={category} query={query || ""} />
      </Stack>
    </Box>
  );
}
