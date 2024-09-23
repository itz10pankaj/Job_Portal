import CreatedApplications from '@/components/my-applications'
import CreatedJobs from '@/components/my-jobs'
import { useUser } from '@clerk/clerk-react'
import React from 'react'
import { BarLoader } from 'react-spinners'

const Myjobs = () => {
    const { user, isLoaded } = useUser()
    if (!isLoaded) {
        return <BarLoader className='mb-4' width={"100%"} color="#36d7bd" />
    }
    return (
        <div>
            <h1 className="gradient-title font-extrabold text-5xl sm:text-7xl text-center pb-8">
                {user?.unsafeMetadata?.role === "candidate"
                    ? "My Applications"
                    : "My Jobs"}
            </h1>
            {user?.unsafeMetadata?.role === "candidate" ? (
                <CreatedApplications />
            ) : (
                <CreatedJobs />
            )}
        </div>
    )
}

export default Myjobs
