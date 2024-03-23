import { Avatar, HStack, Text } from "@chakra-ui/react";
import { Author } from "../../_lib/types/ideas";

export default function Author({ author }: { author: Author }) {
  return (
    <HStack>
      <Avatar src={author.profilePicture} size="sm" />
      <Text fontWeight="semibold">{author.name}</Text>
    </HStack>
  );
}
