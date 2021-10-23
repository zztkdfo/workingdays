import { ReactElement, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import CloseIcon from '@material-ui/icons/Close'
import './NavBar.css'
// import UserAddButton from './../UserAddButton'
import { Menu } from './MenuItem'
import MenuIcon from '@material-ui/icons/Menu'
import { MenuType } from './types'

function NavBar(): ReactElement {
  const [mobile, setMobile] = useState(false)
  const [sidebar, setSidebar] = useState(false)

  useEffect(() => {
    if (window.innerWidth < 1065) {
      setMobile(true)
    }
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1065) {
        setMobile(true)
      } else {
        setMobile(false)
        setSidebar(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo" onClick={() => setSidebar(false)}>
          NCITS
        </Link>
        {!mobile && (
          <ul className="nav-items">
            {Menu.map((item: MenuType): ReactElement => {
              return (
                <li key={item.menuCode} className="sidebar-item">
                  <Link to={item.path}>
                    {item.menuIcon}
                    <span>{item.menuName}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        )}
        {/* {!mobile && <UserAddButton />} */}

        {mobile && (
          <div className="sidebar-toggle">
            {sidebar ? (
              <CloseIcon
                className="sidebar-toggle-logo"
                onClick={() => setSidebar(!sidebar)}
              />
            ) : (
              <MenuIcon
                className="sidebar-toggle-logo"
                onClick={() => setSidebar(!sidebar)}
              />
            )}
          </div>
        )}
      </nav>

      <div className={sidebar ? 'sidebar active' : 'sidebar'}>
        <ul className="sidebar-items">
          {Menu.map((item: MenuType): ReactElement => {
            return (
              <li
                key={item.menuCode}
                className="sidebar-item"
                onClick={() => setSidebar(false)}
              >
                <Link to={item.path}>
                  {item.menuIcon}
                  <span>{item.menuName}</span>
                </Link>
              </li>
            )
          })}
        </ul>
        {/* <UserAddButton
          onClick={() => {
            setSidebar(false)
          }}
        /> */}
      </div>
    </>
  )
}

export default NavBar
