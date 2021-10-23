import { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import PersonAddIcon from '@material-ui/icons/PersonAdd'
import './UserAddButton.css'
export interface UserAddButtonProps {
  onClick?: () => void
}
function UserAddButton(props: UserAddButtonProps): ReactElement {
  return (
    <>
      <Link to="signup">
        <button className="btn">
          <PersonAddIcon />
          <span>Sign Up</span>
        </button>
      </Link>
    </>
  )
}

export default UserAddButton
