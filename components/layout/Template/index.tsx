import React, { Fragment } from 'react'
import Footer from '../Footer'


const Template:React.FC = ({ children }) => {
    return (
        <Fragment>
            {children}
            <Footer />
        </Fragment>
    )
}

export default Template