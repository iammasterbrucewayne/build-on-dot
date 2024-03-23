import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Link,
  Text,
} from "@chakra-ui/react";
import Author from "./AuthorComponent";
import DifficultyTag from "./DifficultyTag";
import { Idea } from "../../_lib/types/ideas";

export default function IdeaOverviewCard({ idea }: { idea: Idea }) {
  return (
    <Card
      key={idea.slug}
      as={Link}
      href={`/ideas/${idea.slug}`}
      variant="outline"
      color="white"
      _hover={{
        textDecoration: "none",
      }}
    >
      <CardHeader>
        <Heading size="md">{idea.title}</Heading>
      </CardHeader>
      <CardBody color="gray.300" py={0}>
        <Text noOfLines={2}>{idea.description.problem}</Text>
      </CardBody>
      <CardFooter justifyContent="space-between" alignItems="center">
        <Author author={idea.author} />
        <DifficultyTag difficulty={idea.difficulty} />
      </CardFooter>
    </Card>
  );
}
