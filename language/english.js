//I only use google translate, so if there is an error please correct it 
exports.DelSetWel = `Success delete set welcome in this group`
exports.NoSetWel = `There is no welcome set in this group yet`
exports.DelSetLeft = `Success delete set goodbye in this group`
exports.NoSetLeft = `There is no set goodbye yet in this group`
exports.doneSet = `It's been changed before`
exports.serverErr = `Server is down!`
exports.limitLu = (m) =>{
	return`Your remaining limit : ${m} `
	}
	
exports.addstik = (a, b) =>{
	return`List ${a} with key ${b} already in the database`
	}
exports.delstik = (a, b) =>{
	return`List ${a} with key ${b} not in database`
	}
exports.profile = (username, m, about, pasangan, PhoneNumber, exp, min, xp, math, prefix, level, role, limit, registered, tanggal_, regTime,premium, msToDate , premiumDate, now, lastclaim) =>{
	return`📛 Name: ${username} (@${m.sender.split`@`[0]})${about ? '\n💌 Bio: ' + about : ''}
👨‍❤️‍👨 Status: ${pasangan ? `Berpacaran @${pasangan.split`@`[0]}` : '-' }
#️⃣ Number: ${PhoneNumber('+' + m.sender.replace('@s.whatsapp.net', '')).getNumber('international')}
🔗 Link: https://wa.me/${m.sender.split`@`[0]}
🤷‍♂️ XP: Total ${exp} (${exp - min} / ${xp}) [ ${math <= 0 ? `Ready to *${prefix}levelup*` : `${math} XP left to levelup`} ]
🎚️ Level: ${level}
🎢 Role: ${role}
📊 Limit: ${limit}
®️ Registered: ${registered ? '✅ (' + tanggal_(regTime) + ')': '❌'}
⛽ Premium: ${premium ? `✅\n⏰ Expired Premium : msToDate(premiumDate - now)` : '❌'}
🛄 Last claim: ${lastclaim > 0 ? tanggal_(lastclaim) : ''}`
	}

exports.needReg = (a, b, c) =>{
	return`🇲🇨 Daftar dulu bang

Gini : #daftar nama|umur|gender|hobi

Contoh : #daftar ${a}|18|cowo|Game



🇺🇲 Please register first



Like this : #register name|age|gender|hobby

Example : #register ${a}|18|male|Games`
}
exports.Nolimit = (prefix) =>{
	return`Your limit today has run out ⚠️\n\nPlease buy a limit by typing ${prefix}buy or ${prefix}buyall`
	}
exports.Noseri = () =>{
	return`The serial number (sn) is wrong`
	}
exports.NoseriOk = () =>{
	return`Successfully cancel registration!`
	}
exports.ExReg = (c) =>{
	return`🇲🇨 Gunakan tanda "|" sebagai pembatas

Gini : #daftar nama|umur|gender|hobi

Contoh : #daftar ${a}|18|cowo|Game



🇺🇲 Use the "|" sign as a barrier


Like this : #register name|age|gender|hobby

Example : #register ${a}|18|male|Games`
	}
exports.DoneReg = () =>{
	return`You are already registered in the database`
	}
exports.UmurReg = () =>{
	return`Age must be a number`
	}
exports.NamaReg = () =>{
	return`Your name is really long, just use your first name`
	}
exports.HobiReg = () =>{
	return`You have a lot of hobbies, just 1 or 2 hobbies`
	}
exports.RegReg = (a,b,c,d,e,f,g,h,i) =>{
	return`╭─「 *SUCCESSFUL VERIFICATION* 」
│\`\`\`Verification Success With\`\`\` 
│
│\`\`\`SN: ${a}\`\`\`
│\`\`\`On : ${b}\`\`\`
│\`\`\`Name : ${c}\`\`\`
│\`\`\`Age : ${d}\`\`\`
│\`\`\`Gender : ${e}\`\`\`
│\`\`\`Number : @${f}\`\`\`
│\`\`\`To use bot Please \`\`\`
│\`\`\`Send command ${g}menu\`\`\`
│\`\`\`or ${h}allmenu\`\`\`
│
│\`\`\`\Total : ${i} Users\`\`\`
╰─────────────────────`
	}
exports.genderReg = (a) =>{
	return`Select one ( male / female)\n\n${a}`
	}
exports.UmurXReg = () =>{
	return`You are too old`
	}
exports.firstChat = (a, b, c) =>{
	return`Hi ${a} ${b} 🤗, I am ${c} whatsapp bots. Can i help u?`
	}

exports.AddstikOk = (q, a, b, prefix, command) =>{
	return`Success Add ${q} Into Database ${a}\n\nCheck with command ${prefix}${b}`
	}

exports.Addvn = () =>{
	return`Wait a minute, I will try to upload this media to the database`
	}

exports.AddstikOk_ = (a, b) =>{
	return`The duration is ${a} seconds, which is the maximum ${b} duration that bots can save into the database`
	}

exports.ListStik = (a) =>{
	return`_To take ${a} please send a message according to the list of ${a} the one above_`
	}


exports.noAbsen = () =>{
return `❌ No absences take place in this group!`
}
exports.StartAbsen = () =>{
	return`Start Absence`
	}
exports.DahAbsen = () =>{
	return`You're absent`
	}
exports.DelAbsen = () =>{
	return`✅ Successfully deleted absences in this group`
	}
exports.adaAbsen = () =>{
	return`There are still absent sessions in this group!`
	}
exports.SAbsen = () =>{
	return`Absence begins`
	}
//
exports.SetCmd = (prefix, command) =>{
	return`Reply stiker!!\nExample : ${prefix + command} .menu\n\n\n*Note : Must be accompanied by a Prefix!!*`
	}
exports.CmdApa = () =>{
	return`For What Command?`
	}
exports.UCmd = () =>{
	return`You don't have permission to modify this sticker order`
	}
exports.HashCmd = () =>{
	return`No hashes`
	}
exports.DelCmd = () =>{
	return`✅ The cmd sticker has been removed`
	}
exports.LockCmd = () =>{
	return`Reply message`
	}
exports.NoCmd = () =>{
	return`Hash not found in database`
	}
exports.ReplyMsg = () =>{
	return`Reply Message You Want To Save In Database`
	}
exports.NoMsg = (prefix, command) =>{
	return`Example : ${prefix + command} filename`
	}
exports.AdMsg = (text) => {
    return `'${text}' has been registered in the message list`
}
exports.DoneMsg = (prefix, text) => {
    return `Successfully added message in message list as '${text}'
    
Access with ${prefix}getmsg ${text}
View list of Messages With ${prefix}listmsg`
}
exports.GetMsg = (prefix, command) => {
    return `Example : ${prefix + command} file name\n\nView message list with ${prefix}listmsg`
}
exports.NoInMsg = (text) => {
    return `'${text}' not listed in the message list`
}
exports.DelMsg = (text) => {
    return `Delete successfully '${text}' from the message list`
}

exports.OnBef = () => {
    return `It's been activated before`
}
exports.OffYaBef = () => {
    return `It's been deactivated before`
}
exports.OkOn = (command) => {
    return `${command} Successfully Activated !`
}
exports.OffBef = (command) => {
    return `${command} Successfully Deactivated !`
}
exports.OkMute = () => {
    return `Bot has been muted in this group`
}
exports.OkUnMute = () => {
    return `Bot Succeeded In UnMute`
}
exports.OkUnBanC = () => {
    return `Bot Successfully Unban chat`
}
exports.NoMute = () => {
    return `Bot has not been banned in this group`
}

exports.NoMsgBot = () => {
    return `The message was not sent by a bot!`
}
exports.ToimgErr = () => {
    return `Sorry Currently Not Support Gif Sticker`
}
exports.NoToImg = (prefix, command) => {
    return `Reply Sticker With Caption *${prefix + command}*`
}
exports.BotPublic = () => {
    return `Success Change To Public Mode`
}
exports.BotSelf = () => {
    return `Successfully Change To Self Mode\n\nTo change to public mode, please use the bot number`
}
exports.NoToStik = (prefix, command) => {
    return `Send/Reply Image/Video With Caption ${prefix + command}\n\nVideo Sticker Duration 1-9 Seconds`
}
exports.NoPpBot = (prefix, command) => {
    return `Send/Reply Image With Caption ${prefix + command}`
}
exports.ToAud = (prefix, command) => {
    return `Send/Reply the Video/Audio You Want to Use as Audio With Caption ${prefix + command}`
}
exports.ToMp3 = (prefix, command) => {
    return `Send/Reply Video/Audio You Want to Convert into MP3 With Caption ${prefix + command}`
}
exports.ToVn= (prefix, command) => {
    return `Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`
}
exports.NoQouted = () => {
    return `The message you replied to does not contain a reply`
}
exports.SetGcName = (prefix, command) => {
    return `Send command ${prefix + command} *text*`
}
exports.SetPpGc = (prefix, command) => {
    return `Send/Reply Image With Caption ${prefix + command}`
}
exports.JoinGc = () => {
    return `Enter the group link!`
}
exports.MauKick = () => {
    return `Send the target number/tag/reply you want to kick!`
}
exports.MauAdd = () => {
    return `Send the target number/tag/reply you want to add!`
}
exports.NakPm= () => {
    return `Send the target number/tag/reply you want to promote!`
}
exports.NakDm = () => {
    return `Send the target number/tag/reply you want to demote!`
}
exports.Family = () => {
    return `This question is not finished!`
}
exports.NoWm = (prefix, command) => {
    return `Send command ${prefix + command} packname|author`
}
exports.DoneExif = (packname, author) => {
    return `Exif Successfully Converted To\n\nPackname : ${packname}\nAuthor : ${author}`
}
exports.NoTeksOne = (prefix, command) => {
    return `Send command ${prefix + command} *teks*\n\nExample : ${prefix + command} WhatsApp Bot`
}
exports.NoTeksTwo = (prefix, command) => {
    return `Send command ${prefix + command} *teks 1|teks 2*\n\nExample : ${prefix + command} WhatsApp|Bot`
}
exports.OffNsfw = () => {
    return `The nsfw feature has not been activated`
}
exports.CoverBanLol = (prefix, command) => {
    return `Example : ${prefix + command} nama|heroes\nUsage: ${prefix + command} zeeone|jinx7`
}
exports.coverbannerlol = (style) => {
    return `*The Heroes You Entered are Wrong*\n\n_Here's the list of true heroes, Total_ *${style}* _heroes_\n\n`
}
exports.pubglogomaker = (prefix, command) => {
    return `Example : ${prefix + command} nama|style\nUsage: ${prefix + command} zeeone|women`
}
exports.pubglogomaker_ = (style) => {
    return `*The style you entered is wrong*\n\n_Here's a list of the correct styles, Total_ *${style}* _style_\n\n`
}
exports.colorfulpubg = (prefix, command) => {
    return `Example : ${prefix + command} nama|color\nUsage: ${prefix + command} zeeone|gold`
}
exports.colorfulpubg_ = (style) => {
    return `*The color you entered is wrong*\n\n_Here's a list of the correct colors, Total_ *${style}* _color_\n\n`
}
exports.astronotspace = (prefix, command) => {
    return `Example: ${prefix + command} nama|style\nUsage: ${prefix + command} zeeone|anubis`
}
exports.wallpaperaov = (prefix, command) => {
    return `Example: ${prefix + command} nama|heroes\nUsage: ${prefix + command} zeeone|allain`
}
exports.maketeamlogo = (style, style2, prefix, command) => {
    return `Example: ${prefix + command} nama|${style}\nUsage: ${prefix + command} zeeone|${style2}`
}

