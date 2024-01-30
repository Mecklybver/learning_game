
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function playAudio(filePath) {
    // Create an audio context
    const audioContext = new AudioContext();

    // Create an audio buffer source node
    const audioSource = audioContext.createBufferSource();

    // Fetch the audio file
    fetch(filePath)
        .then(response => response.arrayBuffer())
        .then(data => audioContext.decodeAudioData(data))
        .then(buffer => {
            // Assign the buffer to the audio source
            audioSource.buffer = buffer;

            // Connect the source to the audio context's destination (speakers)
            audioSource.connect(audioContext.destination);

            // Play the audio
            audioSource.start();
        })
        .catch(error => console.error('Error loading audio:', error));
}




shuffleArray(questions);





let app = {
    start: function() {
        this.currPosition = 0;
        this.score = 0;
        bg();
        
        // get alternatives
        let alts = document.querySelectorAll('.alternative');

        alts.forEach((element, index) => {

            element.addEventListener('click', () => {
                // check correct answer
                this.checkAnswer(index);
            });
        });

        // refresh stats
        this.updateStats();

        // show first question
        this.showQuestion(questions[this.currPosition]);
    },
    
    showQuestion: function(q) {

        // show question title
        let titleDiv = document.getElementById('title');
        titleDiv.textContent = q.title;

        // show alternatives
        let alts = document.querySelectorAll('.alternative');
        
        alts.forEach(function(element, index){
            element.textContent = q.alternatives[index];        
        });
    },

    checkAnswer: function(userSelected) {

        let currQuestion = questions[this.currPosition];

        if(currQuestion.correctAnswer ==  userSelected) {
            // correct
            console.log('correct');
            this.score++;

            if (currQuestion.file) {
                playAudio(currQuestion.file);
            } else{
                console.log('no audio');
            }


            this.showResult(true);

              // refresh stats
        this.updateStats();

        // increase position
        this.increasePosition();

        // show next question
        this.showQuestion(questions[this.currPosition]);
        bg();

          
        }
        else {
            // not correct
            console.log('wrong');
            this.showResult(false);
            let random = Math.floor(Math.random() * 5) ;
            switch (random) {
                case 0:
                playAudio("mp3/no.mp3")
                    break;
                case 1:
                playAudio("mp3/sure.mp3")
                    break;
                case 2:
                playAudio("mp3/try.mp3")
                    break;
        
                case 3:
                playAudio("mp3/kidding.mp3")
                    break;
                case 4:
                playAudio("mp3/kidding.mp3")
                    break;
            
             
            }
            
        }

        // // refresh stats
        // this.updateStats();

        // // increase position
        // this.increasePosition();

        // // show next question
        // this.showQuestion(questions[this.currPosition]);
    },

    increasePosition: function() {
        this.currPosition++;

        if(this.currPosition == questions.length) {
            this.currPosition = 0;
        }
    },

    updateStats: function() {
        let scoreDiv = document.getElementById('score');
        scoreDiv.textContent = `Your score: ${this.score}`;
    },

    showResult: function(isCorrect) {
        let resultDiv = document.getElementById('result');
        let result = '';

        // checks
        if(isCorrect) {
            result = 'Correct Answer!';
        }
        else {
            // get the current question
            let currQuestion = questions[this.currPosition];

            // get correct answer (index)
            let correctAnswIndex = currQuestion.correctAnswer;

            // get correct answer (text)
            let correctAnswText = currQuestion.alternatives[correctAnswIndex];

            result = `Wrong! Correct answer: ${correctAnswText}`;
        }

        resultDiv.textContent = result;
    }


    
};

app.start();






