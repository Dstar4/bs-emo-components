import { StyledButton } from './button.styles'

export function Button({ text, variant = 'primary', clickFunction, value, label=text }) {
  const myClick = e => {
    e.preventDefault()
    clickFunction(e)
  }

  return (
    <StyledButton className={`btn btn-${variant}`} value={value} label={label} onClick={e => myClick(e)}>
      {text}
    </StyledButton>
  )
}

// export function CustomBtn() {
//   return (
//     <Button
//       className={`btn btn-info`}
//       value="custom"
//       onClick={(e) => console.log(e.target.value)}
//     >
//       Custom Btn
//     </Button>
//   );
// }
