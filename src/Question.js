import React, { useState, useEffect } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

import { TabCtx } from './App';

const Question = () => {
  const ctx = React.useContext(TabCtx)
  const { id, title, info } = ctx.question;
  const [showInfo, setShowInfo] = useState(false)

  const handleClick = () => {
    if (ctx.openTab === id) {
      setShowInfo(false)
      ctx.handleTabClick(null)
    } else {
      setShowInfo(ctx.openTab)
      ctx.handleTabClick(id)
    }
  }

  useEffect(() => {
    setShowInfo(false)
    if (ctx.openTab === id) {
      setShowInfo(ctx.openTab)
    }
  }, [ctx.openTab, id, setShowInfo])

  return (
    <article className='question'>
      <header>
        <h4>{title}</h4>
        <button className='btn' onClick={handleClick}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      <p className={`tab ${showInfo ? 'open' : 'closed'}`}>{info}</p>
    </article>
  )
}

export default Question;
