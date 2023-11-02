# Mr. Roboger's Neighborhood project.
#### By: **Zuri Gallegos**
_*Third independent project for Epicodus*_

## Project Description: 
This web application will takes a number from the user and returns a list of values from 0 to the user's inputted number.

## TDD
Describe: beepBoop()

Test 1: "It create a list of numbers from 0 to the user's inputted number".\
Code: beepBoop(0);\
Expected Output: [0] string of numbers

Test 2: "It should replace numbers that contain a "1" with "Beep".\
Code: beepBoop(1);\
Expected Output: [0,"Beep"]

Test 3: "It should replace numbers that contain a "2" with "Boop"\
Code: beepBoop(2);\
Expected Output: [0, "Beep", "Boop"]

Test 4: "It should replace numbers that contain a "3" with "Won't you be my neighbor?"\
Code: beepBoop(3);\
Expected Output: [0, "Beep", "Boop", "Won't you be my neighbor?"]

Test 5: "It should replace numbers based on the hierarchy of the numbers within the exception rules (3's overrule 2's overrule 1's)"\
Code: beepBoop(13);\
Expected Output: [0, "Beep", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep!", "Beep!", "Boop!", "Won't you be my neighbor?", "Beep!"]

## Setup/Installation:
* _You can clone this repository, you can do this by going to this link https://github.com/ZuriGa/Mr-Robogers-Neighborhood.git_
* _follow the link above and click on the <> Code button then click on the copy button. Wherever you are storing your projects on your computer, use this git command: git clone url-of-remote-repo. A new folder should be created on your computer and you can navigate it now._
* _You can also fork this repository by clicking the "Fork" button in the remote repository._ 
![My_Image](img/fork.jpng.png)\
Click "create new fork" and then select your account as the "Owner", after this you have your own copy of this repository to your GitHub Account. 

## GitHub Pages Link:
https://zuriga.github.io/Mr-Robogers-Neighborhood/

## Technology used:
* _JavaScript_
* _HTML_
* _CSS_


## Known Bugs:
* _No known Bugs_

## License 

MIT License

Copyright (c) 2023 Zuri Gallegos
