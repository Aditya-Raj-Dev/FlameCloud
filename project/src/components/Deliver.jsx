
import React from 'react'
import { ArrowForwardIcon, CheckIcon } from '@chakra-ui/icons'
import { Box, Button, Flex, Grid, Heading, Text } from '@chakra-ui/react'

const Deliver = () => {
  return (
    <Box     width={["90%","90%","90%","60%" ]}margin="auto" mt="177px">
        <Heading as='h2' size='xl'>
        You choose, we <span style={{color:"rgba(7, 123, 255, 1)"}}>Deliver!</span>
        </Heading>
        <Text  opacity="50%" 
        width={["80%","80%","60%","55%"]} 
        margin="auto" mt="10px" mb="92px"  fontWeight="semibold" fontSize="18px">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus augue sit amet mollis molestie.
  </Text>
  <Box 
  width={["100%","100%","100%","75%"]} margin="auto" >
    <Grid   
    gap="2rem"
    textAlign="left"  
    templateColumns={["repeat(1,1fr)","repeat(1,1fr)","repeat(2,1fr)"]}
    >
   
        <Box p="25px" borderRadius="10px"
        maxWidth="450px"
        height="fit-content"
        border="0.5px solid rgba(30, 30, 30, 0.1)" bg="rgba(30, 30, 30, 0.01)">
           <Flex justifyContent="space-between">
              <Box>
                     <Box bg="rgba(46, 115, 232, 1)" p="10px" borderRadius="10px"
                     height="40px" width="40px" color="white" mb="8px">
                        v4  
                     </Box>
                     <Text fontSize="20px" fontWeight="600" mb="8px">
                     IPv4 Proxies
                     </Text>
                     <p style={{color:"gray"}}>Static/Rotating</p>
              </Box>
              <Box color="gray" textAlign="left">
                    
              <Heading as='h6' size='xs' fontSize="14px" fontWeight="medium">
                   FROM
                </Heading>
                     <Heading as='h5' size='md' fontWeight="medium">
                     <span style={{color:"rgba(7, 123, 255, 1)"}}> $4.75</span>/day
                     </Heading>
                     <Heading as='h6' size='xs' fontSize="14px" fontWeight="medium">
                     OR
                </Heading>
                <Heading as='h5' size='md' fontWeight="medium">
                     <span style={{color:"rgba(7, 123, 255, 1)"}}> $116.75</span>/mo
                     </Heading>
              </Box>
           </Flex>
           <br />
           <Box width="100%" margin="auto"  border="1px solid rgba(30, 30, 30, 0.1)"></Box>
         <br />
         <p style={{color:"gray",fontSize:"16px"}}>Plan Includes :</p>
          <Box  fontSize="16px">
            <Flex alignItems="center" gap="10px">     
              <CheckIcon color="rgba(7, 123, 255, 1)"/>
              <Text>100 Threads</Text>
            </Flex>
            <Flex alignItems="center" gap="10px">     
              <CheckIcon color="rgba(7, 123, 255, 1)"/>
              <Text>Dedicated IP Pool</Text>
            </Flex>
            <Flex alignItems="center" gap="10px">     
              <CheckIcon color="rgba(7, 123, 255, 1)"/>
              <Text>Residential Proxy</Text>
            </Flex>
            <Flex alignItems="center" gap="10px">     
              <CheckIcon color="rgba(7, 123, 255, 1)"/>
              <Text>Unlimited Bandwidth</Text>
            </Flex>
            <Flex alignItems="center" gap="10px">     
              <CheckIcon color="rgba(7, 123, 255, 1)"/>
              <Text>Worldwide Locations</Text>
            </Flex>
      <br />
      <Box width="100%" margin="auto" border="1px solid rgba(30, 30, 30, 0.1)"></Box>
          </Box>
          <br />
          <Button colorScheme="twitter" width="100%"
          fontSize="18px"
          borderBottom="5px solid #0566D4" rightIcon={<ArrowForwardIcon/>}>
            View Pricing
          </Button>
        </Box>

        <Box p="25px" maxWidth="450px" borderRadius="10px" bg="rgba(22, 209, 19, 0.1)" border="1px solid rgba(217, 216, 214, 1)">
           <Flex justifyContent="space-between"  >
              <Box >
                     <Box bg="rgba(37, 205, 8, 1)" p="10px" borderRadius="10px"
                     height="40px" width="40px" color="white" mb="8px">
                        v6
                     </Box>
                     <Text fontSize="20px" fontWeight="600" mb="8px">
                     IPv4 Proxies
                     </Text>
                     <p style={{color:"gray"}}>Static/Rotating</p>
              </Box>
              <Box color="gray" textAlign="left">
                    
              <Heading as='h6' size='xs' fontSize="14px" fontWeight="medium">
                   FROM
                </Heading>
                     <Heading as='h5' size='md' fontWeight="medium">
                     <span style={{color:"rgba(37, 205, 8, 1)"}}> $4.75</span>/day
                     </Heading>
                     <Heading as='h6' size='xs' fontSize="14px" fontWeight="medium">
                     OR
                </Heading>
                <Heading as='h5' size='md' fontWeight="medium">
                     <span style={{color:"rgba(37, 205, 8, 1)"}}> $116.75</span>/mo
                     </Heading>
              </Box>
           </Flex>
           <br />
           <Box width="100%" margin="auto" fontSize="16px" border="1px solid rgba(30, 30, 30, 0.1)"></Box>
          <br />
           <p style={{color:"gray"}}>Plan Includes :</p>
          <Box fontSize="16px">
            <Flex alignItems="center" gap="10px">     
              <CheckIcon color="rgba(7, 123, 255, 1)"/>
              <Text>100 Threads</Text>
            </Flex>
            <Flex alignItems="center" gap="10px">     
              <CheckIcon color="rgba(7, 123, 255, 1)"/>
              <Text>Dedicated IP Pool</Text>
            </Flex>
            <Flex alignItems="center" gap="10px">     
              <CheckIcon color="rgba(7, 123, 255, 1)"/>
              <Text>Residential Proxy</Text>
            </Flex>
            <Flex alignItems="center" gap="10px">     
              <CheckIcon color="rgba(7, 123, 255, 1)"/>
              <Text>Unlimited Bandwidth</Text>
            </Flex>
            <Flex alignItems="center" gap="10px">     
              <CheckIcon color="rgba(7, 123, 255, 1)"/>
              <Text>Worldwide Locations</Text>
            </Flex>
            <Flex alignItems="center" gap="10px">     
              <CheckIcon color="#16D113"/>
              <Text>Dedicated Subnets</Text>
            </Flex>
            <Flex alignItems="center" gap="10px">     
              <CheckIcon color="#16D113"/>
              <Text>1 Octilion IPS</Text>
            </Flex>
            <Flex alignItems="center" gap="10px">     
              <CheckIcon color="#16D113"/>
              <Text>Septiltion per Location</Text>
            </Flex>
      <br />
      <Box width="100%" margin="auto" border="1px solid rgba(30, 30, 30, 0.1)"></Box>
          </Box>
          <br />
          <Button bg="#16D113" width="100%"
          fontSize="18px" color="white"
          borderBottom="5px solid #0EB726" rightIcon={<ArrowForwardIcon/>}>
            View Pricing
          </Button>
        </Box>
    </Grid>
    </Box>
    <br />
 
    </Box>
  )
}

export default Deliver