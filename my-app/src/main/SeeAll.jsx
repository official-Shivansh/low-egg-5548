import {
    Button, Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton, useDisclosure, FormControl,
    FormLabel,
    Input, Text, Textarea, Select
} from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import { useReducer } from "react"

const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    date: "",
    doctor: "",
    describe: "",

};

const reducer = (state, action) => {
    switch (action.type) {
        case "UpdatefirstName": {
            return {
                ...state,
                firstName: action.payload,
            };
        }
        case "UpdatelastName": {
            return {
                ...state,
                lastName: action.payload,
            };
        }
        case "Updateemail": {
            return {
                ...state,
                email: action.payload,
            };
        }
        case "Updatedate": {
            return {
                ...state,
                date: action.payload,
            };
        }
        case "Updatedescribe": {
            return {
                ...state,
                describe: action.payload,
            };
        }
        case "Update_form": {
            return {
                // ...state,
                // cartItems : [...state.cartItems, action.payload]
                ...initialState,
            };
        }
        case "Updatedoctor": {
            return {
                ...state,
                doctor: action.payload,
            };
        }
        default:
            throw new Error(`actiontype ${action.type} not supported`);
    }
};




export function SeeAll() {
    const [state, dispatch] = useReducer(reducer, initialState);
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

    const navigate = useNavigate()

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [overlay, setOverlay] = React.useState(<OverlayOne />)


    const updateForm = (e) => {
        e.preventDefault();

        console.log("state", state)
        return axios({
            method: "post",
            url: `https://perfume-apii.onrender.com/status`,
            data: state,
        }).then((res) => {
            console.log(res);
            dispatch({
                type: "Update_form"
            })

            navigate("/status")
        })
    }

    return (
        <>
            <Text as="u"
                ml='4'
                onClick={() => {
                    setOverlay(<OverlayTwo />)
                    onOpen()
                }}
                color="black"
                cursor="pointer"

            >
                Book Appointment
            </Text>
            <Modal isCentered isOpen={isOpen} onClose={onClose}>
                {overlay}
                <ModalContent>
                    <ModalHeader>Book Your Appointment</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <form onSubmit={updateForm}>


                            <FormControl isRequired>
                                <FormLabel>First Name</FormLabel>
                                <Input value={state.firstName}
                                    onChange={(e) => {
                                        dispatch({ type: "UpdatefirstName", payload: e.target.value });
                                    }} placeholder='First Name' />
                                <FormLabel>Last Name</FormLabel>
                                <Input value={state.lastName}
                                    onChange={(e) => {
                                        dispatch({ type: "UpdatelastName", payload: e.target.value });
                                    }} placeholder='Last Name ' />
                                <FormLabel>Email</FormLabel>
                                <Input value={state.email}
              onChange={(e) => {
                dispatch({ type: "Updateemail", payload: e.target.value });
              }} placeholder='Email ' />
                                <FormLabel>Date and Time</FormLabel>
                                <Input
                                value={state.date}
                                onChange={(e) => {
                                  dispatch({ type: "Updatedate", payload: e.target.value });
                                }}
                                    placeholder="Select Date and Time"
                                    size="md"
                                    type="datetime-local"
                                />
                                <FormLabel>Select Docter</FormLabel>
                                <Select value={state.doctor}
              onChange={(e) => {
                dispatch({ type: "Updatedoctor", payload: e.target.value });
              }} placeholder='Select Doctor'>
                                    <option value='Dr. Matt Ricky'>Dr. Matt Ricky (Cardiologists)</option>
                                    <option value='Dr. Stevens'>Dr. Stevens (Anesthesiologists)</option>
                                    <option value='Dr. Preston'>Dr. Preston (Dermatologists)</option>
                                    <option value='Dr. Avery'>Dr. Avery (Family Physicians)</option>
                                </Select>
                                <FormLabel>Describe Your Problem</FormLabel>
                                <Textarea value={state.describe}
              onChange={(e) => {
                dispatch({ type: "Updatedescribe", payload: e.target.value });
              }} placeholder='Write Here....... ' />
                                <Button
                                    mt={4}
                                    color="white"
                                    bg="black"
                                    type='submit'
                                >
                                    Book Session
                                </Button>
                            </FormControl>
                        </form>
                    </ModalBody>

                </ModalContent>
            </Modal>
        </>
    )
}