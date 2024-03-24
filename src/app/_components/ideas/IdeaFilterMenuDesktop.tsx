import { Category } from "@/app/_lib/constants/ideas/category";
import { Link } from "@chakra-ui/next-js";
import { Box, Divider, Stack } from "@chakra-ui/react";
import { map } from "lodash";
import { useSearchParams } from "next/navigation";
import { Fragment } from "react";

export default function IdeaFilterMenuDesktop() {
  const search = useSearchParams();
  const activeCategory = search?.get("category");
  return (
    <Fragment>
      <Box as="h2" fontSize="xl" fontWeight="bold" mb={2}>
        Categories
      </Box>
      <Divider my={4} />
      <Stack>
        {map(Object.values(Category), (category: string) => (
          <Link
            key={category}
            href={`/ideas?category=${category}`}
            fontSize="md"
            fontWeight="semibold"
            mb={1}
            color={category === activeCategory ? "purple.300" : "gray.300"}
          >
            {category}
          </Link>
        ))}
      </Stack>
    </Fragment>
  );
}
