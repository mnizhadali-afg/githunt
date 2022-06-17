import React from 'react'
import {Box, Button, Flex, Heading, Image, Link, Stack, Text} from "@chakra-ui/react";

export function Repo(props) {
  const {isListView = false, repo} = props;

  return (
    <Flex borderWidth={"1"} bg={"white"} rounded={"5px"} p={"20px"} boxShadow={"lg"} align={"center"}>
      <Flex flex={1} flexDir={"column"} >
        {!isListView && (
          <Flex mb={"20px"}>
            <Image
              src={repo.owner.avatar_url}
              w={"35px"}
              h={"35px"}
              rounded={"50%"}
            />
            <Box ml={"10px"}>
              <Heading fontSize={"16px"}>{repo.owner.login}</Heading>
              <Text fontSize={"13px"}>View profile</Text>
            </Box>
          </Flex>
        )}

        <Box mb={"20px"}>
          <Box mb={"10px"}>
            <Heading
              mb={"3px"}
              fontSize={"18px"}
              as={"a"}
              href={repo.owner.html_url}
              target={"_blank"}
              color={"purple.500"}>
              {repo.name}
            </Heading>
            <Text
              fontSize={"14px"}
              color={"gray.500"}>
              Build by &middot; <Link href={repo.owner.html_url} fontWeight={"600"} _hover={{textDecoration: "underline"}}>{repo.owner.login}</Link> &middot; May 26, 2022</Text>
          </Box>
          <Text color={"gray.900"} fontSize={"14px"}>{repo.description}</Text>
        </Box>

        <Stack isInline>
          <Button as={"a"} href={`${repo.html_url}/stargazers`} target={"_blank"} cursor={"pointer"} variant={"link"} fontSize={"14px"} _hover={{textDecoration: "none"}}>{repo.stargazers_count}</Button>
          <Button cursor={"pointer"} variant={"link"} fontSize={"14px"} _hover={{textDecoration: "none"}}>{repo.forks_count}</Button>
          <Button as={"a"} cursor={"pointer"} variant={"link"} fontSize={"14px"} _hover={{textDecoration: "none"}}>{repo.open_issues_count}</Button>
        </Stack>
      </Flex>
      {/*{isListView && (*/}
      {/*  <>*/}
      {/*    <Text*/}
      {/*      as="a"*/}
      {/*      href={repo.owner.html_url}*/}
      {/*      target="_blank"*/}
      {/*    >*/}
      {/*      {repo.owner.login}*/}
      {/*    </Text>*/}
      {/*    &nbsp;/&nbsp;*/}
      {/*  </>*/}
      {/*)}*/}
        {/*<Text*/}
        {/*  as="a"*/}
        {/*  href={repo.html_url}*/}
        {/*  target="_blank"*/}
        {/*>*/}
        {/*  {repo.name}*/}
        {/*</Text>*/}
    </Flex>
  );
}