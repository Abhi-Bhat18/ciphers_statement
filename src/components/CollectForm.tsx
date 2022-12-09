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
        <div className="rounded-lg mx-auto max-w-screen-xl m-4 content-center bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
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
                    <button
                        type="submit"
                        onClick={() => getData()}
                        className="inline-flex w-full items-center justify-center rounded-lg bg-black px-5 py-3 text-white sm:w-auto"
                    >
                        <span className="font-medium"> Apply </span>

                    </button>
                </div>
            </form>
        </div>
    )
}

export default CollectForm