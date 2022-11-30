import {
  Box,
  Button,
  Heading,
  HStack,
  Text,
  useDisclosure,
  Input,
  InputGroup,
} from "@chakra-ui/react";
import React from "react";
import { useTodoContextApi } from "../context/TodoContextProvider";
import CreateTodo from "./CreateTodo";
import { GrMenu } from "react-icons/gr";
import TabMenu from "./TabMenu";
import Todo from "./Todo";


const Index = () => {
 
  const { currentTodos, open, setOpen,  setSearch, searchList, searchTask } =
    useTodoContextApi();
  const { isOpen, onOpen, onClose } = useDisclosure();

 
  return (
    <Box position="relative">
      <Box
        display={{ base: "block", lg: "none" }}
        position="absolute"
        right="0"
        top={0}
      >
        <GrMenu onClick={() => setOpen(!open)} cursor="pointer" size={22} />
      </Box>
      <Heading fontFamily="cursive" color="brand.800" textAlign="center" mb="5">
        {currentTodos[0].category} - List
      </Heading>
      <HStack mb="5" justify="space-between" w="full">
        <form onSubmit={searchTask}>
          <InputGroup>
            <Input
              w="full"
              placeholder="Search task"
              bgColor="white"
              type="text"
              mb="5"
              onChange={(e) => setSearch(e.target.value)}
            />
            {/* <InputRightAddon children={<MdSearch />} /> */}
          </InputGroup>
        </form>
        <Button color="white" onClick={onOpen} bgColor="brand.800">
          <Text>New Task</Text>
        </Button>
      </HStack>
      {searchList[0]?.items?.length === 0  ? (
        <TabMenu onOpen={onOpen} />
      ) : (
        <Todo todoList={searchList} onOpen={onOpen} />
      )}

      <CreateTodo isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default Index;
