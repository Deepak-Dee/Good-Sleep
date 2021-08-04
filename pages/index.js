import Home from '../components/Home'
import Layout from '../components/layout/Layout'
import {getRooms} from '../redux/actions/roomAction'

export default function Index() {
  return (
    <Layout>
      <Home />
    </Layout>
  )
}

export const getServerSideProps = 