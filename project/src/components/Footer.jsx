import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Box width="70%" m="auto" mt="8rem">
      <div
        style={{
          marginBottom: "10px",
          backgroundColor: "#D9D8D6",
          height: "2px",
          width: "100%",
          margin: "auto",
        }}
      ></div>
      <br />
      <Flex justifyContent="space-between"      flexDirection={["column","column","column","row"]}>
        <Flex direction="column" gap="5px">
          <Flex alignItems="center">
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25.2377 15.5195C24.086 21.316 18.9628 25.7 12.8297 25.7C5.85221 25.7 0.177856 20.0254 0.177856 13.0482C0.177856 6.94912 4.43222 1.80574 10.36 0.637207C9.11129 1.14046 5.82152 2.66242 3.74219 6.25777C1.79882 9.61354 0.725986 15.0985 3.89036 19.433C7.05803 23.7709 12.8436 24.7341 17.2461 23.3168C22.8512 21.5137 24.9569 16.2561 25.2377 15.5199V15.5195Z"
                fill="#0074D9"
              />
            </svg>

            <Text ml="10px" fontWeight="bold" fontSize={["20px", "20px"]}>
              CreativeProxies
            </Text>
          </Flex>
          <Text fontSize="sm" color="grey">
            Copyright © 2023 Creative Proxies. All rights reserved.
          </Text>
          <Button backgroundColor="rgba(88, 101, 242, 0.1)" varient="outline" color="#5865F2">
          <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.3334 1.75002C13.3334 1.75002 11.8047 0.553354 10.0001 0.416687L9.83741 0.742354C11.4687 1.14202 12.2174 1.71335 13.0001 2.41669C11.6511 1.72802 10.3201 1.08335 8.00008 1.08335C5.68008 1.08335 4.34908 1.72802 3.00008 2.41669C3.78275 1.71335 4.67341 1.07802 6.16275 0.742354L6.00008 0.416687C4.10675 0.59502 2.66675 1.75002 2.66675 1.75002C2.66675 1.75002 0.959748 4.22535 0.666748 9.08335C2.38675 11.0677 5.00008 11.0834 5.00008 11.0834L5.54675 10.3554C4.61875 10.0327 3.57208 9.45702 2.66675 8.41669C3.74608 9.23335 5.37508 10.0834 8.00008 10.0834C10.6251 10.0834 12.2541 9.23335 13.3334 8.41669C12.4284 9.45702 11.3817 10.0327 10.4534 10.3554L11.0001 11.0834C11.0001 11.0834 13.6134 11.0677 15.3334 9.08335C15.0404 4.22535 13.3334 1.75002 13.3334 1.75002ZM5.83341 7.75002C5.18875 7.75002 4.66675 7.15335 4.66675 6.41669C4.66675 5.68002 5.18875 5.08335 5.83341 5.08335C6.47808 5.08335 7.00008 5.68002 7.00008 6.41669C7.00008 7.15335 6.47808 7.75002 5.83341 7.75002ZM10.1667 7.75002C9.52208 7.75002 9.00008 7.15335 9.00008 6.41669C9.00008 5.68002 9.52208 5.08335 10.1667 5.08335C10.8114 5.08335 11.3334 5.68002 11.3334 6.41669C11.3334 7.15335 10.8114 7.75002 10.1667 7.75002Z" fill="#5865F2"/>
</svg>
  Join Our Discord
          </Button>
        </Flex >

        <Flex  gap={["1rem","3rem","7rem","5rem"]}
   
        justifyContent="space-between"
   >
          <Flex direction="column" gap="8px" textAlign="left">
           <Text fontSize="sm" color="grey">Explore</Text>
           <Text fontSize="sm">Proxy Location Checker</Text>
           <Text fontSize="sm">IPv6 Comptability</Text>
           <Text fontSize="sm">Blogs</Text>
          </Flex>
          <Flex direction="column" gap="8px" textAlign="left">
           <Text fontSize="sm" color="grey">Resources</Text>
           <Text fontSize="sm">Branding</Text>
           <Text fontSize="sm">FAQs</Text>
           <Text fontSize="sm">Imprint</Text>
          </Flex>
          <Flex direction="column" gap="8px" textAlign="left">
           <Text fontSize="sm" color="grey">Explore</Text>
           <Text fontSize="sm">Status</Text>
           <Text fontSize="sm">Privacy </Text>
           <Text fontSize="sm">Blogs</Text>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
