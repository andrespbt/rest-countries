import { SkeletonCard } from "./SkeletonCard"

export const SkeletonList = () => {
  return (
    <ul className="w-[80%] block mx-auto">
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
  </ul>
  )
}
