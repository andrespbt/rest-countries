import { SkeletonCard } from './SkeletonCard';

export const SkeletonList = () => {
  return (
    <ul className="w-[80%] flex flex-col items-center mx-auto px-6 md:flex-row gap-4 flex-wrap md:px-0 md:mx-0 md:w-full md:justify-evenly md:my-8 max-w-[1440px]">
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
    </ul>
  );
};
