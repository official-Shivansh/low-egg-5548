import { useState, useEffect } from "react";
import axios from "axios";
import { Grid, GridItem, Image, Text, Button } from '@chakra-ui/react'
import Navbar from "./navbar"
import { Flex, Box, useToast, Heading, CircularProgress } from "@chakra-ui/react"
import Logo from "../images/logo.png"
import { useNavigate } from "react-router-dom"

export function Medicine() {

  const navigate = useNavigate()

  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(false);


  const getMedicine = () => {
    setLoading(true)
    return axios({
      method: "get",
      url: `https://perfume-apii.onrender.com/medicine`,
    }).then((res) => {
      console.log(res.data);
      setLoading(false)
      setData(res.data);

    });
  };

  useEffect(() => {
    getMedicine();
  }, []);


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


      <Heading textAlign="center" margin="3%">Buy Medicine</Heading>


      {loading ? <Flex w="100%" h="350px" justifyContent="center" alignItems="center"><CircularProgress isIndeterminate color='grey' size="70px" /></Flex> :
        <Grid templateColumns='repeat(3, 1fr)' gap={6} w="90%" m="auto" marginTop="5%">


          {data?.map((item) => (
            // <div key={item.id}>
            //     <p>{item.url}</p>
            //     <p>{item.price}</p>
            //     <p>{item.title}</p>
            // </div>

            <GridItem boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" borderRadius="15px" textAlign="center" key={item.id} w='100%' p="2%">
              <Image margin="auto" lineHeight="2%" src={item.url} alt="Product Image" />
              <Text>{item.title}</Text>
              <Text>{item.price}</Text>
              <Button onClick={() => {
                toast({
                  title: 'Sucessfully Added',
                  description: "Please go to cart page for chekout",
                  status: 'success',
                  duration: 5000,
                  isClosable: true,
                  position: 'top'
                })
              }

              } bg="black" color="white">Add</Button>
            </GridItem>
          ))}
        </Grid>
      }


      {/* <Grid templateColumns='repeat(3, 1fr)' gap={6} w="90%" m="auto" marginTop="5%">
        
        
        {data?.map((item) => (
          // <div key={item.id}>
          //     <p>{item.url}</p>
          //     <p>{item.price}</p>
          //     <p>{item.title}</p>
          // </div>

          <GridItem boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" borderRadius="15px" textAlign="center" key={item.id} w='100%' p="2%">
            <Image margin="auto" lineHeight="2%" src={item.url} alt="Product Image" />
            <Text>{item.title}</Text>
            <Text>{item.price}</Text>
            <Button onClick={() => {
              toast({
                title: 'Sucessfully Added',
                description: "Please go to cart page for chekout",
                status: 'success',
                duration: 5000,
                isClosable: true,
                position:'top'
              })
            }

            } bg="black" color="white">Add</Button>
          </GridItem>
        ))}
      </Grid> */}
    </>

  )
}



