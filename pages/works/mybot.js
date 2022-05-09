import {
  Container,
  Badge,
  Link,
  List,
  ListItem
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="mybot">
    <Container>
      <Title>
        Portalmybot <Badge>2017</Badge>
      </Title>
      <P>Learn and share new things about bot development.</P>
      <List ml={4} my={4}>
      <ListItem>
          <Meta>Website</Meta>
          <Link href="https://portalmybot.com/" target="_blank">
            Mybot <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Discord</Meta>
          <Link href="https://discord.com/invite/g6ssSmK" target="_blank">
            Invite <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>
      <WorkImage src="/images/works/mybot_01.png" alt="Mybot" />
      <WorkImage src="/images/works/mybot_02.png" alt="Mybot" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
