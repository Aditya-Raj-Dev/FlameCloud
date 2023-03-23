import React from "react";
import { Flex, Text, Box, Button } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import Shape from "../images/Shape.png";
import Vector from "../images/Vector.png";
import square from "../images/square.jpg"
import dollor from "../images/dollor.png"
import lock from "../images/lock.png"
import key from "../images/key.png"
const GetStarted = () => {
    let star=[1,2,3,4,5]
    let topbox=[
        {"text":"Lorem Ipsum Dolor Sit Amet Top",
          "img":square},
          {"text":"Lorem Ipsum Dolor Sit Amet Top",
          "img":lock},
          {"text":"Lorem Ipsum Dolor Sit Amet Top",
          "img":dollor},
          {"text":"Lorem Ipsum Dolor Sit Amet Top",
          "img":key}
    ]
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
        rightIcon={<ArrowForwardIcon />}
        backgroundColor="#077BFF"
        color="white"
        borderBottom="4px solid #0566D4"
        fontSize="lg"
      >
        Get Started
      </Button>
      <br />
      <center>
        <Box
        mb= "50px"
        mt="20px"
        padding="10px"
        height="fit-content"
        width="fit-content"
        backgroundColor="rgba(0, 182, 122, 0.1)">
        <Flex
          gap="1px"
       justifyContent="center"
        >
          {
            star.map((item)=>(
                <Box
                p="2px"
                bg= {item===5?"linear-gradient(to right, #00B67A 50%, #DCDCE6 50%);":"#00B67A"}
                >
                    <img src={Shape} alt=""  />
                </Box>
            ))
          }
          
        </Flex>
        <Flex fontSize="13px"
        mt="3px"
        fontWeight="bold">
           <Text> Rated 4.5 on </Text>
           <img src={Vector} alt="" height="10px" width="19px" /> <Text>Trustpilot
           </Text>
           </Flex>
        </Box>
      </center>
  
      <div
        style={{
         
          marginBottom: "10px",
          backgroundColor: "#D9D8D6",
          height: "2px",
          width: "60%",
          margin:"auto"
        }}
      ></div>
      <br />
   <Flex
 justifyContent="center"
   gap="10px">
     {
        topbox.map((item,i)=>(
            <Flex
            gap="20px"
            borderRadius="5px"
            textAlign="left"
            justifyContent="center"
            alignItems="center"
          bg="#D4EAE8"
          padding="10px 0px 10px 0px"
            >
                <Box
                p="7px 7px 7px 7px"
                borderRadius="5px"
                alignItems="center"
                
                bg={i===0?"#3BC9FB":i===1?"#72E6E5":i===2?"#80FC6A":"#2E73E8"}>
                <img src={item.img} alt="" width="15px" />
                </Box>
                <Text width="60%" lineHeight="18px">{item.text}</Text>
            </Flex>
        ))
     }
   </Flex>
    </Box>
  );
};

export default GetStarted;
