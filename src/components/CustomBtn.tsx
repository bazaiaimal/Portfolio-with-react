
type ButtonProps = {
    label: string,
    onClick?: () => void;
}

export const CustomBtn = ( { label , onClick}: ButtonProps) => {
  return (
    <button className='btn text-dark' onClick={onClick} style={{ backgroundColor: "#cdb269" , margin: '25px' , padding: '15px'}}>{label}</button>
  )
}
