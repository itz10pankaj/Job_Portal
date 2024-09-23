import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import React from 'react'
import { Link } from 'react-router-dom'
import companies from "../data/company.json"
import faqs from "../data/faq.json"
import Autoplay from "embla-carousel-autoplay"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
const LandingPage = () => {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, loop: true })
    )
    return (
        <main className='flex flex-col gap-10 sm:gap-20 sm:py-20'>
            <section className='text-center'>
                <h1 className='flex flex-col justify-center items-center gradient-title text-4xl font-extrabold sm:text-6xl lg:text-8xl tracking-tighter py-4'>
                    Find Your Dream Job
                    <span className=' flex items-center gap-2 lg:gap-6'>
                        and get
                        <img src="/logo.png" alt="hired logo" className='h-14 sm:h-24 lg:h-32' />
                    </span>
                </h1>
                <p className='text-gray-300 sm:mt-4 text-xs sm:text-xl'>
                    Explore thousands of job listings or find the prefect candidate
                </p>
            </section>
            <div className='flex gap-6 justify-center'>
                <Link to='/jobs'>
                    <Button variant='blue' size="xl">Find Jobs</Button>
                </Link>
                <Link to='/post-job'>
                    <Button size='xl' variant='destructive'>Post a Job</Button>
                </Link>
            </div>

            <Carousel plugins={[plugin.current]} className="w-full py-10">
                <CarouselContent className="-ml-1 flex gap-5 sm:gap-20 items-center">
                    {companies.map(({ name, id, path }) => {
                        return (<CarouselItem key={id} className="basis-1/3 lg:basis-1/6">
                            <img src={path} alt={name}
                                className='h-9 sm:h-14 object-contain'
                            />
                        </CarouselItem>)
                    })}
                </CarouselContent>
            </Carousel>
            <img src="banner.jpeg" className='w-full' />
            <section className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <Card>
                    <CardHeader>
                        <CardTitle>For Job Seekers</CardTitle>
                    </CardHeader>
                    <CardContent>
                        Search and apply for Jobs,track applications, and more.
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>For Employers</CardTitle>
                    </CardHeader>
                    <CardContent>
                        Post Jobs,manage applications and find the prefect candidate
                    </CardContent>
                </Card>
            </section>
            <Accordion type="single" collapsible>
                {faqs.map((faq, index) => {
                    return (
                        <AccordionItem key={index} value={`item-${index + 1}`}>
                            <AccordionTrigger>{faq.question}</AccordionTrigger>
                            <AccordionContent>
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    )
                })}
            </Accordion>

        </main>
    )
}

export default LandingPage
