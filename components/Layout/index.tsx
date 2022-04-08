import React, { ReactNode } from 'react';
import Head from 'next/head';

type Props = {
    children: ReactNode;
    title?: string;
};

const Layout = ({ children, title = 'TypeScript Next.js Stripe Example' }: Props): JSX.Element => (
    <>
        <Head>
            <title>{title}</title>
        </Head>
        <div className="container">{children}</div>
    </>
);

export default Layout;