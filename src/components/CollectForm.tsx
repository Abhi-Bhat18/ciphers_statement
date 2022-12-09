import React, { useState, } from 'react'

function CollectForm() {
    const [Fname, setFname] = useState("")
    const [Lname, setLname] = useState("")
    const [Email, setEmail] = useState("")
    const [Phone, setPhone] = useState("")
    const [LinkedIn, setLinkedIn] = useState("")
    const [Github, setGithub] = useState("")
    const [Message, setMessage] = useState("")




    function getData() {
        console.log(Fname, Lname, Email, Phone, LinkedIn, Github, Message)
    }



    return (
        <div className="  rounded-lg mx-auto max-w-screen-xl m-4 content-center bg-gray-100 p-8 shadow-lg lg:col-span-3 lg:p-12">
            <form action="" className="space-y-4">
                <p className='text-xl'>Apply for this job</p>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                        <label className="sr-only" >First Name</label>
                        <input
                            className="w-full rounded-lg border  p-3 text-sm"
                            placeholder="First Name"
                            type="text"
                            id="name"
                            onChange={(e) => setFname(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="sr-only" >Last Name</label>
                        <input
                            className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                            placeholder="Last Name"
                            type="text"
                            id="name"
                            onChange={(e) => setLname(e.target.value)}
                        />
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                        <label className="sr-only" >Email</label>
                        <input
                            className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                            placeholder="Email address"
                            type="email"
                            id="email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="sr-only" >Phone</label>
                        <input
                            className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                            placeholder="Phone Number"
                            type="tel"
                            id="phone"
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                        <label className="sr-only" >Github</label>
                        <input
                            className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                            placeholder="Github"
                            type="text"
                            id="name"
                            onChange={(e) => setGithub(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="sr-only" >Linkedin</label>
                        <input
                            className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                            placeholder="Linkedin Profile"
                            type="text"
                            id="name"
                            onChange={(e) => setLinkedIn(e.target.value)}
                        />
                    </div>
                </div>
                <div>
                    <label className="sr-only">Message to Employer</label>
                    <textarea
                        className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                        placeholder="Message to Employer"
                        id="message"
                        onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                </div>


                <div>
                    <fieldset className="w-full  ">
                        <label className="block text-sm font-medium">upload resume</label>
                        <div className="flex">
                            <input type="file" name="files" id="files" className=" border-2 border-dashed rounded-md  " />
                        </div>
                    </fieldset>
                </div>
                <div className="mt-4">
                    <div >
                        <span className="relative z-0 text-black group-hover:text-gray-200 transition ease-in-out duration-500">Hover over me</span></div>
                    <button
                        type="submit"
                        onClick={() => getData()}
                        className="group [transform:translateZ(0)] px-10 py-3 rounded-lg overflow-hidden bg-gray-900 relative before:absolute before:bg-sky-600 before:top-1/2 before:left-1/2 before:h-8 before:w-8 before:-translate-y-1/2 before:-translate-x-1/2 before:rounded-full before:scale-[0] before:opacity-0 hover:before:scale-[6] hover:before:opacity-100 before:transition before:ease-in-out before:duration-500"
                    // className="inline-flex w-full items-center justify-center rounded-lg bg-black px-5 py-3 text-white sm:w-auto"
                    >
                        <span className="relative z-0 text-white group-hover:text-gray-200 transition ease-in-out duration-500">Apply</span>

                    </button>
                </div>
            </form>
        </div>
    )
}

export default CollectForm