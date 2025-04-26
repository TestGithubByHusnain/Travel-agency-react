import { Header } from "components"

const Dashboard = () => {
const user= { name: 'Husnain Ali'}
  return (
    <main className='dashboard wrapper'>
      <Header 
      title={`Welcome ${user?.name ?? 'Guest'}👋🏽`}
      description="Track activity, trends and popular destinations in resl time"
      />
      Dashboard Page Contents
          </main>
  )
}

export default Dashboard
