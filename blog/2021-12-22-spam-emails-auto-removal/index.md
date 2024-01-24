---
slug: spam-emails-auto-removal
title: Spam email auto-removal
authors: lonedev
tags: [email, gmail, spam, scam, js, coding, web]
---

<!--truncate-->

## ![](icon.png) Spam emails

![](<imgs/meme.png>)

If you hate seeing this little number on your Gmail Spam folder, then you will find this article useful.

![](<imgs/1.png>)

Sometimes you may receive important emails and they end up being flagged as spam by Gmail, so you probably check this folder daily to make sure no email got mistakely flagged, but you end up seeing:
- meet single Russians
- click here to get 1000$
- your package is going to be delivered, you have to pay the shipping
- and so on...

## Google Script

1. Visit [script.google.com](https://script.google.com/) and create a new **Google Apps Script** for Gmail.
2. Choose to create a script for a Blank Project.

![](<imgs/2.png>)

## Copying the code

Copy and paste this code into the **Code.gs** file (click the **copy** button on the right):
<details>
<summary>Click to show the code</summary>
<p>

```jsx title="Code.js"
  var nice = [
//#region Filter

"storage.googleapis.com/", // Scams usually use google apis to make their shitty clickable links.

"clevernessoven.com",
"dissingconnivance.com",
"vuroc.com",
"siatave.com",
"1dznhmvbvg-------------------------.com ",
"lxuagolwx.us",
"unionsecret.com",
"redeemsexcavate.com",
"wuszofvbw.us",
"augustdot.com",
"xhmdefmwyvniad.org",
"scorchedca.eu.org",
"ipptr.com",
"ip-pool.com",
"cryptcapitalgroup.com",
"attentivenessfeather.com",
"titansvision.com",
"digitalincome24x7.com",
"stockscapitalgroup.com",
"war7xg31l--.com",
"infancyboy.com",
"dreamsatisfaction.com",
"serverclienti.com",
"coppel.com",
"larkbutterfly.com",
"divestaxiom.com",
"thebtcinvestment.com",
"ljciyzhupg-----------pgbuek-.com",
"exchangevisitcompany.com",
"pgbuek-.com",
"bruntheavy.com",
"mail-getresponse.com",
"sharepointonline.com",
"faycushion.com",
"ikexpress.com",
"jcom.zaq.ne.jp",
"key-data.co.uk",
"vwyorfr.us",
"qgdahhw.us",
"pnkqrev.us",
"wlnnnxx.us",
"friendlycabochon.com",
"naiado.com",
"emails-jobsdelivered.com",
"bvdxuzt.us",
"perrychristinejacobs.work",
"gpxxpdx.us",
"boxingsuit.org.uk",
"independantnewspaper.de",
"arqxkhu.us",
"flutterfleapit.com",
"wg6ur8-.com",
"5nakhak5x.us",
"riskchemicalproduct.org.uk",
"bestclassicmusic.org.uk",
"planningbrands.com",
"alpha-lt.net",
"amorphousanimus.com",

"Franklin Ave Ste",
"123 SE 3rd Ave. Suite 574, Miami",
"5960 South Land Park",
"Tvrdého 643 19900 Praha 9",
"928 S Dixie Hwy",
"34 N Franklin Ave Ste",
"Long Prairie Rd",
"Alicia Pkwy",
"Laguna Niguel",

"CITIBANK",
"Your Bank name",
"𝐩𝐫𝐨𝐬𝐭𝐚𝐭𝐞", // LOL

"LinkedIn Corporation"
//#endregion
];


//#region Logic
function filterViaSpam() 
{
  var threads = GmailApp.getSpamThreads(0, 30);
  for (var i = 0; i < threads.length; i++) 
  {
    var messages=threads[i].getMessages();
    for (var j = 0; j < messages.length; j++) 
    {
      var message=messages[j];
      var body=message.getRawContent();
      if(check(body, nice))
      {
        GmailApp.moveThreadToTrash(threads[i]);
        console.log("Found: " + message.getSubject());
      }
      Utilities.sleep(1000);
    }
  }
}
function check(body, arr)
{
  for (var i = 0; i < arr.length; i++) 
  { 
    if(body.indexOf(arr[i]) >- 1)
      return true;
  }
  return false;
}
//#endregion

```

</p>
</details>

This code also includes a predefined set of rules I created during time.

## Automatically trigger the check

Now click the stopwatch icon to set an automatic trigger for the previous code. 

![](<imgs/3.png>)

And set the form values as I did.

![](<imgs/4.png>)


## Done, you're free!

Finally you can make sure only mistakely spam-marked can go into the Spam folder.<br />
Most scam emails will be automatically deleted each 10 minutes. 

<br /><br /><br />
Sources:<br />

[geektron.com](https://www.geektron.com/2014/01/how-to-filter-gmail-using-email-headers-and-stop-via-spam/)