exports.MaketeamlogoT = (a, b, c, d, e, f, g, h) => {
    return `Example : ${g + h} ${a}|${b}|${c}\nUsage: ${g + h} ${e}|${f}|${d}`
}
exports.maketeamlogo_ = (style, style2) => {
    return `*${style2} What you entered is wrong*\n\n_Here's a List ${style2} Correct, Total_ *${style}* _${style2}_\n\n`
}

exports.KisahNabi = (prefix, command, style, style2 = "query") => {
    return `Usage examples: \n${prefix + command} ${style2}\n\n${prefix + command} ${style}`
}
exports.quran2 = (prefix, command, juz , brp) => {
    return `Example : ${prefix + command} ${juz}\nUsage: ${prefix + command} ${brp}`
}

exports.quran3 = (prefix, command, surah , ayat, brp, brp2) => {
return`Example : ${prefix + command} ${surah}|${ayat}\nUsage: ${prefix + command} ${brp}|${brp2}`
}

exports.JwbErr = () => {
    return `❌ Wrong answer`
}

exports.JwbTrue = (tebak, exp) => {
return`🎮 ${tebak} 🎮\n\nCorrect answer 🎉\n+${exp} XP`
}
exports.TbGam = () => {
    return `Guess the picture`
}
exports.TbKa = () => {
    return `Guess the word`
}
exports.TbBe = () => {
    return `Guess the Flag`
}
exports.TbCak = () => {
    return `Cak Lontong`
}
exports.TbSu = () => {
    return `Arrange Words`
}
exports.TbAt = () => {
    return `Guess the Sentence`
}
exports.TbSi = () => {
    return `Guess who`
}
exports.Tbte = () => {
    return `Teka Teki`
}
exports.TbEn = () => {
    return `Guess the District`
}
exports.TbKi = () => {
    return `Guess Chemistry`
}
exports.TbLi = () => {
    return `Guess the Lyrics`
}
exports.TbKan = () => {
    return `Riddles`
}

exports.TbFamily = (soal, jawaban, find) => {
    return `*Answer the following questions :*\n${soal}\n\nThere is *${jawaban}* Answer ${find}`
}

exports.TbAfk = (nama, afk) => {
    return `${nama} Has Afk With Reason ${afk ? ': ' + afk : 'Nothing'}`
}

exports.TbGambar = (desk, time, exp) => {
    return `Please answer the questions above\n\nDescription : ${desk}\nTime : ${time} seconds\n Reward : ${exp} XP`
}
exports.TbGambar_ = (jawaban) => {
    return `Time has run out\nAnswer:  ${jawaban}`
}
exports.TbGambar__ = (jawaban, desk) => {
    return `Time has run out\nAnswer:  ${jawaban}}\nDescription : ${desk}`
}
exports.TbKata = (soal, time, exp) => {
    return `Please Answer The Following Questions\n\n${soal}\nTime : ${time} seconds\n Reward : ${exp} XP`
}
exports.TbBendera = (time, exp) => {
    return `Please Answer The Question Above\n\nWaktu : ${time} seconds\n Reward : ${exp} XP`
}
exports.TbKabupaten = (time, exp) => {
    return `The picture above is a picture of the district?\nTime : ${time} seconds\n Reward : ${exp} XP`
}
exports.TbKimia = (soal, time, exp) => {
    return `What does the symbol mean? : *${soal}*?\nWaktu : ${time} seconds\n Reward : ${exp} XP`
}
exports.TbLirik = (soal, time, exp) => {
    return `These are the lyrics of the song? : *${soal}*?\nTime : ${time} seconds\n Reward : ${exp} XP`
}
exports.TbSusun = (soal, tipe, time, exp) => {
    return `*Answer the following questions :*\nQuestion : ${soal}\nType : ${tipe}\nTime : ${time} seconds\n Reward : ${exp} XP`
}
exports.TbMath = (modes, prefix, command) => {
    return `Mode: ${modes}\nUsage examples: ${prefix + command} medium`
}
exports.TbMath_ = (soal, time) => {
    return `*What is the result of: ${soal}*?\n\nTime: ${time} detik`
}
exports.TbJail = (prefix, command) => {
    return `Send/Reply Photo/Sticker With Caption ${prefix + command}`
}
exports.TbRepo = (prefix, command) => {
    return `Send command ${prefix + command} *user* *repo* *branch*\n\nExp. ${prefix + command} *zeeone-ofc* *Alphabot-Md* *v12*`
}
exports.StalkIg = () => {
    return `Enter username`
}
exports.Tomp4 = (prefix, command) => {
    return `Reply gif sticker with caption ${prefix + command}`
}
exports.Tourl = (prefix, command) => {
    return `Send/Reply Media With Caption ${prefix + command}`
}
exports.Smeme = (prefix, command) => {
    return `Send/Reply Photo With Caption ${prefix + command} *teks*`
}
exports.Smeme_ = (prefix, command) => {
    return `Send/Reply Photo With Caption ${prefix + command} *teks|tesk2*`
}
exports.Bcall = (anu, time, chat) => {
    return `Send Broadcast To ${anu} ${chat}\nTime's up ${time * 1.5} detik`
}
exports.Stag = (prefix, command) => {
    return `Reply sticker with caption ${prefix + command}`
}
exports.Vtag = (prefix, command, video) => {
    return `Send/reply ${video} with caption ${prefix + command}`
}
exports.TrLate = (prefix, command) => {
    return `Example :

1. Send command ${prefix + command} *language code* *teks*
	• Example : ${prefix + command} id hi
2. Reply chat with caption ${prefix + command} *language code*
	• Example : ${prefix + command} id hi
List of supported languages : https://cloud.google.com/translate/docs/languages`
}
exports.Addlist = () => {
    return `Key cannot be the same as feature/command bot`
}
exports.Addlist_ = (prefix, command) => {
    return `Use it in a way ${prefix + command} *key|response*\n\n_Example_\n\n${prefix + command} Hi|Halo`
}
exports.Addlist__ = (arg) => {
    return `List of responses with key : *${arg}* already in this group.`
}
exports.AddlistDone = (arg) => {
    return `Successfully set list message with key : *${arg}*\n\nNote : Wait a few minutes if the list doesn't change`
}
exports.Dellist = () => {
    return `There is no message list in the database`
}
exports.Dellist_  = (prefix, command) => {
    return `Use it in a way ${prefix + command} *key*\n\n_Example_\n\n${prefix + command} Hi`
}
exports.Dellist__ = (key) => {
    return `List response with key *${key}* not in database!`
}
exports.DellistDone = (key) => {
    return `Successfully delete list message with key *${key}*`
}
exports.ListUp = (key) => {
    return `Sorry, the key *${key}* is not yet registered in this group`
}
exports.UpList = (key) => {
    return `Successfully update list message with key : *${key}*\n\nNote : Wait a few minutes if the list doesn't change`
}
exports.Anonymous = (pushname, prefix) => {
    return `Hi ${pushname} Welcome to Anonymous Chat\n\nType ${prefix}start to find your Chat Friend, or you can press the Search button below`
}
exports.Anon = () => {
    return `Find Friends Chat`
}
exports.StopAnon = () => {
    return `You are not in an anonymous session, press the button to find a partner `
}
exports.AnonNew = () => {
    return `Find New Friends`
}
exports.AnonDahStop = () => {
    return `✅ Successfully stopped chat`
}
exports.StopAnonByFren = () => {
    return `⚠️ This chat session has been terminated by your chat friend`
}
exports.AnonOn = () => {
    return `️ You are still in a chat session with a partner!`
}
exports.AnonFind = (prefix) => {
    return `_Partner Found 🐼_\n${prefix}skip -- _find a new partner_\n${prefix}stop -- _stop this dialog_`
}
exports.AnonSearch = () => {
    return `🔎 Please wait looking for chat friends`
}
exports.NoAnon = () => {
    return `⚠️ You've never started a chat!`
}
exports.NoAudRep = (prefix, command) => {
    return `Reply to the audio you want to change with caption *${prefix + command}*`
}
exports.NoTagBan = () => {
    return `Usage examples :\n${prefix + command} 62938828728992 \nor\n${prefix + command} @tagmember`
}

exports.getBan = (a) => {
    return `⚠️ Sorry, your number has been banned by the owner\n\nOwner 👇\nwa.me/${a}`
}
exports.Addstik = (prefix, command, t) => {
    return `Reply ${t} with caption ${prefix + command} text\n\nExample : ${prefix + command} bot`
}

