import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";

interface DashInfoProps {
  title: string;
  value: string;
  rate: string;
  compared: string;
  sign: Boolean;
}

const DashInfo: React.FC<DashInfoProps> = ({
  title,
  value,
  rate,
  compared,
  sign,
}) => {
  return (
    <VStack
      w={["100%", "100%", "375px", "375px"]}
      h={["150px", "150px", "175px", "175px"]}
      rounded="15px"
      shadow="md"
      p="20px"
      border="1px solid rgba(85, 85, 85, 0.2)"
      alignItems="flex-start"
      justifyContent="space-between"
    >
      <Text as="h3" fontSize="16px" fontWeight="400" color="#555555">
        {title}
      </Text>

      <VStack alignItems="flex-start">
        <HStack>
          {" "}
          <Text as="h1" fontSize="24px" fontWeight="600">
            {value}
          </Text>
          <Text
            ml="10px"
            as="span"
            fontSize="16px"
            fontWeight="400"
            color={sign ? "#32A50A" : "red"}
          >
            {sign ? "+" : "-"}
            {rate}
          </Text>
        </HStack>
        <Text
          as="p"
          fontSize="16px"
          fontWeight="400"
          color="rgba(85, 85, 85, 0.6)"
        >
          {compared}
        </Text>
      </VStack>
    </VStack>
  );
};

export default DashInfo;
