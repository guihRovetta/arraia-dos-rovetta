import {HStack, StackProps} from '@chakra-ui/react';
import {Flag} from '@internal/components/common';

const MAX_WINDOW_WIDTH = 3440;
const FLAG_WIDTH = 48;

export const FlagsSection = (props: StackProps) => (
  <HStack
    spacing={0}
    borderTopWidth="1px"
    borderTopColor="whiteAlpha.800"
    width="full"
    overflow="hidden"
    position="absolute"
    top={0}
    left={0}
    {...props}
  >
    {Array(Math.floor(MAX_WINDOW_WIDTH / FLAG_WIDTH) + 1)
      .fill('')
      ?.map((_, index) => (
        <Flag
          key={index}
          color={index % 2 ? 'orange.400' : 'blue.200'}
          fontSize={`${FLAG_WIDTH}px`}
          style={{marginTop: '-4px'}}
        />
      ))}
  </HStack>
);
