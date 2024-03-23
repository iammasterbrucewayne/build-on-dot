"use client";

import { Box, Grid } from "@chakra-ui/react";
import Navbar from "@/app/_components/common/navbar";
import { map, filter } from "lodash";
import { ideas } from "@/app/_lib/constants/placeholderIdeas";
import IdeaOverviewCard from "@/app/_components/ideas/IdeaOverviewCard";
import { Idea } from "@/app/_lib/types/ideas";
import { useSearchParams } from "next/navigation";
import { filterIdeas } from "@/app/_lib/utils/filterIdeas";
import { Category } from "@/app/_lib/constants/ideas/category";

export default function Ideas() {
  const search = useSearchParams();
  const category = search.get("category");
  const query = search.get("query");
  return (
    <Box as="main" p={4}>
      <Navbar />
      <Grid
        templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]}
        gap={4}
      >
        {map(filterIdeas(ideas, category as Category, query), (idea: Idea) => (
          <IdeaOverviewCard key={idea.slug} idea={idea} />
        ))}
      </Grid>
    </Box>
  );
}
