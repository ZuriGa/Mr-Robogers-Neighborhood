# Mr. Roboger's Neighborhood project.
#### By: **Zuri Gallegos**
_*Third independent project for Epicodus*_

## Project Description: 
This web application will takes a number from the user and returns a list of values from 0 to the user's inputted number.

## Test
Describe: beepBoop()

Test: "It should return an array of numbers from 0 to the user's inputted number"
Code: beepBoop(0);
Expected Output: [0] string of numbers

Test: "It should replace numbers that contain a "1" with "Beep"
Code: beepBoop(1);
Expected Output: [0,"Beep"]

Test: "It should replace numbers that contain a "2" with "Boop"
Code: beepBoop(2);
Expected Output: [0, "Beep", "Boop"]

Test: "It should replace numbers that contain a "3" with "Won't you be my neighbor?"
Code: beepBoop(3);
Expected Output: [0, "Beep", "Boop", "Won't you be my neighbor?"]

Test" "It should replace numbers based on the hierarchy of the numbers"
Code: beepBoop(13);
Expected Output: [0, "Beep", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep!", "Beep!", "Boop!", "Won't you be my neighbor?", "Beep!"]

## Setup/Installation:
* _You can clone this repository to your desktop_
* _You can also fork it utilizing GitHub_
* _You can do so by going to https://github.com/ZuriGa/Mr-Robogers-Neighborhood.git_


## Known Bugs:
* _Small bug on number 10 string not getting replaced with "Beep!"_

## License 

MIT License

Copyright (c) 2023 Zuri Gallegos
