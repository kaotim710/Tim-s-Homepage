import NextLink from 'next/link'
import {Container,
        Button,
        Box,
        Heading,
        useColorModeValue,
        chakra
} from '@chakra-ui/react'
import {ChevronRightIcon} from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import {BioSection, BioYear } from '../components/bio'
import Image from 'next/image'

const ProfileImage = chakra(Image,{
  shouldForwardProp: prop =>['width', 'height','src','alt'].includes(prop)
})

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
                Nice to meet you! I am Tim.
            </Box>

            <Box display={{ md: 'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                    Lai-ting, Kao &nbsp;|&nbsp; Tim
                    </Heading>
        <p>Engineer/Software developer/Photographer</p>
                </Box>
             <Box 
                  flexShrink={0}
                  mt={{base:4, md:0}}
                  ml={{md:6}}
                  textAlign="center"
                >
               <Box
                borderColor="whiteAlpha.800"
                borderWidth={2}
                borderStyle="solid"
                w="100px"
                h="100px"
                display="inline-block"
                borderRadius="full"
                overflow='hidden'
              >
                <ProfileImage
                  src="/images/Tim.png"
                  alt="Profile image"
                  borderRadius='full'
                  width="100%"
                  height="100%"
                />  
             </Box>
            </Box>
            </Box>

        <Section delay = {0.1} >
            <Heading as="h3" variant="section-title">
            Work &amp; Academic Background<p/>
            </Heading>
            <Paragraph>
            &nbsp;
            <p/>Field Service Engineer - Lam Research<p/>
            Mandatory Army - Taipei City Government<p/> 
            BSc - National Taipei University of Technology(NTUT), Taipei<p/>
            Ex. Student - Shibaura Institute of Technology(SIT), Tokyo
                </Paragraph>
            <Box align="center" my={8}>
                <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon/>} colorScheme="yellow">
            Find out more!
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
     