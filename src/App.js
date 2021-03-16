import 'bootstrap/dist/css/bootstrap.css'
import { Button, CustomBtn } from './components/buttons/button.component'

export default function App() {
  const primaryClick = e => {
    console.log('PRIMARY CLICK', e.target.value)
  }

  const secondaryClick = e => {
    console.log('Seccondary CLICK', e.target.value)
  }

  return (
    <div className='App'>
      <Button text='Primary Button' variant='primary' clickFunction={primaryClick} value={true} />
      <Button text='Danger Button' variant='danger' clickFunction={secondaryClick} value={false} />
      {/* <CustomBtn /> */}
    </div>
  )
}
