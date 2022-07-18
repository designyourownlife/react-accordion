import React, { useEffect, useState } from 'react'
import data from './data'
import SingleQuestion from './Question'

export const TabCtx = React.createContext()

const getLocalStorage = () => {
  let activeTab = window.localStorage.getItem('activeTab')
  if (activeTab) {
    return JSON.parse(activeTab)
  } else {
    return null
  }
}

function App() {
  const [questions, setQuestions] = useState(data)
  const [openTab, setOpenTab] = useState(getLocalStorage())

  const handleTabClick = (id) => {
    setOpenTab(id)
  }

  useEffect(() => {
    window.localStorage.setItem('activeTab', JSON.stringify(openTab))
  }, [openTab])

  return (
      <main>
        <div className='container'>
          <h3>Questions &amp; answers about login</h3>
          <section className='info'>
            {questions.map((question) => (
              <TabCtx.Provider value={{ question, openTab, handleTabClick }}>
              <SingleQuestion key={question.id} />
              </TabCtx.Provider>
            ))}
          </section>
        </div>
      </main>
  )
}

export default App
