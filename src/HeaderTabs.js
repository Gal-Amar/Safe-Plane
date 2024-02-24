import cx from 'clsx';
import { useState } from 'react';
import {
  Image,
  Container,
  Avatar,
  UnstyledButton,
  Group,
  Text,
  Menu,
  Tabs,
  rem,
  useMantineTheme,
} from '@mantine/core';
import {
  IconLogout,
  IconHeart,
  IconStar,
  IconSettings,
  IconTrash,
  IconSwitchHorizontal,
  IconChevronDown,
} from '@tabler/icons-react';
import safePlane from './assets/safeplanelogo.png';


const user = {
  name: 'Jane Spoonfighter',
  email: 'janspoon@fighter.dev',
  image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-5.png',
};

const tabs = [
  'Home',

];

export function HeaderTabs() {
  const theme = useMantineTheme();
  // const [opened, { toggle }] = useDisclosure(false);
  const [userMenuOpened, setUserMenuOpened] = useState(false);

  const items = tabs.map((tab) => (
    <Tabs.Tab value={tab} key={tab}>
      {tab}
    </Tabs.Tab>
  ));

  return (
    <div className="header">
    <Container  size="lg">
      <Group justify="space-between">
        <Group>
          <Image src={safePlane} w={120} />

          {/* <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" /> */}
          <Container size="md" pt={15}>
            <Tabs
              radius={5}
              defaultValue='Home'
              visibleFrom="sm"
              color='#f4976c'
              classNames={{
                root: "tabs",
                list: "tabsList",
                tab: "tab",
              }}
            >
              <Tabs.List grow>
                <Tabs.Tab value='Home'>Home</Tabs.Tab>
                <Tabs.Tab value='about'>about</Tabs.Tab>

              </Tabs.List>
            </Tabs>
          </Container>
        </Group>
        <Menu
          width={260}
          size={rem(5)}
          position="bottom-end"
          transitionProps={{ transition: 'pop-top-right' }}
          onClose={() => setUserMenuOpened(false)}
          onOpen={() => setUserMenuOpened(true)}
          withinPortal
        >
          <Menu.Target>
            <UnstyledButton
              className={cx("user", { ["userActive"]: userMenuOpened })}
            >
              <Group gap={7}>
                <Avatar src={user.image} alt={user.name} radius={"xxl"} size={35} />
                <Text fw={500} size="md" lh={1} mr={3}>
                  {user.name}
                </Text>
                <IconChevronDown style={{ width: rem(12), height: rem(12) }} stroke={1.5} />
              </Group>
            </UnstyledButton>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Item
              leftSection={
                <IconHeart
                  style={{ width: rem(16), height: rem(16) }}
                  color={theme.colors.red[6]}
                  stroke={1.5}
                />
              }>
              Liked posts
            </Menu.Item>
            <Menu.Item
              leftSection={
                <IconStar
                  style={{ width: rem(16), height: rem(16) }}
                  color={theme.colors.yellow[6]}
                  stroke={1.5}
                />
              }>
              Saved tours
            </Menu.Item>
            <Menu.Label>Settings</Menu.Label>
            <Menu.Item
              leftSection={
                <IconSettings style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
              }>
              Account settings
            </Menu.Item>
            <Menu.Item
              leftSection={
                <IconSwitchHorizontal style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
              }>
              Change account
            </Menu.Item>
            <Menu.Item
              leftSection={
                <IconLogout style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
              }
            >
              Logout
            </Menu.Item>
            <Menu.Divider />
            <Menu.Label>Danger zone</Menu.Label>
            <Menu.Item
              color="red"
              leftSection={<IconTrash style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
            >
              Delete account
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </Group>
    </Container>

    </div>
  );
}