import { useState, useEffect } from 'react';

const useWindowSize = () => {
    const getSize = () => {
        return {
            width: window.innerWidth,
            height: window.innerHeight
        }
    }

    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });
    useEffect(() => {
        const handleResize = () => {
            setWindowSize(getSize())
        }
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])

    return windowSize
}

export default useWindowSize;