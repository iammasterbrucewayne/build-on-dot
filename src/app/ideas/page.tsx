"use client";

import { useRef } from "react";
import {
  Box,
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Grid,
  GridItem,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import Navbar from "@/app/_components/common/navbar";
import { ideas } from "@/app/_lib/constants/placeholderIdeas";
import IdeaOverviewCard from "@/app/_components/ideas/IdeaOverviewCard";
import { Idea } from "@/app/_lib/types/ideas";
import { useSearchParams } from "next/navigation";
import { filterIdeas } from "@/app/_lib/utils/filterIdeas";
import { Category } from "@/app/_lib/constants/ideas/category";
import { Link } from "@chakra-ui/next-js";
import { FiFilter } from "react-icons/fi";
import { map, isEmpty } from "lodash";

export default function Ideas() {
  const search = useSearchParams();
  const category = search.get("category");
  const query = search.get("query");
  const filterRef = useRef();
  const { onOpen, onClose, isOpen } = useDisclosure();

  return (
    <Box as="main" p={4} maxW="6xl" mx="auto">
      <Navbar />
      <Stack p={4} spacing={4} align="end">
        <Button
          as={Button}
          ref={filterRef}
          display={{ base: "block", lg: "none" }}
          rounded="full"
          variant="outline"
          leftIcon={<FiFilter />}
          onClick={onOpen}
        >
          Filter
        </Button>

        <Drawer isOpen={isOpen} onClose={onClose} placement="bottom">
          <DrawerOverlay />

          <DrawerContent
            roundedTop={24}
            borderTop="1px solid"
            borderColor="gray.700"
            backdropFilter="blur(5px)"
            backgroundColor="rgba(26, 32, 44, 0.7)"
            pb={8}
            mt={20}
            px={4}
          >
            <DrawerBody>
              <Box as="h2" fontSize="xl" fontWeight="bold" py={4} color="white">
                Categories
              </Box>
              <Divider />
              <Stack mt={4}>
                {map(Object.values(Category), (category: string) => (
                  <Link
                    key={category}
                    href={`/ideas?category=${category}`}
                    onClick={onClose}
                    fontSize="md"
                    fontWeight="semibold"
                    mb={1}
                  >
                    {category}
                  </Link>
                ))}
              </Stack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>

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
                >
                  {category}
                </Link>
              ))}
            </Stack>
          </GridItem>
          <GridItem colSpan={{ base: 1, lg: 3, xl: 4 }}>
            <Grid
              templateColumns={[
                "repeat(1, 1fr)",
                "repeat(1, 1fr)",
                "repeat(2, 1fr)",
              ]}
              gap={4}
            >
              {isEmpty(filterIdeas(ideas, category as Category, query)) ? (
                <GridItem colSpan={2} textAlign="center">
                  <Text>Uh oh! No ideas found for your query...</Text>
                </GridItem>
              ) : (
                map(
                  filterIdeas(ideas, category as Category, query),
                  (idea: Idea) => (
                    <GridItem key={idea.slug}>
                      <IdeaOverviewCard idea={idea} />
                    </GridItem>
                  )
                )
              )}
            </Grid>
          </GridItem>
        </Grid>
      </Stack>
    </Box>
  );
}
