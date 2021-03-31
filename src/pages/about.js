import React from "react";
import Layout from "../components/layout"
import { graphql } from "gatsby"
// import styles from "../css/blog-template.module.css"
import Img from "gatsby-image"
import styles from "../css/about.module.css"

const AboutPage = ({ data }) => {
  const { profilePicture: { childImageSharp: { fluid } } } = data
  return (
    <Layout>
      <div className="container">
        <h1 className="blog-title">About Page</h1>
        <div id={styles.test}>
          <Img fluid={fluid} />
        </div>
        <div id="introduction">
          <p class="post-content">My name is Alan Reid, 29, and I'm from Bangor Northern Ireland. I'm slowly getting the hang of developing but I think what I'm looking to get a better grasp of, is my control of life. I love to help and I love to get things done. When I see something I can get done now, I usually work on that so to finish it asap. This slows my progress as a developer down and so I have decided on my 6am wakes again. It's helping, no one is bothering me at my time of need. Maybe this is just something weird that I have in my head but honestly, I'm slowing getting better. </p>
          <p className="post-content">I'm not the best in keeping to my plans but the one thing that I did learn when I was younger, must have been a weight lifter from what I can remember, is to do something. While we can't be perfect to keep to our plans, doing something is better than nothing and it's the one thing I have to keep doing better in. We aren't perfect and we certainly will fail but getting back on the horse to do it all over again is important and it's something I have to keep in mind. I'll do my best to update this website more and more to get better per day. It's the right thing to do. </p>
          <div className={styles.gridTwo}>
            <div>
              <h3 className={styles.title}>Esports</h3>
              <p className="post-content">My earliest memory of understanding competitive gaming properly, would be a Call of Duty 1, Rifles Only Server, [RoOF]Clan Central, where I really learnt that you can be in teams and compete against each other to be the best. I had always thought of myself to be the very good at computer games and took up to it immediately. I can still remember to this day my first round, playing my trial scrim for [RoOF], hearing Ubermatt, team captain, to play defensively on our home map, Pavlov, on the Russian side. I remember basically taking it to my own, playing with brute skill and taking out four players and our rival captain, Super, putting my 4-1 in my very first round. Afterwards I would play ramp room which I would professionally would position myself. I was on trial for two months and never got accepted. After making a team afterwards to rival [RoOF] I eventually got accepted. I think that team was called Own'Zor, terrible name.</p>
              <p className="post-content">I have a lot of memories about [RoOF] which I'll one day write about. I ultimately remember becoming a mega team but it was still ultimately a community team. I remember to this day the last day of [RoOF] practising with Super, the rival captain I talked about, training us on Rocket. I can't remember the fashion of how it all ended but I remember at that training session, [RoOF] ended. It was so random and dumb. Stupid if I'm to say the truth. I would then join [DaS], the other team which was amazing on Pavlov to great success. I would form un1t which would tear teams up and then managed Boltwared, which was the formation of the best players at the time. However the last team I truly played on was ninja-gaming, a fun team which I never understood at the start. My competitive spirit would lead people to hate me on the team but it was a Pavlov team I remember in a scrim, breaking me in half. It ended up those players were local to me, Northern Ireland who I never knew played CoD1 though I knew played CoD2. Apprently they'd been playing CoD1 for years without me knowing. Ninja was a great team, not the best team, no where near it, but what made it great was doing well when no one thought it was possible. I remember playing against Elusive gaming, everyone thought we were screwed but we all "tried" and we did the upset in their homemap, Carentan.</p>
              <p className="post-content">I am absolutely certain that at one point, I was the best player in CoD1 RO on Pavlov, that there was no better player in the world on that map but myself. I had the leadership skills, the micro skills and the mental skills to break people on that map. I loved CoD1.</p>
              <p className="post-content">I remember trying other games out to not great excitement, but I remember stumbling upon League of Legends, by a previous friend who advised me to give it a go. I didn't like it at start but the 2nd time, I picked up the game and well, I'm still playing it.</p>
              <p className="post-content">I remember during this time managing teams in CoD1+4 but the memories are so fragmented, I honestly for the life of me can't remember anything of it. It's a shame. I enjoyed playing CoD4 scrims but I was no good at CoD4 Promod, however I remember lurking the TEK-9 forums. I tried it as a League player but realised after I wasn't that great at the game, managing was the next best thing.</p>
              <p className="post-content">I remember a lot about managing in League of Legends but I don't think that's something I need to write about now. I can remember most of the things that happened from 2013 and I do want to write about it somewhere just to make sure I have somewhere to remember about it. I guess it's one of the great things about being able to code, I can make a website and then have a quick and easy place to read up on these things. For now though, I'll not talk about how I tried to do make a scrim network, LoL-Academy, IPG + TFS and everything afterwards. That'll come another day, I'm just happy I've wrote up to this point.</p>
            </div>
            <div>
              <h3 className={styles.title}>Professional life</h3>
              <p className="post-content">My professional life has always been very weird. I've never really known what I wanted to do but I've always known that I wanted to program, to code, but to make websites. I however never made great strides with it. This could be because of the workflow I was using. I do believe if I ever did get into programming correctly, this would have changed my life heavily. A lot of different doors would have opened which would have led me differently. The esports life on the left, would have been very different. Maybe it wouldn't have happened at all. I fear this and I think I've made the right choice in life to not have proceed with this. Then again maybe I would have been rich, but I'm not too sure that's what would have made me happy.</p>
              <p className="post-content">I remember I wanted to work in sales and marketing. Selling Gameservers in CoD1. That was something I was heavily involved in. I worked with Boltwarded also but all of this is very hard to remember. 2006/2008 stuff. I know I wasn't  on the ball with this type of stuff but I attempted it anyway. There's a lot of skills I built because I made a fool of myself but a fool, I did make of myself. This hasn't changed much. </p>
              <p className="post-content">My first proper job, Omnisoft, was a marketing company which I actually got a job for because I was selling computers to them. That was a hustle. I for some reason remember getting involved with some sort of ISP meeting to secure a deal and I remember suggesting something to the company in question who we were proposing to, to sell to spread betters, traders and gamers who needed 100% uptime. It ended up securing the deal and I was offered to work for the company. That was weird and should never have worked but I love being right and suggesting things. I still do. We did a lot of digital marketing and while I was still doing a lot of the technical setup, I do remember content marketing and connecting to that fast. It was at this point that I worked with Gareth, his surname I forget but that's where I learnt about SEO and I loved the idea of it. Ranking against companies who have giant budgets but knowing how you should market correctly to the people and manipulate search engines, I loved this. We did reputation management which I had a blast working on. Ultimately though, cuts had to be made, I was removed from my position.</p>
              <p className="post-content">Funny enough, I worked for LoL-Academy for years on their SEO and development side. Paid well and got me through a lot of the harder times. I worked with Adrien for years and the pay was solid. I learnt more about SEO during this time and I got to continue with my esports hobby. I can't really call it a career because it's not been something I've ever seen as a job. I love esports. It's something I find very fun. LoL-Academy kept me involved with esports while I worked on the management side of it. Coming to think of it, I just remember doing small SEO things but honestly, I don't remember much of it anymore. Sad.</p>
              <p className="post-content">Unfortunately I don't remember much of 2016-2019 of work, I honestly can't remember why but it's absolutely lasped for me. I remember some SEO projects I did for people which I hold NDA's for so there's no talking about that but ultimately, I started up ColdboltSEO.com, a site which showed people what I knew about SEO and Esports. I think this is something I'm going to be working on heavily in the future because it's the right thing to do. It's the core skills of SEO and Esports together</p>
              <p className="post-content">I've learnt from my time with working with Zymplify and SPG, working for others doesn't work well for me, I do aim to change this soon, very soon.</p>
            </div>
          </div>
          <div id="wellPlayed">
            <h3 className={styles.title} style={{textAlign: "center"}}>Well played</h3>
            <p className="post-content">For those that got down to this point, thanks. I don't know if you read about my time within esports or my professional life, but I thank you for getting to this point. Ultimately for me, my esports experience and my professional experience collides together in the ability to make this site, to SEO it and make it into something. Maybe I don't want this site to be known, I probably don't so I'll add a robot.txt noindex directive or something, to make sure Google never finds this page for others, but knowing I can build a kickass website which I can still things of, while </p>
            <p className="post-content">While this site doesn't look like much, it's the proof that I can somewhat design okay and get something up. CSS/GRID has been a great tool that I've been able to understand quickly. While Javascript is still not that easy with me, I can make JS/React/Gatsby work. React as the UI tooling to reuse things and Gatsby as the fundamentals to build amazingly complaint SEO sites.</p>
            <p className="post-content">What I believe is next, is to make sure that I prove to people that I know what's going on. To build a brand where people can see that I am talking and showing what I know. To build a site with API connections which are amazingly quick and they can buy stuff. To mess around with chatbots but I need to slowly progress each day. While I write this, I grow more confident in my abilities but now it's about doing this everyday. I need to do that. It's my future. </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const data = graphql`
  {
    profilePicture: file(relativePath: {eq: "alanprofile.jpg"}) {
      childImageSharp {
        fluid (maxWidth: 800) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default AboutPage