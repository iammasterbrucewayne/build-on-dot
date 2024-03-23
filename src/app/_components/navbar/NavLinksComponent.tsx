import { map } from "lodash";

import { NavLinks } from "@/app/_lib/constants/nav-links";
import { HStack } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";

export default function NavLinksComponent() {
  return (
    <HStack spacing={4}>
      {map(NavLinks, (link) => (
        <Link href={link.href} key={link.title}>
          {link.title}
        </Link>
      ))}
    </HStack>
  );
}
