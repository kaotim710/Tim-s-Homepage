import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article.js'

const Work = () =>{
    return (
        <Layout title="Inkdrop">
            <Container>
            <Title>
            Inkdrop <Badge>2016</Badge>
        </Title>
        <P>
        A markdown note-taking app with
        </P>
        <List ml={4} my={4}>
        <ListItem>
            <Meta>Website</Meta>
            <Link href="http://www.google.com">
            http://www.google.com/<ExternalLinkIcon mx="2px"/>   
                </Link>
        </ListItem>
        <ListItem>
            <Meta>Platform</Meta>
            <span>Win/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
            <Meta>Stack</Meta>
            <span>Node.js. Electron, React Native</span>
        </ListItem>
        </List>
        </Container>
        </Layout>
    )
}

export default Work
