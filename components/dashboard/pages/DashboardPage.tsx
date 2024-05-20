import TopBar from "../TopBar";
import React, { Fragment } from "react";
import { DashInfo } from "@/components/cards";
import { UserJoinedChart } from "@/components/charts";
import PerformanceChart from "@/components/charts/PerformanceChart";
import { DashTable } from "@/components/tables";
import { HStack, VStack } from "@chakra-ui/react";
import { DashboardPageProps } from "@/types";
        
const DashboardPage: React.FC<DashboardPageProps> = ({ setNavState }) => {
  return (
    <Fragment>
      <TopBar setNavState={setNavState} />
      <VStack w="full" p={["10px", "10px", "20px", "20px"]}>
        <HStack
          w="full"
          justifyContent={[
            "center",
            "center",
            "space-between",
            "space-between",
          ]}
          flexWrap="wrap"
        >
          <DashInfo
            title="Active Users"
            value="10,540k"
            rate="56%"
            compared="Compared to (4,560 last month)"
            sign={true}
          />
          <DashInfo
            title="Inactive Users"
            value="10,540k"
            rate="56%"
            compared="Compared to (4,560 last month)"
            sign={false}
          />
          <DashInfo
            title="Suspended Users"
            value="10,540k"
            rate="56%"
            compared="Compared to (4,560 last month)"
            sign={true}
          />
        </HStack>
        <HStack
          spacing={8}
          alignItems="flex-start"
          w="full"
          mt="10px"
          flexDirection={["column", "column", "row", "row"]}
        >
          <UserJoinedChart />
          <PerformanceChart />
        </HStack>

        <DashTable />
      </VStack>
    </Fragment>
  );
};

export default DashboardPage;
