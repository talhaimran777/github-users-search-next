import { SearchIcon } from "@chakra-ui/icons";
import { Button, Flex, Input } from "@chakra-ui/react";
import { NextPage } from "next";
import React from "react";

const blueThemeColor: string = "#007BFF";

const SearchBar: NextPage = () => {
  return (
    <Flex
      alignItems="center"
      width="90%"
      mb={3}
      bg="#1F2A48"
      p="4"
      borderRadius="lg"
    >
      <SearchIcon mr={2} color="#007BFF" fontSize="lg" fontWeight="bold" />
      <Input
        mr={2}
        flex="1"
        variant="unstyled"
        placeholder="Search github username..."
      />
      <Button
        bg={blueThemeColor}
        _hover={{ bg: { blueThemeColor } }}
        _active={{
          bg: { blueThemeColor },
          borderColor: "#bec3c9",
        }}
      >
        Search
      </Button>
    </Flex>
  );
};

export default SearchBar;
