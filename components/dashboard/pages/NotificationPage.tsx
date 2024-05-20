import { NotificationPageProps } from "@/types";
import { Text } from "@chakra-ui/react";
import React from "react";

const NotificationPage: React.FC<NotificationPageProps> = ({ setNavState }) => {
  return (
    <div>
      <Text as="h1">Notification Page</Text>
    </div>
  );
};

export default NotificationPage;
