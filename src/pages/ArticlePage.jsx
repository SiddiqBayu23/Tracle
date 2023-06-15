import React from 'react';
import NewsFeed from '../components/NewsFeed';
import HotNews from '../components/HotNews';
import HeroBannerSlider from '../components/HeroBannerSlider';

const ArticlePage = () => {
    return (
        <div>
            <HeroBannerSlider />
            <NewsFeed />
            <HotNews />
        </div>
    );
};

export default ArticlePage;