import { Flex } from "@chakra-ui/react";
import { NextPage } from "next";
import React from "react";
import Header from "../Header";
import SearchBar from "../SearchBar";
import User from "../User";

const Layout: NextPage = () => {
  return (
    <Flex
      minHeight="100vh"
      justify="center"
      align="center"
      background="#141c2f"
      color={"white"}
      direction="column"
    >
      <Header />
      <SearchBar />
      <User />
    </Flex>
  );
};

export default Layout;
