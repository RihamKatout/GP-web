import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import StoreIcon from '@mui/icons-material/Store';
import ForumIcon from '@mui/icons-material/Forum';
import FeedbackIcon from '@mui/icons-material/Feedback';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import HistoryIcon from '@mui/icons-material/History';
import SummarizeIcon from '@mui/icons-material/Summarize';
import { DashboardSectionsEnum } from "../../../types";

export const SidebarItems = [
  {
    id: 1,
    title: "Dashboard",
    icon: <SpaceDashboardIcon />,
    section: DashboardSectionsEnum.Dashboard,
  },
  {
    id: 2,
    title: "Admins",
    icon: <AdminPanelSettingsIcon />,
    section: DashboardSectionsEnum.Admins,
  },
  {
    id: 3,
    title: "Stores",
    icon: <StoreIcon />,
    section: DashboardSectionsEnum.Stores,
  },
  {
    id: 4,
    title: "Messages",
    icon: <ForumIcon />,
    section: DashboardSectionsEnum.Messages,
  },
//   {
//     id: 5,
//     title: "Feedback",
//     icon: <FeedbackIcon />,
//     section: DashboardSectionsEnum.Feedback,
//   },
  {
    id: 6,
    title: "Offers",
    icon: <LocalOfferIcon />,
    section: DashboardSectionsEnum.Offers,
  },
  {
    id: 7,
    title: "Reports",
    icon: <SummarizeIcon />,
    section: DashboardSectionsEnum.Reports,
  },
  {
    id: 8,
    title: "Activity log",
    icon: <HistoryIcon />,
    section: DashboardSectionsEnum.Log,
  },
  {
    id: 9,
    title: "Settings",
    icon: <SettingsSuggestIcon />,
    section: DashboardSectionsEnum.Settings,
  },
];
