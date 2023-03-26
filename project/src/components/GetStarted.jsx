import React from "react";
import { Flex, Text, Box, Button,Grid } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import Shape from "../images/Shape.png";
import Vector from "../images/Vector.png";
import square from "../images/square.png"
import dollor from "../images/dollor.png"
import lock from "../images/lock.png"
import key from "../images/key.png"
import { useNavigate } from "react-router-dom";
const GetStarted = () => {
  const navigate=useNavigate()
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
    <Box w={["93%", "93%", "93%", "80%"]} margin="auto" mt="50px">
      <center>
        <Text color="#111822" opacity="50%" fontWeight="600"
        lineHeight="19.2px"
        fontSize={["14px","16px"]}
        fontStyle="semibold">
          WELCOME TO CREATIVE PROXIES
        </Text>
      </center>

      <Box margin="auto" w={["95%", "90%", "85%", "80%"]}>
        <Text
          fontSize={["30px", "30px", "45px", "56px"]}
          fontWeight="semibold"
          marginBottom="20px"
          lineHeight={["30px","40px","50px","67px"]}
        >
          We are the <span style={{ color: "#077BFF" }}>Fastest</span> and the{" "}
          <span style={{ color: "#16D113" }}>Most Reliable</span> Proxy Service
          since 2020
        </Text>
      </Box>
      <Text
        color="#111822"
        opacity= "50%"
        fontWeight="500"
        w={["98%", "90%", "80%", "45%"]}
        m="auto"
        fontSize={["18px","20px","22px"]}
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
        fontSize="18px"
        onClick={()=>navigate("/locationcheck")}
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
   <Grid
    templateColumns={[ "repeat(2,1fr)","repeat(2,1fr)","repeat(2,1fr)","repeat(4,1fr)","repeat(4,1fr)"]}
 justifyContent="center"
   gap="10px">
     {
        topbox.map((item,i)=>(
            <Flex
            gap={{ base: '10px', md: '20px', lg: '20px' }}
            padding={{base:"14px 10px 15px 10px",
            md:"24px 46px 26px 10px",lg:"24px 46px 26px 24px" }}
            borderRadius="5px"
            textAlign="left"
            border="1px solid #CEDAC2"
            justifyContent="center"
            alignItems="center"
            bg="#EFFAF6"
            >
                <Box
                p="10px"
                borderRadius="5px"
                alignItems="center"
                bg={i===0?"#3BC9FB":i===1?"#72E6E5":i===2?"#80FC6A":"#2E73E8"}>
                <img src={item.img} alt="" width="15px" />
                </Box>
                <Text  fontStyle="Regular"
                lineHeight="21.6px" fontSize={{ base: '13px', md: '16px', lg: '16px' }}
                
                >{item.text}</Text>
            </Flex>
        ))
     }
   </Grid>
    </Box>
  );
};

export default GetStarted;
