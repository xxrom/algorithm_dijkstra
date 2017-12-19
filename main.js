const pointsMap = [
  [0, 1, 4, 0, 0],
  [0, 0, 2, 7, 0],
  [0, 0, 0, 1, 4],
  [0, 0, 0, 0, 2],
  [0, 0, 0, 0, 0]
];

const distanse = [100, 100, 100, 100, 100];
const previousPoint = [-1, -1, -1, -1, -1];

const wasHere = [0, 0, 0, 0, 0];

const startPoint = 0;
const finishPoint = 4;

let end = false; // завершение алгоритма
let currentPoint = startPoint; // текущая точка
distanse[startPoint] = 0; // обнуляем для начальной точки
previousPoint[startPoint] = startPoint; // обнуляем для начальной точки
while (!end) {
  console.log(`currentPoint ${currentPoint}`);
  wasHere[currentPoint] = true; // отмечаем, что были тут
  for(let j = 0; j < pointsMap[currentPoint].length; j++) {
    console.log(pointsMap[currentPoint][j]);
    if (
      pointsMap[currentPoint][j] + distanse[currentPoint] < distanse[j]
      && pointsMap[currentPoint][j] !== 0
    ) {

      distanse[j] = pointsMap[currentPoint][j] + distanse[currentPoint];
      previousPoint[j] = currentPoint;
    }
  }

  currentPoint = -1; // обнуляем
  let min = 100;
  for(let j = 0; j < distanse.length; j++) {
    if (!wasHere[j] && distanse[j] < min) {
      min = distanse[j];
      currentPoint = j;
    }
  }

  if (currentPoint === -1) {
    end = true; // если не нашли следующей вершины, то конец
  }
}

for(let i = 0; i < pointsMap.length; i++) {
  console.log(pointsMap[i].join(', '));
}

console.log(`distanse: ${distanse.join(', ')}`);
console.log(`previousPoints: ${previousPoint.join(', ')}`);
