interface Mountain {
  name: string;
  height: number;
}

let mountains: Mountain[] = [
  { name: "Kilimanjaro", height: 19341 },
  { name: "Everest", height: 29029 },
  { name: 'Denali', height: 20310}
];

function findNameOfTallestMountain(array: Mountain[]): string {
    let tallest: Mountain = mountains[0];
    if (array.length === 0) {
        return "";
    }
    for (let mountain of mountains) {
        if (mountain.height > tallest.height) {
            tallest = mountain;
        } 
    }
    return tallest.name;
}
