import React, { forwardRef } from "react"

const Section2 = () => {
  return <p className="h-screen bg-red-200">Yoooooo</p>
}

const Section2Container = forwardRef<HTMLElement, React.PropsWithChildren>(function Section2(
  { children },
  ref
) {
  return (
    <section ref={ref} className="h-screen bg-red-200">
      {children}
    </section>
  )
})

export { Section2Container }
export default Section2
