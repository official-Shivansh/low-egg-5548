import {
    Button, Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton, useDisclosure, FormControl,
    FormLabel,
    Input, InputGroup, InputRightElement
} from '@chakra-ui/react'

import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from "react"
import { useToast } from '@chakra-ui/react'

export function Login({ isLoggedIn }) {


    const OverlayTwo = () => (
        <ModalOverlay
            bg='none'
            backdropFilter='auto'
            backdropInvert='80%'
            backdropBlur='2px'
        />
    )

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [overlay, setOverlay] = React.useState(<OverlayTwo />)

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginStatus, setLoginStatus] = useState("");
    const navigate = useNavigate();


    const toast = useToast()
    const handleForm = async (e) => {
        e.preventDefault();

        let res = await fetch(`https://perfume-apii.onrender.com/user`);
        let data = await res.json();
        console.log(data);

        const users = data;

        const user = users.find(
            (user) => user.email === email && user.password === password
        );
        if (user) {
            console.log("user", user);
            console.log("LoggedIn");
            isLoggedIn(user);
            // login(user);
            toast({
                title: 'Login Sucessfully',
                description: "Health is wealth, invest wisely.",
                status: 'success',
                duration: 2000,
                isClosable: true,
                position: 'top',
              })

            await navigate("/main");
        } else {
            console.log("error");
            toast({
                title: 'Wrong Credentials',
                description: "Please enter your valid credentials",
                status: 'error',
                duration: 2000,
                isClosable: true,
                position: 'top',
              })
          
            setLoginStatus(false);
        }
    };


    useEffect(() => {
        handleForm();
    }, []);

    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)

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
                LogIn
            </Button>
            <Modal isCentered isOpen={isOpen} onClose={onClose}>
                {overlay}
                <ModalContent>
                    <ModalHeader>Log In</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <FormControl isRequired>

                            <FormLabel>Email</FormLabel>
                            <Input placeholder='Email '
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value)
                                }}
                            />
                            <FormLabel>Password</FormLabel>
                            <InputGroup size='md'>
                                <Input
                                    pr='4.5rem'
                                    type={show ? 'text' : 'password'}
                                    placeholder='Enter password'

                                    value={password}

                                    onChange={(e) => {
                                        setPassword(e.target.value)
                                    }}
                                />
                                <InputRightElement width='4.5rem'>
                                    <Button h='1.75rem' size='sm' onClick={handleClick}>
                                        {show ? 'Hide' : 'Show'}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                            <Button
                                mt={4}
                                color="white"
                                bg="black"
                                type='submit'
                                onClick={handleForm}

                            >
                                LogIn
                            </Button>
                            {loginStatus && <p>Wrong email or password</p>}
                        </FormControl>

                    </ModalBody>

                </ModalContent>
            </Modal>
        </>
    )
}