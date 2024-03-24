import { Button, HStack, VStack } from "@chakra-ui/react";

export default function NavbarActions({ isMobile }: { isMobile?: boolean }) {
  return isMobile ? (
    <VStack spacing={4}>
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
      <Button rounded="full" isDisabled>
        Submit an idea (soon)
      </Button>
    </HStack>
  );
}
