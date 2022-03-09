import NextLink from 'next/link'
import {Container,
        Button,
        Box,
        Heading,
        Link,
        useColorModeValue
} from '@chakra-ui/react'
import {ChevronRightIcon} from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import {BioSection, BioYear } from '../components/bio'

const Page = () => {
    return(
        <Layout>
        <Container>
            <Box 
            borderRadius="lg" 
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} 
            p={3} 
            mb={6} 
            textAlign="center">
                Hello! I am Judy shake it from Taiwan
            </Box>

            <Box display={{ md: 'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                    Tim Kao
                    </Heading>
        <p>Billionaire and Playboy</p>
                </Box>
             <Box 
                  flexShrink={0}
                  mt={{base:4, md:0}}
                  ml={{md:6}}
                  textAlign="center"
                >
               <Box
                borderColor ="whiteAlpha.800" 
                borderWidth={2} 
                borderStyle="solid" 
                maxWidth = "150px" 
                display = "inline-block" 
                borderRadius="full" 
                src="/images/Tim.png" 
                alt="Profile Image"
                />  
             </Box>
            </Box>

        <Section delay = {0.1}>
            <Heading as="h3" variant="section-title">
             Work
            </Heading>
            <Paragraph>this is a book. a website call{' '}
            <NextLink href="/works/inkdrop">
                <Link>Inkdrop</Link>
                 </NextLink>
                </Paragraph>
            <Box align="center" my={4}>
                <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon/>} colorScheme="teal">
            My portfolio
            </Button>
            </NextLink>
            </Box>
        </Section>
      <Section delay={0.2}>
        <Heading as="h3" variant="section-titile">
            Bio
        </Heading>
      <BioSection>
        <BioYear>1995 </BioYear>
        Born in Taipei, Taiwan. 
      </BioSection>
      <BioSection>
        <BioYear>2018 </BioYear>
        Completed Exchange program at SIT
      </BioSection>
      <BioSection>
        <BioYear>2019 </BioYear>
        Completed Bachlor degree at NTUT
      </BioSection>
      <BioSection>
        <BioYear>2020 </BioYear>
        Worked at Lam Research
      </BioSection>
    </Section>
    <Section delay={0.2}>
        <Heading as="h3" variant="section-titile">
        I LOVE
        </Heading>
        </Section>
</Container>
</Layout>
    )  
}

export default Page
     