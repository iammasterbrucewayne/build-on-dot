import React from "react";
import { GridItem, Grid } from "@chakra-ui/react";
import IdeaOverviewCard from "./IdeaOverviewCard";
import IdeaOverviewCardSkeleton from "./IdeaOverviewCardSkeleton";
import NoIdeaFound from "./NoIdeaFound";
import { Idea } from "@/app/_lib/types/ideas";
import { Category } from "@/app/_lib/constants/ideas/category";
import { isEmpty, isNil, map, times } from "lodash";
import { filterIdeas } from "@/app/_lib/utils/filterIdeas";

interface IdeaCardGridProps {
  ideas: Idea[] | null;
  category: Category;
  query: string;
  templateColumns?: string[];
  gap?: number;
}

const IdeaCardGrid: React.FC<IdeaCardGridProps> = ({
  ideas,
  category,
  query,
  ...props
}) => {
  if (isNil(ideas)) {
    return (
      <Grid {...props}>
        {times(3, (index) => (
          <IdeaOverviewCardSkeleton key={index} />
        ))}
      </Grid>
    );
  }

  const filteredIdeas = filterIdeas(ideas, category, query);

  if (isEmpty(filteredIdeas)) {
    return (
      <GridItem colSpan={2} textAlign="center" mt={20}>
        <NoIdeaFound />
      </GridItem>
    );
  }

  return (
    <Grid {...props}>
      {map(filteredIdeas, (idea: Idea) => (
        <GridItem key={idea.slug}>
          <IdeaOverviewCard idea={idea} />
        </GridItem>
      ))}
    </Grid>
  );
};

export default IdeaCardGrid;