exports.AllFitur = () => {
    return `\nAll bot features`
}
exports.InfoMenu = () => {
    return `\n_Looking for the latest information via bot_`
}
exports.KhususOwn = () => {
    return `\n_Owner Bots Special Features_`
}
exports.DataBor = () => {
    return `\n_Storing something in the bot database_`
}
exports.MenuGc = () => {
    return `\n_Show group specific features_`
}
exports.MenuAni = () => {
    return `\n_Looking for random anime pictures_`
}
exports.TagMem = () => {
    return `\n_Tag group member_`
}
exports.StalkOrk = () => {
    return `\n_People's social media stalking_`
}
exports.Hoja = () => {
    return `\n_Looking for something unimportant_`
}
exports.CovertWi = () => {
    return `\n_Convert something with bot_`
}
exports.AnuFoto = () => {
    return `\n_Change the picture to be more interesting_`
}
exports.HajuStik = () => {
    return `\n_Create unique stickers_`
}
exports.EloDown= () => {
    return `\n_Show download feature_`
}
exports.StikerWibu = () => {
    return `\n_Random anime stickers_`
}
exports.ImageDewasa = () => {
    return `\n_Random image anime 18+_`
}
exports.MakeLogo = () => {
    return `\n_To create a logo using a bot_`
}
exports.oterMenu = () => {
    return `\n_More menu_`
}
exports.GameBot = () => {
    return `\n_Features for playing with bots_`
}
exports.RandRik = () => {
    return `\n_Random tiktok videos_`
}
exports.RandCew = () => {
    return `\n_Random pictures of beautiful girls_`
}
exports.RamalOi = () => {
    return `\n_Today's forecast_`
}
exports.TeleStik= () => {
    return `\n_Random sticker from telegram_`
}
exports.BuatLogoLagi = () => {
    return `\n_Create cool logos with bots_`
}
exports.SoundNih= () => {
    return `\n_Random sound_`
}
exports.KanLogoLagi = () => {
    return `\n_Make an attractive logo_`
}
exports.TobatBro = () => {
    return `\n_Islamic features_`
}
exports.MauJualan = () => {
    return `\n_Features for selling_`
}
exports.Maustorage = () => {
    return `\n_Features to save stickers, audio, photos and videos_`
}
exports.MauChanger = () => {
    return `\n_Feature to change audio/vn sound_`
}
exports.GadaChat = () => {
    return `\n_Features for random chat_`
}
exports.SumberBot = () => {
    return `\n_Source of this bot script_`
}
exports.Tqnya = () => {
    return `\n_Who contributed to this bot_`
}
exports.SetAh = () => {
    return `Do you want a set menu?`
}
exports.KickAh = (gc) => {
    return `*Antilink Group Detected*\n\nYou will be removed from the group ${gc}`
    }
    exports.GjdKick = () => {
    return `Looks like you sent this group link, you won't be kicked out`
    }
/////////

/////////
exports.private = () =>{
	return`The feature can only be used in private chat`
	}
exports.wait = () => {
    return `⏳ Please wait a moment`
}
exports.ok = () => {
    return `✅ Done.`
}

exports.err = () => {
    return `⚠️ Error Moderate Features`
}
exports.erorLink = () => {
    return `⚠️ The link is error`
}
exports.media = () => {
    return `Please select the media you want to download`
}
exports.replyImg = (prefix, command) => {
    return `Send/Reply Photo With Caption ${prefix + command}`
}

exports.wrongFormat = (prefix) => {
    return `Incorrect format Please check how to use at *${prefix}allmenu*.`
}

exports.emptyMess = () => {
    return `❎ Please enter the message you want to convey!`
}

exports.cmdNotFound = (cmd, prefix) => {
    return `❎ Command *${cmd}* not registered in *${prefix}allmenu*`
}

exports.ownerOnly = () => {
    return `❎ This command is for the owner`
}

exports.doneOwner = () => {
    return `✅  ️It's done, Owner ~`
}

exports.groupOnly = () => {
    return `👥  This command can only be used in groups!`
}

exports.adminOnly = () => {
    return `🙅  This command can only be used by group admins!`
}

exports.nhFalse = () => {
    return `Invalid code!`
}

exports.listBlock = (blockNumber) => {
    return `*── 「 HALL OF SHAME 」 ──*
    
Totally blocked: *${blockNumber.length}* user\n`
}

exports.notAdmin = () => {
    return `❎ User is not an admin! ❎`
}

exports.adminAlready = () => {
    return `❎ Cannot promote a user who is an admin!`
}

exports.botNotAdmin = () => {
    return `Make bot as admin first! `
}

exports.received = (pushname) => {
    return `
Hello ${pushname}!
Thank you for reporting, we will receive your report soon.`
}

exports.videoLimit = () => {
    return `File size is too big!`
}

