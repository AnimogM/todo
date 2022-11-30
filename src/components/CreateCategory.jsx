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
  Button,
  Text,
} from "@chakra-ui/react";
import { useTodoContextApi } from "../context/TodoContextProvider";

const CreateCategory = ({ isOpen, onClose }) => {
  const { categoryTitle, setCategoryTitle, dispatch } = useTodoContextApi();
  const [error, setError] = useState(false);
  const newCategory = (e) => {
    e.preventDefault();
    if (categoryTitle) {
      dispatch({
        type: "ADD_CATEGORY",
        payload: { id: Date.now(), category: categoryTitle, items: [] },
      });
      setCategoryTitle("");
      setError(false);
      onClose();
    } else {
      setError(true);
    }
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create a new category</ModalHeader>
        <ModalCloseButton />
        <form onSubmit={newCategory}>
          <ModalBody pb={6}>
            <FormControl mt={4}>
              <FormLabel>Title</FormLabel>
              {error && (
                <Text color="red.600">Please enter a valid category title</Text>
              )}
              <Input
                onChange={(e) => setCategoryTitle(e.target.value)}
                placeholder="Category title"
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

export default CreateCategory;
