import { Box } from "@chakra-ui/react";
import { NextPage } from "next";
import React from "react";
import UserHeader from "./components/UserHeader";
import UserStats from "./components/UserStats";

const User: NextPage = () => {
  return (
    <Box
      px="5"
      py="6"
      m="0"
      bg="#1F2A48"
      height="fit-content"
      width="90%"
      color={"white"}
    >
      <UserHeader />
      <UserStats />
    </Box>
  );
};

export default User;
