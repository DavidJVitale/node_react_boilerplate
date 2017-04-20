#!/bin/bash
#What is run when "npm start" is run
#Compile backend and front end, displays in firefox
#Prompts user to recompile either codebase

cd frontend
npm install
webpack
cd ..

firefox ./frontend/index.html > /dev/null

while true; do
    #Clear screen
    echo -e "\n-----\nSee above for compilation details. Refresh webpage to view.\n'f' to recompile front end, 'b' to recompile back end, 'e' to exit."
    #read in one character
    read -n 1 option
    #clear screen
    printf "\033c"
    case "$option" in
        f) cd frontend
           webpack
           cd ..
           ;;
        b) echo "Not implemented yet..."
           ;;
        e) exit
           ;;
    esac
done
