import React, {useEffect} from 'react';
import './Header.scss';
import '../../globals/animations.scss';

const Header = ({scroll}) => {
    useEffect(() => {
        document.documentElement.style.setProperty('--scroll-small', scroll / 300);
        document.documentElement.style.setProperty('--scroll-big', scroll / -20 + 'deg');
    }, [scroll])
    return (
        <header className="h-w">
            <div className="special-square">
                <div className="special-square-inner">
                    <div className="h-name front">
                        RYAN YANG
                    </div>
                </div>
            </div>
            <div className="h-name behind">
                RYAN YANG
            </div>
            <div class="icon-scroll">
                <div class="mouse">
                    <div class="wheel"></div>
                </div>
                <div class="icon-arrows">
                    <span></span>
                </div>
            </div>
        </header>
    );
}

export default Header;