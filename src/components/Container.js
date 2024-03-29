import React, { useState, useEffect } from 'react';
import Logo from './Logo.png'
import bg4 from './bg4.jpg'
import resume from './Jaemin Han - Resume.pdf'
import {
  Box,
  Stack,
  Center,
  Text,
  Flex,
  Image,
  Link,
  HStack,
  Spinner
} from '@chakra-ui/react';

import ProjectCard from './ProjectCard'
import ContactForm from './ContactForm'

import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai'
import { FaDiscord } from 'react-icons/fa'
import { ImLocation } from 'react-icons/im'

function Container() {
  const [active, setActive] = useState(1)

  const activeColor = (num) => {
    if (active === num){
      return "black"
    } else {
      return "gray.300"
    }
  }

  return (
    <Stack rounded="2xl" h="60vh" maxW="80%" m="auto" direction="row" spacing='0' shadow="lg">
      <Flex padding="2.5vw" w="25vw" roundedLeft="2xl" backgroundImage={bg4}>
        <Center>
          <Stack color="white" fontWeight="400" spacing="10%" h="50vh">
            <Image src={Logo} rounded="md" mb="-1vh" boxSize='7em'></Image>
            <Stack spacing="-0.5vh">
              <Text fontSize="25">jaemin han</Text> 
              <Text fontSize="15">@poof</Text>
            </Stack>
            <Box>
              <Text fontSize='lg'>data scientist</Text>
            </Box>
            <Stack spacing="1px">
              <HStack spacing='5px' fontSize='xs'><AiFillGithub/><u><Link href="https://github.com/xPuffball" target="_blank">github</Link></u></HStack>
              <HStack spacing='5px' fontSize='xs'><AiFillLinkedin/><u><Link href="https://www.linkedin.com/in/hanjaemin/" target="_blank">linkedin</Link></u></HStack>
              <HStack spacing='5px' fontSize='xs'><FaDiscord/><Text>poof#5402</Text></HStack>
              <HStack spacing='5px' fontSize='xs'><AiOutlineMail/><Text>j4emin.han@gmail.com</Text></HStack>
            </Stack>
            <Box>
              <HStack fontSize='xs'><ImLocation/><Text>toronto</Text></HStack>
            </Box>
          </Stack>
        </Center>
      </Flex>
      <Box w = "75vw" bg="white" roundedRight="2xl" paddingLeft="75px" paddingRight="75px" paddingTop="5vh" paddingBottom="5vh">
        <HStack spacing="2vw">
          <Text fontSize="40" fontWeight="900" color={activeColor(1)} onClick={() => {setActive(1)}} _hover={{cursor: "pointer", transition: "all .2s ease-in-out", transform: 'scale(1.05)'}}>
            work
          </Text>
          <Text fontSize="40" fontWeight="900" color={activeColor(2)} onClick={() => {setActive(2)}} _hover={{cursor: "pointer", transition: "all .2s ease-in-out", transform: 'scale(1.05)'}}>
            resume
          </Text>
          <Text fontSize="40" fontWeight="900" color={activeColor(3)} onClick={() => {setActive(3)}} _hover={{cursor: "pointer", transition: "all .2s ease-in-out", transform: 'scale(1.05)'}}>
            contact
          </Text>
        </HStack>
        {active === 1 &&
          <Stack 
            h="90%" 
            overflowY="scroll"
            css={{
              '&::-webkit-scrollbar': {
                width: '0px',
                
              }
            }}
          >
            <Stack spacing="-1vh">
              <Text fontSize="4xl" fontWeight="1000">portfolio.</Text>
              <Text fontSize="md" fontWeight="500">(you can scroll!)</Text>
            </Stack>
            <Flex justify="space-between" mb="18px">
              <ProjectCard name="macaron" link="https://github.com/the-macaron" desc="news app made for nwHacks 2020 (best pitch & honorable mention)" tech="javascript / bootstrap"></ProjectCard>
              <ProjectCard name="hobbynet" link="https://github.com/moseskim25/final-project" desc="multi page full stack social media app with search & chat features" tech="node / express / react / psql / socket.io"></ProjectCard>
            </Flex>
            <Flex justify="space-between">
              <ProjectCard name="scheduler" link="https://github.com/xPuffball/scheduler" desc="fullstack react scheduling app" tech="javascript / react / sql / axios"></ProjectCard>
              <ProjectCard name="tinyapp" link="https://github.com/xPuffball/tinyapp" desc="RESTful url shortener w/ bootstrap" tech="node / express / jquery / bootstrap"></ProjectCard>
            </Flex>
            <Flex justify="space-between">
              <ProjectCard name="tweeter" link="https://github.com/xPuffball/tweeter" desc="single page twitter clone w/ ajax" tech="node / express / jquery / ajax"></ProjectCard>
              <ProjectCard name="jaemin's portfolio" link="https://github.com/xPuffball/jaemin-personal" desc="minimalistic webpage for portfolio/contact purposes (you're looking at it!)" tech="react / python / nltk"></ProjectCard>
            </Flex>
            <Flex justify="space-between">
              <ProjectCard name="lightquiz" link="https://github.com/jesselap/midterm-quiz" desc="fullstack quiz app with user CRUDable quizzes" tech=" node / express / jquery / psql / bootstrap"></ProjectCard>
              <ProjectCard name="WIP" link="/" desc="next project is wip! will show up when done (probably...)" tech="TBD"></ProjectCard>
            </Flex>
          </Stack>
        }
        {active === 2 && 
          <Box
            h="90%" 
            overflow='auto'
            css={{
              '&::-webkit-scrollbar': {
                width: '0px',
              }
            }}
          >  
            <Stack spacing="-1vh">
              <Text fontSize="4xl" fontWeight="1000">current <Link target="_blank" color="#548CA8" href="https://docs.google.com/document/d/1Kxy76w-jaXeDHUkvaXTUrxGKYzem7GcH/edit?usp=sharing&ouid=106910369347116897173&rtpof=true&sd=true">resume.</Link></Text>
              <Text fontSize="md" fontWeight="500">(last updated: 2023-10-25 // link above)</Text>
            </Stack>
            <Flex height="100%">
              <iframe src={resume} width="600"></iframe>
            </Flex>
          </Box>
        }
        {active === 3 && 
          <ContactForm></ContactForm>
        }
      </Box>
    </Stack>
  );
}

export default Container;