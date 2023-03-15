import { Dashboard, ListAlt, Person, DisplaySettings } from "@mui/icons-material"
import colors from './styles/colors';
const styles = {
  iconSize: {
    p: 0.2,
    fontSize: "22px",
    color: colors.secondary,
  }
}

const Navigation = [
  {
    label: 'Dashboard',
    icon: <Dashboard sx={styles.iconSize} />,
    path: '/home',
  },
  {
    label: 'Orders',
    icon: <ListAlt sx={styles.iconSize} />,
    path: '/orders',
  },
  {
    label: 'MyProfile',
    icon: <Person sx={styles.iconSize} />,
    path: '/profile',
  },
  {
    label: 'Settings',
    icon: < DisplaySettings sx={styles.iconSize} />,
    path: '#',
  },
]

export default Navigation