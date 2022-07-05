import TutorialCard from '../TutorialCard'
import { Div } from './listStyles'
import tutorials from '../../const/routes'

const ListOfTutorials = () => {
  return (
    <Div className='container'>
      {
        tutorials.map(({ path, title, description, tags }) => (
          <TutorialCard
            key={path}
            path={path}
            title={title}
            description={description}
            tags={tags}
          />
        ))
      }
    </Div>
  )
}

export default ListOfTutorials
