import { Flex, Box, Heading, Text, Image } from "@chakra-ui/react"
import MyApp from "./Calendar"
import { SeeAll } from "./SeeAll"
export function MainBody() {
    return (
        <>
            <Flex m="auto" marginTop="3%" h="590px" w="90%">
                <Box h="590px" w="40%">
                    <Flex textAlign="left">
                        <Box width="60%" p="5px">
                            <Heading as="h1" size="lg">Hi Shivansh.</Heading>
                            <Heading>Check your Health!</Heading>
                        </Box>
                        <Box margin="auto" width="40%" textAlign="center">
                            <Text borderRadius="25px" p="6px" bg="#def1ef" color="#0ebc92">Healthy</Text>
                        </Box>
                    </Flex>
                    <Flex h="200px" justifyContent="space-around">
                        <Box textAlign="center" boxShadow=" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" w="30%" borderRadius="25px" p="15px">
                            <Text fontSize="20px">16.4 <span style={{ color: "gray" }}>g/dl </span></Text>
                            <Image h="70%" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Hemoglobin_saturation_curve.svg/1210px-Hemoglobin_saturation_curve.svg.png" />
                            <Text>Hemoglobin</Text>
                        </Box>
                        <Box textAlign="center" boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" w="30%" borderRadius="25px" p="15px">
                            <Text fontSize="20px">100 <span style={{ color: "gray" }}>80 mm/Hg</span></Text>
                            <Image h="70%" src="https://i.stack.imgur.com/llUjt.png" />
                            <Text>Blood Pressure</Text>
                        </Box>

                    </Flex>
                    <Box textAlign="center" borderRadius="25px" boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" marginTop="10px" p="10px">
                        <Text>How you should check your health details by your own?</Text>
                        <Image marginLeft="100px" h="200px" w="350px" src="https://static.scientificamerican.com/sciam/cache/file/0A74E816-2CA4-485D-99904C22741BA314.jpg" />
                    </Box>
                </Box>
                <Box w="60%" >
                    <Flex w="100%">
                        {/* <Box  w="60%" border="1px solid black"><MyApp/></Box> */}
                        <Flex justifyContent="center" w="60%" ><MyApp /></Flex>
                        <Box borderRadius="20px" p="2%" w="40%" boxShadow= "rgba(0, 0, 0, 0.35) 0px 5px 15px">
                           <Flex justifyContent="space-between"> <Heading size="sm">Informations</Heading> <SeeAll/> </Flex>
                            <Text marginTop="2%" color='grey'>
                                Details
                            </Text>
                            <Flex p="2%" justifyContent="space-around" borderRadius="20px" bg="#f7f6f9" w="300px" h="50px" >
                                <Box> <Text>Blood</Text> <Heading fontSize="16px">A+</Heading></Box>
                                <Box> <Text>Height</Text> <Heading fontSize="16px">170cm</Heading></Box>
                                <Box> <Text>Weight</Text> <Heading fontSize="16px">80kg</Heading></Box>
                               
                            </Flex>
                            <Text marginTop="2%" color='grey'>
                                Doctor
                            </Text>
                            <Flex p="2%" alignItems="center" justifyContent="space-around" borderRadius="20px" bg="#f7f6f9" w="300px" h="50px" >
                                <Box><Image h="30px" w="30px" borderRadius="100%" src="https://i.kinja-img.com/gawker-media/image/upload/t_original/ijsi5fzb1nbkbhxa2gc1.png"/></Box>
                                <Box><Image h="30px" w="30px" borderRadius="100%" src="https://i.kinja-img.com/gawker-media/image/upload/t_original/ijsi5fzb1nbkbhxa2gc1.png"/></Box>
                                <Box><Image h="30px" w="30px" borderRadius="100%" src="https://i.kinja-img.com/gawker-media/image/upload/t_original/ijsi5fzb1nbkbhxa2gc1.png"/></Box>
                                <Box><Image h="30px" w="30px" borderRadius="100%" src="https://i.kinja-img.com/gawker-media/image/upload/t_original/ijsi5fzb1nbkbhxa2gc1.png"/></Box>
                                <Box><Image h="30px" w="30px" borderRadius="100%" src="https://i.kinja-img.com/gawker-media/image/upload/t_original/ijsi5fzb1nbkbhxa2gc1.png"/></Box>
                                <Box><Image h="30px" w="30px" borderRadius="100%" src="https://i.kinja-img.com/gawker-media/image/upload/t_original/ijsi5fzb1nbkbhxa2gc1.png"/></Box>
                            </Flex>
                            <Text marginTop="2%" color='grey'>
                                Payments
                            </Text>
                            <Flex bgGradient='linear(to-r,pink.300, yellow.200, green.300)' alignItems="center" justifyContent="space-around" borderRadius="20px"  w="300px" h="50px" >
                                <Box> <Text>1426</Text> </Box>
                                <Box> <Text>7452</Text> </Box>
                                <Box> <Text>5400</Text></Box>
                                <Box> <Text>1325</Text></Box>
                               
                            </Flex>
                        </Box>
                    </Flex>
                    <Box h="270px" marginTop="10px" w="100%"p="3%">
                        <Text textAlign="center"> We have Specialists </Text>
                    <Flex m="10px" justifyContent="space-around" >
                        <Box p="2%" textAlign="center" h="100%" boxShadow= "rgba(0, 0, 0, 0.35) 0px 5px 15px">
                            <Image h="120px" w="120px" borderRadius="50%" src="https://cdn3.vectorstock.com/i/1000x1000/78/32/male-doctor-with-stethoscope-avatar-vector-31657832.jpg"/>
                            <Text>Dr. Matt Ricky</Text>
                            <Text>Cardiologists</Text>
                            </Box>
                        <Box p="2%" textAlign="center" h="100%" boxShadow= "rgba(0, 0, 0, 0.35) 0px 5px 15px">
                            <Image h="120px" w="120px" borderRadius="50%" src="https://cdn3.vectorstock.com/i/1000x1000/78/32/male-doctor-with-stethoscope-avatar-vector-31657832.jpg"/>
                            <Text>Dr. Stevens</Text>
                            <Text>Anesthesiologists</Text>
                            </Box>
                        <Box p="2%" textAlign="center" h="100%" boxShadow= "rgba(0, 0, 0, 0.35) 0px 5px 15px">
                            <Image h="120px" w="120px" borderRadius="50%" src="https://cdn3.vectorstock.com/i/1000x1000/78/32/male-doctor-with-stethoscope-avatar-vector-31657832.jpg"/>
                            <Text>Dr. Preston</Text>
                            <Text>Dermatologists</Text>
                            </Box>
                        <Box p="2%" textAlign="center" h="100%" boxShadow= "rgba(0, 0, 0, 0.35) 0px 5px 15px">
                            <Image h="120px" w="120px" borderRadius="50%" src="https://cdn3.vectorstock.com/i/1000x1000/78/32/male-doctor-with-stethoscope-avatar-vector-31657832.jpg"/>
                            <Text>Dr. Avery</Text>
                            <Text>Family Physicians</Text>
                            </Box>
                    </Flex>
                    </Box>
                </Box>
            </Flex>


        </>
    )
}