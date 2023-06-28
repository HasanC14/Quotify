import '@styles/globals.css';
import Nav from '@components/nav'
import Provider from '@components/provider'
export const metadata = {
    title: "Quotify",
    description: "Unleash the Power of Words: Share and Discover Inspiring Quotes on Quotify"
}

const RootLayout = ({ children }) => {
    return (
        <html lang='en'>
            <body>
                <Provider>
                    <div className='main'>
                        <div className='gradient' />
                    </div>
                    <main className='app'>
                        <Nav></Nav>
                        {children}
                    </main></Provider>

            </body>
        </html>
    );
};

export default RootLayout;