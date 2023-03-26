import { Box ,Grid,Heading, Text, textDecoration} from '@chakra-ui/react'
import React from 'react'
import { ArrowForwardIcon } from "@chakra-ui/icons";
const Exclusive = () => {
    let d=[1,2,3,4,5,6]
  return (
   
    <Box 
    bg="rgba(30, 30, 30, 0.01)"
    width={{ base: "100%", md: "90%", lg: "80%" }}
    m="auto"
    mt="8rem"
     border="1px solid rgba(30, 30, 30, 0.1)"
     p={["40px"]}
     >
<Heading as='h2' size={["md","lg",'xl']}>
Read our <span style={{color:"rgba(7, 123, 255, 1)"}}>Exclusive </span> Blog
        </Heading>
        <Text fontSize={{ base: "16px", md: "18px", lg: "18px" }} opacity="50%" fontWeight="500" width={{ base: "100%", md: "60%", lg: "50%" }} margin="auto" mt="10px" mb="10px" lineHeight="110%">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus augue sit amet mollis molestie.
  </Text>
    <p style={{color:"rgba(7, 123, 255, 1)",cursor:"pointer"}}>Read All Blogs < ArrowForwardIcon/> </p>
       <Grid
      padding="40px"
      placeContent="center"
      justifyItems="center"
      alignItems="center"
       textAlign="left" 
       gap="38px"
       templateColumns={{ base: "repeat(2,1fr)", md: "repeat(2,1fr)", lg: "repeat(3,1fr)" }}
      >
{
    d.map((item)=>(
        <Box 
        width={["fit-content"]}
        >
           <Box bg="rgba(7, 123, 255, 0.1)" borderRadius="5px"
            border="2px solid rgba(7, 123, 255, 0.5)"
           mb="10px" height={{ base: "100px", md: "210px", lg: "220px" }}
            width={{ base: "150px", md: "330px", lg: "350px" }}></Box>
           <Text fontSize={{ base: "18px", md: "20px", lg: "20px" }} fontWeight="500">
           Blog Title appear here
  </Text>
  <Text fontSize={{ base: "14px", md: "16px", lg: "16px" }} fontWeight="400" opacity="50%">Category name here</Text>
                   </Box>
    ))
}
       </Grid>
    </Box>
    
  )
}

export default Exclusive