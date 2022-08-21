import { Flex, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import React from "react";

const UserStats: NextPage = () => {
  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      p="4"
      bg="#141C2F"
      borderRadius={"lg"}
    >
      <Flex direction="column" alignItems="center">
        <Text fontWeight="light">Repos</Text>
        <Text fontWeight="bold" fontSize="18px">
          08
        </Text>
      </Flex>

      <Flex direction="column" alignItems="center">
        <Text fontWeight="light">Followers</Text>
        <Text fontWeight="bold" fontSize="18px">
          08
        </Text>
      </Flex>

      <Flex direction="column" alignItems="center">
        <Text fontWeight="light">Following</Text>
        <Text fontWeight="bold" fontSize="18px">
          08
        </Text>
      </Flex>
    </Flex>
  );
};

export default UserStats;
