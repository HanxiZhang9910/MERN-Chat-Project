import { VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Button, Fieldset, Input, Stack } from "@chakra-ui/react"
import { Field } from "../ui/field"
import { createToaster } from "@chakra-ui/react";
import axios from "axios";
import { useHistory } from "react-router-dom"

const toaster = createToaster();

const Login = () => {
    const [password, setPassword] = useState()
    const [email, setEmail] = useState()
    // const [loading, setLoading] = useState(false)
    const history = useHistory();
    
    const submitHandler = async () => {
        // setLoading(true);
        if (!email || !password) {
            alert("Please Fill all the fields!")
            // toaster.create({
            //     title: "Please Fill all the fields!",
            //     status: "warning", // options: "success", "error", "warning", "info"
            //     duration: 5000,  // duration in ms
            //     isClosable: true,
            //     position: "bottom", // options: "top", "top-right", "bottom", etc.
            // });
            // setLoading(false);
            return;
        }

        try {
            const config = {
                headers: {
                    "Content-type": "application/json",
                },
            };

            const { data } = await axios.post(
                "/api/user/login",
                { email, password },
                config
            );
            alert("Login successful")
            // toaster.create({
            //     title: "Login Successful",
            //     status: "success", 
            //     duration: 5000,  
            //     isClosable: true,
            //     position: "bottom", 
            // });
            localStorage.setItem("userInfo", JSON.stringify(data));
            // setLoading(false);
            history.push("/chats");
        } catch (error) {
            alert("Please input valid credentials!")
            console.log("Please input valid credentials!")
            // setLoading(false);
        }
    }

    return (
        <VStack color="black">
             <Fieldset.Root size="lg" maxW="md">

            <Fieldset.Content>
                <Field label="Email">
                    <Input name="email"
                        placeholder='Enter Your Email'
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}/>
                </Field>
                    
                <Field label="Password">     
                    <Input name="password"
                        placeholder='Enter Your Password'
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}/>
                </Field>
                    
            </Fieldset.Content>

            </Fieldset.Root>
            <Button type="submit" bg="green.500" _hover={{ bg: "green.600" }} colorScheme="blue" alignSelf="center" width="100%" onClick={submitHandler} >
                Login
            </Button>

            <Button variant="solid" bg="red.500" _hover={{ bg: "red.600" }} alignSelf="center" width="100%" onClick={() => {
                setEmail("guest@example.com")
                setPassword("123456")
            }}>
                Get Guest User Credentials
            </Button>
        </VStack>
    )
}

export default Login