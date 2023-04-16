import { Box } from '@chakra-ui/react'
import { useInView } from 'framer-motion'
import { Children, cloneElement, isValidElement, useRef } from 'react'

export function ScrollOnView({
  children,
  index = 0,
  transitionVelocity,
  withProps,
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const props = withProps ? { ...children.props } : {}
  return (
    <Box
      ref={ref}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0)' : 'translateY(100px)',
        transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
        transitionDelay: `${index * 10 * transitionVelocity}ms`,
      }}
      {...props}
    >
      {children}
    </Box>
  )
}

export function AnimateAllChildren({
  children,
  transitionVelocity = 1,
  withProps = true,
}) {
  const arrayChildren = Children.toArray(children)
  return (
    <>
      {arrayChildren.map((child, index) => (
        <ScrollOnView
          index={index}
          transitionVelocity={transitionVelocity}
          withProps={withProps}
        >
          {child}
        </ScrollOnView>
      ))}
    </>
  )
}

export function TraverseAndAnimate({ children }) {
  let index = 0
  const wrapChildren = children => {
    const arrayChildren = Children.toArray(children)
    return arrayChildren.length > 1 ||
      arrayChildren[0]?.props?.children?.length > 1 ? (
      arrayChildren.map(child => {
        index++
        const innerChild = child.props.children

        const hasValidElement = Array.isArray(innerChild)
          ? innerChild.some(child => isValidElement(child))
          : isValidElement(innerChild)

        return innerChild && hasValidElement ? (
          cloneElement(child, undefined, wrapChildren(innerChild))
        ) : (
          <ScrollOnView index={index}>{child}</ScrollOnView>
        )
      })
    ) : (
      <ScrollOnView index={index}>{children}</ScrollOnView>
    )
  }

  return <>{wrapChildren(children)}</>
}
