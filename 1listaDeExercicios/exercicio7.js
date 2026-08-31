function bhaskara (ax2, bx, c) { 
    
    delta = bx**2 - (4*ax2*c)
    
    if (delta < 0) {
        console.log("Delta é negativo!")
    } else {
        let x1, x2 
        x1 = (-bx + Math.sqrt(delta)) / (2* ax2)
        x2 = (-bx - Math.sqrt(delta)) / (2* ax2)
        return [x1,x2]
    }
}

console.log(bhaskara(1, 12, -13))