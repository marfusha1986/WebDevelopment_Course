var loveScore = Math.random();
loveScore = Math.floor(loveScore * 100) + 1;
if(loveScore > 70) {
    console.log('You love score is: ' + loveScore + ' You love each other like Kanye loves Kanye');
}
 if(loveScore > 30 && loveScore <= 70){
     console.log('Your love score is ' + loveScore + '%');
}
 if (loveScore <= 30){
    console.log('You love score is: ' + loveScore + '%' + ' You go together like oil and water.');
}
