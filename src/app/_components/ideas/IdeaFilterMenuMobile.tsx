"use client";

import { Fragment, useRef } from "react";
import {
  Box,
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import { Category } from "@/app/_lib/constants/ideas/category";
import { FiFilter } from "react-icons/fi";
import { map } from "lodash";

export default function IdeaFilterMenuMobile() {
  const filterRef = useRef();
  const { onOpen, onClose, isOpen } = useDisclosure();
  return (
    <Fragment>
      <Button
        as={Button}
        ref={filterRef}
        display={{ base: "block", lg: "none" }}
        rounded="full"
        variant="outline"
        leftIcon={<FiFilter />}
        onClick={onOpen}
      >
        Filter
      </Button>

      <Drawer isOpen={isOpen} onClose={onClose} placement="bottom">
        <DrawerOverlay />

        <DrawerContent
          roundedTop={24}
          borderTop="1px solid"
          borderColor="gray.700"
          backdropFilter="blur(5px)"
          backgroundColor="rgba(26, 32, 44, 0.7)"
          pb={8}
          mt={20}
          px={4}
        >
          <DrawerBody>
            <Box as="h2" fontSize="xl" fontWeight="bold" py={4} color="white">
              Categories
            </Box>
            <Divider />
            <Stack mt={4}>
              {map(Object.values(Category), (category: string) => (
                <Link
                  key={category}
                  href={`/ideas?category=${category}`}
                  onClick={onClose}
                  fontSize="md"
                  fontWeight="semibold"
                  mb={1}
                >
                  {category}
                </Link>
              ))}
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Fragment>
  );
}
