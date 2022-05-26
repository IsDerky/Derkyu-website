import { Link, Container, Heading, Box, Button, List, ListItem, useColorModeValue, chakra } from '@chakra-ui/react'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import {  IoLogoGithub } from 'react-icons/io5'
import { FaTwitch } from "react-icons/fa";
import { GiStarShuriken } from "react-icons/gi";
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
         Hey, I&apos;m a part time gamer & a small dev
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Derkyu
          </Heading>
          <p>Digital Enjoyer ( Gamer / Developer / Chatter )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/derkyu.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          What i&apos;m doing
        </Heading>
        <Paragraph>      
        Intento de desarrollador y estudiante de primer año de CFGM,
        aunque en mi tiempo libre puedes encontrarme en {' '}
        <Link href="https://playvalorant.com/es-es/" target="_blank">
            Valorant
          </Link>
          .
        </Paragraph>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
        <BioYear>2005</BioYear>
        Nacido en Barcelona, ​​España.
        </BioSection>
        <BioSection>
        <BioYear>2019</BioYear>
        Decidí iniciarme en el mundo del desarrollo debido al tiempo que estaba pasando en casa por la pandemia
        </BioSection>
        <BioSection>
        <BioYear>2020</BioYear>
        Después de varios intentos, lancé un proyecto de bot de Discord llamado {' '}
        <Link href="/works/raphtalia" target="_blank">
            Raphtalia
          </Link>
          , actualmente descontinuado.
        </BioSection>
        <BioSection>
        <BioYear>2022</BioYear>
        A día de hoy estoy estudiando un módulo de formación profesional
        y planteando mis próximos proyectos y formaciones
          </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Series, Music,{' '}
          <Link href="https://steamcommunity.com/id/Derky18/" target="_blank">
            Games
          </Link>
          , Hardware,{' '}
          <Link href="https://twitch.tv/isderky" target="_blank">
            Streams
          </Link>
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/isderky" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @isderky
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitch.tv/isderky" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<FaTwitch />}
              >
                @isderky
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://tracker.gg/valorant/profile/riot/VZY%20IsDerky%23ONI/overview?season=all" target="_blank">
              <Button variant="ghost" colorScheme="teal" leftIcon={<GiStarShuriken />}>
                @VZY IsDerky
              </Button>
            </Link>
          </ListItem>
        </List>

      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'