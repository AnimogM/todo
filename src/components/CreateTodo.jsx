import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Text,
  Button,
  Select,
} from "@chakra-ui/react";
import { useTodoContextApi } from "../context/TodoContextProvider";

const CreateTodo = ({ isOpen, onClose }) => {
  const {
    todos,
    todoTitle,
    setTodoTitle,
    dispatch,
    setTodoCategory,
    todoCategory,
    initialRef,
  } = useTodoContextApi();

  const [error, setError] = useState(false);
  const newTodo = (e) => {
    e.preventDefault();

    if (todoTitle) {
      dispatch({
        type: "ADD_TODO",
        category: parseInt(todoCategory),
        payload: { id: Date.now(), title: todoTitle, complete: false },
      });
      setTodoTitle("");
      setError(false);
      onClose();
    } else {
      setError(true);
    }
  };
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      isCentered
      initialFocusRef={initialRef}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create a new task</ModalHeader>
        <ModalCloseButton />
        <form onSubmit={newTodo}>
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Select Category</FormLabel>
              <Select
                ref={initialRef}
                value={todoCategory}
                onChange={(e) => setTodoCategory(e.target.value)}
              >
                {todos.map((item) => (
                  <option value={item.id} key={item.id}>
                    {item.category}
                  </option>
                ))}
              </Select>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Write a New Task</FormLabel>
              {error && (
                <Text color="red.600">Please enter a valid category title</Text>
              )}
              <Input
                onChange={(e) => setTodoTitle(e.target.value)}
                placeholder="Write a new task"
                value={todoTitle}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button type="submit" colorScheme="blue" mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};

export default CreateTodo;
