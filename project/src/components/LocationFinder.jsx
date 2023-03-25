import { Box, Button, Heading, Text } from "@chakra-ui/react";
import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'
import {ArrowForwardIcon} from "@chakra-ui/icons"

const LocationFinder = () => {
  return (
    <Box width={["80%", "50%", "50%", "30%"]} margin="auto" mt="4rem">
      <Text fontSize={["xs", "xs", "sm", "sm"]} color="grey">
        PROXY LOCATION CHECKER
      </Text>
      <Heading
        as="h2"
        size={["lg", "lg", "xl", "xl"]}
        margin="auto"
        fontWeight="semibold"
      >
        Check Locations of all your Proxies{" "}
        <span style={{ color: "rgba(7, 123, 255, 1)" }}>Free</span> of Cost
      </Heading>
      <Text  fontSize={["xs","xs","md","md"]}
       width={["90%", "90%", "80%", "80%"]} margin="auto">
        To Check location, enter the address or proxies you want to check (1 IP
        Per line)
      </Text>
      <Box
        bg="rgba(217, 216, 214, 0.25)"
        textAlign="left"
        p="20px"
        fontWeight="bold"
        mb="20px"
        width="100%"
        height={["180px","200px","250px","250px"]}
        mt="30px"
      >
        <Text>8.8.8.8 </Text>
        <Text>1.1.1.1</Text>
        <Text>192.168.1.1</Text>
      </Box>
      <Button   
        colorScheme="messenger" position="left" width="46%" display="block">
        Check Location
      </Button>
      <br />
      <Text color="grey" textAlign="left" display="block" width='100%' fontSize="14px">
        By using our tool, you agree our <span
        style={{textDecoration:"underline"}}>Terms of Service</span> and{" "}
        <span style={{textDecoration:"underline"}}>Privacy Policy</span>
      </Text>
       <Text color="rgba(7, 123, 255, 1)" mt="5px"
       fontWeight="bold" textAlign="left" mb="15px">Your Results</Text>
       
       <TableContainer  fontSize={["10px","10px","12px","13px"]}
          gap="10px"
       border="1px solid rgba(0, 0, 0, 0.25)" borderRadius="6px"> 
  <Table variant='unstyled' overflowX={{ base: "hidden", lg: "unset"}}>
    <Thead>
      <Tr bg="rgba(0, 0, 0, 0.1)" >
        <Th>IP</Th> 
        <Th>PROXY</Th>
        <Th >CITY</Th>
        <Th>COUNTRY</Th>
      </Tr>
    </Thead>
    <Tbody >
      <Tr  border="1px solid rgba(0, 0, 0, 0.25)">
        <Td >8.8.8.8</Td>
        <Td>192.168.0.0</Td>
        <Td >New York</Td>
        <Td >US</Td>
      </Tr>
      <Tr border="1px solid rgba(0, 0, 0, 0.25)">
        <Td>1.1.1.1</Td>
        <Td>192.168.0.0</Td>
        <Td >Los Angelese</Td>
        <Td >US</Td>
      </Tr>
      <Tr border="1px solid rgba(0, 0, 0, 0.25)">
        <Td>2.2.2.3</Td>
        <Td>192.168.0.0</Td>
        <Td >Sab Diego</Td>
        <Td >US</Td>
      </Tr>
    </Tbody>

  </Table>
</TableContainer>
<br />
<Text>Check out our IPv6 Compatibility Checker      

  <span style={{color:"#077BFF",fontWeight:"bold",cursor:"pointer"}}>      View Tool <ArrowForwardIcon/></span></Text>
    </Box>
  );

};

export default LocationFinder;
