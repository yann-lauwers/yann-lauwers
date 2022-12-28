"use client"

import { useEffect, useLayoutEffect, useRef, useState } from "react"

const getDiagonal = (height: number, width: number) => {
  return Math.sqrt(Math.pow(height, 2) + Math.pow(width, 2))
}

const Section1 = () => {
  const ref = useRef<HTMLDivElement>(null)

  const [height, setHeight] = useState(0)
  const [width, setWidth] = useState(0)
  const [text, setText] = useState("I'm Yann")

  useEffect(() => {
    let interval: any

    const timer = setTimeout(() => {
      setText(prevState => (prevState === "I'm Yann" ? "I'm a fullstack developer" : "I'm Yann"))

      interval = setInterval(() => {
        setText(prevState => (prevState === "I'm Yann" ? "I'm a fullstack developer" : "I'm Yann"))
      }, 7000)
    }, 5250)

    return () => {
      clearTimeout(timer)
      clearInterval(interval)
    }
  }, [])

  useLayoutEffect(() => {
    if (ref.current) {
      setHeight(ref.current.clientHeight)
      setWidth(ref.current.clientWidth)
    }
  }, [])

  return (
    <div className="relative h-screen overflow-hidden hidden lg:block" ref={ref}>
      <div
        style={{
          height: `${getDiagonal(height, width)}px`,
          width: `${getDiagonal(height, width)}px`,
        }}
        className="z-0 absolute top-1/2 left-1/2 bg-[conic-gradient(var(--tw-gradient-stops))] from-green-700 via-green-200/50 to-white duration-500 -translate-x-1/2 -translate-y-1/2 rotate"
      />
      <div className="relative z-10 flex h-full w-full">
        <div className="h-full flex items-start justify-center mb-28 flex-col ml-28">
          <h1 className="text-green-900 font-bold text-5xl xl:text-6xl">Hey</h1>
          <h1 className="text-white text-5xl xl:text-6xl">{text}</h1>
        </div>
      </div>
    </div>
  )
}

export default Section1
