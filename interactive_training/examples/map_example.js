
// https://www.w3schools.com/jsref/jsref_map.asp
// https://www.discovermeteor.com/blog/understanding-javascript-map/

var list_code = "var list = [1, 2, 3, 4, 5];"
eval(list_code);

function print(text) {
    console.log(text);
}

// https://stackoverflow.com/questions/16623852/how-to-pause-javascript-code-excution-for-2-seconds
function sleep(milliseconds=1000) {
    var currentTime = new Date().getTime();
    while (currentTime + milliseconds >= new Date().getTime()) { } // do nothing but run this while loop to kill time
}

// https://stackoverflow.com/questions/44450783/setinterval-usage-causes-strange-infinite-loop/44450861#44450861
function delayedPrint(text, milliseconds=1000) {
    print(text);
    sleep(milliseconds);
}

function runDelay(delay) {
    if (delay) {
        sleep(delay);
    }
}

function runExplanationSeries(description, code_to_run, delay_after_description=5000,
                              delay_after_showing_code=15000, delay_after_running_code=5000) {
    print("\n");
    print(description);
    print("\n");
    runDelay(delay_after_description);
    print(code_to_run);
    runDelay(delay_after_showing_code);
    eval(code_to_run);
    runDelay(delay_after_running_code);
}


let double_items = "var list = [1, 2, 3, 4, 5];\n\n\
list.map(function(number) {\n\
    let doubled = number * 2;\n\
    delayedPrint(doubled);\n\
});\n"

let iterate_over_items = "list.map(function(this_list_item) {\n\
    delayedPrint(this_list_item);\n\
});\n"

let map_takes_index = "var cities = ['Boston', 'Chicago', 'LA']\n\n\
cities.map(function(city, index) {\n\
    delayedPrint(index);\n\
});\n"



sleep(500);
delayedPrint("\nMap does something once for each item in an array.\n\
The 'something' it does is determined by the function you pass it.", 7600);

runExplanationSeries(
    "\nIn the function below, for each item in the array, map doubles it:\n",
    double_items
);

runExplanationSeries(
    "\nMap can take 1 argument, which is each item in the array:\n",
    iterate_over_items
);

runExplanationSeries(
    "\nMap can also take the current index as the 2nd argument:\n",
    map_takes_index
);

var array_arg_descripton = "Map also can take the original array being iterated over as the 3rd argument:";

let map_also_takes_the_original_array = "var cities = ['Boston', 'Chicago', 'LA']\n\n\
cities.map(function(city, index, array) {\n\
    delayedPrint(array, 1500);\n\
});\n"

runExplanationSeries(array_arg_descripton, map_also_takes_the_original_array);
// print(map_also_takes_the_original_array);
// sleep(6000);
// eval(map_also_takes_the_original_array);
// sleep(3000);
