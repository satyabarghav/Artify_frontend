import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay"
import { Link } from "react-router-dom";

export default function Component() {
  return (
    <section  className="w-full pt-12 md:pt-24 lg:pt-32">
      <div className="container space-y-10 xl:space-y-16">
        <div className="grid gap-4 px-10 md:grid-cols-2 md:gap-16">
          <div>
            <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
              Welcome to Artify, where creativity meets expression in every
              stroke
            </h1>
          </div>
          <div className="flex flex-col items-start space-y-4">
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Step into a realm where artistry knows no bounds, where every
              canvas holds a universe of stories waiting to be told. Discover
              the magic of Artify, your premier destination for exploring the
              depths of creativity. Begin your journey now and unlock a world of
              inspiration.
            </p>
            <div className="space-x-4">
              <Link
                className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                to="/shop"
              >
                Explore Now
              </Link>
            </div>
          </div>
        </div>
        <Carousel opts={{
            loop: true,
            
        }} plugins = {[
            Autoplay( {
                delay: 5000,
                stopOnFocusIn: true,
                stopOnInteraction:false,
                stopOnMouseEnter:true,
            }),
        ]}>
          <CarouselContent>
            <CarouselItem>
              <img
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-t-xl object-cover"
                height="400"
                src="https://images.unsplash.com/photo-1545989253-02cc26577f88?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width="1270"
                style={{backgroundSize: 'cover', backgroundPosition: 'center', }}

              />
            </CarouselItem>
            <CarouselItem>
              <img
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-t-xl object-cover"
                height="400"
                src="https://images.unsplash.com/photo-1579783902915-f0b0de2c2eb3?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width="1270"
              />
            </CarouselItem>
            <CarouselItem>
              <img
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-t-xl object-cover"
                height="400"
                src="https://images.unsplash.com/photo-1556005693-00fff02f134c?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width="1270"
              />
            </CarouselItem>
            <CarouselItem>
              <img
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-t-xl object-cover"
                height="400"
                src="https://images.unsplash.com/photo-1517427677506-ade074eb1432?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width="1270"
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
