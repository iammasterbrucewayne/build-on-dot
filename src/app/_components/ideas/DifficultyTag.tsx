import { Difficulty } from "@/app/_lib/constants/ideas/difficulty";
import { Tag } from "@chakra-ui/react";

export default function DifficultyTag({
  difficulty,
}: {
  difficulty: Difficulty;
}) {
  return (
    <Tag
      colorScheme={
        difficulty === "Easy"
          ? "green"
          : difficulty === "Intermediate"
          ? "blue"
          : "red"
      }
      textTransform="uppercase"
      fontSize="xs"
      fontWeight="semibold"
      h="fit-content"
    >
      {difficulty}
    </Tag>
  );
}
