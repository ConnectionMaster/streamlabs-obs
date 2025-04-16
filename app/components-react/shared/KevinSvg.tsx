import React from 'react';

export default (p: { className?: string; style?: any }) => (
  <svg
    className={p.className}
    style={p.style}
    width="144"
    height="128"
    viewBox="0 0 144 128"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M31.1916 75.9924C31.1916 60.311 31.1916 52.4702 34.2434 46.4807C36.9279 41.2122 41.2113 36.9287 46.4799 34.2443C52.4694 31.1924 60.3101 31.1924 75.9916 31.1924H98.3916C114.073 31.1924 121.914 31.1924 127.903 34.2443C133.172 36.9287 137.455 41.2122 140.14 46.4807C143.192 52.4702 143.192 60.311 143.192 75.9924V82.3924C143.192 98.0739 143.192 105.915 140.14 111.904C137.455 117.173 133.172 121.456 127.903 124.141C121.914 127.192 114.073 127.192 98.3916 127.192H56.7916C47.8308 127.192 43.3503 127.192 39.9278 125.449C36.9172 123.915 34.4695 121.467 32.9355 118.456C31.1916 115.034 31.1916 110.553 31.1916 101.592V75.9924ZM71.1916 79.1924C71.1916 74.7742 74.7733 71.1924 79.1916 71.1924C83.6099 71.1924 87.1916 74.7742 87.1916 79.1924V95.1924C87.1916 99.6107 83.6099 103.192 79.1916 103.192C74.7733 103.192 71.1916 99.6107 71.1916 95.1924V79.1924ZM111.192 71.1924C106.773 71.1924 103.192 74.7742 103.192 79.1924V95.1924C103.192 99.6107 106.773 103.192 111.192 103.192C115.61 103.192 119.192 99.6107 119.192 95.1924V79.1924C119.192 74.7742 115.61 71.1924 111.192 71.1924Z"
      fill={p.style?.fill || 'white'}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M59.1305 7.01358C59.6757 11.3981 56.5634 15.3944 52.1789 15.9397C49.762 16.2402 47.8202 16.6491 46.1015 17.1847C32.2962 21.4866 21.4858 32.297 17.1839 46.1023C16.6483 47.8211 16.2394 49.7628 15.9388 52.1797C15.3936 56.5642 11.3972 59.6765 7.01274 59.1313C2.62823 58.586 -0.4841 54.5897 0.0611478 50.2052C0.452741 47.0563 1.0323 44.1536 1.90836 41.3423C7.77459 22.5169 22.516 7.77543 41.3414 1.90919C44.1528 1.03314 47.0554 0.45358 50.2043 0.061987C54.5889 -0.483261 58.5852 2.62907 59.1305 7.01358Z"
      fill={p.style?.fill || 'white'}
    />
  </svg>
);
