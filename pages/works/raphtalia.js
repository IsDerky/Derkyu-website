import { Container, Badge, Link, List, SimpleGrid, ListItem } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const Work = () => (
  <Layout title="Raphtalia">
    <Container>
      <Title>
        Raphtalia <Badge>2020</Badge>
      </Title>
      <P>
      Multi-functional discord bot currently discontinued
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NodeJS, HTML</span>
        </ListItem>
        <ListItem>
          <Meta>Invite</Meta>
          <Link href="https://discord.com/oauth2/authorize?client_id=732014546096488598&scope=bot&permissions=8" target="_blank">
            Raphi is happy <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

      </List>
      <SimpleGrid columns={2} gap={2}>
      <WorkImage src="/images/works/raph_01.png" alt="Raph" />
      <WorkImage src="/images/works/raph_03.png" alt="Raph" />
    </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
