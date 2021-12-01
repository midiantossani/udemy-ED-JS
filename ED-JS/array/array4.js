// Arrays bidimensionais:

var avgTempWeek = []

var avgTempWeek1 = [31.3,25.2,34,25.5,31.3,22,30]
var avgTempWeek2 = [29,31,34.5,39,19,17.6,12]

avgTempWeek[0] = avgTempWeek1
avgTempWeek[1] = avgTempWeek2

//console.log(avgTempWeek[1][5])
 
//iterando todos os valores

for(var i = 0; i < avgTempWeek.length; i++){
    for(var j = 0; j < avgTempWeek[i].length; j++){
        //console.log(avgTempWeek[i][j])
    }
}

//Arrays tridimensionais:

var month = []
var firstWeeks = []
var lastWeeks = []

var avgTempWeek3 = [31,27.2,14,35.5,13.3,9,10]
var avgTempWeek4 = [29.4,11,14.5,29.7,6,7.6,32]

firstWeeks = [avgTempWeek1, avgTempWeek2]
lastWeeks = [avgTempWeek3, avgTempWeek4]

month = [firstWeeks, lastWeeks]

//console.log(month[0][1][2])

// mostrar todos os valores:

for(var x = 0; x < month.length; x++){
    for(var y = 0; y < month[x].length; y++){
        for(z = 0; z < month[x][y].length; z++){
            console.log(month[x][y][z])
        }
    }
}