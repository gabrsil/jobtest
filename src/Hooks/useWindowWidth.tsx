
import React, { useEffect, useState } from 'react'

const useWindowWith = () => {
    const [width, setWidth] = useState(window.innerWidth);

    const handleResize = React.useCallback(
        () => setWidth(window.innerWidth),
        [window.innerWidth])

    useEffect(() => {
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return {
        width
    }

}

export default useWindowWith;