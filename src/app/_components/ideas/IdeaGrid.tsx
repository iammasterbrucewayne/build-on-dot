import { Idea } from "@/app/_lib/types/ideas";
import { Grid, GridItem } from "@chakra-ui/react";
import IdeaFilterMenuDesktop from "./IdeaFilterMenuDesktop";
import IdeaCardGrid from "./IdeaCardGrid";
import { Category } from "@/app/_lib/constants/ideas/category";

interface IdeaGridProps {
  ideas: Idea[] | null;
  category: string | null | undefined;
  query: string | null | undefined;
}

export default function IdeaGrid({ ...props }: IdeaGridProps) {
  const { ideas, category, query } = props;
  return (
    <Grid
      templateColumns={{
        base: "repeat(1, 1fr)",
        lg: "repeat(4, 1fr)",
        xl: "repeat(5, 1fr)",
      }}
      gap={4}
      w="full"
    >
      <GridItem
        display={{
          base: "none",
          lg: "block",
        }}
        colSpan={1}
      >
        <IdeaFilterMenuDesktop />
      </GridItem>
      <GridItem colSpan={{ base: 1, lg: 3, xl: 4 }}>
        <IdeaCardGrid
          ideas={ideas}
          category={category as Category}
          query={query || ""}
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
          ]}
          gap={4}
        />
      </GridItem>
    </Grid>
  );
}
