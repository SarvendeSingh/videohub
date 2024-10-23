import { Stack, VStack, Heading, Text, Button, HStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Videos = () => {

  const [searchparams] = useSearchParams();
  const category = searchparams.get('category');

  const videosArr = [
    { src: 'https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4', title: 'Big Buck Bunny', description: 'A large, lovable rabbit deals with three tiny bullies, led by the flying squirrel, who are determined to squelch his happiness.' },
    { src: 'https://videos.pexels.com/video-files/2330708/2330708-uhd_2560_1440_24fps.mp4', title: 'Nature Clip', description: 'A beautiful clip showcasing stunning nature scenes.' },
    { src: 'https://videos.pexels.com/video-files/852338/852338-hd_1920_1080_24fps.mp4', title: 'Urban Life', description: 'Scenes capturing the essence of city life.' },
    { src: 'https://videos.pexels.com/video-files/3335969/3335969-hd_1920_1080_30fps.mp4', title: 'Beach Sunset', description: 'A tranquil sunset at the beach, a perfect moment to relax.' },
    { src: 'https://videos.pexels.com/video-files/1508067/1508067-uhd_2560_1440_25fps.mp4', title: 'Mountain Adventure', description: 'Adventure on high mountains with breathtaking views.' },
  ];

  const [video, setVideo] = useState(videosArr[0]);

  return (
    <>
         {
        category === 'free' ? (
          <>
              <Heading py={'8'} px={'20'}>Free Videos</Heading>
            <Stack direction={['column', 'row']}>
             
      <VStack w={'full'}>
        <video controls controlsList='nodownload' src={video.src} style={{ width: '100%' }}></video>
        <VStack alignItems={'flex-start'} p={'8'} w={'full'} overflowY={'auto'}>
          <Heading>{video.title}</Heading>
          <Text>{video.description}</Text>
        </VStack>
      </VStack>
      <VStack w={['full', 'xl']} alignItems={'stretch'} p={'8'} spacing={'8'} overflowY={'auto'}>
        {videosArr.map((item, index) => (
          <Button key={index} onClick={() => setVideo(item)} variant={'ghost'} colorScheme={'purple'}>
            Lecture {index + 1}
          </Button>
        ))}
      </VStack>
    </Stack>
          </>
        ) :
        (
          <Stack direction={['column', 'row']}>
          
  <VStack w={'full'}>
    <video controls controlsList='nodownload' src={video.src} style={{ width: '100%' }}></video>
    <VStack alignItems={'flex-start'} p={'8'} w={'full'} overflowY={'auto'}>
      <Heading>{video.title}</Heading>
      <Text>{video.description}</Text>
    </VStack>
  </VStack>
  <VStack w={['full', 'xl']} alignItems={'stretch'} p={'8'} spacing={'8'} overflowY={'auto'}>
    {videosArr.map((item, index) => (
      <Button key={index} onClick={() => setVideo(item)} variant={'ghost'} colorScheme={'purple'}>
        Lecture {index + 1}
      </Button>
    ))}
  </VStack>
</Stack>
        )
    }
   </>
  );
};

export default Videos;
