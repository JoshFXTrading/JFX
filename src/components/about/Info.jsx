import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        {/* <i class="bx bx-award about__icon"></i> */}

        <h3 className="about__title">Wins</h3>
        <span className="about__subtitle">102 wins at a 86.5% win rate</span>
      </div>

      <div className="about__box">
        {/* <i class="bx bx-briefcase-alt about__icon"></i> */}

        <h3 className="about__title">Losses</h3>
        <span className="about__subtitle">like all groups, we take losses, but we've managed to keep ours at only a 13.5% loss rate </span>
      </div>

      <div className="about__box">
      {/* <iconify-icon class="bx about__icon" icon="grommet-icons:status-good"></iconify-icon> */}

        <h3 className="about__title">%Gain</h3>
        <span className="about__subtitle">We boast an impressive 67% gain</span>
      </div>
    </div>
  );
};

export default Info;