exports.notNum = (q) => {
    return `"${q}", not numbers!`
}
exports.menunya = (salam, pushname, botname) =>{
	return`Hi bro ${pushname} 👋 good ${salam} , 
i'm ${botname}, this bot is Whatsapp Multi-Device Beta.
`
}
exports.listMenu = (time, salam, pushname, prefix) => {
    return `*Selamat ${salam} ${pushname}*
*⌚Time Server : ${time}*
*📚 List-Menu :*

╭─❒ 「 Bot Info 」 
│○ !owner
│○ !rules
│○ !sc
│○ !ping
│○ !runtime
│○ !botstatus
╰❒ !donate


╭─❒ 「 Owner 」 
│○ !setmenu [query]
│○ !setmenu katalog
│○ !setmenu katalog2
│○ !setmenu list
│○ !setwm packname|author
│○ !sendsesi
│○ !listpc
│○ !listgc
│○ !broadcast [text]
│○ !bc [text]
│○ !bcgc 
│○ !bcimage
│○ !bcaudio
│○ !bcstiker
│○ !bcvn
│○ !bcvideo
│○ !banuser
│○ !unban
│○ !banned
│○ !listbanned
│○ !block
│○ !ublock
│○ !listblock
│○ !addpremium
│○ !delpremium
│○ !listpremium
│○ !nsfw [on/off]
│○ !mute [on/off]
│○ !autoblok212 [on/off]
│○ !banchat
│○ !unbanchat
│○ !autorespond [on/off]
│○ !antiviewonce [on/off]
│○ !antidelete [on/off]
│○ !autobio [on/off]
│○ !anticall [on/off]
│○ !join [link]
│○ !self
│○ !public [only bot]
│○ !del [reply pesan bot]
│○ !pppanjang
│○ !setpppanjang
╰❒ !setppbot [reply image]

╭─❒ 「 Store Menu 」
│○ !list
│○ !addlist [key|respond]
│○ !dellist [key]
│○ !update [key|respond]
│○ !store
│○ !kali
│○ !bagi
│○ !tambah
│○ !kurang
│○ !kalkulator
│○ !setproses
│○ !updateproses
│○ !cekproses
│○ !delproses
│○ !setdone
│○ !updatedone
│○ !cekdone
│○ !deldone
│○ !pay
│○ !setcaptionpay
│○ !setpaysewa
│○ !proses
╰❒ !done

╭─❒ 「 Anonymous 」
│○ !menfess
│○ !confess
│○ !balasmenfess
│○ !tolakmenfess
│○ !stopmenfess
│○ !anonymous 
│○ !start
│○ !skip [daerah]
╰❒ !stop [surah|ayat]


╭─❒ 「 Database 」 
│○ !setcmd [reply stiker]
│○ !delcmd [reply stiker]
│○ !listcmd
│○ !absen
│○ !cekabsen
│○ !deleteabsen
│○ !absenstart
│○ !addmsg [nama file]
│○ !getmsg [nama file]
│○ !listmsg
╰❒ !delmsg [nama file]

╭─❒ 「 Rpg Games 」
│○ !adventure
│○ !weekly
│○ !use
│○ !transfer
│○ !slot
│○ !shop
│○ !pasar
│○ !profile
│○ !ojek
│○ !open
│○ !nguli
│○ !narik
│○ !nabung
│○ !monthly
│○ !mining
│○ !merampok
│○ !mancing
│○ !kolam
│○ !koboy
│○ !kerja
│○ !kandang
│○ !levelup
│○ !judi
│○ !inventory
│○ !hourly
│○ !fishop
│○ !feed
│○ !duel
│○ !daily
│○ !craft
│○ !cooldown
│○ !cook
│○ !collect
│○ !chop
│○ !casino
│○ !buy
│○ !bank 
│○ !bansos
│○ !berdagang
│○ !berkebon
╰❒ !build


╭─❒ 「 Group 」 
│○ !addsewa
│○ !delsewa
│○ !listsewa
│○ !ceksewa
│○ !delsewa
│○ !register
│○ !unregister
│○ !ceksn
│○ !listonline
│○ !sider
│○ !wm packname|author
│○ !infochat
│○ !setdesk [text]
│○ !setppgrup [reply image]
│○ !pppanjanggc
│○ !setpppanjanggc
│○ !revoke
│○ !leave
│○ !add [62***]
│○ !kick @tag
│○ !leave
│○ !linkgc
│○ !welcome [on/off]
│○ !goodbye [on/off]
│○ !demotedetect [on/off]
│○ !promotedetect  [on/off]
│○ !setwelcome
│○ !updatewelcome
│○ !delwelcome
│○ !cekwelcome
│○ !setgoodbye
│○ !updategoodbye
│○ !delgoodbye
│○ !cekgoodbye
│○ !setpromote
│○ !updatepromote
│○ !setdemote
│○ !updatedemote
│○ !cekpromote
│○ !cekdemote
│○ !delpromote
│○ !deldemote
│○ !nsfw [on/off]
│○ !antilink [on/off]
│○ !antiwame [on/off]
│○ !take packname|author
│○ !group [open/close]
│○ !tagall [text]
╰❒ !hidetag [text]

╭─❒ 「 Anime 」 
│○ !jadiwibu
│○ !towibu
│○ !toanime
│○ !jadianime
│○ !quotesanime
│○ !anime [query]
│○ !animeinfo
│○ !manga [query]
╰❒ !character [query]

╭─❒ 「 Tag 」 
│○ !stickertag
│○ !videotag [query]
│○ !vntag [query]
╰❒ !imagetag [query]

╭─❒ 「 Stalking 」
│○ !mlstalk [id|zona id]
│○ !ffstalk [id]
│○ !igstalk [username]
│○ !ghstalk [username]
╰❒ !ytstalk [channel]


╭─❒ 「 Search 」 
│○ !ytsearch [query]
│○ !openai [query]
│○ !chatgpt [query]
│○ !githubsearch [query]
│○ !kbbi [query]
│○ !lirik [query]
│○ !wallpaper [query]
│○ !google [query]
│○ !wikimedia [query]
│○ !apksearch
│○ !findapk
│○ !hentai
│○ !wattpad [query]
│○ !webtoons [query]
│○ !brainly [query]
╰❒ !pinterest [query]


╭─❒ 「 Converter 」
│○ !emoji [😭]
│○ !emojimix [😭+💩]
│○ !toaudio [video]
│○ !tomp3 [video]
│○ !tovn [video]
│○ !stiker [reply image]
│○ !tourl [image/video]
│○ !ssweb [url]
│○ !togif [sticker]
│○ !tomp4 [sticker]
╰❒${prefix}toimg [reply sticker]


╭─❒ 「 Image Effect 」 
│○ !wanted [reply image/stiker]
│○ !utatoo [reply image/stiker]
│○ !unsharpen [reply image/stiker]
│○ !thanos [reply image/stiker]
│○ !sniper [reply image/stiker]
│○ !sharpen [reply image/stiker]
│○ !sepia [reply image/stiker]
│○ !scary [reply image/stiker]
│○ !rip [reply image/stiker]
│○ !redple [reply image/stiker]
│○ !rejected [reply image/stiker]
│○ !posterize [reply image/stiker]
│○ !ps4 [reply image/stiker]
│○ !pixelize [reply image/stiker]
│○ !missionpassed [reply image/stiker]
│○ !moustache [reply image/stiker]
│○ !lookwhatkarenhave [reply image/stiker]
│○ !jail [reply image/stiker]
│○ !invert [reply image/stiker]
│○ !instagram [reply image/stiker]
│○ !greyscale [reply image/stiker]
│○ !glitch2 [reply image/stiker]
│○ !gay [reply image/stiker]
│○ !frame [reply image/stiker]
│○ !fire [reply image/stiker]
│○ !distort [reply image/stiker]
│○ !dictator [reply image/stiker]
│○ !deepfry [reply image/stiker]
│○ !ddungeon [reply image/stiker]
│○ !circle [reply image/stiker]
│○ !challenger [reply image/stiker]
│○ !burn [reply image/stiker]
│○ !brazzers [reply image/stiker]
╰❒ !beautiful [reply image/stiker]


╭─❒ 「 Sticker Effect 」 
│○ !jail [reply image/stiker]
│○ !red [reply image/stiker]
│○ !gay [reply image/stiker]
│○ !bloo [reply image/stiker]
│○ !blue [reply image/stiker]
│○ !sepia [reply image/stiker]
│○ !green [reply image/stiker]
│○ !glass [reply image/stiker]
│○ !invert [reply image/stiker]
│○ !blurple [reply image/stiker]
│○ !blurple2 [reply image/stiker]
│○ !wasted [reply image/stiker]
│○ !passed [reply image/stiker]
│○ !triggered [reply image/stiker]
│○ !comrade [reply image/stiker]
│○ !greyscale [reply image/stiker]
│○ !threshold [reply image/stiker]
│○ !brightness [reply image/stiker]
╰❒ !invertgreyscale [reply image/stiker]


╭─❒ 「 Download 」 
│○ !tiktok [link]
│○ !tiktoknowm [link]
│○ !tiktokwm [link]
│○ !tiktokaudio [link]
│○ !ytdl [link]
│○ !play [query]
│○ !ytmp3 [link]
│○ !ytshortmp3 [link]
│○ !ytmp4 [link]
│○ !ytshorts [link]
│○ !facebook [link]
│○ !facebooksd [link]
│○ !facebookhd [link]
│○ !fbaudio [link]
│○ !igstory [username]
│○ !igdl [link]
│○ !igphoto [link]
│○ !igvideo [link]
│○ !igreels [link]
│○ !igtv [link]
│○ !soundcloud [link]
│○ !gitclone [link repo]
│○ !gitrepo [username repo branch]
│○ !mediafire [link]
│○ !nhentaipdf [id]
╰❒ !twitter link

╭─❒ 「 Primbon 」
│○ !nomorhoki 887435047326
│○ !artimimpi [query]
│○ !artinama [query]
│○ !ramaljodoh
│○ !ramaljodohbali
│○ !suamiistri
│○ !ramalcinta
│○ !cocoknama
│○ !pasangan
│○ !jadiannikah
│○ !sifatusaha
│○ !rezeki
│○ !pekerjaan
│○ !nasib
│○ !penyakit
│○ !tarot
│○ !fengshui
│○ !haribaik
│○ !harisangar
│○ !harisial
│○ !nagahari
│○ !arahrezeki
│○ !peruntungan
│○ !weton
│○ !karakter
│○ !keberuntungan
│○ !memancing
│○ !masasubur
│○ !zodiak 
╰❒ !shio [query]

╭─❒ 「 Random Anime 」
│○ !loli
│○ !neko
│○ !waifu
│○ !shinobu
│○ !megumin
│○ !bully
│○ !cuddle
│○ !cry
│○ !hug
│○ !awoo
│○ !kiss
│○ !lick
│○ !pat
│○ !smug
│○ !bonk
│○ !yeet
│○ !blush
│○ !smile
│○ !wave
│○ !highfive
│○ !handhold
│○ !nom
│○ !bite
│○ !glomp
│○ !slap
│○ !kill
│○ !happy
│○ !wink
│○ !poke
│○ !dance
╰❒ !cringe

╭─❒ 「 Voice Change Menu 」
│○ !bass
│○ !blown
│○ !deep
│○ !earrape
│○ !fast
│○ !fat
│○ !nightcore
│○ !reverse
│○ !robot
│○ !slow
│○ !smooth
╰❒ !tupai

╭─❒ 「 Storage Menu 」
│○ !addvn
│○ !listvn
│○ !delvn
│○ !adddocument
│○ !listdocument
│○ !deldocument
│○ !addtext
│○ !listtext
│○ !deltext
│○ !addaudio
│○ !listaudio
│○ !delaudio
│○ !addimage
│○ !listimage
│○ !delimage
│○ !addvideo
│○ !listvideo
│○ !delvideo
│○ !addstik
│○ !delstik
╰❒ !liststik

╭─❒ 「 Nsfw & Sfw 」
│○ !cuddle
│○ !feed
│○ !foxgirl
│○ !kemonomimi2
│○ !woof
│○ !holo2
│○ !hug
│○ !kiss
│○ !lizard
│○ !meowi
│○ !neko2
│○ !pat
│○ !poke
│○ !slap
│○ !tickle
│○ !baka
│○ !smug
│○ !neko-sfw
│○ !hentai
│○ !hentai-gif
│○ !spank
│○ !blowjob
│○ !cumarts
│○ !eroyuri
│○ !eroneko
│○ !erokemonomimi
│○ !erokitsune
│○ !ero
│○ !feet
│○ !erofeet
│○ !feetgif
│○ !femdom
│○ !futanari
│○ !hentai
│○ !holoero
│○ !holo
│○ !keta
│○ !kitsune
│○ !kemonomimi
│○ !pussyart
│○ !pussywankgif
│○ !girl-solo
│○ !girl-solo-gif
│○ !tits
│○ !trap
│○ !yuri
│○ !avatar2
│○ !anal
│○ !bj
│○ !boobs
│○ !classic
│○ !cumsluts
│○ !kuni
│○ !lesbian
│○ !neko
│○ !neko-gif
│○ !ahegao
│○ !bdsm
│○ !cuckold
│○ !cum
│○ !foot
│○ !gangbang
│○ !glasses
│○ !jahy
│○ !masturbation
│○ !nsfw-neko
│○ !orgy
│○ !panties
│○ !tentacles
│○ !thighs
╰❒ !zettai

╭─❒ 「 Ephoto360 Menu 」
│○ !youtubegold
│○ !youtubesilver
│○ !facebookgold
│○ !facebooksilver
│○ !instagramgold
│○ !instagramsilver
│○ !twittergold
│○ !twittersilver
│○ !retrotext
│○ !halloweenbats
│○ !texthalloween
│○ !cardhalloween
│○ !birthdaycake
│○ !thundertext
│○ !icetext
│○ !milkcake
│○ !snowontext
│○ !metalstar
│○ !dragonfire
│○ !zombie3d
│○ !merrycard
│○ !generalexam 
│○ !viettel
│○ !embroider
│○ !graffititext
│○ !graffititext2
│○ !graffititext3
│○ !covergraffiti
│○ !moderngold
│○ !capercut
│○ !lovecard
│○ !heartflashlight
│○ !heartcup
│○ !sunglightshadow
│○ !graffiti3d
│○ !moderngoldsilver
│○ !moderngold2
│○ !moderngold3
│○ !fabrictext
│○ !masteryavatar
│○ !messagecoffee
│○ !announofwin
│○ !writeblood
│○ !horrorletter
│○ !writehorror
│○ !shirtclub
│○ !angelwing
│○ !christmasseason
│○ !projectyasuo
│○ !lovelycute
│○ !womansday
│○ !covergamepubg
│○ !nameonheart
│○ !funnyhalloween
│○ !lightningpubg
│○ !greetingcardvideo 
│○ !christmascard 
│○ !galaxybat
│○ !writegalaxy
│○ !starsnight
│○ !noeltext
│○ !textcakes
│○ !pubgbirthday
│○ !galaxywallpaper
│○ !pubgglicthvideo 
│○ !pubgmascotlogo
│○ !realembroidery
│○ !vintagetelevision
│○ !funnyanimations
│○ !glowingtext
│○ !textonglass
│○ !cartoonstyle
│○ !multicolor
│○ !watercolor2
│○ !textsky
│○ !summerbeach
│○ !1917text
│○ !puppycute
╰❒ !rosebirthday


╭─❒ 「 Textpro Menu 」
│○ !halloween2 text|text2
│○ !horror text|text2
│○ !game8bit text|text2
│○ !layered text|text2
│○ !glitch2 text|text2
│○ !cool-graffiti text|text2
│○ !cool-wall-graffiti text|text2
│○ !realistic text|text2
│○ !space3d text|text2
│○ !glitch-tiktok text|text2
│○ !stone text|text2
│○ !marvel text|text2
│○ !marvel2 text|text2
│○ !pornhub text|text2
│○ !avengers text|text2
│○ !metal-rainbow text|text2
│○ !metal-gold text|text2
│○ !metal-galaxy text|text2
│○ !halloween2 text|text2
│○ !lion text|text2
│○ !wolf-black-white text|text2
│○ !wolf-galaxy text|text2
│○ !ninja text|text2
│○ !3dsteel text|text2
│○ !horror2 text|text2
│○ !lava text|text2
│○ !bagel text|text2
│○ !blackpink text
│○ !rainbow2 text
│○ !water-pipe text
│○ !halloween text
│○ !sketch text
│○ !sircuit text
│○ !discovery text
│○ !metallic2 text
│○ !fiction text
│○ !demon text
│○ !transformer text
│○ !berry text
│○ !thunder text
│○ !magma text
│○ !3dstone text
│○ !neon text
│○ !glitch text
│○ !harry-potter text
│○ !embossed text
│○ !broken text
│○ !papercut text
│○ !gradient text
│○ !glossy text
│○ !watercolor text
│○ !multicolor text
│○ !neon-devil text
│○ !underwater text
│○ !bear text
│○ !wonderful-graffiti text
│○ !christmas text
│○ !neon-light text
│○ !snow text
│○ !cloudsky text
│○ !luxury2 text
│○ !gradient2 text
│○ !summer text
│○ !writing text
│○ !engraved text
│○ !summery text
│○ !3dglue text
│○ !metaldark text
│○ !neonlight text
│○ !oscar text
│○ !minion text
│○ !holographic text
│○ !purple text
│○ !glossy-blue text
│○ !deluxe-gold text
│○ !glossy-carbon text
│○ !fabric text
│○ !neonc text
│○ !newyear text
│○ !newyear2 text
│○ !metal-silver text
│○ !xmas text
│○ !blood text
│○ !dark-gold text
│○ !joker text
│○ !wicker text
│○ !natural text
│○ !firework text
│○ !skeleton text
│○ !red-balloon text
│○ !purple-balloon text
│○ !pink-balloon text
│○ !green-balloon text
│○ !cyan-balloon text
│○ !blue-balloon text
│○ !gold-balloon text
│○ !steel text
│○ !gloss text
│○ !denim text
│○ !decorate text
│○ !decorate-purple text
│○ !peridot text
│○ !rock text
│○ !yellow-glass text
│○ !purple-glass text
│○ !orange-glass text
│○ !green-glass text
│○ !cyan-glass text
│○ !blue-glass text
│○ !red-glass text
│○ !purple-shiny-glass text
│○ !captain-as2 text
│○ !robot text
│○ !equalizer text
│○ !toxic text
│○ !pink-sparkling text
│○ !blue-sparkling text
│○ !green-sparkling text
│○ !purple-sparkling text
│○ !gold-sparkling text
│○ !red-sparkling text
│○ !cyan-sparkling text
│○ !decorative text
│○ !chocolate text
│○ !strawberry text
│○ !koifish text
│○ !bread text
│○ !matrix text
│○ !blood2 text
│○ !neonligth2 text
│○ !thunder2 text
│○ !3dbox text
│○ !neon2 text
│○ !road-warning text
│○ !bokeh text
│○ !green-neon text
│○ !advanced text
│○ !dropwater text
│○ !wall text
│○ !chrismast text
│○ !honey2 text
│○ !drug text
│○ !marble text
│○ !marble2 text
│○ !ice text
│○ !juice text
│○ !rusty text
│○ !abstra text
│○ !biscuit text
│○ !wood text
│○ !scifi text
│○ !metal-rainbow text
│○ !metal-rose-gold text
│○ !purple-gem text
│○ !shiny text 
│○ !yellow-jewelry text
│○ !silver-jewelry text
│○ !red-jewelry text
│○ !purple-jewelry text
│○ !orange-jewelry text
│○ !green-jewelry text
│○ !cyan-jewelry text
│○ !blue-jewelry text
│○ !hot-metal text
│○ !golden text
│○ !blue-glitter text
│○ !purple-glitter text
│○ !pink-glitter text
│○ !green-glitter text
│○ !silver-glitter text
│○ !gold-glitter text
│○ !bronze-glitter text
│○ !eroded-metal text
│○ !carbon text
│○ !candy text
│○ !blue-metal text
│○ !blue-gem text
│○ !3dchrome text
│○ !black-metal text
╰❒ !metal-gold text


╭─❒ 「 Others 」
│○ !afk [reason]
│○ !translate kode_bahasa text
│○ !kalkulator [query]
│○ !smeme [text]
│○ !smeme2 [text|text]
│○ !memegen [text|text]
╰❒

╭─❒ 「 Game Menu 」
│○ !tembak
│○ !tolak
│○ !terima
│○ !putusin
│○ !ikhlasin
│○ !cekpacar
│○ !kuismath
│○ !tebakgambar
│○ !tebakkata
│○ !tebakbendera
│○ !tebakkalimat
│○ !tebaksiapa
│○ !tebakkabupaten
│○ !tebakkimia
│○ !tebaklirik
│○ !tebaktebakan
│○ !tekateki
│○ !susunkata
╰❒ !caklontong


╭─❒ 「 Asupan Menu 」
│○ !chika
│○ !delvira
│○ !ayu
│○ !bunga
│○ !aura
│○ !nisa
│○ !ziva
│○ !yana
│○ !viona
│○ !syania
│○ !riri
│○ !syifa
│○ !mama_gina
│○ !alcakenya
│○ !mangayutri
│○ !rikagusriani
│○ !asupan
│○ !bocil
│○ !geayubi
│○ !santuy
│○ !ukhty
╰❒ !syifa

╭─❒ 「 Telegram Sticker 」
│○ !awoawo
│○ !benedict
│○ !chat
│○ !dbfly
│○ !dino_kuning
│○ !doge
│○ !gojosatoru
│○ !hope_boy
│○ !jisoo
│○ !kr_robot
│○ !kucing
│○ !lonte
│○ !manusia_lidi
│○ !menjamet
│○ !meow
│○ !nicholas
│○ !patrick
│○ !popoci
│○ !sponsbob
│○ !kawan_sponsbob
╰❒ !tyni

╭─❒ 「 Random Cewe 」
│○ !china 
│○ !indonesia 
│○ !malaysia 
│○ !thailand 
│○ !korea 
│○ !japan 
│○ !vietnam 
│○ !jenni 
│○ !jiso 
│○ !lisa  
╰❒ !rose

╭─❒ 「 Logo Menu 」
│○ !coverbannerlol text|heroes
│○ !pubglogomaker text|style
│○ !colorfulpubg text|color
│○ !astronotspace text|style
│○ !wallpaperaov text|heroes
│○ !maketeamlogo text|style
│○ !circlemarcotteam text|logo
│○ !wallpaperml text|heroes
│○ !dragonballfb text|character
│○ !bannerofaov text|character
│○ !effect3donbeach text|background
│○ !cutegirlgamer text|logo
│○ !footballteam text|logo
│○ !beautifulshimmering text|champion
│○ !pubgcutelogo text|logo
│○ !elegantrotation text|logo
│○ !logogamingassasin text|logo
│○ !introvideomaker text|logo
│○ !gaminglogo4fvs text|logo
│○ !blueneon text|logo
│○ !metalmascot text|logo
│○ !anonymous2 text|style
│○ !lolpentakill text|style
│○ !avatarleagueofking text|style
│○ !avatarff text|character
│○ !overwatchwallpaper text|character
│○ !rovwallpaperhd text|hero
│○ !rovwallpaper text|avatar
│○ !beautifulgalaxylol text|style
│○ !crossfirecover text|character
│○ !lolwallpaper text|wallpaper
│○ !coverdota2 text|heroes
│○ !coverleagueofking text|character
│○ !avatar3q360 text|avatar
│○ !coverofwarface text|character
│○ !newlolavatar text|avatar
│○ !csgocover text|background
│○ !coverloknew text|hero
│○ !coverfblol text|letters
│○ !overwatchcover text|hero
│○ !crossfirestyle text|avatar
│○ !avatarlolbyname text|style
│○ !lolcoverbyname text|avatar
│○ !cyberhunterfb text|character
│○ !coverfreefirefb text|character
│○ !gamingmascot text|style
│○ !coveronepiecefb text|character
│○ !bannerytcsgo text|banner
│○ !fbgamepubgcover text|template
│○ !banneroflol text|text2|banner
│○ !bannerofaov2 text|text2|banner
│○ !teamlogo text|text2|background
│○ !companylogo2 text|text2|background
│○ !companylogo text|text2|background
│○ !gradientlogo text|text2|background
│○ !pencilsketch text|text2|icon
│○ !gunlogogaming text|text2|background
│○ !banneroffreefire text|text2|background
│○ !letterlogos text|text2|thumb
│○ !bannerofoverwatch text|text2|background
│○ !bannerofapex text|text2|background
│○ !bannerofpubg text|text2|background
│○ !mascotstyle text|text2|thumb
│○ !logoaccording text|text2|thumb
╰❒ !avataroverwatch text|text2|thumb


╭─❒ 「 Islamic Menu 」
│○ !asmaulhusna
│○ !kisahnabi [nabi]
│○ !jadwalshalat [daerah]
│○ !randomquran
│○ !randomquran2
│○ !listsurah
│○ !tafsirsurah [surah]
╰❒ !alquranaudio [surah|ayat]

╭─❒ 「 Sound Menu 」
│○ !sound1
│○ !sound2
│○ !sound3
│○ !sound4
│○ !sound5
│○ !sound6
│○ !sound7
│○ !sound8
│○ !sound9
│○ !sound10
│○ !sound11
│○ !sound12
│○ !sound13
│○ !sound14
│○ !sound15
│○ !sound16
│○ !sound17
│○ !sound18 
│○ !sound19
│○ !sound20
│○ !sound21
│○ !sound22
│○ !sound23
│○ !sound24
│○ !sound25
│○ !sound26
│○ !sound27
│○ !sound28
│○ !sound29
│○ !sound30
│○ !sound31
│○ !sound32
│○ !sound33
│○ !sound34
│○ !sound35
│○ !sound36
│○ !sound37
│○ !sound38
│○ !sound39
│○ !sound40
│○ !sound41
│○ !sound42
│○ !sound43
│○ !sound44
│○ !sound45
│○ !sound46
│○ !sound47
│○ !sound48
│○ !sound49
│○ !sound50
│○ !sound51
│○ !sound52
│○ !sound53
│○ !sound54
│○ !sound55
│○ !sound56
│○ !sound57
│○ !sound58
│○ !sound59
│○ !sound60
│○ !sound61
│○ !sound62
│○ !sound63
│○ !sound64
│○ !sound65
│○ !sound66
│○ !sound67
│○ !sound68
│○ !sound69
╰❒ !sound70

╭─❒ 「 TqTo 」 
│○ My God
│○ My Parents
│○ Fatih A.
│○ Ferdi
│○ DikaArdnt
│○ Mhankbarbar
│○ Nurutomo
│○ Rashid
│○ ZeeoneOfc
│○ Penyedia Module
╰❒ And All Support
    `
}

