import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} Derkyu. All Rights Reserved.

      https://spotify-github-profile.vercel.app/api/view?uid=darkqwew&cover_image=false&theme=natemoo-re&bar_color=53b14f&bar_color_cover=false
    </Box>
    
  )
}

export default Footer
