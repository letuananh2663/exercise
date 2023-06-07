import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'
export default function Navigation() {
    const { theme, toggle, dark } = useContext(ThemeContext)
    return (
        <div className='navbar' style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
            <nav>
                <ul>
                    <li><a className='active' href='#home' >Home</a></li>
                    <li><a href='#news' style={{
                            backgroundColor: theme.backgroundColor,
                            color: theme.color,
                            outline: 'none'
                        }}>News</a></li>
                    <li><a href='#about' style={{
                            backgroundColor: theme.backgroundColor,
                            color: theme.color,
                            outline: 'none'
                        }}>About</a></li>
                    <li><a href='#contact' style={{
                            backgroundColor: theme.backgroundColor,
                            color: theme.color,
                            outline: 'none'
                        }}>Contact</a></li>
                </ul>
                <div style={{ position: 'relative' }}>
                    <a className='switch-mode' href='#' onClick={toggle}
                        style={{
                            backgroundColor: theme.backgroundColor,
                            color: theme.color,
                            float: 'right',
                            outline: 'none'
                        }} data-testid="toggle-theme-btn"
                    >
                        Switch Nav to {!dark ? 'Dark' : 'Light'} mode
                    </a>
                </div>
            </nav>
        </div>
    )
}
