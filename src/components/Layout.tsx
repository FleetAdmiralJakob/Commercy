import React from "react"
import Head from "next/head";
import Link from "next/link";
import {signIn, signOut, useSession} from "next-auth/react";

interface LayoutProps {
    title?: string;
    children: React.ReactNode;
}

const Layout:  React.FC<LayoutProps> = ({title, children}) => {
    const date = new Date();
    const year = date.getFullYear();
    return (
    <>
        <Head>
            <title>{title ? title + ' - Commercy' : 'Commercy'}</title>
            <meta name="description" content="An faboulus E-Commerce website" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
            <header>
                <nav className="flex h-20 items-center px-4 justify-between shadow-md">
                        <Link className="text-lg font-bold flex items-center" href="/">
                            <img src="assets/images/logo.webp" alt="Logo" className="h-10 m-2"/>
                            Com<span className="text-[hsl(280,100%,70%)]">mercy</span>
                        </Link>
                    <AuthShowcase />
                </nav>
            </header>
            <main className="min-h-screen">{children}</main>
            <footer className="flex h-10 justify-center items-center shadow-inner">
                <p>Copyrighted © {year} by Commercy (Jakob Rössner)</p>
            </footer>
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