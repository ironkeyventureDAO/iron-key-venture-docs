import React, {useCallback, useEffect, useMemo, useState} from 'react';
import Layout from '@theme/Layout';
import styles from './investment-clubs-slider.module.css';

type Slide = {
  title: string;
  kicker?: string;
  body: React.ReactNode;
};

export default function InvestmentClubsSlider(): JSX.Element {
  const slides: Slide[] = useMemo(
    () => [
      {
        title: 'Introduction to Investment Clubs',
        kicker: 'Slide 1',
        body: (
          <div>
            <p>
              Investment Clubs are groups of people who come together to pool capital, share ideas,
              and invest collaboratively across various asset classes. Investment clubs provide a
              simple, cost effective vehicle for investor communities and new fund managers to build
              and activate networks.
            </p>
            <p>
              Unknown to many average investors, Investment Clubs have existed for centuries
              (https://en.wikipedia.org/wiki/Investment_club). The most popular investment club that
              most people will recognize is Jim Cramer on CNBC, which is non-capital pooling club.
              However, investment clubs have largely been untapped as a reliable capital formation
              tool in the 21st Century.
            </p>
          </div>
        ),
      },
      {
        title: 'Why Investment Clubs Have Been Underutilized',
        kicker: 'Slide 2',
        body: (
          <div>
            <ul>
              <li>
                Lack of proper incentives; cannot charge any fees in the US except for administrative
                expenses
              </li>
              <li>No standard operational approach or back office provider</li>
            </ul>
            <p>
              In summary, there are two types of investment clubs that the SEC recognizes, and the
              difference lies in how the capital is deployed.
            </p>
          </div>
        ),
      },
      {
        title: 'Capital Pooling Clubs',
        kicker: 'Slide 3',
        body: (
          <div>
            <p>
              Investors pool their capital together into a central location which enables collective
              decision making opportunities.
            </p>
            <p>
              This allows investors to deploy “wisdom of the crowd” strategies, rather than relying
              on 1-2 General Partners or Managers to make decisions on behalf of the investors.
              Investors maintain partial decision control over their capital on a capital-weighted
              basis.
            </p>
            <div className={styles.callout}>
              <strong>Obvious Web3 Use Case</strong>
              <div className={styles.small}>
                It’s possible to tokenize the profit interests of the investment club entity to create
                liquidity.
              </div>
            </div>
          </div>
        ),
      },
      {
        title: 'Non-Capital Pooling Clubs',
        kicker: 'Slide 4',
        body: (
          <div>
            <p>
              The club is typically managed by a gatekeeper (typically with an annual subscription or
              one-time membership fee).
            </p>
            <p>
              Investors in these types of clubs directly make their own capital decisions, and
              typically join the club for access to higher quality investment opportunities. Investors
              maintain full decision control over their capital.
            </p>
            <div className={styles.callout}>
              <strong>Obvious Web3 Use Case</strong>
              <div className={styles.small}>NFTs generally make sense to gate access to the community.</div>
            </div>
          </div>
        ),
      },
      {
        title: 'Common Problems With Investment Clubs Today',
        kicker: 'Slide 5',
        body: (
          <div>
            <p>
              Most investment clubs are member-driven, invite-only, and operated democratically. In
              the U.S., they're generally unregulated by the SEC if they stay under 100 members,
              don't charge carried interest, and require all members to participate in decision-making.
              Investment clubs are hard to set up, legally ambiguous, and built with either legacy
              systems or untested open source code.
            </p>
            <ul>
              <li>
                Access is gated: Venture opportunities are often reserved for insiders. Emerging
                investors and operators are locked out.
              </li>
              <li>
                Structures are outdated: Most emerging managers use traditional SPVs which are slow,
                costly, and not designed for technology-native communities.
              </li>
              <li>
                Liquidity is non-existent: Early-stage VC locks capital for years with little to no
                flexibility or secondary market.
              </li>
              <li>
                Coordination is messy: Founders, investors, and operators lack efficient tools to
                collaborate, track investments, and scale networks.
              </li>
              <li>
                Transparency is missing: Critical investment data is siloed or opaque, leaving members
                with little visibility into how decisions are made.
              </li>
            </ul>
          </div>
        ),
      },
      {
        title: 'History of Web3 Community Driven Investing',
        kicker: 'Slide 6',
        body: (
          <div>
            <p>
              Since the early days of digital assets, investors have leaned on one-another to further
              their own understanding of this nascent, fast-evolving asset class. Furthermore, with
              the integration of AI, the rate of technology innovation has increased by orders of
              magnitude; making community driven investing and innovation even more attractive and
              potentially lucrative, to those with an entrepreneurial bug.
            </p>
            <p>
              Over the years, there have been many attempts at creating community driven investing
              organizations, with very few success stories. As a first mover in 2017-2018, MetaCartel
              set the gold standard for what a decentralized venture organization could look like,
              and also gave birth to Hydra Ventures. I'd also be remiss not to mention OrangeDAO
              (raised $80M in 2022) and GCR.
            </p>
          </div>
        ),
      },
      {
        title: 'Why Many Venture DAOs Struggled',
        kicker: 'Slide 7',
        body: (
          <div>
            <ul>
              <li>
                Weakening of the overall DAO narrative in the crypto space: Community driven
                businesses were forced to shift to sustainable, cash flowing business models.
              </li>
              <li>
                Lack of reliable software infrastructure: With Syndicate.io exiting the space in 2023.
              </li>
              <li>
                Lack of clarity around federal crypto regulations in the US: Pushing DAO frameworks
                off-shore.
              </li>
              <li>
                Voter Apathy: It isn’t simple, nor easy, for no-coiners to stay engaged due to
                market-wide UX barriers related to voting.
              </li>
              <li>
                Coordination Issues: It is difficult to coordinate and incentivize work in a
                decentralized manner, especially when the entire team is part-time.
              </li>
            </ul>
            <p>
              Example: LimeDAO, started by Techstars alumni, failed due to lack of a central backer to
              help bootstrap the network.
            </p>
          </div>
        ),
      },
      {
        title: 'Future Tailwinds (2025)',
        kicker: 'Slide 8',
        body: (
          <div>
            <ul>
              <li>US crypto regulation outlook appears extremely favorable and innovation-friendly</li>
              <li>
                AGI is already here to help solve voter apathy and coordination issues by creating
                frictionless participation that integrates with crypto rails (example: ai16z).
              </li>
              <li>
                Real World Assets (RWA): As more traditional assets move on-chain, investment clubs
                can thrive in additional asset classes beyond startup investing.
              </li>
            </ul>
          </div>
        ),
      },
      {
        title: 'Introducing Iron Key Capital’s Investment Club',
        kicker: 'Slide 9',
        body: (
          <div>
            <p>
              Iron Key Capital Ventures Series 1 LLC (i.e Investment Club) brings together
              professionals, emerging founders, VCs, and angel investors to invest in the next wave
              of emerging technology that sits at the intersection of blockchain and AGI.
            </p>
            <p>
              Iron Key’s Investment Club, also known as a VentureDAO, fosters a transparent,
              community-driven model that prioritizes liquidity, innovation, and diversification.
              The community votes monthly to invest in one high-potential seed stage startup,
              splitting the upside between Iron Key and its members, and rewarding contributions
              through a decentralized investment committee.
            </p>
            <p>
              Iron Key’s club governance includes quarterly-voted roles like Venture Partners and
              Core Contributors. Its Angel-in-Residence (AIR) Program hones angel investing skills,
              while the club (inspired by the Service DAO concept) enables AIR graduates to build a
              track record in a cost-effective manner.
            </p>
          </div>
        ),
      },
      {
        title: 'Principles & Goal',
        kicker: 'Slide 10',
        body: (
          <div>
            <ul>
              <li>
                Service DAO Principles: Modularized roles, transparent governance, and cash flowing
                verticals integrated to support founders.
              </li>
              <li>
                Community-first: A decentralized LLC where every member can build an investment track
                record, find a co-founder, and help shape the Web3 / AI startup ecosystem.
              </li>
              <li>
                Web3-Native: On-chain infrastructure for transparency, speed, lower operational cost,
                and global accessibility.
              </li>
              <li>
                Compliance-Ready: Structured from the ground up to meet U.S. legal and tax
                requirements.
              </li>
              <li>
                Building Towards Liquid Venture: Tools for diversified venture exposure with
                liquidity optionality.
              </li>
            </ul>
            <p>
              <strong>Our Goal:</strong> Empower our community to use its collective intelligence to
              build a diversified portfolio of high quality seed stage startups.
            </p>
          </div>
        ),
      },
      {
        title: 'Founder Quote',
        kicker: 'Slide 11',
        body: (
          <div className={styles.quote}>
            <p>
              “The smartest capital in the next decade won’t just be fast; it will be collective.
              Iron Key Investment Club exists to give investors an edge, not by chasing trends but by
              compounding intelligence. We’re not building a club. We are building the infrastructure
              for a new class of investor. One that earns not just returns, but reputation, network,
              and leverage.
            </p>
            <p>
              We’re rewriting how capital is coordinated in the age of AGI and blockchain. Every
              member becomes a stakeholder, a contributor, and a decision-maker. Because the future
              of venture isn’t gated - it’s governed by those who build it.”
            </p>
            <p>
              <strong>Joseph Argiro</strong> - Founder and CEO, Iron Key Capital
            </p>
          </div>
        ),
      },
      {
        title: 'Why Join + Investment Thesis',
        kicker: 'Slide 12',
        body: (
          <div>
            <p>
              Iron Key is preparing to launch its native token, backed by the profit interests of its
              Investment Club, Iron Key Capital Ventures Series 1 LLC, a member-managed Wyoming LLC.
            </p>
            <h3>Our Investment Thesis</h3>
            <ul>
              <li>Focus: Seed Stage Web3 (blockchain) and AI</li>
              <li>Check Size: $25K to $200K</li>
              <li>Ownership Target: 3 to 5%</li>
              <li>Contract Type: Equity + Tokens</li>
              <li>Regions: U.S. preferred, Latin America, EMEA, Asia</li>
              <li>
                Sectors: Anything driving consumer and enterprise adoption of blockchain; examples
                include Protocols, APIs, Generative AI, Big Data, IoT (with blockchain components)
              </li>
            </ul>
          </div>
        ),
      },
      {
        title: 'The Community',
        kicker: 'Slide 13',
        body: (
          <div>
            <p>Iron Key's community brings together five core personas:</p>
            <ul>
              <li>Emerging Managers: Build your own investment club alongside Iron Key Capital.</li>
              <li>Investors: Expand deal flow and build your personal angel portfolio.</li>
              <li>
                Professionals: Write your first angel check, sharpen diligence skills, and build a
                venture track record.
              </li>
              <li>Advisors & Mentors: Help the next generation of founders and investors succeed.</li>
              <li>
                Founders: Get real-time feedback and advisory on your pitch, GTM strategy, and
                fundraising.
              </li>
            </ul>
          </div>
        ),
      },
      {
        title: 'Conclusion',
        kicker: 'Slide 14',
        body: (
          <div>
            <p>
              Underwhelmed by web3 innovation to date in compliant capital formation, Iron Key has
              decided to create Fish Network; software to bring emerging managers on-chain through
              community enablement.
            </p>
            <p>
              Leveraging its investment club structure, Fish Network is positioned to unlock active
              investor capital and serve the operational and capital needs of Seed stage startups.
            </p>
            <div className={styles.quote}>
              <p>
                “Though tempting, trying to time the market is a loser’s game. $10,000 continuously
                invested in the market over the past 20 years grew to $63,636. If you missed just the
                best 30 days, your investment was reduced to $11,484.1”
              </p>
              <p>
                <strong>- Christopher Dixon</strong>, General Partner at a16z
              </p>
            </div>
            <p>
              Dollar Cost Averaging (DCA) has previously been applied to public markets investing. As
              Fish Network, we extend this concept to private markets.
            </p>
          </div>
        ),
      },
      {
        title: 'Disclaimer + FAQ',
        kicker: 'Slide 15',
        body: (
          <div>
            <h3>Disclaimer</h3>
            <p>
              This thesis is intended solely for informational and educational purposes and does not
              constitute an offer, solicitation, or recommendation to buy or sell any securities,
              financial products, or instruments, nor should it be construed as investment advice,
              legal advice, tax advice, or a guarantee of future performance.
            </p>
            <p>
              Investing involves risks, including the potential loss of principal. Past performance is
              not indicative of future results.
            </p>
            <h3>Glossary and FAQ (high level)</h3>
            <ol>
              <li>
                <strong>Why do people join investment clubs?</strong>
                <div className={styles.small}>
                  Increased buying power, reduced transaction costs, shared risk, and networking/
                  learning opportunities.
                </div>
              </li>
              <li>
                <strong>Why should I join the Iron Key investment club?</strong>
                <div className={styles.small}>
                  Diversification and lower cost than an SPV; plus network/track record benefits for
                  founders and professionals.
                </div>
              </li>
              <li>
                <strong>What is carried interest?</strong>
                <div className={styles.small}>
                  A traditional share of a fund’s profits (often 20%) earned by managers after
                  returning capital (and sometimes a hurdle).
                </div>
              </li>
              <li>
                <strong>Do you charge carried interest?</strong>
                <div className={styles.small}>
                  No—rewards are handled through a points-based system and tokenized equity reflecting
                  participation.
                </div>
              </li>
              <li>
                <strong>What is AGI?</strong>
                <div className={styles.small}>
                  A theoretical form of AI capable of general reasoning across tasks (unlike narrow
                  AI).
                </div>
              </li>
              <li>
                <strong>What is a Service DAO?</strong>
                <div className={styles.small}>
                  A decentralized, community-driven org providing specialized services to other DAOs
                  and Web3 projects.
                </div>
              </li>
            </ol>
          </div>
        ),
      },
    ],
    [],
  );

  const [index, setIndex] = useState(0);

  const goTo = useCallback(
    (nextIndex: number) => {
      const clamped = Math.max(0, Math.min(slides.length - 1, nextIndex));
      setIndex(clamped);
    },
    [slides.length],
  );

  const prev = useCallback(() => goTo(index - 1), [goTo, index]);
  const next = useCallback(() => goTo(index + 1), [goTo, index]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [next, prev]);

  const current = slides[index];

  return (
    <Layout title="Investment Clubs Slider">
      <main className={styles.deck}>
        <div className={styles.header}>
          <div className={styles.titleWrap}>
            <h1 style={{margin: 0}}>Investment Clubs</h1>
            <div className={styles.kicker}>Introduction to Investment Clubs (slider)</div>
            <div className={styles.hint}>Use ← → keys, or click the dots.</div>
          </div>
          <div className={styles.progress}>
            {index + 1} / {slides.length}
          </div>
        </div>

        <section className={styles.slide}>
          <h2>{current.title}</h2>
          {current.body}
        </section>

        <div className={styles.controls}>
          <div className={styles.buttonRow}>
            <button className={styles.button} onClick={prev} disabled={index === 0}>
              Prev
            </button>
            <button className={styles.button} onClick={next} disabled={index === slides.length - 1}>
              Next
            </button>
          </div>

          <div className={styles.dots}>
            {slides.map((_, i) => (
              <button
                key={i}
                className={`${styles.dot} ${i === index ? styles.dotActive : ''}`}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                title={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}
