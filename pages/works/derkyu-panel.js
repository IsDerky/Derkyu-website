import { Container, Badge, Link, List, ListItem, useColorModeValue } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const Work = () => (
  <Layout title="Derkyu Hosting">
    <Container>
      <Title>
       Derkyu Hosting <Badge>2025</Badge>
      </Title>
      <P> 
      Página web de hosting que ofrece una gran variedad de servicios, desarrollada con las siguientes tecnologías:
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Lenguaje</Meta>
          <span>Node.js</span>
        </ListItem>
        <ListItem>
          <Meta>Framework</Meta>
          <span>Vite, React, Tailwind</span>
        </ListItem>
        <ListItem>
          <Meta>Link</Meta>
          <Link href="https://hosting.derkyu.lol" target="_blank">
            Page <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>
      <WorkImage src="/images/works/panel-login.png" alt="Panel - Login" />
      <WorkImage src="/images/works/panel-servers.png" alt="Panel - Servers" /> 
      <WorkImage src="/images/works/panel-server.png" alt="Panel - Server" />  
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
