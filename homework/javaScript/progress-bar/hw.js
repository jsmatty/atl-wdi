// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

var timerUI = {
    function(timerValue) {
        console.log(timerValue);
        timerVal -= 1;
        setTimeout(countDown, 1000);
    }
};
countDown();
};

var numericDisplay = document.getElementById('numeric-display');
numericDisplay.textContent = timerValue;
},
var seconds = math.floor((distance % 1000 * 60) / 1000);
drawProgressBars: function(timerValue) {

    var timeElapsed = 100 - timerValue;
    document.getElementsByClassName('progress-bar')[0].style.width = timeElapsed + '%';

    var progress = 100 - timerValue;
    var bars = document.getElementsByClassName('progress-bar');
    for (var i = 0; i < bars.length; i++) {
        bars[i].style.width = progress + '%';

    },

    drawLitFuses: function(timerValue) {
            // Your Code Here
        },
        drawCrawlers: function(timerValue) {
            // Your Code Here
        }
};