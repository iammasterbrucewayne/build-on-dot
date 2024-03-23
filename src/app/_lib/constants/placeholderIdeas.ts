import { Category } from "@/app/_lib/constants/ideas/category";
import { Difficulty } from "@/app/_lib/constants/ideas/difficulty";
import { Idea } from "../types/ideas";

export const ideas: Idea[] = [
  {
    slug: "1",
    title: "NFT Marketplace",
    author: {
      name: "Alice",
      profilePicture: "https://avatars.githubusercontent.com/u/1",
    },
    description: {
      problem:
        "NFTs are hard to sell. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      solution: "A marketplace for NFTs",
      useful_resources: ["https://opensea.io"],
    },
    category: Category.NFTs,
    difficulty: Difficulty.Beginner,
  },
  {
    slug: "2",
    title: "DeFi Lending Protocol",
    author: {
      name: "Bob",
      profilePicture: "https://avatars.githubusercontent.com/u/2",
    },
    description: {
      problem:
        "DeFi lending is expensive. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      solution: "A lending protocol with low fees",
      useful_resources: ["https://compound.finance"],
    },
    category: Category.DeFi,
    difficulty: Difficulty.Advanced,
  },
  {
    slug: "3",
    title: "DAO for Community",
    author: {
      name: "Charlie",
      profilePicture: "https://avatars.githubusercontent.com/u/3",
    },
    description: {
      problem:
        "Community is not engaged. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      solution: "A DAO for community governance",
      useful_resources: ["https://snapshot.org"],
    },
    category: Category.DAO,
    difficulty: Difficulty.Intermediate,
  },
];