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
        CFGM 1st year student and developer intent,
        although in my free time you can find me in {' '}
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
        Born in Barcelona, ​​Spain.
        </BioSection>
        <BioSection>
        <BioYear>2019</BioYear>
      
I decided to start in the development world due to the time I was spending at home due to the pandemic
        </BioSection>
        <BioSection>
        <BioYear>2020</BioYear>
        After several attempts I launched a discord bot project called {' '}
        <Link href="/works/raphtalia" target="_blank">
            Raphtalia
          </Link>
          , currently discontinued
        </BioSection>
        <BioSection>
        <BioYear>2022</BioYear>
        Today I am studying a vocational training module
        and proposing my next projects and formations
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