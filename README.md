# React-Native-Visa-Passport-App

<img src="ss.gif" width="375" height="667"> <img src="ss2.gif" width="375" height="667">

A mobile application for Turkish citizens planning to go abroad. The application provides information on how to apply for visas of certain countries and Turkish passport in Turkey.

This is a bit modified version of my published application from google play store. 

For original application please visit : https://play.google.com/store/apps/details?id=com.yurtdisivizevepasaport

Almost all project is explanied in comment lines so that I do not think you will have a question. However, if you have please let me know. I am happy to help. 
Also, if you think develop this project or any idea to make it better I am open to all ideas. 
In this project you can see through these: 

	Redux: 

•	Observing states with developmental tools

•	Store, reducers, asynchronous actions, dispatching, and etc. 

	Loadash

	React Navigation:


•	Custom drawer with Native Base

•	Navigation Service

	Vector Icons

	Stateless Components 	

	and etc.

	

Installation: 

```

npm i --save 

```


Please get your firebase api key from: https://firebase.google.com
Your database json should be following this pattern:

```

{
  "countries" : {
    "   //country name here//  " : {
      " //visa name here//  " : {
        "visa_details" : "your visa details...",
        "visa_flag" : "image ...",
        "visa_link" : "if visa has web site put it here ...",
        "visa_name" : "your visa's display title..."
      }
    }
  }
}

```

Running: 

```

react-native run-ios
react-native run-android

```
 



