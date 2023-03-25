import React from 'react'
import { Box, Flex, Grid, Heading } from '@chakra-ui/react'
import Starg from "../images/Starg.png"
import Elipse  from "../images/Ellipse.png"
const Feedback = () => {
    let data=[1,2,3]
    let star=[1,2,3,4,5]
  return (
    <Box width="79%" margin="auto" mt="5rem">
       <Heading as='h2' size='xl'>
       Customers <span style={{color:"rgba(22, 209, 19, 1)"}}>Love</span> our Proxies
        </Heading>
        <Heading as='h6' size='sm' fontWeight="300" width={["80%","80%","60%","35%"]} margin="auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus augue sit amet mollis molestie.
  </Heading>
  <br />
  <Grid
  templateColumns={["repeat(1,1fr)","repeat(1,1fr)","repeat(2,1fr)","repeat(3,1fr)"]}
  gap="2rem">
    {
        data.map((item)=>(
            <Box bg="rgba(30, 30, 30, 0.01)" padding="25px 32px 25px 25px"
            alignItems="left"
            textAlign="left"
            borderRadius="5px"
             border="1px solid rgba(22, 209, 19, 0.5)">
               <Flex mb="19px">{star.map((item)=>(
                <img src={Starg} alt="" />
               )) }</Flex>
               <p style={{fontSize:"17px",opacity:"80%",fontWeight:"400",lineHeight:"110%"}}>“Integer facilisis metus magna, non eleifend est ultricies sit amet. Aliquam vehicula, orci non hendrerit pretium, nibh ante auctor velit, quis convallis tor.”</p>
           <Flex gap="10px" mt="17px" alignItems="center">
            <img src={Elipse} alt="" style={{width:"48px",height:"48px"}}/>
            <Box>
                <h1>ECHO DZNS</h1>
                <p style={{opacity:"80%",fontSize:"16px"}}>Web Designer, CreativeProxies</p>
            </Box>
           </Flex>
            </Box>
        ))
    }
  </Grid>
    </Box>
  )
}

export default Feedback