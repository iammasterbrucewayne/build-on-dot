"use client";

import Navbar from "@/app/_components/common/navbar";
import AuthorComponent from "@/app/_components/ideas/AuthorComponent";
import { ideas } from "@/app/_lib/constants/placeholderIdeas";
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

export default function IdeaPage({ params }: { params: { slug: string } }) {
  const idea = ideas.find((idea) => idea.slug === params.slug);
  if (!idea) {
    redirect("/404");
  }

  const { title, description, author, category, slug }: Idea = idea;

  return (
    <Box as="main" p={4} maxW="6xl" mx="auto">
      <Navbar />
      <Box p={4}>
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
            <AuthorComponent author={author} isFull />
          </Stack>
          <Stack spacing={6}>
            <Heading as="h2" size="lg">
              Problem to solve
            </Heading>
            <Text>{description.problem}</Text>
          </Stack>
          <Stack spacing={6}>
            <Heading as="h2" size="lg">
              Possible Solution
            </Heading>
            <Text>{description.problem}</Text>
          </Stack>
          <Stack spacing={6}>
            <Heading as="h2" size="lg">
              Useful resources
            </Heading>

            <UnorderedList spacing={2}>
              {description.useful_resources.map((resource, index) => (
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

export async function getStaticPaths() {
  return {
    paths: ideas.map((idea) => ({
      params: {
        slug: idea.slug,
      },
    })),
    fallback: false,
  };
}
