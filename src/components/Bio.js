import React from 'react';
import profilePic from '../assets/profile-pic.png';
import { rhythm } from '../utils/typography';

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2),
        }}
      >
        <img
          src={profilePic}
          alt={`ilcm96`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
            borderRadius: '50%',
          }}
        />
        <p
          style={{
            maxWidth: 300,
          }}
        >
          프로그래머를 꿈꾸는 학생입니다
          <br /> Python / Flutter / JS에 관심이 많습니다
        </p>
      </div>
    );
  }
}

export default Bio;
