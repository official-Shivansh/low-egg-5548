import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { Grid, useToast, GridItem, Heading, CircularProgress } from '@chakra-ui/react'
import Navbar from "./navbar"
import { Flex, Box, Image, Button, Text } from "@chakra-ui/react"
import Logo from "../images/logo.png"
function Status() {
    
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()
    const [statusData, setstatusData] = useState([]);
    const getstatusdata = () => {
        setLoading(true)
        return axios({
            url: `https://perfume-apii.onrender.com/status`,
            method: "GET",
        }).then((res) => {
            console.log(res.data);
            setLoading(false)
            setstatusData(res.data);
        });
    };

    useEffect(() => {
        getstatusdata();
    }, []);


    const deleteStatus = (id) => {
        axios({
          url: `https://perfume-apii.onrender.com/status/${id}`,
          method: "delete",
        }).then(() => {
            getstatusdata();
        });
      };



    const toast = useToast()
    
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
            {statusData.length===0 ? <Flex lineHeight="100px" flexDirection="column" w="100%" h="350px" justifyContent="center" alignItems="center"><Heading>No Appoinments</Heading>  <Text as="u" color="blue" cursor="pointer" onClick={()=>navigate("/main")}>Book Appoinment</Text></Flex> :loading ? <Flex w="100%" h="350px" justifyContent="center" alignItems="center"><CircularProgress isIndeterminate color='grey' size="70px" /></Flex> :
                <Grid templateColumns='repeat(1, 1fr)' marginTop="3%" gap={6}>

                    {statusData && statusData.map((item) => (
                        <GridItem textAlign="center" margin="auto" p="10px" key={item.id} w='40%' h='auto' bg='#F5F5F5'>
                            <Heading>{item.doctor}</Heading>
                            <Text>Pt Name : {item.firstName}{item.lastName}</Text>
                            <Text>Email : {item.email}</Text>
                            <Text>Date and Time :{item.date}</Text>
                            <Text>Problem :{item.describe}</Text>
                            <Button onClick={() => {

                                toast({
                                    title: 'Cancel Appointment',
                                    description: "",
                                    status: 'info',
                                    duration: 3000,
                                    isClosable: true,
                                    position: 'top'
                                })
                                deleteStatus(item.id)

                                // navigate("/main")
                            }
                            }
                                bg="#ED2939" color='white'>Cancel</Button>
                        </GridItem>


                    ))}

                </Grid>
            }


        </>
    )
}

export default Status;