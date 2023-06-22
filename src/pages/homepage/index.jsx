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
			<Suspense fallback={<>loading.........</>}>
				<LazyHeader />
			</Suspense>
			<Suspense fallback={<>loading.........</>}>
				<LazyIntro />
			</Suspense>
			<Suspense fallback={<>loading.........</>}>
				<LazyBanners />
			</Suspense>
			<Suspense fallback={<>loading.........</>}>
				<LazyJsTech />
			</Suspense>
			<Suspense fallback={<>loading.........</>}>
				<LazyCommunityInfo />
			</Suspense>
			<Suspense fallback={<>loading.........</>}>
				<LazyMeetOurTeam />
			</Suspense>
			<Suspense fallback={<>loading.........</>}>
				<LazyOurSpeakers />
			</Suspense>
			<Suspense fallback={<>loading.........</>}>
				<LazyUpComingMeets />
			</Suspense>
			<Suspense fallback={<>loading.........</>}>
				<LazySponsors />
			</Suspense>
			<Suspense fallback={<>loading.........</>}>
				<LazyFooter />
			</Suspense>
		</>
	);
};

export default Homepage;
