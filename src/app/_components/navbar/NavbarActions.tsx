import { Button, HStack, IconButton } from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";

export default function NavbarActions() {
  return (
    <HStack spacing={4}>
      <IconButton
        aria-label="Search for an idea"
        icon={<FiSearch />}
        variant={"flushed"}
        fontSize={24}
      />
      <Button rounded="full">Submit an idea</Button>
    </HStack>
  );
}
