import React from "react";
import { Flex, Text, Box, Button } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const GetStarted = () => {
  return (
    <Box w={["90%", "90%", "90%", "80%"]} margin="auto" mt="50px">
      <center>
        <Text color="grey" fontSize={["sm", "md", "md", "xl"]}>
          WELCOME TO CREATIVE PROXIES
        </Text>
      </center>

      <Box margin="auto" w={["90%", "90%", "80%", "60%"]}>
        <Text
          fontSize={["25px", "28px", "35px", "45px"]}
          fontWeight="semibold"
          lineHeight="50px"
          marginBottom="20px"
        >
          We are the <span style={{ color: "#077BFF" }}>Fastest</span> and the{" "}
          <span style={{ color: "#16D113" }}>Most Reliable</span> Proxy Service
          since 2020
        </Text>
      </Box>
      <Text
        color="grey"
        w={["90%", "90%", "80%", "40%"]}
        m="auto"
        fontSize={["sm", "md", "md", "xl"]}
        marginBottom="10px"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus augue
        sit amet mollis molestie.
      </Text>
     <Button
     rightIcon={<ArrowForwardIcon/>}
     backgroundColor="#077BFF"
     color="white"
     borderBottom="4px solid #0566D4"
     >Get Started</Button>
    </Box>
  );
};

export default GetStarted;
