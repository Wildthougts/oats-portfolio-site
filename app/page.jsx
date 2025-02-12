import Footer2 from "@/components/footers/Footer2";

import Header2 from "@/components/headers/Header2";

import Home2 from "@/components/homes/home-2";
import Hero2 from "@/components/homes/home-2/heros/Hero2";
import { boldOnepage } from "@/data/menu";

export const metadata = {
  metadataBase: new URL("https://abimbolaosunfuyi.com"),
  keywords: "Abimbola Osunfuyi, Chess, Chess Coaching, Nigerian Chess, ",
  title: "Abimbola Osunfuyi | Chess, Creativity, and Entrepreneurship",
  openGraph: {
    description:
      "Discover the world of Abimbola Osunfuyi, a chess enthusiast, creative entrepreneur, and lover of art and books. ",
    images: ["/assets/images/Bimbo3.jpg"],
  },
};

export default function Home2TypedTextOnepage() {
  return (
    <>
      <div className="theme-bold">
        <div className="page" id="top">
          <nav className="main-nav transparent stick-fixed wow-menubar">
            <Header2 links={boldOnepage} />{" "}
          </nav>
          <main id="main">
            <section
              className="home-section parallax-mousemove-scene scrollSpysection"
              id="home"
            >
              <Hero2 />
            </section>

            <Home2 onePage />
          </main>
          <footer className="footer-1 bg-dark-1 light-content">
            <Footer2 />
          </footer>
        </div>{" "}
      </div>{" "}
    </>
  );
}
