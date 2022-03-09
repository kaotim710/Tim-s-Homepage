import {Container, Heading, SimpleGrid, Divider} from '@chakra-ui/react'
import Section from '../components/section'
import {WorkGridItem} from '../components/grid-item'
import Layout from '../components/layouts/article'

import thumbInkdrop from'../images/sample1.png'

const Works = () =>{
    return(
        <Layout>
        <Container>
            <Heading as ="h3" fontsize = {20} mb={4}>
                Works    
            </Heading>

            <SimpleGrid columns={[1,1,2]} gap={6}>
                <Section>
                 <WorkGridItem id="sample1" title="Sample1" thumbnail={thumbInkdrop}>
                  A markdown note-taking app
                 </WorkGridItem>
                </Section>
            </SimpleGrid>    
        </Container>
        </Layout>
    )
}

export default Works