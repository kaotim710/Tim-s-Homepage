import {Container, Heading, SimpleGrid, Divider} from '@chakra-ui/react'
import Section from '../components/layouts/section'
import {WorkGridItem} from '../components/layouts/grid-item'

import thumbInkdrop from'../images/sample1.png'

const Works = () =>{
    return(
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
    )
}

export default Works