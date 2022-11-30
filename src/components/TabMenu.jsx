import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

import { useTodoContextApi } from "../context/TodoContextProvider";
import Todo from "./Todo";

const TabMenu = ({ onOpen }) => {
  const {
    currentTodos,
    completedTodos,
    activeTodos,
  } = useTodoContextApi();

  return (
    <Tabs isFitted variant="enclosed" colorScheme="blue">
      <TabList mb="1em">
        <Tab _selected={{ color: "white", bg: "brand.800" }}>All</Tab>
        <Tab _selected={{ color: "white", bg: "brand.800" }}>Active</Tab>
        <Tab _selected={{ color: "white", bg: "brand.800" }}>Completed</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <Todo todoList={currentTodos} onOpen={onOpen} />
        </TabPanel>
        <TabPanel>
          <Todo todoList={activeTodos} onOpen={onOpen} />
        </TabPanel>
        <TabPanel>
          <Todo todoList={completedTodos} onOpen={onOpen} />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default TabMenu;
