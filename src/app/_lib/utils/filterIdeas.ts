import { Category } from "../constants/ideas/category";
import { Idea } from "../types/ideas";
import { filter, isNil } from "lodash";

export const filterIdeas = (
  ideas: Idea[],
  category: Category,
  query: string | null | undefined
) => {
  const lowercaseCategory = category?.toLowerCase();
  const lowercaseQuery = query?.toLowerCase() || null;

  return filter(
    ideas,
    (idea) =>
      (idea.category.toLowerCase() === lowercaseCategory ||
        !lowercaseCategory ||
        lowercaseCategory === "all") &&
      matchesQuery(toLowerCaseIdea(idea), lowercaseQuery)
  );
};

const matchesQuery = (idea: Idea, query: string | null) => {
  return (
    !query ||
    query === "" ||
    idea.title.includes(query) ||
    idea.description.problem.includes(query) ||
    idea.description.solution.includes(query) ||
    idea.author.name.includes(query)
  );
};

const toLowerCaseIdea = (idea: Idea) => ({
  slug: idea.slug,
  title: idea.title.toLowerCase(),
  author: { ...idea.author, name: idea.author.name.toLowerCase() },
  description: {
    problem: idea.description.problem.toLowerCase(),
    solution: idea.description.solution.toLowerCase(),
    useful_resources: idea.description.useful_resources,
  },
  category: idea.category, // Don't lowercase category
  difficulty: idea.difficulty, // Don't lowercase difficulty
});
