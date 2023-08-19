import HomePage from "../components/home.js"
import AboutMePage from "@/components/tentang-saya.js"
import ArticlePage from "@/components/artikel.js"
import FooterPage from "@/components/footer.js"
import GalleryPage from "@/components/galeri.js"

export default function MyApp() {
  return (
    <div>
      <HomePage />
      <AboutMePage />
      <ArticlePage />
      <GalleryPage />
      <FooterPage />
    </div>
  )
}