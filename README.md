# l2i1-equidistant-place-suggestor
This is the project made by my students in the Descartes University of Paris. The web app will suggest a place equidistant to several friends that whish to hangout based on their addresses.

# Introduction
This installation manual is a document that describes all the necessary tools to install to make the web application work.

# Installation guide

##  Step 1: Git installation
Download git bash here : git-scm.com/downloads <br/>

##  Step 2: Clone the repository <br/>
1. Open Git <br/>
2. Go into the directory you want with: `cd  ` command <br/>
3. Clone the repository :
`git clone https://github.com/Metux-renolib/l2i1-equidistant-place-suggestor.git `
## Step 3: Download the most recent version of nodejs
After cloning the repository you must donwload the most recent version of nodejs here : nodejs.org/en/download/ <br/>

## Step 4: Installation of the text editor 
We advise you to download visual studio here : https://code.visualstudio.com/
It is a free text editor that offers a lot of functionality.

## Step 5 : Installation of the necessary modules for the web application <br/>
1. Open visual studio code <br/>
2. Open command prompt and run this on the first command prompt :`cd back ` then run `npm install` to install backend modules <br/> 
   On the second command prompt run `cd front ` to install frontend modules , then run `npm install`</br>

## Step 6 : API key
If you have a google API key you can put it in .env files<br/>
1. Create a file called .env in the Backend folder
   It will contain : `GOOGLE_MAPS_API_KEY=your_api_key `<br/> 
2. Create a file called.env in the Frontend folder 
   It will contain :`REACT_APP_GOOGLE_MAPS_API_KEY=your_api_key `<br/> 
If you don't know how to get a google map api key go here : developers.google.com/maps/documentation/javascript/get-api-key <br/>

## Step 7 : Start using the application
Open two command prompt and go to the app folder <br/>
On the first command prompt, run : `cd back ` ,  then run `npm run dev ` <br/>
On the seconde one, run  : `cd front ` , then run `npm start ` <br/>
Wait ! a local development server will be launched and you will see your web app<.br/>
Here you go, you can now use our web app ! <br/>
