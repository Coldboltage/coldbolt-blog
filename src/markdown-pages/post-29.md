---
slug: "some-progress-again" 
date: "2021-10-08"
title: "Making some progress"
image: "../images/pushing-beach.jpg"
category: "coding"
---
I've been pushing a lot of the coding in the morning and I think that might be the best thing to do. I know there's generally quite a lot to get done in the morning but it seems if I get the coding stuff done in the morning when I'm feeling a little better, this helps me lot. It's 10amm and I feel like getting a couple of coding things out of the way. It's things that I understand so that helps and I know will help this site. 

Upadte: It worked! I was quite surprised that I got it working so easily but the site now adds category pages on demand when new categories are needed! We just do a graphql query for distint results and point it to the frontmatter for category. This gives us a list of categories. gatsby-awesome-pagination demands a list of posts so to know how many posts should be in page so we get that via looping through all the blog posts and filtering that list per category. From there, when each category page is created, the context is sent to state which category we are making and filters the results based of that.

We now have pagination for each category no matter how many categories we have. That's pretty cool!