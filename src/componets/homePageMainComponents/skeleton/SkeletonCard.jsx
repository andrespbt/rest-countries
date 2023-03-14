import { SkeletonSpan } from './SkeletonSpan';

export const SkeletonCard = () => {
  return (
    <li className="w-full bg-darkGray/10 dark:bg-darkBlue rounded-md pb-4 animate-pulse my-10 max-w-[252px] max-h-[372px]">
      <div className="h-[180px] w-full bg-darkGray/50 rounded-t-md"></div>
      <div className="mx-6">
        <h3 className="w-full bg-darkGray/60 animate-pulse h-6 mt-4 rounded-xl"></h3>
        <SkeletonSpan />
        <SkeletonSpan />
        <SkeletonSpan />
      </div>
    </li>
  );
};