exports.rules = (prefix) => {
    return `
*── 「 RULES AND FAQ 」 ──*

1. Jangan spam bot. 🙅
2. Jangan telepon bot. ☎️
3. Jangan membandingkan bot 👍

🗯️ Bot tidak atau lambat merespon ?
➡️ Mungkin dipengaruhi oleh jaringan, signal, banned oleh Whatsapp dan beberapa asalan.

🗯️ Dimana saya bisa mendapatkan Script dari bot ini ?
➡️ Script ini bisa kalian dapatkan di YouTube ZEEONE OFC

🗯️ Boleh saya menambah ke grup?
➡️ Untuk itu tergantung dari owner bot sendiri

🗯️ Prefixnya apa ya?
➡️ Bot ini menggunakan multi prefix & bisa kamu gunakan tanpa prefix

Jika sudah dipahami rules-nya, silakan ketik *${prefix}menu* untuk memulai!

⚠️ Segala kebijakan dan ketentuan bot dapat berubah kapan saja 

Terimakasih! 
`
}
exports.welcome = () =>{
	return`𝖩𝖺𝗇𝗀𝖺𝗇 𝗅𝗎𝗉𝖺 𝗂𝗇𝗍𝗋𝗈 𝗄𝖺𝗄 🤗
	
╭ 𝖭𝖺𝗆𝖺 :
│○ 𝖴𝗆𝗎𝗋 :
│○ 𝖦𝖾𝗇𝖽𝖾𝗋 :
│○ 𝖠𝗌𝗄𝗈𝗍 :
╰❒ 𝖯𝖺𝗍𝗎𝗁𝗂 𝗋𝗎𝗅𝖾𝗌 𝗀𝗋𝗎𝗉 𝗒𝖺 𝗄𝖺k ~`
}
exports.leave = () =>{
	return`Yah kok out 😣 Mental aman kan kak >.<
Goodbye`
}
exports.source = () =>{
return`*------「 SOURCE CODE 」 ------*

Base : https://github.com/DikaArdnt/Hisoka-Morou
Recode : https://s.id/YouTube-Zeeoneofc
`
}
exports.tos = (ownernomer) => {
    return `
*-------「 DONATE 」 -------*

Hi bro ☺️ 
You can support me to keep this bot up to date by donating

Any amount of your donation will be very meaningful 👍
Thanks!

Contact person Owner:
wa.me/${ownernomer}

    `
}

