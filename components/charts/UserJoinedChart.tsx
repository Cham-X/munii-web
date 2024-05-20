import React from "react";
import { HStack, Text, VStack } from "@chakra-ui/react";
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import { userChartData } from "@/data";

function UserJoinedChart() {
  return (
    <VStack w={["full", "full", "38%", "38%"]} alignItems="flex-start">
      <Text my="10px" as="h2" fontSize="20px" fontWeight="500" color="#555555">
        User Joined
      </Text>
      <VStack
        alignItems="flex-start"
        bg="white"
        rounded="15px"
        shadow="md"
        p="10px"
        border="1px solid rgba(85, 85, 85, 0.2)"
        w="full"
        h="320px"
      >
        <HStack ml="10px" my="10px">
          {" "}
          <Text as="h1" fontSize="18px" fontWeight="600">
            10,540k
          </Text>
          <Text
            ml="10px"
            as="span"
            fontSize="16px"
            fontWeight="400"
            color="#32A50A"
          >
            +56%
          </Text>
        </HStack>

        <ResponsiveContainer width="100%" height="100%">
          <BarChart width={500} height={300} data={userChartData}>
            <XAxis dataKey="name" />
            <Tooltip cursor={{ fill: "transparent" }} />
            <Bar
              dataKey="users"
              fill="black"
              background={{ fill: "#eee", radius: 15 }}
              radius={15}
              barSize={18}
            />
          </BarChart>
        </ResponsiveContainer>
      </VStack>
    </VStack>
  );
}

export default UserJoinedChart;
