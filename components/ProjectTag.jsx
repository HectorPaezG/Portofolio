import React from 'react'

function ProjectTag  ({name, onClick, isSelected}) {
    const buttonStyles = isSelected
    ? "text-white border-white hover:text-blue-700 hover:border-blue-700"
    : "text-white/60 border-slate-700 hover:border-blue-700 hover:text-blue-700"
  return (
    <button className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`} onClick={onClick}>{name}</button>
  )
}

export default ProjectTag