exports.info = (prefix) =>{
	return`╭─❒ 「 Bot Info 」 
│○ !owner
│○ !rules
│○ !sc
│○ !ping
│○ !runtime
│○ !botstatus
╰❒ !donate
`}

exports.ownermenu = (prefix) =>{
return`╭─❒ 「 Owner 」 
│○ !setmenu [query]
│○ !setmenu katalog
│○ !setmenu katalog2
│○ !setmenu list
│○ !setwm packname|author
│○ !sendsesi
│○ !listpc
│○ !listgc
│○ !broadcast [text]
│○ !bc [text]
│○ !bcgc 
│○ !bcimage
│○ !bcaudio
│○ !bcstiker
│○ !bcvn
│○ !bcvideo
│○ !banuser
│○ !unban
│○ !banned
│○ !listbanned
│○ !block
│○ !ublock
│○ !listblock
│○ !addpremium
│○ !delpremium
│○ !listpremium
│○ !nsfw [on/off]
│○ !mute [on/off]
│○ !autoblok212 [on/off]
│○ !banchat
│○ !unbanchat
│○ !autorespond [on/off]
│○ !antiviewonce [on/off]
│○ !antidelete [on/off]
│○ !autobio [on/off]
│○ !anticall [on/off]
│○ !join [link]
│○ !self
│○ !public [only bot]
│○ !del [reply pesan bot]
│○ !pppanjang
│○ !setpppanjang
╰❒ !setppbot [reply image]
`}

exports.database = (prefix) =>{
	return`╭─❒ 「 Database 」 
│○ !setcmd [reply stiker]
│○ !delcmd [reply stiker]
│○ !listcmd
│○ !absen
│○ !cekabsen
│○ !deleteabsen
│○ !absenstart
│○ !addmsg [nama file]
│○ !getmsg [nama file]
│○ !listmsg
╰❒ !delmsg [nama file]
`}

exports.group = (prefix) =>{
	return`╭─❒ 「 Group 」 
│○ !addsewa
│○ !delsewa
│○ !listsewa
│○ !ceksewa
│○ !delsewa
│○ !register
│○ !unregister
│○ !ceksn
│○ !listonline
│○ !sider
│○ !wm packname|author
│○ !infochat
│○ !setdesk [text]
│○ !setppgrup [reply image]
│○ !pppanjanggc
│○ !setpppanjanggc
│○ !revoke
│○ !leave
│○ !add [62***]
│○ !kick @tag
│○ !leave
│○ !linkgc
│○ !welcome [on/off]
│○ !goodbye [on/off]
│○ !demotedetect [on/off]
│○ !promotedetect  [on/off]
│○ !setwelcome
│○ !updatewelcome
│○ !delwelcome
│○ !cekwelcome
│○ !setgoodbye
│○ !updategoodbye
│○ !delgoodbye
│○ !cekgoodbye
│○ !setpromote
│○ !updatepromote
│○ !setdemote
│○ !updatedemote
│○ !cekpromote
│○ !cekdemote
│○ !delpromote
│○ !deldemote
│○ !nsfw [on/off]
│○ !antilink [on/off]
│○ !antiwame [on/off]
│○ !take packname|author
│○ !group [open/close]
│○ !tagall [text]
╰❒ !hidetag [text]
`}

exports.anime = (prefix) =>{
	return`╭─❒ 「 Anime 」 
│○ !jadiwibu
│○ !towibu
│○ !toanime
│○ !jadianime
│○ !quotesanime
│○ !anime [query]
│○ !animeinfo
│○ !manga [query]
╰❒ !character [query]
`}

exports.tag = (prefix) =>{
	return`╭─❒ 「 Tag 」 
│○ !stickertag
│○ !videotag [query]
│○ !vntag [query]
╰❒ !imagetag [query]
`}

exports.stalk = (prefix) =>{
	return`╭─❒ 「 Stalking 」 
│○ !mlstalk [id|zona id]
│○ !ffstalk [id]
│○ !igstalk [username]
│○ !ghstalk [username]
╰❒ !ytstalk [channel]
`}

exports.search = (prefix) =>{
	return`╭─❒ 「 Search 」 
│○ !ytsearch [query]
│○ !openai [query]
│○ !chatgpt [query]
│○ !githubsearch [query]
│○ !kbbi [query]
│○ !lirik [query]
│○ !wallpaper [query]
│○ !google [query]
│○ !wikimedia [query]
│○ !apksearch
│○ !findapk
│○ !hentai
│○ !wattpad [query]
│○ !webtoons [query]
│○ !brainly [query]
╰❒ !pinterest [query]
`}

exports.converter = (prefix) =>{
	return`╭─❒ 「 Converter 」 
│○ !emoji [😭]
│○ !emojimix [😭+💩]
│○ !toaudio [video]
│○ !tomp3 [video]
│○ !tovn [video]
│○ !stiker [reply image]
│○ !tourl [image/video]
│○ !ssweb [url]
│○ !togif [sticker]
│○ !tomp4 [sticker]
╰❒${prefix}toimg [reply sticker]
`}

exports.effect = (prefix) =>{
	return`╭─❒ 「 Image Effect 」 
│○ !wanted [reply image/stiker]
│○ !utatoo [reply image/stiker]
│○ !unsharpen [reply image/stiker]
│○ !thanos [reply image/stiker]
│○ !sniper [reply image/stiker]
│○ !sharpen [reply image/stiker]
│○ !sepia [reply image/stiker]
│○ !scary [reply image/stiker]
│○ !rip [reply image/stiker]
│○ !redple [reply image/stiker]
│○ !rejected [reply image/stiker]
│○ !posterize [reply image/stiker]
│○ !ps4 [reply image/stiker]
│○ !pixelize [reply image/stiker]
│○ !missionpassed [reply image/stiker]
│○ !moustache [reply image/stiker]
│○ !lookwhatkarenhave [reply image/stiker]
│○ !jail [reply image/stiker]
│○ !invert [reply image/stiker]
│○ !instagram [reply image/stiker]
│○ !greyscale [reply image/stiker]
│○ !glitch [reply image/stiker]
│○ !gay [reply image/stiker]
│○ !frame [reply image/stiker]
│○ !fire [reply image/stiker]
│○ !distort [reply image/stiker]
│○ !dictator [reply image/stiker]
│○ !deepfry [reply image/stiker]
│○ !ddungeon [reply image/stiker]
│○ !circle [reply image/stiker]
│○ !challenger [reply image/stiker]
│○ !burn [reply image/stiker]
│○ !brazzers [reply image/stiker]
╰❒ !beautiful [reply image/stiker]
`}

//
exports.effect2 = (prefix) =>{
	return`╭─❒ 「 Sticker Effect 」 
│○ !jail [reply image/stiker]
│○ !red [reply image/stiker]
│○ !gay [reply image/stiker]
│○ !bloo [reply image/stiker]
│○ !blue [reply image/stiker]
│○ !sepia [reply image/stiker]
│○ !green [reply image/stiker]
│○ !glass [reply image/stiker]
│○ !invert [reply image/stiker]
│○ !blurple [reply image/stiker]
│○ !blurple2 [reply image/stiker]
│○ !wasted [reply image/stiker]
│○ !passed [reply image/stiker]
│○ !triggered [reply image/stiker]
│○ !comrade [reply image/stiker]
│○ !greyscale [reply image/stiker]
│○ !threshold [reply image/stiker]
│○ !brightness [reply image/stiker]
╰❒ !invertgreyscale [reply image/stiker]
`
}

exports.download = (prefix) =>{
return`╭─❒ 「 Download 」 
│○ !tiktok [link]
│○ !tiktoknowm [link]
│○ !tiktokwm [link]
│○ !tiktokaudio [link]
│○ !ytdl [link]
│○ !play [query]
│○ !ytmp3 [link]
│○ !ytshortmp3 [link]
│○ !ytmp4 [link]
│○ !ytshorts [link]
│○ !facebook [link]
│○ !facebooksd [link]
│○ !facebookhd [link]
│○ !fbaudio [link]
│○ !igstory [username]
│○ !igdl [link]
│○ !igphoto [link]
│○ !igvideo [link]
│○ !igreels [link]
│○ !igtv [link]
│○ !soundcloud [link]
│○ !gitclone [link repo]
│○ !gitrepo [username repo branch]
│○ !mediafire [link]
│○ !nhentaipdf [id]
╰❒ !twitter link
`
}

exports.ranime = (prefix) =>{
	return`╭─❒ 「 Random Anime 」
│○ !loli
│○ !neko
│○ !waifu
│○ !shinobu
│○ !megumin
│○ !bully
│○ !cuddle
│○ !cry
│○ !hug
│○ !awoo
│○ !kiss
│○ !lick
│○ !pat
│○ !smug
│○ !bonk
│○ !yeet
│○ !blush
│○ !smile
│○ !wave
│○ !highfive
│○ !handhold
│○ !nom
│○ !bite
│○ !glomp
│○ !slap
│○ !kill
│○ !happy
│○ !wink
│○ !poke
│○ !dance
╰❒ !cringe
`
}

