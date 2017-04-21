#!/bin/bash
#What is run when "npm start" is run
#Compile backend and front end, displays in firefox
#Prompts user to recompile either codebase

cd frontend
npm install
webpack
cd ..

cd backend
tsc
node --use_strict build/*.js &
cd ..

firefox http://localhost:3000 > /dev/null &

while true; do
    echo -e "\n-----\nSee above for compilation details, below for runtime."
    echo -e "Refresh webpage to view most up-to-date.\n-----"
    echo -e "'f' to recompile front end,"
    echo -e "'b' to recompile back end,"
    echo -e "'e' to exit.\n-----"
    #read in one character
    read -n 1 option
    #clear screen
    printf "\033c"
    case "$option" in
        f) cd frontend
           webpack
           cd ..
           ;;
        b) cd backend
           killall node
           tsc
           node --use_strict build/*.js &
           cd ..
           ;;
        e) exit
           ;;
    esac
done
