import {
  Button,
  HStack,
  VStack,
  IconButton,
  InputGroup,
  Input,
  InputLeftElement,
} from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";

export default function NavbarActions({ isMobile }: { isMobile?: boolean }) {
  return isMobile ? (
    <VStack spacing={4}>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <FiSearch />
        </InputLeftElement>
        <Input
          placeholder="Search for an idea"
          rounded="full"
          borderColor="gray.600"
        />
      </InputGroup>
      <Button rounded="full" w="full">
        Submit an idea
      </Button>
    </VStack>
  ) : (
    <HStack
      spacing={4}
      display={{
        base: "none",
        md: "flex",
      }}
    >
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
