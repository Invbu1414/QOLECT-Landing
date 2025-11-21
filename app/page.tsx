import ClientWrapper from '@/components/ClientWrapper'
import { getFeaturedExperiences, getNews } from '@/lib/api'

export default async function HomePage() {
  // Fetch data on the server
  const [experiences, news] = await Promise.all([
    getFeaturedExperiences(),
    getNews()
  ])

  return (
    <ClientWrapper experiences={experiences} news={news} />
  )
}