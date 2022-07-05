import { motion } from 'framer-motion'
import { useParams } from 'react-router-dom'
import Floating from '../../components/Floating'
import Header from '../../components/Header'
import tutorials from '../../const/routes'
import './tutorial.css'

const Tutorial = () => {
  const { id } = useParams()
  const tutorialData = tutorials.find(tuto => tuto.path.endsWith(id))

  return (
    <motion.section
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: '100%', opacity: 1 }}
    >
      <div className='container'>
        <Header>{tutorialData.title}</Header>
        <div className='container mt-20'>
          <Floating>
            <div className='tutorialContent'>
              {tutorialData.content()}
            </div>
          </Floating>
        </div>
      </div>
    </motion.section>
  )
}

export default Tutorial
