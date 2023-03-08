import React from "react"
import Head from "next/head";
import Link from "next/link";
import {signIn, signOut, useSession} from "next-auth/react";
import {api} from "~/utils/api";

// @ts-ignore
const Layout = ({title, children}) => {
    const date = new Date();
    const year = date.getFullYear();
    return (
    <>
        <Head>
            <title>{title ? title + ' - Commercy' : 'Commercy'}</title>
            <meta name="description" content="An faboulus E-Commerce website" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="flex min-h-screen flex-col justify-between shadow-md">
            <header>
                <nav className="flex h-20 items-center px-4 justify-between shadow-md">
                    <Link className="text-lg font-bold" href="/">
                        Com<span className="text-[hsl(280,100%,70%)]">mercy</span>
                    </Link>
                    <AuthShowcase />
                </nav>
            </header>
            <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">{children}</main>
            <footer className="flex h-10 justify-center items-center shadow-inner">
                <p>Copyrighted © {year} by Commercy (Jakob Rössner)</p>
            </footer>
        </div>
    </>
    )
}

export default Layout

const AuthShowcase: React.FC = () => {
    const { data: sessionData } = useSession();

    return (
        <div className="flex flex-col items-center justify-center">
            <p className="text-center text-lg overflow-hidden whitespace-nowrap w-64">
                {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
            </p>
            <button
                className="rounded-full font-semibold no-underline transition"
                onClick={sessionData ? () => void signOut() : () => void signIn()}
            >
                {sessionData ? "Sign out" : "Sign in"}
            </button>
        </div>
    );
};