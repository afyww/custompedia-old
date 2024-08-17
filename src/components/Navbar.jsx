import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/images/logofooter.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [showModal, setShowModal] = useState(false);
    const [isMobileView, setIsMobileView] = useState(false);
    const [activePage, setActivePage] = useState(null);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [isScrollingUp, setIsScrollingUp] = useState(false); // New state to track scrolling direction
    const [isVisible, setIsVisible] = useState(true);

    const navLinks = [
        { title: 'Home', to: '/' },
        { title: 'Who We Are', to: '/about' },
        { title: 'Services', to: '/service' },
        { title: 'News', to: '/news' },
        { title: 'Career', to: '/career' },
    ];

    useEffect(() => {
        const handleResize = () => {
            setIsMobileView(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            setIsScrollingUp(currentScrollPos < prevScrollPos);
            setIsVisible(currentScrollPos <= prevScrollPos || currentScrollPos < 100);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);

    useEffect(() => {
        const currentPath = window.location.pathname;
        const matchedLink = navLinks.find(link => link.to === currentPath);
        setActivePage(matchedLink);
    }, []);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const modalVariants = {
        hidden: {
            y: '-100vh',
        },
        visible: {
            y: 0,
            transition: {
                type: 'tween',
                duration: 0.3,
            },
        },
        exit: {
            y: '-100vh',
            transition: {
                type: 'tween',
                duration: 0.3,
                delay: 0.3,
            },
        },
    };

    const linkItemVariants = {
        hidden: { opacity: 0, y: '50%' },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            },
        },
        exit: {
            opacity: 0,
            y: '50%',
            transition: {
                duration: 0.1,
                ease: "easeOut"
            }
        },
    };

    const navLinksVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            },
        },
        exit: {
            transition: {
                staggerChildren: 0.05,
                staggerDirection: -1,
            },
        },
    };

    if (isMobileView) {
        navLinks.push({ title: 'Contact Us', to: '/contact' });
    }

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.nav className={`shadow-xl z-20 fixed top-0 right-0 left-0 p-4 xl:p-10 ${isScrollingUp ? 'bg-black' : 'bg-transparent'}`} variants={navLinksVariants}>
                    <div className="flex justify-between">
                        <div>
                            <Link className='flex' to="/">
                                <img className='w-12 h-full xl:w-12 xl:h-full my-auto' src={logo} alt="" />
                                <div className='mx-2'>
                                    <p className='text-blue-400 text-left text-sm xl:text-lg font-semibold'>PT. Custompedia</p>
                                    <p className='text-blue-400 text-left text-sm xl:text-lg font-light'>Creative Group</p>
                                </div>
                            </Link>
                        </div>
                        {isMobileView ? (
                            <button className="text-white">
                                {showModal ? (
                                    <FaTimes onClick={toggleModal} className="xl:w-10 xl:h-8 w-6 h-6" />
                                ) : (
                                    <FaBars onClick={toggleModal} className="xl:w-10 xl:h-8 w-6 h-6" />
                                )}
                            </button>
                        ) : (
                            <div className="hidden sm:flex gap-10">
                                {navLinks.map((link, index) => (
                                    <Link key={index} to={link.to} className={`my-auto text-white text-lg font-semibold hover:scale-110 duration-200 delay-150 ${activePage && activePage.to === link.to ? 'border-b-4 border-blue-400' : ''}`}>
                                        {link.title}
                                    </Link>
                                ))}
                                <div className="p-2 mx-auto xl:mx-0 my-auto hover:scale-110 hover:bg-gradient-to-l from-blue-400 to-blue-600 bg-gradient-to-r from-blue-400 to-blue-500 rounded-xl w-fit duration-200 delay-150">
                                    <Link className="text-white text-center px-3 xl:p-4 text-lg font-semibold" to="/contact">Contact Us</Link>
                                </div>
                            </div>
                        )}
                    </div>
                    <AnimatePresence>
                        {showModal && isMobileView && (
                            <motion.div
                                className="fixed inset-0 flex justify-center items-center bg-black"
                                variants={modalVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                            >
                                <FaTimes
                                    className="absolute top-5 right-4 text-white cursor-pointer w-6 h-6"
                                    onClick={toggleModal}
                                />
                                <motion.div
                                    className="relative w-full"
                                    variants={navLinksVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                >
                                    <div className="flex flex-col gap-8 justify-center mx-6 h-full text-right">
                                        {navLinks.map((link, index) => (
                                            <motion.span key={index} className={`text-gray-200 text-5xl font-bold ${activePage && activePage.to === link.to ? '' : ''}`} variants={linkItemVariants} onClick={closeModal}>
                                                <Link to={link.to}>{link.title}</Link>
                                            </motion.span>
                                        ))}
                                    </div>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.nav>
            )}
        </AnimatePresence>
    );
}

export default Navbar;
