import { Container, Badge, Link, List, ListItem, useColorModeValue } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const Work = () => (
  <Layout title="Derkyu Panel">
    <Container>
      <Title>
       Derkyu Panel <Badge>2025</Badge>
      </Title>
      <P> 
      Un hosting con un panel multifución con soporte para videojuegos y software.

      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Games</Meta>
          <span>Minecraft, Fivem, Project Zomboid, etc</span>
        </ListItem>
        <ListItem>
          <Meta>Software</Meta>
          <span>Code-server, Nextcloud, Website hosting, Bot hosting etc</span>
        </ListItem>
        <ListItem>
          <Meta>Link</Meta>
          <Link href="https://panel.derkyu.lol" target="_blank">
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
