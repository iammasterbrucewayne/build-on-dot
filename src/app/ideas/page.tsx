"use client";

import { Box, Grid } from "@chakra-ui/react";
import Navbar from "@/app/_components/common/navbar";
import { map, filter } from "lodash";
import { ideas } from "../_lib/constants/placeholderIdeas";
import IdeaOverviewCard from "../_components/ideas/IdeaOverviewCard";
import { Idea } from "../_lib/types/ideas";
import { useSearchParams } from "next/navigation";

export default function Ideas() {
  const search = useSearchParams();
  const category = search.get("category");
  return (
    <Box as="main" p={4}>
      <Navbar />
      <Grid
        templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]}
        gap={4}
      >
        {map(
          filter(
            ideas,
            (idea) =>
              idea.category === category || !category || category === "all"
          ),
          (idea: Idea) => (
            <IdeaOverviewCard key={idea.slug} idea={idea} />
          )
        )}
      </Grid>
    </Box>
  );
}
