import Img_Item from '../../public/images/hm1-single-2.png'
export const Item_Img_Comp = (props) => {
    return (
        <div>
        <div className='w-full mx-auto pe-4 p-4'>
            <img src={Img_Item} width={props.width} alt="" />
        </div>
        <div className='lg:W-1/2 hidden'>
            <img src={Img_Item} width={props.width} alt="" />
        </div>
        </div>
    )
}