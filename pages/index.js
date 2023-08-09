import FirstPage from "../components/first-page.js"
import StartPoint from "@/components/start-point.js"

export default function MyApp() {
  return (
    <div>
      <div className="flex h-screen w-screen">
        <FirstPage />
      </div>
      <StartPoint />
    </div>
  )
}