import RenderBirds from './RenderBirds'

const Blog = () => {
  const BirdNumber = 200
  return (
    <div>
      <RenderBirds
        number = {BirdNumber}
       />
    </div>
  )
}

export default Blog