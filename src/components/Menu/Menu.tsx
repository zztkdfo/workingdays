import { ReactElement } from 'react'
import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core'
import DashboardIcon from '@material-ui/icons/Dashboard'
import DateRangeIcon from '@material-ui/icons/DateRange'
import ContactMailIcon from '@material-ui/icons/ContactMail'
import ScheduleIcon from '@material-ui/icons/Schedule'
import NotificationImportantIcon from '@material-ui/icons/NotificationImportant'

export interface MenuType {
  menuName: string
  menuCode: string
  menuIcon: ReactElement
}

export const userMenu: MenuType[] = [
  {
    menuName: '대시보드',
    menuCode: 'dashboard',
    menuIcon: <DashboardIcon />
  },
  {
    menuName: '근무내역 조회',
    menuCode: 'workingList',
    menuIcon: <ScheduleIcon />
  },
  {
    menuName: '근무계획',
    menuCode: 'workingSchedule',
    menuIcon: <DateRangeIcon />
  }
]

export const contactMenu: MenuType[] = [
  {
    menuName: '문의하기',
    menuCode: 'inquiry',
    menuIcon: <ContactMailIcon />
  },
  {
    menuName: '공지사항',
    menuCode: 'info',
    menuIcon: <NotificationImportantIcon />
  }
]

export default function Menu(): ReactElement {
  return (
    <>
      <List>
        {userMenu.map((item: MenuType) => (
          <ListItem button key={item.menuCode}>
            <ListItemIcon>{item.menuIcon}</ListItemIcon>
            <ListItemText primary={item.menuName} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {contactMenu.map((item: MenuType) => (
          <ListItem button key={item.menuCode}>
            <ListItemIcon>{item.menuIcon}</ListItemIcon>
            <ListItemText primary={item.menuName} />
          </ListItem>
        ))}
      </List>
    </>
  )
}
