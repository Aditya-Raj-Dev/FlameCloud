import { Box ,Grid,Heading, Text, textDecoration} from '@chakra-ui/react'
import React from 'react'
import { ArrowForwardIcon } from "@chakra-ui/icons";
const Exclusive = () => {
    let d=[1,2,3,4,5,6]
  return (
   
    <Box 
    
    bg="rgba(30, 30, 30, 0.01)"
    width={["90%","90%","80%","80%"]}
    m="auto"
    mt="8rem"
     border="1px solid rgba(30, 30, 30, 0.1)"
     p={["5px","20px 25px 10px 25px"]}
     >
<Heading as='h2' size={["md","lg",'xl']}>
Read our <span style={{color:"rgba(7, 123, 255, 1)"}}>Exclusive </span> Blog
        </Heading>
        <Text fontSize="18px" opacity="50%" fontWeight="500" width={["85%","85%","70%","48%"]} margin="auto" mt="10px" mb="10px" lineHeight="110%">
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
       templateColumns={["repeat(1,1fr)","repeat(2,1fr)","repeat(2,1fr)","repeat(3,1fr)",]}>
{
    d.map((item)=>(
        <Box 
        width={["fit-content"]}
        >
           <Box bg="rgba(7, 123, 255, 0.1)" borderRadius="5px"
            border="2px solid rgba(7, 123, 255, 0.5)"
           mb="10px" height={["120px","140px","160px","180px","200px","220px"]}
            width={["200px","230px","260px","290px","320px","350px"]}></Box>
           <Heading as='h6' size={["xs","sm","sm","md"]} fontWeight="500">
           Blog Title appear here
  </Heading>
  <Heading as='h6' size={["sm"]} fontWeight="400" opacity="50%">Category name here</Heading>
                   </Box>
    ))
}
       </Grid>
    </Box>
    
  )
}

export default Exclusive