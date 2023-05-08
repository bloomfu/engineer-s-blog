import Header from '../organisms/Header'

interface Props {
  children: React.ReactNode
}

function index({ children }: Props) {
  return (
    <>
      <Header>
        <section>
          <h2 className='text-2xl font-bold text-center my-4'>🍞engineer Blog</h2>
          {children}
        </section>
      </Header>
    </>
  )
}

export default index
