import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { BsDash } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { PiQuotes } from "react-icons/pi";
import { events } from "../lib/events";
import EventCard from "../components/eventcard";
import Button from "../components/button";

export default function HomePage() {
  return (
    <main className="">
      <section className="md:bg-[url('/images/home-bg.png')] bg-[url('/images/mobilebg.png')] bg-cover bg-center bg-no-repeat h-screen">
        <div className="container mx-auto px-6">
          <div className="hero flex flex-col justify-center h-[90svh] text-white md:max-w-190">
            <h4 className="text-[12px] font-semibold tracking-[2.4px] uppercase text-primary md:hidden">
              establish 1994
            </h4>
            <h1 className="font-semibold capitalize md:text-[84px] text-[48px] text-black md:text-white font-primary tracking-[-1.68px] md:leading-23 leading-14">
              Atmosphere of the Spirit
            </h1>
            <p className=" max-w-140 leading-8 hidden md:block">
              Discovering Jesus together in the heart of the city. A collective
              journey toward meaning, belonging, and a life lived with
              intention.
            </p>
            <div className="home-btns items-center gap-3 h-fit my-5 hidden md:flex">
              <Link
                to={""}
                className="bg-white text-primary px-5 py-3 uppercase text-[12px]"
              >
                Join us
              </Link>
              <Link
                to={""}
                className="uppercase border border-neutral px-5 py-2.5 text-[12px]"
              >
                explore lisa
              </Link>
            </div>
            {/* Mobile Hero */}
            <div className="home-btns flex flex-col gap-3 h-fit my-5 md:hidden">
              <Link
                to={""}
                className="bg-primary text-neutral px-8 py-2.5 uppercase text-[12px] text-center"
              >
                Join us this sunday
              </Link>
              <Link
                to={""}
                className="uppercase border border-primary px-8 py-2.5 text-[12px] text-center"
              >
                watch online
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="our-heart my-20">
        <div className="container mx-auto px-6">
          <div className="section-content md:flex justify-between">
            <div className="mobile-section hidden md:block">
              <img src="/images/sideimg.png" alt="" />
            </div>
            <div className="mobile-img flex flex-col-reverse gap-10 md:hidden">
              <div className="img_testimonial">
                <img src="/images/mobilesideimg.png" alt="" />
                <div className="testimonial mt-6 border-l pl-6">
                  <p className="testimony leading-6 tracking-0 text-[16px] italic">
                    "I found more than a church; I found a family that listens
                    before it speaks."
                  </p>
                  <h3 className="member flex items-center gap-2 mt-4 tracking-[1.2px] leading-4 font-semibold text-[16px]">
                    <BsDash /> Pastor T., Founding Member
                  </h3>
                </div>
              </div>
              <div className="description">
                <h3 className="text-[32px] font-medium font-primary mb-10">
                  A place to belong
                </h3>
                <p className="leading-8 text-[18px]">
                  In a world that often feels fragmented, we believe in the
                  power of shared spaces and common ground. LISA is more than a
                  gathering; it's a home for the curious, the broken, and the
                  hopeful.
                </p>
              </div>
            </div>
            <div className="description md:flex flex-col justify-center gap-8 hidden">
              <h3 className="uppercase text-[12px] tracking-[1.6px] font-semibold leading-4">
                our heart
              </h3>
              <h2 className="font-primary text-[48px] font-medium leading-14 tracking-0">
                A place to belong.
              </h2>
              <p className="leading-8 tracking-0 max-w-140">
                We believe that faith is not a solo endeavor. At LISA, we
                provide a quiet space for deep reflection and a loud table for
                community. Whether you're a lifelong believer or just starting
                to ask questions, your seat is ready.
              </p>
              <Link to={""} className="flex items-center gap-2 border-b w-fit">
                Discover Our Story <FaArrowRightLong />
              </Link>
              <div className="size-25 bg-[#D9D9D9]"></div>
            </div>
          </div>
        </div>
      </section>
      <section className="gathering bg-bg py-20">
        <div className="container mx-auto px-6">
          <div className="content flex justify-between items-center border-t border-b py-10">
            <div className="heading">
              <h2 className="font-primary text-[60px] italic tracking-0 font-medium">
                Sunday Gathering
              </h2>
              <p className="uppercase tracking-[2.4px] font-semibold text-[14px] leading-4">
                join us in person or online
              </p>
            </div>
            <div className="time-location">
              <h3 className="font-primary text-[32px] leading-10 italic">
                9:00 AM & 11:00AM
              </h3>
              <p className="flex gap-2 tracking-[3px] leading-6 items-center text-[14px]">
                <IoLocationOutline /> LISA Auditorium, Ilesanmi
              </p>
            </div>
          </div>
          <div className="description-content pt-12 grid grid-cols-2 items-center">
            <img src="/images/gatheringImg.png" alt="" />
            <p className="leading-8 tracking-0 text-[16px] border-l pl-8">
              "Every Sunday, we gather to reset our hearts through music, shared
              stories, and a transformative message. It's more than a service;
              it's a breath of life for the week ahead."
            </p>
          </div>
        </div>
      </section>
      <section className="display py-15 bg-neutral">
        <div className="container mx-auto px-6">
          <p className="text-center text-[48px] tracking-0 leading-14 italic font-extralight">
            "And let us consider how we may spur one another on toward love and
            good deeds."
          </p>
          <p className="tracking-[3.6px] flex items-center justify-center font-semibold text-[15px] uppercase text-center mt-5">
            <BsDash />
            hebrews 10:24
          </p>
        </div>
      </section>
      <section className="upcoming-events bg-neutral">
        <div className="container mx-auto px-6">
          <div className="heading flex justify-between items-center mb-10">
            <h3 className="text-[48px] font-medium font-primary leading-14">
              Upcoming
            </h3>
            <button className="text-[12px] tracking-[0.28px] leading-5 cursor-pointer">
              View All Events
            </button>
          </div>
          <div className="events flex flex-col md:flex-row md:justify-between space-y-6 items-center">
            {events.map(({ name, date, time, description, img }) => (
              <EventCard
                name={name}
                date={date}
                time={time}
                description={description}
                img={img}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="hero-testimonial bg-black text-white py-20">
        <div className="container mx-auto px-6">
          <div className="testimonial-content flex justify-between space-x-10">
            <div className="description flex flex-col flex-2/3 space-y-8">
              <PiQuotes size={48} />
              <p className="font-primary font-medium text-[48px] tracking-0 leading-14 italic">
                "I came looking for answers, but what I found was a family that
                wasn't afraid of my questions. LISA changed how I see God and
                how I see myself."
              </p>
              <div className="person flex items-center gap-2">
                <div className="line w-10 h-px bg-white/20"></div>
                <p className="name uppercase font-semibold text-[10px] tracking-[1.2px] leading-4">
                  Emmanuel Adebayo, member since 2021
                </p>
              </div>
            </div>
            <div className="image flex-1/3 hidden md:block">
              <img src="/images/imgborder.png" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="home-prefooter bg-[url('/images/homeprefooterbg.png')] bg-cover bg-no-repeat text-white py-10 h-205 flex items-center">
        <div className="container mx-auto px-6">
          <div className="content flex flex-col items-center space-y-8">
            <h3 className="text-[60px] md:text-[84px] font-semibold font-primary tracking-[-1.68px] text-white">
              Come as you are
            </h3>
            <p className="description leading-8 text-[18px] tracking-0 text-center">
              No performance required. No perfection expected. Just an open
              heart and a seat at the table.
            </p>
            <div className="buttons flex gap-5">
              <Button
                bgColor="#b35c44"
                name="plan your visit"
                textColor="#fff"
              />
              <Button
                bgColor="transparent"
                name="contact us"
                textColor="#fff"
                borderColor="#fff"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
