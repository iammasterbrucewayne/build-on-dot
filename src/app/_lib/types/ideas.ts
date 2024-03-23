import { Category } from "@/app/_lib/constants/ideas/category";
import { Difficulty } from "@/app/_lib/constants/ideas/difficulty";

export type Author = {
  name: string;
  profilePicture: string;
};

export type IdeaDescription = {
  problem: string;
  solution: string;
  useful_resources: string[];
};

export type Idea = {
  slug: string;
  title: string;
  author: Author;
  description: IdeaDescription;
  category: Category;
  difficulty: Difficulty;
};
