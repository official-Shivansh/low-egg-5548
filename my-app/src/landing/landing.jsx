import {
  Box, Image, Flex, Button, Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import { SignUp } from "../landing/SignUp"
import { Midcontainer } from './Midcontainer'
import Logo from "../images/logo.png"
const Landing = () => {
  return (
    <>

      <Flex justifyContent="center" bg='white' w='100%' h="100px" p={4} color='white'>

        <Box w="550px" boxSize='200px'>

          <Image src={Logo} alt='Dan Abramov' />
        </Box>


        <Flex alignItems="center" justifyContent="flex-end" w="70%" >


          <SignUp />

        </Flex>
      </Flex>
      <Box margin="auto" border="1px solid black" w="90%"></Box>
      <Midcontainer/>

    </>
  )
}

export default Landing