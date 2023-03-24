import { Box ,Flex,Text} from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <Box
    width="70%"
    m="auto"
    mt='8rem'
    >
    <div
        style={{
          marginBottom: "10px",
          backgroundColor: "#D9D8D6",
          height: "2px",
          width: "100%",
          margin:"auto"
        }}
      ></div>
      <br />
      <Box>
        <Flex>
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

                <Text
                    ml="10px"
                    fontWeight="bold"
                    fontSize={["20px", "20px", "20px", "26px"]}
                >
                    CreativeProxies
                </Text>
                </Flex>
        </Flex>
      </Box>
    </Box>
  )
}

export default Footer