import type { NextPage } from 'next'
import About from 'src/components/About'

const Home: NextPage = () => {
  return (
    <div className="space-y-14 lg:space-y-24">
      <main className="mx-auto max-w-4xl antialiased">
        <About />
      </main>
    </div>
  )
}

export default Home
