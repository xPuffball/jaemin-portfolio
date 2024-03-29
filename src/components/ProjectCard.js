import React from 'react'
import { Box, Center, Stack, HStack, Text, Flex} from '@chakra-ui/react'
import { FaCode } from 'react-icons/fa'

function ProjectCard(props) {
    const { name, desc, tech, link } = props
    return (
        <Box onClick={() => {window.open(link)}} _hover={{bg: "gray.50", cursor: "pointer", transition: "all .2s ease-in-out", transform: 'scale(1.015)'}} rounded="md" w="49%" minH="16.8vh" shadow="md" padding="1.5vw">
            <Flex direction="column" h="100%" justify="space-around">
                <Text fontSize="4xl" fontWeight="600">{name}</Text>
                <Text fontSize="md">{desc}</Text>
                <HStack fontSize="sm" fontWeight="600"><FaCode/><Text>{tech}</Text></HStack>
            </Flex>
        </Box>
    )
}

export default ProjectCard;