import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import Inventory2Icon from '@mui/icons-material/Inventory2';
import ForumIcon from '@mui/icons-material/Forum';
import FeedbackIcon from '@mui/icons-material/Feedback';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import HistoryIcon from '@mui/icons-material/History';
import SummarizeIcon from '@mui/icons-material/Summarize';
import { StoreDashboardSectionsEnum } from "../../../../types";

export const StoreSidebarItems = [
  {
    id: 1,
    title: "Dashboard",
    icon: <SpaceDashboardIcon />,
    section: StoreDashboardSectionsEnum.Dashboard,
  },
  {
    id: 2,
    title: "Orders",
    icon: <LocalMallIcon />,
    section: StoreDashboardSectionsEnum.Orders,
  },
  {
    id: 3,
    title: "Products",
    icon: <Inventory2Icon />,
    section: StoreDashboardSectionsEnum.Products,
  },
  {
    id: 4,
    title: "Messages",
    icon: <ForumIcon />,
    section: StoreDashboardSectionsEnum.Messages,
  },
  {
    id: 5,
    title: "Feedback",
    icon: <FeedbackIcon />,
    section: StoreDashboardSectionsEnum.Feedback,
  },
  {
    id: 6,
    title: "Offers",
    icon: <LocalOfferIcon />,
    section: StoreDashboardSectionsEnum.Offers,
  },
  {
    id: 7,
    title: "Reports",
    icon: <SummarizeIcon />,
    section: StoreDashboardSectionsEnum.Reports,
  },
  {
    id: 8,
    title: "Activity log",
    icon: <HistoryIcon />,
    section: StoreDashboardSectionsEnum.Log,
  },
  {
    id: 9,
    title: "Settings",
    icon: <SettingsSuggestIcon />,
    section: StoreDashboardSectionsEnum.Settings,
  },
];
