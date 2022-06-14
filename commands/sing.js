const Discord = require("discord.js");
const mongoose = require(`mongoose`);

module.exports.run = async (bot, message, args) => {
  mongoose.model("DiscordUserData").findOne ({
    userID: `${message.author.id}`
  }, function(error, data) {
    if (error) {
      console.log("Failed to get data :(");
      console.log(error);
    } else {
      let replies = [
        `**Happy Birthday To You**\n\nHappy Birthday to you\nHappy Birthday to you\nHappy Birthday to someone\nHappy Birthday to you\n🎂`,
        "**Pokemon Theme 1**\n\nI wanna be the very best\nLike no one ever was\nTo catch them is my real test\nTo train them is my cause**",
        "**Pokemon Theme 11**\n\nOn a road, far from home\nYou don't have to feel alone\nBrave and strong, together we will be\nIt's our destiny**",
        "**Random Singing To Self**\n\nLa la la laaa la la laaaa",
        "**All Star**\n\nSome...",
        "**In My Place**\n\nYeah, how long must you wait for it?\nYeah, how long must you pay for it?\nYeah, how long must you wait for it?",
        "**Yellow**\n\nLook at the stars\nLook how they shine for you\nAnd everything you do\nThey were all yellow",
        "**November Rain**\n\nNothin' lasts forever\nAnd we both know hearts can change\nAnd it's hard to hold a candle\nIn the cold November rain",
        "**Over You**\n\nNow that it's all said and done\nI can't believe you were the one\nTo build me up and tear me down\nLike an old abandoned house\nWhat you said when you left\nJust left me cold and out of breath\nI felt as if I was in way to deep\nGuess I let you get the best of me",
        "**You Belong With Me**\n\nYou're on the phone with your girlfriend\nShe's upset\nShe's going off about something that you said\n'Cause she doesn't get your humour like I do\nI'm in my room\nIt's a typical Tuesday night\nI'm listening to the kind of music she doesn't like\nAnd she'll never know your story like I do'",
        "**We Are One**\n\nIf there's so much I must be, can I still just be me the way I am?\nCan I trust in my own heart or am I just one part of some big plan?",
        "**Dry Your Eyes**\n\nDry your eyes mate\nI know it's hard to take but her mind has been made up\nThere's plenty more fish in the sea\nDry your eyes mate\nI know you want to make her see how much this pain hurts but you've got to walk away now, it's over.",
        "**I don't Wanna Miss A Thing**\n\nDon't wanna close my eyes\nI don't wanna fall asleep\n'Cause I'd miss you babe\nAnd I don't wanna miss a thing\n'Cause even when I dream of you\nThe sweetest dream will never do\nI'd still miss you babe\nAnd I don't wanna miss a thing",
        "**Payphone**\n\nI'm at a payphone trying to call home\nAll of my change I spent on you\nWhere have the times gone, baby it's all wrong\nWhere are the plans we made for two",
        "**What About Now**\n\nWhat about now?\nWhat about today?\nWhat if you're making me all that I was meant to be?\nWhat if our love never went away?\nWhat if it's lost behind words we could never find?\nBaby, before it's too late,\nWhat about now?",
        "**Hear You Me**\n\nThere's no one in town I know\nYou gave us some place to go\nI never said thank you for that\nI thought I might get one more chance\nWhat would you think of me now\nSo lucky, So strong, So proud?\nI never said thank you for that\nNow I'll never have a chance",
        "**Give Yourself A Try**\n\nYou learn a couple things when you get to my age\nLike friends don't lie and it all tastes the same in the dark\nWhen your vinyl and your coffee collection is a sign of the times\nYou're getting spiritually enlightened at 29\nSo just give yourself a try",
        "**A Million Dreams**\n\nI close my eyes and I can see\nThe world that's waiting up for me\nThat I call my own\nThrough the dark, through the door\nThrough where no one's been before\nBut it feels like home",
        "**A Million Dreams**\n\n'Cause every night I lie in bed\nThe brightest colours fill my head\nA million dreams are keeping me awake\nI think of what the world could be\nA vision of the one I see\nA million dreams is all it's gonna take\nA million dreams for the world we're gonna make",
        "**A Million Dreams**\n\nThere's a house we can build\nEvery room inside is filled\nWith things from far away\nSpecial things I compile\nEach one there to make you smile\nOn a rainy day",
        "**The Scientist**\n\nCome up to meet you\nTell you I'm sorry\nYou don't know how lovely you are\nI had to find you\nTell you I need you\nTell you I set you apart",
        "**Can You Feel The Love Tonight (Movie Version)**\n\nI can see what's happening\nWhat?\nAnd they don't have a clue\nWho?\nThey'll fall in love and here's the bottom line, our trio's down to two\nOh\nThe sweet caress of twilight, there's magic everywhere\nAnd with all this romantic atmosphere disaster's in the air",
        "**Forever Young**\n\nLet's dance in style, let's dance for a while\nHeaven can wait we're only watching the skies\nHoping for the best, but expecting the worst\nAre you gonna drop the bomb or not?",
        "**Disco 2000**\n\nAnd I said let's all meet up in the year 2000\nWon't it be strange when we're all fully grown\nBe there two o'clock by the fountain down the road\nI never knew that you'd get married\nI would be living down here on my own\nOn that damp and lonely Thursday years ago",
        "**Always**\n\nNow I can't sing a love song\nLike the way it's meant to be\nWell I guess I'm not that good anymore\nBut baby, that's just me\nYeah, I will love you baby\nAlways and I'll be there\nForever and a day, always\nI'll be there till the stars don't shine\n'Til the heavens burst and the words don't rhyme\nI know when I die you'll be on my mind\nAnd I'll love you, always",
        "**Angels**\n\nAnd through it all she offers me protection\nA lot of love and affection\nWhether I'm right or wrong\nAnd down the waterfall\nWherever it may take me\nI know that life won't break me\nWhen I come to call, she won't forsake me\nI'm loving angels instead",
        "**Torn**\n\nI'm all out of faith\nThis is how I feel, I'm cold and I am shamed\nLying naked on the floor\nIllusion never changed\nInto something real\nWide awake and I can see the perfect sky is torn\nYou're a little late\nI'm already torn",
        "**Chasing Cars**\n\nIf I lay here\nIf I just lay here\nWould you lay with me and just forget the world?",
        "**...**\n\nI've lost my voice! Try again.",
        "**When You Say Nothing At All**\n\nThe smile on your face let's me know that you need me\nThere's a truth in your eyes saying you'll never leave me\nThe touch of your hand says you'll catch me if wherever I fall\nYou say it best when you say nothing at all",
        "**A Little Respect**\n\nI try to discover\nA little something to make me sweeter\nOh baby refrain from breaking my heart\nI'm so in love with you\nI'll be forever blue\nThat you gimme no reason\nWhy you make me work so hard\nThat you gimme no\nThat you gimme no\nThat you gimme no\nThat you gimme no\nSoul, I hear you calling\nOh baby please give a little respect to me",
        "**Still I Fly**\n\nThere's a time in your life\nWhen the world is on your side\nYou might not feel it\nYou might not see it\nBut it surrounds you like a light\nMakes you stronger for the fight\nNever letting go\nGotta learn to grow\nWatch me as I touch the sky\nStill I fly\nNow I know it's what I gotta do\nFind a dream that's new\nGive it all I got this time\nStill I fly\nStill I fly",
        "**May I**\n\nThere you stand, opened heart, opened doors\nFull of life with a world that's wanting more\nBut I can see when the lights start to fade\nThe day is done and your smile has gone away\nLet me raise you up\nLet me be your love\nMay I hold you as you fall to sleep\nWhen the world is closing in\nAnd you can't breathe\nMay I love you, may I be your shield\nWhen no one can be found\nMay I lay you down",
        "**My Most Precious Treasure**\n\nI'll go anywhere, I promise\nWith these things that you have taught me\nIn the tears so brightly shining\nI'll save happiness and our dreams\nEven if we're seperated\nI will bear the pain and carry on\nRise again to see the morning\nLive for you forevermore",
        "**Brave Song**\n\nI've always been walking along this lonely path\nAnd when I turned around, everyone was far behind me\nNevertheless I keep on walking and walking\nTo show what memory of strength was\nNothing in this world scares me anymore\nBut that's a lie I keep whispering\nEveryone will be alone someday, believe me\nAnd they will live on memories which can be so sad but\nThey've made me feel love and alive feeling when I'm so lonely\nI will fight for my dear full of happiness\nAnd I will laugh, so shall them, cry no more tears",
        "**Palm Of A Tiny Hand**\n\nFar away, far away\nI hear the wind gently caress the fields\nI walked along this empty road\nSearching for pieces of our fond memories\nEverything sad, can we forget?\nAll the moments that have led us here\nI still remember them\nAnd I always will\nIn this tiny hand of yours\nI know there is the strength\nThat will someday surely surpass our own\nAfter all the tears I've shed\nBeneath the ripe grapes\nI got up to carry on\nEven if my hand is small and we are far apart\nI reach out for you and we will walk this road\nAll the precious memories will stay in our hearts\nIf one day you choose to go",
        "**Zenzenzense**\n\nAt last, hello, you've opened your eyes\nBut, why won't you even look me in the eyes, what's wrong with you?\nYou angrily tell me that I’m late\nWell, I'm sorry, but I did my best and running at my fastest pace\nMy heart overtook my body as it flew to find you in this place\nSeeing your hair flowing and your bright eyes glowing aches my very core\nWish I could breathe in the same dimension, I don't want to let it go\nNow that I am finally faced with the voice I've known for so long\nI don't know what the words should be the very first I say to you\nBack in the Zenzenzense 'til this day\nBeen looking everywhere for you\nI followed the sound of your innocent laughter\nAnd it guided me in the right way\nEven if every piece of you disappeared\nAnd if it scattered everywhere\nNo, I won't waver, I'll start back at one\nLook for you all over again\nOr maybe instead I'll take the whole universe\nRight back to zero again",
        "**Smile**\n\nYou're better than the best\nI'm lucky just to linger in your light\nCooler then the flip side of my pillow, that's right\nCompletely unaware\nNothing can compare to where you send me\nLets me know that it's okay, yeah, it's okay\nAnd the moments when my good times start to fade",
        "**Smile**\n\nYou make me smile like the sun\nFall out of bed, sing like a bird\nDizzy in my head, spin like a record\nCrazy on a Sunday night\nYou make me dance like a fool\nForget how to breathe\nShine like gold, buzz like a bee\nJust the thought of you can drive me wild\nOh, you make me smile",
        "**All The Small Things**\n\nAll the small things\nTrue care, truth brings\nI'll take one lift\nYour ride, best trip ",
        "**All The Small Things**\n\nSay it ain't so\nI will not go\nTurn the lights off\nCarry me home",
        "**Girls & Boys**\n\nGirls don't like boys, girls like cars and money\nBoys will laugh at girls when they're not funny ",
        "**I Just Rage Quit**\n\nSometimes, something messed up happens in the virtual world\nAnd you don't know how to express yourself\nSo you just gotta sing\nI just rage quit\nAnd it felt so good\nJust press start, up, leave game, are you sure?\nOh heck yes\nI just rage quit\nAnd I'll never go back\nNever go back\nThe stupid camping noob can kiss my ---",
        "**She Will Be Loved**\n\nI don't mind spending every day\nOut on your corner in the pouring rain\nLook for the girl with the broken smile\nAsk her if she wants to stay a while\nAnd she will be loved\nAnd she will be loved",
        "**Amazed**\n\nI don't know how you do what you do\nI'm so in love with you\nIt just keeps getting better\nI wanna spend the rest of my life\nWith you by my side\nForever and ever\nEvery little thing that you do\nBaby, I'm amazed by you",
        "**Stop Crying Your Heart Out**\n\nCause all of the stars are fading away\nJust try not to worry, you'll see them someday\nTake what you need, and be on your way\nAnd stop crying your heart out",
        "**Don't Look Back In Anger**\n\nAnd so Sally can wait\nShe knows it's too late\nAs we're walking on by\nHer soul slides away\nBut don't look back in anger\nI heard you say",
        "**Wonderwall**\n\nBecause maybe\nYou're gonna be the one that saves me\nAnd after all\nYou're my wonderwall",
        "**Amnesia**\n\nI remember the day you told me you were leaving\nI remember the makeup running down your face\nAnd the dreams you left behind you didn't need them\nLike every single wish we ever made\nI wish that I could wake up with amnesia\nAnd forget about the stupid little things\nLike the way it felt to fall asleep next to you\nAnd the memories I never can escape\n'Cause I'm not fine at all",
        "**Iris**\n\nAnd I don't want the world to see me\n'Cause I don't think that they'd understand\nWhen everything's made to be broken\nI just want you to know who I am",
        "**Reach For The Stars**\n\nTake off, at a speed of sound\nBright lights, colours all around\nI'm running wild, living fast, and free\nGot no regrets inside of me\nNot looking back\nNot giving up\nNot letting go\nI'll keep on running",
        "**Flying Without Wings**\n\nEverybody's looking for that something\nOne thing that makes it all complete\nYou'll find it in the strangest places\nPlaces you never knew it could be",
        "**Battle Scars**\n\nDo you remember when we learned how to fly?\nWe'd play make-believe\nWe were young and had time on our side\nYou're stuck on the ground\nGot lost, can't be found\nJust remember that you're still alive",
        "**Battle Scars**\n\nI'll carry you home\nNo, you're not alone\nKeep marching on\nThis is worth fighting for\nYou know we've all got battle scars",
        "**How To Save A Life**\n\nWhere did I go wrong?\nI lost a friend\nSomewhere along in the bitterness\nAnd I would have stayed up with you all night\nHad I known how to save a life",
        "**Mt. Washington**\n\nDigging like you can bury\nSomething that cannot die\nWe could wash the dirt of our hands now\nKeep it from living underground\nLazy summer goddess\nYou can tell our whole empire\nI don't have to see you right now\nI don't have to see you right now",
        "**Tattoo**\n\nI can't waste time so give it a moment\nI realise nothing's broken\nNo need to worry bout everything I done\nLive every second like it was my last one\nDon't look back got a new direction\nI loved you once\nNeeded protection\nYou're still a part of everything I do\nYou're on my heart just like a tattoo\nJust like a tattoo I'll always have you",
        "**Take A Bow**\n\nYou look so dumb right now\nStandin' outside my house\nTryin' to apologize\nYou're so ugly when you cry\nPlease\nJust cut it out",
        "**The Time Has Come**\n\nThe time has come\nIt's for the best, I know it\nWho could have guessed that you and I\nSomehow, someday\nWe'd have to say goodbye",
        "**My Best Friends**\n\nTill the end I will be with you\nWe will go where our dreams come true\nAll the time that we have been through\nYou will always be my best friend",
        "**Time Will Wait**\n\nA strange strange strange new gift to rewrite the past\nSuddenly is in your grasp\nYour hands hands hands are clenched around memories\nYou are desperate to get back",
        "**King**\n\nYou've got it all\nYou lost your mind in the sound\nThere's so much more. you can reclaim your crown\nYou're in control\nRid of the monsters inside your head\nPut all your faults to bed\nYou can be king again",
        "**Down**\n\nI shot for the sky\nI'm stuck on the ground\nSo why do I try\nI know I'm gonna fall down\nI thought I could fly\nSo why did I drown?\nI never know why\nIt's coming down, down, down",
        "**What If I Died Tomorrow**\n\nA story has just been told that has happened yet\nJust a tragic foreshadowing\nOf what could happen to you\nThink before you speak\nIt could be the last time, the last time\nYou ever speak to him",
        `**Mama Said**\n\nMama said that it was okay\nMama said that it was quite alright\nOur kind of people had a bed for the night\nAnd it was okay\nMama told us we were good kids\nAnd Daddy told us "Never listen to the ones\nPointing nasty fingers and making fun"\n'Cause we were good kids`,
        "**Best Of Both Worlds**\n\nYou get the best of both worlds\nChill it out, take it slow\nThen you rock out the show\nYou get the best of both worlds\nMix it all together\nAnd you know that it's the best of both\nYou know the best of both worlds",
        "**My Last Goodbye**\n\nSo here we are again\nKnowing this will never end\nSo I must let go\nThis is my last goodbye\nLeaving all the memories of you behind\nI will not wait here and waste my whole life\nWaste my whole life",
        "**It's Time**\n\nIt's time to begin, isn't it?\nI get a little bit bigger but then I'll admit\nI'm just the same as I was\nNow, don't you understand that I'm never changing who I am?",
        "**I Got You**\n\nGo ahead and say goodbye\nI'll be alright\nGo ahead and make me cry\nI'll be alright\nAnd when you need a place to run to\nFor better for worse\nI got you\nI got you",
        "**The First Cut Is The Deepest**\n\nI would have given you all of my heart\nBut there's someone who's torn it apart\nAnd she's taken just all that I had\nBut if you want, I'll try to love again\nBaby, I'll try to love again but I know\nFirst cut is the deepest\nBaby, I know, the first cut is the deepest\nWhen it comes to being lucky, she was cursed\nWhen it comes to loving me, she's worst",
        "**Thank You**\n\nMy tea's gone cold, I'm wondering why\nI got out of bed at all\nThe morning rain clouds up my window\nAnd I can't see at all\nAnd even if I could, it'd all be grey\nBut your picture on my wall\nIt reminds me that it's not so bad\nIt's not so bad",
        "**Run**\n\nLight up, light up\nAs if you have a choice\nEven if you cannot hear my voice\nI'll be right beside you, dear\nLouder, louder\nAnd we'll run for our lives\nI can hardly speak or understand\nWhy you can't raise your voice to say",
        "**Fix You**\n\nWhen you try your best, but you don't succeed\nWhen you get what you want, but not what you need\nWhen you feel so tired, but you can't sleep\nStuck in reverse",
        "**All Too Well (10 Minute Version)**\n\nThey say all's well that ends well, but I'm in a new Hell\nEverytime you double-cross my mind\nYou said if we had been closer in age maybe it would have been fine\nAnd that made me want to die\nThe idea you had of me, who was she?\nA never-needy, ever-lovely jewel whose shine reflects on you\nNot weeping in a party bathroom\nSome actress asking me what happened, you\nThat's what happened, you",
        "**All Too Well**\n\nCause there we are again in the middle of the night\nWe're dancing 'round the kitchen in the refrigerator light\nDown the stairs, I was there\nI remember it all too well",
        "**Better Man**\n\nSometimes, in the middle of the night, I can feel you again\nBut I just miss you, and I just wish you were a better man\nI know why we had to say goodbye like the back of my hand\nBut I just miss you, and I just wish you were a better man\nBetter man",
        `**Mr. Perfectly Fine**\n\nHello Mr. "Perfectly fine"\nHow's your heart after breaking mine?\nMr. "Always at the right place at the right time", baby\nHello Mr. "Casually cruel"\nMr. "Everything revolves around you"\nI've been Miss "Misery" since your goodbye\nAnd you're Mr. "Perfectly fine"`,
        "**Innocent**\n\nIt's alright, just wait and see\nYour string of lights is still bright to me\nOh, who you are is not what you've been\nYou're still an innocent\nIt's okay, life is a tough crowd\n32, and still growin' up now\nWho you are is not what you did\nStill an innocent",
        "**Long Live**\n\nLong live all the mountains we moved\nI had the time of my life fighting dragons with you\nI was screaming long live that look on your face\nAnd bring on all the pretenders\nOne day, we will be remembered",
        "**Come Back...Be Here**\n\nI told myself, don't get attached\nBut in my mind, I play it back\nSpinning faster than the plane that took you\nAnd this is when the feeling sinks in\nI don'''t wanna miss you like this\nCome back, be here\nCome back, be here\nI guess you're in New York today\nI don't wanna need you this way\nCome back, be here\nCome back, be here",
        "**Caramelldansen (English Version)**\n\nDance to the beat\nWave your hands together\nCome feel the heat\nForever and forever\nListen and learn, it is time for prancing\nNow we are here\nWe're Caramell dancing",
        "**Maria**\n\nMaria, you've gotta see her\nGo insane and out of your mind\nLatina, Avé Maria\nA million and one candle lights",
        "**High**\n\nThe end of the day\nremember the days\nWhen we were close to the edge\nAnd we'll wonder how we made it through the night\nThe end of the day\nremember the way\nWe stayed so close till the end\nWe'll remember it was me and you\n'Cause we are gonna be forever you and me\nYou will always keep me flying high in the sky of love ",
        "**Zero**\n\nHello, hello\nLet me tell you what it's like to be a zero, zero\nLet me show you what it's like to always feel, feel\nLike I'm empty and there's nothing really real, real\nI'm looking for a way out\nHello, hello\nLet me tell you what it's like to be a zero, zero\nLet me show you what it's like to never feel, feel\nLike I'm good enough for anything that's real, real\nI'm looking for a way out",
        "**What I Go to School For**\n\nAnd I fought my way to front of class\nTo get the best view of her ---\nI drop a pencil on the floor\nShe bends down and shows me more\nThat's what I go to school for\nI know it isn't real but\nYou can call me crazy\nBut I know that she craves me\nThat's what I go to school for\nI know it isn't real but\nGirlfriends, I've had plenty\nNone like Miss Mackenzie\nThat's what I go to school for\nThat's what I go to school for",
        "**Crashed The Wedding**\n\nAnd I'm glad I crashed the wedding\nIt's better than regretting\nI could have been a loser kid\nWho ran away and hid\nBut it's the best thing that I ever did\n'Cause true love lasts forever\nAnd now we're back together\nAs if he never met her\nSo looking back\nI'm glad I crashed the wedding",
        "**The Neverending Story**\n\nTurn around\nLook at what you see\nIn her face\nThe mirror of your dreams\nMake believe I'm everywhere\nGiven in the light\nWritten on the pages\nIs the answer to a neverending story\nAhhh-ahhh-ahhh",
        "**You Will Be Found**\n\nEven when the dark comes crashing through\nWhen you need a friend to carry you\nAnd when you're broken on the ground\nYou will be found\nSo let the sun come streaming in\n'Cause you'll reach up and you'll rise again\nLift your head and look around\nYou will be found",
        "**For Forever**\n\nAll we see is sky for forever\nWe let the world pass by for forever\nFeels like we could go on for forever this way\nTwo friends on a perfect day",
        "**Drowning**\n\n'Cause everytime I breathe, I take you in\nAnd my heart beats again\nBaby, I can't help it\nYou keep me drowning in your love\nEverytime I try to rise above\nI'm swept away by love\nBaby, I can't help it\nYou keep me drownin' in your love",
        "**Shattered**\n\nAnd I've lost who I am, and I can't understand\nWhy my heart is so broken, rejecting your love\nWithout, love gone wrong, lifeless words carry on\nBut I know, all I know, is that the end's beginning\nWho I am from the start, take me home to my heart\nLet me go and I will run, I will not be silent\nAll this time spent in vain, wasted years, wasted gain\nAll is lost, hope remains, and this war's not over\nThere's a light, there's the sun, taking all shattered ones\nTo the place we belong, and his love will conquer all",
        "**Some Things Never Change**\n\nYes, some things never change\nLike the feel of your hand in mine\nSome things stay the same\nLike how we get along just fine\nLike an old stone wall that'll never fall\nSome things are always true\nSome things never change\nLike how I'm holding on tight to you",
        "**The Next Right Thing**\n\nCan there be a day beyond this night?\nI don't know anymore what is true\nI can't find my direction, I'm all alone\nThe only star that guided me was you\nHow to rise from the floor?\nWhen it's not you I'm rising for\nJust do the next right thing\nTake a step, step again\nIt is all that I can to do\nThe next right thing",
        "**To Die For**\n\nPink lemonade sippin' on a Sunday\nCouples holding hands on a runway\nThey're all posing in a picture frame\nWhilst my world's crashing down\nSolo shadow on a sidewalk\nJust want somebody to die for\nSunshine livin' on a perfect day\nWhile my world's crashing down\nI just want somebody to die for",
        "**Ocean Drive**\n\nWhen that clouds arrive we'll live on\nOcean Drive\nDon't know why, you're so blue\nThe sun's gonna shine on everything you do\nThe sky is so blue\nThe sun's gonna shine on everything you do",
        "**Not Now**\n\nPlease stay until I'm gone\nI'm here hold on to me\nI am right here, waiting\nAnd take my one last breath\nAnd don't forget\nThat I will be right here, waiting",
        "**On Melancholy Hill**\n\nUp on Melancholy Hill\nThere's a plastic tree\nAre you here with me?\nJust looking out on the day\nOf another dream",
        "**Welcome To Wonderland**\n\nWelcome to Wonderland, I'll be your guide\nHolding your hand under sapphire skies\nLet's go exploring or we could just go for a walk\nWelcome to Wonderland, where should we go\nThere's a tea party along down the road\nMake an appearance and maybe they'll sing us a song",
        "**Death Bed (Coffee For Your Head)**\n\nDon't stay awake for too long, don't go to bed\nI'll make a cup of coffee for your head\nIt'll get you up and going out of bed",
        "**Marry Me**\n\nI'll say, will you marry me?\nI swear that I will mean it\nI'll say, will you marry me?",
        "**Here Without You**\n\nI'm here without you, baby\nBut you're still on my lonely mind\nI think about you, baby\nAnd I dream about you all the time\nI'm here without you, baby\nBut you're still with me in my dreams\nAnd tonight, it's only you and me, yeah",
        "**Make You Mine**\n\nPut your hand in mine\nYou know that I want to be with you all the time\nYou know that I won't stop until I make you mine\nYou know that I won't stop until I make you mine\nUntil I make you mine",
        "**Hey How You Doing**\n\nHey, how you doing?\nWell I'm doing just fine\nI lied I'm dying inside",
        `**Two Is Better Than One**\n\nI remember what you wore on the first day\nYou came into my life and I thought\n"Hey, you know this could be something"`,
        "**Eyes Open**\n\nEverybody's waitin' for you to break down\nEverybody's watchin' to see the fallout\nEven when you're sleeping, sleeping\nKeep your eyes open",
        "**Dakota**\n\nThinking about thinking of you\nSummertime, think it was June\nYeah, I think it was June\nLaying back, head on the grass\nChewing gum, having some laughs\nYeah, having some laughs\nYou make me feel like the one\nMake me feel like the one\nThe one",
        "**Is There Still Anything That Love Can Do?**\n\nWhat if our destiny was just a roll of the dice\nOr if it's up to the gods, and if they feel like playing nice?\nA mission that we didn't choose, like armor that we can't remove\nOr maybe it's a distant wish, something that we can't refuse",
        "**Sweeter Than Fiction**\n\nThere you'll stand, ten feet tall\nI will say, I knew it all along\nYour eyes wider than distance\nThis life is sweeter than fiction",
        "**The Call**\n\nIt started out as a feeling\nWhich then grew into a hope\nWhich then turned into a quiet thought\nWhich then turned into a quiet word\nAnd then that word grew louder and louder\n'Til it was a battle cry",
        "**Sweet Victory**\n\nDon't ever look back\nOn the world closing in\nBe on the attack\nWith your wings on the wind\nOh, the games will begin\nAnd it's sweet, sweet, sweet victory, yeah\nAnd it's ours for the taking\nIt's ours for the fight\nIn the sweet, sweet, sweet victory, yeah\nAnd the one who's last to fall\nThe winner takes all, yeah",
        "**On My Way**\n\nI'm gonna cross state lines in my first car\nOver and over heal my broken heart\nI'm gonna reach new heights with every fall\nI'm gonna be all talk but do it all\nOn my way\nOn my way\nOn my way to somewhere\nOn my way\nOn my way to somewhere",
        "**If You Love Her**\n\nTake it\nShe gives you her heart\nDon't you break it\nLet your arms be a place she feels safe in\nShe's the best thing that you'll ever have\nShe'll love you if you love her\nOn days when it feels like the whole world might cave in\nStand side by side and you'll make it\nShe's the best thing that you'll ever have\nShe'll love you if you love her like that",
        "**It's All Coming Back To Me Now**\n\nBaby, baby\nIf I kiss you like this\nAnd if you whisper like that\nIt was lost long ago\nBut it's all coming back to me\nIf you want me like this\nAnd if you need me like that\nIt was dead long ago\nBut it's all coming back to me\nIt's so hard to resist\nAnd it's all coming back to me\nI can barely recall\nBut it's all coming back to me now",
        "**Miracle**\n\nWhy do bad things always happen to good people?\nFine upstanding citizens like you and me\nWhy when we've done nothing wrong\nShould this disaster come along?\nThis horrible, weird looking\nHairy little stinky thing\nWith no sign of a winky-ding at all",
        "**Naughty**\n\nJust because you find that life's not fair, it\nDoesn't mean that you just have to grin and bear it\nIf you always take it on the chin and wear it\nNothing will change",
        "**When I Grow Up**\n\nJust because I find myself in this story\nIt doesn't mean that everything is written for me\nIf I think the ending is fixed already\nI might as well be saying\nI think that it's OK!\nAnd that's not right!",
        "**Always Safe**\n\nThrough the raging winds\nThrough the chaos and back again\nKnow that I am always here and you are safe\nThrough the thick and thin\nThrough what's scary and back again\nKnow that I am always here and you are safe\nYou're always safe",
        "**Caledonia**\n\nLet me tell you that I love you and I think about you all the time\nCaledonia you're calling me, now I'm going home\nIf I should become a stranger\nKnow that it would make me more than sad\nCaledonia's been everything I've ever had",
        "**Every Dog Has Its Day**\n\nEvery dog has its day\nIf the stars line up that way\n'N' every night has its day\nIf the sun comes up again",
        "**Buy Dirt**\n\nFind the one you can't live without\nGet a ring, let your knee hit the ground\nDo what you love but call it work\n'N' throw a little money in the plate at church\nSend your prayers up and your roots down deep\nAdd a few leaves to your family tree\nWatch their pencils marks\nAnd the grass in the yard\nAll grow up\nCause the truth about it is\nIt all goes by really quick\nYou can't buy happiness\nBut you can buy dirt",
        "**The Good Ones**\n\nA love me like he should one\nLike he wrote the book one\nThe kind you find when you don't even look one\nAnybody can be good once\nBut he's good all the time\nHe's one of the good ones\nAnd he's all mine\nHe's one of the good ones",
        "**She's All I Wanna Be**\n\nStupid boy makin' me so sad\nDidn't think you could change this fast\nShe's got everything that I don't have\nHow could I ever compete with that?\nI know you'll go and change your mind\nOne day wake up and be bored with mine\nShe's got everything that I don't have\nAnd she's all I wanna be\nAll I wanna be so bad\nSo bad\nShe's got everything that I don't have",
        "**Welcome To The Black Parade**\n\nWe'll carry on, we'll carry on\nAnd though you're dead and gone, believe me\nYour memory will carry on\nWe'll carry on\nAnd in my heart, I can't contain it\nThe anthem won't explain it",
        "**Biblical**\n\nDidn't know that I'd fall so hard\nThen my feet left the ground\nGravity don't make no sense when you're around\nI come up against myself when\nDemons in my head get loud\nDon't know how you do it, but you turn them down",
        "**Peter Pan**\n\nYou're just a lost boy, with your head up in the clouds\nYou're just a lost boy, never keep your feet on the ground\nAlways gonna fly away, just because you know you can\nYou're never gonna learn there's no such place as a Neverland\nYou don't understand\nYou'll never grow up\nYou're never gonna be a man\nPeter Pan"];

      let result = Math.floor((Math.random() * replies.length));
//      if (result === 4){
//        let sngembed = new Discord.MessageEmbed()
//        .setColor(`${data.col}`)
//        .setTitle(`🎵`)
//        .setDescription(replies[result]);
//        const m = message.channel.send(sngembed).then(msg => {setTimeout(() =>
//          msg
//          .setDescription("**All Star**\n\nSomebody once told me the world is gonna roll me\nI ain't the sharpest tool in the shed");
//          m.edit(msg);
//          , 4000)});
//        return;
//      }
      if (result === 1 || result === 2 || result === 58 || result === 59 || result === 116){
        let sngembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setTitle(`🎵`)
        .setDescription(replies[result])
        .setFooter("- Pokemon");
        return message.channel.send(sngembed);
      }
      if (result === 28){
        let sngembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setTitle(`❗`)
        .setDescription(replies[result]);
        return message.channel.send(sngembed);
      }
      if (result === 33 || result === 34){
        let sngembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setTitle(`🎵`)
        .setDescription(replies[result])
        .setFooter("- Angel Beats");
        return message.channel.send(sngembed);
      }
      if (result === 35){
        let sngembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setTitle(`🎵`)
        .setDescription(replies[result])
        .setFooter("- Clannad After Story");
        return message.channel.send(sngembed);
      }
      if (result === 36){
        let sngembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setTitle(`🎵`)
        .setDescription(replies[result])
        .setFooter("- Your Name");
        return message.channel.send(sngembed);
      }
      if (result === 50){
        let sngembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setTitle(`🎵`)
        .setDescription(replies[result])
        .setFooter("- Sonic Colours");
        return message.channel.send(sngembed);
      }
      if (result === 87 || result === 88){
        let sngembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setTitle(`🎵`)
        .setDescription(replies[result])
        .setFooter("- Dear Evan Hansen");
        return message.channel.send(sngembed);
      }
      if (result === 91 || result === 92){
        let sngembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setTitle(`🎵`)
        .setDescription(replies[result])
        .setFooter("- Frozen 2");
        return message.channel.send(sngembed);
      }
      if (result === 106){
        let sngembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setTitle(`🎵`)
        .setDescription(replies[result])
        .setFooter("- Weathering With You");
        return message.channel.send(sngembed);
      }
      if (result === 110){
        let sngembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setTitle(`🎵`)
        .setDescription(replies[result])
        .setFooter("- The Mitchells vs. The Machines");
        return message.channel.send(sngembed);
      }
      if (result === 113 || result === 114 || result === 115){
        let sngembed = new Discord.MessageEmbed()
        .setColor(`${data.col}`)
        .setTitle(`🎵`)
        .setDescription(replies[result])
        .setFooter("- Matilda The Musical");
        return message.channel.send(sngembed);
      }

      let sngembed = new Discord.MessageEmbed()
      .setColor(`${data.col}`)
      .setTitle(`🎵`)
      .setDescription(replies[result]);
      return message.channel.send(sngembed);
    }
  });
}

module.exports.help = {
  name: "sing"
}
