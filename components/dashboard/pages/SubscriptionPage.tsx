import React from "react";
import { SubscriptionPageProps } from "@/types";
import { Text } from "@chakra-ui/react";

const SubscriptionPage: React.FC<SubscriptionPageProps> = ({ setNavState }) => {
  return (
    <div>
      <Text as="h1">Subscription Page</Text>
    </div>
  );
};

export default SubscriptionPage;
