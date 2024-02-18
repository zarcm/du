 /**
  * * JAVASCRIPT CODE FOR THE STORY AND CHATBOT WIDGET APP * *
  */

 /**
 * ===== STORY FEATURE ===== *
 * ===== STORY DATA ===== *
 */

// All the assets (Images)
const allStories = [
    {
      thumbUrl: "assets/1-thumb.png",
      imageUrl: "assets/1.png",
      title: "Title No. 1: Infrastructure",
    },
    {
      thumbUrl: "assets/2-thumb.png",
      imageUrl: "assets/2.png",
      title: "Title No. 2: Coal",
    },
    {
      thumbUrl: "assets/3-thumb.png",
      imageUrl: "assets/3.png",
      title: "Title No. 3: Electricity",
    },
    {
      thumbUrl: "assets/4-thumb.png",
      imageUrl: "assets/4.png",
      title: "Title No. 4: Factory",
    },
    {
      thumbUrl: "assets/5-thumb.png",
      imageUrl: "assets/5.png",
      title: "Title No. 5: Oil Pump",
    },
    {
      thumbUrl: "assets/6-thumb.png",
      imageUrl: "assets/6.png",
      title: "Title No. 6: Crane",
    },
    {
      thumbUrl: "assets/7-thumb.png",
      imageUrl: "assets/7.png",
      title: "Title No. 7: Robot",
    },
    {
      thumbUrl: "assets/8-thumb.png",
      imageUrl: "assets/8.png",
      title: "Title No. 8: Ship",
    },
    {
        thumbUrl: "assets/9-thumb.png",
        imageUrl: "assets/9.png",
        title: "Title No. 9: Chemistry",
    },
    {
        thumbUrl: "assets/10-thumb.png",
        imageUrl: "assets/10.png",
        title: "Title No. 10: Tablets",
    },        
  ];

/**
 * ===== CHATBOT FEATURE ===== *
 * ===== CHATBOT DATA ===== *
*/

var chatdata= {
    chatinit:{
        title: ["Hello There <span class='emoji'> &#128075;</span>","How can I help you?","Tap to learn more."],
        options: ['Software As A Service','Feedback Management','Knowledgebase Management','Contact'],
        url : {      
        }  
    },
    software: {
        title:["Thanks for your response", "Let's understand - What is a SaaS?" ,"SaaS, also known as software-as-a-service, refers to application software hosted in the cloud and accessed through an internet connection via a web browser, mobile app, or client. The SaaS provider takes on the responsibility of operating, managing, and maintaining both the software and the underlying infrastructure.","Please select the type of Software as a service."],
        options:['Feedback Management','Knowledgebase Management'],
        url : {      
        }        
    },
    knowledgebase: {
        title: ["Thanks for your response", "Let's understand - What is a Knowledgebase management?" , "Knowledge management (KM) is the method of systematic organisation, creation, utilisation, and sharing of collective intelligence or knowledge within an organisation. Successful knowledge management ensures that information is securely stored in a readily accessible location."],
        options: [],
        url : {      
            more:"https://en.wikipedia.org/wiki/Knowledge_management",
        }   
    },
    feedback: {
        title: ["Thanks for your response", "Let's understand - What is a feedback management?" ,"A feedback management system enhances the process of collecting, analysing, and responding to customer feedback, ultimately contributing to product improvement and fostering increased customer satisfaction and loyalty.","Please select the type of feedback management."],
        options: ['Enterprise Feedback Management','Customer Feedback Management'],
        url : {      
        } 
    },
    enterprise:{
        title: ["Thanks for your response", "What is Enterprise Feedback Management?" , "Enterprise feedback management (EFM) is a system of processes and software that enables organizations to centrally manage deployment of surveys while dispersing authoring and analysis throughout an organization."],
        options: ['Take a deep dive'],
        url : {      
            more: "#",  
            link: ["https://en.wikipedia.org/wiki/Enterprise_feedback_management"]
        }   
    },
    customer:{
        title: ["Thanks for your response", "What is Customer Feedback Management?" ,"Customer feedback management (CFM) online services are web applications that allow businesses to manage user suggestions and complaints in a structured fashion."],
        options: ['Take a deep dive'],
        url : {      
            more: "#",  
            link: ["https://en.wikipedia.org/wiki/Customer_feedback_management_services"]
        }   
    },
    contact: {
        title: ["Thanks for your response", "What are you looking for?" ,],
        options: ['Email','Phone No.','Location'],
        url : {      
        } 
    },
    email:{
        title: ["Thanks for your response", "Our email address is - acrebord@outlook.com." ,],
        options: ['Email Us'],
        url : {      
            more: "#",  
            link: ["mailto:acreboard@outlook.com"]
        }   
    },
    phone:{
        title: ["Thanks for your response", "Our phone number is - +91-9100000000." ,],
        options: ['Call Us'],
        url : { 
            more: "#",                   
            link: ["+91-9100000000"]
        }   
    },
    location:{
        title: ["Thanks for your response", "Our location is Mumbai, India." ,],
        options: ['Find us'],
        url : {    
            more: "#",  
            link: ["https://maps.app.goo.gl/JXMJhfo5iGj3hKCd8"]
        }   
    },
}

 /**
 * ===== STORY FEATURE ===== *
 * ===== STORY CODE ===== *
 */

  const storiesContainer = document.querySelector(".stories-container");
  const storyFull = document.querySelector(".story-full");
  const storyFullImage = document.querySelector(".story-full img");
  const storyFullTitle = document.querySelector(".story-full .title");
  const closeBtn = document.querySelector(".story-full .close-btn");
  const leftArrow = document.querySelector(".story-full .left-arrow");
  const rightArrow = document.querySelector(".story-full .right-arrow");
  
  let currentIndex = 0;
  let timer;
  
  // All Stories
  allStories.forEach((s, i) => {
    const content = document.createElement("div");
    content.classList.add("content");
  
    const img = document.createElement("img");
    img.setAttribute("src", s.thumbUrl);
  
    storiesContainer.appendChild(content);
    content.appendChild(img);
  
    content.addEventListener("click", () => {
      currentIndex = i;
      storyFull.classList.add("active");
      storyFullImage.setAttribute("src", s.imageUrl);
  
      if (!s.title) {
        storyFullTitle.style.display = "none";
      } else {
        storyFullTitle.style.display = "block";
        storyFullTitle.innerHTML = s.title;
      }
  
      clearInterval(timer);
      timer = setInterval(nextStory, 1300);     // Changing to 1.3 Second.
    });
  });
  
  // Close Button
  closeBtn.addEventListener("click", () => {
    storyFull.classList.remove("active");
  });
  
  // Left Arrow Button
  leftArrow.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex -= 1;
  
      storyFullImage.setAttribute("src", allStories[currentIndex].imageUrl);
  
      if (!allStories[currentIndex].title) {
        storyFullTitle.style.display = "none";
      } else {
        storyFullTitle.style.display = "block";
        storyFullTitle.innerHTML = allStories[currentIndex].title;
      }
  
      clearInterval(timer);
      timer = setInterval(nextStory, 1300);     // Changing to 1.3 Second.
    }
  });
  
  // Next Story
  const nextStory = () => {
    if (currentIndex < allStories.length - 1) {
      currentIndex += 1;
  
      storyFullImage.setAttribute("src", allStories[currentIndex].imageUrl);
  
      if (!allStories[currentIndex].title) {
        storyFullTitle.style.display = "none";
      } else {
        storyFullTitle.style.display = "block";
        storyFullTitle.innerHTML = allStories[currentIndex].title;
      }
    }
  };
  
  // Right Arrow Button
  rightArrow.addEventListener("click", () => {
    nextStory();
    clearInterval(timer);
    timer = setInterval(nextStory, 1300);       // Changing to 1.3 Second.
  });