exports.nsfw = (prefix) =>{
	return`╭─❒ 「 Nsfw & Sfw 」
│○ !cuddle
│○ !feed
│○ !foxgirl
│○ !kemonomimi2
│○ !woof
│○ !holo2
│○ !hug
│○ !kiss
│○ !lizard
│○ !meowi
│○ !neko2
│○ !pat
│○ !poke
│○ !slap
│○ !tickle
│○ !baka
│○ !smug
│○ !neko-sfw
│○ !hentai
│○ !hentai-gif
│○ !spank
│○ !blowjob
│○ !cumarts
│○ !eroyuri
│○ !eroneko
│○ !erokemonomimi
│○ !erokitsune
│○ !ero
│○ !feet
│○ !erofeet
│○ !feetgif
│○ !femdom
│○ !futanari
│○ !hentai
│○ !holoero
│○ !holo
│○ !keta
│○ !kitsune
│○ !kemonomimi
│○ !pussyart
│○ !pussywankgif
│○ !girl-solo
│○ !girl-solo-gif
│○ !tits
│○ !trap
│○ !yuri
│○ !avatar2
│○ !anal
│○ !bj
│○ !boobs
│○ !classic
│○ !cumsluts
│○ !kuni
│○ !lesbian
│○ !neko
│○ !neko-gif
│○ !ahegao
│○ !bdsm
│○ !cuckold
│○ !cum
│○ !foot
│○ !gangbang
│○ !glasses
│○ !jahy
│○ !masturbation
│○ !nsfw-neko
│○ !orgy
│○ !panties
│○ !tentacles
│○ !thighs
╰❒ !zettai
`
}

exports.textpro = (prefix) =>{
	return`╭─❒ 「 Textpro Menu 」
│○ !halloween2 text|text2
│○ !horror text|text2
│○ !game8bit text|text2
│○ !layered text|text2
│○ !glitch2 text|text2
│○ !cool-graffiti text|text2
│○ !cool-wall-graffiti text|text2
│○ !realistic text|text2
│○ !space3d text|text2
│○ !glitch-tiktok text|text2
│○ !stone text|text2
│○ !marvel text|text2
│○ !marvel2 text|text2
│○ !pornhub text|text2
│○ !avengers text|text2
│○ !metal-rainbow text|text2
│○ !metal-gold text|text2
│○ !metal-galaxy text|text2
│○ !halloween2 text|text2
│○ !lion text|text2
│○ !wolf-black-white text|text2
│○ !wolf-galaxy text|text2
│○ !ninja text|text2
│○ !3dsteel text|text2
│○ !horror2 text|text2
│○ !lava text|text2
│○ !bagel text|text2
│○ !blackpink text
│○ !rainbow2 text
│○ !water-pipe text
│○ !halloween text
│○ !sketch text
│○ !sircuit text
│○ !discovery text
│○ !metallic2 text
│○ !fiction text
│○ !demon text
│○ !transformer text
│○ !berry text
│○ !thunder text
│○ !magma text
│○ !3dstone text
│○ !neon text
│○ !glitch text
│○ !harry-potter text
│○ !embossed text
│○ !broken text
│○ !papercut text
│○ !gradient text
│○ !glossy text
│○ !watercolor text
│○ !multicolor text
│○ !neon-devil text
│○ !underwater text
│○ !bear text
│○ !wonderful-graffiti text
│○ !christmas text
│○ !neon-light text
│○ !snow text
│○ !cloudsky text
│○ !luxury2 text
│○ !gradient2 text
│○ !summer text
│○ !writing text
│○ !engraved text
│○ !summery text
│○ !3dglue text
│○ !metaldark text
│○ !neonlight text
│○ !oscar text
│○ !minion text
│○ !holographic text
│○ !purple text
│○ !glossy-blue text
│○ !deluxe-gold text
│○ !glossy-carbon text
│○ !fabric text
│○ !neonc text
│○ !newyear text
│○ !newyear2 text
│○ !metal-silver text
│○ !xmas text
│○ !blood text
│○ !dark-gold text
│○ !joker text
│○ !wicker text
│○ !natural text
│○ !firework text
│○ !skeleton text
│○ !red-balloon text
│○ !purple-balloon text
│○ !pink-balloon text
│○ !green-balloon text
│○ !cyan-balloon text
│○ !blue-balloon text
│○ !gold-balloon text
│○ !steel text
│○ !gloss text
│○ !denim text
│○ !decorate text
│○ !decorate-purple text
│○ !peridot text
│○ !rock text
│○ !yellow-glass text
│○ !purple-glass text
│○ !orange-glass text
│○ !green-glass text
│○ !cyan-glass text
│○ !blue-glass text
│○ !red-glass text
│○ !purple-shiny-glass text
│○ !captain-as2 text
│○ !robot text
│○ !equalizer text
│○ !toxic text
│○ !pink-sparkling text
│○ !blue-sparkling text
│○ !green-sparkling text
│○ !purple-sparkling text
│○ !gold-sparkling text
│○ !red-sparkling text
│○ !cyan-sparkling text
│○ !decorative text
│○ !chocolate text
│○ !strawberry text
│○ !koifish text
│○ !bread text
│○ !matrix text
│○ !blood2 text
│○ !neonligth2 text
│○ !thunder2 text
│○ !3dbox text
│○ !neon2 text
│○ !road-warning text
│○ !bokeh text
│○ !green-neon text
│○ !advanced text
│○ !dropwater text
│○ !wall text
│○ !chrismast text
│○ !honey2 text
│○ !drug text
│○ !marble text
│○ !marble2 text
│○ !ice text
│○ !juice text
│○ !rusty text
│○ !abstra text
│○ !biscuit text
│○ !wood text
│○ !scifi text
│○ !metal-rainbow text
│○ !metal-rose-gold text
│○ !purple-gem text
│○ !shiny text 
│○ !yellow-jewelry text
│○ !silver-jewelry text
│○ !red-jewelry text
│○ !purple-jewelry text
│○ !orange-jewelry text
│○ !green-jewelry text
│○ !cyan-jewelry text
│○ !blue-jewelry text
│○ !hot-metal text
│○ !golden text
│○ !blue-glitter text
│○ !purple-glitter text
│○ !pink-glitter text
│○ !green-glitter text
│○ !silver-glitter text
│○ !gold-glitter text
│○ !bronze-glitter text
│○ !eroded-metal text
│○ !carbon text
│○ !candy text
│○ !blue-metal text
│○ !blue-gem text
│○ !3dchrome text
│○ !black-metal text
╰❒ !metal-gold text
`
}


exports.other = (prefix) =>{
return`╭─❒ 「 Others 」
│○ !ttp [text]
│○ !attp [text]
│○ !afk [reason]
│○ !translate kode_bahasa text
│○ !kalkulator [query]
│○ !smeme [text]
│○ !smeme2 [text|text]
╰❒ !memegen [text|text]
`
}
exports.game = (prefix) =>{
return`╭─❒ 「 Game Menu 」
│○ !tembak
│○ !tolak
│○ !terima
│○ !putusin
│○ !ikhlasin
│○ !cekpacar
│○ !kuismath
│○ !tebakgambar
│○ !tebakkata
│○ !tebakbendera
│○ !tebakkalimat
│○ !tebaksiapa
│○ !tebakkabupaten
│○ !tebakkimia
│○ !tebaklirik
│○ !tebaktebakan
│○ !tekateki
│○ !susunkata
╰❒ !caklontong
`
}
exports.asupan = (prefix) =>{
return`╭─❒ 「 Asupan Menu 」
│○ !chika
│○ !delvira
│○ !ayu
│○ !bunga
│○ !aura
│○ !nisa
│○ !ziva
│○ !yana
│○ !viona
│○ !syania
│○ !riri
│○ !syifa
│○ !mama_gina
│○ !alcakenya
│○ !mangayutri
│○ !rikagusriani
│○ !asupan
│○ !bocil
│○ !geayubi
│○ !santuy
│○ !ukhty
╰❒ !syifa
`
}
exports.cecan = (prefix) =>{
return`╭─❒ 「 Random Cewe 」
│○ !china 
│○ !indonesia 
│○ !malaysia 
│○ !thailand 
│○ !korea 
│○ !japan 
│○ !vietnam 
│○ !jenni 
│○ !jiso 
│○ !lisa  
╰❒ !rose
`
}

exports.tqto = () =>{
	return`╭─❒ 「 TqTo 」 
│○ My God
│○ My Parents
│○ Fatih A.
│○ Ferdi
│○ DikaArdnt
│○ Mhankbarbar
│○ Nurutomo
│○ Rashid
│○ ZeeoneOfc
│○ Penyedia Module
╰❒ And All Support
`
}

exports.primbonmenu = (prefix) =>{
	return`╭─❒ 「 Primbon 」
│○ !nomorhoki 887435047326
│○ !artimimpi [query]
│○ !artinama [query]
│○ !ramaljodoh
│○ !ramaljodohbali
│○ !suamiistri
│○ !ramalcinta
│○ !cocoknama
│○ !pasangan
│○ !jadiannikah
│○ !sifatusaha
│○ !rezeki
│○ !pekerjaan
│○ !nasib
│○ !penyakit
│○ !tarot
│○ !fengshui
│○ !haribaik
│○ !harisangar
│○ !harisial
│○ !nagahari
│○ !arahrezeki
│○ !peruntungan
│○ !weton
│○ !karakter
│○ !keberuntungan
│○ !memancing
│○ !masasubur
│○ !zodiak 
╰❒ !shio [query]
`
}

exports.stcmenu = (prefix) =>{
	return`╭─❒ 「 Telegram Sticker 」
│○ !awoawo
│○ !benedict
│○ !chat
│○ !dbfly
│○ !dino_kuning
│○ !doge
│○ !gojosatoru
│○ !hope_boy
│○ !jisoo
│○ !kr_robot
│○ !kucing
│○ !lonte
│○ !manusia_lidi
│○ !menjamet
│○ !meow
│○ !nicholas
│○ !patrick
│○ !popoci
│○ !sponsbob
│○ !kawan_sponsbob
╰❒ !tyni
`}

