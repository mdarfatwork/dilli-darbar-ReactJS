import React from 'react'
import { banner } from '../../assets/fake-data/images'

const BgHeader = ({data}) => {
    const containerStyle = {
        background: `linear-gradient(rgba(33, 34, 69, .6980392156862745), rgba(33, 34, 69, .6980392156862745)),
                     url(${banner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      };
  return (
    <div style={containerStyle} className="w-full py-16" >
        <div className="text-white text-4xl font-black w-[90%] 2xl:w-[65%] mx-auto">{data}</div>
    </div>
  )
}

export default BgHeader