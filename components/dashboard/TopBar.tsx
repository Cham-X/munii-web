"use client";

import { HStack, Text, Box, VStack } from "@chakra-ui/react";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoNotificationsOutline } from "react-icons/io5";
import { avatar } from "@/public/images";
import { IoIosSearch } from "react-icons/io";
import { TopBarProps } from "@/types";



const TopBar: React.FC<TopBarProps> = ({ setNavState }) => {
  return (
    <HStack
      justifyContent="space-between"
      h="80px"
      p="0px 20px"
      bg={"white"}
      w="100%"
      shadow="sm"
    >
      <HStack>
        <Box
          mr="10px"
          fontSize="20px"
          display={["block", "block", "none", "none"]}
        >
          <GiHamburgerMenu onClick={() => setNavState(true)} />
        </Box>
        <VStack spacing={0} alignItems="flex-start">
          <Text
            as="h2"
            fontSize={["18px", "18px", "20px", "24px"]}
            fontWeight="700"
            color="#555555"
          >
            Good day, John
          </Text>
          <Text
            as="p"
            color="rgba(0, 0, 0, 1)"
            fontSize="14px"
            fontWeight="400"
            display={["none", "block", "block", "block"]}
          >
            Welcome back, it’s nice to see you again
          </Text>
        </VStack>
      </HStack>

      <HStack spacing={4}>
        <IoIosSearch cursor="pointer" size="24px" />
        <IoNotificationsOutline cursor="pointer" size="24px" />
        <Image src={avatar} width={40} height={40} alt="profile" />{" "}
      </HStack>
    </HStack>
  );
};

export default TopBar;
