import { VStack } from '@chakra-ui/react'

import React, { useState } from 'react'

import { Button, Fieldset, Input, Stack } from "@chakra-ui/react"
import { Field } from "../ui/field"

// test
const postDetails = (pics) => {

}

const submitHandler = () => {

}

const Signup = () => {
    const [name, setName] = useState()
    const [password, setPassword] = useState()
    const [confirmpassword, setConfirmpassword] = useState()
    const [pic, setPic] = useState()
    const [email, setEmail] = useState()

    return (
        <VStack color="black">
             <Fieldset.Root size="lg" maxW="md">

            <Fieldset.Content>
                <Field label="Name">
                    <Input name="name"
                        placeholder='Enter Your Name'
                        required
                        onChange={(e) => setName(e.target.value)}/>
                </Field>

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
                    
                <Field label="ConfirmPassword">     
                    <Input name="confirmpassword"
                        placeholder='Confirm Your Password'
                        type="password"
                        required
                        onChange={(e) => setConfirmpassword(e.target.value)}/>
                </Field>
                    
            </Fieldset.Content>
                
            <Fieldset.Content>
                    <Input name="Upload Your Profile picture"
                        p={1.5}
                        type="file"
                        accept='image/*'
                        onChange={(e) => postDetails(e.target.files[0])}/>
            </Fieldset.Content>

            </Fieldset.Root>
            <Button type="submit" bg="blue.500" _hover={{ bg: "blue.600" }} colorScheme="blue" alignSelf="center" width="100%" onClick={submitHandler}>
                Sign Up
            </Button>
        </VStack>
    )
}

export default Signup