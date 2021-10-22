import { MenuType } from './types'
import DashboardIcon from '@material-ui/icons/Dashboard'
import DateRangeIcon from '@material-ui/icons/DateRange'
import ContactMailIcon from '@material-ui/icons/ContactMail'
import ScheduleIcon from '@material-ui/icons/Schedule'
import NotificationImportantIcon from '@material-ui/icons/NotificationImportant'

export const UserMenu: MenuType[] = [
  {
    menuName: '대시보드',
    menuCode: 'dashboard',
    path: '/dashboard',
    menuIcon: <DashboardIcon />
  },
  {
    menuName: '근무내역 조회',
    menuCode: 'workingList',
    path: '/list',
    menuIcon: <ScheduleIcon />
  },
  {
    menuName: '근무계획',
    menuCode: 'workingPlan',
    path: '/plan',
    menuIcon: <DateRangeIcon />
  }
]

export const ContactMenu: MenuType[] = [
  {
    menuName: '문의하기',
    menuCode: 'inquiry',
    path: '/inquiry',
    menuIcon: <ContactMailIcon />
  },
  {
    menuName: '공지사항',
    menuCode: 'info',
    path: '/info',
    menuIcon: <NotificationImportantIcon />
  }
]
