import Navbar from '@/components/ui/Navbar/Navbar';
import React from 'react';

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en">
            <body>
                <div className=''>
                    <Navbar />
                    <div className='py-20'>{children}</div>
                </div>
            </body>
        </html>
    );
};
export default layout;