import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'

export type TodoAppProps = {
  onLogout: () => void
}
const TodoApp: FC<TodoAppProps> = (props) => {
  const handleLogout = () => {
    props.onLogout?.()
  }
  return (
    <div>
      <Link to='/password-change'><Button>Password Change</Button></Link>
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  )
}

export default TodoApp
