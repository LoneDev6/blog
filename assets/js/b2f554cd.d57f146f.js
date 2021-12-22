"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[477],{10:function(e){e.exports=JSON.parse('{"blogPosts":[{"id":"spam-emails-auto-removal","metadata":{"permalink":"/blog/spam-emails-auto-removal","source":"@site/blog/2021-12-22-spam-emails-auto-removal/index.md","title":"Spam email auto-removal","description":"Spam emails","date":"2021-12-22T00:00:00.000Z","formattedDate":"December 22, 2021","tags":[{"label":"email","permalink":"/blog/tags/email"},{"label":"gmail","permalink":"/blog/tags/gmail"},{"label":"spam","permalink":"/blog/tags/spam"},{"label":"scam","permalink":"/blog/tags/scam"},{"label":"js","permalink":"/blog/tags/js"},{"label":"coding","permalink":"/blog/tags/coding"},{"label":"web","permalink":"/blog/tags/web"}],"readingTime":2.11,"truncated":true,"authors":[{"name":"LoneDev","title":"Owner of this blog","url":"https://github.com/lonedev6","imageURL":"https://avatars.githubusercontent.com/u/27242001","key":"lonedev"}],"nextItem":{"title":"The future of ItemsAdder","permalink":"/blog/future-of-itemsadder"}},"content":"\x3c!--truncate--\x3e\\n\\n## ![](icon.png) Spam emails\\n\\n![](<imgs/meme.png>)\\n\\nIf you hate seeing this little number on your Gmail Spam folder, then you will find this article useful.\\n\\n![](<imgs/1.png>)\\n\\nSometimes you may receive important emails and they end up being flagged as spam by Gmail, so you probably check this folder daily to make sure no email got mistakely flagged, but you end up seeing:\\n- meet single Russians\\n- click here to get 1000$\\n- your package is going to be delivered, you have to pay the shipping\\n- and so on...\\n\\n## Google Script\\n\\n1. Visit [script.google.com](https://script.google.com/) and create a new **Google Apps Script** for Gmail.\\n2. Choose to create a script for a Blank Project.\\n\\n![](<imgs/2.png>)\\n\\n## Copying the code\\n\\nCopy and paste this code into the **Code.gs** file (click the **copy** button on the right):\\n<details><summary>Click to show the code</summary>\\n<p>\\n\\n```jsx title=\\"Code.js\\"\\n  var nice = [\\n//#region Filter\\n\\n\\"storage.googleapis.com/\\", // Scams usually use google apis to make their shitty clickable links.\\n\\n\\"clevernessoven.com\\",\\n\\"dissingconnivance.com\\",\\n\\"vuroc.com\\",\\n\\"siatave.com\\",\\n\\"1dznhmvbvg-------------------------.com \\",\\n\\"lxuagolwx.us\\",\\n\\"unionsecret.com\\",\\n\\"redeemsexcavate.com\\",\\n\\"wuszofvbw.us\\",\\n\\"augustdot.com\\",\\n\\"xhmdefmwyvniad.org\\",\\n\\"scorchedca.eu.org\\",\\n\\"ipptr.com\\",\\n\\"ip-pool.com\\",\\n\\"cryptcapitalgroup.com\\",\\n\\"attentivenessfeather.com\\",\\n\\"titansvision.com\\",\\n\\"digitalincome24x7.com\\",\\n\\"stockscapitalgroup.com\\",\\n\\"war7xg31l--.com\\",\\n\\"infancyboy.com\\",\\n\\"dreamsatisfaction.com\\",\\n\\"serverclienti.com\\",\\n\\"coppel.com\\",\\n\\"larkbutterfly.com\\",\\n\\"divestaxiom.com\\",\\n\\"thebtcinvestment.com\\",\\n\\"ljciyzhupg-----------pgbuek-.com\\",\\n\\"exchangevisitcompany.com\\",\\n\\"pgbuek-.com\\",\\n\\"bruntheavy.com\\",\\n\\"mail-getresponse.com\\",\\n\\"sharepointonline.com\\",\\n\\"faycushion.com\\",\\n\\"ikexpress.com\\",\\n\\"jcom.zaq.ne.jp\\",\\n\\"key-data.co.uk\\",\\n\\"vwyorfr.us\\",\\n\\"qgdahhw.us\\",\\n\\"pnkqrev.us\\",\\n\\"wlnnnxx.us\\",\\n\\"friendlycabochon.com\\",\\n\\"naiado.com\\",\\n\\"emails-jobsdelivered.com\\",\\n\\"bvdxuzt.us\\",\\n\\"perrychristinejacobs.work\\",\\n\\"gpxxpdx.us\\",\\n\\"boxingsuit.org.uk\\",\\n\\"independantnewspaper.de\\",\\n\\"arqxkhu.us\\",\\n\\"flutterfleapit.com\\",\\n\\"wg6ur8-.com\\",\\n\\"5nakhak5x.us\\",\\n\\"riskchemicalproduct.org.uk\\",\\n\\"bestclassicmusic.org.uk\\",\\n\\"planningbrands.com\\",\\n\\"alpha-lt.net\\",\\n\\"amorphousanimus.com\\",\\n\\n\\"Franklin Ave Ste\\",\\n\\"123 SE 3rd Ave. Suite 574, Miami\\",\\n\\"5960 South Land Park\\",\\n\\"Tvrd\xe9ho 643 19900 Praha 9\\",\\n\\"928 S Dixie Hwy\\",\\n\\"34 N Franklin Ave Ste\\",\\n\\"Long Prairie Rd\\",\\n\\"Alicia Pkwy\\",\\n\\"Laguna Niguel\\",\\n\\n\\"CITIBANK\\",\\n\\"Your Bank name\\",\\n\\"\ud835\udc29\ud835\udc2b\ud835\udc28\ud835\udc2c\ud835\udc2d\ud835\udc1a\ud835\udc2d\ud835\udc1e\\", // LOL\\n\\n\\"LinkedIn Corporation\\"\\n//#endregion\\n];\\n\\n\\n//#region Logic\\nfunction filterViaSpam() \\n{\\n  var threads = GmailApp.getSpamThreads(0, 30);\\n  for (var i = 0; i < threads.length; i++) \\n  {\\n    var messages=threads[i].getMessages();\\n    for (var j = 0; j < messages.length; j++) \\n    {\\n      var message=messages[j];\\n      var body=message.getRawContent();\\n      if(check(body, nice))\\n      {\\n        GmailApp.moveThreadToTrash(threads[i]);\\n        console.log(\\"Found: \\" + message.getSubject());\\n      }\\n      Utilities.sleep(1000);\\n    }\\n  }\\n}\\nfunction check(body, arr)\\n{\\n  for (var i = 0; i < arr.length; i++) \\n  { \\n    if(body.indexOf(arr[i]) >- 1)\\n      return true;\\n  }\\n  return false;\\n}\\n//#endregion\\n\\n```\\n\\n</p>\\n</details>\\n\\nThis code also includes a predefined set of rules I created during time.\\n\\n## Automatically trigger the check\\n\\nNow click the stopwatch icon to set an automatic trigger for the previous code. \\n\\n![](<imgs/3.png>)\\n\\nAnd set the form values as I did.\\n\\n![](<imgs/4.png>)\\n\\n\\n## Done, you\'re free!\\n\\nFinally you can make sure only mistakely spam-marked can go into the Spam folder.<br />\\nMost scam emails will be automatically deleted each 10 minutes. \\n\\n<br /><br /><br />\\nSources:<br />\\n\\n[geektron.com](https://www.geektron.com/2014/01/how-to-filter-gmail-using-email-headers-and-stop-via-spam/)"},{"id":"future-of-itemsadder","metadata":{"permalink":"/blog/future-of-itemsadder","source":"@site/blog/2021-12-14-future-of-itemsadder.md","title":"The future of ItemsAdder","description":"ItemsAdder","date":"2021-12-14T00:00:00.000Z","formattedDate":"December 14, 2021","tags":[{"label":"spigot","permalink":"/blog/tags/spigot"},{"label":"minecraft","permalink":"/blog/tags/minecraft"},{"label":"plugin","permalink":"/blog/tags/plugin"},{"label":"development","permalink":"/blog/tags/development"},{"label":"java","permalink":"/blog/tags/java"},{"label":"itemsadder","permalink":"/blog/tags/itemsadder"}],"readingTime":2.32,"truncated":true,"authors":[{"name":"LoneDev","title":"Owner of this blog","url":"https://github.com/lonedev6","imageURL":"https://avatars.githubusercontent.com/u/27242001","key":"lonedev"}],"prevItem":{"title":"Spam email auto-removal","permalink":"/blog/spam-emails-auto-removal"},"nextItem":{"title":"\u26a1 Optimize Minecraft client","permalink":"/blog/optimize-minecraft"}},"content":"\x3c!--truncate--\x3e\\n\\n## ItemsAdder\\n\\n[ItemsAdder](https://www.spigotmc.org/resources/73355/) is my most successful product. It\'s a plugin for [Spigot](https://www.spigotmc.org/) servers which allows admins to extend the game without modding the client.\\n\\n## First days\\n\\nThe plugin was published initially on 2016 and was called **NewItems**, it was one of my very first Java projects and I was a newbie on Spigot development.<br />\\nI abandoned the old project after a year or so due to personal life, but then I picked it back up and started working on the very new version which ended up begin renamed ItemsAdder. As you know this version has more features, has a totally different structure and allows to achieve extreme customization of the game.\\n\\n## Current days\\n\\nI didn\'t expect this much fame for that single product, the [max peak](https://bstats.org/plugin/bukkit/ItemsAdder/7023) of servers which use ItemsAdder amounts to **1097 max online servers** and **3800 max players** enjoying the plugin.<br />\\nItemsAdder is in the [top 3](https://i.imgur.com/m3edZ8T.png) of the best voted paid Spigot plugins to this date, which is unbelievable, a plugin published in 2019 managed to reach the top 3 in 2 years while the forum itself is online since 2012.\\n\\nCurrently my main efforts are to maintain the most stable and optimized code as possible because this plugin is used on servers with more than 100 players connected, performance is a priority in these cases.\\n\\nThe most difficult task is to give support to customers because a lot of them find it easier to contact me without reading the official tutorials nor asking to the other community members and this sadly cuts a lot of the development time.\\nI\'d love to spend more time on actually coding the plugin.<br />\\nSadly most of them blackmail me with 1 star reviews which is making this situation really hard to maintain in the long term. \\n\\n## The future\\n\\nBack in the day I rushed a lot of ItemsAdder features initial planning, this resulted in non-balanced default stats and gameplay, this is why I\'m currently working with some friends to rebalance the default items pack and provide a better gameplay.<br />\\nThis is a very long task due to the fact that this plugin offers more than 500 default items/materials/blocks but I\'ll do my best to release an updated pack before mid 2022.<br />\\nI also plan to hook into the Minecraft gameplay itself and fix all the unbalanced features of the vanilla gameplay. Sadly this game has a lot of flaws which allow users to [speedrun it in no time](https://www.speedrun.com/mc/run/zq13899m).\\n\\nOne of the last important tasks I have scheduled is to find a proper way to avoid spamming customers which are contacting me everyday to ask basic questions. Right now I have no solution as this is the problem every developer has with this community."},{"id":"optimize-minecraft","metadata":{"permalink":"/blog/optimize-minecraft","source":"@site/blog/2021-12-14-optimize-minecraft/index.md","title":"\u26a1 Optimize Minecraft client","description":"Minecraft is slow","date":"2021-12-14T00:00:00.000Z","formattedDate":"December 14, 2021","tags":[{"label":"spigot","permalink":"/blog/tags/spigot"},{"label":"minecraft","permalink":"/blog/tags/minecraft"},{"label":"fabric","permalink":"/blog/tags/fabric"}],"readingTime":0.7,"truncated":true,"authors":[{"name":"LoneDev","title":"Owner of this blog","url":"https://github.com/lonedev6","imageURL":"https://avatars.githubusercontent.com/u/27242001","key":"lonedev"}],"prevItem":{"title":"The future of ItemsAdder","permalink":"/blog/future-of-itemsadder"}},"content":"\x3c!--truncate--\x3e\\n## Minecraft is slow\\n\\n\\n:::info\\n**Minecraft** is known to be very heavy, the community had fixed most of its problems.<br />\\nMy plugins don\'t require this mod. This is an optional tutorial for who wants to optimize their game, because it is slow.\\n:::\\n\\n\\n### 1. Downloading Fabric\\n\\nFirst you have to [download](https://fabricmc.net/use/) **Fabric** and install it.<br />\\nClick on the \\"**Download installer**\\" button:\\n\\n![](<imgs/1.png>)\\n\\n### 2. Edit the profile folder (optional step)\\n\\nClick on \\"**installations**\\", then press on \\"**edit**\\" under the \\"**Fabric**\\" installation.\\n\\n![](<imgs/3.png>)\\n\\nChange the folder to a new one, for example I created a new profile folder called `Fabric` inside `.minecraft`.\\n\\n![](<imgs/4.png>)\\n\\n### 3. Install the optimization mod\\n\\nDownload the mod [here](https://www.curseforge.com/minecraft/modpacks/fabulously-optimized/files/3559545)\\n\\nOpen the zip and extract the folders `mods` and `config` inside your `.minecraft` folder (or inside the **Fabric** profile folder).\\n\\n### 4. Run Fabric"}]}')}}]);