import React from "react";
import {Button, Menu, MenuButton, MenuItem, MenuList, Select, Stack} from "@chakra-ui/react";
import languages from "../data/languages.json"

export function Filters(props) {
  const {
    onViewChange,
    viewType,
    onDateJumpChange,
    dateJump,
    onLanguageChange,
    language
  } = props;

  return (
    <Stack isInline>
      <Select bg={'white'} value={language} onChange={(e) => onLanguageChange(e.target.value)}>
        {languages.map((language) => (
            <option key={language.title} value={language.value}>{language.value}</option>
        ))}
      </Select>

      <Menu>
        <MenuButton
          bg={"white"}
          borderWidth={"1px"}
          fontWeight={"400"}
          px={"30px"}
          borderRadius={"5px"}>
          Weekly
        </MenuButton>
        <MenuList>
          <MenuItem onClick={() => onDateJumpChange('day')}>Daily</MenuItem>
          <MenuItem onClick={() => onDateJumpChange('week')}>Weekly</MenuItem>
          <MenuItem onClick={() => onDateJumpChange('month')}>Monthly</MenuItem>
          <MenuItem onClick={() => onDateJumpChange('year')}>Yearly</MenuItem>
        </MenuList>
      </Menu>

      <Stack isInline spacing={"0"} borderWidth={1} bg={"white"} rounded={"5px"} align={"center"} ml={"10px"}>
        <Button
          onClick={() => onViewChange('grid')}
          bg={viewType === 'grid' ? "gray.200" : "white"}
          roundedRight={"0"}
          fontWeight={"400"}
          h={"100%"}>Grid</Button>
        <Button
          onClick={() => onViewChange('list')}
          bg={viewType === 'list' ? "gray.200" : "white"}
          roundedLeft={"0"}
          fontWeight={"400"}
          h={"100%"}>List</Button>
      </Stack>
    </Stack>
  );
}
