import React from "react";
import { useDisclosure } from "@mantine/hooks";
import {
  Grid,
  Image,
  Card,
  AspectRatio,
  Text,
  Anchor,
  Button,
  Title,
} from "@mantine/core";
import bgImage from "./assets/image1.jpeg";
import Login from "./account-components/Login";

//Smoother the scrolling to main form section
const scrollToSection = () => {
  const section = document.getElementById("main-form");
  section.scrollIntoView({ behavior: "smooth" });
};

const FirstMenu = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <Grid id="first-menu" gutter={0} align="center" justify="center">
      <Grid.Col span={{ sm: 5, xs: 12 }}>
        <Card
          w={"100%"}
          classNames={{
            section: "first-manu-card-section",
            root: "first-manu-card-root",
          }}
        >
          <Card.Section>
            <Title classNames={{ root: "title-root" }}>
              Welcome to <br /> SAFE PLAN
            </Title>
          </Card.Section>
          <Card.Section>
            <Text classNames={{ root: "first-manu-text" }}>
              Your perfect vacation starts here. Tell us what you love, and
              we'll customize a memorable trip just for you.
            </Text>
          </Card.Section>
          <Card.Section>
            <Anchor onClick={scrollToSection} className="cta-btn">
              <Button
                className="cta-btn"
                radius={20}
                variant="gradient"
                gradient={{ from: "#57333d", to: "#f4976c", deg: 90 }}
              >
                Let's get planning!
              </Button>
            </Anchor>
            <Anchor onClick={open} className="cta-btn-login">
              If you wish to view your saved trips... Log in!
            </Anchor>
            <Login open={opened} close={close} />
          </Card.Section>
        </Card>
      </Grid.Col>

      <Grid.Col span={{ sm: 7, xs: 12 }}>
        <AspectRatio ratio={1} style={{ maxHeight: "35rem" }}>
          <Image src={bgImage} className="first-manu-bgImage" />
        </AspectRatio>
      </Grid.Col>
    </Grid>
  );
};

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

export default FirstMenu;
