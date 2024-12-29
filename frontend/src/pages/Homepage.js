import { Container, Box, Text, Tabs } from '@chakra-ui/react'
import React from 'react'
import Login from "../components/Authentication/Login"
import Signup from '../components/Authentication/Signup'

const Homepage = () => {
  return (
    <Container maxW="xl" centerContent>
          <Box
              display="flex"
              justifyContent="center"
              p={3}
              bg={"white"}
              w="100%"
              m="40px 0 15px 0"
              borderRadius="lg"
              borderWidth="1px"
          >
              <Text fontSize="4xl" fontFamily="Work sans" color='black'>
                  Talk-A-Live
              </Text>
          </Box>     
          <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
            <Tabs.Root variant="enclosed" maxW="md" fitted defaultValue={"tab-1"}>
                <Tabs.List mb="1em">
                    <Tabs.Trigger width="50%" value="tab-1">Login</Tabs.Trigger>
                    <Tabs.Trigger width="50%" value="tab-2">Sign Up</Tabs.Trigger>
                  </Tabs.List>
                    <Tabs.Content value="tab-1">
                        <Login/>
                    </Tabs.Content>
                    <Tabs.Content value="tab-2">
                        <Signup />
                    </Tabs.Content>
            </Tabs.Root>
          </Box>
    </Container>
  )
}

export default Homepage