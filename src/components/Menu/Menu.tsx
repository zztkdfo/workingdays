import { ReactElement } from 'react'
import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core'
import { Link } from 'react-router-dom'
import { UserMenu, ContactMenu } from './MenuItem'
import { MenuType } from './types'

export default function Menu(): ReactElement {
  return (
    <>
      <List>
        {UserMenu.map((item: MenuType) => (
          <ListItem button key={item.menuCode}>
            <ListItemIcon>{item.menuIcon}</ListItemIcon>
            <Link to={item.path}>
              <ListItemText primary={item.menuName} />
            </Link>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {ContactMenu.map((item: MenuType) => (
          <ListItem button key={item.menuCode}>
            <ListItemIcon>{item.menuIcon}</ListItemIcon>
            <Link to={item.path}>
              <ListItemText primary={item.menuName} />
            </Link>
          </ListItem>
        ))}
      </List>
    </>
  )
}
