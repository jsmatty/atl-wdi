// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

/// Data & Core Business Logic ///
const Stopwatch = {
    tickClock: function() {
        if (Stopwatch.isRunning) {
            setTimeout(Stopwatch.tickClock, 10); // trigger next clock tick
            Stopwatch.advanceTenMillisecs();
            AppController.handleClockTick();
        }
    },
    isRunning: false,
    mins: 0,
    secs: 0,
    millisecs: 0,
    laps: [],
    // DO NOT EDIT ABOVE THIS LINE
    advanceTenMillisecs: function() {
        // Your Code Here
        this.millisecs += 10;
        if (this.millisecs >= 1000) {
            this.millisecs -= 1000;
            this.secs += 1;
        }
    },
    reset: function() {
        this.minutes = 0;
        this.secs = 0;
        this.millisecs = 0;
    },
    start: function() {
        if (this.isRunning)()
        this.isRunning = true;
        this.tickClock();
    },
    stop: function() {
        // Your Code Here
    },
    lap: function() {
        // Your Code Here
    }
};
var firstStopwatch = new Stopwatch();
var secondStopwatch = new Stopwatch();
var secondStopwatch = Stopwatch;

secondStopwatch.reset();

function reset(stopwatch)
/// User Interface ///
const ViewEngine = {
    updateTimeDisplay: function(mins, secs, millisecs) {
        // Your Code Here
    },
    updateLapListDisplay: function(laps) {
        // Your Code Here
    },
};

const ViewHelpers = {
    zeroFill: function(number, length) {
        // Your Code Here
    },
};

/// Top-Level Application Code ///
const AppController = {
    handleClockTick: function() {
        // Your Code Here
        var mins = Stopwatch.mins;
        var secs = Stopwatch.secs;

    },
    handleClickStart: function() {

    },
    handleClickStopReset: function() {
        // Your Code Here
    },
    handleClickLap: function() {
        // Your Code Here
    }
};

window.onload = function() {
        $('#start').on('click', function(event) {
                    event.stopPropagation();
                    ();

                    AppController.handleClickStart
                }