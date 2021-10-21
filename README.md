# Context Free Grammar Gallery

This is a website that takes context-free grammars that students have built using this [Nearley Parser Playground](https://omrelli.ug/nearley-playground/) and uses the nearley npm package to generate sentences from each grammar as well as Web Speech API for text-to-speech fun.

I built this as a gallery of student work for [this assignment](https://docs.google.com/document/d/1Ld3np4gpDrVmVDXXdS4xg0Z5-_5ICO3Rig-dVE5M-z4/edit?usp=sharing) that I also wrote for symsys1! 

<img width="1335" alt="image" src="https://user-images.githubusercontent.com/26272095/137962447-b0131652-7d50-489a-b4a6-5661e362fec1.png">

## To use

1. On terminal, 
```
npm i
npm start
```
You may also want to host repo on free online IDE such as replit or glitch instead. 

2. Add more files to `grammars` folder, then update `index.html` with grammar name.

## Credits

ty to Guillermo for the playground above, the creators of the nearley package, Linus for the [blocks.css](https://thesephist.github.io/blocks.css/), and Patrick for the [text to speech api tutorial](https://www.twilio.com/blog/speech-recognition-browser-web-speech-api).
