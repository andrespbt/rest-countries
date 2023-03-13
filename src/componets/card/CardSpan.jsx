export const CardSpan = ({text, info}) => {
  return (
    <span className="mt-4 rounded-xl block">
    <span className="font-semibold">{text}:</span> {info}
  </span>
  )
}
