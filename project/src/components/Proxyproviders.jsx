import React from "react";
import { Flex, Text, Box, Heading, Grid } from "@chakra-ui/react";
import global from "../images/global.png";
const Proxyproviders = () => {
  const num = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <Box bg="#0566D4" mt="4rem">
      <Box p={["115px  0px 114px 0px",
      "115px  1rem 114px 1rem",
      "115px  4rem 114px 4rem"]}
      
      width={["98%","98%","98%","85%"]} margin="auto">
        <Heading
          as="h2"
          mb="10px"
          fontWeight="600"
          size={["xl", "xl", "xl"]}
          color="white"
        >
          Why we are the Best Proxy Providers
        </Heading>
        <Text
          color="#FFFFFF"
          opacity="50%"
          width={["100%", "100%", "50%"]}
          margin="auto"
          fontWeight="500"
          fontSize={["15px","18px","18px"]}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus
          augue sit amet mollis molestie.
        </Text>
        <br />
        <Grid
          templateColumns={[
            "repeat(1,1fr)",
            "repeat(1,1fr)",
            "repeat(2,1fr)",
            "repeat(2,1fr)",
            "repeat(4,1fr)",
          ]}
          gap="20px"
        >
          {num.map((item) => (
            <Box
             margin={["0px 4rem 0px 4rem","0px 4rem 0px 4rem","0px","0px"]}
             bg= " rgba(255, 255, 255, 0.04)"
              textAlign="left"
              padding="25px 25px 25px 25px"
              borderRadius="5px"
              border="1px solid rgba(255, 255, 255, 0.1)"
            >
              <img src={global} alt="" />
              <Heading as="h5" size="sm" color="white"   mt="6px">
                Feature No {item}
              </Heading>
              <Text
              mt="6px"
                color="#FFFFFF"
                opacity="50%"
               fontSize="14px"
               fontWeight="400"
              >
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies interdum eros non. 
               
              </Text>
            </Box>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Proxyproviders;
