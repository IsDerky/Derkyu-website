import {
    Container,
    Badge,
    SimpleGrid,
    Link,
    List,
    ListItem
  } from '@chakra-ui/react'
  import Layout from '../../components/layouts/article'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, WorkImage, Meta } from '../../components/work'
  import P from '../../components/paragraph'
  
  const Work = () => (
    <Layout title="snake">
      <Container>
        <Title>
          Snake <Badge>2022</Badge>
        </Title>
        <P>Juego de serpiente simple con efectos css modernos</P>
        <List ml={4} my={4}>
        <ListItem>
            <Meta>Game</Meta>
            <Link href="https://snake.derkyu.space" target="_blank">
              Snake <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
          <Meta>Stack</Meta>
          <span>JS, HTML & CSS</span>
        </ListItem>
        </List>
        <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/snake_01.png" alt="Snake" />
        <WorkImage src="/images/works/snake_02.png" alt="Snake" />
        </SimpleGrid>
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'
  