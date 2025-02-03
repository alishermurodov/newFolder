import React from 'react'
import HeaderRoutes from '../../widgets/Header/HeaderRoutes'
import { Outlet } from 'react-router-dom'
import { usePageLayoutStyles } from './styles'

const PageLayout = () => {
    const styles = usePageLayoutStyles()

    return (
        <div className={styles.container}>
            <div>
                <HeaderRoutes />
            </div>
            <div className="">
                <Outlet />
            </div>
        </div>
    )
}

export default PageLayout