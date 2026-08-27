import { Navbar } from "@/components/NavBar"

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <section className="flex min-h-[80vh] items-center justify-center">
          <h1 className="text-4xl font-bold">Mapping Myanmar</h1>
        </section>
      </main>
    </>
  )
}
