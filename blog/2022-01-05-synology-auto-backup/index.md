---
slug: synology-auto-backup-pc
title: Synology auto backup PC on night
authors: lonedev
tags: [backup, data]
---
<!--truncate-->
## Introduction

I've always felt the need to backup my PC automatically without worrying about it.<br />
I also wanted to find a way to restore my PC disks without too much work in case one of them failed someday.<br />

I searched a lot online for a proper solution for this but I couldn't find anything which was **plug & play** (& forget).

## My solution

I bought a Synology NAS which supports [Active Backup for Business](https://www.synology.com/en-global/dsm/feature/active_backup_business).<br />
The only limitation is that this backup system lacks of a feature to get the PC turned on automatically before backup and turned off after backup, so I had to make an hack.

:::warning
This tutorial was tested on [DS220+](https://www.synology.com/it-it/products/DS220+) and on a PC with **Windows 10**.
:::


### 1. Setting up the Active Backup for Business app

First of all you have to download it from the **Package Center**.<br />

![](<imgs/1.png>)

Then you can access it through the apps menu.

![](<imgs/2.png>)

Now add a new device, in this case your PC.

![](<imgs/3.png>)

Create a backup task for the Windows disk selecting `System volume` as type.

![](<imgs/4.png>)

Schedule it to be ran at 3.20AM each Monday.

![](<imgs/4_2.png>)

Create a backup task for your other disks selecting `Customized volume` as type.

![](<imgs/5.png>)

Schedule them/it to be ran at 3.20AM each Monday.

![](<imgs/4_2.png>)

### 2. Setting up the Active Backup for Business Agent on Windows

You also have to download the [Agent app for Windows](https://kb.synology.com/DSM/help/ActiveBackupBusinessAgent/activebackupbusinessagent), follow their installation tutorial.

### 3. Scheduling automatic startup/shutdown of your Synology

Open the `Control panel`, then open `Hardware & Power`.<br />
Now create a new `Startup` task and set it to be executed at 3AM. We want to make sure the Synology NAS is turned on completely before backups.<br />
Create a new `Shut Down` task and set it to be executed at 7AM. We want make sure all backups are finished and let the NAS do its own things if needed (optimizing the drive, deleting old backups etc).

![](<imgs/6.png>)

### 4. Scheduling automatic startup of your PC

Open the `Control panel`, then open `Task Scheduler`.<br />
Now create a new task and set it to be executed at 3.10AM, we want to make sure the Synology NAS is turned on completely before turning on our PC or it can't launch the command to turn on the PC.

![](<imgs/7.png>)
![](<imgs/8.png>)

Now set the `User-defined script` to this command which will send a packet to the PC to turn it on.<br />
`synonet --wake 00:00:00:00:00:00 eth0;`<br />
Instead of `00:00:00:00:00:00` you have to set your own PC mac address (search online how to get it).<br />
You can also set a notification email to know when the PC was turned on to create a backup.<br />

![](<imgs/9.png>)

:::warning
Make sure to enable WakeOnLan on your motherboard, search online on how to do that (method changes on every PC).<br />
:::

### 5. Scheduling automatic shutdown of your PC

You have to use my own program in order to schedule an automatic shutdown of your PC after every backup is finished since **Active Backup for Business** Agent lacks of this feature. <br />
Download my program from my [Github repo](https://github.com/LoneDev6/ActiveBackupShutdown) and schedule an automated task to run it on Windows startup.

### 6. Done!

I know this tutorial may not be really for beginners but I'd prefer to avoid spoonfeeding people.<br />
Good luck with your backups!