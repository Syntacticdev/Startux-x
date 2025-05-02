"use client"
import Image from "next/image";
import Hero from "./components/Hero";
import Partners from "./components/Partners";
import { ArrowRight, CircleCheck, FolderRoot } from "lucide-react";
import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { processes } from "@/utils/data";
import Testimonies from "./components/Testimonies";
import Blog from "./components/Blog";
import { motion, AnimatePresence } from "motion/react"
export default function Home() {
  return (
    <div>
      <Hero />
      <Partners />

      <div className="py-10 px-4 sm:px-45">
        <div className="flex flex-col justify-self-center text-center justify-center gap-2 items-center sm:max-w-2/5 ">
          <h2 className="text-3xl font-bold">High-impact services
            for your business</h2>
          <p className="text-sm">High-impact services designed to drive business success with tailored solutions.</p>
        </div>

        <div className="features grid grid-col-1 gap-10 my-4 sm:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2
            }}
            className="feature-card px-7 py-10 rounded-md bg-[#DCE3ED]">
            <Image src="/icons/data-processing.png" alt="process management" width={25} height={25} />
            <h3 className="font-bold py-3">Project Management</h3>
            <p className="mb-3 text-sm sm:text-xs">Efficiently plan, execute, and deliver projects with our expert management solutions, ensuring success and timely results for your business.</p>
            <ArrowRight className="w-3 h-3" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.4
            }}
            className="feature-card px-7 py-10 rounded-md bg-[#FBE3D7]">
            <Image src="/icons/project.png" alt="process management" width={25} height={25} />
            <h3 className="font-bold py-3">Process Development</h3>
            <p className="mb-3 text-sm sm:text-xs">Streamline workflows and optimize efficiency with tailored process development solutions, ensuring seamless operations and measurable results for your business.</p>
            <ArrowRight className="w-3 h-3" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.6
            }}
            className="feature-card px-7 py-10 rounded-md  bg-[#F4F0ED]">
            <Image src="/icons/quality-assurance.png" alt="process management" width={25} height={25} />
            <h3 className="font-bold py-3">Quality Assurance</h3>
            <p className="mb-3 text-sm sm:text-xs">Ensure top-notch quality with our meticulous testing and validation processes, delivering reliable and flawless solutions for your business.</p>
            <ArrowRight className="w-3 h-3" />
          </motion.div>
        </div>

        <div className="cta flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.8
            }}
            className='flex gap-2 my-4'>
            <Link className='flex items-center gap-2 text-sm py-3 px-6 bg-black hover:bg-amber-400 text-white rounded-sm' href="/">
              Get in touch <ArrowRight className="w-3 h-3" />
            </Link>
            <Link className='text-sm py-3 px-6 border-2 border-gray-500 hover:bg-gray-500 hover:text-white  rounded-sm' href="/">
              Browse all services
            </Link>
          </motion.div>
        </div>
      </div>

      <section className="grid my-8 sm:grid-cols-2 px-4 sm:px-45">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.2
          }}
          className="h-90 relative bg-[#F6E6D4]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.2
            }}
            className="absolute flex gap-2 bg-[#F4F0ED] -left-[25px] sm:-left-[50px]  bottom-[40px] p-4 ">
            <div className="flex flex-col">
              <span className="font-bold text-3xl">100+</span>
              <span className="text-xs">Comapnies helped</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-3xl">250m</span>
              <span className="text-xs">Revenue generated</span>
            </div>
          </motion.div>
          <Image className="w-full h-full object-contain object-top " src='/images/business woman-Photoroom.png' alt="business woman" width={400} height={400} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, }}
          whileInView={{ opacity: 1, }}
          transition={{
            delay: 0.3
          }}
          className="h-90  flex flex-col justify-center  sm:p-15 gap-3 ">
          <h3 className=" text-4xl sm:text-2xl font-bold">The story behind
            our consulting firm</h3>

          <p className="text-sm">Our consulting firm is built on a foundation of trust, expertise, and innovation. Discover the story behind our journey and how we’ve helped businesses achieve remarkable success. Learn more about our mission, values, and the impact we create for our clients.</p>


          <Link className='flex items-center gap-2 text-sm py-3 w-fit px-6 bg-black hover:bg-amber-400 text-white rounded-sm' href="/">
            About our firm <ArrowRight className="w-3 h-3" />
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, }}
          whileInView={{ opacity: 1, }}
          transition={{
            delay: 0.4
          }}
          className="sm:h-90 flex flex-col justify-center py-5 sm:py-15 sm:pr-15 gap-3 ">
          <h3 className="text-4xl sm:text-2xl font-bold">Why choose <br /> Startux X</h3>

          <span className=" text-sm sm:text-xs">At Startux X, we specialize in creating user-centered designs that drive engagement and deliver exceptional experiences. Our team combines creativity, research, and cutting-edge technology to craft intuitive interfaces tailored to your business needs.</span>

          <ul className="flex flex-col gap-2">
            <li className="flex items-center gap-2">
              <CircleCheck className="fill-black text-white" />
              <span className="text-sm sm:text-xs">User-centered designs tailored to your business needs.</span>
            </li>
            <li className="flex items-center gap-2">
              <CircleCheck className="fill-black text-white" />
              <span className="text-sm sm:text-xs">Innovative solutions combining creativity and cutting-edge technology.
              </span>
            </li>
            <li className="flex items-center gap-2">
              <CircleCheck className="fill-black text-white" />
              <span className="text-sm sm:text-xs">Proven results driving engagement and exceptional user experiences.</span>
            </li>
          </ul>

          <Link className='text-sm py-3 px-6 border-2 w-fit border-gray-500  rounded-sm' href="/">
            More about us
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.5
          }}
          className="hidden sm:flex h-90 ">
          <Image className="w-full h-full  " src='/images/meeting.png' alt="business woman" width={400} height={400} />
        </motion.div>
      </section>

      <div className="py-10 px-4 sm:px-45 bg-[#F7F7F7]">
        <div className="flex flex-col justify-self-center text-center justify-center gap-2 items-center sm:max-w-2/5 ">
          <motion.h2
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            transition={{
              delay: 0.2
            }}
            className="text-3xl font-bold">A simple yet powerful
            and efficient process</motion.h2>
          <motion.p
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            transition={{
              delay: 0.3
            }}
            className="text-sm">Experience a streamlined and efficient process designed to deliver powerful results, ensuring success and growth for your business.</motion.p>
        </div>

        <div className="features grid grid-col-1 gap-10 my-8 sm:grid-cols-2">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              delay: 0.2
            }}
            className="relative">
            <Image className="w-full h-[320px] rounded-md " src='/images/meeting.png' alt="business woman" width={400} height={400} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              delay: 0.3,
              type: "spring",
              bounce: 0.4
            }}
          >
            <Accordion type="single" collapsible className="w-full">
              {processes.map((process, index) => (
                <AccordionItem key={process.id} value={process.id}>
                  <AccordionTrigger className="font-bold cursor-pointer hover:no-underline focus-visible:border-black focus-visible:ring-1  focus-visible:ring-primary focus-visible:px-2 ">{process.title}</AccordionTrigger>
                  <AccordionContent>
                    {process.description}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>

      <motion.section
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.2
        }}
        className="consultation px-4 sm:px-45 bg-gradient-to-b from-[#F7F7F7] from-50% to-white to-50% sm:h-[450px] ">
        <div className="bg-black text-white h-4/5 p-5 sm:p-10 grid sm:grid-cols-2 rounded-sm">
          <div>
            <h3 className="text-3xl font-bold font-playfair ">Contact us today for
              a free consultation</h3>
            <p className="text-sm py-4">  Let’s discuss how we can help your business grow and succeed. Our team is ready to provide tailored solutions to meet your unique needs.</p>
            <div className='flex gap-2 my-4'>
              <Link className='flex items-center gap-2 text-sm py-3 px-6 bg-white hover:bg-amber-400 font-semibold text-black rounded-sm' href="/">
                Get in touch <ArrowRight className="w-3 h-3" />
              </Link>
              <Link className='text-sm py-3 px-6 border-2 border-gray-500 hover:bg-gray-500 hover:text-white rounded-sm' href="/">
                Our services
              </Link>
            </div>
          </div>
          <div className="hidden w-full h-full sm:flex items-center justify-center">
            <Image className="w-fit h-fit" src="/images/meeting-collage.png" alt="meeting-collage" width={400} height={300} priority />
          </div>
        </div>
      </motion.section>


      <section>
        <div className="testimonial-header flex justify-between items-center px-4 sm:px-45">
          <h3 className="text-lg sm:text-3xl font-bold w-2/4  sm:w-2/5 my-4">Hear what our great
            customers say</h3>
          <Link className=' inline-flex items-center gap-2 text-sm py-3 px-3 sm:px-6 bg-black hover:bg-amber-400 text-white rounded-sm' href="/">
            Get in touch <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
        <Testimonies />
      </section>

      <section className="blogs px-4 sm:px-45 sm:py-20 bg-[#F7F7F7]">
        <div className="testimonial-header flex justify-between items-center ">
          <h3 className=" text-xl sm:text-3xl font-bold w-3/5 sm:w-2/4 my-4">Browse our articles
            & resources</h3>
          <Link className='flex items-center gap-2 text-sm py-3 px-6 bg-black hover:bg-amber-400 text-white rounded-sm' href="/">
            More article <ArrowRight className="w-3 h-3" />
          </Link>
        </div>

        <Blog />
      </section>

    </div>
  );
}

