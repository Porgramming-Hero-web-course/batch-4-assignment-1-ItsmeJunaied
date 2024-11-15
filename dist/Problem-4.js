"use strict";
{
    const calculateShapeArea = (shape) => {
        if (shape.shape === 'circle') {
            return Math.PI * shape.radius ** 2;
        }
        else if (shape.shape === 'rectangle') {
            return shape.width * shape.height;
        }
        else {
            return 0;
        }
    };
    const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
    const rectangleArea = calculateShapeArea({
        shape: "rectangle",
        width: 4,
        height: 6,
    });
    console.log("circleArea", circleArea);
    console.log("rectangleArea", rectangleArea);
}
