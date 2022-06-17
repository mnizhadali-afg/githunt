import React from 'react'
import { Text } from "@chakra-ui/react";
import moment from 'moment'

export function GroupTitle({startDate, endDate}) {
  if(!startDate || !endDate) {
    return null;
  }

  const startMoment = moment(startDate)
  const endMoment = moment(endDate)
    return (
        <Text fontSize={"24px"} fontWeight={"700"}>
          { startMoment.fromNow()} {""}
          <Text as={'span'}
                ml={"5px"}
                fontSize={"15px"}
                fontWeight={"500"}
                color={"gray.500"}>
            {startMoment.format("MMMM D, YYYY")} - {endMoment.format("MMMM D, YYYY")}
          </Text>
        </Text>
    )
}