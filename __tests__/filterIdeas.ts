import { filterIdeas } from "../src/app/_lib/utils/filterIdeas";
import { Idea } from "../src/app/_lib/types/ideas";
import { Category } from "../src/app/_lib/constants/ideas/category";
import { Difficulty } from "../src/app/_lib/constants/ideas/difficulty";

describe("filterIdeas", () => {
  const ideas: Idea[] = [
    {
      slug: "idea-1",
      title: "Idea 1",
      author: { name: "Author 1", profilePicture: "" },
      description: {
        problem: "Problem 1",
        solution: "Solution 1",
        useful_resources: [],
      },
      category: "Category 1" as Category,
      difficulty: "Easy" as Difficulty,
    },
    {
      slug: "idea-2",
      title: "Idea 2",
      author: { name: "Author 2", profilePicture: "" },
      description: {
        problem: "Problem 2",
        solution: "Solution 2",
        useful_resources: [],
      },
      category: "Category 2" as Category,
      difficulty: "Hard" as Difficulty,
    },
  ];

  it("should return all ideas when category and query are undefined", () => {
    const result = filterIdeas(ideas, "" as Category, "" as Category);
    expect(result).toEqual(ideas);
  });

  it("should return ideas that match the category", () => {
    const result = filterIdeas(ideas, "Category 1" as Category, "" as Category);
    expect(result).toEqual([ideas[0]]);
  });

  it("should return ideas that match the query in the title", () => {
    const result = filterIdeas(ideas, "" as Category, "Idea 2");
    expect(result).toEqual([ideas[1]]);
  });

  it("should return ideas that match the query in the author name", () => {
    const result = filterIdeas(ideas, "" as Category, "Author 1");
    expect(result).toEqual([ideas[0]]);
  });

  it("should return ideas that match the query in the problem description", () => {
    const result = filterIdeas(ideas, "" as Category, "Problem 1");
    expect(result).toEqual([ideas[0]]);
  });

  it("should return ideas that match the query in the solution description", () => {
    const result = filterIdeas(ideas, "" as Category, "Solution 2");
    expect(result).toEqual([ideas[1]]);
  });

  it("should return ideas that match the category and query", () => {
    const result = filterIdeas(ideas, "Category 1" as Category, "Idea 1");
    expect(result).toEqual([ideas[0]]);
  });

  it("should return an empty array when no ideas match the category and query", () => {
    const result = filterIdeas(ideas, "Category 3" as Category, "Idea 3");
    expect(result).toEqual([]);
  });
});
