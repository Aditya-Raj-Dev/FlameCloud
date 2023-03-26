import React from "react";
import { Flex, Text, Box, Heading, Grid } from "@chakra-ui/react";
import global from "../images/global.png";
import people from "../images/people.png"
import refresh from "../images/refresh-square-2.png"
import devices from "../images/devices.png"
import message from "../images/messages-3.png"
import sheild from "../images/shield-tick.png"
import trade from "../images/trade.png"
import flash from "../images/flash.png"
const Proxyproviders = () => {
  const num = [1, 2, 3, 4, 5, 6, 7, 8];
  let img=[people,refresh,devices,message,global,sheild,trade,flash]
  return (
    <Box bg="#0566D4" mt="4rem">
      <Box p={["115px  0px 114px 0px",
      "115px  1rem 114px 1rem",
      "115px  4rem 114px 4rem"]}
      
      width="90%" margin="auto">
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
          
          margin="auto"
          fontWeight="500"
          fontSize={["15px","18px","18px"]}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus
          augue sit amet mollis molestie.
        </Text>
        <br />
        <Grid
          templateColumns= {{ base: 'repeat(2,1fr)', md: 'repeat(2,1fr)', lg: 'repeat(4,1fr)' }}
          gap="20px"
        >
          {num.map((item,i) => (
            <Box
             bg= " rgba(255, 255, 255, 0.04)"
              textAlign="left"
              padding={{ base: '12px 12px 13px 10px', md: '25px 25px 22px 25px', lg: '25px 25px 22px 25px' }}
              borderRadius="5px"
              border="1px solid rgba(255, 255, 255, 0.1)"
              fontSize={{base: '24px', md: '40px', lg: '16px'}}
            >
              <img src={img[i]} alt="" />
              <Text  fontSize={{base: '13px', md: '14px', lg: '16px'}} color="white"   mt={{base: '2px', md: '4px', lg: '6px'}}>
                Feature No {item}
              </Text>
              <Text
               mt={{base: '2px', md: '4px', lg: '6px'}}
                color="#FFFFFF"
                opacity="50%"
               fontWeight="400"
               fontSize={{base: '10px', md: '12px', lg: '14px'}}
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
