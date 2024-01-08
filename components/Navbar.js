import { useEffect, useState } from "react";

function Navbar() {

    // $('.open-menu').click(function(e){
    //     e.preventDefault();
    //     if($(this).hasClass('open')) {
    //       $(this).removeClass('open');
    //       $('.main-navigation').removeClass('open');
    //       $('.content').removeClass('open');
    //       $('body').removeClass('uk-overflow-hidden');
    //       $('.header-form-mobile-view').removeClass('form-show');
    //     } else {
    //       $(this).addClass('open');
    //       $('.main-navigation').addClass('open');
    //       $('.content').addClass('open');
    //       $('body').addClass('uk-overflow-hidden');
    //       $('.header-form-mobile-view').addClass('form-show');
    //     }
    //   });
    const [mobileMenu, setMobileMenu]= useState(false);
    const mobileHandle = (e) => {
        e.preventDefault
        setMobileMenu(!mobileMenu)
    } 
    useEffect(()=>{
        mobileMenu ?  document.body.classList.add('uk-overflow-hidden') : document.body.classList.remove('uk-overflow-hidden');
    },[mobileMenu])
      console.log(!!'false')
    return (
        <header id="masthead" data-uk-sticky="show-on-up: true; animation: uk-animation-slide-top; cls-active: uk-navbar-sticky;" className="uk-sticky site-header">
            <div className="container">
                <div className="wrapper">
                    <div className="site-branding">
                        brand
                    </div>
                    <nav className={mobileMenu ? 'main-navigation uk-navbar-container open' : 'main-navigation uk-navbar-container'}  data-uk-navbar>
                        <div className="nav-overlay uk-navbar-left">
                            <ul id="primary-menu" className="uk-navbar-nav">
                                <li id="menu-item-54" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-54"><a href="#">Locations</a>
                                    <ul className="sub-menu">
                                        <li id="menu-item-55" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-55"><a href="/about">Ventnor Heights</a></li>
                                        <li id="menu-item-56" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-56"><a href="/personal">Blackwood</a></li>
                                    </ul>
                                </li>
                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-63"><a href="/">home</a></li>
                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-64"><a href="about">about</a></li>
                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-65"><a href="personal">personal</a></li>
                            </ul>
                        </div>
                    </nav>
                    <button  className={mobileMenu ? 'open-menu open' : 'open-menu'} onClick={mobileHandle}>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                </div>
            </div>
        </header>
    )
}




    export default Navbar