import { userTableData } from "@/data";
import {
  Badge,
  Box,
  CircularProgress,
  CircularProgressLabel,
  HStack,
  Input,
  Select,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";

const DashTable = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [search, setSearch] = useState(false);

  return (
    <VStack w="full" mt="20px">
      <HStack
        w="full"
        justifyContent="space-between"
        flexDirection={["column", "column", "row", "row"]}
      >
        <HStack
          border="1px solid rgba(85, 85, 85, 0.2)"
          shadow="md"
          width={["full", "full", "540px", "540px"]}
          rounded="18px"
          justifyContent="space-between"
        >
          <HStack
            p="10px"
            rounded="16px"
            cursor="pointer"
            onClick={() => setActiveTab("all")}
            bg={activeTab === "all" ? "black" : "transparent"}
            color={activeTab === "all" ? "white" : "black"}
            fontSize="14px"
            fontWeight="400"
            flexDirection={["column", "column", "row", "row"]}
            alignItems="center"
            justifyContent="center"
          >
            <Text as="span" textAlign="center">
              <Text
                as="span"
                display={["none", "none", "inline-block", "inline-block"]}
              >
                All
              </Text>{" "}
              Users
            </Text>{" "}
            <Badge
              rounded="8px"
              fontSize="12px"
              bg={activeTab === "all" ? "brand.500" : "rgba(85, 85, 85, 0.1)"}
              color="#000000"
            >
              1m
            </Badge>{" "}
          </HStack>
          <HStack
            p="10px"
            rounded="16px"
            cursor="pointer"
            onClick={() => setActiveTab("active")}
            bg={activeTab === "active" ? "black" : "transparent"}
            color={activeTab === "active" ? "white" : "black"}
            fontSize="14px"
            fontWeight="400"
            flexDirection={["column", "column", "row", "row"]}
            alignItems="center"
            justifyContent="center"
          >
            <Text as="span">Active</Text>{" "}
            <Badge
              rounded="8px"
              bg={
                activeTab === "active" ? "brand.500" : "rgba(85, 85, 85, 0.1)"
              }
              color="#000000"
              fontSize="12px"
            >
              909k
            </Badge>{" "}
          </HStack>
          <HStack
            p="10px"
            rounded="16px"
            cursor="pointer"
            onClick={() => setActiveTab("inactive")}
            bg={activeTab === "inactive" ? "black" : "transparent"}
            color={activeTab === "inactive" ? "white" : "black"}
            fontSize="14px"
            fontWeight="400"
            flexDirection={["column", "column", "row", "row"]}
            alignItems="center"
            justifyContent="center"
          >
            <Text as="span">Inactive</Text>{" "}
            <Badge
              rounded="8px"
              fontSize="12px"
              bg={
                activeTab === "inactive" ? "brand.500" : "rgba(85, 85, 85, 0.1)"
              }
              color="#000000"
            >
              104k
            </Badge>{" "}
          </HStack>
          <HStack
            p="10px"
            rounded="16px"
            cursor="pointer"
            onClick={() => setActiveTab("suspended")}
            bg={activeTab === "suspended" ? "black" : "transparent"}
            color={activeTab === "suspended" ? "white" : "black"}
            fontSize="14px"
            fontWeight="400"
            flexDirection={["column", "column", "row", "row"]}
            alignItems="center"
            justifyContent="center"
          >
            <Text as="span">Suspended</Text>{" "}
            <Badge
              rounded="8px"
              fontSize="12px"
              bg={
                activeTab === "suspended"
                  ? "brand.500"
                  : "rgba(85, 85, 85, 0.1)"
              }
              color="#000000"
            >
              90k
            </Badge>{" "}
          </HStack>
        </HStack>

        <HStack w={["full", "full", "30%", "30%"]} justifyContent="flex-end">
          <HStack
            cursor="pointer"
            alignItems="center"
            justifyContent="center"
            w={search ? "130px" : "45px"}
            h="45px"
            rounded={search ? "16px" : "50%"}
            fontSize="18px"
            border="1px solid rgba(85, 85, 85, 0.2)"
            pr={search ? "10px" : "0"}
          >
            {search && (
              <Input
                variant="unstyled"
                placeholder="Search"
                pl="8px"
                pr="0"
                w="100%"
              />
            )}{" "}
            <BiSearch onClick={() => setSearch(true)} />
          </HStack>
          <Select
            maxW="180px"
            focusBorderColor="brand.500"
            rounded="16px"
            borderColor="rgba(85, 85, 85, 0.2)"
            placeholder="Filter"
          ></Select>
        </HStack>
      </HStack>

      <VStack
        w="full"
        mt="20px"
        border="1px solid rgba(85, 85, 85, 0.2)"
        shadow="md"
        rounded="15px"
        alignItems="flex-start"
        p="10px"
      >
        <Text
          as="h2"
          pb="15px"
          w="full"
          fontSize="18px"
          fontWeight="400"
          borderBottom="1px solid rgba(85, 85, 85, 0.2)"
        >
          All Users
        </Text>
        <TableContainer w="full">
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th pl="0" fontSize="15px" fontWeight="500" color="#A6A6A6">
                  Name
                </Th>
                <Th fontSize="15px" fontWeight="500" color="#A6A6A6">
                  Email
                </Th>
                <Th fontSize="15px" fontWeight="500" color="#A6A6A6">
                  Phone
                </Th>
                <Th fontSize="15px" fontWeight="500" color="#A6A6A6">
                  Budget
                </Th>
                <Th fontSize="15px" fontWeight="500" color="#A6A6A6">
                  Status
                </Th>
                <Th fontSize="15px" fontWeight="500" color="#A6A6A6">
                  Action
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {userTableData.map((item, i) => {
                return (
                  <Tr key={i}>
                    <Td pl="0">{item.name}</Td>
                    <Td>{item.email}</Td>
                    <Td>{item.phone}</Td>
                    <Td>
                      <CircularProgress value={item.budget} color="black">
                        <CircularProgressLabel>
                          {item.budget}%
                        </CircularProgressLabel>
                      </CircularProgress>
                    </Td>
                    <Td>
                      <Badge
                        p="5px"
                        bg={item.status === "Inactive" ? "red" : "#00C608"}
                        color="white"
                      >
                        {item.status}
                      </Badge>
                    </Td>
                    <Td>
                      {" "}
                      <Badge
                        p="5px"
                        bg={item.status === "Inactive" ? "#00C608" : "#EBAA03"}
                        color="white"
                        cursor="pointer"
                      >
                        {item.status === "Inactive" ? "Unsuspend" : "Suspend"}
                      </Badge>
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </VStack>
    </VStack>
  );
};

export default DashTable;
