import { Box } from '@chakra-ui/react'
import { useInView } from 'framer-motion'
import { Children, cloneElement, isValidElement, useRef } from 'react'

export function ScrollOnView({
  children,
  withProps = true,
  index = 0,
  transitionDelayVelocity = 1,
  transitionLength = 0.9,
  transitionTiming = 'cubic-bezier(0.17, 0.55, 0.55, 1)',
  transitionDelay = 0.5,
  useInViewOnce = true,
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: useInViewOnce })
  const props = withProps ? { ...children.props } : {}
  return (
    <Box
      ref={ref}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0)' : 'translateY(100px)',
        transition: `all ${transitionLength}s ${transitionTiming} ${transitionDelay}s`,
        transitionDelay: `${index * 10 * transitionDelayVelocity}ms`,
      }}
      {...props}
    >
      {children}
    </Box>
  )
}

export function AnimateAllChildren({
  children,
  withProps = true,
  transitionDelayVelocity = 1,
  transitionLength = 0.9,
  transitionTiming = 'cubic-bezier(0.17, 0.55, 0.55, 1)',
  transitionDelay = 0.5,
  useInViewOnce = true,
}) {
  const arrayChildren = Children.toArray(children)
  return (
    <>
      {arrayChildren.map((child, index) => (
        <ScrollOnView
          index={index}
          transitionDelayVelocity={transitionDelayVelocity}
          withProps={withProps}
          transitionLength={transitionLength}
          transitionTiming={transitionTiming}
          transitionDelay={transitionDelay}
          useInViewOnce={useInViewOnce}
        >
          {child}
        </ScrollOnView>
      ))}
    </>
  )
}

export function TraverseAndAnimate({
  children,
  withProps = true,
  transitionDelayVelocity = 1,
  transitionLength = 0.9,
  transitionTiming = 'cubic-bezier(0.17, 0.55, 0.55, 1)',
  transitionDelay = 0.5,
  useInViewOnce = true,
}) {
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
          <ScrollOnView
            index={index}
            transitionDelayVelocity={transitionDelayVelocity}
            withProps={withProps}
            transitionLength={transitionLength}
            transitionTiming={transitionTiming}
            transitionDelay={transitionDelay}
            useInViewOnce={useInViewOnce}
          >
            {child}
          </ScrollOnView>
        )
      })
    ) : (
      <ScrollOnView
        index={index}
        transitionDelayVelocity={transitionDelayVelocity}
        withProps={withProps}
        transitionLength={transitionLength}
        transitionTiming={transitionTiming}
        transitionDelay={transitionDelay}
        useInViewOnce={useInViewOnce}
      >
        {children}
      </ScrollOnView>
    )
  }

  return <>{wrapChildren(children)}</>
}
