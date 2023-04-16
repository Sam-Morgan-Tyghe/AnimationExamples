import { ImageProps, Img } from '@chakra-ui/react'

type SVGPropTypes = {
  src: string
  alt: string
}

export default function SVG({
  src,
  alt,
  ...svgProps
}: SVGPropTypes & ImageProps) {
  return <Img data-testid="svg" src={src} alt={alt} {...svgProps} />
}
