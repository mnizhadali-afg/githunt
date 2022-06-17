import React from 'react'
import {Brand} from "./brand";
import {Button, Flex, Stack} from "@chakra-ui/react";

export function PageHeader() {
    return (
        <Flex justifyContent="space-between" alignItems="center" pt="20px">
            <Brand />
            <Stack isInline>
                <Button>View Source</Button>
                <Button bg="red.400">Use Extension</Button>
                <Button bg="purple.400">Tweet</Button>
            </Stack>
        </Flex>
    );
}