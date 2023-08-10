import FirstPage from "../components/first-page.js"
import SecondPage from "@/components/second-page.js"
import ThirdPage from "@/components/third-page.js"
import FourthPage from "@/components/fourth-page.js"
import Footer from "@/components/footer.js"

export default function MyApp() {
  return (
    <div>
      <FirstPage />
      <SecondPage />
      <ThirdPage />
      <FourthPage />
      <Footer />
    </div>
  )
}