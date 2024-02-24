import React from 'react'
import { Grid, Image, Card, AspectRatio, Text, Anchor, Button, rem, Title, Group, Center } from '@mantine/core'
import bgImage from "./assets/image1.jpeg";


const FirstMenu = () => {
  return (
    <Grid id="first-menu" gutter={0} align='center' justify='center'>

      <Grid.Col span={{ sm: 5, xs: 12 }} >
        <Card w={'100%'}
          classNames={{
            section: 'first-manu-card-section',
            root: 'first-manu-card-root',
          }} >
          <Card.Section>
            <Title classNames={{ root: 'title-root' }} >
              Welcome to <br /> SAFE PLAN</Title>
          </Card.Section>
          <Card.Section >
            <Text classNames={{root:'first-manu-text'}} >
              Your perfect vacation starts here.
              Tell us what you love, and we'll customize a
              memorable trip just for you.
              
            </Text>
          </Card.Section>
          <Card.Section>
            <Anchor href='#main-form' className='cta-btn'>
              <Button
                className='cta-btn'
                radius={20}
                variant="gradient"
                gradient={{ from: '#57333d', to: '#f4976c', deg: 90 }}
              >
                Let's get planning!</Button>
            </Anchor>
            <Anchor href={"/"} className='cta-btn-login'>Or if you have an account... Log in here!</Anchor>
          </Card.Section>
        </Card>
      </Grid.Col >

      <Grid.Col span={{ sm: 7, xs: 12 }}>
        <AspectRatio ratio={1.4}  >

          <Image src={bgImage} className='first-manu-bgImage' />
        </AspectRatio>
      </Grid.Col>
    </Grid>


  )
}


// const FirstMenu = () => {
//   <Grid justify="center" align="center">
//     <Grid.Col span={5} style={{borderColor: 'red'}}>
//       <Title>1</Title>
//     </Grid.Col>
//     <Grid.Col span={7} style={{borderColor: 'green'}}>
//        <Title>2</Title>
//     </Grid.Col>
//   </Grid>
// }

export default FirstMenu