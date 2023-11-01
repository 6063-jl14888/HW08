# p5.js multi sketch template

By putting different sketch.js and index.html files in directories we can more easily switch between multiple experiments.




Neon Mondrian

In this assignment, we are attempting to change the color of specific color blocks and provide more color change options through a color palette. Throughout this process, I faced three challenges: how to select the color blocks to be changed, how to define the color areas of these blocks, and how to connect the color palette with the color blocks. With the help of examples provided by the teacher and some tutorials I found on my own, I managed to define the selection of color blocks by using the for() and if() formulas and setting thresholds for the R, G, and B values.

Since the color blocks we want to change come from an image, there are inevitable slight differences in colors when viewed by the human eye and on the computer. This made defining color thresholds more challenging. I roughly determined a fairly accurate range with the help of an eyedropper tool, allowing us to replace colors successfully. Once we detected the desired color blocks, we could change them into any color we wanted.

The same program can be applied to other works by Mondrian, but due to variations in color caused by image capture and transmission, adjustments to the color threshold values are needed for more accurate and easier selection of the desired areas. If the color threshold difference is too large, the functionality for that part is lost. Since the three primary colors, red, yellow, and blue, need to be changed separately, I wrote the program in a way that allows individual color changes.

However, I encountered a question during the writing process. These colors can be changed accurately, but except for the initially written red area, the colors in other areas can only be changed once.




Visualizing Sound 
In selecting the song, I chose electronic light music with lively drum beats. This is because the prominent drum beats complement the visual effects, making the experience more captivating. As for the choice of visual effects, I opted to create randomly appearing circular ripples, much like when a stone is thrown into water. The frequent appearance of these ripples resembles the continuous drumbeats. I made an effort to align the frequency of ripple appearances with the drum beats in the music. The music in the file will only play when you click the play button below, while the formation of ripples occurs automatically without any action required.




