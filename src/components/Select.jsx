import React, {useId} from 'react'

function Select( {
    options,
    lable,
    className,
    ...props
}, ref ) {
    const id = useId()
  return (
    <div className='w-full'>
        {lable && <lable htmlFor={id} className=''></lable>}
        <select
        {...props}
        id={id}
        ref={ref}
        className={`px-3 py-2  bg-white text-red-400 outline-none border-gray-200
        w-full ${className}`}>

      {options?.map((option) => (
        <option key={option} value={option}>
            {option}
        </option>
      ))}
        </select>
      
    </div>
  )
}

export default  React.forwardRef(Select)
