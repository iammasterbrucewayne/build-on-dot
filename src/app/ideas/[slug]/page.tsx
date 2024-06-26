"use client";

import Navbar from "@/app/_components/common/navbar";
import Searchbar from "@/app/_components/common/searchbar";
import AuthorComponent from "@/app/_components/ideas/AuthorComponent";
import getIdeas from "@/app/_lib/utils/getIdeas";
import { Idea } from "@/app/_lib/types/ideas";
import { Link } from "@chakra-ui/next-js";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { redirect } from "next/navigation";
import { useContext } from "react";
import IdeasContext from "@/app/_lib/context/ideas-context";
import { isNil } from "lodash";
import IdeaPageSkeleton from "@/app/_components/ideas/IdeaPageSkeleton";

export default function IdeaPage({ params }: { params: { slug: string } }) {
  const ideas = useContext(IdeasContext);
  const isLoading = isNil(ideas);
  const idea = ideas?.find((idea) => idea.slug === params.slug);
  if (!isLoading && !idea) {
    redirect("/404");
  }

  let title, description, author, category, slug;
  if (idea) {
    ({ title, description, author, category, slug } = idea);
  }

  return isLoading ? (
    <IdeaPageSkeleton />
  ) : (
    <Box as="main" p={4} maxW="6xl" mx="auto">
      <Navbar />
      <Box p={4}>
        <Searchbar size="lg" mt={12} maxWidth="xl" mx="auto" mb={12} />
        <Breadcrumb separator=">">
          <BreadcrumbItem>
            <BreadcrumbLink href="/ideas/?category=All">All</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href={`/ideas/?category=${category}`}>
              {category}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href={`/ideas/${slug}`}>{title}</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <Stack spacing={12} mt={8} color="white">
          <Stack spacing={6}>
            <Heading as="h1" size="xl" fontWeight="black">
              {title}
            </Heading>
            {!isNil(author) && <AuthorComponent author={author} isFull />}
          </Stack>
          <Stack spacing={6}>
            <Heading as="h2" size="lg">
              Problem to solve
            </Heading>
            <Text>{description?.problem}</Text>
          </Stack>
          <Stack spacing={6}>
            <Heading as="h2" size="lg">
              Possible Solution
            </Heading>
            <Text>{description?.problem}</Text>
          </Stack>
          <Stack spacing={6}>
            <Heading as="h2" size="lg">
              Useful resources
            </Heading>
            <UnorderedList spacing={2}>
              {description?.useful_resources.map((resource, index) => (
                <ListItem key={index}>
                  <Link href={resource.url} color="blue.200" isExternal>
                    {resource.name}
                  </Link>
                </ListItem>
              ))}
            </UnorderedList>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}
