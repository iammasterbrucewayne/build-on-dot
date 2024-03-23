import { map } from "lodash";

import { NavLinks } from "@/app/_lib/constants/nav-links";
import { HStack, VStack } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";

export default function NavLinksComponent({
  isMobile,
}: {
  isMobile?: boolean;
}) {
  const links = map(NavLinks, (link) => (
    <Link
      href={link.href}
      key={link.title}
      fontWeight="semibold"
      py={isMobile ? 3 : "initial"}
    >
      {link.title}
    </Link>
  ));
  return isMobile ? (
    <VStack spacing={0} my={4}>
      {links}
    </VStack>
  ) : (
    <HStack
      spacing={4}
      display={{
        base: "none",
        md: "flex",
      }}
    >
      {links}
    </HStack>
  );
}
