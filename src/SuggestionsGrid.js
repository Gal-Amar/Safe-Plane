import { Grid, Title, Card, Image, Text, Badge, Button, Group } from "@mantine/core";
import {IconCircleArrowRight} from '@tabler/icons-react';
import plane from './assets/plane.jpeg'
// import { useDisclosure } from '@mantine/hooks'; use them when we have the data
// import { Modal, Button } from '@mantine/core';
const data = [
  {
    image: plane,
    period: '5 days',
    title: 'Vacation to Hawaii',
    vacationDes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
  }
]
const SuggestionsGrid = () => {
  return (
    <div className="grid-wrapper">
      <Title className="sugg-grid-title">You Can Also Enjoy Our Suggestions For The Perfect Vacation</Title>
      <Grid>
        <Grid.Col span={{ base: 12, md: 4, sm: 6 }}>
          <Card shadow="lg" padding="lg" radius="lg" withBorder classNames={{ root: 'sugg-grid-card-root' }}>
            <Card.Section>
              <Image src={data[0].image}
                height={160}
                alt="Norway" />
            </Card.Section>
            <Group justify="space-between" mt="md" mb="xs">
              <Text className="sugg-grid-card-title" fw={600}>{data[0].title}</Text>
              <Badge className="sugg-grid-badge">{data[0].period}</Badge>
            </Group>
            <Text mb={10} size="sm" c="dimmed" lineClamp={5}>
              {data[0].vacationDes}
            </Text>
            <Button size="compact-md" className="sugg-grid-button" rightSection={<IconCircleArrowRight />}>Continue Reading</Button>
          </Card>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 4, sm: 6 }}>
        <Card shadow="lg" padding="lg" radius="lg" withBorder classNames={{ root: 'sugg-grid-card-root' }}>
            <Card.Section>
              <Image src={data[0].image}
                height={160}
                alt="Norway" />
            </Card.Section>
            <Group justify="space-between" mt="md" mb="xs">
              <Text className="sugg-grid-card-title" fw={600}>{data[0].title}</Text>
              <Badge className="sugg-grid-badge">{data[0].period}</Badge>
            </Group>
            <Text mb={10} size="sm" c="dimmed" lineClamp={5}>
              {data[0].vacationDes}
            </Text>
            <Button size="compact-md" className="sugg-grid-button" rightSection={<IconCircleArrowRight />}>Continue Reading</Button>
          </Card>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 4, sm: 6 }}>
        <Card shadow="lg" padding="lg" radius="lg" withBorder classNames={{ root: 'sugg-grid-card-root' }}>
            <Card.Section>
              <Image src={data[0].image}
                height={160}
                alt="Norway" />
            </Card.Section>
            <Group justify="space-between" mt="md" mb="xs">
              <Text className="sugg-grid-card-title" fw={600}>{data[0].title}</Text>
              <Badge className="sugg-grid-badge">{data[0].period}</Badge>
            </Group>
            <Text mb={10} size="sm" c="dimmed" lineClamp={5}>
              {data[0].vacationDes}
            </Text>
            <Button size="compact-md" className="sugg-grid-button" rightSection={<IconCircleArrowRight />}>Continue Reading</Button>
          </Card>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 4, sm: 6 }}>
        <Card shadow="lg" padding="lg" radius="lg" withBorder classNames={{ root: 'sugg-grid-card-root' }}>
            <Card.Section>
              <Image src={data[0].image}
                height={160}
                alt="Norway" />
            </Card.Section>
            <Group justify="space-between" mt="md" mb="xs">
              <Text className="sugg-grid-card-title" fw={600}>{data[0].title}</Text>
              <Badge className="sugg-grid-badge">{data[0].period}</Badge>
            </Group>
            <Text mb={10} size="sm" c="dimmed" lineClamp={5}>
              {data[0].vacationDes}
            </Text>
            <Button size="compact-md" className="sugg-grid-button" rightSection={<IconCircleArrowRight />}>Continue Reading</Button>
          </Card>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 4, sm: 6 }}>
        <Card shadow="lg" padding="lg" radius="lg" withBorder classNames={{ root: 'sugg-grid-card-root' }}>
            <Card.Section>
              <Image src={data[0].image}
                height={160}
                alt="Norway" />
            </Card.Section>
            <Group justify="space-between" mt="md" mb="xs">
              <Text className="sugg-grid-card-title" fw={600}>{data[0].title}</Text>
              <Badge className="sugg-grid-badge">{data[0].period}</Badge>
            </Group>
            <Text mb={10} size="sm" c="dimmed" lineClamp={5}>
              {data[0].vacationDes}
            </Text>
            <Button size="compact-md" className="sugg-grid-button" rightSection={<IconCircleArrowRight />}>Continue Reading</Button>
          </Card>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 4, sm: 6 }}>
        <Card shadow="lg" padding="lg" radius="lg" withBorder classNames={{ root: 'sugg-grid-card-root' }}>
            <Card.Section>
              <Image src={data[0].image}
                height={160}
                alt="Norway" />
            </Card.Section>
            <Group justify="space-between" mt="md" mb="xs">
              <Text className="sugg-grid-card-title" fw={600}>{data[0].title}</Text>
              <Badge className="sugg-grid-badge">{data[0].period}</Badge>
            </Group>
            <Text mb={10} size="sm" c="dimmed" lineClamp={5}>
              {data[0].vacationDes}
            </Text>
            <Button size="compact-md" className="sugg-grid-button" rightSection={<IconCircleArrowRight />}>Continue Reading</Button>
          </Card>
        </Grid.Col>
      </Grid>
    </div>
  );
}

export default SuggestionsGrid;