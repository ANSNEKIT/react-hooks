import React, { useContext, useState } from 'react'
import { alertContext } from '../context/alert/alertContext'
import { githubContext } from '../context/github/githubContext'

export const Search = () => {
  const [value, setValue] = useState('')
  const {show} = useContext(alertContext)
  const github = useContext(githubContext)

  const onSubmit = (evt) => {
    if (evt.key !== 'Enter') {
      return
    }

    if(value.trim()) {
      github.search(value.trim())
    } else {
      show('Введите данные пользователя!')
    }
  }

  return (
    <div className="form-group">
      <input 
        type="text" 
        className="form-control"
        placeholder="Введите ник пользователя..."
        onKeyPress={onSubmit}
        value={value}
        onChange={(evt) => setValue(evt.target.value)}
      />
    </div>
  )
}
