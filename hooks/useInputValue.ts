import { useState, useCallback } from 'react'

export const useInputValue = (initialValue: string) => {
  const [value, setValue] = useState(initialValue)
  const [show, setShow] = useState(false)

  const onChange = useCallback(function (e: any) {
    setValue(e.currentTarget.value)    
  }, []) 

  return {
    value,
    onChange,
    setValue,
    show,
	  setShow
  }
}