import Header from "@/components/layout/Header"
import Hero from "@/components/layout/Hero"
import HomeMenu from "@/components/layout/HomeMenu"
import SectionHeaders from "@/components/layout/SectionHeaders"

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <HomeMenu />
      
      <section className="text-center my-16">
        <SectionHeaders
          subHeader={'Our story'}
          mainHeader={'About us'}
        />

        <div className="text-gray-500 max-w-2xl mx-w-md mx-auto mt-4 flex flex-col gap-4">
          <p>
            Officia aliquip elit est do esse deserunt cillum officia irure. Nostrud aliqua laborum proident et deserunt. Occaecat cupidatat ad quis ipsum et enim nostrud velit exercitation. Veniam proident cillum quis est ex.
          </p>
          <p>
            Officia aliquip elit est do esse deserunt cillum officia irure. Nostrud aliqua laborum proident et deserunt.
          </p>
          <p>
            Officia aliquip elit est do esse deserunt cillum officia irure.
          </p>
        </div>

      </section>

      <section className="text-center my-8">
        <SectionHeaders
          subHeader={'Don\'t hesitate'}
          mainHeader={'Contact us'}
        />
        <div className="mt-8">
          <a className="text-4xl uderline text-gray-500"  href="tel:+573238658945">+57 323 865 8945</a>
        </div>
      </section>

      <footer className="border-t p-8 text-center text-gray-500 mt-16">
        &copy; 2023 All rights reserved
      </footer>
    </>
  )
}
