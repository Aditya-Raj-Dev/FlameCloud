import { Box ,Grid,Heading, textDecoration} from '@chakra-ui/react'
import React from 'react'
import { ArrowForwardIcon } from "@chakra-ui/icons";
const Exclusive = () => {
    let d=[1,2,3,4,5,6]
  return (
   
    <Box 
    
    bg="rgba(30, 30, 30, 0.01)"
    width={["90%","90%","80%","70%"]}
    m="auto"
    mt="8rem"
     border="1px solid rgba(30, 30, 30, 0.1)"
     p={["5px","20px 25px 10px 25px"]}
     >
<Heading as='h2' size={["md","lg",'xl']}>
Read our <span style={{color:"rgba(7, 123, 255, 1)"}}>Exclusive </span> Blog
        </Heading>
        <Heading as='h6' size={["xs","xs",'sm']} fontWeight="300" width={["80%","80%","60%","35%"]} margin="auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus augue sit amet mollis molestie.
  </Heading>
    <p style={{color:"rgba(7, 123, 255, 1)",cursor:"pointer"}}>Read All Blogs < ArrowForwardIcon/> </p>
      <br />
       <Grid
       placeItems="center"
       textAlign="left"
       gap="2rem"
       templateColumns={["repeat(2,1fr)","repeat(2,1fr)","repeat(2,1fr)","repeat(3,1fr)",]}>
{
    d.map((item)=>(
        <Box>
           <Box bg="rgba(7, 123, 255, 0.1)" borderRadius="5px"
            border="1px solid rgba(7, 123, 255, 0.5)"
           mb="10px" height={["65px","80px","100px","130px"]} width={["130px","150px","200px","240px"]}></Box>
           <Heading as='h6' size={["xs","sm","sm","md"]} fontWeight="400">
           Blog Title appear here
  </Heading>
  <Heading as='h6' size={["xs"]} fontWeight="200">Category name here</Heading>
                   </Box>
    ))
}
       </Grid>
    </Box>
    
  )
}

export default Exclusive