import Navbar from "@/app/_components/common/navbar";
import { ideas } from "@/app/_lib/constants/placeholderIdeas";
import { Idea } from "@/app/_lib/types/ideas";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";
import { redirect } from "next/navigation";

export default function IdeaPage({ params }: { params: { slug: string } }) {
  const idea = ideas.find((idea) => idea.slug === params.slug);
  if (!idea) {
    redirect("/404");
  }

  const { title, description, author, category, slug }: Idea = idea;

  return (
    <Box as="main" p={4}>
      <Navbar />
      <Breadcrumb separator=">">
        <BreadcrumbItem>
          <BreadcrumbLink href={`/ideas/?category=${category}`}>
            {category}
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href={`/ideas/${slug}`}>{title}</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
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
