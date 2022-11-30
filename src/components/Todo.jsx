import React from "react";
import {
  Checkbox,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";

import { useTodoContextApi } from "../context/TodoContextProvider";
import { MdEdit, MdDelete } from "react-icons/md";
import Empty from "./Empty";

const Todo = ({ todoList, onOpen }) => {
  

  const {
    currentTodos,
    dispatch,
    setTodoTitle,
    todoCategory,
    setTodoCategory,
  } = useTodoContextApi();

  const editTodo = (itemId, categoryId, title) => {
    onOpen();
    setTodoTitle(title);
    setTodoCategory(todoCategory);
    dispatch({
      type: "DELETE_TODO",
      payload: {
        itemId: itemId,
        categoryId: categoryId,
      },
    });
  };

 

  return (
    <>
      
      {todoList[0].items.length === 0 ? (
        <Empty />
      ) : (
        <VStack align="flex-start" spacing={4} w="full">
          {todoList[0].items.map((item, index) => (
            <HStack
              shadow={"md"}
              key={item.id}
              justify="space-between"
              rounded="lg"
              bgColor="white"
              p="5"
              w="full"
            >
              <HStack>
                <Checkbox
                  isChecked={item.complete}
                  cursor="pointer"
                  onChange={() =>
                    dispatch({
                      type: "COMPLETE",
                      payload: {
                        itemId: item.id,
                        index: index,
                        categoryId: currentTodos[0].id,
                        complete: item.complete,
                      },
                    })
                  }
                />
                <Text textDecor={item.complete ? "line-through" : "none"}>
                  {item.title}
                </Text>
              </HStack>
              <HStack>
                <MdEdit
                  cursor="pointer"
                  onClick={() => editTodo(item.id, todoList[0].id, item.title)}
                />
                <MdDelete
                  onClick={() =>
                    dispatch({
                      type: "DELETE_TODO",
                      payload: {
                        itemId: item.id,
                        index: index,
                        categoryId: todoList[0].id,
                      },
                    })
                  }
                  cursor="pointer"
                />
              </HStack>
            </HStack>
          ))}
        </VStack>
      )}
    </>
  );
};

export default Todo;
