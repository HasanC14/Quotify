'use client'
import { useEffect, useState } from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';
import Link from 'next/link'
import Image from 'next/image'

const nav = () => {
    const isUserLoggedIn = true

    const [providers, setProviders] = useState(null)
    const [toggleDropdown, setToggleDropdown] = useState(false)
    useEffect(() => {
        const setProviders = async () => {
            const response = await getProviders()
            setProviders(response)
        }
        setProviders()
    }, [])

    return (
        <nav className='flex-between w-full mb-16 pt-3'>
            <Link href='/'>
                <Image
                    src='/assets/images/logo.png'
                    alt='logo'
                    width={50}
                    height={70}
                    className='object-container'
                />
            </Link>

            {/* Desktop Navigation */}
            <div className='sm:flex hidden'>
                {isUserLoggedIn ? (
                    <div className='flex gap-3 md:gap-5'><Link href='/create-post' className='black_btn'>Create Post</Link></div>
                ) : (<>
                    {providers &&
                        Object.values(providers).map((provider) => (
                            <button
                                type='button'
                                key={provider.name}
                                onClick={() => signIn(provider.id)} className='outline_btn ms-5 me-5'>Sign In</button>
                        ))}</>
                )}
                <button type='button' onClick={signOut} className='outline_btn ms-5 me-5'>Sign Out</button>
                <Link href='/profile'>
                    <Image className='rounded-full' width={37} height={37} src='/assets/images/logo.png'></Image>
                </Link>
            </div>
            {/* Mobile Navigation */}
            <div className='sm:hidden flex relative'>
                {isUserLoggedIn ? (<div className='flex'> <Image
                    src='/assets/images/logo.png'
                    alt='logo'
                    width={50}
                    height={70}
                    className='object-container'
                    onClick={() => setToggleDropdown((prev) => (!prev))}
                />
                    {toggleDropdown && (
                        <div className='dropdown'>
                            <Link href='/profile'
                                className='dropdown_link'
                                onClick={() => setToggleDropdown(false)}>
                                My Profile</Link>

                            <Link href='/create-post'
                                className='dropdown_link'
                                onClick={() => setToggleDropdown(false)}>
                                Create Post</Link>

                            <button type='button'
                                onClick={() => {
                                    setToggleDropdown(false)
                                    signOut()
                                }} className='w-full black_btn mt-5'>Sign Out</button>
                        </div>
                    )}
                </div>) : (<>
                    {providers &&
                        Object.values(providers).map((provider) => (
                            <button
                                type='button'
                                key={provider.name}
                                onClick={() => signIn(provider.id)} className='outline_btn ms-5 me-5'>Sign In</button>
                        ))}</>)}
            </div>
        </nav>
    );
};

export default nav;