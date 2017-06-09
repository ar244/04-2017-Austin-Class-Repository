
let w3 = "https://www.w3schools.com/jsref/jsref_map.asp";
let blog = "https://www.discovermeteor.com/blog/understanding-javascript-map/";


function print(text) {
    console.log(text);
}

function indentText(text) {
    lines = text.split('\n');
    let indented_lines = [];
    for (let line of lines) {
        indented_lines.push('    ' + line);
    };
    let indented_text = indented_lines.join('\n');
    return indented_text
}

// https://stackoverflow.com/questions/16623852/how-to-pause-javascript-code-excution-for-2-seconds
function sleep(seconds=1) {
    let milliseconds = seconds * 1000
    var currentTime = new Date().getTime();
    while (currentTime + milliseconds >= new Date().getTime()) { } // do nothing but run this while loop to kill time
}

// https://stackoverflow.com/questions/44450783/setinterval-usage-causes-strange-infinite-loop/44450861#44450861
function delayedPrint(text, seconds=1.5) {
    print(text);
    sleep(seconds);
}

function runDelay(delay) {
    if (delay) {
        sleep(delay);
    }
}

function runExplanationSeries(
    description,
    code_to_run,
    delay_after_description=3,
    delay_after_showing_code=4,
    delay_after_running_code=1.5
) {
    print("\n");
    print(description);
    print("\n");
    runDelay(delay_after_description);
    print(indentText(code_to_run));
    runDelay(delay_after_showing_code);
    print("\n");
    eval(code_to_run);
    print("\n");
    runDelay(delay_after_running_code);
}


var list_code = "var list = [1, 2, 3, 4, 5];"
// eval(list_code);

var list = [1, 2, 3, 4, 5];

let literal = "var house_pets = ['cat', 'dog', 'zebra'];\n\n\
house_pets.map(function(beast) {\n\
    console.log(beast);\n\
});"

let literal_answer_precursor = "\n\nliterally becomes:\n\n"

let literal_answer = "function('cat') {\n\
    console.log('cat');\n\
}\n\n\
function('dog') {\n\
    console.log('dog');\n\
}\n\n\
function('zebra') {\n\
    console.log('zebra');\n\
}\n\n\
"

let double_items = "var list = [1, 2, 3, 4, 5];\n\n\
let doubled_list = list.map(function(number) {\n\
    let doubled = number * 2;\n\
    delayedPrint(doubled);\n\
});"

let iterate_over_items = "list.map(function(this_list_item) {\n\
    delayedPrint(this_list_item);\n\
});"

let map_takes_index = "var cities = ['Boston', 'Chicago', 'LA']\n\n\
cities.map(function(city, index) {\n\
    delayedPrint(index);\n\
});"



sleep(0.5);
delayedPrint("\nMap does something once for each item in an array.\n\n\
The 'something' it does is determined by the function you pass it.", 9);

delayedPrint("\n\nThus, a map of:\n\n", 2.2);

delayedPrint(indentText(literal), 7);

delayedPrint(literal_answer_precursor, 2);

delayedPrint(indentText(literal_answer), 10);

runExplanationSeries(
    "In the function below, for each item in the array, map doubles it:",
    double_items,
    3,
    16
);

delayedPrint("Map can be used to just do something once using each item, but it's often used to make a new array from the old one.\n\nSo based on the previous example:", 10);
delayedPrint("\n    doubled_list == [2, 4, 6, 8, 10]", 5);

runExplanationSeries(
    "Map can take 1 argument, which is each item in the array:",
    iterate_over_items
);

runExplanationSeries(
    "Map can also take the current index as the 2nd argument:",
    map_takes_index
);

var array_arg_descripton = "Finally, map can take the original array being iterated over as the 3rd argument:";

let map_also_takes_the_original_array = "var cities = ['Boston', 'Chicago', 'LA']\n\n\
cities.map(function(city, index, array) {\n\
    delayedPrint(array);\n\
});"

runExplanationSeries(array_arg_descripton, map_also_takes_the_original_array);

print("See:\n\n    " + w3 + "\n\nand\n\n    " + blog + "\n\nfor more info")
