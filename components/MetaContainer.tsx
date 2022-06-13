import React from "react";
import Head from "next/head";
import {useRouter} from "next/router";
import Navbar from "@components/Navigation";
import Footer from "@components/Footer";

// @ts-ignore
export default function MetaContainer({children, ...customMeta}) {
    const router = useRouter();

    const meta = {
        title: "aquapichu",
        description: `Presenting a dream from another land. Also function as a shrimp pasta recipe. Get in touch with me if you would like to collaborate!`,
        type: "website",
        date: new Date().toDateString(),
        ...customMeta,
    };
    return (
        <div>
            <Head>
                <title>{meta.title}</title>
                <meta name="robots" content="follow, index"/>
                <meta content={meta.description} name="description"/>
                <meta
                    property="og:url"
                    content={`https://www.aquapichu.com${router.asPath}`}
                />
                <link
                    rel="canonical"
                    href={`https://www.aquapichu.com${router.asPath}`}
                />
                <meta property="og:type" content={meta.type}/>
                <meta property="og:site_name" content="auqapichu"/>
                <meta property="og:description" content={meta.description}/>
                <meta property="og:title" content={meta.title}/>
                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:site" content="@tobecbalage"/>
                <meta name="twitter:title" content={meta.title}/>
                <meta name="twitter:description" content={meta.description}/>
                {meta.date && (
                    <meta property="article:published_time" content={meta.date}/>
                )}
            </Head>
            <main className="w-full">
                <Navbar/>
                <div>{children}</div>
                <Footer/>
            </main>
        </div>
    );
}
