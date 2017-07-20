var counterFromJQuery = $('#counter');
var counterFromJQuery = document.getElementById('counter');
var counterFromJQuery = $('#counter');

var data = $('#counter').data().counterIndex;

console.log(data);

var CounterCollection = {
    counters: [{
            currentValue: 0,
            counterName: 'Errors'
        },
        {
            currentValue: 0,
            counterName: 'Warning'
        }
    ],
    addOneToCounterValue: function(counterIndex) {
        counters[counterIndex].currentValue *= 1;
        //OPTION 1: find all divs with 'counter' class
        // loop through until you find fiv with counterIndex of the one above
        // update the span with the current value to equal the new current value

        //OPTION 2:


    }
}

// find the counter container //put $ in front b/c it is a JQuery object//
var $counterContainer = $counterContainer('#counter-container');

//loop through the user's counters
for (var i = 0; i < CounterCollection.counters.length; i++) {

    // get the current counter object
    var counter = CounterCollection.counters[i];

    //for each counter, create a div
    var $newCounterDiv = $('<div>')
        //the div should have a class of counter
    $newCounterDiv.addClass('counter');
    //the div should have a data-counter-index of
    // the current array index
    $newCounterDiv.data('counterIndex', i)
        //the div should have a header<h1> with the counter name
    var $newCounterHeader = $('<h1>');
    $newCounterHeader.html(counter.counterName);
    $newCounterHeader.attr('id', 'counter-name');
    $newCounterDiv.append($newCounterHeader);


    //the div should have a span containing the currentValue
    var $currentValueSpan = $('<span')
    $currentValueSpan.html(counter.currentValue);
    $newCounterDiv.append(currentValueSpan);


    // the div should have a button with an id of 'add-one'
    var $plueOneButton = $('<button>');
    $plueOneButton.html('+1');
    $plueOneButton.attr('id', 'add-one');
    $newCounterDiv.append($plueOneButton);

    //add button to remove the counter
    var $removeButton = $('<button>');
    $removeButton.htnl('Remove');
    $removeButton.attr('id', 'remove-counter');
    $newCounterDiv.append($removeButton);

    $newCounterDiv.on('click', function(event) {
            event.stopPropagation();

            if (event.target.id === 'remove-counter') {
                $(event.currentTarget).remove();
            } else if (event.target.id === 'add-one') {
                //add one to the counter
            }
        }

    })

// the div should be append to '#counter-container'
$counterContainer.append($newCounterDiv);
}



{
    /*<div id="counter" data-counter-index="0">
            <h1 id="counter-name">Errors</h1
            <span id="current-count">0</span>
            <button id="add-one">+1</button>
        </div>*/
}

//find the button
var button = $('#add-one');

//add an event listener to the button
button.on('click', function());



//then, inside the listener callback;

// find the span to get the current value
var currentCount = $('#current-count').text();
var currentValueAsInt = parseInt(currentValue);

// add one to the current span value
currentValueAsInt += 1;

// change the span to the new value
$('current-count').html(currentValueAsInt);
//same as ^//document.getElementById('current-count').innerHTML = currentValueAsInt;//




// find the form submit button
var $newCounterButton = $('#add-new-counter');

// add event listener to the button
$newCounterButton.on('click', function() {

    // inside of the event listener:

    // stop the page from refreshing
    event.preventDefault();
    // find the value of new counter name
    var newCounterName = $('#new-counter-name').val(); //without (.val) gives you back an object //(.val)gives you <span> tag value.
    // find the value of the new counter start value
    var newCounterStartValue = $('#new-counter-start-value').val()
        // alert both
    alert('new Counter Name: ' + newCounterName);

})