import React from "react";

// Sample reviews data
const reviews = [
  {
    review:
      "My Hours changed my business. Using My Hours allows me to not only count hours for each project to my clients but also allows me to learn about my business in terms of time slots for each task and project, which allows me to price projects more accurately. Through My Hours I also learn about the efficiency of my team in real-time.",
    host: "- Racheli B., Designer",
  },
  {
    review:
      "I have used other timer programs and found that My Hours gives me everything I need! I am able to track and report time for multiple clients and differentiate multiple projects per client. I also love how easy it is to edit previously entered time when I see that a mistake has been made. The export to Excel feature is extremely useful and allows me to quickly create invoices in my bookkeeping software. I'm all for easy, accurate, efficient functionality and My Hours definitely meets those criteria for me.",
    host: "- Debra S., Executive Office",
  },
  {
    review:
      "I track my time easily and fast. I've been using My Hours for several years. It helps me track the time that I'm not charging my clients, get a better idea on how I spend my time, helps me to prioritise my time and alerts me to overspending on some projects. I like the ease of use, many options and parameters, easy and fast reporting, the reliability, the modern look and feel, and the online support (it's fast, the help desk really seems to care rather than just processing tickets).",
    host: "- Luc H., CEO",
  },
  {
    review:
      "The ease of use with My Hours is beyond great. Since I constantly need to track my hours for different tasks it's critical for my entrepreneur business model. It's easy to export & send to my clients with notes on what I was working on during each project, etc.  Overall, I absolutely love My Hours. I stumbled across it when I really needed this quality product. I recommend it for any freelancer, entrepreneur, or just anyone needing to track their own hours based on different clients and/or projects. Totally easy to use. Super useful & insightful when you look at the graph feature.",
    host: "- Sarah R., Marketing and Advertising",
  },
  {
    review:
      "My Hours time-tracking software provides everything we need as a small business both for our payroll time-tracking and for customer billing. We've been using it for several years now without any problems. The customer support is great and any questions are answered by return email within 24 hours.  The My Hours team are always listening to customer feedback and improving the product.  It's great value for money.Our employees are happy using My Hours for their hours and tasks on a variety of projects. I haven't had one complaint!  The administrator features are flexible and easy to use. Over all a very positive experience with this product and I can certainly recommend it as a cost-effective product for time-tracking.",
    host: "- Caroline G., Operations Manager",
  },
  {
    review:
      "It's simple, made by people who understand what is really useful, easy to teach, can be used at individual and team level, for project or recurring tasks, with invoices or not. Reports are good looking and easy to export. Best value for money!",
    host: "- Jean-Louis D., Managing Director",
  },
  {
    review:
      "I have been using My Hours for years now, and I've always been attracted by the simplicity and the ease of input.  It helped me track my time most readily versus other apps that have cumbersome interfaces. Unfortunately I cannot use it exclusively for my needs, I need more project managing tools as well. But as for organizing tasks and recurring items, this app does it perfectly!",
    host: "- Raluca M., Visual Designer",
  },
  {
    review:
      "I love how easy it is to use My Hours and how it gives me the ability to manage my time as a business owner. I can track the amount of time I spend in administrative functions, business development and client work, to make sure I am optimizing how I use my working time. The software is intuitive and allows me to configure for the tasks and projects for my clients. It is quite flexible. I have recommended it to all my entrepreneurial colleagues. My Hours helps me track how I use my working time. I use the data to optimize my business performance, to maximize my billable hours and stay on track with my business goals.",
    host: "- Nancy S., Public Relations and Communications",
  },
  {
    review:
      "Tracking time is so easy on this app and program.  The software works concurrently between my phone and my computer.  It is very easy to manage all of my customers and my time on each project.  My customers like my time reporting on their billing, it helps them see how my time was actually spent.  It helps me see when I am productive and when I am not.",
    host: "- David H., Mechanical or Industrial Engineering",
  },
  {
    review:
      "My favorite part of My Hours is that it makes sense. When I first went into business for myself I tried another hour tracking company and it was awful. The product was clunky and very limited. I came across My Hours and haven't looked back. In fact, any contractors with whom I work, I request they use My Hours too. I like that it is easy to add projects and tasks to my various clients. I like that it's easy to see all of the tasks all at once. I have accidentally created multiple tasks that mean the same thing and it's easy to delete the redundant ones. My favorite part is being able to see how many hours I have spent per client at any given time. This is so helpful! This tool saves me a ton of second guessing and analyzes where I spent my time. I love this!",
    host: "- Pamela S., Non-Profit Organization Management",
  },
  {
    review:
      "Absolutely love My Hours & have for years! I am a QuickBooks ProAdvisor and have a free TSheets account, and have used many different time trackers over the years, I prefer My Hours. If I had a team I might need the features of TSheets, but since it's just me, My Hours is perfect, and free. I love the simplicity and it gives me everything I need. Love the dashboard that shows me my average billable hours per day, and my average hourly rate. I've set up projects/tasks for unbillable time as well as billable, so the dashboard is invaluable in showing me how productive my time is.",
    host: "- Jeannie C., Accounting",
  },
  {
    review:
      "Love this software!  I don't bill for my time, but I do need to keep track of time spent on various projects and on tasks within those projects.  I work a helpdesk in a addition to various documentation projects.  So during the day, when I pick up the phone to answer a helpdesk question, I just click to start tracking my time.  When I'm done, I click back to tracking the documentation project that I was working on.  Super simple!  Great for reporting on my time spent -- however it was spent!  I will be retiring in a couple of years and plan to work as a professional genealogist.  I will definitely be using My Hours to keep track of my time spent then!!!  Thanks so much for a great product!",
    host: "-  Jenifer H., Business Analyst",
  },
  {
    review:
      "My Hours has been a great tool to use for my self-employment and freelance jobs. I like that I can provide a detailed description of what I worked on during my time frame. My clients appreciate the added information and tracking.",
    host: "- Laura Lyn D., Editorial Freelance",
  },
  {
    review:
      "There was very little learning curve. I had changed to My Hours from an old tracking software from another vendor (which I had used for many years) and was initially concerned that I would lose productivity when switching to the new software. But I was wrong. I was up and running in less than an hour. Once I got it running, I quickly realized that it was more flexible than the old software I had been using and would enable me to do everything I was accustomed to doing with the old software but with none of the problems that drove me to change. It's been a painless and seamless change to using My Hours. As a freelancer, my ongoing success depends on my ability to get paid for my work. As such, an accurate and flexible time tracking software is quite possibly the most critical software function in my business. I cannot accurately bill my clients without it. My Hours does everything I need it to do, and is in an easy to use and functional format with a clean, uncluttered interface. It's become an indispensable tool for me.",
    host: "- Brian S., Marketing and Advertising",
  },
  {
    review:
      "Easy tracking of billable hours across various projects. Makes time tracking for different tasks simple.",
    host: "- Paul H.,Business Owner",
  },
  {
    review:
      "It's great to be able to log time as you work, whether in the office or in the move.  I'm sure being easy to do so means we capture more chargeable hours than we did using our old (very annoying) system. Our old time recording system ceased to be supported so we had to find a new one. We looked at lots of alternatives and ran a new one for almost a year but it was dreadful.  Lots of systems want to manage your whole practice rather than just log time so finding My Hours was a real relief.  We run it alongside Xero and our CRM both of which we didn't want to change.  Apart from niggles as above this has been a great system for us.",
    host: "-  Melanie L., Accounting",
  },
  {
    review:
      "I like how it's ease to use and to duplicate a single entry to a new day. I like how it shows the different times of the entry and how you can adjust every single one of them.  Also the reports, I like about the information and details that contains in it.",
    host: "- Simone M., Web Developer",
  },
  {
    review:
      "My Hours has been a great resource for me to get my freelance business off of a costly third-party platform, saving me fees! For flat-fee projects, I like using My Hours to see how much money I make per hour, allowing me to evaluate the my fees and make better financial and rate decisions in the future.",
    host: "- Morgan P., Freelance Writer",
  },
  {
    review:
      "It's simplified my client time tracking and invoicing. I like that I can break down by client, project, and specific task descriptions. It makes it so simple to pull a report and see where the time is going, or quickly total hours for invoicing. It's helped me accurately track hours and simplify invoicing.",
    host: "- Tara C., Freelance Marketing",
  },
  {
    review:
      "Great software, easy to set up and covers all my needs. I can have different rates, dozens of clients and create Projects and Tasks easily. I like being able to use the app on my iPhone and finding the information on my desktop I have recently started using it for my invoices and it works very well.",
    host: "-  Jason B., Information Technology",
  },
  {
    review:
      "My Hours is great for keeping track of time spent on different projects. It makes completing my mandatory timesheets at the end of the week WAY FASTER.",
    host: "- Michael B., Manager",
  },
  {
    review:
      "I like the fact that it is easy to use and I can track my productivity. Overall I have had a great experience.  I've been able to now better understand where my time goes with multiple clients and various tasks.",
    host: "- Michi R., Business Owner",
  },
  {
    review:
      "It does everything I need for my solo freelance work. The reports it generates are perfect, and the interface is very simple to navigate.",
    host: "-  Brian D., Sole Proprietor",
  },
  {
    review:
      "I have been looking for a timing program that allows me to keep track of my actual working hours with a toggle switch that allows me to turn the program on an off, while answering the phone. I have used Billing Tracker for years, which was another great program, but they have since stopped producing their software. After doing countless hours of online programs, My Hours is one of a few that has this 'on/off' toggle switch. It is simple to use and I can keep track of all of my tasks pertaining to one project.",
    host: "- Tarryn K., Architect",
  },
  {
    review:
      "I really like using this tracking tool for my daily time tracking, also it allows to see what i was doing for a particular project on a given day some time ago, when i wouldn't otherwise remember in such detail!",
    host: "- Verified Reviewer, Architecture & Planning",
  },
  {
    review:
      "I like how simple the interface is for the single thing that is done the most every day: tracking hours. Just select client and hit start. If you want more details that can be provided, but we've been able to track a lot of data from just the user, the client, and the amount of hours alone. We track an international team of ~30 and hundreds of clients on this software. Ultimately for the price, this has been the best value per dollar since our productivity tools lie elsewhere and we use My Hours purely for tracking billable time per client. We've been able to expand from the basic features and use the 'Task' feature quite robustly to handle some of the much larger accounts that essentially house 'sub-accounts'. For a growing startup looking to keep costs down, My Hours has been good to us. Last year we explored other options as our company suddenly expanded and decided that a simple solution was still the best solution for us even 6 years in.",
    host: "-  Emily C., Creative Director",
  },
  {
    review:
      "I've enjoyed using My Hours, and I use it every day. Great tool for tracking my time!",
    host: "- Cody H., Engineer",
  },
  {
    review:
      "Easy to manage  tool where you can start/pause/stop tasks in a clean, not cluttered, interface. Creating projects and tasks is quite straight forward. The tool provides some useful stats for free. I've been using the tool for over 2 years and, in my case, to measure my own working time split in client/project/tasks, and for that, the tool is good enough. I like its simplicity and ease to use.",
    host: "- Víctor M., Software Engineer",
  },
  {
    review:
      "My Hours is user centric - it is self explanatory and simple and produces the simple reports I need to do my work. My Hours helps me track my work easily and produce simple reports for my customers.",
    host: "- Catharine Y., Self Employed",
  },
  {
    review:
      "Vert easy to use and very flexible. Many options are available for tracking jobs such as by worker and groups. Easy to correct time if forget to start or stop clock. There is nothing I do not like about My Hours. I and my staff use My Hours to track time on client work. It works great and is very is to use. I highly recommend to any business, large or small.",
    host: "- Paul M., CPA",
  },
  {
    review:
      "Absolutely love My Hours & have for years! I am a QuickBooks ProAdvisor and have a free TSheets account, and have used many different time trackers over the years, I prefer My Hours. If I had a team I might need the features of TSheets, but since it's just me, My Hours is perfect, and free. I love the simplicity and it gives me everything I need. Love the dashboard that shows me my average billable hours per day, and my average hourly rate. I've set up projects/tasks for unbillable time as well as billable, so the dashboard is invaluable in showing me how productive my time is.",
    host: "- Jeannie C., Business Owner",
  },
  {
    review:
      "My Hours is an easy-to-use software for tracking time spent on projects. We use this primarily for tracking time spent on customer projects, but have also used this for internal tracking needs. The best thing about My Hours is how little I have to think about it; it just works and for a very affordable price.",
    host: "-  Eddie B., Information Services",
  },
  {
    review:
      "The software is easy to use, accurate and helps with our company's productivity. Adding accounts, projects and tasks, are easy and intuitive. We use the product to track jobs and invoice customers and to measure employee productivity. Highly recommended. Overall the product is great. We started with the free version but upgraded to get access to the more detailed reporting features. We use this daily and especially like the invoicing feature.",
    host: "-  William S., Director",
  },
  {
    review:
      "Straight forward, minimalistic design, easy to understand and to use. It's excellent. This app helped me to manage my photography editing work and it's made my charging process much more clear and easy",
    host: "- Arkadi R., CEO",
  },
  {
    review:
      "The software is very simple to use and provide a lot of functionality, even in the free version. For persons doing contract work, it is a must to have a tool that is able to track and report time used in projects without too much overhead that would take up valuable time. My Hours provides just that and if anything, that is what I think is its best feature.",
    host: "- Ricardo P., Engineer",
  },
  {
    review:
      "I always recommend My Hours to any freelancer looking for an hourly tracker. It's super easy to use and free.  Perfect for tracking my hours 😊",
    host: "- Braelinn F., CEO",
  },
  {
    review:
      "My Hours has been a wonderful tool for helping me track the time spent on various projects and assess the extent to which my effort is aligning with project budgets. I would highly recommend it!",
    host: "- Emily K., Senior Research Scientist",
  },
  {
    review:
      "This is a super easy to use app, always available from any device,  and gets you going in minutes. There's literally 5 clicks of initial setup and you've got your clock ticking = money collected ;) And when you get a spontaneous client call, no worries: load it, click the Big Green start button. You get to update all the details later on.",
    host: "-  Alex C., Marketing and Advertising",
  },
  {
    review:
      "Very streamlined and quick to get tracking started and stopped.  The reporting tools are extremely useful as well, great for contract work and tracking individual clients as well as total work. I've been using My Hours for a couple years and it's been super useful day to day as well as year end for doing taxes, yearly billing, etc.",
    host: "- Eric B., CEO",
  },
  {
    review:
      "Ease of use, simplicity, streamlined, it really helped me get my hour tracking in order. No negatives for the purpose and scope for which I am using the software",
    host: "- Arieh F., CFO",
  },
  {
    review:
      "I found My Hours to be the easy of programs I researched. The layout made it easy for me to track and understand the amount of time spent on each project. I found it very easy to add new clients, projects and tasks was super simple. I have and would highly recommend My Hours to other businesses.Being a freelance designer I often am working on project on an hourly basis where I need to track the hours logged. I find My Hours works perfectly for this.",
    host: "-  Alan O., Business Owner",
  },
  {
    review:
      "Gives me the ability to track time for various clients with different billing rates, projects, and contacts.  I can keep everything separate but in one place to make my life easier.",
    host: "- Chiquita J., Business Owner",
  },
  {
    review:
      "It's great for keeping track of hours for a client and multiple projects. I love being able to run reports for taxes, clients or for seeing how long a particular project took as a metric for future pricing.  I use it frequently when freelancing and have recommended to other freelancers on numerous occasions.",
    host: "- Stephen E., Graphic Designer",
  },
  {
    review:
      "What I like most about My Hours is that it doesn't over-complicate the process of tracking hours. It's super easy to use, and I enjoy the breakouts available in the reports section",
    host: "- Gabriel H., Senior Strategist",
  },
  {
    review:
      "I like the simple design, the ease of use, the features with seeing and downloading reports for time period. I haven't had any problems with My Hours so far.  I start tracking, when I start working on a project and hit the stop button, when I'm done. I can always ad any extra tracking afterwards, and I can see and download reports for each project and client for any period needed.",
    host: "- Sofie D., Online marketer",
  },
  {
    review:
      "The web interface is clear and easy to use I use My to report my work-from-home ours for my company. Its easy to set up projects and tasks, with different pay rates for tasks. Its a snap to log in, select a project and task to work on, start logging hours, clock in and out at various points during the day, and send reports to my supervisor at the end of the week. Its easy to go back and check each day's punches, tally total hours, or get daily, weekly, or monthly reports with payment already calculated.",
    host: "-  Michael L., Customer Support Professional",
  },
  {
    review:
      "The software is very easy to set up, and you can start using it right away to track your time, assigning different hourly rates for different types of work.",
    host: "- Naomi S., Marketing Manager",
  },
  {
    review:
      "I am an architect, photographer and graphic designer with a need to track hours on various project types and many clients. This free software is so easy to use to track time, as well as keep my contacts and projects organized. It was exactly what I was looking for. I'd recommend this for anyone that needs simple time tracking to help with invoicing and project management.",
    host: "- Jessica S., Designer",
  },
  {
    review:
      "I like how easy this is to use and customize across different projects or even across clients I use this daily to track my time for my employer as an independent contractor.  It's awesome.... and there's an app as well. So if I take a call in the go, I can record it before I forget.  It makes taking breaks easy... It's flexible, and the exportable reports allowed me to automate the creation of my time-sheet for my boss, so no wasted time there! I love this product and recommend it to independent contractors frequently.",
    host: "-  Amy M., Executive Assistant",
  },
  {
    review:
      "It's very easy to use and allows you to add in custom projects, tasks, customers, and notes within each block of hours recorded. I have been using this for over two years now and have seen some improvements to the website as well making it all the more easy to use.",
    host: "- Paige J., Senior Outreach Coordinator",
  },
  {
    review:
      "The dashboard feature makes it great to see my time logged per week vs. a project and it has become extremely valuable to me. Easy time-tracking entry makes it quick to change between projects without delay/interruption. Their customer service has been EXTREMELY helpful and I believe there have been times that they used my suggestions to improve the software. There's nothing better for tracking time at this price point.",
    host: "- Diane K., Grant Writer",
  },
  {
    review:
      "I love that I can see my hours tracked so nicely by project or by task or client. It's an easy way to display that information to the client. And the invoicing is very helpful in the paid version. Even the free version is great.",
    host: "-  Abigail M., Social Media Freelancer",
  },
  {
    review:
      "The web-based version of My Hours is very easy to use. I like that I can track my time by client and by project. I use the free version and it meets almost all my needs. The website is fast, easy to navigate, and provides me the flexibility I need in tracking my billable hours.",
    host: "- Diane K., Grant Writer",
  },
  {
    review:
      "My Hours streamlines the time clock system and allows you to track specific time spent on projects, vacation time, etc.  This has saved us so much time and money! We no longer have to use multiple programs to track time, projects, PTO, etc.",
    host: "- Katie L., Office Coordinator",
  },
  {
    review:
      "It is very easy to use. My Hours is accurate, and creates a great PDF reports. You can filter the data and easily define the result. I love some automatic features while tracking time as well. I have used three version, but once my business will expand I'd purchase the full. I am under the impression that it worth it 100%.Overall as a freelance graphic designer this is a perfect time tracker for any kind of business. I love it and won't change my time tracker.",
    host: "-  Verified Reviewer, Design",
  },
  {
    review:
      "I love the fact that I'm able to spend just a minute or two setting up the various tasks that I'm going to work on throughout the day and then with just a click or two and switch back and forth through the day and easily track all my time. I'm a film editor and a big bonus for me is that it runs smoothly in the background.",
    host: "- Maxwell J., Film Editor",
  },
  {
    review:
      "I love that the software can work from my laptop, desktop and phone and stay in sync. It has really helped me track my hours I work in and on my business, and helped me see where I was taking too long and what I can cut out to be more effective.",
    host: "- Lisa B., Business Owner",
  },
  {
    review:
      "I like that it was easy to navigate. This is important especially for someone new. I really like this tool. I can track hours add clients and project and it makes it easy. I liked the old UI but getting to know this one is okay as well. I'd recommend My Hours to anyone.",
    host: "- Danita W., Virtual Assistant",
  },
  {
    review:
      "I found it fast and easy to use. I entered my time within a few minutes of first using the program. I started doing hourly work for a marketing company who asked me to use My Hours to track time. Having done similar things in the past, I thought I would have to create a project for the time it would take to track the time. I found My Hours fast and easy to use. I had a question and support answered within hours.",
    host: "- Izzy G. Consultant",
  },
  {
    review:
      "The interface is very strait-forward. Everything you need is easy to find. The mobile app makes it easy to track hours on the go. A great tool to keep track of my freelance clients and projects. They continue to improve both their desktop & mobile systems with more features & functionality. It is very affordable!My Hours is so worth it! It was one of the first purchases I made when I started my freelance design business, and I still use it daily for time-tracking. The activity reports are such a valuable asset!",
    host: "-  Amanda P., Owner/Operator",
  },
  {
    review:
      "My Hours has helped me to become more aware of how I am using my time and has been critical to billing my clients accurately. It allows for tracking of multiple clients and sub projects and switching between them is relatively easy.",
    host: "- Don M., Managing Partner",
  },
  {
    review:
      "I like that  I can organize my projects into different categories and can get a quick tally, like I just did moments ago when I was on the phone with a client and was able to tell her how long I had worked on her project in the last two weeks.",
    host: "- Philip F., Writer",
  },
  {
    review:
      "I'm a freelance worker, programmer punctually, i been search for an app that i can manage my different clients, projects and tasks and found on 'My Hours' the best because the easy to use, and easy to follow my worked time. I can manage my worked hours easily and can get the full report at the end of the month to bill that.",
    host: "-  Juan Manuel B., Programmer",
  },
  {
    review:
      "My Hours is great. It is simple, it's free and you can get downloadable excel sheets of your time and hours. Great for businesses to keep track of work as well as individuals doing freelance work. This can be broken up between clients, tasks, etc.",
    host: "- Marissa L., Independent Marketing Consultant",
  },
  {
    review:
      "Simple to use, perfect for the price, genuinely the best hour tracker I've used yet.",
    host: "- Leah M., Engineer",
  },
  {
    review:
      "My Hours is an affordable, simple system to track time for anyone or any organization that works by the hour. I started with it as an individual and it was a great tool for helping me improve my estimates and increase profitability of the work I took on. I've since expanded it to a small team, and it's my main resource for time management and substantiating client invoices. I've tried various time-tracking tools and My Hours is, by far, the best value of the bunch: Just the right amount of functionality without too many complications, and at a fair cost. I've recommended it to others on several occasions.",
    host: "-  Bob R., Business Owner",
  },
  {
    review:
      "The ease of use with My hours is beyond great. Since I constantly need to track my hours for different tasks it's critical for my entrepreneur business model. It's easy to export & send to my clients with notes on what I was working on during each project, etc. Overall, I absolutely love My hours. I stumbled across it when I really needed this quality product. I recommend it for any freelancer, entrepreneur, or just anyone needing to track their own hours based on different clients and/or projects. Totally easy to use. Super useful & insightful when you look at the graph feature.",
    host: "- Sarah R., Virtual Assistant",
  },
  {
    review:
      "It's very easy to use and has enough features to be really useful.As consultant, I find it very useful for time tracking and billing.",
    host: "- Alex C., Engineer",
  },
  {
    review:
      "My Hours is very easy to use and generate reports with nice graphics and statistics. I can review time consuming tasks  and have more control over the projects. My Hours also give me information about how much each task costs to me and what to charge in my billings. I'm using the free plan for 2 years and this tool is a big help for my webdesign projects.",
    host: "- Adriano F., Web Designer",
  },
  {
    review:
      "Very usable free version. Ads are unobtrusive. No nagging to upgrade. Works well, features and improvements are steadily added. I started using My Hours when I was working part time for two employers. The free version had plenty of features for separating hours worked, and reporting time against various tasks. I now have one job where I track my hours, and My Hours does all that I need.",
    host: "- Don S., Tech Talent Screening Manager",
  },
  {
    review:
      "It is incredibly easy and simple to use, both from a user's perspective and an admin's perspective. We have been able to have our contractors and employees log their hours using My Hours and everyone is as satisfied as they can be when it comes to tracking hours.",
    host: "-  Tim B., Partner",
  },
  {
    review:
      "I like how easy it is to use. I am very busy throughout the day, all I have to do is press 'record' and give it a project - as easy as that! Great experience - I use it all the time, absolute life saver.",
    host: "-  Dylan E., Property Manager",
  },
  {
    review:
      "Great software for one-man show company like I am. Been using it for years. It's free, fast. Abilities to export records in Excel. I would recommend to anyone.",
    host: "- Pjetro I., Managing Director",
  },
  {
    review:
      "It's very reliable and easy to use. I'm not tech savvy and this was easy to learn. I am a solo practicing attorney and keeping time efficiently is vital for my practice. My Hours works great!",
    host: "- Elizabeth H., Attorney",
  },
  {
    review:
      "For tracking time and reviewing time spent by employees My Hours works great.",
    host: "- Adrian H., Businnes Owner",
  },
  {
    review:
      "The reports are great.  I can share with my clients and they can see what I have been doing very clearly - they all love it too.This helps me keep track of all my clients and the time I have spent on the various projects.  Easy to use so I continue to use it daily.",
    host: "-  Kim M., Consultant",
  },
  {
    review:
      "Easy to use for my team members who are remote but hourly. My House provides a simple and easy way to record, track and manage activity.",
    host: "- Thomas S., Head of Customer Success",
  },
  {
    review:
      "I really love this software. It keeps track of all my hours and is really easy to use. I would definitely recommend this software.There is nothing that I don't like about this software.",
    host: "-  Christina C., Paralegal",
  },
  {
    review:
      "Overall, it's simple and easy to use for what I need. I do design freelance and only need a place to log and keep track of hours for specific projects and clients. I handle invoicing myself. I suggest it as a great place to record the time your projects.",
    host: "-  Heather F., Graphic Designer",
  },
  {
    review:
      "Versatile, intuitive, and trouble-free -- perfect solution for a small consultancy.The free version of My Hours meets all my needs as a one-person consultancy but, if I had staff and more clients, the paid version would be a no-brainer.",
    host: "- Peter S., Business Owner",
  },
  {
    review:
      "It's so easy to use and just works. Being Web based it means it works from anywhere. Also being able to set up customers and projects is really useful for billing and management. No cons I can think of. It's the first software I have ever said that about. A perfect tool for tracking clients and billing.",
    host: "-  Bob M., CEO",
  },
  {
    review:
      "I've tried a few time tracking apps. My Hours was the easiest to get going and provides me with relevant reports that I use for billing my time at the end of the month.",
    host: "-  Verified Reviewer, Information Technology",
  },
  {
    review:
      "This software allows uses to program projects and tasks, which is especially useful for reporting our staff hours for grant purposes. It is easy to create, edit and delete logs as necessary. For the purposes of my office, My Hours has offered a seamless experience; I have no complaints as of now.",
    host: "Maddy C., Legal Assistant",
  },
  {
    review:
      "The easy way we can track the projects that i'm working. I use this app for a self control of the used time of multiple projects inside my UI UX department. In the end of the month i get a report of each project and send to the Project Manager of each project / client.",
    host: "-  André M., UIUX Designer",
  },
  {
    review:
      "It's simple, made by people who understand what is really useful, easy to teach, can be used at individual and team level, for project or recurring tasks, with invoices or not. Reports are good looking and easy to export. Best value for money!",
    host: "-  Jean-Louis D., Managing Director",
  },
  {
    review:
      "Unlimited clients and projects for tracking time with using their free version. Simple to use and set up. I tested a lot of free version trials but I kept coming back to this one because it does what I needed without being too complicated. Get's the job done. FYI, I'm a CPA with a tax practice.",
    host: "-  David L., Business Owner",
  },
  {
    review:
      "I have enjoyed using My Hours. In my line of business, although we do not sell time, time is an important element of our service. It gives us a way to see how profitable a project/client has been over time. We know know how much time certain tasks takes us. We then what to compare this to the actual time it took us to perform the particular tasks. My hours enable us to do this with ease.",
    host: "-  Lazarus K., Director",
  },
  {
    review:
      "The interface is intuitive. When I first started using My Hours 3 years ago, my hopes weren't high because it was so inexpensive. But it does everything I need it to do, and in such a way that I'm not constantly googling 'how to' questions or contacting customer support. I love being able to pull just about any report I can think about. How much $ have I made this year? Which project has dominated my schedule this month? It's fun (and useful) to see this data. I'm also very impressed with My Hours' customer service. They always respond promptly and politely. In the very few times I've reached out regarding a bug, they've provided a workaround, and then fixed the problem immediately. These are REAL people, developing GOOD software!",
    host: "-  April M., Creative Director",
  },
  {
    review:
      "The software is super easy to use and has all of the features I need. I started working at home for my employer early last year and also became self-employed and needed a way to track my time. I looked through many different options and My Hours ended up working perfectly for me. I'm able to track time for several clients and break down each project which makes billing a breeze.",
    host: "-  Lisa H., Bookkeeper",
  },
  {
    review:
      "We now consider this to be an imperative tool to track time and the tasks being undertaken, from this data we can then monitor team efficiency. The platform is incredibly easy to use I cant say there is anything I can complain about, we love using My Hours My Hours enables us to track team efficiency and keep a log of all activity undertaken so we can be confident when a client asks where their billable hours are being 'spent'.",
    host: "- Kerry S., Account Manager",
  },
  {
    review:
      "Usually time recording systems, when geared at accountants and solicitors, cost a fortune. This product is simple, and cost effective and has helped us increase our billing by approximately 10 - 15% percent each month, which far outweighs the cost. It helps us identify fixed fee clients who need a review as their business has expanded and the reports from my hours can be used to assist with justification of increases,",
    host: "- David H., Bookkepper and Accountant",
  },
  {
    review:
      "My Hours has all the services I need. I'm not even using it to the fullest.  Great Tool. I don't spend a lot of time tracking my hours which is important.",
    host: "-  Jennifer S., Founder and CEO",
  },
  {
    review:
      "It's free and it does EVERYTHING for you. It's literally effortless. If you are a freelancer and need to track how long you spend on each client, you need literally just one click to immediately start tracking the time. I started using it when I became self employed and I've never felt the need to look for another tool.",
    host: "-  Dario C., CRO consultant",
  },
  {
    review:
      "I love this product, I use it daily to track all my tasks at my remote job, is easy and great for tracking several projects at once.It also comes with useful reports and lots more options and features than I personally don't need, but overall is a great web app for freelance, small teams and up.",
    host: "-  Rodrigo N., Front-end developer",
  },
  {
    review:
      "The ability to set up 3 different categories - clients, projects and tasks - is really handy. We use the Client category for our different program and administrative categories. The reports are great, you can export the data easily and I like the ability to have the software track the time or you can enter the time.",
    host: "-  Romy F., Associate Executive Director",
  },
  {
    review:
      "I'm a graphic designer who works for an agency as well as for myself, and My Hours has really helped me keep track of the time I give to tasks. My clients also really appreciate that I give them a breakdown of how much time I gave to their jobs and in what areas I focused my time.My overall experience with My Hours has been excellent, and I have found it to be a valuable tool, especially when I get busy.",
    host: "- Chad S., Graphic Designer",
  },
  {
    review:
      "This product allows me to track my hours for multiple clients and projects for each client. Then when I'm ready to bill the client I can easily select the dates for invoicing and send to my client for payments.It does a good job of letting me jump right into my projects and begin to bill time without taking a lot of time for set up.",
    host: "-  Wesley A., Senior Developer",
  },
  {
    review:
      "The easy of use and the reports - it's super easy to create, manage and see the projects and how much effort you invest in each one. Now I can measure the real effort in each project an adjust my prices more efficiency.",
    host: "- Renato S., Graphics Designer",
  },
  {
    review:
      "Great tool, super easy to use. I have been using it for several years to record the time I spent on my different clients and projects (and to send them a correct invoice with proper time justification through the reports). I was very satisfy with their support team as well the only time I got in touch with them (the tool is super easy and bug free so I did not need to contact them more so far).",
    host: "-  Cécile M., Freelance consultant",
  },
  {
    review:
      "I love this product. I clock in and out of Clients all day . Very easy to use, very easy to learn I would recommend this to anyone having to track client/customer hours.",
    host: "-  Cynthia P., Business Owner",
  },
  {
    review:
      "It categorizes earnings by daily / client / project and you can select any date range as well. It is very easy to add a new client, new project per client, add in an expense or adjust time manually if needed.  You can save / export reports by same designations for easy client review. I use this time clock daily as a freelance graphic designer / developer. I was actually using it just before writing this review and will start it up again as soon as I am finished. I started using My Hours approx three years ago. I sampled over six different time clocks and this was the only one that even came close to fitting my needs.",
    host: "-  Mark R., Graphic Designer",
  },
  {
    review:
      "My Hours makes it easy to keep track of the work I do for my clients. With multiple projects on the go, it's easy to log the time either when working on it or afterwards. When it comes time to bill at the end of the month, I just run a report and the hours are all there!  Also great when a client asks how much time I've logged so far - I can easily check! I am far better at billing accurately by using My Hours. In the past, it was a notebook and paper.  My Hours helps me keep track of ALL the work hours!",
    host: "-  Marianne D., Virtual Assistant",
  },
  {
    review:
      "I'm a freelance graphic designer so I don't need to worry about a team of people, but I do need an easy and inexpensive way to keep track of my time by project. My Hours makes it easy to assign multiple tasks to multiple projects. I also like that I can organize reports by client or project.  I also like that I can edit my time if needed (ie, I forget to start or stop the clock). My Hours saves me a ton of time tracking projects (I used to do it manually). And because I'm a one person show, cost is a big factor.",
    host: "- Cheri G., Graphics Designer",
  },
  {
    review:
      "It's simple and easy to use, there is everything I need in it. I combine it with another tool for billing and this combination really works for me. Since most other tools are overloaded with functionality like the simplicity of My Hours.  For me as a freelancer My Hours is everything I need. The usability is really nice and I value that I can change",
    host: "-  Laura S., Marketing Freelancer",
  },
  {
    review:
      "Very easy to set-up and get started! I like that I can customize for different clients and easily pull reports. There's nothing I don't like! I can't think of anything! I've been able to easily record billable hours for client work and customize it as needed for different clients. It's also helped me convey to my supervisors what activities I am spending the most time on so I could advocate for more internal support. I've already recommended My Hours to my colleagues and I will continue to do so!",
    host: "-  Sabrina N., Creative Services Executive",
  },
  {
    review:
      "This is such a user friendly program.  I was able to choose my own time tracking system and I'm so glad I chose My Hours.  I can add any information I need.  The reports are perfect for double checking my tracking.",
    host: "-  Carrie L., Health Information Specialist",
  },
  {
    review:
      "The ability to breakdown time by client and project is amazing. Saves me a ton of time on reporting.  I used to use a time clock that simply tracked the time and I would enter the client. I had to manually report on total time per client and that was too time consuming to calculate my profit margins. Now with My Hours I can even break it down by project within a client and it calculates totals for me helping me ensure I'm charging my clients appropriately.",
    host: "- Beth P., Business Owner",
  },
  {
    review:
      "I love that I just download a pdf for the dates of services for a particular client. I can go in and simply start the clock and it isn't a hassle.",
    host: "- Amanda B., Virtual Assistant",
  },
  {
    review:
      "To be honest what I really like was that it was quick and easy to get started.  No packages to sign up for if you don't want to - just create an account and get going.   It is intuitive to use and if you spend even a small amount of time setting it up sensibly it will work for pretty much any scenario.  As an independent consultant I wanted something that would track time with different clients, different hourly rates and so on.  I've been using the free system for now but am thinking of upgrading so I can use more of the functions.  It has never crashed or let me down and I've been using it for about 18 months now - definitely one to recommend!",
    host: "-  Tracy L., Marketing Consultant",
  },
  {
    review:
      "I like that I am able to track hours either in real time or after the fact. I work on several different projects for our organization and am able to track all of them easily",
    host: "- Amenda P., Program Manager",
  },
  {
    review:
      "All I need to do is open the page and press 'play', and my time is recorded. I can annotate the time segments if I wish, and reporting is easy.There have been no problems or negatives in over a year of use. I'm a freelancer, and I need to track time on multiple clients and projects. This lets me do just that, easily. I have tried similar products before, but when I found My Hours I felt this is the one that does just what I need it to do, just right.",
    host: "- Nataly A., UX Consultant",
  },
  {
    review:
      "It's very easy and intuitive to use plus it's fast and reliable.  It's very customizable and has a lot of other data tracking features that make it very valuable for evaluating how much work we do and ultimately money we spend on clients projects. My experience has been great.  We have been able to better track clients projects and adjust our future proposals accordingly.",
    host: "-  Jeff B., Mechanical Engineer",
  },
  {
    review:
      "I've been using My Hours for many years now to organize my freelancing projects. I like how well the tracking works and especially the breakdowns per task, per project, per client, etc. I don't have to manually track my tasks anymore in Excel and worry about losing that master list. I like to track on my phone and have that show up like the desktop tasks as well.",
    host: "-  Phil S., Colorist",
  },
  {
    review:
      "The software is easy to understand and effectively tracks my hours.My hours makes it easy for me to send in my timesheet every two weeks and is great for being free.",
    host: "-  Chase O., Intern",
  },
  {
    review:
      "I can easily view my own calendar to see when I have booked off without having to talk to my supervisor. Also easy to request holiday myself. A lot easier and more time saving than previous methods that I have had to use in previous jobs. Genuinely can't think of any issues that I have with the software It's just easy and simple to use. As mentioned before it's far more streamlined than previous spreadsheet methods or talking to a supervisor like I had to do in previous jobs. And its also easy to keep track of what you have booked.",
    host: "- Gregory R., Graphic Designer",
  },
  {
    review:
      "It is very easy to use to track time and to extract data after in a simple to use format.",
    host: "Perla R., Consultant",
  },
  {
    review:
      "I'm a freelance marketeer with a number of clients, My Hours is easy to track how many hours I do for each and on what products, it's simple to use and you can us it online or on your app, so if you take a call out and about you can record it.  I love the ease of producing my monthly reports for invoicing. I've never had to call customer support as it's never gone wrong, touch wood! Easy, quick, reliable.",
    host: "-  Helen L., Freelancer",
  },
  {
    review:
      "Always have a tab open to administrate my hours directly into the system - works quick & easy. Reporting is an easy task with My Hours. Works well with our small organization",
    host: "-  Verified Reviewer, Public Relations",
  },
  {
    review:
      "I like that it keeps track to the second, it's easy to stop and start the timer and it calculates it for you. I like the features and I love that it calculates your totals in time and price.",
    host: "-  Esther D., Translator",
  },
  {
    review:
      "Ease of use. I'm able to log in time for each client with cost throughout the day. At the end of the month I review each client and create invoicing to reflect efforts and time.  I'm not sure there is anything I don't like about the product. I use it hourly, review it daily and depend on it for invoicing.",
    host: "-  Brett P., Business Owner",
  },
  {
    review:
      "It is simple to use, easy to setup. I use it daily and it does not take much time out of my day to track my time.We use this to track our daily time spent on individual clients as well as tracking where we spend out time in office.",
    host: "-  Billy W., Software Trainer",
  },
  {
    review:
      "It is easy to use and keeps accurate time. It is also easy to edit the time if I make a mistake or need to change because I worked additional hours after ending the day. I also like that there is a corresponding phone app. I like this product. It is easy to use. As an exempt employee it helps me keep track of my work hours in case there are questions regarding my time card or I need to justify comp. time. Everyday it helps me to organize my workload for the day and stay on track.",
    host: "-  Jason S., Database Manager",
  },
  {
    review:
      "High level of customizability, allowing better tracking of tasks, time, and billing those appropriately across different clients and projects. Very easy to get started! I needed a tool to help me understand the ACTUAL amount of time I was spending on projects, not so much for billing reasons. My Hours has been great for enabling me to do that without being buried behind a million other features.",
    host: "- George P., Producer",
  },
  {
    review:
      "It is simple to use, easy to setup. I use it daily and it does not take much time out of my day to track my time.We use this to track our daily time spent on individual clients as well as tracking where we spend out time in office.",
    host: "-  Billy W., Software Trainer",
  },
  {
    review:
      "There are a lot of options to set up the type of tracking you wish to do, as well as price per project, task, etc.  While I do not have anyone else using it with me, you are able to set up other users and assign tasks and track them.",
    host: "Scott S., Architect",
  },
  {
    review:
      "This is such an easy way to track hours spent on multiple projects.  I love that it is customizable and I can run reports in different ways.  It has made my client invoicing much more professional.",
    host: "-  Megan M., Independent Consultant",
  },
  {
    review:
      "I love how easy it is to use and how versatile it is for all my projects and tasks. I feel that all my options for hourly rates, billable or non-billable hours, charts, and download of reports are of great value to my business. I recommend this product all the time to family members and other freelancers.I use My Hours to track time, manage my monthly income, inform future decisions, and invoice clients. I've used it for several years and have yet to find a better product.",
    host: "-  Kristen G., Web Designer",
  },
  {
    review:
      "Makes it easy to track my time for each client so that I can invoice properly at the end of the month. I've used it though the years for many jobs and different clients and it hasn't disappointed me so far. It's a great tool for freelancers who need it.",
    host: "-  Karachi O., Public Relations Specialist",
  },
  {
    review:
      "My Hours is super easy to use. Its interface is very intuitive, I could easily understand how to create projects, tasks and log my time. Also, it generates a nice graphic to visualize how are my hours for the month and creates a beautiful (but simple) report to deliver to my clients. Using My Hours I don't have to lose my time on organizing my report of billing hours in the end of the month - just need to press the export button and it is done. Looks very professional. I also enjoy using the software because it is very simple and functional.",
    host: "- Isdora M., Marketing Specialist",
  },
  {
    review:
      "It lets me record time for multiple team members on multiple projects for multiple clients. I like the stop/start timer function, as well as the option to input the start/stop times manually, or even JUST input the number of minutes spent.",
    host: "-  Juliette O., Business owner",
  },
  {
    review:
      "So easy to setup and use, much better that manually tracking my time in spreadsheets and the reporting is fantastic, even in the free version. There really isn't anything I don't like.",
    host: "-  Kevin D., Support Engineer",
  },
  {
    review:
      "As the owner of a consulting business, I have contracts with several different individuals and companies. Some work is billed hourly while other work is project based. My Hours makes it possible to house all of my tracking information in one easy-to-use location and makes monthly billing of deliverables a snap. I have no complaints about this product.",
    host: "- Randi C., Business owner",
  },
  {
    review:
      "It's a pretty straight forward software. Easy to use. Intuitive. Any time I had a question or feature request I received a response very quickly! Overall, I'm VERY thankful for it and think it's great without so many options to make it confusing, clunky, over kill for what I need it for.",
    host: "- Joe B., Business owner",
  },
  {
    review:
      "I use My Hours to keep track of my time for each client and find it very easy to use and ideal for my needs.",
    host: "- Karen B., Virtual Assistant",
  },
  {
    review:
      "I like how easy it to use but has features to do custom reporting. It's always available, in 2+ years I've used it, it's always up. I totally rely on it to track hours and there has never been a hiccup. I like how it keeps tracking hours even after I shutdown my browser because I know when I stopped working and it keeps tracking even if I don't have my browse up.  I love how I can edit tasks and make adjustments easily. I use it as an independent contractor to bill clients.  I also use it as an employee to track my time to enter into a 'bad' time tracking system.",
    host: "-  Lori A., Software Engineer",
  },
  {
    review:
      "Love how easy it is to jump in and use, the most important part of time tracking is getting in and out fast.",
    host: "- Adam G., Bussines Owner",
  },
  {
    review:
      "It's a pretty straight forward software. Easy to use. Intuitive. Any time I had a question or feature request I received a response very quickly! Overall, I'm VERY thankful for it and think it's great without so many options to make it confusing, clunky, over kill for what I need it for.",
    host: "-  Joe B., Business owner",
  },
  {
    review:
      "Simple to use, intuitive. Perfect for freelancers. Overall excellent! The team is more than happy to help (customer support is A1) and this tool is well designed, easy to use, and in fact might be the best time tracker around. Perfect for freelancers!",
    host: "-  Jasmine L., Freelance translator",
  },
  {
    review:
      "Easy to use. Does exactly what I need for my day-to-day work. Very good. As a consultant it makes it super easy to track time for all of my clients.",
    host: "‍- Stephen B., Software Engineer",
  },
  {
    review:
      "It's very easy to track the time I spent on various jobs. And it's free if you don't need the team functions. Very good time tracker, I use it everyday.",
    host: "-  Andreas F., Journalist",
  },
  {
    review:
      "Very easy to use, free, and great for tracking my hours. No complaints  with using my hours. Love that it's free. Overall I'm very happy. Very useful for billing clients for my time.",
    host: "- Becky M., Freelancer",
  },
  {
    review: "This software is very easy to use, simple to set up. I can log my hours, track my progress and report seamlessly each month with all of my clients being given the breakdown of my hours.",
    host: "- Colin U., Self Employed Photographer",
  },
  {
    review: "It's very easy to track the time I spent on various jobs. And it's free if you don't need the team functions. Very good time tracker, I use it everyday.",
    host: "-  Andreas F., Journalist",
  },
  {
    review: "This software program is very east to use. I like everything about this software program",
    host: "-  Susan R., Office Manager",
  },
  {
    review: "I have been using this software since I started my business in order to track my time. I love the versatility of it and they come up with new upgrades all the time! I really like everything about it!",
    host: "- Holly M., Owner",
  },
  {
    review: "I appreciate that it's free! I work for myself, so it's only a single user, and I can track my different projects and rates...",
    host: "- Rachel G.,Sales and Marketing",
  },
  {
    review: "I like the reporting by project. We have to report billing hours by project, so this puts everything in a tidy report and makes billing our clients easier. Gathering everyone's hours for billing to clients on multiple projects is all assembled into 1 step.",
    host: "- Brett M., Owner",
  },
  {
    review: "As a mental health professional pursuing licensure this is a great piece of software to track all of my hours",
    host: "- Sam B., Mental health therapist",
  },
  {
    review: "My Hours allows me to keep track of where I am spending my time. The ability to create different projects is very helpful.",
    host: "- Molly C., Sponsorship Coordinator",
  },
  {
    review: "This software helps me track my time and provide backup to my boss regarding workload and productivity. My Hours helps me better manage my workload and understand the time commitment that certain types of projects require. This assists in future planning.",
    host: "- Colleen P., Marketing and Communications Officer",
  },
  {
    review: "I am a self employed person, so I am presently using the free version. It is just perfect for reporting the hours spent in each project, it is easy to use and the amount of options are great.",
    host: "- Sara M., Lawyer",
  },
  {
    review: "My Hours is a very helpful platform, it's easy to use and helps me to track time spent on each task. It does the job for me. Recommend.",
    host: "- Naveed A., Accountant",
  },
  {
    review: "It is user friendly and offers all of the reporting functions that I need. I have no complaints about this software. I work as a Virtual Assistant and use My Hours to track all of my time for my clients. It has always filled all of my needs as a contractor with multiple clients to bill.",
    host: "- Danielle W., Virtual Assistant",
  },
  {
    review: "Flexibility and often improvements are available. I love the ability to export the reports, it is really helpful when preparing the invoices and reporting on actual work hours. Recording actual hours spent and description of activities is made easy with My Hours The reporting capabilities are great.",
    host: "- Sahira Z., Information Technology and Service",
  },
  {
    review: "My hours is easy to keep open on my browser window and quickly track projects for various clients, each billed in their own way and at their own rate. Fantastic! Gets the job done for me as a solo entrepreneur.",
    host: "- Mattias C., Lawyer",
  },
  {
    review: "Ability to stop/start time on any project with a simple click. Tracking my time is no longer a chore. A simple button click starts/stops one project and enables me to move to another seamlessly.",
    host: "- Tracy M., Operations Manager",
  },
  {
    review: "This application is great, it allows you to keep track of your time, allowing you to schedule daily tasks at work or personally, generates the productivity record of the day or week, which your clients can see to know how you managed the time in your projects. It's great that you can generate billings and place a value every hour for the work done, in detail and generate detailed reports. I think it is very practical and easy to access, and the best, you can use it even if you do not have a credit card.",
    host: "- Mary B., Accounting",
  },
  {
    review: "We need the software to quickly track our hours on projects and the main advantage of the My Hours software is how easy it is to use it.",
    host: "- Damian W., Software Engineer",
  },
  {
    review: "As someone who freelances for different companies, I love how easy it is to track the time I spend on different projects and invoicing. I get paid very differently depending what I'm doing, so being able to visualize what I'm spending my time on really helps me plan out my workflow.",
    host: "- Rachel L., Director of Operations",
  },
  {
    review: "As an individual freelancer, I've been using the free version of My Hours for about 3 years and I am 100% happy with it. It has a very clean UI which makes it straight forward to use and it has all the features that I need, such as exporting reports, graphs that illustrate project allocation, and more. Another little feature that I find useful, is their change log notification that shows what's been added/fixed in the latest version.",
    host: "- Georgios S., Freelance Software Engineer",
  },
  {
    review: "My hours makes tracking my time for various projects a cinch! So far I've not found anything I don't like.",
    host: "- Verified Reviewer, Entertainment",
  },
  {
    review: "My Hours is a great tool for our office to track billable hours for work undertaken by staff. We are able to generate excellent reports which we particularity use for KPI analysis. The assignable billing rates is a great addition.",
    host: "‍- Sarah S., Law Clerk",
  },
  {
    review: "My Hours has a very intuitive, easy to use interface.  It's sleek and modern, yet highly adaptable to my individual needs. I've tried many online time trackers, My Hours was by far the easiest to use and the most adaptable one to my personal needs. Time entires are fast and painless (not always the case with other products) and the way you can sort and look at your data afterwards is great. I wouldn't want to run my business without it any more.",
    host: "- Markus W., Creative Director",
  },
  {
    review: "Very simple to use. Logs time even if the browser crashes or freezes. There are no cons for me. Time tracking for clients is simpler than other options out there",
    host: "- Zaf K., Designer",
  },
  {
    review: "Easy to maintain control on activities and TS entry, very easy to upload from excel the TS. Native integration to download files in Excel format. It is easy to send activity reports to customers by email. Works very fast and without delays. My Hours speeds up the time sheet process with customers. Once the filtering is done just send the report by email, avoiding delays in the billing process.",
    host: "‍- Cristiano O., Information Technology and Services",
  },
  {
    review: "What I love about this tool is the simplicity! It is very easy to enter the time spent and it is also very easy to get reports out of it! The invoicing part works like a charm! My Hours really helps me at the end of each month to do my invoicing! With the easy customizable reports I can create overviews of time spend just like my customers expect it.",
    host: "- Jerome G., Information Technology and Services",
  },
  {
    review: "Easy to use and keep track of time spent on different projects and quickly turn it into an invoice. Since using My Hours I also keep track of project costs. Accurate invoices in an outstanding product. I use this program for my own business and have also introduced it to a small company with 20 staff and they love it. You owe it to yourself to give it a go.",
    host: "- Arnold K., Architecture & Planning",
  },
  {
    review: "I like that I can track by project and then track in different ways within the project. Easily create a summary as well as generate an invoice. Very easy and clean and very cost effective. Overall it offers a very good experience. On the rare occasion I have asked for customer support I've been pleased with the responsiveness. I feel that the subscription is very well priced. I signed up for the paid PRO version and was really pleased with the functionality. I switched to the free version from the PRO because I just tracked hours, and my history was retained.",
    host: "- Barbara H., Computer Software",
  },
  {
    review: "I looked at various time recording apps and found that My Hours was the most suitable app for my company's needs. I particularly like the ease of recording hours spent for work done for my clients. To date I did not have any problems with My Hours. I have requested the potential to add certain actions of which they have considered and placed the action in their system. I greatly appreciate their consideration. I now have an accurate time recording of hours spent on processing my clients accounts and also have the ability to run reports on hours spent along with costing reports. It is a great product.",
    host: "- Julie C., Accounting",
  },
  {
    review: "The free version does exactly what I need it to - allows me to easily track my own hours, anytime, on any device. Cloud/web-based, so there's no need for lengthy or involved installs. Plus, it allows the developers to update the application when they see fit. There's nothing I really dislike about it. I have been looking for an app to develop, and thinking about business or personal problems that need solving. I happened to stumble upon My Hours, which does just about everything I was looking for, plus a lot more. Super easy, and helps me stay accurate.",
    host: "- Verified Reviewer, Information Technology and Service",
  },
  {
    review: "I like that this software is free, depending on your needs. It is super easy to jump right in and start using and it also offers a app for your phone. Setting up clients or certain services that you do the most, is super quick and I can send hours directly to my clients from the software. I work as a freelancer on various projects and I absolutely love using this to track time for my clients. I would definitely recommend this software to anyone because it is super easy to use and I am able to send my time tracking directly to my clients without any extra steps.",
    host: "- Verified Reviewer, Consumer Services",
  },
  {
    review: "Ease of use. Simplicity in design. Reliability. Overall MY Hours is great at time tracking, expenses, auditing and reporting.",
    host: "- Ariel T., Outsourcing/Offshoring",
  },
  {
    review: "My Hours software is very easy to use. My Hours saved my life and I am very grateful, I love the way My Hours reports help me present my projects and tasks. My Hours gives me and my clients very good information about the projects I am invoicing and it helps us to organize and communicate. It avoids any doubts on the preformed tasks as it makes everything very clear. I have never got a request to clarify the reports I am sending! Therefore, it saves us time giving the precise and precious information we need. And, furthermore, it helps me to organize and present the projects and tasks, so nicely! I am Spanish and my Spanish clients do not complain it is in English! It is so good that the language is not really the most important. Incredible!",
    host: "- Mercedes G., Writing and Editing",
  },
  {
    review: "I like that you can manually edit your time. Sometimes I am working and I forget to actually start my time for a new task. In that case, I can easily go back and just manually input my time. And I like that you can export it into different formats. I don't have anything negative to say. Been using it for a long time with no issues. I do tasks that take about 200 hours a month. My Hours just simplifies the entire process by keeping track of my time for me. At the end of the month, I just export my excel report and draw up my invoice for my clients. Out of all the time tracking software I have used, I settled on My Hours because it is easy and convenient to use.",
    host: "- Jean A., Writing and Editing",
  },
  {
    review: "It's so easy to use and is not complicated like other time tracking pages. I can't work, I can't track my working hours without using My Hours. I really love it!",
    host: "- Verified Reviewer, Translation and Localization",
  },
  {
    review: "The web site is easy to use. I especially appreciate the ability to track my projects budget as well as track my consulting hours. My Hours is an easy to use hour tracker. Contains useful reports on hour consumption and billing.",
    host: "- Charles N., Accounting",
  },
  {
    review: "As a freelance web site designer and developer I was struggling to know how much time I was working on different projects. I tried a number of time tracking tools but none of them really did what I wanted, then I found My Hours and since then I've been able to make sure work I do is paid for. I highly recommend My Hours to anyone needing to track multiple projects.",
    host: "- Sean C., Internet",
  },
  {
    review: "Its user interface is pretty, fast-reacting, intuitive. It takes no time to understand how it works. You can assign the same task to various projects, which is pretty cool. With the invoicing feature, you can see immediately what's been invoiced, what's to be invoiced. As a freelancer, this is great as you don't necessarily invoice all your clients at the end of a month. My previous time tracking software were leaving me with unidentified logs that kept me wondering for hours on what project / task I worked three weeks ago. You can set up hourly rates per task or per project or per team member. Pricing is spot on. Response time of My Hours is amazing. You click, it starts. Some other software are simply too slow to process information or start tasks and I'm always wondering if the task timer has started or not. Also, this UI actually incites you to take notes which is never something you do naturally because, at that moment, you KNOW what you are working on.",
    host: "- Nadege B., Executive Office",
  },
  {
    review: "It's simple, focusing on tracking time. I like the record button also. Since I go back and forth on several projects. You will always know how much you are spending on each Projects.",
    host: "- Junko O., Web Designer",
  },
  {
    review: "What I like most about this software is the ease of setting up projects and selecting projects for time entry. I love the different settings for time entry also, the 'standard' way and the quick mode. I also like how I can automatically assign tasks to every new project, that is so helpful! Overall, I think the architects and developers have done a great job making this software simple, powerful and easy to use! The user experience is phenomenal and I'm not overloaded with options!",
    host: "- Joe B., Business Owner",
  },
  {
    review: "My Hours offers amazing timer functionality for anything, really. Not just projects and tasks, but anything you need to keep tabs on time and effort spent. It is great with budgeting and their reporting functions are amazing. Even in the free account, you can generate amazing reports with My Hours. My Hours is perhaps the easiest and quickest way to track hours against tasks and projects. Signing up for an account is quick and easy. My Hours is great if you simply just a need a means of tracking time on projects and tasks and your current project management tool is not equipped for this or you simply are not using one. Add projects and tasks quickly. Start and stop timers, along with descriptions effortlessly. View status using various filtered views and always have full visibility with metrics.",
    host: "- Miguel G., Graphic Design",
  },
  {
    review: "Very quick to use, so it doesn't get in the way of work. Nice presentation for clients. Earns me more money!",
    host: "- William P., Architecture & Planning",
  },
  {
    review: "It's easy to keep track of clients, and projects, and appreciate the report options. It helps me determine where and how much time I'm spending for each client - very helpful when billing. Always appreciate the prompt responses I receive when I have an issue or question. I have recommended My Hours to many VA (Virtual Assistant) colleagues.",
    host: "- Terri P., Business Owner",
  },
  {
    review: "Great for tracking work hours! Easy to add new clients. Easy to track hours or add manually. Reporting is adequate for the task. Free version is a great value.",
    host: "- Dan B., Business Owner",
  },
  {
    review: "Works perfectly in almost every aspect of my business operations and needs. Simple, intuitive layout with simple exportation. Quick and easy time recording.",
    host: "- Robert N.",
  },
  {
    review: "This is the best free time tracking tool I have found for freelancers on the web!",
    host: "- Nikki P.",
  },
  {
    review: "Started with the trial version, may well upgrade as feature set so far versus price point is fantastic! Ability to set and control all aspects of the hours worked and also customize every logged task makes for an excellent interface and project invoicing tool. Clients are happy with more detailed invoices and clarity about hours expended on their project work.",
    host: "- Rimi A., Architecture & Planning",
  },
  {
    review: "This software is simple to set up and use. I don't waste any time setting up a new project. Once I've entered the client, I just start timing and go. If I take on more than the small handful of clients I currently have, I plan to upgrade to a paid account so I am able to generate invoices and have more clients. But for a basic user, this is the best service I've found. And I've tried them all. Note, I used to be an attorney in a small practice. I would have used this constantly in my billing had I known about it. My Hours has allowed me to keep detailed billing records for a handful of my freelance clients. There is so much flexibility that I could easily use it even for flat fee projects. It is simple to set up and almost mindless to use, yet it feels very robust. I've never felt a feature is missing. After trying countless competitors, including some very expensive industry software, I'm still convinced this is the best choice. And as my business grows, there's plenty of room to upgrade and expand the uses. Also, and importantly, customer service is wonderful. Through all my experiences, I've become a huge fan of My Hours. I'm happy to talk to anyone who is considering it.",
    host: "- Kristen W., Legal Services",
  },
  {
    review: "Wow, My Hours, where have you been all my life! This is the kind of intuitive and user friendly system I have been looking for for years, and I'm so happy you popped up in my search results today. I started using it immediately, and My Hours is just about the easiest, simplest, most intuitive, and versatile timekeeping program out there. Exactly what I was looking for, with all the features I have always wanted. Thank you so much for My Hours, and for making a fully functional version available for free to those of us who are a team of one. Just makes things soooo easy. The 'resume current time log' feature alone is worth its weight in gold. So grateful to be using this awesome system.",
    host: "- Sabine J.",
  },
  {
    review: "Been using my hours for my projects. Never encountered any problems and it's so easy to use.",
    host: "- Guðjón H. S."
  }
];

const ReviewCard = () => {
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 border border-gray-200"
          >
            <p className="text-gray-700 text-base mb-4">{review.review}</p>
            <strong className="text-gray-600 text-sm italic">
              {review.host}
            </strong>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewCard;
