import { Box, Flex } from "@chakra-ui/react";

import Categories from "./components/Categories";
import Index from "./components/Index";

function App() {
  return (
    <Box bgColor="brand.700">
      <Flex minH="100vh">
        <Categories />

        <Box
          p={{ base: 5, md: 10, lg: 16 }}
          w={{ base: "full", lg: "75%" }}
          ms={{ base: "unset", lg: "25%" }}
          transition="1s ease"
        >
          <Index />
        </Box>
      </Flex>
    </Box>
  );
}

export default App;
