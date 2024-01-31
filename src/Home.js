import { useState } from "react";
import BlogList from "./BlogList";
const Home = () => {
	const [blogs, setBlogs] = useState([
		{
			title: "Jaffle makers, Legaltech Events, and Buffets",
			brief:
				"In our first vlog of 2024, we wanted to explore a few ideas that occurred to us while in Nashville.  We had travelled to Nashville for a strategy meeting for ILTA, and during the travels, we noticed a few things that might have interesting parallels to legaltech.  We talk a little about what we expect from generative AI tools in 2024, and also about how we will be approaching R&D at Syntheia. ",
			body: "New experiences in 2024 Happy new year, everyone!  (we have a rule that if we hadn’t already seen you since 31 December, we can continue say “happy new year”…) The team at Syntheia has hit the ground running.  Our team’s goal for Q1 2024 is to improve every aspect of the UX of our software.  We have been building our software for several years now.  We realised around two years ago that there were limitations to our previous data structure, especially in a world where generative AI chat interfaces will become prevalent.  So, over the course of 2023, behind the scenes, we refactored the entire backend of our software so that it can handle a multitude of tasks that we anticipate will become front of mind for the legal profession in the coming years.  Some of this had to do with generative AI, much of it had to do with the intersections of content and collaboration, and all of it was focused on our core thesis: “Lawyers want reliable and relevant information.” The minimum viable version of our Generation 3 product was released on 1st January to a handful of our customers, and we will soon be releasing the first minor upgrades on 1st February.  We are excited to reveal more in the coming weeks! January vlog In our first vlog of 2024, we changed the format from what we had done previously.  Instead of interviewing someone, we wanted to present ideas that were on our minds, and share them with our readers.  Take a look at our 10 minute video below.  We would love you feedback on how we can make these vlogs more relevant, helpful and interesting to you",
			id: "1",
		},
		{
			title: "Goodbye 2023, you have been swell",
			brief:
				"As we wave goodbye to 2023, let's take a moment to reflect on the year's evolving legal tech landscape. It was a year marked by adaptation, innovation, and a forward-thinking progress in legal technology. In our latest post, we share some observations on the trends that shaped the legal world – from the buzz around generative AI to the subtle shifts in work culture. Join us on a casual stroll through the year's highlights.",
			body: "“The legal technology vertical has witnessed significant developments in 2023.  The changes to the landscape are reshaping how lawyers and technology will be working together.  We wanted to reflect a little on these developments, and we were lucky enough to be joined by Cheryl Wilson Griffin (of Legal Tech Consultants) in our contemplations of this remarkable year We did not cover everything we wanted during our chat with Cheryl (it was only 20 minute, after all).  So, we wanted to add a few more trends that we expect will continue into 2024",
			id: "2",
		},
		{
			title:
				"Releasing our Generation 3 Upgrades — A Progress Update",
			brief:
				"We are excited to unveil a major software upgrade with the launch of Generation 3, featuring a completely redesigned front end and a refactored back end for more powerful search and insights. The roll out will begin from December 2023. Generation 3 will deliver a more intuitive experience and workflow enhancements tailored to transactional lawyers.",
			body: "New experiences in 2024 Happy new year, everyone!  (we have a rule that if we hadn’t already seen you since 31 December, we can continue say “happy new year”…) The team at Syntheia has hit the ground running.  Our team’s goal for Q1 2024 is to improve every aspect of the UX of our software.  We have been building our software for several years now.  We realised around two years ago that there were limitations to our previous data structure, especially in a world where generative AI chat interfaces will become prevalent.  So, over the course of 2023, behind the scenes, we refactored the entire backend of our software so that it can handle a multitude of tasks that we anticipate will become front of mind for the legal profession in the coming years.  Some of this had to do with generative AI, much of it had to do with the intersections of content and collaboration, and all of it was focused on our core thesis: “Lawyers want reliable and relevant information.” The minimum viable version of our Generation 3 product was released on 1st January to a handful of our customers, and we will soon be releasing the first minor upgrades on 1st February.  We are excited to reveal more in the coming weeks! January vlog In our first vlog of 2024, we changed the format from what we had done previously.  Instead of interviewing someone, we wanted to present ideas that were on our minds, and share them with our readers.  Take a look at our 10 minute video below.  We would love you feedback on how we can make these vlogs more relevant, helpful and interesting to you",
			id: "3",
		},
		{
			title:
				"Tips for your legal prompt engineering experiment",
			brief:
				"In this blog post, we chat with Steve Goldstein about his experience of prompting generative large language models and what has worked well for his use cases.  This is not your standard listicle of top 10 prompting tips.  There are already thousands of those listicles.  There are even books about prompt engineering now.  This is a blog sharing tips from hard-earned experience.",
			body: "New experiences in 2024 Happy new year, everyone!  (we have a rule that if we hadn’t already seen you since 31 December, we can continue say “happy new year”…) The team at Syntheia has hit the ground running.  Our team’s goal for Q1 2024 is to improve every aspect of the UX of our software.  We have been building our software for several years now.  We realised around two years ago that there were limitations to our previous data structure, especially in a world where generative AI chat interfaces will become prevalent.  So, over the course of 2023, behind the scenes, we refactored the entire backend of our software so that it can handle a multitude of tasks that we anticipate will become front of mind for the legal profession in the coming years.  Some of this had to do with generative AI, much of it had to do with the intersections of content and collaboration, and all of it was focused on our core thesis: “Lawyers want reliable and relevant information.” The minimum viable version of our Generation 3 product was released on 1st January to a handful of our customers, and we will soon be releasing the first minor upgrades on 1st February.  We are excited to reveal more in the coming weeks! January vlog In our first vlog of 2024, we changed the format from what we had done previously.  Instead of interviewing someone, we wanted to present ideas that were on our minds, and share them with our readers.  Take a look at our 10 minute video below.  We would love you feedback on how we can make these vlogs more relevant, helpful and interesting to you",
			id: "4",
		},
	]);
	return (
		<div className="home">
			<BlogList blogs={blogs} />
		</div>
	);
};

export default Home;
