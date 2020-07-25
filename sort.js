let i  = 0;
let w = 10;

function setup() {
    createCanvas(1000, 700);    //create a place for bars
    values = new Array((width / w));
    for (let i = 0; i < values.length; i ++){
        values[i] = random(width / 1.5);  //array of height bars
    }
    selectionSort(values, 0, values.length - 1); //calling of sorting algorithm
}


function draw() {
    background(51);

    for (let i = 0; i < values.length; i ++){//creates all of the bars
        stroke(0);
        fill(300);
        rect(i * w, height - values[i], w, values[i]);
    }
}


async function selectionSort(ar){//sorting function
    for (let i = 0; i < ar.length - 1; i++){
        let counter =  i;
        for (let j = i + 1; j < ar.length; j ++){
            if (ar[j] < ar[counter])
            counter = j;//swapping step
        }
        await swap(ar, i, counter);
    }
}

async function swap(ar, a, b){
    await sleep(100);
    let temp = ar[a];
    ar[a] = ar[b];
    ar[b] = temp;
}



function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));//slows down steps
}
