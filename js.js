$(document).ready(function()
{
    // Global Variables
    var strictMode = 'Off';
    var computerChoices = ['r', 'g', 'b', 'y'];
    var patternComputer = "";
    var patternP1 = "";
    var counter = '0';
    var patternCounter = 0;

    function computerPattern()
    {
        patternCounter = 0;
        var compLoop = setInterval(function()
        {
            fader2();
        }, 1000);


        function fader2()
        {

            $('#' + patternComputer[patternCounter]).fadeTo(500, 0.1);
            $('#' + patternComputer[patternCounter]).fadeTo(500, 1);

            $('#' + patternComputer[patternCounter] + 'sound')[0].play();
            if (patternCounter === patternComputer.length - 1)
            {
                clearInterval(compLoop);
            }
            else
            {

                patternCounter++;
            }

        }
    }

    function computerPatternAdd()
    {
        var computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];

        patternCounter = 0;
        patternComputer = patternComputer + computerChoice;
        var compLoop = setInterval(function()
        {
            fader2();
        }, 1000);


        function fader2()
        {

            $('#' + patternComputer[patternCounter]).fadeTo(500, 0.1);
            $('#' + patternComputer[patternCounter]).fadeTo(500, 1);

            $('#' + patternComputer[patternCounter] + 'sound')[0].play();
            if (patternCounter === patternComputer.length - 1)
            {
                clearInterval(compLoop);
            }
            else
            {

                patternCounter++;
            }

        }

    }


    function checkPatternVsComputer()
    {
        if (patternP1 === patternComputer)
        {
            if (patternP1.split('').length === 5)
            {
                $('#p1-vs-computer').text("You Won! Play Again?");
                patternComputer = '';
                patternP1 = '';
                counter = 0;

                $('.counter').text('Correct: -');
                // debugInfo();
            }
            else
            {
                $('#p1-vs-computer').text("Good job!");
                computerPatternAdd();

                patternP1 = '';
                counter++;
                $('.counter').text('Correct: ' + counter);
                // debugInfo();
            }
        }
        else if (patternP1 === patternComputer.substring(0, patternP1.length))
        {

            $('#p1-vs-computer').text("Keep Going!");
        }
        else
        {
            if (strictMode === 'On')
            {

                $('#p1-vs-computer').text("Sorry, you didn't win.  Starting over...");
                patternComputer = '';
                patternP1 = '';
                counter = 0;
                $('.counter').text('Correct: -');
            }
            else
            {

                $('#p1-vs-computer').text("Try again, you were close.");
                patternP1 = patternP1.substring(0, patternP1.length - 1);
                computerPattern();
                patternP1 = '';
            }
        }
    }

    function fader(x, y)
    {
        var fadeTimer = y;

        $('#' + x).fadeTo(fadeTimer, 0.1);
        $('#' + x).fadeTo(fadeTimer, 1);

    }

    // Interactions with DOM
    $('#r').click(function()
    {
        patternP1 = patternP1 + 'r';

        fader('r', 350);
        $('#rsound')[0].play();
        checkPatternVsComputer();
        // Debugging
        debugInfo();
    });
    $('#g').click(function()
    {
        patternP1 = patternP1 + 'g';
        fader('g', 350);
        $('#gsound')[0].play();
        checkPatternVsComputer();
        // Debugging
        debugInfo();
    });
    $('#b').click(function()
    {
        patternP1 = patternP1 + 'b';
        fader('b', 350);

        $('#bsound')[0].play();
        checkPatternVsComputer();
        // Debugging
        debugInfo();
    });
    $('#y').click(function()
    {
        patternP1 = patternP1 + 'y';

        $('#ysound')[0].play();
        fader('y', 350);
        checkPatternVsComputer();
        // Debugging
        debugInfo();
    });
    $('#start-game-btn').click(function()
    {
        patternP1 = '';
        patternComputer = '';
        computerPatternAdd();

        // Debugging
        debugInfo();
    });
    $('#strict-mode-btn').click(function()
    {
        // Changes Strict Mode setting to On or Off
        if (strictMode === 'Off')
        {
            strictMode = 'On';
            patternComputer = '';
            $('#strict-mode-status').text("Strict Mode is: " + strictMode);
        }
        else
        {
            strictMode = 'Off';
            $('#strict-mode-status').text("Strict Mode is: " + strictMode);
        }
        patternP1 = '';
        patternComputer = '';
    });

    // App Initialization
    $('#strict-mode-status').text("Strict Mode is: " + strictMode);

    //Debugging
    function debugInfo()
    {
        // $('#user-selections').text(patternP1);
        // $('#comp-selections').text(patternComputer);
    }

});
