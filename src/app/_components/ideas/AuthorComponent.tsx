import { Avatar, HStack, Text } from "@chakra-ui/react";
import { Author } from "../../_lib/types/ideas";

export default function AuthorComponent({
  author,
  isFull,
}: {
  author: Author;
  isFull?: boolean;
}) {
  return (
    <HStack>
      <Avatar src={author.profilePicture} size="sm" />
      <Text
        fontWeight={isFull ? "800" : "semibold"}
        fontSize={isFull ? "lg" : "md"}
      >
        {author.name}
      </Text>
    </HStack>
  );
}
