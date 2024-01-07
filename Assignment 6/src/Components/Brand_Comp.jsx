import Logo_Img from '../../public/images/logo.png'

export const Brand_Comp = (props) => {
  return (
    <div>
      <img src={Logo_Img}  width={props.width} alt="" />
    </div>
  )
}
