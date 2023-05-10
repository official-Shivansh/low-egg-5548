import { Box, Flex, Text,Image, Button ,SlideFade} from "@chakra-ui/react";
import { Login } from "./Login";
import landingImage from "../images/docimg/landingImage.png"
import {useState} from "react"

export function Midcontainer() {

    const [loginStatus, setLoginStatus] = useState(false);

    return (
        <>
            <Flex margin="auto" marginTop="2%"  w="90%" h="558px" >
                <Box borderRadius="3%" boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" textAlign="center" w="50%"  h="100%" p="5%">
                    <Text  as="u" fontSize='80px' color='#181818'>
                        We are here to maintain your <Text p="5px" borderRadius="20px" as="mark" bg="#d586ad">Health</Text>
                    </Text>
                
                    <Flex gap='2%' justifyContent="center" m="5%">
                        <Button>About Us</Button>
                        <Login isLoggedIn={(e) => setLoginStatus(e)} />

            
                    </Flex>
                </Box>
                <Box w="50%">
                    <Image src={landingImage} alt="doctor"></Image>
                </Box>
               

            </Flex>
            <Box textAlign="center" color="white" bg="#181818" margin="1%">
                    <Text>© 2023 Health House. All rights reserved.</Text>
                </Box>


        </>
    )
}