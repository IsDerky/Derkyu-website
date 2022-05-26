import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumbRaph from '../public/images/works/raph_02.png'
import thumbMybot from '../public/images/works/mybot_01.png'
import thumbSnake from '../public/images/works/snake_03.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="raphtalia" title="Raphtalia" thumbnail={thumbRaph}>
          Bot de Discord multifuncional actualmente descontinuado
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="snake" title="Snake" thumbnail={thumbSnake}>
          El clásico juego de la serpiente llevado al estilo moderno.
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem
            id="mybot"
            thumbnail={thumbMybot}
            title="Mybot"
          >
           Comunidad de soporte basada en portalmybot.com
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      
  </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
