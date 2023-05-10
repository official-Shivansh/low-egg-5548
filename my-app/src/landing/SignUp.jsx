import {
 Button, Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton, useDisclosure, FormControl,
    FormLabel,
    Input
} from '@chakra-ui/react'
import React from 'react'

export function SignUp() {
    const OverlayOne = () => (
        <ModalOverlay
            bg='blackAlpha.300'
            backdropFilter='blur(10px) hue-rotate(90deg)'
        />
    )

    const OverlayTwo = () => (
        <ModalOverlay
            bg='none'
            backdropFilter='auto'
            backdropInvert='80%'
            backdropBlur='2px'
        />
    )

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [overlay, setOverlay] = React.useState(<OverlayOne />)

    return (
        <>
            <Button
                ml='4'
                onClick={() => {
                    setOverlay(<OverlayTwo />)
                    onOpen()
                }}
                color="white"
                bg="black"
            >
                SignUp
            </Button>
            <Modal isCentered isOpen={isOpen} onClose={onClose}>
                {overlay}
                <ModalContent>
                    <ModalHeader>Create an account</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <FormControl isRequired>
                            <FormLabel>First Name</FormLabel>
                            <Input placeholder='First Name' />
                            <FormLabel>Last Name</FormLabel>
                            <Input placeholder='Last Name ' />
                            <FormLabel>Email</FormLabel>
                            <Input placeholder='Email ' />
                            <FormLabel>Password</FormLabel>
                            <Input placeholder='Password ' />
                            <Button
                                mt={4}
                                color="white"
                                bg="black"
                                type='submit'
                            >
                                Submit
                            </Button>
                        </FormControl>
                    </ModalBody>

                </ModalContent>
            </Modal>
        </>
    )
}