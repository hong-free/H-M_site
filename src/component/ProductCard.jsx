import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({item}) => {
  const navigate=useNavigate()
  const showDetail=()=>{
navigate(`/product/${item.id}`)
  }
  return (
    <div className='card border-0' onClick={showDetail}>
      <img src={item?.img} />
      {item?.choice==true? <div className='choice'>Consciou choice</div>:""}
      <div>{item?.title}</div>
      <div>{item?.price}원</div>
     <div className='size-list'>
  {item?.size?.map((s) => (
    <div key={s} className="size">{s} </div>
  ))}
</div>
      <div>{item?.new==true?"신제품":""}</div>
         </div>
  )
}

export default ProductCard
