import React from 'react'

const Input = React.forwardRef(({ resultList, ...props }, ref) => (
    <div>
        {resultList}
        <input { ...props } ref={ ref } />
    </div>
))

Input.displayName = 'Input'

export default Input
