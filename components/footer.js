import { Box } from '@chakra-ui/react'
import { WorkImage } from './work'
const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} Derkyu. All Rights Reserved.
    
      <WorkImage
      src="https://spotify-github-profile.vercel.app/api/view?uid=darkqwew&cover_image=false&theme=natemoo-re&bar_color=53b14f&bar_color_cover=false"
      alt="Picture of the author"
      width="350px"
      height="300px"
    />
    
    </Box>
    
  


  )
}

export default Footer
