import { motion } from 'framer-motion'
import Header from '../../components/Header'
import ListOfTutorials from '../../components/ListOfTutorials'

const Home = () => {
  return (
    <motion.section
      className='tutorials'
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: '100%', opacity: 1 }}
    >
      <Header>Tutoriales</Header>
      <ListOfTutorials />
    </motion.section>
  )
}

export default Home
