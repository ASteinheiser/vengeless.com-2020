import { useTheme } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

export default function Home({ toggleTheme }) {
  const theme = useTheme();

  return (
    <div className='fill' style={{ backgroundColor: theme.palette.secondary.main }}>
      <Button variant="contained" color="primary" onClick={toggleTheme}>
        Toggle Theme
      </Button>
    </div>
  )
}
