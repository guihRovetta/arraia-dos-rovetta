import {Box, StackProps, VStack} from '@chakra-ui/react';
import Image, {ImageProps} from 'next/image';

export const ContentBox = ({
  _imageProps,
  _vStackProps,
  children,
  imageAlign = 'right',
}: {
  _imageProps?: ImageProps;
  _vStackProps?: StackProps;
  children: React.ReactNode;
  imageAlign?: 'right' | 'left';
}) => (
  <VStack
    py={6}
    px={8}
    w="full"
    spacing={4}
    position="relative"
    borderRadius="48px"
    borderWidth="2px"
    borderColor="whiteAlpha.300"
    {..._vStackProps}
  >
    {!!_imageProps?.src && (
      <Box
        position="absolute"
        top={-10}
        right={imageAlign === 'right' ? -2 : undefined}
        left={imageAlign === 'left' ? -2 : undefined}
        transform={`rotate(${imageAlign === 'right' ? '30deg' : '-30deg'})`}
      >
        <Image
          width="100px"
          height="100px"
          objectFit="contain"
          alt={_imageProps?.alt}
          {..._imageProps}
        />
      </Box>
    )}
    {children}
  </VStack>
);
