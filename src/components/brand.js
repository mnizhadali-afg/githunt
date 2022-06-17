import React from 'react';
import { Box, Image, Button, Flex, Heading, Text } from "@chakra-ui/react";

export function Brand() {
  return (
    <Flex alignItems="center">
      <Image src="/logo.svg" width="80px"/>
      <Box ml="20px">
        <Heading fontSize="24px">GitHunt</Heading>
        <Text color="gray.600">Most starred projects on GitHub</Text>
      </Box>
    </Flex>
  );
}