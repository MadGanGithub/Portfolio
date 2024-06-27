import React from 'react'

interface TagProps {
  name: string,
  link: string
}

const Tag: React.FC<TagProps> = ({ name, link }) => {
  return (
    <span className='rounded-full bg-slate-200 text-black border-2 border-gray-400 px-1'>
      <a href={link}>{name}</a>
    </span>
  )
}

export default Tag
