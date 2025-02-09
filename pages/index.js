import { Link, Container, Heading, Box, Button, List, ListItem, useColorModeValue, chakra } from '@chakra-ui/react'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoGithub } from 'react-icons/io5'
import { FaTwitch } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import Image from 'next/image'
import { SpotifyAPP } from '../components/work'

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
         Hey, I&apos;m a part-time gamer & small dev
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Derkyu
          </Heading>
          <p>Digital Enjoyer (Gamer / Developer / Chatter)</p>
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
          What I&apos;m doing
        </Heading>
        <Paragraph>      
        Desarrollador y técnico en redes,
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
          Nacido en Barcelona, España.
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>
          Empecé en el mundo del desarrollo de manera autodidacta.
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Entré en una FP de redes y sistemas con el objetivo
           de explorar otros campos de la informática.
        </BioSection>
        <BioSection>
          <BioYear>2025</BioYear>
          Trabajando para {' '} 
          <Link href="https://es.nttdata.com" target="_blank">
            NTTDATA 
          </Link> y con un proyecto activo llamado {' '}
          <Link href="/works/derkyu-panel" target="_blank">
          Derkyu Panel
          </Link>
          .
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Series, {' '}
          <Link href="https://open.spotify.com/user/darkqwew?si=d852d5781e4e4d86" target="_blank">
            Music
          </Link>
          ,{' '}
          <Link href="https://steamcommunity.com/id/Derky18/" target="_blank">
            Games
          </Link>
          ,{' '}
          <Link href="https://github.com/IsDerky" target="_blank">
            Develop
          </Link>
          ,{' '}
          <Link href="https://twitch.tv/isderky" target="_blank">
            Streams
          </Link>
        </Paragraph>
        <>
          <SpotifyAPP
            src="https://spotify-github-profile.kittinanx.com/api/view?uid=darkqwew&cover_image=true&theme=novatorem&show_offline=false&background_color=121212&interchange=true&bar_color=53b14f&bar_color_cover=true)](https://spotify-github-profile.kittinanx.com/api/view?uid=darkqwew&redirect=true)"
            alt="Spotify"
            layout="responsive"
            width="100"
            height="50"
          />
        </>
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
            <Link href="https://discordapp.com/users/455823766669230081" target="_blank">
              <Button variant="ghost" 
              colorScheme="teal" 
              leftIcon={<FaDiscord />}>
                @derkyu.
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
