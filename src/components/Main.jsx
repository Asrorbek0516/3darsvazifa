import React from 'react'
import SocialCard from './SocialCard'
import OverviewCard from './OverviewCard'

function Main() {
  return (
    <main>
      <section className="social-cards">
        <SocialCard
          title="Facebook"
          icon="📘"
          followers="1,987"
          change="▲ 12"
        />

        <SocialCard
          title="Twitter"
          icon="🐦"
          followers="5,000"
          change="▲ 8"
        />

        <SocialCard
          title="Instagram"
          icon="📸"
          followers="11,000"
          change="▲ 15"
        />

        <SocialCard
          title="YouTube"
          icon="▶️"
          followers="8,239"
          change="▼ 3"
        />
      </section>

      <section className="overview">
        <h2>Overview - Today</h2>

        <div className="overview-cards">
          <OverviewCard title="Page Views" icon="📘" value="87" percent="▲ 3%" />
          <OverviewCard title="Likes" icon="📘" value="52" percent="▼ 2%" />
          <OverviewCard title="Likes" icon="📸" value="5462" percent="▲ 2257%" />
          <OverviewCard title="Profile Views" icon="📸" value="52k" percent="▲ 1375%" />

          <OverviewCard title="Retweets" icon="🐦" value="117" percent="▲ 303%" />
          <OverviewCard title="Likes" icon="🐦" value="507" percent="▲ 553%" />
          <OverviewCard title="Likes" icon="▶️" value="107" percent="▼ 19%" />
          <OverviewCard title="Total Views" icon="▶️" value="1407" percent="▼ 12%" />
        </div>
      </section>
    </main>
  )
}

export default Main