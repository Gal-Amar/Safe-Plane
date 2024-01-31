import React from 'react'
import { Link } from 'react-router-dom';
import { Image, Center, Title , Text, Anchor} from '@mantine/core'
import sign from "./assets/sign.png"
import Home from './Home'
const FirstMenu = () => {
  return (
    <section className="background-section" id="first-menu">
      <Center>
        <div className='first-menu-content'>
          <Title size={90} mt={120}>  Welcome to <br />  &nbsp; Safe Plan<Text span c="blue" inherit>e</Text></Title>
          <Text className="first-menu-p">
           &nbsp; Streamlines travel planning to make it<br />&nbsp; easy and fun for users.<br />&nbsp; All you need to do is press the button
          </Text>

          <div className='cta'>
            <Anchor href='#main-form' className='cta_btn'>
              <Image className='cta_btn-image' src={sign} w={170} />
            </Anchor>
            <Link to={Home} className='cta_btn'>Or if you have an account... Log in here!</Link>
          </div>
        </div>
      </Center>
    </section>

  )
}

export default FirstMenu