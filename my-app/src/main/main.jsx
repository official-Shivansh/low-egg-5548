import Navbar from "./navbar"
import { Flex, Box, Image, Button } from "@chakra-ui/react"
import Logo from "../images/logo.png"
import { useNavigate } from "react-router-dom"
import { MainBody } from "./MainBody"
export function Main() {

    const navigate = useNavigate()
    return (
        <>
            <Flex justifyContent="center" w='100%' h="100px" p={4} >

                <Box w="550px" boxSize='200px'>
                    <Image src={Logo} alt='Dan Abramov' />
                </Box>


                <Flex alignItems="center" justifyContent="center" w="50%" >
                    <Navbar />
                </Flex>
                <Flex justifyContent="space-evenly" alignItems="center" w="20%" >
                    <Image title="User Photo" borderRadius="50%" h="40px" src="https://ca.slack-edge.com/T05661M4725-U056LJFQMCK-dcd7fa884f39-512" alt="user" />
                    <Button title="LogOut" onClick={() => {
                        navigate("/")
                    }
                    }>LogOut</Button>
                </Flex>
            </Flex>
            <Box margin="auto" border="1px solid black" w="90%"></Box>
            {/* <MyApp /> */}
            <MainBody />



        </>
    )


}




