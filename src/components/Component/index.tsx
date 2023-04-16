type ComponentPropTypes = {
  text: string
}

export default function Component({ text }: ComponentPropTypes) {
  return <div data-testid="component">{text}</div>
}