exports.ephotomenu = (prefix) =>{
	return`╭─❒ 「 Ephoto360 Menu 」
│○ !youtubegold text
│○ !youtubesilver text
│○ !facebookgold text
│○ !facebooksilver text
│○ !instagramgold text
│○ !instagramsilver text
│○ !twittergold text
│○ !twittersilver text
│○ !retrotext text
│○ !halloweenbats text
│○ !texthalloween text
│○ !cardhalloween text
│○ !birthdaycake text
│○ !thundertext text
│○ !icetext text
│○ !milkcake text
│○ !snowontext text
│○ !metalstar text
│○ !dragonfire text
│○ !zombie3d text
│○ !merrycard text
│○ !generalexam text 
│○ !viettel text
│○ !embroider text
│○ !graffititext text
│○ !graffititext2 text
│○ !graffititext3 text
│○ !covergraffiti text
│○ !moderngold text
│○ !capercut text
│○ !lovecard text
│○ !heartflashlight text
│○ !heartcup text
│○ !sunglightshadow text
│○ !graffiti3d text
│○ !moderngoldsilver text
│○ !moderngold2 text
│○ !moderngold3 text
│○ !fabrictext text
│○ !masteryavatar text
│○ !messagecoffee text
│○ !announofwin text
│○ !writeblood text
│○ !horrorletter text
│○ !writehorror text
│○ !shirtclub text
│○ !angelwing text
│○ !christmasseason text
│○ !projectyasuo text
│○ !lovelycute text
│○ !womansday text
│○ !covergamepubg text
│○ !nameonheart text
│○ !funnyhalloween text
│○ !lightningpubg text
│○ !greetingcardvideo text 
│○ !christmascard text 
│○ !galaxybat text
│○ !writegalaxy text
│○ !starsnight text
│○ !noeltext text
│○ !textcakes text
│○ !pubgbirthday text
│○ !galaxywallpaper text
│○ !pubgglicthvideo text 
│○ !pubgmascotlogo text
│○ !realembroidery text
│○ !vintagetelevision text
│○ !funnyanimations text
│○ !glowingtext text
│○ !textonglass text
│○ !cartoonstyle text
│○ !multicolor text
│○ !watercolor2 text
│○ !textsky text
│○ !summerbeach text
│○ !1917text text
│○ !puppycute text
│○ !rosebirthday text
│○ !steellettering text|text2
│○ !letterstext text|text2
│○ !barcashirt text|text2
│○ !premiercup text|text2
│○ !stylepoligon text|text2
│○ !lifebuoys text|text2
╰❒ !juventusshirt text|text2`
}

exports.logomenu = (prefix) =>{
	return`╭─❒ 「 Logo Menu 」
│○ !coverbannerlol text|heroes
│○ !pubglogomaker text|style
│○ !colorfulpubg text|color
│○ !astronotspace text|style
│○ !wallpaperaov text|heroes
│○ !maketeamlogo text|style
│○ !circlemarcotteam text|logo
│○ !wallpaperml text|heroes
│○ !dragonballfb text|character
│○ !bannerofaov text|character
│○ !effect3donbeach text|background
│○ !cutegirlgamer text|logo
│○ !footballteam text|logo
│○ !beautifulshimmering text|champion
│○ !pubgcutelogo text|logo
│○ !elegantrotation text|logo
│○ !logogamingassasin text|logo
│○ !introvideomaker text|logo
│○ !gaminglogo4fvs text|logo
│○ !blueneon text|logo
│○ !metalmascot text|logo
│○ !anonymous2 text|style
│○ !lolpentakill text|style
│○ !avatarleagueofking text|style
│○ !avatarff text|character
│○ !overwatchwallpaper text|character
│○ !rovwallpaperhd text|hero
│○ !rovwallpaper text|avatar
│○ !beautifulgalaxylol text|style
│○ !crossfirecover text|character
│○ !lolwallpaper text|wallpaper
│○ !coverdota2 text|heroes
│○ !coverleagueofking text|character
│○ !avatar3q360 text|avatar
│○ !coverofwarface text|character
│○ !newlolavatar text|avatar
│○ !csgocover text|background
│○ !coverloknew text|hero
│○ !coverfblol text|letters
│○ !overwatchcover text|hero
│○ !crossfirestyle text|avatar
│○ !avatarlolbyname text|style
│○ !lolcoverbyname text|avatar
│○ !cyberhunterfb text|character
│○ !coverfreefirefb text|character
│○ !gamingmascot text|style
│○ !coveronepiecefb text|character
│○ !bannerytcsgo text|banner
│○ !fbgamepubgcover text|template
│○ !banneroflol text|text2|banner
│○ !bannerofaov2 text|text2|banner
│○ !teamlogo text|text2|background
│○ !companylogo2 text|text2|background
│○ !companylogo text|text2|background
│○ !gradientlogo text|text2|background
│○ !pencilsketch text|text2|icon
│○ !gunlogogaming text|text2|background
│○ !banneroffreefire text|text2|background
│○ !letterlogos text|text2|thumb
│○ !bannerofoverwatch text|text2|background
│○ !bannerofapex text|text2|background
│○ !bannerofpubg text|text2|background
│○ !mascotstyle text|text2|thumb
│○ !logoaccording text|text2|thumb
╰❒ !avataroverwatch text|text2|thumb
`
}

exports.islammenu = (prefix) =>{
	return`╭─❒ 「 Islamic Menu 」
│○ !asmaulhusna
│○ !kisahnabi [nabi]
│○ !jadwalshalat [daerah]
│○ !randomquran
│○ !randomquran2
│○ !listsurah
│○ !tafsirsurah [surah]
╰❒ !alquranaudio [surah|ayat]
`
}
exports.anonchat = (prefix) =>{
	return`╭─❒ 「 Anonymous 」
│○ !menfess
│○ !confess
│○ !balasmenfess
│○ !tolakmenfess
│○ !stopmenfess
│○ !anonymous 
│○ !start
│○ !skip [daerah]
╰❒ !stop [surah|ayat]
`
}

exports.storemenu = (prefix) =>{
	return`╭─❒ 「 Store Menu 」
│○ !list
│○ !addlist [key|respond]
│○ !dellist [key]
│○ !update [key|respond]
│○ !store
│○ !kali
│○ !bagi
│○ !tambah
│○ !kurang
│○ !kalkulator
│○ !setproses
│○ !updateproses
│○ !cekproses
│○ !delproses
│○ !setdone
│○ !updatedone
│○ !cekdone
│○ !deldone
│○ !pay
│○ !setcaptionpay
│○ !setpaysewa
│○ !proses
╰❒ !done
`
}

exports.voiceChange = (prefix) =>{
	return`╭─❒ 「 Voice Change Menu 」
│○ !bass
│○ !blown
│○ !deep
│○ !earrape
│○ !fast
│○ !fat
│○ !nightcore
│○ !reverse
│○ !robot
│○ !slow
│○ !smooth
╰❒ !tupai
`
}

exports.storagemenu = (prefix) =>{
	return`╭─❒ 「 Storage Menu 」
│○ !addvn
│○ !listvn
│○ !delvn
│○ !adddocument
│○ !listdocument
│○ !deldocument
│○ !addtext
│○ !listtext
│○ !deltext
│○ !addaudio
│○ !listaudio
│○ !delaudio
│○ !addimage
│○ !listimage
│○ !delimage
│○ !addvideo
│○ !listvideo
│○ !delvideo
│○ !addstik
│○ !delstik
╰❒ !liststik
`
}

exports.rpgmenu = (prefix) =>{
	return`╭─❒ 「 Rpg Games 」
│○ !adventure
│○ !weekly
│○ !use
│○ !transfer
│○ !slot
│○ !shop
│○ !pasar
│○ !profile
│○ !ojek
│○ !open
│○ !nguli
│○ !narik
│○ !nabung
│○ !monthly
│○ !mining
│○ !merampok
│○ !mancing
│○ !kolam
│○ !koboy
│○ !kerja
│○ !kandang
│○ !levelup
│○ !judi
│○ !inventory
│○ !hourly
│○ !fishop
│○ !feed
│○ !duel
│○ !daily
│○ !craft
│○ !cooldown
│○ !cook
│○ !collect
│○ !chop
│○ !casino
│○ !buy
│○ !bank 
│○ !bansos
│○ !berdagang
│○ !berkebon
╰❒ !build
`
}

exports.photooxy = (prefix)=>{
	return`╭─❒ 「 Photooxy Menu 」
│○ !battlegrounds-logo
│○ !battlefield4
│○ !text-8bit
│○ !typography-flower 
│○ !under-flower 
│○ !bevel-text 
│○ !silk-text 
│○ !sweet-andy 
│○ !smoke-typography 
│○ !carvedwood 
│○ !scary-cemetery 
│○ !royallook 
│○ !coffeecup2 
│○ !illuminated 
│○ !harry-potter2 //
│○ !woodblack //
│○ !butterfly-reflection //
│○ !watermelon // 
│○ !striking // 
│○ !metallicglow //
│○ !rainbow-text 
│○ !birthday-cake 
│○ !embroidery // 
│○ !crisp 
│○ !flaming 
│○ !furtext 
│○ !nightsky 
│○ !glow-rainbow 
│○ !gradient-avatar 
│○ !white-cube // 
│○ !honey-text // 
│○ !vintage-style //
│○ !glowing-3d // 
│○ !army-camouflage 
│○ !graffiti-cover 
│○ !rainbow-shine 
│○ !smoky-neon 
│○ !quotes-underfall //
│○ !layered-leaves 
│○ !vector-nature 
│○ !yellow-rose 
│○ !love-text 
│○ !underwater-ocean 
│○ !nature-text 
│○ !wolf-metal 
│○ !summer-text 
│○ !wooden-board //
│○ !flower-heart
│○ !quote-wood 
│○ !love-text 
│○ !quotes-undergrass 
│○ !naruto-banner 
│○ !love-message 
│○ !textoncup2 
│○ !burn-paper 
│○ !smoke 
│○ !romantic-messages 
│○ !shadow-sky 
│○ !text-cup 
╰❒ !coffecup
`
}

exports.soundmenu = (prefix) =>{
return`╭─❒ 「 Sound Menu 」
│○ !sound1
│○ !sound2
│○ !sound3
│○ !sound4
│○ !sound5
│○ !sound6
│○ !sound7
│○ !sound8
│○ !sound9
│○ !sound10
│○ !sound11
│○ !sound12
│○ !sound13
│○ !sound14
│○ !sound15
│○ !sound16
│○ !sound17
│○ !sound18 
│○ !sound19
│○ !sound20
│○ !sound21
│○ !sound22
│○ !sound23
│○ !sound24
│○ !sound25
│○ !sound26
│○ !sound27
│○ !sound28
│○ !sound29
│○ !sound30
│○ !sound31
│○ !sound32
│○ !sound33
│○ !sound34
│○ !sound35
│○ !sound36
│○ !sound37
│○ !sound38
│○ !sound39
│○ !sound40
│○ !sound41
│○ !sound42
│○ !sound43
│○ !sound44
│○ !sound45
│○ !sound46
│○ !sound47
│○ !sound48
│○ !sound49
│○ !sound50
│○ !sound51
│○ !sound52
│○ !sound53
│○ !sound54
│○ !sound55
│○ !sound56
│○ !sound57
│○ !sound58
│○ !sound59
│○ !sound60
│○ !sound61
│○ !sound62
│○ !sound63
│○ !sound64
│○ !sound65
│○ !sound66
│○ !sound67
│○ !sound68
│○ !sound69
╰❒ !sound70
`
}
