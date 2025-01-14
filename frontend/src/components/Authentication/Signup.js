import { VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Button, Fieldset, Input, Stack } from "@chakra-ui/react"
import { Field } from "../ui/field"
import { createToaster } from "@chakra-ui/react";
import axios from "axios";
import { useHistory } from "react-router-dom"

const toaster = createToaster();

const Signup = () => {
    const [name, setName] = useState()
    const [password, setPassword] = useState()
    const [confirmpassword, setConfirmpassword] = useState()
    const [pic, setPic] = useState()
    const [email, setEmail] = useState()
    // const [loading, setLoading] = useState(false)
    const history = useHistory();
    
    // test
    const postDetails = (pics) => {
        //setLoading(true)
        if (pics === undefined) {
            alert("Please select a valid image")
            //   toaster.create({
            //     title: "Please Select an Image!",
            //     description: "If the user has not selected an image, notify the user.",
            //     status: "warning", // options: "success", "error", "warning", "info"
            //     duration: 5000,  // duration in ms
            //     isClosable: true,
            //     position: "bottom", // options: "top", "top-right", "bottom", etc.
            //   });
            return;
        }

        if (pics.type === "image/jpeg" || pics.type === "image/png") {
            const data = new FormData();
            data.append("file", pics);
            data.append("upload_preset", "chat-app-preset");
            data.append("cloud_name", "ddlzkytvf")
            fetch("https://api.cloudinary.com/v1_1/ddlzkytvf/image/upload", {
                method: "post",
                body: data,
            }).then((res) => res.json())
                .then((data) => {
                    setPic(data.url.toString());
                   // setLoading(false);
                })
                .catch((err) => {
                    console.log(err);
                   // setLoading(false);
                });
        } else {
            alert("Please select an image")
            // toaster.create({
            //     title: "Please Select an Image!",
            //     description: "If the user has not selected an image, notify the user.",
            //     status: "warning", // options: "success", "error", "warning", "info"
            //     duration: 5000,  // duration in ms
            //     isClosable: true,
            //     position: "bottom", // options: "top", "top-right", "bottom", etc.
            // });
            //setLoading(false);
            return;
        }
    };

    const submitHandler = async () => {
       // setLoading(true);
        if (!name || !email || !password || !confirmpassword) {
            alert("Please Fill all the Fields!")
            // toaster.create({
            //     title: "Please Fill all the Fields!",
            //     description: "If the user has not filled all the fields, notify the user.",
            //     status: "warning", // options: "success", "error", "warning", "info"
            //     duration: 5000,  // duration in ms
            //     isClosable: true,
            //     position: "bottom", // options: "top", "top-right", "bottom", etc.
            // });
            //setLoading(false);
            return;
        }
        if (password != confirmpassword) {
            alert("Password Do Not Match")
            // toaster.create({
            //     title: "Password Do Not Match",
            //     status: "warning", // options: "success", "error", "warning", "info"
            //     duration: 5000,  // duration in ms
            //     isClosable: true,
            //     position: "bottom", // options: "top", "top-right", "bottom", etc.
            // });
            return;
        }
        try {
            const config = {
                headers: {
                    "Content-type": "application/json",
                },
            };
            const { data } = await axios.post("/api/user", { name, email, password, pic }, config);
            alert("Registration Successful")
            // toaster.create({
            //     title: "Registration Successful",
            //     status: "success", // options: "success", "error", "warning", "info"
            //     duration: 5000,  // duration in ms
            //     isClosable: true,
            //     position: "bottom", // options: "top", "top-right", "bottom", etc.
            // });
    
            localStorage.setItem("userInfo", JSON.stringify(data));
            // setLoading(false)
            history.push("chats")
        } catch (error) {
            alert(error)
            // toaster.create({
            //     title: "Error Occured",
            //     description: error.response.data.message,
            //     status: "error",
            //     duration: 5000,  // duration in ms
            //     isClosable: true,
            //     position: "bottom", // options: "top", "top-right", "bottom", etc.
            // });
            // setLoading(false);
        }
    }

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
            <Button type="submit"
                bg="blue.500"
                _hover={{ bg: "blue.600" }}
                colorScheme="blue"
                alignSelf="center" width="100%"
                onClick={submitHandler}>
                Sign Up
            </Button>
        </VStack>
    )
}

export default Signup