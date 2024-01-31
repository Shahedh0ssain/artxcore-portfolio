


import Hero from "./components/hero"
import RecomandSection from "./components/recomandSection"
import BlogBrowseSection from "./components/blogBrowseSection"
import BlogsSection from "./components/blogsSection"
// import TeamSection from "./components/teamSection"

const Home = () => {
  return (
    <main className="max-w-screen-2xl  mx-auto px-2  md:px-5 lg:px-5 relative">
      <Hero></Hero>
      <RecomandSection></RecomandSection>
      {/* <IconSection></IconSection> */}
      <BlogBrowseSection></BlogBrowseSection>
      <BlogsSection></BlogsSection>
      {/* <TeamSection></TeamSection> */}
    </main>
  )
}
export default Home
