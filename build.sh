#!/bin/bash
#What is run when "npm start" is run
#Compile backend and front end, displays in firefox
#Prompts user to recompile either codebase

#runs npm install on backend and frontend
run_npm_install(){
    cd frontend
    npm install
    cd ../backend
    npm install
    cd ..
}

# use webpack for front end compilation
compile_front_end(){
    cd frontend
    webpack
    cd ..
}

# use tsc for back end compilation
compile_back_end(){
    cd backend
    tsc
    cd ..
}

# use node on backend built application
run_back_end(){
    node --use_strict ./backend/build/*.js &
}

# kills the node application
kill_back_end(){
    killall node
}

# prints the options for controlling recompilation
print_options_text(){
    echo -e "\n-----\nSee above for compilation details, below for runtime."
    echo -e "Refresh webpage to view most up-to-date.\n-----"
    echo -e "'f' to recompile front end,"
    echo -e "'b' to recompile back end,"
    echo -e "'e' to exit.\n-----" 
}

# -------------
# START PROGRAM
# ------------

run_npm_install
kill_back_end
compile_front_end
compile_back_end
run_back_end
#open a firefox window
sleep 1 && firefox http://localhost:3000 > /dev/null &

while true; do
    print_options_text
    #read in one character
    read -n 1 option
    #clear screen
    printf "\033c"
    case "$option" in
        f) compile_front_end
           ;;
        b) kill_back_end
           compile_back_end
           run_back_end
           cd ..
           ;;
        e) kill_back_end
           exit
           ;;
    esac
done
