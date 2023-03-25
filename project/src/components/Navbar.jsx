import React from "react";
import { Flex, Text, Box, Button } from "@chakra-ui/react";
import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate=useNavigate()
  return (
    <Box w={["90%","90%","90%","80%"]} margin="auto" fontSize={["14px", "14px", "15px", "17px"]}>
      <Flex alignItems="center" marginTop="10px" justifyContent="space-between">
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
        <Flex
          display={["none", "none", "none","none", "none","flex"]}
          gap="2rem"
          ml="3rem"
          mr="7rem"
        >
          <p>Pricing</p>
          <p>
            Explore Tools <ChevronDownIcon />
          </p>
          <p>
            Resources <ChevronDownIcon />
          </p>
          <p>FAQS</p>
          <p>Blogs</p>
          <Flex alignItems="center" gap="2px">
            <svg
              width="16"
              height="12"
              viewBox="0 0 16 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.3334 1.75002C13.3334 1.75002 11.8047 0.553354 10.0001 0.416687L9.83741 0.742354C11.4687 1.14202 12.2174 1.71335 13.0001 2.41669C11.6511 1.72802 10.3201 1.08335 8.00008 1.08335C5.68008 1.08335 4.34908 1.72802 3.00008 2.41669C3.78275 1.71335 4.67341 1.07802 6.16275 0.742354L6.00008 0.416687C4.10675 0.59502 2.66675 1.75002 2.66675 1.75002C2.66675 1.75002 0.959748 4.22535 0.666748 9.08335C2.38675 11.0677 5.00008 11.0834 5.00008 11.0834L5.54675 10.3554C4.61875 10.0327 3.57208 9.45702 2.66675 8.41669C3.74608 9.23335 5.37508 10.0834 8.00008 10.0834C10.6251 10.0834 12.2541 9.23335 13.3334 8.41669C12.4284 9.45702 11.3817 10.0327 10.4534 10.3554L11.0001 11.0834C11.0001 11.0834 13.6134 11.0677 15.3334 9.08335C15.0404 4.22535 13.3334 1.75002 13.3334 1.75002ZM5.83341 7.75002C5.18875 7.75002 4.66675 7.15335 4.66675 6.41669C4.66675 5.68002 5.18875 5.08335 5.83341 5.08335C6.47808 5.08335 7.00008 5.68002 7.00008 6.41669C7.00008 7.15335 6.47808 7.75002 5.83341 7.75002ZM10.1667 7.75002C9.52208 7.75002 9.00008 7.15335 9.00008 6.41669C9.00008 5.68002 9.52208 5.08335 10.1667 5.08335C10.8114 5.08335 11.3334 5.68002 11.3334 6.41669C11.3334 7.15335 10.8114 7.75002 10.1667 7.75002Z"
                fill="#5865F2"
              />
            </svg>
            <br />
            <svg
              width="86"
              height="13"
              viewBox="0 0 86 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.312 12.442C2.87467 12.442 2.48 12.378 2.128 12.25C1.78667 12.122 1.48267 11.9567 1.216 11.754C0.949333 11.5407 0.725333 11.306 0.544 11.05C0.362667 10.7833 0.218667 10.5167 0.112 10.25L1.376 9.61C1.57867 10.026 1.83467 10.362 2.144 10.618C2.464 10.874 2.85333 11.002 3.312 11.002C3.68533 11.002 4.04267 10.9167 4.384 10.746C4.72533 10.5753 5.008 10.2927 5.232 9.898C5.456 9.49267 5.568 8.96467 5.568 8.314V1.05H7.136V8.874C7.136 9.46067 7.02933 9.978 6.816 10.426C6.61333 10.8633 6.33067 11.2367 5.968 11.546C5.616 11.8447 5.21067 12.0687 4.752 12.218C4.29333 12.3673 3.81333 12.442 3.312 12.442ZM12.7583 12.442C11.9583 12.442 11.2543 12.266 10.6463 11.914C10.0383 11.5513 9.55825 11.0553 9.20625 10.426C8.86492 9.79667 8.69425 9.07133 8.69425 8.25C8.69425 7.42867 8.86492 6.70333 9.20625 6.074C9.54758 5.44467 10.0223 4.954 10.6303 4.602C11.2383 4.23933 11.9369 4.058 12.7263 4.058C13.5156 4.058 14.2143 4.23933 14.8223 4.602C15.4303 4.954 15.9049 5.44467 16.2463 6.074C16.5876 6.70333 16.7583 7.42867 16.7583 8.25C16.7583 9.07133 16.5876 9.79667 16.2463 10.426C15.9049 11.0553 15.4303 11.5513 14.8223 11.914C14.2249 12.266 13.5369 12.442 12.7583 12.442ZM12.7583 11.05C13.2383 11.05 13.6649 10.9327 14.0383 10.698C14.4116 10.4527 14.6996 10.122 14.9023 9.706C15.1156 9.29 15.2223 8.80467 15.2223 8.25C15.2223 7.69533 15.1156 7.21 14.9023 6.794C14.6996 6.378 14.4063 6.05267 14.0223 5.818C13.6383 5.57267 13.2063 5.45 12.7263 5.45C12.2356 5.45 11.8036 5.57267 11.4303 5.818C11.0569 6.05267 10.7636 6.378 10.5503 6.794C10.3369 7.21 10.2303 7.69533 10.2303 8.25C10.2303 8.80467 10.3369 9.29 10.5503 9.706C10.7636 10.122 11.0623 10.4527 11.4463 10.698C11.8303 10.9327 12.2676 11.05 12.7583 11.05ZM18.1995 12.25L18.2315 4.25H19.7355L19.7195 12.25H18.1995ZM18.9675 2.554C18.7222 2.554 18.5088 2.46333 18.3275 2.282C18.1462 2.09 18.0555 1.87133 18.0555 1.626C18.0555 1.37 18.1462 1.15667 18.3275 0.985999C18.5088 0.804666 18.7222 0.714 18.9675 0.714C19.2235 0.714 19.4368 0.804666 19.6075 0.985999C19.7888 1.15667 19.8795 1.37 19.8795 1.626C19.8795 1.87133 19.7888 2.09 19.6075 2.282C19.4368 2.46333 19.2235 2.554 18.9675 2.554ZM21.6273 12.25V4.25H23.0513L23.1473 5.722V12.25H21.6273ZM27.1633 12.25V8.154L28.6833 7.674V12.25H27.1633ZM27.1633 8.154C27.1633 7.42867 27.0779 6.87933 26.9073 6.506C26.7473 6.122 26.5179 5.85533 26.2193 5.706C25.9313 5.55667 25.5953 5.47667 25.2113 5.466C24.5606 5.466 24.0539 5.69533 23.6913 6.154C23.3286 6.61267 23.1473 7.258 23.1473 8.09H22.4913C22.4913 7.24733 22.6139 6.52733 22.8593 5.93C23.1046 5.322 23.4566 4.858 23.9153 4.538C24.3846 4.218 24.9446 4.058 25.5953 4.058C26.5553 4.058 27.3073 4.35667 27.8513 4.954C28.4059 5.54067 28.6833 6.44733 28.6833 7.674L27.1633 8.154ZM37.6863 12.25V10.778C38.2303 10.778 38.7369 10.6767 39.2063 10.474C39.6756 10.2607 40.0863 9.96733 40.4383 9.594C40.8009 9.21 41.0783 8.76733 41.2703 8.266C41.4729 7.76467 41.5743 7.226 41.5743 6.65C41.5743 6.074 41.4729 5.53533 41.2703 5.034C41.0783 4.53267 40.8009 4.09533 40.4383 3.722C40.0863 3.338 39.6756 3.04467 39.2063 2.842C38.7369 2.62867 38.2303 2.522 37.6863 2.522V1.05C38.7529 1.05 39.6969 1.29 40.5183 1.77C41.3503 2.23933 42.0009 2.89533 42.4703 3.738C42.9396 4.58067 43.1743 5.55133 43.1743 6.65C43.1743 7.738 42.9396 8.70333 42.4703 9.546C42.0009 10.3887 41.3503 11.05 40.5183 11.53C39.6969 12.01 38.7529 12.25 37.6863 12.25ZM35.3663 12.25V10.778H37.6863V12.25H35.3663ZM34.2303 12.25V1.05H35.7983V12.25H34.2303ZM35.3663 2.522V1.05H37.6863V2.522H35.3663ZM44.7008 12.25L44.7328 4.25H46.2368L46.2208 12.25H44.7008ZM45.4688 2.554C45.2234 2.554 45.0101 2.46333 44.8288 2.282C44.6474 2.09 44.5568 1.87133 44.5568 1.626C44.5568 1.37 44.6474 1.15667 44.8288 0.985999C45.0101 0.804666 45.2234 0.714 45.4688 0.714C45.7248 0.714 45.9381 0.804666 46.1088 0.985999C46.2901 1.15667 46.3808 1.37 46.3808 1.626C46.3808 1.87133 46.2901 2.09 46.1088 2.282C45.9381 2.46333 45.7248 2.554 45.4688 2.554ZM50.9925 12.442C50.4272 12.442 49.9205 12.3567 49.4725 12.186C49.0352 12.0153 48.6618 11.786 48.3525 11.498C48.0538 11.21 47.8298 10.8847 47.6805 10.522L48.9925 9.946C49.1632 10.2767 49.4192 10.5487 49.7605 10.762C50.1018 10.9753 50.4805 11.082 50.8965 11.082C51.3552 11.082 51.7338 10.9967 52.0325 10.826C52.3312 10.6553 52.4805 10.4153 52.4805 10.106C52.4805 9.80733 52.3685 9.57267 52.1445 9.402C51.9205 9.23133 51.5952 9.09267 51.1685 8.986L50.4165 8.794C49.6698 8.59133 49.0885 8.28733 48.6725 7.882C48.2672 7.47667 48.0645 7.018 48.0645 6.506C48.0645 5.72733 48.3152 5.12467 48.8165 4.698C49.3178 4.27133 50.0592 4.058 51.0405 4.058C51.5205 4.058 51.9578 4.12733 52.3525 4.266C52.7578 4.40467 53.0992 4.602 53.3765 4.858C53.6645 5.114 53.8672 5.418 53.9845 5.77L52.7045 6.346C52.5765 6.026 52.3578 5.79133 52.0485 5.642C51.7392 5.482 51.3765 5.402 50.9605 5.402C50.5338 5.402 50.1978 5.498 49.9525 5.69C49.7072 5.87133 49.5845 6.12733 49.5845 6.458C49.5845 6.63933 49.6858 6.81533 49.8885 6.986C50.1018 7.146 50.4112 7.27933 50.8165 7.386L51.6805 7.594C52.2032 7.722 52.6352 7.91933 52.9765 8.186C53.3178 8.442 53.5738 8.73533 53.7445 9.066C53.9152 9.386 54.0005 9.722 54.0005 10.074C54.0005 10.554 53.8672 10.9753 53.6005 11.338C53.3445 11.69 52.9872 11.962 52.5285 12.154C52.0805 12.346 51.5685 12.442 50.9925 12.442ZM58.9096 12.442C58.1096 12.442 57.4003 12.266 56.7816 11.914C56.163 11.5513 55.6776 11.0553 55.3256 10.426C54.9843 9.79667 54.8136 9.07133 54.8136 8.25C54.8136 7.42867 54.9843 6.70333 55.3256 6.074C55.6776 5.44467 56.1576 4.954 56.7656 4.602C57.3843 4.23933 58.0883 4.058 58.8776 4.058C59.6563 4.058 60.355 4.23933 60.9736 4.602C61.603 4.96467 62.0723 5.482 62.3816 6.154L61.0056 6.73C60.803 6.33533 60.5096 6.026 60.1256 5.802C59.7523 5.578 59.3203 5.466 58.8296 5.466C58.3496 5.466 57.923 5.58333 57.5496 5.818C57.1763 6.05267 56.883 6.38333 56.6696 6.81C56.4563 7.226 56.3496 7.706 56.3496 8.25C56.3496 8.794 56.4563 9.274 56.6696 9.69C56.883 10.106 57.1816 10.4367 57.5656 10.682C57.9496 10.9167 58.3816 11.034 58.8616 11.034C59.3523 11.034 59.7896 10.9113 60.1736 10.666C60.5576 10.41 60.8456 10.0687 61.0376 9.642L62.4296 10.202C62.1203 10.906 61.651 11.4553 61.0216 11.85C60.403 12.2447 59.699 12.442 58.9096 12.442ZM67.2295 12.442C66.4295 12.442 65.7255 12.266 65.1175 11.914C64.5095 11.5513 64.0295 11.0553 63.6775 10.426C63.3362 9.79667 63.1655 9.07133 63.1655 8.25C63.1655 7.42867 63.3362 6.70333 63.6775 6.074C64.0188 5.44467 64.4935 4.954 65.1015 4.602C65.7095 4.23933 66.4082 4.058 67.1975 4.058C67.9868 4.058 68.6855 4.23933 69.2935 4.602C69.9015 4.954 70.3762 5.44467 70.7175 6.074C71.0588 6.70333 71.2295 7.42867 71.2295 8.25C71.2295 9.07133 71.0588 9.79667 70.7175 10.426C70.3762 11.0553 69.9015 11.5513 69.2935 11.914C68.6962 12.266 68.0082 12.442 67.2295 12.442ZM67.2295 11.05C67.7095 11.05 68.1362 10.9327 68.5095 10.698C68.8828 10.4527 69.1708 10.122 69.3735 9.706C69.5868 9.29 69.6935 8.80467 69.6935 8.25C69.6935 7.69533 69.5868 7.21 69.3735 6.794C69.1708 6.378 68.8775 6.05267 68.4935 5.818C68.1095 5.57267 67.6775 5.45 67.1975 5.45C66.7068 5.45 66.2748 5.57267 65.9015 5.818C65.5282 6.05267 65.2348 6.378 65.0215 6.794C64.8082 7.21 64.7015 7.69533 64.7015 8.25C64.7015 8.80467 64.8082 9.29 65.0215 9.706C65.2348 10.122 65.5335 10.4527 65.9175 10.698C66.3015 10.9327 66.7388 11.05 67.2295 11.05ZM73.5028 7.946C73.5028 7.082 73.6681 6.378 73.9988 5.834C74.3294 5.29 74.7561 4.88467 75.2788 4.618C75.8014 4.35133 76.3508 4.218 76.9268 4.218V5.658C76.4468 5.658 75.9881 5.73267 75.5508 5.882C75.1241 6.02067 74.7721 6.25533 74.4948 6.586C74.2281 6.906 74.0948 7.34333 74.0948 7.898L73.5028 7.946ZM72.5748 12.25V4.25H74.0948V12.25H72.5748ZM83.6889 12.25L83.6249 10.762V1.05H85.1289V12.25H83.6889ZM81.0009 12.442C80.2755 12.442 79.6409 12.266 79.0969 11.914C78.5635 11.562 78.1422 11.0713 77.8329 10.442C77.5342 9.81267 77.3849 9.082 77.3849 8.25C77.3849 7.40733 77.5342 6.67667 77.8329 6.058C78.1422 5.42867 78.5635 4.938 79.0969 4.586C79.6409 4.234 80.2755 4.058 81.0009 4.058C81.6729 4.058 82.2542 4.234 82.7449 4.586C83.2462 4.938 83.6302 5.42867 83.8969 6.058C84.1635 6.67667 84.2969 7.40733 84.2969 8.25C84.2969 9.082 84.1635 9.81267 83.8969 10.442C83.6302 11.0713 83.2462 11.562 82.7449 11.914C82.2542 12.266 81.6729 12.442 81.0009 12.442ZM81.3529 11.066C81.8009 11.066 82.1955 10.9487 82.5369 10.714C82.8782 10.4687 83.1449 10.138 83.3369 9.722C83.5289 9.29533 83.6249 8.80467 83.6249 8.25C83.6249 7.69533 83.5289 7.21 83.3369 6.794C83.1449 6.36733 82.8782 6.03667 82.5369 5.802C82.1955 5.55667 81.7955 5.434 81.3369 5.434C80.8675 5.434 80.4515 5.55667 80.0889 5.802C79.7262 6.03667 79.4435 6.36733 79.2409 6.794C79.0382 7.21 78.9369 7.69533 78.9369 8.25C78.9369 8.80467 79.0382 9.29533 79.2409 9.722C79.4542 10.138 79.7422 10.4687 80.1049 10.714C80.4675 10.9487 80.8835 11.066 81.3529 11.066Z"
                fill="#5865F2"
              />
            </svg>
            <div
              style={{
                backgroundColor: "#D9D8D6",
                height: "20px",
                width: "1px",
                marginLeft: "10px",
                marginRight: "10px",
              }}
            ></div>
            <p>Log in</p>
          </Flex>
        </Flex>
        <Flex alignItems="center" gap="5px">
          <Button colorScheme="messenger"
           onClick={()=>navigate("/locationcheck")}
           fontSize= {["sm","sm","sm",'xl']}
          >Get Started</Button>
          <Box
            display={["block", "block", "block","block", "block", "none"]}
            paddingTop="3px"
            height="37px"
            width="37px"
            bg="rgba(7, 123, 255, 0.25)"
          >
            <HamburgerIcon color="#077BFF" />
          </Box>
        </Flex>
      </Flex>
      <div
        style={{
          marginTop: "10px",
          backgroundColor: "#D9D8D6",
          height: "2px",
          width: "100%",
        }}
      ></div>
    </Box>
  );
};

export default Navbar;
