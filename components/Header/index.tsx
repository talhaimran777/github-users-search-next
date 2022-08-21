import { Flex, Text } from "@chakra-ui/react";
import { SunIcon } from "@chakra-ui/icons";
import { NextPage } from "next";
import React from "react";

const Header: NextPage = () => {
  return (
    <Flex width="90%" mb={3} justify="space-between">
      <Text fontSize="16px" fontWeight="bold">
        DevFinder
      </Text>

      <Flex alignItems="center">
        <Text mr="2" mt="1" fontSize="14px" fontWeight="semibold">
          light
        </Text>
        <SunIcon />
      </Flex>
    </Flex>
  );
};

export default Header;
