import React, { lazy, Suspense, createRef } from 'react';
const Home = lazy(() => import('pages/Home'));
const About = lazy(() => import('pages/About'));
const Portfolio = lazy(() => import('pages/Portfolio'));
const Education = lazy(() => import('pages/Education'));
const Experience = lazy(() => import('pages/Experience'));
// import Home from 'pages/Home';
// import About from 'pages/About';
// import Portfolio from 'pages/Portfolio';
// import Education from 'pages/Education';
// import Experience from 'pages/Experience';
import { Loader } from 'components/Services/Loader';
import NotFoundPage from 'pages/NotFoundPage';

const routes = [
  {
    path: '/',
    name: 'Home',
    element: (
      <Suspense fallback={<Loader />}>
        <Home />
      </Suspense>
    ),
    nodeRef: createRef<HTMLDivElement>(),
  },
  {
    path: '/about',
    name: 'About',
    element: (
      <Suspense fallback={<Loader />}>
        <About />
      </Suspense>
    ),
    nodeRef: createRef<HTMLDivElement>(),
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    element: (
      <Suspense fallback={<Loader />}>
        <Portfolio />
      </Suspense>
    ),
    nodeRef: createRef<HTMLDivElement>(),
  },
  {
    path: '/education',
    name: 'Education',
    element: (
      <Suspense fallback={<Loader />}>
        <Education />
      </Suspense>
    ),
    nodeRef: createRef<HTMLDivElement>(),
  },
  {
    path: '/experience',
    name: 'Experience',
    element: (
      <Suspense fallback={<Loader />}>
        <Experience />
      </Suspense>
    ),
    nodeRef: createRef<HTMLDivElement>(),
  },
  {
    path: '*',
    name: '404',
    element: (
      <Suspense fallback={<Loader />}>
        <NotFoundPage />
      </Suspense>
    ),
    nodeRef: createRef<HTMLDivElement>(),
  },
];

export default routes;
