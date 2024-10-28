import { useCallback, useEffect, useState } from 'react'

export enum ViewWidth {
  TABLET,
  DESKTOP,
}

enum Breakpoints {
  TABLET = 769,
}

const getViewWith = (width: number): ViewWidth => {
  if (width < Breakpoints.TABLET) {
    return ViewWidth.TABLET
  }

  return ViewWidth.DESKTOP
}

export const useScreenWidth = () => {
  const [view, setView] = useState<ViewWidth | null>(() => {
    if (typeof window === 'undefined') return null

    return getViewWith(window.innerWidth)
  })

  const checkSize = useCallback(() => {
    const calculated = getViewWith(window.innerWidth)
    setView(calculated)
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return

    checkSize()

    const handleWindowResize = () => {
      checkSize()
    }

    window.addEventListener('resize', handleWindowResize)

    // eslint-disable-next-line consistent-return
    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [checkSize])

  return view
}
