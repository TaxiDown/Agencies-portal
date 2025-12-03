import { FeatureSection } from "@/components/features_section";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import VehicleCarousel from "@/components/vehicles";
import { getTranslations } from "next-intl/server";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const t = await getTranslations("lang");
  const items = [
    { number: "1", title: "Request to join", text: "But I must explain to you how all this mistaken idea of denouncing pleasure" },
    { number: "2", title: "Create bookings", text: "But I must explain to you how all this mistaken idea of denouncing pleasure" },
    { number: "3", title: "Manage ", text: "But I must explain to you how all this mistaken idea of denouncing pleasure" },
  ];
  return (
    <>
    <div className="flex flex-col min-h-screen justify-center font-sans bg-secondary/10">
      <Navbar />
      <div className="w-full h-screen bg-[url('/section1.jpg')] bg-cover bg-center ">
        <div className="absolute w-full h-screen inset-0 top-0 left-0 bg-gradient-to-r from-black/90 to-black/10"></div>

        <div className="text-white/80 relative z-20 h-full flex flex-col justify-center px-10 lg:px-20 max-w-full ">
        <h1 className="uppercase text-3xl sm:text-4xl md:text-6xl font-bold leading-tight tracking-tight">
          Simplify Agency <br />
          <span className="text-yellow-600/80">Transportation.</span>
        </h1>

        <p className="max-w-xl text-base md:text-lg mt-6 text-white/80 leading-relaxed font-light">
        A complete portal designed to meet every agency’s need for seamless comfort and transportation.               </p>

        <div className="mt-10 flex gap-4">
          <button className="group px-6 py-3 gap-2 flex border border-white/50 hover:bg-white/80 hover:text-black transition-all duration-300 ease-out rounded-lg text-sm font-semibold tracking-wide cursor-pointer hover:scale-105">
            <div className="h-5 w-5 rounded-full border-2 border-dashed border-white/50 transition-all duration-300 ease-out group-hover:border-black cursor-pointer group-hover:rotate-90 group-hover:scale-110"></div>
            <Link href="/" className="group-hover:scale-100">
              REQUEST TO JOIN
            </Link>
          </button>
        </div>
      </div>
      </div>
      <div className="flex justify-center container mx-auto px-4 my-15">
        <VehicleCarousel />
      </div>
      <section className="py-20 bg-accent/30 w-full px-20 ">
        <div className="max-w-5xl mx-auto text-center px-6">

          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            How it works?
          </h2>
          <p className="text-gray-600 mb-16">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
          </p>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {items.map((item) => {

              const rotation = (item.number) * 120; // 6 items → 360°/6 = 60°

              return (
                <div
                  key={item.number}
                  className="text-center flex flex-col items-center"
                >

                  <div
                    className="w-15 h-15 rounded-full flex items-center justify-center text-secondary font-semibold mb-4"
                    style={{
                      background: `conic-gradient(oklch(83.7% 0.128 66.29) 0deg ${rotation}deg, #eee ${rotation}deg 360deg)`
                    }}
                  >
                    <div className="text-orange-300 bg-white w-13 h-13 rounded-full flex items-center justify-center">
                      {item.number}
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm max-w-xs">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>
      
      <FeatureSection/>

      <section className="py-15 px-5 bg-secondary/70">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <h2 className="font-serif text-3xl md:text-4xl mb-12 text-center">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-serif">What is the Agencies Transportation Portal?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
              It’s a platform that allows hotels, travel agencies, and corporate partners to book transportation for their clients quickly and efficiently all in one place.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-serif">How do I register my agency?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
              Click Request To Join and complete the short registration form. Once approved, you’ll receive your agency credentials and can begin booking immediately.              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-serif">How do I manage or modify bookings?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
              All bookings appear in your centralized dashboard. From there, you can edit, cancel, or reassign bookings with instant updates.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-serif">What types of trips are available?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
              Yes. The platform works smoothly on phones, tablets, and desktops, perfect for hotel front desks or on-the-go agents.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-lg font-serif">How does billing work?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
              Yes. The platform works smoothly on phones, tablets, and desktops, perfect for hotel front desks or on-the-go agents.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger className="text-lg font-serif">How can I get support if I need help?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
              You can reach our support team through chat, email, or phone. Agencies also get priority support when needed.              </AccordionContent>
            </AccordionItem>
          </Accordion>

        </div>
      </section>

    </div>
    <Footer/>
    </>
  );
}
