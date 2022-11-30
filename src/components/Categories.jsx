import {
  Box,
  VStack,
  Text,
  Heading,
  Flex,
  HStack,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { GrFormAdd } from "react-icons/gr";
import CreateCategory from "./CreateCategory";
import { useTodoContextApi } from "../context/TodoContextProvider";

const Categories = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { currentCategory, setCurrentCategory, todos, open, setOpen } =
    useTodoContextApi();

  return (
    <Box
      transition="1s ease"
      transform={{
        base: open ? "translate(0)" : "translate(-130%)",
        lg: "translate(0)",
      }}
      position="fixed"
      h="95%"
      zIndex={2}
      w={{ base: "full", md: "40%", lg: "25%" }}
      bgColor="white"
      m="4"
      rounded="lg"
      py="7"
      px="3"
      shadow="lg"
    >
      <Heading fontFamily="cursive" color="brand.800" textAlign="center" mb="5">
        Categories
      </Heading>
      <VStack align="flex-start" w="full">
        {todos.map((item) => (
          <HStack
            key={item.id}
            onClick={() => {
              setCurrentCategory(item.id);
              setOpen(false);
            }}
            justify="space-between"
            textTransform="capitalize"
            w="full"
            fontWeight={600}
            p="3"
            rounded="md"
            cursor="pointer"
            bgColor={currentCategory === item.id ? "brand.900" : "transparent"}
            _hover={{ bgColor: "brand.900" }}
          >
            <Text>{item.category}</Text>
            <Text bgColor="brand.700" rounded="lg" px="2">
              {item.items.length}
            </Text>
          </HStack>
        ))}
      </VStack>
      <Flex
        mt="3"
        onClick={onOpen}
        w="full"
        justify="center"
        fontWeight={400}
        p="3"
        gap={4}
        rounded="md"
        align="end"
        cursor="pointer"
        _hover={{ bgColor: "brand.900" }}
      >
        <GrFormAdd size={25} /> create a new category
      </Flex>
      <CreateCategory isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default Categories;
