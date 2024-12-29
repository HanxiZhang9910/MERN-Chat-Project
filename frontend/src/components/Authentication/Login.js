import { VStack } from '@chakra-ui/react'

import React, { useState } from 'react'

import { Button, Fieldset, Input, Stack } from "@chakra-ui/react"
import { Field } from "../ui/field"

const submitHandler = () => {

}

const Login = () => {
   const [name, setName] = useState()
    const [password, setPassword] = useState()
    const [confirmpassword, setConfirmpassword] = useState()
    const [pic, setPic] = useState()
    const [email, setEmail] = useState()

    return (
        <VStack color="black">
             <Fieldset.Root size="lg" maxW="md">

            <Fieldset.Content>
                <Field label="Email">
                    <Input name="email"
                        placeholder='Enter Your Email'
                        type="email"
                        required
                        onChange={(e) => setEmail(e.target.value)}/>
                </Field>
                    
                <Field label="Password">     
                    <Input name="password"
                        placeholder='Enter Your Password'
                        type="password"
                        required
                        onChange={(e) => setPassword(e.target.value)}/>
                </Field>
                    
            </Fieldset.Content>

            </Fieldset.Root>
            <Button type="submit" bg="green.500" _hover={{ bg: "green.600" }} colorScheme="blue" alignSelf="center" width="100%" onClick={submitHandler}>
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