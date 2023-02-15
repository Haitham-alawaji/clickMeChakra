import { Image,Card, Text, Heading, ThemeProvider ,extendTheme,Spinner, Button, useColorMode, ButtonGroup, CardBody, CardFooter, Divider, Stack, Box, color, useColorModeValue, useDisclosure, Avatar, chakra, CloseButton, Flex, HStack, IconButton, Input, InputGroup, InputLeftElement, Spacer, Tab, TabList, Tabs, VisuallyHidden, VStack, SimpleGrid } from "@chakra-ui/react";

import { PhoneIcon ,AddIcon, WarningIcon, TimeIcon, } from '@chakra-ui/icons'
import ClickMe from "./assets/Comp/butt";

const config = {
  initialColorMode: 'pink',
  useSystemColorMode: false,
}


const theme = extendTheme({ config })

const customTheme = {
  colors: {
    teal: {
      500: "#00B5AD",
    },
  },
};

function App() {
  const { colorMode, toggleColorMode } = useColorMode()
  
  const bg = useColorModeValue('red', 'gray.800')
  const color = useColorModeValue('white', 'gray.800')
  const mobileNav = useDisclosure();


  return (
    <>
<ClickMe />
{/* <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          spacing={20}
          px={{ base: 1, lg: 16, xl: 24 }}
          py={20}
          mx="auto"
        > 
        <Image src="https://pbs.twimg.com/profile_images/1595710799556780034/cYX8qbt3_400x400.jpg" alt="شعار أكادمية طويق " />
        <Image src="https://pbs.twimg.com/profile_images/1595710799556780034/cYX8qbt3_400x400.jpg" alt="شعار أكادمية طويق " />
        <Image src="https://pbs.twimg.com/profile_images/1595710799556780034/cYX8qbt3_400x400.jpg" alt="شعار أكادمية طويق " />
        <Image src="https://pbs.twimg.com/profile_images/1595710799556780034/cYX8qbt3_400x400.jpg" alt="شعار أكادمية طويق " />
        <Image src="https://pbs.twimg.com/profile_images/1595710799556780034/cYX8qbt3_400x400.jpg" alt="شعار أكادمية طويق " />
        <Image src="https://pbs.twimg.com/profile_images/1595710799556780034/cYX8qbt3_400x400.jpg" alt="شعار أكادمية طويق " />
    </SimpleGrid> */}
<Stack direction='row' spacing={4}>
  <Button isLoading colorScheme='teal' variant='solid'>
    Email
  </Button>
  <Button
    isLoading
    loadingText='Submitting'
    colorScheme='teal'
    variant='outline'
  >
    Submit
  </Button>
</Stack>
     <Box shadow="md">
      <chakra.header
        bg={bg}
        borderColor="gray.600"
        borderBottomWidth={1}
        w="full"
        px={{ base: 2, sm: 4 }}
        py={4}
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <HStack spacing={4} display="flex" alignItems="center">
            <Box display={{ base: "inline-flex", md: "none" }}>
              <IconButton
                display={{ base: "flex", md: "none" }}
                aria-label="Open menu"
                fontSize="20px"
                color="gray.800"
                _dark={{ color: "inherit" }}
                variant="ghost"
                icon={<PhoneIcon />}
                onClick={mobileNav.onOpen}
              />
              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? "flex" : "none"}
                flexDirection="column"
                p={2}
                pb={4}
                m={2}
                bg={bg}
                spacing={3}
                rounded="sm"
                shadow="sm"
              >
                <CloseButton
                  aria-label="Close menu"
                  justifySelf="self-start"
                  onClick={mobileNav.onClose}
                />
                <Button w="full" variant="ghost" leftIcon={<PhoneIcon />}>
                  Dashboard
                </Button>
                <Button
                  w="full"
                  variant="solid"
                  colorScheme="brand"
                  leftIcon={<PhoneIcon />}
                >
                  Inbox
                </Button>
                <Button
                  w="full"
                  variant="ghost"
                  leftIcon={<PhoneIcon />}
                >
                  Videos
                </Button>
              </VStack>
            </Box>
            <chakra.a
              href="/"
              title="Choc Home Page"
              display="flex"
              alignItems="center"
            >
              <VisuallyHidden>Choc</VisuallyHidden>
            </chakra.a>
            <chakra.h1 fontSize="xl">Settings</chakra.h1>
          </HStack>
          <HStack spacing={3} display="flex" alignItems="center">
            <HStack spacing={3} display={{ base: "none", md: "inline-flex" }}>
              <Button variant="ghost" leftIcon={<PhoneIcon />} size="sm">
                Dashboard
              </Button>
              <Button
                variant="solid"
                colorScheme="brand"
                leftIcon={<PhoneIcon />}
                size="sm"
              >
                Inbox
              </Button>
              <Button
                variant="ghost"
                leftIcon={<PhoneIcon />}
                size="sm"
              >
                Videos
              </Button>
            </HStack>
            <chakra.a
              p={3}
              color="gray.800"
              _dark={{ color: "inherit" }}
              rounded="sm"
              _hover={{ color: "gray.800", _dark: { color: "gray.600" } }}
            >
              <PhoneIcon />
              <VisuallyHidden>Notifications</VisuallyHidden>
            </chakra.a>

            <Avatar
              size="sm"
              name="Dan Abrahmov"
              src="https://bit.ly/dan-abramov"
            />
          </HStack>
        </Flex>
      </chakra.header>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        mx={2}
        borderWidth={0}
        overflowX="auto"
      >
        <Tabs defaultIndex={1} borderBottomColor="transparent">
          <TabList>
            <Tab py={4} m={0} _focus={{ boxShadow: "none" }}>
              Basic
            </Tab>
            <Tab py={4} m={0} _focus={{ boxShadow: "none" }}>
              Integrations
            </Tab>
            <Tab py={4} m={0} _focus={{ boxShadow: "none" }}>
              Notifications
            </Tab>
            <Tab py={4} m={0} _focus={{ boxShadow: "none" }}>
              Usage
            </Tab>
            <Tab py={4} m={0} _focus={{ boxShadow: "none" }}>
              Billing
            </Tab>{" "}
            <Tab isDisabled py={4} m={0}>
              Advanced
            </Tab>
          </TabList>
        </Tabs>
        <Spacer />
        <HStack spacing={3} alignItems="center">
          <InputGroup display={{ base: "none", lg: "block" }} ml="auto">
            <InputLeftElement pointerEvents="none">
              <PhoneIcon />
            </InputLeftElement>
            <Input type="tel" placeholder="Search..." />
          </InputGroup>
        </HStack>
      </Flex>
    </Box>
<TimeIcon color={bg}/>
<PhoneIcon />

<AddIcon boxSize={6} />

<WarningIcon w={8} h={8} color="red.500" />
    <Box bg={bg}>hello</Box>
    <ThemeProvider theme={customTheme}>
      <Card p={5}  shadow="md" borderWidth="1px">
        <Heading size="lg">A Card with a Teal Color Scheme</Heading>
        <Text>This is the card content.</Text>
      </Card>
    </ThemeProvider>

<Button onClick={toggleColorMode}>
  Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
</Button>
<Card maxW='sm'>
  <CardBody>
    <Image
      src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Living room Sofa</Heading>
      <Text>
        This sofa is perfect for modern tropical spaces, baroque inspired
        spaces, earthy toned spaces and for people who love a chic design with a
        sprinkle of vintage design.
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        $450
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>

<Box mb={4} bg={bg} color={color}>
        This box's style will change based on the color mode.
      </Box>
      <Button size='sm' onClick={toggleColorMode}>
        Toggle Mode
      </Button>

</>
  );
}

export default App;
