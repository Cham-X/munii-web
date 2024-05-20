"use client";

import React from "react";
import {
  Box,
  List,
  ListIcon,
  ListItem,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { IoMdClose } from "react-icons/io";
import { logo_green } from "@/public/images";
import Image from "next/image";
import { SideBarProps } from "@/types";


// navData, navState, setNavState

const SideBar: React.FC<SideBarProps> = ({
  menuItems,
  selectedItem,
  navState,
  setNavState,
  onItemClick,
}) => {
  const width = navState ? "250px" : "0px";

  return (
    <VStack
      justifyContent="space-between"
      w={[width, width, "250px", "250px"]}
      bg="black"
      h="100vh"
      position="fixed"
      transition="0.5s"
      overflowX="hidden"
      top={"0px"}
      bottom={"0px"}
      color="white"
      whiteSpace="nowrap"
      zIndex={100}
      shadow="md"
    >
      <Box w="100%">
        <HStack
          alignItems="center"
          p="20px"
          pb="0"
          justifyContent="space-between"
        >
          <Image width={120} alt="logo" src={logo_green} />
          <Box color="white" display={["block", "block", "none", "none"]}>
            <IoMdClose onClick={() => setNavState(false)} />
          </Box>
        </HStack>
        <List pt="50px" spacing={2}>
          {menuItems?.map((item, i) => {
            return (
              <ListItem
                key={i}
                display="flex"
                alignItems="center"
                fontSize="16px"
                fontWeight="400"
                pl="20px"
                py="10px"
                cursor="pointer"
                onClick={() => onItemClick(item.key)}
                color={item.key === selectedItem ? "brand.500" : "white"}
                borderTop="1px solid black"
                borderBottom="1px solid black"
                _hover={{
                  borderTop: "1px solid rgba(85, 85, 85, 0.3)",
                  borderBottom: "1px solid rgba(85, 85, 85, 0.3)",
                }}
              >
                <ListIcon as={item.icon} color="brand.500" fontSize="20px" />
                {item.key}
              </ListItem>
            );
          })}
        </List>
      </Box>
    </VStack>
  );
};

export default SideBar;
