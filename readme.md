# Portfolio Gallery

This a portfolio preview page that feels like a streaming service preview. 

This page will: 

- Look good on both mobile and desktop
- When you hover over something on desktop it will pop out into a modal
- When you are in modeal view on mobile or desktop you an swipe to left and right to move to the next/previous items. 
- When you are in modal view, there are left and right buttons which can help you navigate where you need to go. 
- There will be a headline for each portfolio piece
- There will be a 'more' link that allows the user to see more details about the project. 

## The Development Journey

The goal of this project is to have a simple, but extendable, page that I could add to my current website. When I need to add another portfolio item it should be as simple as adding another file to a directory. 

Below I will keep notes on my journey and my thought patterns as I make design and coding decisions. 

### Pre-October 14, 2023
I created the basics of the portfolio page. When you hover over an item, it appears in the preview section. 
Initially I had thought that I wanted it to pop out like a streaming service preview video. But for the value of highlighting what I want the user to see, the 'big-screen' effect at the top of the page makes more sense. 

    [ToDo] I will have to make sure that this 'big-screen' effect presents itself really well on mobile devices. 

### The markdown approach and a switch to XML
At first I thought that I would make the source-files markdown. This is a good idea, and I even started creating a markdown parser for a simple subset of markdown. But I started thinking about whether it was really valuable to have the source be markdown. If this project started to scale to be users beyond myself, it might be worth it to use this approach. But since the primary user will be myself, I decided to switch to a structured XML source file. At some point I could write a simple Python script that gives me a form that allows me to edit the specific fields of the xml file(if I need this.) The XML files are pretty static, so there won't be too many updates to these. 

### October 14 - 18
I've made good progress. I've coded a carousel out of pure javascript to display each of the portfolio items. 
Next I'm going to start working on getting the data from the directory. 




Possible TODO items: 
[ ] Make the carousel swipe-able. So that if you are on a mobile device you can swipe left and right to navigate the pictures. 
[ ] When you stretch out the carousel on a mobile device, the arrows no longer line up with the middle of the veritical modal.