/**
 * ===== CHATBOT FEATURE ===== *
 * ===== CHATBOT CODE ===== *
*/

document.getElementById("inititateChat").addEventListener("click",showChatBot);
var cbot= document.getElementById("chat-box");

var len1= chatdata.chatinit.title.length;

function showChatBot(){
    console.log(this.innerText);
    if(this.innerText=='🗨️'){
        document.getElementById('test').style.display='block';
        document.getElementById('inititateChat').innerText='👋';
        initChat();
    }
    else{
        location.reload();
    }
}

function initChat(){
    j=0;
    cbot.innerHTML='';
    for(var i=0;i<len1;i++){
        setTimeout(handleChat,(i*500));
    }
    setTimeout(function(){
        showOptions(chatdata.chatinit.options)
    },((len1+1)*500))
}

var j=0;
function handleChat(){
    console.log(j);
    var elm= document.createElement("p");
    elm.innerHTML= chatdata.chatinit.title[j];
    elm.setAttribute("class","msg");
    cbot.appendChild(elm);
    j++;
    handleScroll();
}

function showOptions(options){
    for(var i=0;i<options.length;i++){
        var opt= document.createElement("span");
        var inp= '<div>'+options[i]+'</div>';
        opt.innerHTML=inp;
        opt.setAttribute("class","opt");
        opt.addEventListener("click", handleOpt);
        cbot.appendChild(opt);
        handleScroll();
    }
}

function handleOpt(){
    console.log(this);
    var str= this.innerText;
    var textArr= str.split(" ");
    var findText= textArr[0];
    
    document.querySelectorAll(".opt").forEach(el=>{
        el.remove();
    })
    var elm= document.createElement("p");
    elm.setAttribute("class","test");
    var sp= '<span class="rep">'+this.innerText+'</span>';
    elm.innerHTML= sp;
    cbot.appendChild(elm);

    console.log(findText.toLowerCase());
    var tempObj= chatdata[findText.toLowerCase()];
    handleResults(tempObj.title,tempObj.options,tempObj.url);
}

function handleDelay(title){
    var elm= document.createElement("p");
        elm.innerHTML= title;
        elm.setAttribute("class","msg");
        cbot.appendChild(elm);
}


function handleResults(title,options,url){
    for(let i=0;i<title.length;i++){
        setTimeout(function(){
            handleDelay(title[i]);
        },i*500)
        
    }

    const isObjectEmpty= (url)=>{
        return JSON.stringify(url)=== "{}";
    }

    if(isObjectEmpty(url)==true){
        console.log("having more options");
        setTimeout(function(){
            showOptions(options);
        },title.length*500)
        
    }
    else{
        console.log("end result");
        setTimeout(function(){
            handleOptions(options,url);
        },title.length*500)
        
    }
}

function handleOptions(options,url){
    for(var i=0;i<options.length;i++){
        var opt= document.createElement("span");
        var inp= '<a class="m-link" href="'+url.link[i]+'">'+options[i]+'</a>';
        opt.innerHTML=inp;
        opt.setAttribute("class","opt");
        cbot.appendChild(opt);
    }
    var opt= document.createElement("span");
    var inp= '<a class="m-link" href="'+url.more+'">'+'Learn more</a>';

    const isObjectEmpty= (url)=>{
        return JSON.stringify(url)=== "{}";
    }

    console.log(isObjectEmpty(url));
    console.log(url);
    opt.innerHTML=inp;
    opt.setAttribute("class","opt link");
    cbot.appendChild(opt);
    handleScroll();
}

function handleScroll(){
    var elem= document.getElementById('chat-box');
    elem.scrollTop= elem.scrollHeight;
}