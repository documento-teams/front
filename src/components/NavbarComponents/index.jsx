import { Button, Group, Image } from '@mantine/core';
import Logo from '../../assets/LogoDocumento.png';
import { IconFileAnalytics, IconLogout, IconUser } from '@tabler/icons-react';

const Navbar = () => {
  return (
    <header style={{ borderBottom: '1px solid #ddd', padding: '10px 20px', display: 'flex', justifyContent: 'space-between' }}>
      <Group position="left" spacing="xs">
        <Image src={Logo} alt="Logo" width={45} height={45} style={{ padding: '10px 10px' }} />
        <Button leftSection={<IconFileAnalytics size={20} />} variant="subtle">Document</Button>
        <Button leftSection={<IconUser size={20} />} variant="subtle">Profile</Button>
      </Group>
      <Group position="right" spacing="xs">
        <Button leftSection={<IconLogout size={20} />} variant="subtle">Déconnexion</Button>
      </Group>
    </header>
  );
};

export default Navbar;