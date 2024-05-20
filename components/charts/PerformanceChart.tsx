import React from "react";
import { Box, HStack, Select, Text, VStack } from "@chakra-ui/react";
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  YAxis,
  CartesianGrid,
} from "recharts";
import { userPerformanceData } from "@/data";

function PerformanceChart() {
  return (
    <VStack w={["full", "full", "60%", "60%"]} alignItems="flex-start">
      <HStack my="10px" w="100%" justifyContent="space-between">
        <Text as="h2" fontSize="20px" fontWeight="500" color="#555555">
          Performance
        </Text>
        <Select
          maxW="130px"
          h="35px"
          bg="rgba(85, 85, 85, 0.1)"
          placeholder="Monthly"
          focusBorderColor="black"
        ></Select>
      </HStack>
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
        <HStack my="10px" w="full" justifyContent="space-between">
          <HStack>
            {" "}
            <Text as="h1" fontSize="18px" fontWeight="600">
              70%
            </Text>
            <Text
              ml="10px"
              as="span"
              fontSize="16px"
              fontWeight="400"
              color="red"
            >
              -56%
            </Text>
          </HStack>

          <HStack>
            <HStack>
              <Box w="10px" bg="black" h="10px" rounded="50%" />{" "}
              <Text as="span">Active</Text>
            </HStack>
            <HStack>
              <Box w="10px" bg="#CAFF01" h="10px" rounded="50%" />{" "}
              <Text as="span">Inactive</Text>
            </HStack>
          </HStack>
        </HStack>

        <ResponsiveContainer width="100%" height="100%">
          <BarChart width={500} height={300} data={userPerformanceData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip cursor={{ fill: "transparent" }} />
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <Bar
              dataKey="uv"
              fill="black"
              background={{ fill: "#eee", radius: 15 }}
              radius={15}
              barSize={18}
            />
            <Bar
              dataKey="pv"
              fill="#CAFF01"
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

export default PerformanceChart;
