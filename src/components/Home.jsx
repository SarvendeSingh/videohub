import { Box, Image, Heading, Container, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';
import { transform } from 'framer-motion';

const headingOptions = {
    pos: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textTransform: 'uppercase',
    p:'5',
    size: "2xl",    
}



const Home = () => {
  return (
    <Box>
        <Carousel autoPlay infiniteLoop interval={2000} showStatus={false} showThumbs={false} showArrows={false}>
                <Box w='full' h={'100vh'}>
                    <Image src={img1}/>
                    <Heading bgColor={"blackAlpha.600"} color={'white'} {...headingOptions}>Watch the Future</Heading>
                </Box>
                <Box w='full' h={'100vh'}>
                    <Image src={img2}/>
                    <Heading bgColor={"whiteAlpha.900"} color={'black'} {...headingOptions}>
                        Watch the Gaming</Heading>
                </Box>
                <Box w='full' h={'100vh'}>
                    <Image src={img3}/>
                    <Heading bgColor={"whiteAlpha.600"} color={'black'} {...headingOptions}>Gaming on Console</Heading>
                </Box>
                <Box w='full' h={'100vh'}>
                    <Image src={img4}/>
                    <Heading bgColor={"whiteAlpha.600"} color={'black'} {...headingOptions}>Night Life is Cool</Heading>
                </Box>                
            </Carousel>
            <Container maxW={'container.xl'} minH={'100vh'} p="16">
                <Heading textTransform={'uppercase'} py="2" w={'fit-content'} borderBottom={'2px solid'} m="auto">
                    Services
                </Heading>

                <Stack
                    h="full"
                    p={"4"}
                    alignItems={'center'}
                    direction={["column","row"]}
                >
                    <Image src={img5} h={['40','400']} filter={"hue-rotate(-130deg)"}/>
                    <Text letterSpacing={'widset'} lineHeight={"190%"} p={["4","16"]} textAlign={"center"}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus facilis voluptate doloremque rem quos quam voluptas, veniam nam et minima inventore voluptatem in ut eveniet animi nesciunt asperiores? Suscipit iure ipsam sequi sit voluptates accusamus, dolor ullam, animi in vitae officiis corrupti earum tempore voluptatum qui. Dignissimos sequi omnis consequatur sit alias porro! Soluta non atque animi veritatis repudiandae possimus quos voluptatibus deserunt aliquid ea sint quidem distinctio hic vitae accusamus, aliquam doloribus dicta eius laborum minus suscipit. Et inventore esse dicta quae harum nisi, quis obcaecati officia odio perferendis necessitatibus, quos consequatur ipsum exercitationem ut ducimus, beatae voluptatem non labore voluptate. Eos, at molestiae enim nam recusandae itaque nulla quibusdam nihil deleniti corrupti? Reprehenderit ex aspernatur, in temporibus adipisci expedita sed itaque magni voluptatibus corrupti neque quo ipsum nihil sit molestias velit architecto nisi impedit iste eum quisquam enim. Aliquid, blanditiis quos.
                    </Text>
                </Stack>

            </Container>
    </Box>
  )
}

export default Home