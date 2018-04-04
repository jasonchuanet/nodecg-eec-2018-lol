# nodecg-eec-2018-lol
This was the NodeCG-bundle used for the bracket graphic in the Florida Polytechnic University's E-Sports-Event-Committee League of Legends Tournament Livestream. Only the bracket and the countdown graphic were utilized.
## The bracket
 - The bracket video backing was a blank version of [this](https://videohive.net/item/tournament-brackets/7796223) After Effects template.   
 - To achieve transparent video (for layering in OBS), .webm video was utilized.
 
 - This only shows the winners bracket and is single elimination while the bundle bracket logic is based on a double elimination bracket.

 - The text is animted via CSS Transitions. They are timed to specific video frames via JS. The current video frame is found via [HTMLMediaElement.currentTime](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/currentTime) polled every 5 ms. It is mostly reliable but not 100%.
 
Made with haste (and love) by Jason Chua
