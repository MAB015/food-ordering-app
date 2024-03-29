'use client'
import React from 'react'

import Image from "next/image"
import { useState } from "react"
import Link from "../../../node_modules/next/link"

export default function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loginInProgress, setLoginInProgress] = useState(false)

    async function handleFormSubmit(ev) {
        ev.preventDefault()
        setLoginInProgress(true)
        const {ok} = await fetch('/api/login', {
            body: JSON.stringify({email, password}),
            headers: {'Content-Type': 'application/json'},
            method: 'POST'
            
        })
        if(ok){

        } else {
            setLoginInProgress(false)
        }
    }

    return (
        <section className='mt-8'>
            <h1 className="text-center text-primary text-4xl">
                login
            </h1>
            <form className='max-w-xs mx-auto' onSubmit={handleFormSubmit}>
                <input
                    type="email"
                    placeholder="email"
                    value={email}
                    disabled={loginInProgress}
                    onChange={ev => setEmail(ev.target.value)}
                />
                <input
                    type="password"
                    placeholder="password"
                    value={password}
                    disabled={loginInProgress}
                    onChange={ev => setPassword(ev.target.value)}
                />
                <button type='submit' disabled={loginInProgress}>Login</button>
                <div className="my-4 text-center text-gray-500">
                    or login with provider
                </div>
                <button className="flex gap-4 justify-center ">
                    <Image src={'/google-logo.png'} alt={'Google logo'} width={24} height={24}/>
                    Login with google
                </button>
                <div className="text-center my-4 text-gray-500 border-t pt-4">
                    Existing accout?
                    <Link className="underline" href={'/login'}>Login here &raquo;</Link>
                </div>
            </form>
    </section>
    )
}
