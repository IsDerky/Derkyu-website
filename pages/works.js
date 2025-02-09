import { Container, Heading, SimpleGrid, useColorModeValue } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumbLogoWhite from '../public/images/works/panel-logo.png'
import thumbLogoDark from '../public/images/works/panel-logo-dark.png'
const Works = () => {
  const logovariation = useColorModeValue( thumbLogoDark,thumbLogoWhite )

  return (
    <Layout title="Works">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem id="derkyu-panel" title="Derkyu - Panel" thumbnail={logovariation}>
              Un hosting con soporte para videojuegos o software.
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
export { getServerSideProps } from '../components/chakra' 
