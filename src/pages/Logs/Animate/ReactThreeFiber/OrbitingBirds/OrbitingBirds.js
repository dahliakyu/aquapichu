import RenderBirds from './RenderBirds'
import DiscreteSlider from './tools/DiscreetSlider'
import ChangeHandler from './tools/ChangeHandler'
import ButtonEventHandler from './tools/ButtonEventHandler'
const Blog = () => {
  const BirdNumber = 20
  return (
    <section className="bg-white dark:bg-stone-800">
      <div className="max-w-2xl mx-auto h-48 bg-white dark:bg-stone-800">
      <RenderBirds
        number = {BirdNumber}
      /> 
      <DiscreteSlider 
      />
      </div>
    </section>
  )
}

export default Blog