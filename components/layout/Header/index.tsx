import React from 'react'
import Link from 'next/link'
import Icon from '../../graphics/icon'
import styles from './style.module.scss'
import Hamburger from './Hamburger'
import { Props } from './types';
import { Modal, useModal } from '@faceless-ui/modal'
import GridContainer from '../GridContainer'
import { Cell, Grid } from '@faceless-ui/css-grid'

// Modal slug
const menuSlug = 'menu'

const Header:React.FC<Props> = ({ megaMenu, socialMedia}) => {
    const modal = useModal()
    const { currentModal, toggle } = useModal()

    const menuActive = currentModal === menuSlug
    const { closeAll } = modal;

    // if the current modal is equal to "menu" then the menu is active
    // and the hamburger should render as an "X"

    // Otherwise, Just render the regular hamburger icon

    return (
        <header className={styles.header}>
            <Link href="/">
                <a href="/" className={styles.logo}>
                <Icon />
                </a>
            </Link>
            <div> 
                
            </div>
            <button type="button" 
            className={styles.menuButton}
            onClick={() => toggle(menuSlug)}
            >
                <Hamburger active={menuActive}/>
            </button>
            <Modal slug={menuSlug} className={styles.menu}>
                 <button className={styles.menuCloseButton} onClick={() => closeAll()}>
                    Close
                </button>
                <GridContainer>
                    <Grid>
                        <Cell 
                        cols={8} 
                        htmlElement="nav"
                        >
                        </Cell>
                    </Grid>
                </GridContainer>
            </Modal>
        </header>
    )
}

export default Header

/*
{megaMenu?.nav?.map(({ link }, i) => {
                                <h3 key={i}>
                                    {link.label}
                                </h3>
                            })}
 */