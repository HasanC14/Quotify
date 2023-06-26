import '@styles/globals.css';

export const metadata = {
    title: "Quotify",
    description:"Unleash the Power of Words: Share and Discover Inspiring Quotes on Quotify"
}

const RootLayout = ({children}) => {
    return (
        <html lang='en'>
            <body>
                <div className='main'>
                    <div className='gradient'/>
                </div>
                <main className='app'>
                    {children}
                </main>
            </body>
        </html>
    );
};

export default RootLayout;