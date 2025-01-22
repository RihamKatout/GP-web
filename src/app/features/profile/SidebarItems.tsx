import { ProfileSectionsEnum } from "../../types";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import StorefrontIcon from '@mui/icons-material/Storefront';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import LogoutIcon from '@mui/icons-material/Logout';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import LocalMallIcon from '@mui/icons-material/LocalMall';

export const SidebarItems = [
  {
    id: 1,
    title: "Profile",
    icon: <AccountCircleIcon />,
    section: ProfileSectionsEnum.Profile,
  },
  {
    id: 2,
    title: "My orders",
    icon: <LocalMallIcon />,
    section: ProfileSectionsEnum.MyOrders,
  },
  {
    id: 3,
    title: "My stores",
    icon: <StorefrontIcon />,
    section: ProfileSectionsEnum.MyStores,
  },
  {
    id: 4,
    title: "Dashboard",
    icon: <SpaceDashboardIcon />,
    section: ProfileSectionsEnum.AdminDashboard,
  },
  {
    id: 5,
    title: "Settings",
    icon: <SettingsSuggestIcon />,
    section: ProfileSectionsEnum.Settings,
  },
  {
    id: 6,
    title: "Logout",
    icon: <LogoutIcon />,
    section: ProfileSectionsEnum.Logout,
  },
];
