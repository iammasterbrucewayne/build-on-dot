import { Image } from "@chakra-ui/next-js";
import { HStack, Text } from "@chakra-ui/react";

export default function NavbarBrand() {
  return (
    <HStack spacing={4}>
      <Image
        src="/images/android-chrome-192x192.png"
        alt="Build On Dot"
        width={8}
        height={8}
      />
      <Text fontSize="xl" fontWeight="semibold">
        Build On Dot
      </Text>
    </HStack>
  );
}
