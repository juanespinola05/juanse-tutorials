import { Link } from 'react-router-dom'
import Floating from '../Floating'
import Tag from '../Tag'
import { H3, P } from './cardStyle'

const TutorialCard = ({ path, title, description, tags }) => {
  return (
    <Link to={path}>
      <Floating>
        <H3>{title}</H3>
        <P>{description}</P>
        {
          tags.map(tag => <Tag key={tag}>{tag}</Tag>)
        }
      </Floating>
    </Link>
  )
}

export default TutorialCard
