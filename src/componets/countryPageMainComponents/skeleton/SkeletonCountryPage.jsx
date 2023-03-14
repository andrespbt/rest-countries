import { SkeletonSpan } from '../../homePageMainComponents/skeleton/SkeletonSpan';
import { SkeletonButton } from './SkeletonButton';

export const SkeletonCountryPage = () => {
  return (
    <div className="mt-10 py-10 md:flex md:justify-around">
      <div className="md:max-h-[350px] md:w-[40%]">
        <div className="min-w-[320px] w-[320px] h-[160px] md:w-[500px] md:h-[300px] bg-darkGray dark:bg-darkBlue animate-pulse"></div>
      </div>
      <div className="mt-5 flex flex-col gap-4 md:mt-0 md:w-[40%]">
        <h2 className="font-extrabold my-5 md:mt-0 bg-darkGray animate-pulse dark:bg-darkBlue w-52 h-6 rounded-lg"></h2>
        <div className="md:flex md:gap-28 w-full">
          <div className="flex flex-col gap-2 w-full">
            <SkeletonSpan />
            <SkeletonSpan />
            <SkeletonSpan />
            <SkeletonSpan />
            <SkeletonSpan />
          </div>
          <div className="mt-5 flex flex-col gap-4 md:mt-0 w-full">
            <SkeletonSpan />
            <SkeletonSpan />
            <SkeletonSpan />
          </div>
        </div>
        <div className="mt-5 flex gap-5">
          {/* add 2 buttons */}
          <SkeletonButton />
          <SkeletonButton />
          <SkeletonButton />

          <div className="flex gap-4"></div>
        </div>
      </div>
    </div>
  );
};
