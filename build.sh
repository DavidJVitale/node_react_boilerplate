#!/bin/bash
# David Vitale, node_react_build_script
# Compile backend and front end, displays in firefox
# Prompts user to recompile either codebase

dir_of_script="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

#runs npm install on backend and frontend
run_npm_install(){
    cd $dir_of_script

    cd shared
    npm install

    cd ../frontend
    npm install

    cd ../backend
    npm install
}

# use webpack for front end compilation
compile_front_end(){
    cd $dir_of_script
    cd frontend
    webpack
}

# use tsc for back end compilation
compile_back_end(){
    cd $dir_of_script
    cd backend
    tsc
}

# use node on backend to host web server
run_back_end(){
    cd $dir_of_script
    node ./backend/build/*.js &
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
           echo "Node backend webserver killed. Goodbye!"
           exit
           ;;
    esac
done
