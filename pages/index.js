import { useDispatch } from 'react-redux'
import { useTheme } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

export default function Home() {
  const dispatch = useDispatch()
  const theme = useTheme()

  const toggleTheme = () => dispatch({ type: 'TOGGLE_THEME' })

  return (
    <div className='fill' style={{ backgroundColor: theme.palette.secondary.main }}>
      <Button variant="contained" color="primary" onClick={toggleTheme}>
        Toggle Theme
      </Button>
    </div>
  )
}
