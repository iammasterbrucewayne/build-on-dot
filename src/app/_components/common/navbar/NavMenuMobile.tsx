"use client";
import { Fragment, useRef } from "react";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  Icon,
  useDisclosure,
} from "@chakra-ui/react";
import NavLinksComponent from "@/app/_components/common/navbar/NavLinksComponent";
import NavbarActions from "@/app/_components/common/navbar/NavbarActions";
import { FiMenu } from "react-icons/fi";

export function NavMenuMobile() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navRef = useRef();
  return (
    <Fragment>
      <Button
        as={Icon}
        ref={navRef}
        aria-label="Open Navigation"
        onClick={onOpen}
        display={{ base: "block", md: "none" }}
        variant="ghost"
        textColor="white"
        p={0}
        viewBox="-4 -4 32 32"
        _hover={{ backgroundColor: "transparent" }}
        _active={{ backgroundColor: "transparent" }}
      >
        <FiMenu size={24} />
      </Button>
      <Drawer isOpen={isOpen} onClose={onClose} placement="top">
        <DrawerContent
          backdropFilter="blur(5px)"
          backgroundColor="rgba(0, 0, 0, 0.3)"
          pb={8}
        >
          <DrawerBody>
            <NavLinksComponent isMobile />
            <NavbarActions isMobile />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Fragment>
  );
}
