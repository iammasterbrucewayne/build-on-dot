import { Category } from "@/app/_lib/constants/ideas/category";
import { Difficulty } from "@/app/_lib/constants/ideas/difficulty";

export type Author = {
  name: string;
  profilePicture: string;
};

export type Resource = {
  name: string;
  url: string;
};

export type IdeaDescription = {
  problem: string;
  solution: string;
  useful_resources: Resource[];
};

export interface Idea {
  slug: string;
  title: string;
  author: Author;
  description: IdeaDescription;
  category: Category;
  difficulty: Difficulty;
}
