import React from 'react';
import Helmet from 'react-helmet';
import appleTouchIcon180x180 from 'apple-touch-icon.png';
import faviconIco from 'favicon.ico';
import favicon16x16 from 'favicon-16x16.png';
import favicon32x32 from 'favicon-32x32.png';
import androidChrome192x192 from 'android-chrome-192x192.png';
import safariPinnedTab from 'safari-pinned-tab.svg';
import mstile from 'mstile-150x150.png';

export default function FaviconIco() {
  return (
    <Helmet
      meta={[
        { name: 'msapplication-TileImage', content: mstile },
      ]}
      link={[
        { rel: 'apple-touch-icon', sizes: '180x180', href: appleTouchIcon180x180 },
        { rel: 'shortcut icon', href: faviconIco },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: favicon16x16 },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: favicon32x32 },
        { rel: 'icon', type: 'image/png', sizes: '192x192', href: androidChrome192x192 },
        { rel: 'mask-icon', color: '#5bbad5', href: safariPinnedTab },
      ]}
    />
  );
}
