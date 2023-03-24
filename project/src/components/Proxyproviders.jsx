import React from "react";
import { Flex, Text, Box, Heading, Grid } from "@chakra-ui/react";
import global from "../images/global.png"
const Proxyproviders = () => {
    const num= [1,2,3,4,5,6,7,8]
  return (
    <Box bg="#0566D4" mt="4rem">
      <Box  p="2rem  4rem 2rem 4rem" mt="4rem"
      width="80%" margin="auto">
        <Heading as="h2" size={["lg", "lg", "xl"]} color="white">
          Why we are the Best Proxy Providers
        </Heading>
        <Heading color="#FFFFFF" width={["100%","100%","60%"]} margin="auto" as="h6" size="xs" fontWeight="200">
          Why we are the Best Headingroxy Providers Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. In luctus augue sit amet mollis molestie.
        </Heading>
        <br />
        <Grid 
         templateColumns={[ "repeat(1,1fr)","repeat(1,1fr)","repeat(2,1fr)","repeat(2,1fr)","repeat(4,1fr)"]}
      gap="20px"
      >
           {
            num.map((item)=>(
          <Box
          textAlign="left"
          padding="10px"
          borderRadius="5px"
          border="1px solid rgba(205, 205, 205)">
             <img src={global} alt="" />
             <Heading as='h5' size='sm' color="white">
               Feature No {item}
            </Heading>
            <Heading color="#FFFFFF"  margin="auto" as="h6" size="xs" fontWeight="200">
          Why we are the Best Headingroxy Providers Lorem ipsum dolor sit amet,
          consectetur adipiscing elit
        </Heading>
          </Box>
            ))
           }
           </Grid>
      </Box>
    </Box>
  );
};

export default Proxyproviders;
