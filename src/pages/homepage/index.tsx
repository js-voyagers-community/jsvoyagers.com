import React, { Suspense, lazy } from 'react';

const LazyHeader = lazy(() => import('@/components/header'));
const LazyIntro = lazy(() => import('@/components/intro'));
const LazyBanners = lazy(() => import('@/components/banners'));
const LazyCommunityInfo = lazy(() => import('@/components/community-info'));
const LazyUpComingMeets = lazy(() => import('@/components/upcoming-meets'));
const LazyOurSpeakers = lazy(() => import('@/components/our-speakers'));
const LazyJsTech = lazy(() => import('@/components/javascript-frameworks'));
const LazyMeetOurTeam = lazy(() => import('@/components/meetour-team'));
const LazySponsors = lazy(() => import('@/components/sponsors'));
const LazyFooter = lazy(() => import('@/components/footer'));

const Homepage = () => {
	return (
		<>
			<Suspense fallback={<></>}>
				<LazyHeader />
			</Suspense>
			<Suspense fallback={<></>}>
				<LazyIntro />
			</Suspense>
			<Suspense fallback={<></>}>
				<LazyBanners />
			</Suspense>
			<Suspense fallback={<></>}>
				<LazyJsTech />
			</Suspense>
			<Suspense fallback={<></>}>
				<LazyCommunityInfo />
			</Suspense>
			<Suspense fallback={<></>}>
				<LazyMeetOurTeam />
			</Suspense>
			<Suspense fallback={<></>}>
				<LazyUpComingMeets />
			</Suspense>
			<Suspense fallback={<></>}>
				<LazyOurSpeakers />
			</Suspense>
			{/* <Suspense fallback={<></>}>
				<LazySponsors />
			</Suspense> */}
			<Suspense fallback={<></>}>
				<LazyFooter />
			</Suspense>
		</>
	);
};

export default Homepage;
