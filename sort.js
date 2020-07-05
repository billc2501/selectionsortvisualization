let i  = 0;
let w = 10;

function setup() {
    createCanvas(700, 200);
    values = new Array(floor(width / w));
    for (let i = 0; i < values.length; i ++){
        values[i] = random(width / 3.5);
    }
    selectionSort(values, 0, values.length - 1);
}

async function selectionSort(ar){
    for (let i = 0; i < ar.length - 1; i++){
        let counter =  i;
        for (let j = i + 1; j < ar.length; j ++){
            if (ar[j] < ar[counter])
            counter = j;
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

function draw() {
    background(51);

    for (let i = 0; i < values.length; i ++){
        stroke(0);
        fill(255);
        rect(i * w, height - values[i], w, values[i]);
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}