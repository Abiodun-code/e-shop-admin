import { MdOutlineDashboard } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { IoCarSportOutline, IoSettingsOutline } from "react-icons/io5";
import { CiCalendarDate } from "react-icons/ci";
import { GoOrganization } from "react-icons/go";

export const SideList = [
  {
    id: 1,
    name: 'Overview',
    path: '/overview',
    icon: MdOutlineDashboard,
  },
  {
    id: 2,
    name: 'Garage Connect Admin',
    path: '/garage-connect',
    icon: GoOrganization,
  },
  {
    id: 7,
    name: 'Settings',
    path: '/settings',
    icon: IoSettingsOutline,
  }
]
