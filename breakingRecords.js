/*Maria plays college basketball and wants to go pro. Each season she maintains a record of her play. She tabulates the number of times she breaks her season record for most points and least points in a game. Points scored in the first game establish her record for the season, and she begins counting from there.

For example, assume her scores for the season are represented in the array . Scores are in the same order as the games played. She would tabulate her results as follows:

                                 Count
Game  Score  Minimum  Maximum   Min Max
 0      12     12       12       0   0
 1      24     12       24       0   1
 2      10     10       24       1   1
 3      24     10       24       1   1
Given Maria's scores for a season, find and print the number of times she breaks her records for most and least points scored during the season.
*/


function breakingRecords(scores) {
    var games = scores.length;
    var min = [scores[0]];
    var max = [scores[0]];
//     Loop Checks scores and defines if High or low.
    for (var i = 1; i < games; i++){
        if (scores[i] >= max[max.length-1]){
            max.push(scores[i]);
            min.push(min[min.length-1]);
        } else if (scores[i] <= min[min.length-1]){
            min.push(scores[i]);
            max.push(max[max.length-1]);
        } else {
            max.push(max[max.length-1]);
            min.push(min[min.length-1]);
        }
    }

    var result = [checkChange(max), checkChange(min)]
    return result

}

function checkChange(x){
    var count = 0
    for(var i = 1; i < x.length; i++){
        if(x[i] !== x[i-1]){
            count += 1;
        }
    }
    return count 
}
