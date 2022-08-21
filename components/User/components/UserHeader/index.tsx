import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import React from "react";

const UserHeader: NextPage = () => {
  return (
    <Flex mb="4" alignItems="center" justifyContent="space-between">
      <Avatar mr={5} size="xl" />
      <Box>
        <Flex alignItems="center" justifyContent="space-between">
          <Box>
            <Text mb="1" fontSize="16px" fontWeight="bold">
              Talha Imran
            </Text>
            <Text mb="1" fontSize="14px" fontWeight="normal" color="#007BFF">
              @talhaimran777
            </Text>
          </Box>
          <Text fontSize="16px" fontWeight="light">
            Joined 25 Jan 2011
          </Text>
        </Flex>
        <Text fontSize="16px" fontWeight="normal">
          Hellow there, i'm devtal and i do youtube videos where i teach web
          related stuff to every one for free.
        </Text>
      </Box>
    </Flex>
  );
};

export default UserHeader;
